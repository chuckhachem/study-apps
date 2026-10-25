#!/usr/bin/env python3
"""Keep the GitHub sources and the Claude artifact of CelestLUBANKM1 in step.

The Claude artifact is published from dist/claude-artifact.html. When read back,
the artifact service returns that page wrapped in a fixed skeleton; this script
strips it before comparing. .sync/state.json records the hash of the page both
sides held at the last sync, which tells us which side changed since.

  python3 tools/sync.py status LIVE.html   say which way to sync
  python3 tools/sync.py pull LIVE.html     copy the Claude version into the sources
  python3 tools/sync.py mark               record the current build as synced

status prints one line starting with IN_SYNC, PUBLISH_TO_CLAUDE,
PULL_FROM_CLAUDE or CONFLICT. Run tools/build.py first so dist/ is current.
"""
import hashlib, json, os, re, subprocess, sys, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATE = os.path.join(ROOT, '.sync', 'state.json')
DIST = os.path.join(ROOT, 'dist', 'claude-artifact.html')
QB = re.compile(r'(<script type="application/json" id="qb">)(.*?)(</script>)', re.S)


def sha(text):
    return hashlib.sha256(text.encode('utf-8')).hexdigest()


def unwrap(live):
    """Return the page as published, without the artifact service's skeleton."""
    m = re.match(r'\s*<!doctype html><html><head>.*?</head><body>\n', live, re.S | re.I)
    if m:
        live = live[m.end():]
        if live.endswith('\n</body></html>'):
            live = live[:-len('\n</body></html>')]
    return live


def state():
    try:
        return json.load(open(STATE))
    except (OSError, ValueError):
        return {}


def mark():
    built = open(DIST, encoding='utf-8').read()
    os.makedirs(os.path.dirname(STATE), exist_ok=True)
    json.dump({'synced': sha(built), 'at': datetime.datetime.now(datetime.timezone.utc).isoformat(timespec='seconds')},
              open(STATE, 'w'), indent=2)
    open(STATE, 'a').write('\n')
    print('Marked synced:', sha(built)[:12])


def status(live_path):
    live = unwrap(open(live_path, encoding='utf-8').read())
    built = open(DIST, encoding='utf-8').read()
    a, g, s = sha(live), sha(built), state().get('synced')
    if a == g:
        print('IN_SYNC' + ('' if s == g else ' (state file out of date: run mark)'))
    elif s == a:
        print('PUBLISH_TO_CLAUDE: GitHub changed since the last sync; publish dist/claude-artifact.html to the artifact')
    elif s == g:
        print('PULL_FROM_CLAUDE: the Claude artifact changed since the last sync; run pull, build, commit and push')
    else:
        print('CONFLICT: both the Claude artifact and GitHub changed since the last sync; change nothing and report it')


def pull(live_path):
    live = unwrap(open(live_path, encoding='utf-8').read())
    m = QB.search(live)
    if not m:
        sys.exit('The Claude page has no question data block; not pulling.')
    bank = json.loads(m.group(2))
    template = live[:m.start(2)] + '__DATA__' + live[m.end(2):]
    open(os.path.join(ROOT, 'src', 'app.html'), 'w', encoding='utf-8').write(template)
    qdir = os.path.join(ROOT, 'questions')
    for key, items in bank.items():
        open(os.path.join(qdir, key + '.json'), 'w', encoding='utf-8').write(json.dumps(items, ensure_ascii=False, indent=2) + '\n')
    open(os.path.join(qdir, 'order.json'), 'w').write(json.dumps(list(bank), indent=2) + '\n')
    r = subprocess.run([sys.executable, os.path.join(ROOT, 'tools', 'build.py')])
    if r.returncode:
        sys.exit('Pulled the Claude version, but it fails the checks above. Do not commit; report the errors.')
    built = open(DIST, encoding='utf-8').read()
    if built == live:
        print('Pulled. The rebuilt page is identical to the Claude version.')
    else:
        print('Pulled. The rebuilt page differs only in formatting from the Claude version; publish dist/claude-artifact.html too.')


if __name__ == '__main__':
    cmd = sys.argv[1] if len(sys.argv) > 1 else ''
    if cmd == 'status' and len(sys.argv) == 3:
        status(sys.argv[2])
    elif cmd == 'pull' and len(sys.argv) == 3:
        pull(sys.argv[2])
    elif cmd == 'mark':
        mark()
    else:
        sys.exit(__doc__)
