import{_ as M}from"./comic-4d5ad4f9.js";import{p as U,I as E,m as X,a as Y,b as j,c as q,d as z,e as G,g as H,u as J,t as L,f as K,h as O,i as Q,j as W,k as Z,l as I,n as ee,o as n,M as te,w as ae,v as oe,q as P,V as C,r as ne,s as se,x as le,y as re,z as T,A as ie,B as ue,C as a,D as b,E as s,F as o,G as u,H as v,J as B,K as ce,L as de,N as A,O as h,P as x,Q as R,R as $,S as ge,T as me,U as D}from"./index-2c369155.js";import{V as fe,a as be,b as ve,c as ke}from"./VNavigationDrawer-63488546.js";import{V as Ve}from"./VAppBarNavIcon-e62337b6.js";import{V as ye}from"./VContainer-129d0fb9.js";const he=U({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:E,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...X(),...Y({location:"top end"}),...j(),...q(),...z(),...G({transition:"scale-rotate-transition"})},"VBadge"),F=H()({name:"VBadge",inheritAttrs:!1,props:he(),setup(e,l){const{backgroundColorClasses:r,backgroundColorStyles:m}=J(L(e,"color")),{roundedClasses:k}=K(e),{t:V}=O(),{textColorClasses:_,textColorStyles:d}=Q(L(e,"textColor")),{themeClasses:f}=W(),{locationStyles:y}=Z(e,!0,i=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(i)?+(e.offsetY??0):["left","right"].includes(i)?+(e.offsetX??0):0));return I(()=>{const i=Number(e.content),c=!e.max||isNaN(i)?e.content:i<=+e.max?i:`${e.max}+`,[g,w]=ee(l.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return n(e.tag,P({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},w,{style:e.style}),{default:()=>{var t,S;return[n("div",{class:"v-badge__wrapper"},[(S=(t=l.slots).default)==null?void 0:S.call(t),n(te,{transition:e.transition},{default:()=>{var p,N;return[ae(n("span",P({class:["v-badge__badge",f.value,r.value,k.value,_.value],style:[m.value,d.value,e.inline?{}:y.value],"aria-atomic":"true","aria-label":V(e.label,i),"aria-live":"polite",role:"status"},g),[e.dot?void 0:l.slots.badge?(N=(p=l.slots).badge)==null?void 0:N.call(p):e.icon?n(C,{icon:e.icon},null):c]),[[oe,e.modelValue]])]}})])]}})}),{}}}),Se={__name:"FrontLayout",setup(e){const l=ne(),{isLogin:r,isAdmin:m,cart:k}=se(l),V=le(),{mobile:_}=re(),d=T(()=>_.value),f=ie(!1),y=T(()=>[{to:"/",text:"商品目錄",icon:"mdi-star-box-outline",show:r.value||!r.value},{to:"/seller",text:"出售商品",icon:"mdi-store",show:r.value&&!m.value},{to:"/aboutus",text:"關於我們",icon:"",show:!r.value},{to:"/cart",text:"",icon:"mdi-cart",show:r.value},{to:"/login",text:"登入",icon:"mdi-account",show:!r.value},{to:"/user/profile",text:l.name,icon:"mdi-account-box",show:r.value&&!m.value},{to:"/admin",text:"管理",icon:"mdi-cog",show:m.value&&r.value}]),i=async()=>{try{await me.delete("/users/logout"),l.logout(),V({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:3e3,color:"success",location:"bottom"}})}catch(c){V({text:c.response.data.message,showCloseButton:!1,snackbarProps:{timeout:3e3,color:"error",location:"bottom"}})}};return(c,g)=>{const w=ue("RouterView");return a(),b(v,null,[c.$route.path!=="/login"&&c.$route.path!=="/register"?(a(),s(fe,{key:0,class:"elevation-1",color:"light-blue-lighten-3"},{default:o(()=>[n(ye,{class:"d-flex align-center",fluid:!0},{default:o(()=>[n(ke,null,{default:o(()=>[n(B,{class:"v-btn--active-no-bg",to:"/",active:!1,ripple:!1,height:"46",variant:"text"},{default:o(()=>[n(ce,{src:M,width:118,height:46})]),_:1})]),_:1}),n(de),d.value?(a(),s(Ve,{key:0,class:"text-white",onClick:g[0]||(g[0]=t=>f.value=!0)})):u("",!0),d.value?u("",!0):(a(!0),b(v,{key:1},A(y.value,t=>(a(),b(v,{key:t.to},[t.show?(a(),s(B,{key:0,class:"v-btn--active-no-bg",variant:"text","prepend-icon":t.icon,to:t.to},{default:o(()=>[x(D(t.text),1),t.to==="/cart"?(a(),s(F,{key:0,color:"indigo",location:"end",max:9,content:h(k).toString()},null,8,["content"])):u("",!0)]),_:2},1032,["prepend-icon","to"])):u("",!0)],64))),128)),!d.value&&h(l).isLogin?(a(),s(B,{key:2,"prepend-icon":"mdi-logout",onClick:i},{default:o(()=>[x("登出")]),_:1})):u("",!0)]),_:1})]),_:1})):u("",!0),d.value?(a(),s(be,{key:1,modelValue:f.value,"onUpdate:modelValue":g[1]||(g[1]=t=>f.value=t),location:"right",temporary:""},{default:o(()=>[n(ge,{nav:""},{default:o(()=>[(a(!0),b(v,null,A(y.value,t=>(a(),b(v,{key:t.to},[t.show?(a(),s(R,{key:0,to:t.to},{prepend:o(()=>[t.to==="/cart"?(a(),s(F,{key:0,color:"indigo",location:"end",max:9,content:h(k).toString()},{default:o(()=>[n(C,{icon:t.icon},null,8,["icon"])]),_:2},1032,["content"])):(a(),s(C,{key:1,icon:t.icon},null,8,["icon"]))]),default:o(()=>[n($,null,{default:o(()=>[x(D(t.text),1)]),_:2},1024)]),_:2},1032,["to"])):u("",!0)],64))),128)),h(l).isLogin?(a(),s(R,{key:0,onClick:i},{prepend:o(()=>[n(C,{icon:"mdi-logout"})]),default:o(()=>[n($,null,{default:o(()=>[x("登出")]),_:1})]),_:1})):u("",!0)]),_:1})]),_:1},8,["modelValue"])):u("",!0),n(ve,null,{default:o(()=>[(a(),s(w,{key:c.$route.path}))]),_:1})],64)}}};export{Se as default};
