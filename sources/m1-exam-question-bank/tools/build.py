#!/usr/bin/env python3
"""Build CelestLUBANKM1 from its sources.

Reads src/app.html and questions/*.json, checks every question, and writes:
  _site/index.html            the website served by GitHub Pages
  dist/claude-artifact.html   the page published as the Claude artifact

Usage:
  python3 tools/build.py          check and build
  python3 tools/build.py --lock   also record the current question counts
                                  (run after adding questions)
Exits with an error, and builds nothing, if any check fails.
"""
import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
Q = os.path.join(ROOT, 'questions')
FIELDS = {'t', 'd', 'q', 'o', 'e', 'r', 'n', 'w', 'k', 'h'}
REQUIRED = ['t', 'd', 'q', 'o', 'e', 'r']
FAVICON = ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' "
           "fill='%230d6b73'/%3E%3Ctext x='16' y='22' font-family='Georgia,serif' font-size='17' font-weight='700' fill='white' "
           "text-anchor='middle'%3EC%3C/text%3E%3C/svg%3E")


def load_bank():
    errors = []
    order = json.load(open(os.path.join(Q, 'order.json')))
    locked = json.load(open(os.path.join(Q, 'locked-counts.json')))
    if len(set(order)) != len(order):
        errors.append('questions/order.json lists a section twice')
    for key in locked:
        if key not in order:
            errors.append(f'section "{key}" was removed from questions/order.json; removing a section breaks saved progress')
    bank = {}
    for key in order:
        path = os.path.join(Q, key + '.json')
        if not os.path.exists(path):
            errors.append(f'questions/{key}.json is listed in order.json but does not exist')
            continue
        try:
            items = json.load(open(path, encoding='utf-8'))
        except ValueError as ex:
            errors.append(f'questions/{key}.json is not valid JSON: {ex}')
            continue
        if not isinstance(items, list):
            errors.append(f'questions/{key}.json must be a list of questions')
            continue
        if key in locked and len(items) < locked[key]:
            errors.append(f'questions/{key}.json has {len(items)} questions but had {locked[key]}; never delete questions '
                          '(saved progress is tied to each position). Fix the question in place instead.')
        stems = set()
        for i, q in enumerate(items):
            where = f'questions/{key}.json, question {i} (id {key}-{i})'
            if not isinstance(q, dict):
                errors.append(f'{where}: must be an object'); continue
            for f in REQUIRED:
                if f not in q:
                    errors.append(f'{where}: missing "{f}"')
            extra = set(q) - FIELDS
            if extra:
                errors.append(f'{where}: unknown field(s) {sorted(extra)}')
            for f in ('t', 'q', 'e', 'r', 'n', 'k', 'h'):
                if f in q and (not isinstance(q[f], str) or (f != 'n' and not q[f].strip())):
                    errors.append(f'{where}: "{f}" must be non-empty text')
            w = q.get('w')
            if w is not None and not (isinstance(w, list) and len(w) == 3 and all(isinstance(x, str) and x.strip() for x in w)):
                errors.append(f'{where}: "w" must be 3 non-empty texts, one for each wrong option in order')
            if q.get('d') not in (1, 2, 3):
                errors.append(f'{where}: "d" (difficulty) must be 1, 2 or 3')
            o = q.get('o')
            if not (isinstance(o, list) and len(o) == 4 and all(isinstance(x, str) and x.strip() for x in o)):
                errors.append(f'{where}: "o" must be exactly 4 non-empty options, correct answer first')
            elif len({x.strip().lower() for x in o}) != 4:
                errors.append(f'{where}: two options are identical')
            stem = (q.get('q') or '').strip().lower()
            if stem in stems:
                errors.append(f'{where}: duplicate question text within this section')
            stems.add(stem)
        bank[key] = items
    return order, bank, errors


def build(lock=False):
    order, bank, errors = load_bank()
    tpl = open(os.path.join(ROOT, 'src', 'app.html'), encoding='utf-8').read()
    if tpl.count('__DATA__') != 1:
        errors.append('src/app.html must contain the __DATA__ placeholder exactly once')
    if 'cpqb-v1' not in tpl:
        errors.append('src/app.html no longer uses the storage name cpqb-v1; renaming it erases everyone\'s progress')
    if errors:
        print('Build failed:', file=sys.stderr)
        for e in errors:
            print('  - ' + e, file=sys.stderr)
        sys.exit(1)

    data = json.dumps(bank, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')
    page = tpl.replace('__DATA__', data)

    os.makedirs(os.path.join(ROOT, 'dist'), exist_ok=True)
    open(os.path.join(ROOT, 'dist', 'claude-artifact.html'), 'w', encoding='utf-8').write(page)

    head, body = page.split('</style>', 1)
    head = head.replace('<meta name="claude:viewport-fit-sides" content="cover">\n', '')
    site = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
            '<meta name="description" content="CelestLUBANKM1: practice questions for the Lebanese University M1 Clinical Psychology courses, with shuffled practice and spaced repetition.">\n'
            '<meta name="theme-color" content="#eef2f4" media="(prefers-color-scheme: light)">\n'
            '<meta name="theme-color" content="#0d1419" media="(prefers-color-scheme: dark)">\n'
            '<link rel="icon" href="' + FAVICON + '">\n'
            + head + '\nhtml,body{margin:0}\n</style>\n</head>\n<body>\n' + body.lstrip('\n') + '\n</body>\n</html>\n')
    os.makedirs(os.path.join(ROOT, '_site'), exist_ok=True)
    open(os.path.join(ROOT, '_site', 'index.html'), 'w', encoding='utf-8').write(site)
    open(os.path.join(ROOT, '_site', '.nojekyll'), 'w').write('')

    if lock:
        counts = {k: len(v) for k, v in bank.items()}
        open(os.path.join(Q, 'locked-counts.json'), 'w').write(json.dumps(counts, indent=2) + '\n')
    total = sum(len(v) for v in bank.values())
    print(f'Built {total} questions in {len(order)} sections -> _site/index.html, dist/claude-artifact.html')


if __name__ == '__main__':
    build(lock='--lock' in sys.argv)
