import sys
src, bankjs, out = sys.argv[1], sys.argv[2], sys.argv[3]
s = open(src).read()
bank = open(bankjs).read()
area = 'var IVXA={id:"interview",label:"Master Interviewing",t:"Interview",color:"#6FB7F0"};'

def rep(old, new, count=1):
    global s
    n = s.count(old)
    if n != count:
        raise SystemExit(f"expected {count} of {old[:70]!r}, found {n}")
    s = s.replace(old, new)

rep('(()=>{var q=', '(()=>{' + bank + area + 'var q=')
rep('P=[...q.taxonomy.areas,De,ze]', 'P=[...q.taxonomy.areas,De,IVXA,ze]')
rep('...F.domains.map(e=>({...e,area:"clinic"})),', '...F.domains.map(e=>({...e,area:"clinic"})),...IVX.domains.map(e=>({...e,area:"interview"})),')
rep('{id:"clinic",label:"Clinic",color:De.color,domains:F.domains.map(e=>e.id)},',
    '{id:"clinic",label:"Clinic",color:De.color,domains:F.domains.map(e=>e.id)},{id:"interview",label:"Master Interviewing",color:IVXA.color,domains:IVX.domains.map(e=>e.id)},')
rep('...K.memoryHooks}', '...K.memoryHooks,...IVX.memoryHooks}')
rep('...de.questions,...K.questions])', '...de.questions,...K.questions,...IVX.questions])')
# coach routing: send "advanced interviewing" style requests to the new track before generic clinic
rep('["clinic",/\\b(clinic|interview\\w*|',
    '["interview",/\\b(interview mastery|advanced interview\\w*|sullivan|havens|shea|kernberg interview|structural interview|motivational interview\\w*|malingering|phenomenolog\\w*)\\b/],["clinic",/\\b(clinic|interview\\w*|')
# area blurb and pearls
rep('mi={neuro:', 'mi={interview:"Sullivan, Havens, Shea, Kernberg and Jaspers to motivational, systemic and forensic interviewing: the craft of the interview at the level of its masters, ending in integrative cases.",neuro:')
rep('hi={neuro:', 'hi={interview:["Every question is an intervention: it shapes what the patient notices, remembers and says.","Where security operations appear, the important material is near (Sullivan).","Sit beside the paranoid patient, both facing the persecutor out there (Havens).","Diagnose the form, understand the content (Jaspers).","Ask why the rating is not lower, never why it is not higher (MI).","What you never ask about is usually what you are afraid to hear."],neuro:')
# nav tab + screen + icon
rep('["clinic","Clinic"],["niche","Niche"]', '["clinic","Clinic"],["interview","Interview"],["niche","Niche"]')
rep('n==="niche"&&React.createElement(ee,{areaId:"niche",title:"Niche",onDrill:d})',
    'n==="interview"&&React.createElement(ee,{areaId:"interview",title:"Master Interviewing",onDrill:d}),n==="niche"&&React.createElement(ee,{areaId:"niche",title:"Niche",onDrill:d})')
rep('tune:React.createElement("g",null,',
    'interview:React.createElement("g",null,React.createElement("path",{d:"M3 5h11v7H8l-3 3v-3H3z"}),React.createElement("path",{d:"M14 9h7v7h-2v3l-3-3h-4v-3"})),tune:React.createElement("g",null,')
rep('"Clinical mastery · "', '"Clinical mastery · "')
open(out, "w").write(s)
print("patched", len(s))
