import{_ as L,b as C,c as B,e as r,m as w,i as b,v as I,l as f,k as R,r as m,g as V,w as p,t as v,u as s,d as _,p as T,I as x,z as Z,A as U}from"./index-82d0b844.js";import{A as z}from"./ArrowUpRightIcon-60e3a514.js";import{T as A}from"./views-5c6870e6.js";const E={},O={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function S(i,d){return C(),B("svg",O,d[0]||(d[0]=[r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.99707 14H11.9971C12.8255 14 13.4971 13.3284 13.4971 12.5V6.49988L12 6.49989C10.6193 6.4999 9.5 5.38061 9.5 3.99989V2H3.99707C3.16864 2 2.49707 2.67157 2.49707 3.5V12.5C2.49707 13.3284 3.16864 14 3.99707 14ZM13.8291 4.2806C14.1476 4.62366 14.3612 5.04668 14.4502 5.49987L14.4968 5.49987L14.4968 5.94777L14.4971 5.98173V12.5C14.4971 13.8807 13.3778 15 11.9971 15H3.99707C2.61636 15 1.49707 13.8807 1.49707 12.5V3.5C1.49707 2.11929 2.61636 1 3.99707 1H9.69261C10.3878 1 11.0516 1.28945 11.5246 1.79887L13.8291 4.2806ZM12 5.49989L13.4176 5.49988C13.3502 5.30132 13.2414 5.11735 13.0963 4.96105L10.7918 2.47932C10.7044 2.38525 10.6063 2.30368 10.5 2.23582V3.99989C10.5 4.82832 11.1716 5.4999 12 5.49989ZM5 11C4.72386 11 4.5 11.2239 4.5 11.5C4.5 11.7761 4.72386 12 5 12H8C8.27614 12 8.5 11.7761 8.5 11.5C8.5 11.2239 8.27614 11 8 11H5ZM10 9.5H5H4.75C4.47386 9.5 4.25 9.27614 4.25 9C4.25 8.72386 4.47386 8.5 4.75 8.5H5H10H11.25C11.5261 8.5 11.75 8.72386 11.75 9C11.75 9.27614 11.5261 9.5 11.25 9.5H10Z",fill:"currentColor"},null,-1)]))}const W=L(E,[["render",S]]),$={class:"flex items-center gap-3"},j={class:"text-2xl font-semibold leading-6 text-gray-900"},F={class:"flex flex-col gap-4"},J={class:"mb-1.5 text-sm text-gray-600"},q={class:"mb-1.5 text-sm text-gray-600"},X={__name:"NoteModal",props:w({note:{type:Object,default:{}},doctype:{type:String,default:"CRM Lead"},doc:{type:String,default:""}},{modelValue:{},modelModifiers:{},reloadNotes:{},reloadNotesModifiers:{}}),emits:w(["after"],["update:modelValue","update:reloadNotes"]),setup(i,{emit:d}){const n=i,c=b(i,"modelValue"),g=b(i,"reloadNotes"),h=d,M=I(),y=f(null),u=f(!1);let t=f({});async function N(){var e,o;if(!(n.note.title===t.value.title&&n.note.content===t.value.content)){if(t.value.name){let a=await x("frappe.client.set_value",{doctype:"FCRM Note",name:t.value.name,fieldname:t.value});a.name&&((e=g.value)==null||e.reload(),h("after",a))}else{let a=await x("frappe.client.insert",{doc:{doctype:"FCRM Note",title:t.value.title,content:t.value.content,reference_doctype:n.doctype,reference_docname:n.doc||""}});a.name&&(Z("note_created"),(o=g.value)==null||o.reload(),h("after",a,!0))}c.value=!1}}function H(){var a;if(!((a=n.note)!=null&&a.reference_docname))return;let e=n.note.reference_doctype=="CRM Deal"?"Deal":"Lead",o={leadId:n.note.reference_docname};e=="Deal"&&(o={dealId:n.note.reference_docname}),M.push({name:e,params:o})}return R(()=>c.value,e=>{e&&(u.value=!1,U(()=>{y.value.el.focus(),t.value={...n.note},(t.value.title||t.value.content)&&(u.value=!0)}))}),(e,o)=>{const a=m("Button"),k=m("TextInput"),D=m("Dialog");return C(),V(D,{modelValue:c.value,"onUpdate:modelValue":o[3]||(o[3]=l=>c.value=l),options:{size:"xl",actions:[{label:u.value?e.__("Update"):e.__("Create"),variant:"solid",onClick:()=>N()}]}},{"body-title":p(()=>{var l;return[r("div",$,[r("h3",j,v(u.value?e.__("Edit Note"):e.__("Create Note")),1),(l=s(t))!=null&&l.reference_docname?(C(),V(a,{key:0,variant:"outline",size:"sm",label:s(t).reference_doctype=="CRM Deal"?e.__("Open Deal"):e.__("Open Lead"),onClick:o[0]||(o[0]=G=>H())},{suffix:p(()=>[_(z,{class:"h-4 w-4"})]),_:1},8,["label"])):T("",!0)])]}),"body-content":p(()=>[r("div",F,[r("div",null,[r("div",J,v(e.__("Title")),1),_(k,{ref_key:"title",ref:y,variant:"outline",modelValue:s(t).title,"onUpdate:modelValue":o[1]||(o[1]=l=>s(t).title=l),placeholder:e.__("Call with John Doe")},null,8,["modelValue","placeholder"])]),r("div",null,[r("div",q,v(e.__("Content")),1),_(s(A),{variant:"outline",ref:"content","editor-class":"!prose-sm overflow-auto min-h-[180px] max-h-80 py-1.5 px-2 rounded border border-gray-300 bg-white hover:border-gray-400 hover:shadow-sm focus:bg-white focus:border-gray-500 focus:shadow-sm focus:ring-0 focus-visible:ring-2 focus-visible:ring-gray-400 text-gray-800 transition-colors",bubbleMenu:!0,content:s(t).content,onChange:o[2]||(o[2]=l=>s(t).content=l),placeholder:e.__("Took a call with John Doe and discussed the new project.")},null,8,["content","placeholder"])])])]),_:1},8,["modelValue","options"])}}};export{W as N,X as _};
//# sourceMappingURL=NoteModal-fe2f5600.js.map