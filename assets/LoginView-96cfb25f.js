import{x as w,aY as k,r as S,ai as y,C as B,D as C,o as a,F as s,O as t,ap as F,ak as i,J as c,K as j,aq as m,P as p}from"./index-2c369155.js";import{_ as q}from"./comic-4d5ad4f9.js";import{c as M,a as g,u as N,d as f,V as P}from"./vee-validate.esm-961b5b3b.js";import{V as U}from"./VContainer-129d0fb9.js";import{V as z,a as o}from"./VRow-1ef26a63.js";import"./_commonjsHelpers-39b5b250.js";const R={class:"bg-login"},T=i("span",{class:"d-block mb-3"},"帳號",-1),$=i("span",{class:"d-block mb-3"},"密碼",-1),Y={__name:"LoginView",setup(D){const d=w(),b=k(),_=S(),h=M({account:g().required("帳號必填").min(4,"帳號最少 4 個字").max(20,"帳號最多 20 個字"),password:g().required("密碼必填").min(4,"密碼最少 4 個字").max(20,"密碼最多 20 個字")}),{handleSubmit:v,isSubmitting:x}=N({validationSchema:h}),l=f("account"),r=f("password"),V=v(async n=>{try{const{data:e}=await y.post("/users/login",{account:n.account,password:n.password});_.login({token:e.result.token,account:e.result.account,email:e.result.email,cart:e.result.cart,role:e.result.role,name:e.result.name,avatar:e.result.avatar}),d({text:"登入成功",showCloseButton:!1,snackbarProps:{timeout:3e3,color:"success",location:"bottom"}}),b.push("/")}catch(e){d({text:e.response.data.message,showCloseButton:!1,snackbarProps:{timeout:3e3,color:"error",location:"bottom"}})}});return(n,e)=>(B(),C("div",R,[a(U,{class:"h-100 d-flex justify-center align-center"},{default:s(()=>[a(P,{disabled:t(x),onSubmit:F(t(V),["prevent"])},{default:s(()=>[i("div",null,[a(z,{class:"login-panel elevation-12"},{default:s(()=>[a(o,{cols:"12"},{default:s(()=>[a(c,{class:"v-btn--active-no-bg",to:"/",ripple:!1,height:"120",variant:"text"},{default:s(()=>[a(j,{src:q,width:420,height:120})]),_:1})]),_:1}),a(o,{class:"px-5",cols:"12"},{default:s(()=>[T,a(m,{modelValue:t(l).value.value,"onUpdate:modelValue":e[0]||(e[0]=u=>t(l).value.value=u),"error-messages":t(l).errorMessage.value,clearable:"",label:"帳號",variant:"outlined",counter:"",maxlength:"20"},null,8,["modelValue","error-messages"])]),_:1}),a(o,{class:"px-5",cols:"12"},{default:s(()=>[$,a(m,{modelValue:t(r).value.value,"onUpdate:modelValue":e[1]||(e[1]=u=>t(r).value.value=u),"error-messages":t(r).errorMessage.value,type:"password",label:"密碼",variant:"outlined",counter:"",maxlength:"20"},null,8,["modelValue","error-messages"])]),_:1}),a(o,{class:"d-flex justify-center",cols:"6"},{default:s(()=>[a(c,{class:"bg-light-blue-lighten-3 text-white",size:"large",to:"/register"},{default:s(()=>[p("註冊")]),_:1})]),_:1}),a(o,{class:"d-flex justify-center",cols:"6"},{default:s(()=>[a(c,{class:"bg-light-blue-lighten-3 text-white",type:"submit",size:"large"},{default:s(()=>[p("登入")]),_:1})]),_:1})]),_:1})])]),_:1},8,["disabled","onSubmit"])]),_:1})]))}};export{Y as default};
