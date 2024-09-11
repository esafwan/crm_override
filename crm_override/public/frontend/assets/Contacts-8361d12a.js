import{_ as M,a as $}from"./ViewControls-4c2465f0.js";import{_ as x}from"./CustomActions-d045e678.js";import{C as c}from"./ContactsIcon-bcb3e80b.js";import{_ as A}from"./LayoutHeader-ce3efb9b.js";import{C as B}from"./ContactModal-cf8a9129.js";import{_ as E}from"./QuickEntryModal-91fa4073.js";import{_ as N}from"./ContactsListView-333941dc.js";import{o as P}from"./organizations-c51d501b.js";import{d as q,t as D,c as I}from"./index-8340263f.js";import{l as u,j,r as b,b as p,c as w,d as n,w as v,g as V,e as z,t as S,p as k,F as T}from"./index-82d0b844.js";import"./GroupByIcon-584f979a.js";import"./Dropdown-57634c86.js";import"./Dropdown-f8d4a8c8.js";import"./views-5c6870e6.js";import"./NestedPopover-9b04b27b.js";import"./EditIcon-3c54f763.js";import"./PinIcon-d3dd27b0.js";import"./FadedScrollableDiv-5302c81a.js";import"./settings-6089b88c.js";import"./DetailsIcon-f2258ff1.js";import"./DragVerticalIcon-71ed262e.js";import"./Fields-ea2aa0dd.js";import"./IndicatorIcon-d1b8f59f.js";import"./Email2Icon-c181bc5b.js";import"./PhoneIcon-3c556b02.js";import"./OrganizationsIcon-557bc8d4.js";import"./Switch.vue_vue_type_script_setup_true_lang-d07933ba.js";import"./label-16764775.js";import"./ListBulkActions-6a63e81f.js";import"./AssignmentModal-a088aaa9.js";import"./ListFooter-621c0d06.js";const O={key:1,class:"flex h-full items-center justify-center"},Q={class:"flex flex-col items-center gap-3 text-xl font-medium text-gray-500"},Fe={__name:"Contacts",setup(R){const{getOrganization:L}=P(),d=u(!1),r=u(!1),f=u(null),t=u({}),C=u(1),g=u(1),_=u(20),i=u(null),U=j(()=>{var s,e,m;return!((e=(s=t.value)==null?void 0:s.data)!=null&&e.data)||!["list","group_by"].includes(t.value.data.view_type)?[]:(m=t.value)==null?void 0:m.data.data.map(l=>{var y;let o={};return(y=t.value)==null||y.data.rows.forEach(a=>{var F;o[a]=l[a],a=="full_name"?o[a]={label:l.full_name,image_label:l.full_name,image:l.image}:a=="company_name"?o[a]={label:l.company_name,logo:(F=L(l.company_name))==null?void 0:F.organization_logo}:["modified","creation"].includes(a)&&(o[a]={label:q(l[a],I),timeAgo:__(D(l[a]))})}),o})});return(s,e)=>{const m=b("FeatherIcon"),l=b("Button");return p(),w(T,null,[n(A,null,{"left-header":v(()=>[n($,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=o=>i.value=o),routeName:"Contacts"},null,8,["modelValue"])]),"right-header":v(()=>{var o;return[(o=f.value)!=null&&o.customListActions?(p(),V(x,{key:0,actions:f.value.customListActions},null,8,["actions"])):k("",!0),n(l,{variant:"solid",label:s.__("Create"),onClick:e[1]||(e[1]=y=>d.value=!0)},{prefix:v(()=>[n(m,{name:"plus",class:"h-4"})]),_:1},8,["label"])]}),_:1}),n(M,{ref_key:"viewControls",ref:i,modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=o=>t.value=o),loadMore:C.value,"onUpdate:loadMore":e[3]||(e[3]=o=>C.value=o),resizeColumn:g.value,"onUpdate:resizeColumn":e[4]||(e[4]=o=>g.value=o),updatedPageCount:_.value,"onUpdate:updatedPageCount":e[5]||(e[5]=o=>_.value=o),doctype:"Contact"},null,8,["modelValue","loadMore","resizeColumn","updatedPageCount"]),t.value.data&&U.value.length?(p(),V(N,{key:0,ref_key:"contactsListView",ref:f,modelValue:t.value.data.page_length_count,"onUpdate:modelValue":e[6]||(e[6]=o=>t.value.data.page_length_count=o),list:t.value,"onUpdate:list":e[7]||(e[7]=o=>t.value=o),rows:U.value,columns:t.value.data.columns,options:{showTooltip:!1,resizeColumn:!0,rowCount:t.value.data.row_count,totalCount:t.value.data.total_count},onLoadMore:e[8]||(e[8]=()=>C.value++),onColumnWidthUpdated:e[9]||(e[9]=()=>g.value++),onUpdatePageCount:e[10]||(e[10]=o=>_.value=o),onApplyFilter:e[11]||(e[11]=o=>i.value.applyFilter(o)),onApplyLikeFilter:e[12]||(e[12]=o=>i.value.applyLikeFilter(o)),onLikeDoc:e[13]||(e[13]=o=>i.value.likeDoc(o))},null,8,["modelValue","list","rows","columns","options"])):t.value.data?(p(),w("div",O,[z("div",Q,[n(c,{class:"h-10 w-10"}),z("span",null,S(s.__("No {0} Found",[s.__("Contacts")])),1),n(l,{label:s.__("Create"),onClick:e[14]||(e[14]=o=>d.value=!0)},{prefix:v(()=>[n(m,{name:"plus",class:"h-4"})]),_:1},8,["label"])])])):k("",!0),n(B,{modelValue:d.value,"onUpdate:modelValue":e[15]||(e[15]=o=>d.value=o),quickEntry:r.value,"onUpdate:quickEntry":e[16]||(e[16]=o=>r.value=o),contact:{}},null,8,["modelValue","quickEntry"]),r.value?(p(),V(E,{key:2,modelValue:r.value,"onUpdate:modelValue":e[17]||(e[17]=o=>r.value=o),doctype:"Contact"},null,8,["modelValue"])):k("",!0)],64)}}};export{Fe as default};
//# sourceMappingURL=Contacts-8361d12a.js.map