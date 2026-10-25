import glob, importlib.util, json, random, sys, os, hashlib

HERE = os.path.dirname(os.path.abspath(__file__))
DOMAINS = [
 {"id":"ivx_architecture","label":"Interview Architecture","short":"Architecture"},
 {"id":"ivx_interpersonal","label":"Sullivan, Havens & the Interpersonal School","short":"Interpersonal"},
 {"id":"ivx_phenomenology","label":"Phenomenological Interviewing","short":"Phenomenology"},
 {"id":"ivx_structural","label":"Structural & Personality Interviewing","short":"Structural"},
 {"id":"ivx_dynamic","label":"Psychodynamic Assessment Interviews","short":"Dynamic"},
 {"id":"ivx_character","label":"Interviewing by Character Type","short":"Character"},
 {"id":"ivx_language","label":"Micro-linguistics of Questions","short":"Language"},
 {"id":"ivx_mi","label":"Motivational Interviewing","short":"MI"},
 {"id":"ivx_systemic","label":"Systemic & Solution-Focused Questioning","short":"Systemic"},
 {"id":"ivx_credibility","label":"Credibility, Malingering & Memory","short":"Credibility"},
 {"id":"ivx_contexts","label":"Special Populations & Contexts","short":"Contexts"},
 {"id":"ivx_risk","label":"Advanced Risk Interviewing","short":"Risk+"},
 {"id":"ivx_mind","label":"The Interviewer’s Own Mind","short":"Own mind"},
 {"id":"ivx_mse","label":"Advanced MSE Elicitation","short":"MSE+"},
 {"id":"ivx_process","label":"Interview Process Research","short":"Process"},
 {"id":"ivx_nonverbal","label":"Nonverbal, Voice & Synchrony","short":"Nonverbal"},
 {"id":"ivx_medcomm","label":"Consultation Communication Models","short":"Consult"},
 {"id":"ivx_schools","label":"Interview Moves from Other Schools","short":"Schools"},
 {"id":"ivx_synthesis","label":"Integrative Mastery Cases","short":"Synthesis"},
 {"id":"ivx_moments","label":"Moment by Moment: What to Say Next","short":"Moments"},
 {"id":"ivx_seeing","label":"Seeing What Others Miss","short":"Seeing"},
]
ids = {d["id"] for d in DOMAINS}

items = []
for f in sorted(glob.glob(os.path.join(HERE, "b[0-9]*.py"))):
    spec = importlib.util.spec_from_file_location(os.path.basename(f)[:-3], f)
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
    for it in m.ITEMS:
        it["_file"] = os.path.basename(f)
        items.append(it)

import overrides
for it in items:
    if it["c"] in overrides.A: it["a"] = overrides.A[it["c"]]
    if it["c"] in overrides.W:
        it["w"] = [(t, e) for t, (_, e) in zip(overrides.W[it["c"]], it["w"])]

qs, hooks, errs, seen = [], {}, [], set()
for it in items:
    c = it["c"]
    if c in seen: errs.append("dup concept " + c)
    seen.add(c)
    if it["d"] not in ids: errs.append("bad domain " + it["d"] + " " + c)
    if len(it["w"]) != 3: errs.append("need 3 distractors " + c)
    opts = [(it["a"], "Correct — " + it["ae"])] + [(t, e) for t, e in it["w"]]
    texts = [o[0] for o in opts]
    if len(set(texts)) != 4: errs.append("dup options " + c)
    for t in texts + [it["q"], it["x"], it["ae"]] + [e for _, e in it["w"]]:
        if '"' in t: errs.append('straight quote in ' + c + ': ' + t[:60])
    rnd = random.Random(int(hashlib.md5(c.encode()).hexdigest(), 16))
    order = list(range(4)); rnd.shuffle(order)
    options = [opts[i][0] for i in order]
    expl = [opts[i][1] for i in order]
    q = {"type":"mcq","domain":it["d"],"concept":c,"question":it["q"],"options":options,
         "correctIndex":order.index(0),"optionExplanations":expl,"explanation":it["x"],
         "explanationLabel":"Master interviewer","objective":it["c"].replace("ivx ","").capitalize()+" · Source: "+it["s"],
         "level":it.get("l",3),"clinicMode":it.get("m","ask")}
    if it.get("hard") or it.get("l",3) == 3: q["hard"] = True
    qs.append(q)
    if it.get("h"): hooks[c] = it["h"]

if errs:
    print("\n".join(errs)); sys.exit(1)
bank = {"domains":DOMAINS,"questions":qs,"memoryHooks":hooks}
js = "var IVX=" + json.dumps(bank, ensure_ascii=False) + ";"
open(os.path.join(HERE, "ivx_bank.js"), "w").write(js)
from collections import Counter
print(len(qs), "questions"); print(Counter(q["domain"] for q in qs)); print(Counter(q["correctIndex"] for q in qs))
