import{_ as y}from"./comic-4d5ad4f9.js";import{A as B,r as L,y as N,z as C,B as D,C as o,D as p,o as e,F as t,E as d,G as f,H as m,P as _,L as A,J as S,K as U,Q as s,O as n,S as i,aj as v,N as x,R as g,U as h}from"./index-2c369155.js";import{V as R,a as b,b as T,c as E}from"./VNavigationDrawer-63488546.js";import{V as F}from"./VAppBarNavIcon-e62337b6.js";const K={__name:"UserLayout",setup(M){const u=B(!1),l=L(),{mobile:k}=N(),c=C(()=>k.value),V=[{to:"/user/profile",text:"個人資料",icon:"mdi-book-account"},{to:"/user/products",text:"我的商品",icon:"mdi-store"},{to:"/user/orders",text:"我的訂單",icon:"mdi-list-box"},{to:"/",text:"回首頁",icon:"mdi-home"}];return(j,r)=>{const w=D("RouterView");return o(),p(m,null,[e(R,{class:"d-flex align-center",color:"light-blue-lighten-3"},{default:t(()=>[c.value?f("",!0):(o(),d(E,{key:0,class:"font-weight-black text-h4 text-white"},{default:t(()=>[_("會員後台系統")]),_:1})),e(A),c.value?(o(),d(F,{key:1,class:"text-white",onClick:r[0]||(r[0]=a=>u.value=!0)})):f("",!0),e(S,{class:"v-btn--active-no-bg",to:"/",active:!1,ripple:!1,height:"56",variant:"text"},{default:t(()=>[e(U,{src:y,width:118,alt:"動漫交易平台"})]),_:1})]),_:1}),c.value?(o(),d(b,{key:0,modelValue:u.value,"onUpdate:modelValue":r[1]||(r[1]=a=>u.value=a),location:"right",temporary:""},{default:t(()=>[e(i,null,{default:t(()=>[e(s,{"prepend-avatar":n(l).avatar,title:n(l).account,color:"white"},null,8,["prepend-avatar","title"])]),_:1}),e(v),e(i,null,{default:t(()=>[(o(),p(m,null,x(V,a=>e(s,{key:a.to,to:a.to,"prepend-icon":a.icon},{default:t(()=>[e(g,null,{default:t(()=>[_(h(a.text),1)]),_:2},1024)]),_:2},1032,["to","prepend-icon"])),64))]),_:1})]),_:1},8,["modelValue"])):f("",!0),e(b,{class:"bg-blue-lighten-1 text-white","expand-on-hover":"",rail:""},{default:t(()=>[e(i,{class:"bg-blue-darken-1"},{default:t(()=>[e(s,{"prepend-avatar":n(l).avatar,title:n(l).account,color:"white"},null,8,["prepend-avatar","title"])]),_:1}),e(v),e(i,null,{default:t(()=>[(o(),p(m,null,x(V,a=>e(s,{key:a.to,to:a.to,"prepend-icon":a.icon},{default:t(()=>[e(g,null,{default:t(()=>[_(h(a.text),1)]),_:2},1024)]),_:2},1032,["to","prepend-icon"])),64))]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(w)]),_:1})],64)}}};export{K as default};
