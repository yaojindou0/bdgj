var y=Object.defineProperty;var k=(r,e,l)=>e in r?y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[e]=l;var i=(r,e,l)=>(k(r,typeof e!="symbol"?e+"":e,l),l);import{r as c,a as f,w as b,o as h,c as v,b as C,d as V,u as g,m as x,e as w,f as _,g as q,h as M,i as m}from"./index-6a664dec.js";class E{constructor(e={},l=!1,o="操作成功",t="操作失败"){i(this,"componentChild",{"el-button":{default(e,l,o){return l[o]}},"el-input":{prepend(e,l,o){return e("div",null,{prepend:()=>l[o]})},append(e,l,o){return e("div",null,{append:()=>l[o]})}},"el-select":{options(e,l,o){const t=[];return l.options.forEach(a=>{t.push(e(c("el-option"),{label:a.label,value:a.value,disabled:a.disabled}))}),t}},"el-radio-group":{options(e,l,o){const t=[];return l.options.forEach(a=>{l.optionType==="button"?t.push(e(c("el-radio-button"),{label:a.value},{default:()=>a.label})):t.push(e(c("el-radio"),{label:a.value,border:l.border},{default:()=>a.label}))}),t}},"el-checkbox-group":{options(e,l,o){const t=[];return l.options.forEach(a=>{l.optionType==="button"?t.push(e(c("el-checkbox-button"),{label:a.value},{default:()=>a.label})):t.push(e(c("el-checkbox"),{label:a.value},{default:()=>a.label}))}),t}},h1:{label(e,l,o){return l[o]}},h2:{label(e,l,o){return l[o]}}})}}const B={__name:"auto-form-render",props:{conf:{type:Object,required:!0}},setup(r){const e=r,l=new E,o=f(e.conf.defaultValue),t=f(e.conf);b(e.conf,n=>{console.debug("数据变化",n),t.value={...e.conf},o.value=e.conf.defaultValue,delete t.value.tag,delete t.value.defaultValue},{deep:!0,immediate:!0}),b(o,n=>{e.conf.defaultValue=n});const a=M({props:{tag:{type:String,required:!0},childKey:{type:String,required:!0},conf:{type:Object,required:!0}},setup(n,{attrs:d}){return()=>{var u,s;return m("div",null,[(s=(u=l.componentChild[n.tag])[n.childKey])==null?void 0:s.call(u,m,n.conf,n.childKey)])}}});return(n,d)=>{var u;return h(),v(w(e.conf.tag),x(t.value,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=s=>o.value=s)}),C({_:2},[V(g(l).componentChild[(u=e.conf)==null?void 0:u.tag],(s,p)=>({name:"default",fn:_(()=>[e.conf[p]?(h(),v(g(a),{key:0,tag:e.conf.tag,conf:e.conf,"child-key":p},null,8,["tag","conf","child-key"])):q("",!0)])}))]),1040,["modelValue"])}}};export{B as default};