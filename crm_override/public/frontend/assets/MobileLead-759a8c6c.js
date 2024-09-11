import{_ as oe}from"./GroupByIcon-584f979a.js";import{D as se}from"./DetailsIcon-f2258ff1.js";import{A as le,E as ne,S as ie,a as re,_ as de}from"./SLASection-72cc8d88.js";import{C as ue}from"./CommentIcon-fd4d721b.js";import{P as me}from"./PhoneIcon-3c556b02.js";import{T as ce}from"./TaskIcon-5ecf8abe.js";import{N as pe}from"./NoteModal-fe2f5600.js";import{W as _e}from"./WhatsAppIcon-67297c1d.js";import{I as fe}from"./IndicatorIcon-d1b8f59f.js";import{O as ve}from"./OrganizationsIcon-557bc8d4.js";import{C as be}from"./ContactsIcon-bcb3e80b.js";import{_ as ye}from"./LayoutHeader-ce3efb9b.js";import{_ as ge}from"./AssignmentModal-a088aaa9.js";import{s as xe,_ as Ce}from"./statuses-3dacf993.js";import{_ as j}from"./views-5c6870e6.js";import{_ as we}from"./Section-2652928e.js";import{_ as he}from"./CustomActions-d045e678.js";import{g as Ie,s as Ve,h as Le,i as ke,j as x}from"./index-8340263f.js";import{g as Ae,_ as ze}from"./view-eb7d1a47.js";import{c as De}from"./contacts-226dfac2.js";import{o as Ue}from"./organizations-c51d501b.js";import{i as Se,c as Te,w as Ee}from"./settings-6089b88c.js";import{h as $e,v as Me,x as E,a as Ne,l as f,j as B,k as Re,r as $,b as l,c as m,u as o,g as c,w as p,p as v,G as qe,e as r,d as i,F,I as M,n as P,f as Oe,L as je,t as C}from"./index-82d0b844.js";import{_ as Be}from"./Breadcrumbs.vue_vue_type_script_setup_true_lang-cd1be04a.js";import{D as Fe}from"./Dropdown-f8d4a8c8.js";import{_ as W}from"./Switch.vue_vue_type_script_setup_true_lang-d07933ba.js";import"./Email2Icon-c181bc5b.js";import"./CalendarIcon-5c294322.js";import"./callLog-0801e3f3.js";import"./Dropdown-57634c86.js";import"./FadedScrollableDiv-5302c81a.js";import"./FileUploader-b4f98b38.js";import"./LeadsIcon-186f8b9f.js";import"./DealsIcon-491a0387.js";import"./EmailTemplateModal-77cc8111.js";import"./TaskModal-16274f1c.js";import"./ArrowUpRightIcon-60e3a514.js";import"./label-16764775.js";const Pe={class:"relative flex h-12 items-center justify-between gap-2 py-2.5 pl-5"},We={class:"absolute right-0"},Ge={key:1,class:"flex h-12 items-center justify-between gap-2 border-b px-3 py-2.5"},He={class:"flex items-center gap-2"},Je={key:2,class:"flex h-full overflow-hidden"},Ke={key:0},Qe={key:1,class:"flex flex-1 flex-col justify-between overflow-hidden"},Xe={class:"flex flex-col overflow-y-auto"},Ye={class:"mb-4 flex items-center gap-2 text-gray-600"},Ze={class:"block text-base"},ea={class:"ml-6"},aa={class:"flex items-center justify-between text-base"},ta={key:1,class:"mt-2.5 text-base"},oa={class:"mb-4 mt-6 flex items-center gap-2 text-gray-600"},sa={class:"block text-base"},la={class:"ml-6"},na={class:"flex items-center justify-between text-base"},ia={key:1,class:"mt-2.5 text-base"},Ga={__name:"MobileLead",props:{leadId:{type:String,required:!0}},setup(G){const{$dialog:H}=Ie(),{getContactByName:w,contacts:J}=De(),{organizations:K}=Ue(),{statusOptions:Q,getLeadStatus:X}=xe(),_=$e(),D=Me(),h=G,a=E({url:"crm.fcrm.doctype.crm_lead.api.get_lead",params:{name:h.leadId},cache:["lead",h.leadId],onSuccess:t=>{let e={doc:t,$dialog:H,router:D,updateField:k,createToast:x,deleteDoc:ee,call:M};Ve(t),Le(t,e),ke(t,e)}});Ne(()=>{a.data||a.fetch()});const U=f(!1),L=f(!1);function N(t,e,n){e=Array.isArray(t)?"":e,!(!Array.isArray(t)&&Y(t,e))&&E({url:"frappe.client.set_value",params:{doctype:"CRM Lead",name:h.leadId,fieldname:t,value:e},auto:!0,onSuccess:()=>{a.reload(),U.value=!0,x({title:__("Lead updated"),icon:"check",iconClasses:"text-green-600"}),n==null||n()},onError:b=>{var z;x({title:__("Error updating lead"),text:__((z=b.messages)==null?void 0:z[0]),icon:"x",iconClasses:"text-red-600"})}})}function Y(t,e){var b;let n=a.data.fields_meta||{};return(b=n[t])!=null&&b.reqd&&!e?(x({title:__("Error Updating Lead"),text:__("{0} is a required field",[n[t].label]),icon:"x",iconClasses:"text-red-600"}),!0):!1}const Z=B(()=>{let t=[{label:__("Leads"),route:{name:"Leads"}}];if(_.query.view||_.query.viewType){let e=Ae(_.query.view,_.query.viewType,"CRM Lead");e&&t.push({label:__(e.label),icon:e.icon,route:{name:"Leads",params:{viewType:_.query.viewType},query:{view:_.query.view}}})}return t.push({label:a.data.lead_name||__("Untitled"),route:{name:"Lead",params:{leadId:a.data.name}}}),t}),I=f(0),S=B(()=>[{name:"Details",label:__("Details"),icon:se,condition:()=>Se.value},{name:"Activity",label:__("Activity"),icon:le},{name:"Emails",label:__("Emails"),icon:ne},{name:"Comments",label:__("Comments"),icon:ue},{name:"Calls",label:__("Calls"),icon:me,condition:()=>Te.value},{name:"Tasks",label:__("Tasks"),icon:ce},{name:"Notes",label:__("Notes"),icon:pe},{name:"WhatsApp",label:__("WhatsApp"),icon:_e,condition:()=>Ee.value}].filter(e=>e.condition?e.condition():!0));Re(S,t=>{if(t&&_.params.tabName){let e=t.findIndex(n=>n.name.toLowerCase()===_.params.tabName.toLowerCase());e!==-1&&(I.value=e)}});const T=E({url:"crm.api.doc.get_sidebar_fields",cache:["fieldsLayout",h.leadId],params:{doctype:"CRM Lead",name:h.leadId},auto:!0});function k(t,e,n){N(t,e,()=>{a.data[t]=e,n==null||n()})}async function ee(t){await M("frappe.client.delete",{doctype:"CRM Lead",name:t}),D.push({name:"Leads"})}const A=f(!1),y=f(!1),g=f(!1),u=f(""),V=f("");async function R(t){let e=!1;if(y.value&&!u.value){x({title:__("Error"),text:__("Please select an existing contact"),icon:"x",iconClasses:"text-red-600"});return}if(g.value&&!V.value){x({title:__("Error"),text:__("Please select an existing organization"),icon:"x",iconClasses:"text-red-600"});return}if(y.value&&u.value&&(a.data.salutation=w(u.value).salutation,a.data.first_name=w(u.value).first_name,a.data.last_name=w(u.value).last_name,a.data.email_id=w(u.value).email_id,a.data.mobile_no=w(u.value).mobile_no,y.value=!1,e=!0),g.value&&V.value&&(a.data.organization=V.value,g.value=!1,e=!0),e)N({salutation:a.data.salutation,first_name:a.data.first_name,last_name:a.data.last_name,email_id:a.data.email_id,mobile_no:a.data.mobile_no,organization:a.data.organization},"",()=>R(!0)),A.value=!1;else{let n=await M("crm.fcrm.doctype.crm_lead.crm_lead.convert_to_deal",{lead:a.data.name});n&&(t&&(await K.reload(),await J.reload()),D.push({name:"Deal",params:{dealId:n}}))}}return(t,e)=>{var q,O;const n=$("FeatherIcon"),b=$("Button"),z=$("Dialog");return l(),m(F,null,[o(a).data?(l(),c(ye,{key:0},{default:p(()=>[r("header",Pe,[i(o(Be),{items:Z.value},{prefix:p(({item:s})=>[s.icon?(l(),c(oe,{key:0,icon:s.icon,class:"mr-2 h-4"},null,8,["icon"])):v("",!0)]),_:1},8,["items"]),r("div",We,[i(o(Fe),{options:o(Q)("lead",k,o(a).data._customStatuses)},{default:p(({open:s})=>[i(b,{label:o(a).data.status,class:P(o(X)(o(a).data.status).colorClass)},{prefix:p(()=>[i(fe)]),suffix:p(()=>[i(n,{name:s?"chevron-up":"chevron-down",class:"h-4"},null,8,["name"])]),_:2},1032,["label","class"])]),_:1},8,["options"])])])]),_:1})):v("",!0),o(a).data?(l(),m("div",Ge,[(l(),c(qe(((q=o(a).data._assignedTo)==null?void 0:q.length)==1?"Button":"div"),null,{default:p(()=>[i(Ce,{avatars:o(a).data._assignedTo,onClick:e[0]||(e[0]=s=>L.value=!0)},null,8,["avatars"])]),_:1})),r("div",He,[o(a).data._customActions?(l(),c(he,{key:0,actions:o(a).data._customActions},null,8,["actions"])):v("",!0),i(b,{label:t.__("Convert"),variant:"solid",onClick:e[1]||(e[1]=s=>A.value=!0)},null,8,["label"])])])):v("",!0),(O=o(a))!=null&&O.data?(l(),m("div",Je,[i(o(ze),{modelValue:I.value,"onUpdate:modelValue":e[7]||(e[7]=s=>I.value=s),tabs:S.value,tablistClass:"!px-3",class:"overflow-auto"},{default:p(({tab:s})=>[s.name=="Details"?(l(),m("div",Ke,[o(a).data.sla_status?(l(),c(ie,{key:0,modelValue:o(a).data,"onUpdate:modelValue":e[2]||(e[2]=d=>o(a).data=d),onUpdateField:k},null,8,["modelValue"])):v("",!0),o(T).data?(l(),m("div",Qe,[r("div",Xe,[(l(!0),m(F,null,Oe(o(T).data,(d,ae)=>(l(),m("div",{key:d.label,class:P(["flex flex-col px-2 py-3 sm:p-3",{"border-b":ae!==o(T).data.length-1}])},[i(we,{"is-opened":d.opened,label:d.label},{default:p(()=>[i(re,{fields:d.fields,modelValue:o(a).data,"onUpdate:modelValue":e[3]||(e[3]=te=>o(a).data=te),onUpdate:k},null,8,["fields","modelValue"])]),_:2},1032,["is-opened","label"])],2))),128))])])):v("",!0)])):(l(),c(de,{key:1,doctype:"CRM Lead",title:s.name,tabs:S.value,reload:U.value,"onUpdate:reload":e[4]||(e[4]=d=>U.value=d),tabIndex:I.value,"onUpdate:tabIndex":e[5]||(e[5]=d=>I.value=d),modelValue:o(a),"onUpdate:modelValue":e[6]||(e[6]=d=>je(a)?a.value=d:null)},null,8,["title","tabs","reload","tabIndex","modelValue"]))]),_:1},8,["modelValue","tabs"])])):v("",!0),L.value?(l(),c(ge,{key:3,modelValue:L.value,"onUpdate:modelValue":e[8]||(e[8]=s=>L.value=s),assignees:o(a).data._assignedTo,"onUpdate:assignees":e[9]||(e[9]=s=>o(a).data._assignedTo=s),doc:o(a).data,doctype:"CRM Lead"},null,8,["modelValue","assignees","doc"])):v("",!0),i(z,{modelValue:A.value,"onUpdate:modelValue":e[14]||(e[14]=s=>A.value=s),options:{title:t.__("Convert to Deal"),size:"xl",actions:[{label:t.__("Convert"),variant:"solid",onClick:R}]}},{"body-content":p(()=>[r("div",Ye,[i(ve,{class:"h-4 w-4"}),r("label",Ze,C(t.__("Organization")),1)]),r("div",ea,[r("div",aa,[r("div",null,C(t.__("Choose Existing")),1),i(o(W),{modelValue:g.value,"onUpdate:modelValue":e[10]||(e[10]=s=>g.value=s)},null,8,["modelValue"])]),g.value?(l(),c(j,{key:0,class:"form-control mt-2.5",variant:"outline",size:"md",value:V.value,doctype:"CRM Organization",onChange:e[11]||(e[11]=s=>V.value=s)},null,8,["value"])):(l(),m("div",ta,C(t.__("New organization will be created based on the data in details section")),1))]),r("div",oa,[i(be,{class:"h-4 w-4"}),r("label",sa,C(t.__("Contact")),1)]),r("div",la,[r("div",na,[r("div",null,C(t.__("Choose Existing")),1),i(o(W),{modelValue:y.value,"onUpdate:modelValue":e[12]||(e[12]=s=>y.value=s)},null,8,["modelValue"])]),y.value?(l(),c(j,{key:0,class:"form-control mt-2.5",variant:"outline",size:"md",value:u.value,doctype:"Contact",onChange:e[13]||(e[13]=s=>u.value=s)},null,8,["value"])):(l(),m("div",ia,C(t.__("New contact will be created based on the person's details")),1))])]),_:1},8,["modelValue","options"])],64)}}};export{Ga as default};
//# sourceMappingURL=MobileLead-759a8c6c.js.map
