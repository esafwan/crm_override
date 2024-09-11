import{_ as u,b as h,c as f,e as c,M as g,N as m,O as _}from"./index-82d0b844.js";class F{constructor(){this.listeners={},this.failed=!1}on(e,s){this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(s)}trigger(e,s){(this.listeners[e]||[]).forEach(l=>{l.call(this,s)})}upload(e,s){return new Promise((o,l)=>{let t=new XMLHttpRequest;t.upload.addEventListener("loadstart",()=>{this.trigger("start")}),t.upload.addEventListener("progress",a=>{a.lengthComputable&&this.trigger("progress",{uploaded:a.loaded,total:a.total})}),t.upload.addEventListener("load",()=>{this.trigger("finish")}),t.addEventListener("error",()=>{this.trigger("error"),l()}),t.onreadystatechange=()=>{if(t.readyState==XMLHttpRequest.DONE){let a;if(t.status===200){let d=null;try{d=JSON.parse(t.responseText)}catch{d=t.responseText}let p=d.message||d;o(p)}else if(t.status===403)a=JSON.parse(t.responseText);else{this.failed=!0;try{a=JSON.parse(t.responseText)}catch{}}a&&a.exc&&console.error(JSON.parse(a.exc)[0]),l(a)}};const n=s.upload_endpoint||"/api/method/upload_file";t.open("POST",n,!0),t.setRequestHeader("Accept","application/json"),window.csrf_token&&window.csrf_token!=="{{ csrf_token }}"&&t.setRequestHeader("X-Frappe-CSRF-Token",window.csrf_token);let i=new FormData;e&&i.append("file",e,e.name),i.append("is_private",s.private?"1":"0"),i.append("folder",s.folder||"Home"),s.file_url&&i.append("file_url",s.file_url),s.doctype&&i.append("doctype",s.doctype),s.docname&&i.append("docname",s.docname),s.fieldname&&i.append("fieldname",s.fieldname),s.method&&i.append("method",s.method),s.type&&i.append("type",s.type),t.send(i)})}}const y={name:"FileUploader",props:["fileTypes","uploadArgs","validateFile"],data(){return{uploader:null,uploading:!1,uploaded:0,error:null,message:"",total:0,file:null,finishedUploading:!1}},computed:{progress(){let r=Math.floor(this.uploaded/this.total*100);return isNaN(r)?0:r},success(){return this.finishedUploading&&!this.error}},methods:{inputRef(){return this.$refs.input},openFileSelector(){this.$refs.input.click()},async onFileAdd(r){if(this.error=null,this.file=r.target.files[0],this.file&&this.validateFile)try{let e=await this.validateFile(this.file);e&&(this.error=e)}catch(e){this.error=e}this.error||this.uploadFile(this.file)},async uploadFile(r){this.error=null,this.uploaded=0,this.total=0,this.uploader=new F,this.uploader.on("start",()=>{this.uploading=!0}),this.uploader.on("progress",e=>{this.uploaded=e.uploaded,this.total=e.total}),this.uploader.on("error",()=>{this.uploading=!1,this.error="Error Uploading File"}),this.uploader.on("finish",()=>{this.uploading=!1,this.finishedUploading=!0}),this.uploader.upload(r,this.uploadArgs||{}).then(e=>{this.$emit("success",e)}).catch(e=>{this.uploading=!1;let s="Error Uploading File";e!=null&&e._server_messages?s=JSON.parse(JSON.parse(e._server_messages)[0]).message:e!=null&&e.exc&&(s=JSON.parse(e.exc)[0].split(`
`).slice(-2,-1)[0]),this.error=s,this.$emit("failure",e)})}},expose:["inputRef"]},S=["accept"];function v(r,e,s,o,l,t){return h(),f("div",null,[c("input",{ref:"input",type:"file",accept:s.fileTypes,class:"hidden",onChange:e[0]||(e[0]=(...n)=>t.onFileAdd&&t.onFileAdd(...n))},null,40,S),g(r.$slots,"default",m(_({file:l.file,uploading:l.uploading,progress:t.progress,uploaded:l.uploaded,message:l.message,error:l.error,total:l.total,success:t.success,openFileSelector:t.openFileSelector})))])}const w=u(y,[["render",v]]);export{w as F};
//# sourceMappingURL=FileUploader-b4f98b38.js.map
