var n=Object.defineProperty;var r=(o,s,t)=>s in o?n(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t;var a=(o,s,t)=>(r(o,typeof s!="symbol"?s+"":s,t),t);class c{constructor(){a(this,"baseUrl","https://jsonplaceholder.typicode.com")}}class i extends c{constructor(){super();a(this,"url",this.baseUrl+"/posts");a(this,"getPosts");a(this,"getPost");this.getPosts=async function(){const t=await fetch(this.url);if(!t.ok)throw new Error(t.statusText);return await t.json()},this.getPost=async function(t){const e=await fetch(`${this.url}/${t}`);if(!e.ok)throw new Error(e.statusText);return await e.json()}}}const p=new i,l={...p};export{l as $};