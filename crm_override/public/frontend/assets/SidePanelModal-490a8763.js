import{l as x,b as n,c as g,M as D,N as I,O as E,e as s,n as L,P as U,_ as j,Q as A,j as P,x as F,k as M,r as $,d as i,w as _,t as k,u as m,R as J,S as T,q as z,g as C,p as S,T as G,U as q,m as N,i as K,a as Z,V as X,F as Q,f as Y,W as ee,A as te,I as le,z as ae}from"./index-82d0b844.js";import{_ as se}from"./Section-2652928e.js";import{a as oe}from"./SLASection-72cc8d88.js";import{E as ie}from"./EditIcon-3c54f763.js";import{a as ne}from"./views-5c6870e6.js";import{D as W,a as de}from"./DragVerticalIcon-71ed262e.js";import{_ as re}from"./Switch.vue_vue_type_script_setup_true_lang-d07933ba.js";import{u as ue}from"./Dropdown-f8d4a8c8.js";const Ae={__name:"Resizer",props:{defaultWidth:{type:Number,default:352},minWidth:{type:Number,default:16*16},maxWidth:{type:Number,default:30*16},side:{type:String,default:"left"},parent:{type:Object,default:null}},setup(p){const l=p,b=x(!1),o=x(l.defaultWidth);function h(){document.addEventListener("mousemove",r),document.addEventListener("mouseup",()=>{document.body.classList.remove("select-none"),document.body.classList.remove("cursor-col-resize"),document.querySelectorAll(".select-text1").forEach(a=>{a.classList.remove("select-text1"),a.classList.add("select-text")}),localStorage.setItem("sidebarWidth",o.value),b.value=!1,document.removeEventListener("mousemove",r)})}function r(a){b.value=!0,document.body.classList.add("select-none"),document.body.classList.add("cursor-col-resize"),document.querySelectorAll(".select-text").forEach(t=>{t.classList.remove("select-text"),t.classList.add("select-text1")}),o.value=l.side=="left"?a.clientX:window.innerWidth-a.clientX;let v=l.parent?d():0;o.value=o.value-v;let u=[l.defaultWidth-10,l.defaultWidth+10];o.value>u[0]&&o.value<u[1]&&(o.value=l.defaultWidth),o.value<l.minWidth&&(o.value=l.minWidth),o.value>l.maxWidth&&(o.value=l.maxWidth)}function d(){if(!l.parent)return 0;const a=l.parent.getBoundingClientRect();return window.innerWidth-a[l.side]}return(a,v)=>(n(),g("div",{class:"relative",style:U({width:`${o.value}px`})},[D(a.$slots,"default",I(E({sidebarResizing:b.value,sidebarWidth:o.value}))),s("div",{class:L(["absolute left-0 z-10 h-full w-1 cursor-col-resize bg-gray-300 opacity-0 transition-opacity hover:opacity-100",{"opacity-100":b.value}]),onMousedown:h},null,34)],4))}},ce={},fe={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function me(p,l){return n(),g("svg",fe,l[0]||(l[0]=[A('<g filter="url(#filter0_b_525_5376)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.50545 11.0115H11.5132C13.1775 11.0115 14.5268 9.66229 14.5268 7.99794C14.5268 6.3336 13.1775 4.98438 11.5132 4.98438L9.50545 4.98438V3.98438H11.5132C13.7298 3.98438 15.5268 5.78131 15.5268 7.99794C15.5268 10.2146 13.7298 12.0115 11.5132 12.0115H9.50545V11.0115ZM6.49422 4.98465H4.48647C2.82212 4.98465 1.4729 6.33387 1.4729 7.99822C1.4729 9.66256 2.82212 11.0118 4.48647 11.0118H6.49422V12.0118H4.48647C2.26984 12.0118 0.4729 10.2148 0.4729 7.99822C0.4729 5.78159 2.26983 3.98465 4.48647 3.98465H6.49422V4.98465ZM10.0079 8.49808H10.5079V7.49808H10.0079H5.99239H5.49239V8.49808H5.99239H10.0079Z" fill="currentColor"></path></g><defs><filter id="filter0_b_525_5376" x="-4" y="-4" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_525_5376"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_525_5376" result="shape"></feBlend></filter></defs>',2)]))}const Pe=j(ce,[["render",me]]),pe={class:"flex flex-col gap-3"},ve={class:"flex items-center justify-between rounded px-2.5 py-2 bg-gray-50"},_e=["onClick"],ge={key:0},ye={key:1,class:"flex gap-2 items-center"},he={class:"flex gap-1 items-center"},be={class:"px-2.5 py-2 border rounded text-base leading-4 text-gray-800 flex items-center justify-between gap-2"},xe={class:"flex items-center gap-2"},ke={class:"flex flex-col gap-1"},Ce={class:"text-gray-500 text-sm"},we={key:1,class:"flex justify-center items-center border rounded border-dashed p-3"},Se={class:"text-sm text-gray-500"},Ve={class:"mt-5.5"},$e={__name:"SidePanelLayoutBuilder",props:{sections:Object,doctype:String},setup(p){const l=p,b=["Table","Geolocation","Attach","Attach Image","HTML","Signature"],o=P(()=>({doctype:l.doctype,restricted_fieldtypes:b,as_array:!0})),h=F({url:"crm.api.doc.get_fields_meta",params:o.value,cache:["fieldsMeta",l.doctype],auto:!0});function r(d,a){a&&d.fields.push(a)}return M(()=>l.doctype,()=>h.fetch(o.value),{immediate:!0}),(d,a)=>{const v=$("FeatherIcon"),u=$("Button");return n(),g("div",null,[i(m(W),{list:p.sections,"item-key":"label",class:"flex flex-col gap-5.5"},{item:_(({element:t})=>[s("div",pe,[s("div",ve,[s("div",{class:"flex max-w-fit cursor-pointer items-center gap-2 text-base leading-4",onClick:e=>t.opened=!t.opened},[i(v,{name:"chevron-right",class:L(["h-4 text-gray-900 transition-all duration-300 ease-in-out",{"rotate-90":t.opened}])},null,8,["class"]),t.editingLabel?(n(),g("div",ye,[i(m(J),{modelValue:t.label,"onUpdate:modelValue":e=>t.label=e,onKeydown:T(e=>t.editingLabel=!1,["enter"]),onBlur:e=>t.editingLabel=!1,onClick:a[0]||(a[0]=z(()=>{},["stop"]))},null,8,["modelValue","onUpdate:modelValue","onKeydown","onBlur"]),t.editingLabel?(n(),C(u,{key:0,icon:"check",class:"!size-4 rounded-sm",variant:"ghost",onClick:z(e=>t.editingLabel=!1,["stop"])},null,8,["onClick"])):S("",!0)])):(n(),g("div",ge,k(d.__(t.label)||d.__("Untitled")),1))],8,_e),s("div",he,[t.editingLabel?S("",!0):(n(),C(u,{key:0,class:"!size-4 rounded-sm",variant:"ghost",onClick:e=>t.editingLabel=!0},{default:_(()=>[i(ie,{class:"h-3.5"})]),_:2},1032,["onClick"])),t.editable!==!1?(n(),C(u,{key:1,class:"!size-4 rounded-sm",icon:"x",variant:"ghost",onClick:e=>p.sections.splice(p.sections.indexOf(t),1)},null,8,["onClick"])):S("",!0)])]),G(s("div",null,[i(m(W),{list:t.fields,group:"fields","item-key":"label",class:"flex flex-col gap-1.5",handle:".cursor-grab"},{item:_(({element:e})=>[s("div",be,[s("div",xe,[i(de,{class:"h-3.5 cursor-grab"}),s("div",null,k(e.label),1)]),i(u,{variant:"ghost",icon:"x",class:"!size-4 rounded-sm",onClick:w=>t.fields.splice(t.fields.indexOf(e),1)},null,8,["onClick"])])]),_:2},1032,["list"]),m(h).data&&t.editable!==!1?(n(),C(ne,{key:0,value:"",options:m(h).data,onChange:e=>r(t,e)},{target:_(({togglePopover:e})=>[i(u,{class:"w-full h-8 mt-1.5 !border-gray-200 hover:!border-gray-300",variant:"outline",onClick:w=>e(),label:d.__("Add Field")},{prefix:_(()=>[i(v,{name:"plus",class:"h-4"})]),_:2},1032,["onClick","label"])]),"item-label":_(({option:e})=>[s("div",ke,[s("div",null,k(e.label),1),s("div",Ce,k(`${e.fieldname} - ${e.fieldtype}`),1)])]),_:2},1032,["options","onChange"])):(n(),g("div",we,[s("div",Se,k(d.__("This section is not editable")),1)]))],512),[[q,t.opened]])])]),_:1},8,["list"]),s("div",Ve,[i(u,{class:"w-full h-8",variant:"subtle",label:d.__("Add Section"),onClick:a[1]||(a[1]=t=>p.sections.push({label:d.__("New Section"),opened:!0,fields:[]}))},{prefix:_(()=>[i(v,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])}}},Le={class:"flex items-center gap-2 text-2xl font-semibold leading-6 text-gray-900"},Be={class:"flex flex-col gap-5.5"},ze={class:"flex justify-between gap-2"},Ne={key:0,class:"flex gap-4"},We={key:0,class:"flex flex-1 flex-col border rounded"},Fe={key:1,class:"flex flex-1 justify-center items-center text-gray-600 bg-gray-50 rounded border border-gray-50"},Me={class:"flex flex-row-reverse gap-2"},Je={__name:"SidePanelModal",props:N({doctype:{type:String,default:"CRM Lead"}},{modelValue:{},modelModifiers:{}}),emits:N(["reload"],["update:modelValue"]),setup(p,{emit:l}){const b=p,o=l,h=K(p,"modelValue"),r=x(b.doctype),d=x(!1),a=x(!1),v=x(!1),u=x({});function t(){return{doctype:r.value,type:"Side Panel"}}const e=F({url:"crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.get_fields_layout",cache:["sidebar-sections",r.value],params:t(),onSuccess(c){e.originalData=JSON.parse(JSON.stringify(c))}});M(()=>e==null?void 0:e.data,()=>{a.value=JSON.stringify(e==null?void 0:e.data)!==JSON.stringify(e==null?void 0:e.originalData)},{deep:!0}),Z(()=>ue(w,100)());function w(){te(()=>{e.params=t(),e.reload()})}function H(){let c=JSON.parse(JSON.stringify(e.data));c.forEach(f=>{f.fields&&(f.fields=f.fields.map(V=>V.fieldname||V.name))}),d.value=!0,le("crm.fcrm.doctype.crm_fields_layout.crm_fields_layout.save_fields_layout",{doctype:r.value,type:"Side Panel",layout:JSON.stringify(c)}).then(()=>{d.value=!1,h.value=!1,ae("side_panel_layout_builder",{doctype:r.value}),o("reload")})}return(c,f)=>{const V=$("FormControl"),B=$("Button");return n(),C(m(ee),{modelValue:h.value,"onUpdate:modelValue":f[3]||(f[3]=y=>h.value=y),options:{size:"3xl"}},{"body-title":_(()=>[s("h3",Le,[s("div",null,k(c.__("Edit Field Layout")),1),a.value?(n(),C(m(X),{key:0,label:c.__("Not Saved"),variant:"subtle",theme:"orange"},null,8,["label"])):S("",!0)])]),"body-content":_(()=>[s("div",Be,[s("div",ze,[i(V,{type:"select",class:"w-1/4",modelValue:r.value,"onUpdate:modelValue":f[0]||(f[0]=y=>r.value=y),options:["CRM Lead","CRM Deal"],onChange:w},null,8,["modelValue"]),i(m(re),{modelValue:v.value,"onUpdate:modelValue":f[1]||(f[1]=y=>v.value=y),label:v.value?c.__("Hide preview"):c.__("Show preview"),size:"sm"},null,8,["modelValue","label"])]),m(e).data?(n(),g("div",Ne,[i($e,{class:"flex flex-1 flex-col pr-2",sections:m(e).data,doctype:r.value},null,8,["sections","doctype"]),v.value?(n(),g("div",We,[(n(!0),g(Q,null,Y(m(e).data,(y,O)=>(n(),g("div",{key:y.label,class:L(["flex flex-col py-1.5 px-1",{"border-b":O!==m(e).data.length-1}])},[i(se,{"is-opened":y.opened,label:y.label},{default:_(()=>[i(oe,{fields:y.fields,modelValue:u.value,"onUpdate:modelValue":f[2]||(f[2]=R=>u.value=R)},null,8,["fields","modelValue"])]),_:2},1032,["is-opened","label"])],2))),128))])):(n(),g("div",Fe,k(c.__("Toggle on for preview")),1))])):S("",!0)])]),actions:_(()=>[s("div",Me,[i(B,{loading:d.value,label:c.__("Save"),variant:"solid",onClick:H},null,8,["loading","label"]),i(B,{label:c.__("Reset"),onClick:w},null,8,["label"])])]),_:1},8,["modelValue"])}}};export{Pe as L,Ae as _,Je as a};
//# sourceMappingURL=SidePanelModal-490a8763.js.map