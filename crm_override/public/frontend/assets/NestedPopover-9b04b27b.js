import{a8 as Z,l as x,j as C,aq as ee,ae as n,cJ as te,am as j,ac as ce,cK as Pe,cL as z,cM as _e,cN as Se,ad as ae,cO as we,cP as xe,cQ as ke,cR as Me,B as V,af as le,F as N,ah as K,a as de,ai as pe,ak as De,cS as ve,aa as J,a9 as Q,ar as T,as as F,cT as Ce,al as oe,aj as ne,an as B,cU as E,ao as X,_ as Ie,ay as Fe,R as Ee,a4 as Ve,D as Be,az as Oe,r as L,b as O,g as fe,w as Y,d as k,C as Te,e as D,t as H,c as G,f as W,n as Ye,o as $e,u as q,M as se,N as ue,O as ie,T as Ae,U as Ne,A as je,aD as Le}from"./index-82d0b844.js";var Ge=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ge||{});let he=Symbol("PopoverContext");function re(e){let i=ne(he,null);if(i===null){let u=new Error(`<${e} /> is missing a parent <${be.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,re),u}return i}let Ke=Symbol("PopoverGroupContext");function ge(){return ne(Ke,null)}let me=Symbol("PopoverPanelContext");function Re(){return ne(me,null)}let be=Z({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:i,attrs:u,expose:g}){var y;let r=x(null);g({el:r,$el:r});let l=x(1),t=x(null),P=x(null),_=x(null),c=x(null),p=C(()=>ee(r)),m=C(()=>{var a,s;if(!n(t)||!n(c))return!1;for(let U of document.querySelectorAll("body > *"))if(Number(U==null?void 0:U.contains(n(t)))^Number(U==null?void 0:U.contains(n(c))))return!0;let o=te(),b=o.indexOf(n(t)),M=(b+o.length-1)%o.length,I=(b+1)%o.length,R=o[M],ye=o[I];return!((a=n(c))!=null&&a.contains(R))&&!((s=n(c))!=null&&s.contains(ye))}),v={popoverState:l,buttonId:x(null),panelId:x(null),panel:c,button:t,isPortalled:m,beforePanelSentinel:P,afterPanelSentinel:_,togglePopover(){l.value=j(l.value,{0:1,1:0})},closePopover(){l.value!==1&&(l.value=1)},close(a){v.closePopover();let s=(()=>a?a instanceof HTMLElement?a:a.value instanceof HTMLElement?n(a):n(v.button):n(v.button))();s==null||s.focus()}};ce(he,v),Pe(C(()=>j(l.value,{0:z.Open,1:z.Closed})));let S={buttonId:v.buttonId,panelId:v.panelId,close(){v.closePopover()}},w=ge(),$=w==null?void 0:w.registerPopover,[A,f]=_e(),h=Se({mainTreeNodeRef:w==null?void 0:w.mainTreeNodeRef,portals:A,defaultContainers:[t,c]});function d(){var a,s,o,b;return(b=w==null?void 0:w.isFocusWithinPopoverGroup())!=null?b:((a=p.value)==null?void 0:a.activeElement)&&(((s=n(t))==null?void 0:s.contains(p.value.activeElement))||((o=n(c))==null?void 0:o.contains(p.value.activeElement)))}return ae(()=>$==null?void 0:$(S)),we((y=p.value)==null?void 0:y.defaultView,"focus",a=>{var s,o;a.target!==window&&a.target instanceof HTMLElement&&l.value===0&&(d()||t&&c&&(h.contains(a.target)||(s=n(v.beforePanelSentinel))!=null&&s.contains(a.target)||(o=n(v.afterPanelSentinel))!=null&&o.contains(a.target)||v.closePopover()))},!0),xe(h.resolveContainers,(a,s)=>{var o;v.closePopover(),ke(s,Me.Loose)||(a.preventDefault(),(o=n(t))==null||o.focus())},C(()=>l.value===0)),()=>{let a={open:l.value===0,close:v.close};return V(N,[V(f,{},()=>le({theirProps:{...e,...u},ourProps:{ref:r},slot:a,slots:i,attrs:u,name:"Popover"})),V(h.MainTreeNode)])}}}),Ue=Z({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:i,slots:u,expose:g}){var y;let r=(y=e.id)!=null?y:`headlessui-popover-button-${K()}`,l=re("PopoverButton"),t=C(()=>ee(l.button));g({el:l.button,$el:l.button}),de(()=>{l.buttonId.value=r}),pe(()=>{l.buttonId.value=null});let P=ge(),_=P==null?void 0:P.closeOthers,c=Re(),p=C(()=>c===null?!1:c.value===l.panelId.value),m=x(null),v=`headlessui-focus-sentinel-${K()}`;p.value||ae(()=>{l.button.value=n(m)});let S=De(C(()=>({as:e.as,type:i.type})),m);function w(a){var s,o,b,M,I;if(p.value){if(l.popoverState.value===1)return;switch(a.key){case B.Space:case B.Enter:a.preventDefault(),(o=(s=a.target).click)==null||o.call(s),l.closePopover(),(b=n(l.button))==null||b.focus();break}}else switch(a.key){case B.Space:case B.Enter:a.preventDefault(),a.stopPropagation(),l.popoverState.value===1&&(_==null||_(l.buttonId.value)),l.togglePopover();break;case B.Escape:if(l.popoverState.value!==0)return _==null?void 0:_(l.buttonId.value);if(!n(l.button)||(M=t.value)!=null&&M.activeElement&&!((I=n(l.button))!=null&&I.contains(t.value.activeElement)))return;a.preventDefault(),a.stopPropagation(),l.closePopover();break}}function $(a){p.value||a.key===B.Space&&a.preventDefault()}function A(a){var s,o;e.disabled||(p.value?(l.closePopover(),(s=n(l.button))==null||s.focus()):(a.preventDefault(),a.stopPropagation(),l.popoverState.value===1&&(_==null||_(l.buttonId.value)),l.togglePopover(),(o=n(l.button))==null||o.focus()))}function f(a){a.preventDefault(),a.stopPropagation()}let h=ve();function d(){let a=n(l.panel);if(!a)return;function s(){j(h.value,{[E.Forwards]:()=>T(a,F.First),[E.Backwards]:()=>T(a,F.Last)})===X.Error&&T(te().filter(o=>o.dataset.headlessuiFocusGuard!=="true"),j(h.value,{[E.Forwards]:F.Next,[E.Backwards]:F.Previous}),{relativeTo:n(l.button)})}s()}return()=>{let a=l.popoverState.value===0,s={open:a},{...o}=e,b=p.value?{ref:m,type:S.value,onKeydown:w,onClick:A}:{ref:m,id:r,type:S.value,"aria-expanded":l.popoverState.value===0,"aria-controls":n(l.panel)?l.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:w,onKeyup:$,onClick:A,onMousedown:f};return V(N,[le({ourProps:b,theirProps:{...i,...o},slot:s,attrs:i,slots:u,name:"PopoverButton"}),a&&!p.value&&l.isPortalled.value&&V(J,{id:v,features:Q.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:d})])}}}),ze=Z({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:i,slots:u,expose:g}){var y;let r=(y=e.id)!=null?y:`headlessui-popover-panel-${K()}`,{focus:l}=e,t=re("PopoverPanel"),P=C(()=>ee(t.panel)),_=`headlessui-focus-sentinel-before-${K()}`,c=`headlessui-focus-sentinel-after-${K()}`;g({el:t.panel,$el:t.panel}),de(()=>{t.panelId.value=r}),pe(()=>{t.panelId.value=null}),ce(me,t.panelId),ae(()=>{var f,h;if(!l||t.popoverState.value!==0||!t.panel)return;let d=(f=P.value)==null?void 0:f.activeElement;(h=n(t.panel))!=null&&h.contains(d)||T(n(t.panel),F.First)});let p=Ce(),m=C(()=>p!==null?(p.value&z.Open)===z.Open:t.popoverState.value===0);function v(f){var h,d;switch(f.key){case B.Escape:if(t.popoverState.value!==0||!n(t.panel)||P.value&&!((h=n(t.panel))!=null&&h.contains(P.value.activeElement)))return;f.preventDefault(),f.stopPropagation(),t.closePopover(),(d=n(t.button))==null||d.focus();break}}function S(f){var h,d,a,s,o;let b=f.relatedTarget;b&&n(t.panel)&&((h=n(t.panel))!=null&&h.contains(b)||(t.closePopover(),((a=(d=n(t.beforePanelSentinel))==null?void 0:d.contains)!=null&&a.call(d,b)||(o=(s=n(t.afterPanelSentinel))==null?void 0:s.contains)!=null&&o.call(s,b))&&b.focus({preventScroll:!0})))}let w=ve();function $(){let f=n(t.panel);if(!f)return;function h(){j(w.value,{[E.Forwards]:()=>{var d;T(f,F.First)===X.Error&&((d=n(t.afterPanelSentinel))==null||d.focus())},[E.Backwards]:()=>{var d;(d=n(t.button))==null||d.focus({preventScroll:!0})}})}h()}function A(){let f=n(t.panel);if(!f)return;function h(){j(w.value,{[E.Forwards]:()=>{let d=n(t.button),a=n(t.panel);if(!d)return;let s=te(),o=s.indexOf(d),b=s.slice(0,o+1),M=[...s.slice(o+1),...b];for(let I of M.slice())if(I.dataset.headlessuiFocusGuard==="true"||a!=null&&a.contains(I)){let R=M.indexOf(I);R!==-1&&M.splice(R,1)}T(M,F.First,{sorted:!1})},[E.Backwards]:()=>{var d;T(f,F.Previous)===X.Error&&((d=n(t.button))==null||d.focus())}})}h()}return()=>{let f={open:t.popoverState.value===0,close:t.close},{focus:h,...d}=e,a={ref:t.panel,id:r,onKeydown:v,onFocusout:l&&t.popoverState.value===0?S:void 0,tabIndex:-1};return le({ourProps:a,theirProps:{...i,...d},attrs:i,slot:f,slots:{...u,default:(...s)=>{var o;return[V(N,[m.value&&t.isPortalled.value&&V(J,{id:_,ref:t.beforePanelSentinel,features:Q.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:$}),(o=u.default)==null?void 0:o.call(u,...s),m.value&&t.isPortalled.value&&V(J,{id:c,ref:t.afterPanelSentinel,features:Q.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:A})])]}},features:oe.RenderStrategy|oe.Static,visible:m.value,name:"PopoverPanel"})}}});const He={name:"DatePicker",props:["value","modelValue","placeholder","formatter","readonly","inputClass"],emits:["update:modelValue","change"],components:{Popover:Fe,Input:Ee,Button:Ve,FeatherIcon:Be,TextInput:Oe},data(){return{currentYear:null,currentMonth:null}},created(){this.selectCurrentMonthYear()},computed:{today(){return this.getDate()},datesAsWeeks(){let e=[],i=this.dates.slice();for(;i.length;){let u=i.splice(0,7);e.push(u)}return e},dates(){if(!(this.currentYear&&this.currentMonth))return[];let e=this.currentMonth-1,i=this.currentYear,u=this.getDate(i,e,1),g=this.getDate(i,e+1,0),y=u.getDay(),r=6-g.getDay(),l=this.getDatesAfter(u,-y),t=this.getDatesAfter(g,r),P=this.getDaysInMonth(e,i),_=this.getDatesAfter(u,P-1),c=[...l,u,..._,...t];if(c.length<42){const p=this.getDatesAfter(c.at(-1),42-c.length);c=c.concat(...p)}return c},formatMonth(){let e=this.getDate(this.currentYear,this.currentMonth-1,1);return`${e.toLocaleString("en-US",{month:"long"})}, ${e.getFullYear()}`},dateValue(){return this.value?this.value:this.modelValue}},methods:{selectDate(e){this.$emit("change",this.toValue(e)),this.$emit("update:modelValue",this.toValue(e))},selectCurrentMonthYear(){let e=this.dateValue?this.getDate(this.dateValue):this.getDate();e==="Invalid Date"&&(e=this.getDate()),this.currentYear=e.getFullYear(),this.currentMonth=e.getMonth()+1},prevMonth(){this.changeMonth(-1)},nextMonth(){this.changeMonth(1)},changeMonth(e){this.currentMonth=this.currentMonth+e,this.currentMonth<1&&(this.currentMonth=12,this.currentYear=this.currentYear-1),this.currentMonth>12&&(this.currentMonth=1,this.currentYear=this.currentYear+1)},getDatesAfter(e,i){let u=1;i<0&&(u=-1,i=Math.abs(i));let g=[];for(;i;)e=this.getDate(e.getFullYear(),e.getMonth(),e.getDate()+u),g.push(e),i--;return u===-1?g.reverse():g},getDaysInMonth(e,i){let g=[31,28,31,30,31,30,31,31,30,31,30,31][e];return e===1&&this.isLeapYear(i)?29:g},isLeapYear(e){return e%400===0?!0:e%100===0?!1:e%4===0},toValue(e){return e?(e.setHours(0,-e.getTimezoneOffset(),0,0),e.toISOString().slice(0,10)):""},getDate(...e){return new Date(...e)}}},We={class:"mt-2 w-fit select-none divide-y rounded-lg bg-white text-base shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"},qe={class:"flex items-center p-1 text-gray-500"},Je={class:"flex-1 text-center text-base font-medium text-gray-700"},Qe={class:"flex items-center justify-center gap-1 p-1"},Xe={class:"flex flex-col items-center justify-center p-1 text-gray-800"},Ze={class:"flex items-center text-xs uppercase"},et=["onClick"],tt={class:"flex justify-end p-1"};function at(e,i,u,g,y,r){const l=L("Input"),t=L("FeatherIcon"),P=L("Button"),_=L("TextInput"),c=L("Popover");return O(),fe(c,{onOpen:r.selectCurrentMonthYear,class:"flex w-full [&>div:first-child]:w-full"},{target:Y(({togglePopover:p})=>[k(l,Te({readonly:"",type:"text","icon-left":"calendar",placeholder:u.placeholder,value:r.dateValue&&u.formatter?u.formatter(r.dateValue):r.dateValue,onFocus:m=>u.readonly?null:p(),class:["w-full",u.inputClass]},e.$attrs),null,16,["placeholder","value","onFocus","class"])]),body:Y(({togglePopover:p})=>[D("div",We,[D("div",qe,[k(P,{variant:"ghost",class:"h-7 w-7",onClick:r.prevMonth},{default:Y(()=>[k(t,{"stroke-width":2,name:"chevron-left",class:"h-4 w-4"})]),_:1},8,["onClick"]),D("div",Je,H(r.formatMonth),1),k(P,{variant:"ghost",class:"h-7 w-7",onClick:r.nextMonth},{default:Y(()=>[k(t,{"stroke-width":2,name:"chevron-right",class:"h-4 w-4"})]),_:1},8,["onClick"])]),D("div",Qe,[k(_,{class:"text-sm",type:"text",value:r.dateValue,onChange:m=>r.selectDate(r.getDate(m.target.value))||p()},null,8,["value","onChange"]),k(P,{label:"Today",class:"text-sm",onClick:m=>r.selectDate(r.getDate())||p()},null,8,["onClick"])]),D("div",Xe,[D("div",Ze,[(O(),G(N,null,W(["su","mo","tu","we","th","fr","sa"],(m,v)=>D("div",{class:"flex h-6 w-8 items-center justify-center text-center",key:v},H(m),1)),64))]),(O(!0),G(N,null,W(r.datesAsWeeks,(m,v)=>(O(),G("div",{class:"flex items-center",key:v},[(O(!0),G(N,null,W(m,S=>(O(),G("div",{key:r.toValue(S),class:Ye(["flex h-8 w-8 cursor-pointer items-center justify-center rounded hover:bg-gray-50",{"text-gray-400":S.getMonth()!==y.currentMonth-1,"font-extrabold text-gray-900":r.toValue(S)===r.toValue(r.today),"bg-gray-800 text-white hover:bg-gray-800":r.toValue(S)===r.dateValue}]),onClick:()=>{r.selectDate(S),p()}},H(S.getDate()),11,et))),128))]))),128))]),D("div",tt,[k(P,{label:"Clear",class:"text-sm",onClick:()=>{r.selectDate(""),p()}},null,8,["onClick"])])])]),_:1},8,["onOpen"])}const nt=Ie(He,[["render",at]]),rt={__name:"NestedPopover",props:{placement:{type:String,default:"bottom-start"}},setup(e){const i=e,u=x(null),g=x(null);let y=x(null);function r(){y.value?y.value.update():y.value=Le(u.value.el,g.value.el,{placement:i.placement})}function l(){je(()=>r())}return $e(()=>{var t;(t=y.value)==null||t.destroy()}),(t,P)=>(O(),fe(q(be),null,{default:Y(({open:_})=>[k(q(Ue),{as:"div",ref_key:"reference",ref:u,onClick:l,onFocusin:l,onKeydown:l},{default:Y(({open:c})=>[se(t.$slots,"target",ue(ie({open:c})))]),_:2},1536),Ae(D("div",null,[k(q(ze),{ref_key:"popover",ref:g,static:"",class:"z-[100]"},{default:Y(({open:c,close:p})=>[se(t.$slots,"body",ue(ie({open:c,close:p})))]),_:2},1536)],512),[[Ne,_]])]),_:3}))}};export{nt as D,rt as _};
//# sourceMappingURL=NestedPopover-9b04b27b.js.map
