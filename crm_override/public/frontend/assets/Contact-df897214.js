import{_ as Y}from"./GroupByIcon-584f979a.js";import{_ as Z}from"./Dropdown-57634c86.js";import{_ as ee}from"./LayoutHeader-ce3efb9b.js";import{E as ae}from"./Email2Icon-c181bc5b.js";import{P as te}from"./PhoneIcon-3c556b02.js";import{E as oe}from"./EditIcon-3c54f763.js";import{C as se}from"./CameraIcon-882f4582.js";import{D as le}from"./DealsIcon-491a0387.js";import{_ as ne}from"./DealsListView-5d1fed0b.js";import{C as ie}from"./ContactModal-cf8a9129.js";import{_ as re}from"./QuickEntryModal-91fa4073.js";import{g as ce,u as me,e as ue,d as de,t as _e,b as F,_ as pe,c as fe}from"./index-8340263f.js";import{g as ge,_ as ye}from"./view-eb7d1a47.js";import{o as be}from"./organizations-c51d501b.js";import{s as ve}from"./statuses-3dacf993.js";import{c as z}from"./settings-6089b88c.js";import{_ as he,h as we,v as xe,l as h,x as B,j as w,K as ke,B as Ce,r as x,b as l,c as u,u as a,g as d,w as m,p as n,d as i,F as Ie,I as S,e as r,C as ze,G as k,t as _,n as E,H as j}from"./index-82d0b844.js";import{_ as Ee}from"./Breadcrumbs.vue_vue_type_script_setup_true_lang-cd1be04a.js";import{F as Ve}from"./FileUploader-b4f98b38.js";import"./Dropdown-f8d4a8c8.js";import"./ListBulkActions-6a63e81f.js";import"./views-5c6870e6.js";import"./NestedPopover-9b04b27b.js";import"./AssignmentModal-a088aaa9.js";import"./IndicatorIcon-d1b8f59f.js";import"./ListRows-d5bf097d.js";import"./ListFooter-621c0d06.js";import"./label-16764775.js";import"./Fields-ea2aa0dd.js";import"./OrganizationsIcon-557bc8d4.js";import"./DragVerticalIcon-71ed262e.js";import"./Switch.vue_vue_type_script_setup_true_lang-d07933ba.js";const De={key:1,class:"flex h-full flex-col overflow-hidden"},qe={class:"flex items-start justify-start gap-6 p-5 sm:items-center"},Me={class:"group relative h-24 w-24"},$e={class:"z-1 absolute bottom-0 left-0 right-0 flex h-14 cursor-pointer items-center justify-center rounded-b-full bg-black bg-opacity-40 pt-3 opacity-0 duration-300 ease-in-out group-hover:opacity-100",style:{"-webkit-clip-path":"inset(12px 0 0 0)","clip-path":"inset(12px 0 0 0)"}},Fe={class:"flex flex-col gap-2 truncate sm:gap-0.5"},Be={class:"truncate text-3xl font-semibold"},Se={key:0},je={class:"flex flex-col flex-wrap gap-3 text-base text-gray-700 sm:flex-row sm:items-center sm:gap-2"},Ne={key:0,class:"flex items-center gap-1.5"},Te={class:""},Ue={key:1,class:"hidden text-3xl leading-[0] text-gray-600 sm:flex"},Pe={class:""},Re={key:3,class:"hidden text-3xl leading-[0] text-gray-600 sm:flex"},Ae={key:4,class:"flex items-center gap-1.5"},Oe={class:""},Ge={key:5,class:"hidden text-3xl leading-[0] text-gray-600 sm:flex"},Le={class:"mt-2 flex gap-1.5"},He={key:1,class:"grid flex-1 place-items-center text-xl font-medium text-gray-500"},Je={class:"flex flex-col items-center justify-center space-y-3"},Ke={__name:"Contact",props:{contactId:{type:String,required:!0}},setup(N){const{$dialog:T,makeCall:U}=ce(),{getUser:V}=me(),{getOrganization:D}=be(),{getDealStatus:P}=ve(),p=N,f=we(),R=xe(),y=h(!1),g=h(!1),C=h(!1),t=B({url:"crm.api.contact.get_contact",cache:["contact",p.contactId],params:{name:p.contactId},auto:!0,transform:e=>({...e,actual_mobile_no:e.mobile_no,mobile_no:e.mobile_no})}),A=w(()=>{var o;let e=[{label:__("Contacts"),route:{name:"Contacts"}}];if(f.query.view||f.query.viewType){let c=ge(f.query.view,f.query.viewType,"Contact");c&&e.push({label:__(c.label),icon:c.icon,route:{name:"Contacts",params:{viewType:f.query.viewType},query:{view:f.query.view}}})}return e.push({label:(o=t.data)==null?void 0:o.full_name,route:{name:"Contact",params:{contactId:p.contactId}}}),e});ke(()=>{var e,o;return{title:((e=t.data)==null?void 0:e.full_name)||((o=t.data)==null?void 0:o.name)}});function O(e){let o=e.name.split(".").pop().toLowerCase();if(!["png","jpg","jpeg"].includes(o))return __("Only PNG and JPG images are allowed")}async function q(e){await S("frappe.client.set_value",{doctype:"Contact",name:p.contactId,fieldname:"image",value:(e==null?void 0:e.file_url)||""}),t.reload()}async function G(){T({title:__("Delete contact"),message:__("Are you sure you want to delete this contact?"),actions:[{label:__("Delete"),theme:"red",variant:"solid",async onClick(e){await S("frappe.client.delete",{doctype:"Contact",name:p.contactId}),e(),R.push({name:"Contacts"})}}]})}const M=h(0),L=[{label:"Deals",icon:Ce(le,{class:"h-4 w-4"}),count:w(()=>{var e;return(e=b.data)==null?void 0:e.length})}],b=B({url:"crm.api.contact.get_linked_deals",cache:["deals",p.contactId],params:{contact:p.contactId},auto:!0}),I=w(()=>!b.data||b.data==[]?[]:b.data.map(e=>J(e))),H=w(()=>K);function J(e){var o,c;return{name:e.name,organization:{label:e.organization,logo:(o=D(e.organization))==null?void 0:o.organization_logo},annual_revenue:ue(e.annual_revenue,e.currency),status:{label:e.status,color:(c=P(e.status))==null?void 0:c.iconColorClass},email:e.email,mobile_no:e.mobile_no,deal_owner:{label:e.deal_owner&&V(e.deal_owner).full_name,...e.deal_owner&&V(e.deal_owner)},modified:{label:de(e.modified,fe),timeAgo:__(_e(e.modified))}}}const K=[{label:__("Organization"),key:"organization",width:"11rem"},{label:__("Amount"),key:"annual_revenue",width:"9rem"},{label:__("Status"),key:"status",width:"10rem"},{label:__("Email"),key:"email",width:"12rem"},{label:__("Mobile no"),key:"mobile_no",width:"11rem"},{label:__("Deal owner"),key:"deal_owner",width:"10rem"},{label:__("Last modified"),key:"modified",width:"8rem"}];return(e,o)=>{const c=x("Button"),Q=x("FeatherIcon"),W=x("ErrorMessage"),X=x("Badge");return l(),u(Ie,null,[a(t).data?(l(),d(ee,{key:0},{"left-header":m(()=>[i(a(Ee),{items:A.value},{prefix:m(({item:s})=>[s.icon?(l(),d(Y,{key:0,icon:s.icon,class:"mr-2 h-4"},null,8,["icon"])):n("",!0)]),_:1},8,["items"])]),_:1})):n("",!0),a(t).data?(l(),u("div",De,[i(a(Ve),{onSuccess:q,validateFile:O},{default:m(({openFileSelector:s,error:v})=>{var $;return[r("div",qe,[r("div",Me,[i(a(F),{size:"3xl",class:"h-24 w-24",label:a(t).data.full_name,image:a(t).data.image},null,8,["label","image"]),(l(),d(k(a(t).data.image?Z:"div"),ze(a(t).data.image?{options:[{icon:"upload",label:a(t).data.image?e.__("Change image"):e.__("Upload image"),onClick:s},{icon:"trash-2",label:e.__("Remove image"),onClick:()=>q("")}]}:{onClick:s},{class:"!absolute bottom-0 left-0 right-0"}),{default:m(()=>[r("div",$e,[i(se,{class:"h-6 w-6 cursor-pointer text-white"})])]),_:2},1040))]),r("div",Fe,[r("div",Be,[a(t).data.salutation?(l(),u("span",Se,_(a(t).data.salutation+". "),1)):n("",!0),r("span",null,_(a(t).data.full_name),1)]),r("div",je,[a(t).data.email_id?(l(),u("div",Ne,[i(ae,{class:"h-4 w-4"}),r("span",Te,_(a(t).data.email_id),1)])):n("",!0),a(t).data.email_id?(l(),u("span",Ue," · ")):n("",!0),a(t).data.actual_mobile_no?(l(),d(k(a(z)?a(pe):"div"),{key:2,text:e.__("Make Call")},{default:m(()=>[r("div",{class:E(["flex items-center gap-1.5",a(z)?"cursor-pointer":""]),onClick:o[0]||(o[0]=Qe=>a(z)&&a(U)(a(t).data.actual_mobile_no))},[i(te,{class:"h-4 w-4"}),r("span",Pe,_(a(t).data.actual_mobile_no),1)],2)]),_:1},8,["text"])):n("",!0),a(t).data.actual_mobile_no?(l(),u("span",Re," · ")):n("",!0),a(t).data.company_name?(l(),u("div",Ae,[i(a(F),{size:"xs",label:a(t).data.company_name,image:($=a(D)(a(t).data.company_name))==null?void 0:$.organization_logo},null,8,["label","image"]),r("span",Oe,_(a(t).data.company_name),1)])):n("",!0),a(t).data.company_name?(l(),u("span",Ge," · ")):n("",!0),a(t).data.email_id||a(t).data.mobile_no||a(t).data.company_name?(l(),d(c,{key:6,variant:"ghost",label:e.__("More"),class:"w-fit cursor-pointer hover:text-gray-900 sm:-ml-1",onClick:o[1]||(o[1]=()=>{C.value=!0,y.value=!0})},null,8,["label"])):n("",!0)]),r("div",Le,[i(c,{label:e.__("Edit"),size:"sm",onClick:o[2]||(o[2]=()=>{C.value=!1,y.value=!0})},{prefix:m(()=>[i(oe,{class:"h-4 w-4"})]),_:1},8,["label"]),i(c,{label:e.__("Delete"),theme:"red",size:"sm",onClick:G},{prefix:m(()=>[i(Q,{name:"trash-2",class:"h-4 w-4"})]),_:1},8,["label"])]),i(W,{message:e.__(v)},null,8,["message"])])])]}),_:1}),i(a(ye),{class:"overflow-hidden",modelValue:M.value,"onUpdate:modelValue":o[3]||(o[3]=s=>M.value=s),tabs:L},{tab:m(({tab:s,selected:v})=>[r("button",{class:E(["group flex items-center gap-2 border-b border-transparent py-2.5 text-base text-gray-600 duration-300 ease-in-out hover:border-gray-400 hover:text-gray-900",{"text-gray-900":v}])},[s.icon?(l(),d(k(s.icon),{key:0,class:"h-5"})):n("",!0),j(" "+_(e.__(s.label))+" ",1),i(X,{class:E(["group-hover:bg-gray-900",[v?"bg-gray-900":"bg-gray-600"]]),variant:"solid",theme:"gray",size:"sm"},{default:m(()=>[j(_(s.count),1)]),_:2},1032,["class"])],2)]),default:m(({tab:s})=>[s.label==="Deals"&&I.value.length?(l(),d(ne,{key:0,class:"mt-4",rows:I.value,columns:H.value,options:{selectable:!1,showTooltip:!1}},null,8,["rows","columns"])):n("",!0),I.value.length?n("",!0):(l(),u("div",He,[r("div",Je,[(l(),d(k(s.icon),{class:"!h-10 !w-10"})),r("div",null,_(e.__("No {0} Found",[e.__(s.label)])),1)])]))]),_:1},8,["modelValue"])])):n("",!0),i(ie,{modelValue:y.value,"onUpdate:modelValue":o[4]||(o[4]=s=>y.value=s),quickEntry:g.value,"onUpdate:quickEntry":o[5]||(o[5]=s=>g.value=s),contact:a(t),options:{detailMode:C.value}},null,8,["modelValue","quickEntry","contact","options"]),g.value?(l(),d(re,{key:2,modelValue:g.value,"onUpdate:modelValue":o[6]||(o[6]=s=>g.value=s),doctype:"Contact"},null,8,["modelValue"])):n("",!0)],64)}}},Va=he(Ke,[["__scopeId","data-v-e380658b"]]);export{Va as default};
//# sourceMappingURL=Contact-df897214.js.map