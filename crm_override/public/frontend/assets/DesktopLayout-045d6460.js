import{_ as F}from"./Section-2652928e.js";import{E as H}from"./Email2Icon-c181bc5b.js";import{P as W}from"./PinIcon-d3dd27b0.js";import{C as U}from"./CameraIcon-882f4582.js";import{_ as q,a as N,C as Y}from"./CallUI-9b816702.js";import{L as B}from"./LeadsIcon-186f8b9f.js";import{D as A}from"./DealsIcon-491a0387.js";import{C as D}from"./ContactsIcon-bcb3e80b.js";import{O as M}from"./OrganizationsIcon-557bc8d4.js";import{N as P}from"./NoteModal-fe2f5600.js";import{T as G}from"./TaskIcon-5ecf8abe.js";import{P as S}from"./PhoneIcon-3c556b02.js";import{_ as J,b as o,c as r,e,l as K,o as Q,a as V,r as k,u as t,t as h,d as a,w as f,F as I,f as z,g as b,n as x,p as C,z as T,j as X,B as Z,D as ee,M as te}from"./index-82d0b844.js";import{n as _,N as j}from"./notifications-1372c14d.js";import{W as oe}from"./WhatsAppIcon-67297c1d.js";import{M as se}from"./MarkAsDoneIcon-e6c436b2.js";import{g as ae,_ as O,a as ne,t as le}from"./index-8340263f.js";import{o as ie,a as re}from"./Dropdown-f8d4a8c8.js";import{v as ce}from"./views-5c6870e6.js";import"./FileUploader-b4f98b38.js";import"./Fields-ea2aa0dd.js";import"./NestedPopover-9b04b27b.js";import"./EditIcon-3c54f763.js";import"./IndicatorIcon-d1b8f59f.js";import"./settings-6089b88c.js";import"./contacts-226dfac2.js";import"./ArrowUpRightIcon-60e3a514.js";const de={},_e={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function ue(v,u){return o(),r("svg",_e,u[0]||(u[0]=[e("path",{d:"M10.875 9.06223L3 9.06232",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),e("path",{d:"M6.74537 5.31699L3 9.06236L6.74527 12.8076",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),e("path",{d:"M14.1423 4L14.1423 14.125",stroke:"currentColor","stroke-linecap":"round"},null,-1)]))}const me=J(de,[["render",ue]]),pe={class:"flex h-screen flex-col"},fe={class:"z-20 flex items-center justify-between border-b bg-white px-5 py-2.5"},he={class:"text-base font-medium"},ge={class:"flex gap-1"},xe={key:0,class:"divide-y overflow-auto text-base"},be={class:"mt-1 flex items-center gap-2.5"},ve=["innerHTML"],ye={key:1,class:"mb-2 space-x-1 leading-5 text-gray-600"},ke={class:"font-medium text-gray-900"},Ce={class:"font-medium text-gray-900"},we={class:"text-sm text-gray-600"},$e={key:1,class:"flex flex-1 flex-col items-center justify-center gap-2"},Le={class:"text-lg font-medium text-gray-500"},Ne={__name:"Notifications",setup(v){const{$socket:u}=ae(),m=K(null);ie(m,()=>{_().visible&&y()},{ignore:["#notifications-btn"]});function y(){_().toggle()}function c(s){T("notification_mark_as_read"),_().mark_doc_as_read(s)}function w(){T("notification_mark_all_as_read"),_().mark_as_read.reload()}Q(()=>{u.off("crm_notification")}),V(()=>{u.on("crm_notification",()=>{_().notifications.reload()})});function $(s){let p={leadId:s.reference_name};return s.route_name==="Deal"&&(p={dealId:s.reference_name}),{name:s.route_name,params:p,hash:"#"+s.comment||s.notification_type_doc}}return V(()=>{}),(s,p)=>{var d;const n=k("Button"),l=k("FeatherIcon"),L=k("RouterLink");return t(_)().visible?(o(),r("div",{key:0,ref_key:"target",ref:m,class:"absolute z-20 h-screen bg-white transition-all duration-300 ease-in-out",style:{"box-shadow":"8px 0px 8px rgba(0, 0, 0, 0.1)","max-width":"350px","min-width":"350px",left:"calc(100% + 1px)"}},[e("div",pe,[e("div",fe,[e("div",he,h(s.__("Notifications")),1),e("div",ge,[a(t(O),{text:s.__("Mark all as read")},{default:f(()=>[e("div",null,[a(n,{variant:"ghost",onClick:p[0]||(p[0]=()=>w())},{icon:f(()=>[a(se,{class:"h-4 w-4"})]),_:1})])]),_:1},8,["text"]),a(t(O),{text:s.__("Close")},{default:f(()=>[e("div",null,[a(n,{variant:"ghost",onClick:p[1]||(p[1]=()=>y())},{icon:f(()=>[a(l,{name:"x",class:"h-4 w-4"})]),_:1})])]),_:1},8,["text"])])]),(d=t(_)().allNotifications)!=null&&d.length?(o(),r("div",xe,[(o(!0),r(I,null,z(t(_)().allNotifications,i=>(o(),b(L,{key:i.comment,to:$(i),class:"flex cursor-pointer items-start gap-2.5 px-4 py-2.5 hover:bg-gray-100",onClick:g=>c(i.comment||i.notification_type_doc)},{default:f(()=>[e("div",be,[e("div",{class:x(["size-[5px] rounded-full",[i.read?"bg-transparent":"bg-gray-900"]])},null,2),i.type=="WhatsApp"?(o(),b(oe,{key:0,class:"size-7"})):(o(),b(ne,{key:1,user:i.from_user.name,size:"lg"},null,8,["user"]))]),e("div",null,[i.notification_text?(o(),r("div",{key:0,innerHTML:i.notification_text},null,8,ve)):(o(),r("div",ye,[e("span",ke,h(i.from_user.full_name),1),e("span",null,h(s.__("mentioned you in {0}",[i.reference_doctype])),1),e("span",Ce,h(i.reference_name),1)])),e("div",we,h(s.__(t(le)(i.creation))),1)])]),_:2},1032,["to","onClick"]))),128))])):(o(),r("div",$e,[a(j,{class:"h-20 w-20 text-gray-300"}),e("div",Le,h(s.__("No new notifications")),1)]))])],512)):C("",!0)}}},Ie={class:"flex-1 overflow-y-auto"},ze={class:"mb-3 flex flex-col"},Be={key:1,class:"absolute -left-1.5 top-1 z-20 h-[5px] w-[5px] translate-x-6 translate-y-1 rounded-full bg-gray-800 ring-1 ring-white"},Ae={key:0,class:"mx-2 my-2 h-1 border-b"},De=["onClick"],Me={class:"flex flex-col"},Pe={class:"m-2 flex flex-col gap-1"},Se={class:"grid h-4.5 w-4.5 flex-shrink-0 place-items-center"},Ve={__name:"AppSidebar",setup(v){const{getPinnedViews:u,getPublicViews:m}=ce(),{toggle:y}=_(),c=re("isSidebarCollapsed",!1),w=[{label:"Leads",icon:B,to:"Leads"},{label:"Deals",icon:A,to:"Deals"},{label:"Contacts",icon:D,to:"Contacts"},{label:"Organizations",icon:M,to:"Organizations"},{label:"Notes",icon:P,to:"Notes"},{label:"Tasks",icon:G,to:"Tasks"},{label:"Call Logs",icon:S,to:"Call Logs"},{label:"Email Templates",icon:H,to:"Email Templates"},{label:"Video",icon:U,to:"Video"}],$=X(()=>{let n=[{name:"All Views",hideLabel:!0,opened:!0,views:w}];return m().length&&n.push({name:"Public views",opened:!0,views:s(m())}),u().length&&n.push({name:"Pinned views",opened:!0,views:s(u())}),n});function s(n){return n.map(l=>({label:l.label,icon:p(l.route_name,l.icon),to:{name:l.route_name,params:{viewType:l.type||"list"},query:{view:l.name}}}))}function p(n,l){if(l)return Z("div",{class:"size-auto"},l);switch(n){case"Leads":return B;case"Deals":return A;case"Contacts":return D;case"Organizations":return M;case"Notes":return P;case"Call Logs":return S;default:return W}}return(n,l)=>{const L=k("Badge");return o(),r("div",{class:x(["relative flex h-full flex-col justify-between transition-all duration-300 ease-in-out",t(c)?"w-12":"w-[220px]"])},[e("div",null,[a(q,{class:"p-2",isCollapsed:t(c)},null,8,["isCollapsed"])]),e("div",Ie,[e("div",ze,[a(N,{id:"notifications-btn",label:n.__("Notifications"),icon:j,isCollapsed:t(c),onClick:l[0]||(l[0]=()=>t(y)()),class:"relative mx-2 my-0.5"},{right:f(()=>[!t(c)&&t(_)().unreadNotificationsCount?(o(),b(L,{key:0,label:t(_)().unreadNotificationsCount,variant:"subtle"},null,8,["label"])):t(_)().unreadNotificationsCount?(o(),r("div",Be)):C("",!0)]),_:1},8,["label","isCollapsed"])]),(o(!0),r(I,null,z($.value,d=>{var i;return o(),r("div",{key:d.label},[!d.hideLabel&&t(c)&&((i=d.views)!=null&&i.length)?(o(),r("div",Ae)):C("",!0),a(F,{label:d.name,hideLabel:d.hideLabel,isOpened:d.opened},{header:f(({opened:g,hide:E,toggle:R})=>[E?C("",!0):(o(),r("div",{key:0,class:x(["flex cursor-pointer gap-1.5 px-1 text-base font-medium text-gray-600 transition-all duration-300 ease-in-out",t(c)?"ml-0 h-0 overflow-hidden opacity-0":"ml-2 mt-4 h-7 w-auto opacity-100"]),onClick:He=>R()},[a(t(ee),{name:"chevron-right",class:x(["h-4 text-gray-900 transition-all duration-300 ease-in-out",{"rotate-90":g}])},null,8,["class"]),e("span",null,h(n.__(d.name)),1)],10,De))]),default:f(()=>[e("nav",Me,[(o(!0),r(I,null,z(d.views,g=>(o(),b(N,{icon:g.icon,label:n.__(g.label),to:g.to,isCollapsed:t(c),class:"mx-2 my-0.5"},null,8,["icon","label","to","isCollapsed"]))),256))])]),_:2},1032,["label","hideLabel","isOpened"])])}),128))]),e("div",Pe,[a(N,{label:t(c)?n.__("Expand"):n.__("Collapse"),isCollapsed:t(c),onClick:l[1]||(l[1]=d=>c.value=!t(c)),class:""},{icon:f(()=>[e("span",Se,[a(me,{class:x(["h-4.5 w-4.5 text-gray-700 duration-300 ease-in-out",{"[transform:rotateY(180deg)]":t(c)}])},null,8,["class"])])]),_:1},8,["label","isCollapsed"])]),a(Ne)],2)}}},Te={class:"flex border-b pr-5"},Oe={class:"flex items-center justify-center"},je={__name:"AppHeader",setup(v){return(u,m)=>(o(),r("div",Te,[m[0]||(m[0]=e("div",{id:"app-header",class:"flex-1"},null,-1)),e("div",Oe,[a(Y)])]))}},Ee={class:"flex h-screen w-screen"},Re={class:"h-full border-r bg-gray-50"},Fe={class:"flex-1 flex flex-col h-full overflow-auto"},gt={__name:"DesktopLayout",setup(v){return(u,m)=>(o(),r("div",Ee,[e("div",Re,[a(Ve)]),e("div",Fe,[a(je),te(u.$slots,"default")])]))}};export{gt as default};
//# sourceMappingURL=DesktopLayout-045d6460.js.map