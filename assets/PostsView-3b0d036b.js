import{$ as v}from"./index-bc273f79.js";import{d as m,r as n,c as y,o as h,a,b as i,e as g,F as _,f as k,t as d,g as s,u as P,P as w,_ as $}from"./index-3d6839a8.js";const b={key:0},C={class:"posts"},V=["onClick"],p={key:2},S=m({__name:"PostsView",setup(B){const t=n([]),o=n(!1),u=n(!1),r=n(!1),f=y(()=>r.value?t.value:t.value.slice(0,10));return h(async()=>{o.value=!0;try{t.value=await v.getPosts(),u.value=!1}catch(l){u.value=!0,console.error(l)}finally{o.value=!1}}),(l,c)=>(s(),a(_,null,[o.value?(s(),a("h2",b,"Loading...")):i("",!0),g("ul",C,[(s(!0),a(_,null,k(f.value,e=>(s(),a("li",{onClick:E=>l.$router.push({name:P(w).POST,params:{id:e.id},query:l.$route.query}),key:e==null?void 0:e.id},d((e==null?void 0:e.id)+" "+(e==null?void 0:e.title)),9,V))),128))]),t.value.length>10?(s(),a("button",{key:1,onClick:c[0]||(c[0]=e=>r.value=!r.value)},d(r.value?"Hide all":"Show all"),1)):i("",!0),u.value?(s(),a("h2",p,"Error fetching!")):i("",!0)],64))}});const q=$(S,[["__scopeId","data-v-9bf131e9"]]);export{q as default};