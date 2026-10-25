import sys, json
sys.path.insert(0, '.')
import playbook_phases as P, playbook_extra as X
src, out = sys.argv[1], sys.argv[2]
s = open(src).read()
data = {"phases": P.PHASES, "signs": X.SIGNS, "golden": X.GOLDEN, "myths": X.MYTHS}
pb = "var IVXPB=" + json.dumps(data, ensure_ascii=False).replace("</", "<\\/") + ";"
ui = open("playbook_ui.js").read()
def rep(old, new):
    global s
    n = s.count(old)
    if n != 1: raise SystemExit(f"expected 1 of {old[:60]!r}, found {n}")
    s = s.replace(old, new)
rep('var IVXA={', pb + 'var IVXA={')
rep('function ee({areaId:e,title:o,onDrill:n,extra:a}){', ui + '\nfunction ee({areaId:e,title:o,onDrill:n,extra:a}){')
rep('n==="interview"&&React.createElement(ee,{areaId:"interview",title:"Master Interviewing",onDrill:d})',
    'n==="interview"&&React.createElement(IVXS,{onDrill:d})')
open(out, "w").write(s)
print("patched", len(s))
