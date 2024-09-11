import{_ as P,a as T}from"./ViewControls-4c2465f0.js";import{_ as W}from"./CustomActions-d045e678.js";import{O as E}from"./OrganizationsIcon-557bc8d4.js";import{_ as I}from"./LayoutHeader-ce3efb9b.js";import{_ as j}from"./OrganizationModal-1b108108.js";import{_ as S}from"./QuickEntryModal-91fa4073.js";import{m as B,h as H,i as R,j as L,s as J,k as Q,l as y,r as U,b as s,c as f,d as l,w as i,u as m,F as M,f as h,g as _,n as q,p as w,e as A,t as O,q as G}from"./index-82d0b844.js";import{_ as K,H as D,a as X,f as Y,b as Z,g as ee,c as te,d as oe,e as le}from"./ListBulkActions-6a63e81f.js";import{b as ae,_ as ne,e as se,d as ie,t as ue,c as re}from"./index-8340263f.js";import{D as de}from"./Dropdown-f8d4a8c8.js";import{_ as me}from"./ListFooter-621c0d06.js";import"./GroupByIcon-584f979a.js";import"./Dropdown-57634c86.js";import"./views-5c6870e6.js";import"./NestedPopover-9b04b27b.js";import"./EditIcon-3c54f763.js";import"./PinIcon-d3dd27b0.js";import"./FadedScrollableDiv-5302c81a.js";import"./settings-6089b88c.js";import"./DetailsIcon-f2258ff1.js";import"./DragVerticalIcon-71ed262e.js";import"./Fields-ea2aa0dd.js";import"./IndicatorIcon-d1b8f59f.js";import"./Switch.vue_vue_type_script_setup_true_lang-d07933ba.js";import"./label-16764775.js";import"./AssignmentModal-a088aaa9.js";const pe={key:0},fe=["onClick"],ve={key:1},ce={key:2},ye=["onClick"],ke={__name:"OrganizationsListView",props:B({rows:{type:Array,required:!0},columns:{type:Array,required:!0},options:{type:Object,default:()=>({selectable:!0,showTooltip:!0,resizeColumn:!1,totalCount:0,rowCount:0})}},{modelValue:{},modelModifiers:{},list:{},listModifiers:{}}),emits:B(["loadMore","updatePageCount","columnWidthUpdated","applyFilter","applyLikeFilter","likeDoc"],["update:modelValue","update:list"]),setup(u,{expose:V,emit:b}){const r=b,n=H(),C=R(u,"modelValue"),g=R(u,"list"),$=L(()=>{var o,t;return!!((t=(o=g.value.params)==null?void 0:o.filters)!=null&&t._liked_by)}),{user:k}=J();function x(o){if(o)return JSON.parse(o).includes(k)}Q(C,(o,t)=>{o!==t&&r("updatePageCount",o)});const z=y(null);return V({customListActions:L(()=>{var o;return(o=z.value)==null?void 0:o.customListActions})}),(o,t)=>{const v=U("Button"),d=U("FormControl");return s(),f(M,null,[l(m(oe),{columns:u.columns,rows:u.rows,options:{getRowRoute:e=>({name:"Organization",params:{organizationId:e.name},query:{view:m(n).query.view,viewType:m(n).params.viewType}}),selectable:u.options.selectable,showTooltip:u.options.showTooltip,resizeColumn:u.options.resizeColumn},"row-key":"name"},{default:i(()=>[l(m(K),{class:"sm:mx-5 mx-3",onColumnWidthUpdated:t[1]||(t[1]=e=>r("columnWidthUpdated"))},{default:i(()=>[(s(!0),f(M,null,h(u.columns,e=>(s(),_(m(X),{key:e.key,item:e,onColumnWidthUpdated:c=>r("columnWidthUpdated",e)},{default:i(()=>[e.key=="_liked_by"?(s(),_(v,{key:0,variant:"ghosted",class:q(["!h-4",$.value?"fill-red-500":"fill-white"]),onClick:t[0]||(t[0]=()=>r("applyLikeFilter"))},{default:i(()=>[l(D,{class:"h-4 w-4"})]),_:1},8,["class"])):w("",!0)]),_:2},1032,["item","onColumnWidthUpdated"]))),128))]),_:1}),l(m(Y),{class:"mx-3 sm:mx-5",id:"list-rows"},{default:i(()=>[(s(!0),f(M,null,h(u.rows,e=>(s(),_(m(ee),{key:e.name,row:e},{default:i(({idx:c,column:a,item:p})=>[l(m(Z),{item:p},{prefix:i(()=>[a.key==="organization_name"?(s(),f("div",pe,[p.label?(s(),_(m(ae),{key:0,class:"flex items-center",image:p.logo,label:p.label,size:"sm"},null,8,["image","label"])):w("",!0)])):w("",!0)]),default:i(({label:N})=>[["modified","creation"].includes(a.key)?(s(),f("div",{key:0,class:"truncate text-base",onClick:F=>r("applyFilter",{event:F,idx:c,column:a,item:p,firstColumn:u.columns[0]})},[l(m(ne),{text:p.label},{default:i(()=>[A("div",null,O(p.timeAgo),1)]),_:2},1032,["text"])],8,fe)):a.type==="Check"?(s(),f("div",ve,[l(d,{type:"checkbox",modelValue:p,disabled:!0,class:"text-gray-900"},null,8,["modelValue"])])):a.key==="_liked_by"?(s(),f("div",ce,[a.key=="_liked_by"?(s(),_(v,{key:0,variant:"ghosted",class:q(x(p)?"fill-red-500":"fill-white"),onClick:G(()=>r("likeDoc",{name:e.name,liked:x(p)}),["stop","prevent"])},{default:i(()=>[l(D,{class:"h-4 w-4"})]),_:2},1032,["class","onClick"])):w("",!0)])):(s(),f("div",{key:3,class:"truncate text-base",onClick:F=>r("applyFilter",{event:F,idx:c,column:a,item:p,firstColumn:u.columns[0]})},O(N),9,ye))]),_:2},1032,["item"])]),_:2},1032,["row"]))),128))]),_:1}),l(m(te),null,{actions:i(({selections:e,unselectAll:c})=>[l(m(de),{options:z.value.bulkActions(e,c)},{default:i(()=>[l(v,{icon:"more-horizontal",variant:"ghost"})]),_:2},1032,["options"])]),_:1})]),_:1},8,["columns","rows","options"]),l(m(me),{class:"border-t sm:px-5 px-3 py-2",modelValue:C.value,"onUpdate:modelValue":t[2]||(t[2]=e=>C.value=e),options:{rowCount:u.options.rowCount,totalCount:u.options.totalCount},onLoadMore:t[3]||(t[3]=e=>r("loadMore"))},null,8,["modelValue","options"]),l(le,{ref_key:"listBulkActionsRef",ref:z,modelValue:g.value,"onUpdate:modelValue":t[4]||(t[4]=e=>g.value=e),doctype:"CRM Organization",options:{hideAssign:!0}},null,8,["modelValue"])],64)}}},_e={key:1,class:"flex h-full items-center justify-center"},Ce={class:"flex flex-col items-center gap-3 text-xl font-medium text-gray-500"},He={__name:"Organizations",setup(u){const V=y(null),b=y(!1),r=y(!1),n=y({}),C=y(1),g=y(1),$=y(20),k=y(null),x=L(()=>{var o,t,v;return!((t=(o=n.value)==null?void 0:o.data)!=null&&t.data)||!["list","group_by"].includes(n.value.data.view_type)?[]:(v=n.value)==null?void 0:v.data.data.map(d=>{var c;let e={};return(c=n.value)==null||c.data.rows.forEach(a=>{e[a]=d[a],a==="organization_name"?e[a]={label:d.organization_name,logo:d.organization_logo}:a==="website"?e[a]=z(d.website):a==="annual_revenue"?e[a]=se(d.annual_revenue,d.currency):["modified","creation"].includes(a)&&(e[a]={label:ie(d[a],re),timeAgo:__(ue(d[a]))})}),e})});function z(o){return o&&o.replace(/^(?:https?:\/\/)?(?:www\.)?/i,"")}return(o,t)=>{const v=U("FeatherIcon"),d=U("Button");return s(),f(M,null,[l(I,null,{"left-header":i(()=>[l(T,{modelValue:k.value,"onUpdate:modelValue":t[0]||(t[0]=e=>k.value=e),routeName:"Organizations"},null,8,["modelValue"])]),"right-header":i(()=>{var e;return[(e=V.value)!=null&&e.customListActions?(s(),_(W,{key:0,actions:V.value.customListActions},null,8,["actions"])):w("",!0),l(d,{variant:"solid",label:o.__("Create"),onClick:t[1]||(t[1]=c=>b.value=!0)},{prefix:i(()=>[l(v,{name:"plus",class:"h-4"})]),_:1},8,["label"])]}),_:1}),l(P,{ref_key:"viewControls",ref:k,modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=e=>n.value=e),loadMore:C.value,"onUpdate:loadMore":t[3]||(t[3]=e=>C.value=e),resizeColumn:g.value,"onUpdate:resizeColumn":t[4]||(t[4]=e=>g.value=e),updatedPageCount:$.value,"onUpdate:updatedPageCount":t[5]||(t[5]=e=>$.value=e),doctype:"CRM Organization"},null,8,["modelValue","loadMore","resizeColumn","updatedPageCount"]),n.value.data&&x.value.length?(s(),_(ke,{key:0,ref_key:"organizationsListView",ref:V,modelValue:n.value.data.page_length_count,"onUpdate:modelValue":t[6]||(t[6]=e=>n.value.data.page_length_count=e),list:n.value,"onUpdate:list":t[7]||(t[7]=e=>n.value=e),rows:x.value,columns:n.value.data.columns,options:{showTooltip:!1,resizeColumn:!0,rowCount:n.value.data.row_count,totalCount:n.value.data.total_count},onLoadMore:t[8]||(t[8]=()=>C.value++),onColumnWidthUpdated:t[9]||(t[9]=()=>g.value++),onUpdatePageCount:t[10]||(t[10]=e=>$.value=e),onApplyFilter:t[11]||(t[11]=e=>k.value.applyFilter(e)),onApplyLikeFilter:t[12]||(t[12]=e=>k.value.applyLikeFilter(e)),onLikeDoc:t[13]||(t[13]=e=>k.value.likeDoc(e))},null,8,["modelValue","list","rows","columns","options"])):n.value.data?(s(),f("div",_e,[A("div",Ce,[l(E,{class:"h-10 w-10"}),A("span",null,O(o.__("No {0} Found",[o.__("Organizations")])),1),l(d,{label:o.__("Create"),onClick:t[14]||(t[14]=e=>b.value=!0)},{prefix:i(()=>[l(v,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])):w("",!0),l(j,{modelValue:b.value,"onUpdate:modelValue":t[15]||(t[15]=e=>b.value=e),quickEntry:r.value,"onUpdate:quickEntry":t[16]||(t[16]=e=>r.value=e)},null,8,["modelValue","quickEntry"]),r.value?(s(),_(S,{key:2,modelValue:r.value,"onUpdate:modelValue":t[17]||(t[17]=e=>r.value=e),doctype:"CRM Organization"},null,8,["modelValue"])):w("",!0)],64)}}};export{He as default};
//# sourceMappingURL=Organizations-74f53f33.js.map
