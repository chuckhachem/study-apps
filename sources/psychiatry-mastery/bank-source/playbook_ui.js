function IVXS({onDrill}){
  const h=React.createElement, C0=IVXA.color, PB=IVXPB;
  const ld=(k,d)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}};
  const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
  const [tab,setTab]=React.useState(()=>ld("praxis.ivx.tab","learn"));
  const [ph,setPh]=React.useState(null);
  const [open,setOpen]=React.useState({});
  const [done,setDone]=React.useState(()=>ld("praxis.ivx.done",{}));
  const [cat,setCat]=React.useState("All");
  const go=t=>{setTab(t);sv("praxis.ivx.tab",t);setPh(null);top()};
  const top=()=>{const m=document.getElementById("main-scroll");m&&m.scrollTo({top:0})};
  const tog=id=>{const d={...done};d[id]?delete d[id]:d[id]=1;setDone(d);sv("praxis.ivx.done",d)};
  const card={...w}, small={fontSize:10.5,fontFamily:g.mono,textTransform:"uppercase",letterSpacing:.7,marginBottom:5};
  const lab=(t,c)=>h("div",{style:{...small,color:c||i.tx3}},t);
  const para=(t,st)=>h("div",{style:{fontSize:13.5,lineHeight:1.6,color:i.tx,...st}},t);
  const src=t=>h("div",{style:{fontSize:11,fontFamily:g.mono,color:i.tx3,lineHeight:1.5,marginTop:10}},"Source · ",t);
  const drillBtn=(dom,label)=>h(O,{color:C0,onClick:()=>onDrill({key:"dom:"+dom,label:label,domains:[dom],color:C0})},label," ",h(C,{name:"arrow",size:16}));
  const total=PB.phases.reduce((a,p)=>a+p.m.length,0), ndone=Object.keys(done).length;
  const tabs=[["learn","Playbook"],["see","See it"],["golden","Golden lines"],["myths","Myths"],["drill","Drill"]];
  const nav=h("div",{className:"chips",style:{display:"flex",gap:6,overflowX:"auto",margin:"0 -2px",padding:"0 2px"}},tabs.map(([k,l])=>h("button",{key:k,type:"button",onClick:()=>go(k),style:{flex:"none",padding:"8px 13px",borderRadius:999,fontSize:13,fontWeight:600,fontFamily:g.body,cursor:"pointer",border:`1px solid ${tab===k?C0:i.line2}`,background:tab===k?b(C0,.16):"transparent",color:tab===k?C0:i.tx2}},l)));
  let body;
  if(tab==="drill"){body=h(ee,{areaId:"interview",title:"Master Interviewing",onDrill:onDrill})}
  else if(tab==="learn"&&ph===null){
    body=h(React.Fragment,null,
      h("div",{style:{...card,background:`linear-gradient(160deg, ${b(C0,.14)}, ${i.surf} 60%)`,border:`1px solid ${b(C0,.3)}`}},
        h("div",{style:{fontFamily:g.display,fontSize:24,fontWeight:600,color:i.tx,marginBottom:6}},"The Interview Playbook"),
        para("What to say, when to say it, what to watch for, and why it works, phase by phase, from the waiting room to the formulation. Each move is based on research, much of it from conversation analysis, credibility science and suicide-crisis research that most clinicians never read.",{color:i.tx2,marginBottom:10}),
        h("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}},h(x,{color:C0},PB.phases.length," phases"),h(x,{color:C0},total," moves"),h(x,{color:C0},PB.signs.length," signs"),h(x,{color:C0},PB.golden.length," golden lines")),
        h("div",{style:{height:6,borderRadius:6,background:i.surf3,overflow:"hidden"}},h("div",{className:"barfill",style:{height:"100%",width:`${Math.round(100*ndone/total)}%`,background:C0}})),
        h("div",{style:{fontSize:11.5,color:i.tx3,marginTop:6,fontFamily:g.mono}},ndone," / ",total," moves practised")),
      h("div",{style:{display:"flex",flexDirection:"column",gap:8}},PB.phases.map((p,k)=>{const dn=p.m.filter((m,j)=>done[p.id+"."+j]).length;return h("button",{key:p.id,type:"button",onClick:()=>{setPh(k);setOpen({});top()},style:{...card,padding:"13px 14px",display:"flex",gap:12,alignItems:"flex-start",cursor:"pointer",textAlign:"left",color:i.tx,fontFamily:g.body}},
        h("span",{style:{fontFamily:g.mono,fontSize:12,color:C0,minWidth:22,paddingTop:2}},String(k).padStart(2,"0")),
        h("span",{style:{flex:1,minWidth:0}},h("span",{style:{display:"block",fontSize:14.5,fontWeight:600,marginBottom:3}},p.t),h("span",{style:{display:"block",fontSize:12.5,color:i.tx2,lineHeight:1.5}},p.g)),
        h("span",{style:{fontFamily:g.mono,fontSize:11.5,color:dn===p.m.length?C0:i.tx3,paddingTop:2}},dn,"/",p.m.length))})),
      drillBtn("ivx_moments","Drill: what do you say next?"));
  }
  else if(tab==="learn"){
    const p=PB.phases[ph];
    body=h(React.Fragment,null,
      h("button",{type:"button",onClick:()=>{setPh(null);top()},style:{background:"none",border:"none",color:i.tx2,fontSize:13,cursor:"pointer",padding:0,textAlign:"left",fontFamily:g.body}},"← All phases"),
      h("div",{style:{...card,border:`1px solid ${b(C0,.3)}`}},lab("Phase "+String(ph).padStart(2,"0"),C0),h("div",{style:{fontFamily:g.display,fontSize:22,fontWeight:600,marginBottom:6}},p.t),para(p.g,{color:i.tx2})),
      p.m.map((m,j)=>{const id=p.id+"."+j,o=open[id];return h("div",{key:id,style:{...card,padding:0,overflow:"hidden",border:`1px solid ${o?b(C0,.35):i.line}`}},
        h("button",{type:"button",onClick:()=>setOpen({...open,[id]:!o}),style:{width:"100%",background:"none",border:"none",padding:"14px",display:"flex",gap:10,alignItems:"flex-start",cursor:"pointer",textAlign:"left",color:i.tx,fontFamily:g.body}},
          h("span",{style:{width:8,height:8,borderRadius:8,marginTop:7,flex:"none",background:done[id]?C0:"transparent",border:`1.5px solid ${C0}`}}),
          h("span",{style:{flex:1,minWidth:0}},h("span",{style:{display:"block",fontSize:14.5,fontWeight:600,marginBottom:3}},m.n),h("span",{style:{display:"block",fontSize:12.5,color:i.tx2,lineHeight:1.5}},"When: ",m.w)),
          h("span",{style:{color:i.tx3,fontSize:16,lineHeight:1,paddingTop:2}},o?"−":"+")),
        o&&h("div",{style:{padding:"0 14px 14px",display:"flex",flexDirection:"column",gap:12}},
          h("div",null,lab("Say",C0),m.s.map((t,z)=>h("div",{key:z,style:{borderLeft:`2px solid ${C0}`,padding:"4px 0 4px 11px",margin:"0 0 6px",fontFamily:g.display,fontSize:15,lineHeight:1.5,color:i.tx}},t))),
          h("div",null,lab("Watch for"),para(m.k)),
          h("div",null,lab("Why it works"),para(m.y)),
          h("div",{style:{background:b(i.bad,.08),border:`1px solid ${b(i.bad,.25)}`,borderRadius:11,padding:"9px 11px"}},lab("Avoid",i.bad),para(m.v)),
          src(m.r),
          h("button",{type:"button",onClick:()=>tog(id),style:{alignSelf:"flex-start",padding:"7px 12px",borderRadius:999,fontSize:12.5,fontWeight:600,cursor:"pointer",fontFamily:g.body,border:`1px solid ${C0}`,background:done[id]?C0:"transparent",color:done[id]?i.ink:C0}},done[id]?"✓ Practised":"Mark as practised")))}),
      ph<PB.phases.length-1?h(O,{color:C0,onClick:()=>{setPh(ph+1);setOpen({});top()}},"Next: ",PB.phases[ph+1].t," ",h(C,{name:"arrow",size:16})):drillBtn("ivx_moments","Drill: what do you say next?"));
  }
  else if(tab==="see"){
    const cats=["All",...Array.from(new Set(PB.signs.map(s=>s.c)))], list=PB.signs.filter(s=>cat==="All"||s.c===cat);
    body=h(React.Fragment,null,
      h($,{color:C0,title:"See what others miss"},"Signs that are subtle, counter-intuitive or rarely taught. Each one says what you see, what it may mean, and exactly what to do next."),
      h("div",{className:"chips",style:{display:"flex",gap:6,overflowX:"auto"}},cats.map(c=>h("button",{key:c,type:"button",onClick:()=>setCat(c),style:{flex:"none",padding:"5px 10px",borderRadius:8,fontSize:12,cursor:"pointer",fontFamily:g.body,border:`1px solid ${cat===c?C0:i.line}`,background:cat===c?b(C0,.12):"transparent",color:cat===c?C0:i.tx2}},c))),
      list.map((s,k)=>h("div",{key:s.t,style:card},
        h("div",{style:{display:"flex",justifyContent:"space-between",gap:8,alignItems:"flex-start",marginBottom:10}},h("div",{style:{fontFamily:g.display,fontSize:17,fontWeight:600,lineHeight:1.3}},s.t),h(x,{color:C0},s.c)),
        h("div",{style:{display:"flex",flexDirection:"column",gap:10}},h("div",null,lab("You see"),para(s.k)),h("div",null,lab("It may mean"),para(s.m)),h("div",{style:{borderLeft:`2px solid ${C0}`,paddingLeft:11}},lab("Do / say",C0),para(s.a))),
        src(s.r))),
      drillBtn("ivx_seeing","Drill: seeing what others miss"));
  }
  else if(tab==="golden"){
    body=h(React.Fragment,null,
      h($,{color:C0,title:"Golden lines"},"Single questions that do more work than ten ordinary ones. Learn them word for word, and learn when to use each."),
      PB.golden.map((q,k)=>h("div",{key:k,style:card},
        h("div",{style:{fontFamily:g.display,fontSize:16.5,lineHeight:1.45,color:i.tx,marginBottom:10}},"“",q.q,"”"),
        h("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:8}},h(x,{color:C0},q.w)),
        para(q.o,{color:i.tx2,fontSize:13}),src(q.r))));
  }
  else {
    body=h(React.Fragment,null,
      h($,{color:C0,title:"Unlearn these"},"Beliefs that are widely taught but contradicted by research. Letting go of them is part of what sets the top clinicians apart."),
      PB.myths.map((m,k)=>h("div",{key:k,style:card},
        lab("Myth",i.bad),para(m.m,{color:i.tx2,textDecoration:"line-through",textDecorationColor:b(i.bad,.6),marginBottom:10}),
        lab("Evidence",C0),para(m.t),src(m.r))));
  }
  return h("div",{className:"screen",style:{display:"flex",flexDirection:"column",gap:12}},nav,body);
}
