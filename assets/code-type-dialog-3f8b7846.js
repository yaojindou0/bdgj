import{M as U,a as z,k as i,r as o,o as s,c as d,f as e,m as A,u as E,n as l,l as L,d as M,s as u,t as P,F as S,g as T,p as $}from"./index-6a664dec.js";const j={slot:"footer"},H={__name:"code-type-dialog",props:{showFileName:{}},emits:["update:visible","confirm"],setup(m,{emit:g}){const y=m,c=g,N=U(),f=z(),t=i({fileName:void 0,type:"file"}),v=i({fileName:[{required:!0,message:"请输入文件名",trigger:"blur"}],type:[{required:!0,message:"生成类型不能为空",trigger:"change"}]}),k=i([{label:"页面",value:"file"},{label:"弹窗",value:"dialog"}]);function V(){y.showFileName&&(t.fileName=`${+new Date}.vue`)}function w(){}function p(r){c("update:visible",!1)}function C(){f.value.validate(r=>{r&&(c("confirm",{...t}),p())})}return(r,n)=>{const h=o("el-radio-button"),x=o("el-radio-group"),_=o("el-form-item"),F=o("el-input"),B=o("el-col"),D=o("el-form"),O=o("el-row"),b=o("el-button"),q=o("el-dialog");return s(),d(q,A(E(N),{width:"500px","close-on-click-modal":!1,"modal-append-to-body":!1,onOpen:V,onClose:w}),{default:e(()=>[l(O,{gutter:15},{default:e(()=>[l(D,{ref_key:"formRef",ref:f,model:t,rules:v,size:"default","label-width":"100px"},{default:e(()=>[l(B,{span:24},{default:e(()=>[l(_,{label:"生成类型",prop:"type"},{default:e(()=>[l(x,{modelValue:t.type,"onUpdate:modelValue":n[0]||(n[0]=a=>t.type=a)},{default:e(()=>[(s(!0),L(S,null,M(k,(a,R)=>(s(),d(h,{key:R,label:a.value,disabled:a.disabled},{default:e(()=>[u(P(a.label),1)]),_:2},1032,["label","disabled"]))),128))]),_:1},8,["modelValue"])]),_:1}),m.showFileName?(s(),d(_,{key:0,label:"文件名",prop:"fileName"},{default:e(()=>[l(F,{modelValue:t.fileName,"onUpdate:modelValue":n[1]||(n[1]=a=>t.fileName=a),placeholder:"请输入文件名",clearable:""},null,8,["modelValue"])]),_:1})):T("",!0)]),_:1})]),_:1},8,["model","rules"])]),_:1}),$("div",j,[l(b,{onClick:p},{default:e(()=>[u(" 取消 ")]),_:1}),l(b,{type:"primary",onClick:C},{default:e(()=>[u(" 确定 ")]),_:1})])]),_:1},16)}}};export{H as default};