import{_ as j,a as N}from"./ViewControls-4c2465f0.js";import{_ as R}from"./CustomActions-d045e678.js";import{E as I}from"./Email2Icon-c181bc5b.js";import{_ as S}from"./LayoutHeader-ce3efb9b.js";import{m as A,i as B,j as E,s as q,k as H,l as y,r as F,b as i,c as v,d as o,w as m,u as c,F as U,f as z,g as V,n as D,p as h,e as L,t as M,q as O}from"./index-82d0b844.js";import{_ as J,H as P,a as G,f as K,b as Q,g as X,c as Y,d as Z,e as ee}from"./ListBulkActions-6a63e81f.js";import{D as te}from"./Dropdown-f8d4a8c8.js";import{_ as le}from"./ListFooter-621c0d06.js";import{_ as oe,d as ae,t as se,c as ne}from"./index-8340263f.js";import{_ as ie}from"./EmailTemplateModal-77cc8111.js";import"./GroupByIcon-584f979a.js";import"./Dropdown-57634c86.js";import"./views-5c6870e6.js";import"./NestedPopover-9b04b27b.js";import"./EditIcon-3c54f763.js";import"./PinIcon-d3dd27b0.js";import"./FadedScrollableDiv-5302c81a.js";import"./settings-6089b88c.js";import"./DetailsIcon-f2258ff1.js";import"./DragVerticalIcon-71ed262e.js";import"./AssignmentModal-a088aaa9.js";import"./label-16764775.js";const ue=["onClick"],re={key:1,class:"truncate text-base"},me={key:2},de={key:3},pe=["onClick"],fe={__name:"EmailTemplatesListView",props:A({rows:{type:Array,required:!0},columns:{type:Array,required:!0},options:{type:Object,default:()=>({selectable:!0,showTooltip:!0,resizeColumn:!1,totalCount:0,rowCount:0})}},{modelValue:{},modelModifiers:{},list:{},listModifiers:{}}),emits:A(["loadMore","updatePageCount","showEmailTemplate","columnWidthUpdated","applyFilter","applyLikeFilter","likeDoc"],["update:modelValue","update:list"]),setup(u,{expose:T,emit:a}){const d=a,_=B(u,"modelValue"),w=B(u,"list"),C=E(()=>{var s,l;return!!((l=(s=w.value.params)==null?void 0:s.filters)!=null&&l._liked_by)}),{user:$}=q();function b(s){if(s)return JSON.parse(s).includes($)}H(_,(s,l)=>{s!==l&&d("updatePageCount",s)});const g=y(null);return T({customListActions:E(()=>{var s;return(s=g.value)==null?void 0:s.customListActions})}),(s,l)=>{const t=F("Button"),n=F("Badge"),f=F("FormControl");return i(),v(U,null,[o(c(Z),{columns:u.columns,rows:u.rows,options:{onRowClick:e=>d("showEmailTemplate",e.name),selectable:u.options.selectable,showTooltip:u.options.showTooltip,resizeColumn:u.options.resizeColumn},"row-key":"name"},{default:m(()=>[o(c(J),{class:"sm:mx-5 mx-3",onColumnWidthUpdated:l[1]||(l[1]=e=>d("columnWidthUpdated"))},{default:m(()=>[(i(!0),v(U,null,z(u.columns,e=>(i(),V(c(G),{key:e.key,item:e,onColumnWidthUpdated:k=>d("columnWidthUpdated",e)},{default:m(()=>[e.key=="_liked_by"?(i(),V(t,{key:0,variant:"ghosted",class:D(["!h-4",C.value?"fill-red-500":"fill-white"]),onClick:l[0]||(l[0]=()=>d("applyLikeFilter"))},{default:m(()=>[o(P,{class:"h-4 w-4"})]),_:1},8,["class"])):h("",!0)]),_:2},1032,["item","onColumnWidthUpdated"]))),128))]),_:1}),o(c(K),{class:"mx-3 sm:mx-5",id:"list-rows"},{default:m(()=>[(i(!0),v(U,null,z(u.rows,e=>(i(),V(c(X),{key:e.name,row:e},{default:m(({idx:k,column:r,item:p})=>[o(c(Q),{item:p},{default:m(({label:W})=>[["modified","creation"].includes(r.key)?(i(),v("div",{key:0,class:"truncate text-base",onClick:x=>d("applyFilter",{event:x,idx:k,column:r,item:p,firstColumn:u.columns[0]})},[o(c(oe),{text:p.label},{default:m(()=>[L("div",null,M(p.timeAgo),1)]),_:2},1032,["text"])],8,ue)):r.key==="status"?(i(),v("div",re,[o(n,{variant:"subtle",theme:p.color,size:"md",label:p.label,onClick:x=>d("applyFilter",{event:x,idx:k,column:r,item:p,firstColumn:u.columns[0]})},null,8,["theme","label","onClick"])])):r.type==="Check"?(i(),v("div",me,[o(f,{type:"checkbox",modelValue:p,disabled:!0,class:"text-gray-900"},null,8,["modelValue"])])):r.key==="_liked_by"?(i(),v("div",de,[r.key=="_liked_by"?(i(),V(t,{key:0,variant:"ghosted",class:D(b(p)?"fill-red-500":"fill-white"),onClick:O(()=>d("likeDoc",{name:e.name,liked:b(p)}),["stop","prevent"])},{default:m(()=>[o(P,{class:"h-4 w-4"})]),_:2},1032,["class","onClick"])):h("",!0)])):(i(),v("div",{key:4,class:"truncate text-base",onClick:x=>d("applyFilter",{event:x,idx:k,column:r,item:p,firstColumn:u.columns[0]})},M(W),9,pe))]),_:2},1032,["item"])]),_:2},1032,["row"]))),128))]),_:1}),o(c(Y),null,{actions:m(({selections:e,unselectAll:k})=>[o(c(te),{options:g.value.bulkActions(e,k)},{default:m(()=>[o(t,{icon:"more-horizontal",variant:"ghost"})]),_:2},1032,["options"])]),_:1})]),_:1},8,["columns","rows","options"]),o(c(le),{class:"border-t sm:px-5 px-3 py-2",modelValue:_.value,"onUpdate:modelValue":l[2]||(l[2]=e=>_.value=e),options:{rowCount:u.options.rowCount,totalCount:u.options.totalCount},onLoadMore:l[3]||(l[3]=e=>d("loadMore"))},null,8,["modelValue","options"]),o(ee,{ref_key:"listBulkActionsRef",ref:g,modelValue:w.value,"onUpdate:modelValue":l[4]||(l[4]=e=>w.value=e),doctype:"Email Template",options:{hideAssign:!0}},null,8,["modelValue"])],64)}}},ce={key:1,class:"flex h-full items-center justify-center"},ve={class:"flex flex-col items-center gap-3 text-xl font-medium text-gray-500"},We={__name:"EmailTemplates",setup(u){const T=y(null),a=y({}),d=y(1),_=y(1),w=y(20),C=y(null),$=E(()=>{var l,t,n;return!((t=(l=a.value)==null?void 0:l.data)!=null&&t.data)||!["list","group_by"].includes(a.value.data.view_type)?[]:(n=a.value)==null?void 0:n.data.data.map(f=>{var k;let e={};return(k=a.value)==null||k.data.rows.forEach(r=>{e[r]=f[r],["modified","creation"].includes(r)&&(e[r]={label:ae(f[r],ne),timeAgo:se(f[r])})}),e})}),b=y(!1),g=y({});function s(l){var t;if(!l)g.value={subject:"",response:"",response_html:"",name:"",enabled:1,use_html:0,owner:"",reference_doctype:"CRM Deal"};else{let n=(t=$.value)==null?void 0:t.find(f=>f.name===l);g.value={subject:n.subject,response:n.response,response_html:n.response_html,name:n.name,enabled:n.enabled,use_html:n.use_html,owner:n.owner,reference_doctype:n.reference_doctype}}b.value=!0}return(l,t)=>{const n=F("FeatherIcon"),f=F("Button");return i(),v(U,null,[o(S,null,{"left-header":m(()=>[o(N,{modelValue:C.value,"onUpdate:modelValue":t[0]||(t[0]=e=>C.value=e),routeName:"Email Templates"},null,8,["modelValue"])]),"right-header":m(()=>{var e;return[(e=T.value)!=null&&e.customListActions?(i(),V(R,{key:0,actions:T.value.customListActions},null,8,["actions"])):h("",!0),o(f,{variant:"solid",label:l.__("Create"),onClick:t[1]||(t[1]=()=>s())},{prefix:m(()=>[o(n,{name:"plus",class:"h-4"})]),_:1},8,["label"])]}),_:1}),o(j,{ref_key:"viewControls",ref:C,modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=e=>a.value=e),loadMore:d.value,"onUpdate:loadMore":t[3]||(t[3]=e=>d.value=e),resizeColumn:_.value,"onUpdate:resizeColumn":t[4]||(t[4]=e=>_.value=e),updatedPageCount:w.value,"onUpdate:updatedPageCount":t[5]||(t[5]=e=>w.value=e),doctype:"Email Template"},null,8,["modelValue","loadMore","resizeColumn","updatedPageCount"]),a.value.data&&$.value.length?(i(),V(fe,{key:0,ref_key:"emailTemplatesListView",ref:T,modelValue:a.value.data.page_length_count,"onUpdate:modelValue":t[6]||(t[6]=e=>a.value.data.page_length_count=e),list:a.value,"onUpdate:list":t[7]||(t[7]=e=>a.value=e),rows:$.value,columns:a.value.data.columns,options:{showTooltip:!1,resizeColumn:!0,rowCount:a.value.data.row_count,totalCount:a.value.data.total_count},onLoadMore:t[8]||(t[8]=()=>d.value++),onColumnWidthUpdated:t[9]||(t[9]=()=>_.value++),onUpdatePageCount:t[10]||(t[10]=e=>w.value=e),onShowEmailTemplate:s,onApplyFilter:t[11]||(t[11]=e=>C.value.applyFilter(e)),onApplyLikeFilter:t[12]||(t[12]=e=>C.value.applyLikeFilter(e)),onLikeDoc:t[13]||(t[13]=e=>C.value.likeDoc(e))},null,8,["modelValue","list","rows","columns","options"])):a.value.data?(i(),v("div",ce,[L("div",ve,[o(I,{class:"h-10 w-10"}),L("span",null,M(l.__("No {0} Found",[l.__("Email Templates")])),1),o(f,{label:l.__("Create"),onClick:t[14]||(t[14]=()=>s())},{prefix:m(()=>[o(n,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])):h("",!0),o(ie,{modelValue:b.value,"onUpdate:modelValue":t[15]||(t[15]=e=>b.value=e),reloadEmailTemplates:a.value,"onUpdate:reloadEmailTemplates":t[16]||(t[16]=e=>a.value=e),emailTemplate:g.value},null,8,["modelValue","reloadEmailTemplates","emailTemplate"])],64)}}};export{We as default};
//# sourceMappingURL=EmailTemplates-8d5e346e.js.map