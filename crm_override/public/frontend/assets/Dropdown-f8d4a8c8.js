import{l as I,ae as x,a8 as Q,cP as Te,j as _,cQ as Ee,cR as ke,ac as Pe,cK as Oe,am as Ce,cL as G,af as X,ah as re,ak as $e,aI as Re,cT as Ne,al as oe,a as ae,ai as Le,ad as he,A as C,dl as Be,aj as We,dm as Ve,dn as E,an as D,dp as He,as as le,dq as ye,ab as Ye,k as z,bo as je,bP as ze,u as qe,bn as be,L as we,bX as Se,cd as Ke,ba as Ue,c6 as Je,_ as Ge,a4 as Qe,D as Xe,ay as Ze,r as L,b as P,g as H,w as B,d as te,M as et,N as tt,C as se,H as nt,t as ne,n as ie,c as q,F as ue,f as ce,p as fe,G as de,e as rt}from"./index-82d0b844.js";let me=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function pe(e){var t,r;let o=(t=e.innerText)!=null?t:"",l=e.cloneNode(!0);if(!(l instanceof HTMLElement))return o;let s=!1;for(let i of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))i.remove(),s=!0;let n=s?(r=l.innerText)!=null?r:"":o;return me.test(n)&&(n=n.replace(me,"")),n}function at(e){let t=e.getAttribute("aria-label");if(typeof t=="string")return t.trim();let r=e.getAttribute("aria-labelledby");if(r){let o=r.split(" ").map(l=>{let s=document.getElementById(l);if(s){let n=s.getAttribute("aria-label");return typeof n=="string"?n.trim():pe(s).trim()}return null}).filter(Boolean);if(o.length>0)return o.join(", ")}return pe(e).trim()}function ot(e){let t=I(""),r=I("");return()=>{let o=x(e);if(!o)return"";let l=o.innerText;if(t.value===l)return r.value;let s=at(o).trim().toLowerCase();return t.value=l,r.value=s,s}}var lt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(lt||{}),st=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(st||{});function it(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Ie=Symbol("MenuContext");function Z(e){let t=We(Ie,null);if(t===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Z),r}return t}let ut=Q({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:t,attrs:r}){let o=I(1),l=I(null),s=I(null),n=I([]),i=I(""),u=I(null),m=I(1);function h(a=c=>c){let c=u.value!==null?n.value[u.value]:null,f=Ye(a(n.value.slice()),p=>x(p.dataRef.domRef)),v=c?f.indexOf(c):null;return v===-1&&(v=null),{items:f,activeItemIndex:v}}let d={menuState:o,buttonRef:l,itemsRef:s,items:n,searchQuery:i,activeItemIndex:u,activationTrigger:m,closeMenu:()=>{o.value=1,u.value=null},openMenu:()=>o.value=0,goToItem(a,c,f){let v=h(),p=Ve(a===E.Specific?{focus:E.Specific,id:c}:{focus:a},{resolveItems:()=>v.items,resolveActiveIndex:()=>v.activeItemIndex,resolveId:g=>g.id,resolveDisabled:g=>g.dataRef.disabled});i.value="",u.value=p,m.value=f??1,n.value=v.items},search(a){let c=i.value!==""?0:1;i.value+=a.toLowerCase();let f=(u.value!==null?n.value.slice(u.value+c).concat(n.value.slice(0,u.value+c)):n.value).find(p=>p.dataRef.textValue.startsWith(i.value)&&!p.dataRef.disabled),v=f?n.value.indexOf(f):-1;v===-1||v===u.value||(u.value=v,m.value=1)},clearSearch(){i.value=""},registerItem(a,c){let f=h(v=>[...v,{id:a,dataRef:c}]);n.value=f.items,u.value=f.activeItemIndex,m.value=1},unregisterItem(a){let c=h(f=>{let v=f.findIndex(p=>p.id===a);return v!==-1&&f.splice(v,1),f});n.value=c.items,u.value=c.activeItemIndex,m.value=1}};return Te([l,s],(a,c)=>{var f;d.closeMenu(),Ee(c,ke.Loose)||(a.preventDefault(),(f=x(l))==null||f.focus())},_(()=>o.value===0)),Pe(Ie,d),Oe(_(()=>Ce(o.value,{0:G.Open,1:G.Closed}))),()=>{let a={open:o.value===0,close:d.closeMenu};return X({ourProps:{},theirProps:e,slot:a,slots:t,attrs:r,name:"Menu"})}}}),ct=Q({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:t,slots:r,expose:o}){var l;let s=(l=e.id)!=null?l:`headlessui-menu-button-${re()}`,n=Z("MenuButton");o({el:n.buttonRef,$el:n.buttonRef});function i(d){switch(d.key){case D.Space:case D.Enter:case D.ArrowDown:d.preventDefault(),d.stopPropagation(),n.openMenu(),C(()=>{var a;(a=x(n.itemsRef))==null||a.focus({preventScroll:!0}),n.goToItem(E.First)});break;case D.ArrowUp:d.preventDefault(),d.stopPropagation(),n.openMenu(),C(()=>{var a;(a=x(n.itemsRef))==null||a.focus({preventScroll:!0}),n.goToItem(E.Last)});break}}function u(d){switch(d.key){case D.Space:d.preventDefault();break}}function m(d){e.disabled||(n.menuState.value===0?(n.closeMenu(),C(()=>{var a;return(a=x(n.buttonRef))==null?void 0:a.focus({preventScroll:!0})})):(d.preventDefault(),n.openMenu(),it(()=>{var a;return(a=x(n.itemsRef))==null?void 0:a.focus({preventScroll:!0})})))}let h=$e(_(()=>({as:e.as,type:t.type})),n.buttonRef);return()=>{var d;let a={open:n.menuState.value===0},{...c}=e,f={ref:n.buttonRef,id:s,type:h.value,"aria-haspopup":"menu","aria-controls":(d=x(n.itemsRef))==null?void 0:d.id,"aria-expanded":n.menuState.value===0,onKeydown:i,onKeyup:u,onClick:m};return X({ourProps:f,theirProps:c,slot:a,attrs:t,slots:r,name:"MenuButton"})}}}),ft=Q({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:t,slots:r,expose:o}){var l;let s=(l=e.id)!=null?l:`headlessui-menu-items-${re()}`,n=Z("MenuItems"),i=I(null);o({el:n.itemsRef,$el:n.itemsRef}),Re({container:_(()=>x(n.itemsRef)),enabled:_(()=>n.menuState.value===0),accept(a){return a.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:a.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(a){a.setAttribute("role","none")}});function u(a){var c;switch(i.value&&clearTimeout(i.value),a.key){case D.Space:if(n.searchQuery.value!=="")return a.preventDefault(),a.stopPropagation(),n.search(a.key);case D.Enter:if(a.preventDefault(),a.stopPropagation(),n.activeItemIndex.value!==null){let f=n.items.value[n.activeItemIndex.value];(c=x(f.dataRef.domRef))==null||c.click()}n.closeMenu(),ye(x(n.buttonRef));break;case D.ArrowDown:return a.preventDefault(),a.stopPropagation(),n.goToItem(E.Next);case D.ArrowUp:return a.preventDefault(),a.stopPropagation(),n.goToItem(E.Previous);case D.Home:case D.PageUp:return a.preventDefault(),a.stopPropagation(),n.goToItem(E.First);case D.End:case D.PageDown:return a.preventDefault(),a.stopPropagation(),n.goToItem(E.Last);case D.Escape:a.preventDefault(),a.stopPropagation(),n.closeMenu(),C(()=>{var f;return(f=x(n.buttonRef))==null?void 0:f.focus({preventScroll:!0})});break;case D.Tab:a.preventDefault(),a.stopPropagation(),n.closeMenu(),C(()=>He(x(n.buttonRef),a.shiftKey?le.Previous:le.Next));break;default:a.key.length===1&&(n.search(a.key),i.value=setTimeout(()=>n.clearSearch(),350));break}}function m(a){switch(a.key){case D.Space:a.preventDefault();break}}let h=Ne(),d=_(()=>h!==null?(h.value&G.Open)===G.Open:n.menuState.value===0);return()=>{var a,c;let f={open:n.menuState.value===0},{...v}=e,p={"aria-activedescendant":n.activeItemIndex.value===null||(a=n.items.value[n.activeItemIndex.value])==null?void 0:a.id,"aria-labelledby":(c=x(n.buttonRef))==null?void 0:c.id,id:s,onKeydown:u,onKeyup:m,role:"menu",tabIndex:0,ref:n.itemsRef};return X({ourProps:p,theirProps:v,slot:f,attrs:t,slots:r,features:oe.RenderStrategy|oe.Static,visible:d.value,name:"MenuItems"})}}}),dt=Q({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:t,attrs:r,expose:o}){var l;let s=(l=e.id)!=null?l:`headlessui-menu-item-${re()}`,n=Z("MenuItem"),i=I(null);o({el:i,$el:i});let u=_(()=>n.activeItemIndex.value!==null?n.items.value[n.activeItemIndex.value].id===s:!1),m=ot(i),h=_(()=>({disabled:e.disabled,get textValue(){return m()},domRef:i}));ae(()=>n.registerItem(s,h)),Le(()=>n.unregisterItem(s)),he(()=>{n.menuState.value===0&&u.value&&n.activationTrigger.value!==0&&C(()=>{var g,M;return(M=(g=x(i))==null?void 0:g.scrollIntoView)==null?void 0:M.call(g,{block:"nearest"})})});function d(g){if(e.disabled)return g.preventDefault();n.closeMenu(),ye(x(n.buttonRef))}function a(){if(e.disabled)return n.goToItem(E.Nothing);n.goToItem(E.Specific,s)}let c=Be();function f(g){c.update(g)}function v(g){c.wasMoved(g)&&(e.disabled||u.value||n.goToItem(E.Specific,s,0))}function p(g){c.wasMoved(g)&&(e.disabled||u.value&&n.goToItem(E.Nothing))}return()=>{let{disabled:g,...M}=e,A={active:u.value,disabled:g,close:n.closeMenu};return X({ourProps:{id:s,ref:i,role:"menuitem",tabIndex:g===!0?void 0:-1,"aria-disabled":g===!0?!0:void 0,onClick:d,onFocus:a,onPointerenter:f,onMouseenter:f,onPointermove:v,onMousemove:v,onPointerleave:p,onMouseleave:p},theirProps:{...r,...M},slot:A,attrs:r,slots:t,name:"MenuItem"})}}});function Y(e){return je()?(ze(e),!0):!1}function S(e){return typeof e=="function"?e():qe(e)}const j=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const mt=e=>e!=null,pt=Object.prototype.toString,vt=e=>pt.call(e)==="[object Object]",$=()=>{},gt=ht();function ht(){var e,t;return j&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Me(e,t){function r(...o){return new Promise((l,s)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(l).catch(s)})}return r}const De=e=>e();function xe(e,t={}){let r,o,l=$;const s=i=>{clearTimeout(i),l(),l=$};return i=>{const u=S(e),m=S(t.maxWait);return r&&s(r),u<=0||m!==void 0&&m<=0?(o&&(s(o),o=null),Promise.resolve(i())):new Promise((h,d)=>{l=t.rejectOnCancel?d:h,m&&!o&&(o=setTimeout(()=>{r&&s(r),o=null,h(i())},m)),r=setTimeout(()=>{o&&s(o),o=null,h(i())},u)})}}function yt(e=De){const t=I(!0);function r(){t.value=!1}function o(){t.value=!0}const l=(...s)=>{t.value&&e(...s)};return{isActive:Se(t),pause:r,resume:o,eventFilter:l}}function bt(e){return e||be()}function Ut(e,t=200,r={}){return Me(xe(t,r),e)}function Ae(e,t,r={}){const{eventFilter:o=De,...l}=r;return z(e,Me(o,t),l)}function wt(e,t,r={}){const{eventFilter:o,...l}=r,{eventFilter:s,pause:n,resume:i,isActive:u}=yt(o);return{stop:Ae(e,t,{...l,eventFilter:s}),pause:n,resume:i,isActive:u}}function St(e,t={}){if(!we(e))return Ke(e);const r=Array.isArray(e.value)?Array.from({length:e.value.length}):{};for(const o in e.value)r[o]=Ue(()=>({get(){return e.value[o]},set(l){var s;if((s=S(t.replaceRef))!=null?s:!0)if(Array.isArray(e.value)){const i=[...e.value];i[o]=l,e.value=i}else{const i={...e.value,[o]:l};Object.setPrototypeOf(i,Object.getPrototypeOf(e.value)),e.value=i}else e.value[o]=l}}));return r}function _e(e,t=!0,r){bt()?ae(e,r):t?e():C(e)}const It=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[T\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/i,Mt=/[YMDHhms]o|\[([^\]]+)\]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function Dt(e,t,r,o){let l=e<12?"AM":"PM";return o&&(l=l.split("").reduce((s,n)=>s+=`${n}.`,"")),r?l.toLowerCase():l}function W(e){const t=["th","st","nd","rd"],r=e%100;return e+(t[(r-20)%10]||t[r]||t[0])}function xt(e,t,r={}){var o;const l=e.getFullYear(),s=e.getMonth(),n=e.getDate(),i=e.getHours(),u=e.getMinutes(),m=e.getSeconds(),h=e.getMilliseconds(),d=e.getDay(),a=(o=r.customMeridiem)!=null?o:Dt,c={Yo:()=>W(l),YY:()=>String(l).slice(-2),YYYY:()=>l,M:()=>s+1,Mo:()=>W(s+1),MM:()=>`${s+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(r.locales,{month:"short"}),MMMM:()=>e.toLocaleDateString(r.locales,{month:"long"}),D:()=>String(n),Do:()=>W(n),DD:()=>`${n}`.padStart(2,"0"),H:()=>String(i),Ho:()=>W(i),HH:()=>`${i}`.padStart(2,"0"),h:()=>`${i%12||12}`.padStart(1,"0"),ho:()=>W(i%12||12),hh:()=>`${i%12||12}`.padStart(2,"0"),m:()=>String(u),mo:()=>W(u),mm:()=>`${u}`.padStart(2,"0"),s:()=>String(m),so:()=>W(m),ss:()=>`${m}`.padStart(2,"0"),SSS:()=>`${h}`.padStart(3,"0"),d:()=>d,dd:()=>e.toLocaleDateString(r.locales,{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(r.locales,{weekday:"short"}),dddd:()=>e.toLocaleDateString(r.locales,{weekday:"long"}),A:()=>a(i,u),AA:()=>a(i,u,!1,!0),a:()=>a(i,u,!0),aa:()=>a(i,u,!0,!0)};return t.replace(Mt,(f,v)=>{var p,g;return(g=v??((p=c[f])==null?void 0:p.call(c)))!=null?g:f})}function At(e){if(e===null)return new Date(Number.NaN);if(e===void 0)return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){const t=e.match(It);if(t){const r=t[2]-1||0,o=(t[7]||"0").substring(0,3);return new Date(t[1],r,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)}}return new Date(e)}function Jt(e,t="HH:mm:ss",r={}){return _(()=>xt(At(S(e)),S(t),r))}function _t(e,t=1e3,r={}){const{immediate:o=!0,immediateCallback:l=!1}=r;let s=null;const n=I(!1);function i(){s&&(clearInterval(s),s=null)}function u(){n.value=!1,i()}function m(){const h=S(t);h<=0||(n.value=!0,l&&e(),i(),s=setInterval(e,h))}if(o&&j&&m(),we(t)||typeof t=="function"){const h=z(t,()=>{n.value&&j&&m()});Y(h)}return Y(u),{isActive:n,pause:u,resume:m}}function Gt(e,t,r={}){const{debounce:o=0,maxWait:l=void 0,...s}=r;return Ae(e,t,{...s,eventFilter:xe(o,{maxWait:l})})}function Qt(e,t,r){const o=z(e,(...l)=>(C(()=>o()),t(...l)),r);return o}function N(e){var t;const r=S(e);return(t=r==null?void 0:r.$el)!=null?t:r}const O=j?window:void 0,Xt=j?window.document:void 0;function R(...e){let t,r,o,l;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,o,l]=e,t=O):[t,r,o,l]=e,!t)return $;Array.isArray(r)||(r=[r]),Array.isArray(o)||(o=[o]);const s=[],n=()=>{s.forEach(h=>h()),s.length=0},i=(h,d,a,c)=>(h.addEventListener(d,a,c),()=>h.removeEventListener(d,a,c)),u=z(()=>[N(t),S(l)],([h,d])=>{if(n(),!h)return;const a=vt(d)?{...d}:d;s.push(...r.flatMap(c=>o.map(f=>i(h,c,f,a))))},{immediate:!0,flush:"post"}),m=()=>{u(),n()};return Y(m),m}let ve=!1;function Zt(e,t,r={}){const{window:o=O,ignore:l=[],capture:s=!0,detectIframe:n=!1}=r;if(!o)return $;gt&&!ve&&(ve=!0,Array.from(o.document.body.children).forEach(a=>a.addEventListener("click",$)),o.document.documentElement.addEventListener("click",$));let i=!0;const u=a=>l.some(c=>{if(typeof c=="string")return Array.from(o.document.querySelectorAll(c)).some(f=>f===a.target||a.composedPath().includes(f));{const f=N(c);return f&&(a.target===f||a.composedPath().includes(f))}}),h=[R(o,"click",a=>{const c=N(e);if(!(!c||c===a.target||a.composedPath().includes(c))){if(a.detail===0&&(i=!u(a)),!i){i=!0;return}t(a)}},{passive:!0,capture:s}),R(o,"pointerdown",a=>{const c=N(e);i=!u(a)&&!!(c&&!a.composedPath().includes(c))},{passive:!0}),n&&R(o,"blur",a=>{setTimeout(()=>{var c;const f=N(e);((c=o.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(f!=null&&f.contains(o.document.activeElement))&&t(a)},0)})].filter(Boolean);return()=>h.forEach(a=>a())}function Ft(){const e=I(!1),t=be();return t&&ae(()=>{e.value=!0},t),e}function Fe(e){const t=Ft();return _(()=>(t.value,!!e()))}function Tt(e,t={}){const{immediate:r=!0,fpsLimit:o=void 0,window:l=O}=t,s=I(!1),n=o?1e3/o:null;let i=0,u=null;function m(a){if(!s.value||!l)return;i||(i=a);const c=a-i;if(n&&c<n){u=l.requestAnimationFrame(m);return}i=a,e({delta:c,timestamp:a}),u=l.requestAnimationFrame(m)}function h(){!s.value&&l&&(s.value=!0,i=0,u=l.requestAnimationFrame(m))}function d(){s.value=!1,u!=null&&l&&(l.cancelAnimationFrame(u),u=null)}return r&&h(),Y(d),{isActive:Se(s),pause:d,resume:h}}function Et(e,t={}){const{window:r=O}=t,o=Fe(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let l;const s=I(!1),n=m=>{s.value=m.matches},i=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",n):l.removeListener(n))},u=he(()=>{o.value&&(i(),l=r.matchMedia(S(e)),"addEventListener"in l?l.addEventListener("change",n):l.addListener(n),s.value=l.matches)});return Y(()=>{u(),i(),l=void 0}),s}const U=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},J="__vueuse_ssr_handlers__",kt=Pt();function Pt(){return J in U||(U[J]=U[J]||{}),U[J]}function Ot(e,t){return kt[e]||t}function Ct(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const $t={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},ge="vueuse-storage";function en(e,t,r,o={}){var l;const{flush:s="pre",deep:n=!0,listenToStorageChanges:i=!0,writeDefaults:u=!0,mergeDefaults:m=!1,shallow:h,window:d=O,eventFilter:a,onError:c=y=>{console.error(y)},initOnMounted:f}=o,v=(h?Je:I)(typeof t=="function"?t():t);if(!r)try{r=Ot("getDefaultStorage",()=>{var y;return(y=O)==null?void 0:y.localStorage})()}catch(y){c(y)}if(!r)return v;const p=S(t),g=Ct(p),M=(l=o.serializer)!=null?l:$t[g],{pause:A,resume:V}=wt(v,()=>ee(v.value),{flush:s,deep:n,eventFilter:a});d&&i&&_e(()=>{R(d,"storage",F),R(d,ge,T),f&&F()}),f||F();function K(y,w){d&&d.dispatchEvent(new CustomEvent(ge,{detail:{key:e,oldValue:y,newValue:w,storageArea:r}}))}function ee(y){try{const w=r.getItem(e);if(y==null)K(w,null),r.removeItem(e);else{const k=M.write(y);w!==k&&(r.setItem(e,k),K(w,k))}}catch(w){c(w)}}function b(y){const w=y?y.newValue:r.getItem(e);if(w==null)return u&&p!=null&&r.setItem(e,M.write(p)),p;if(!y&&m){const k=M.read(w);return typeof m=="function"?m(k,p):g==="object"&&!Array.isArray(k)?{...p,...k}:k}else return typeof w!="string"?w:M.read(w)}function F(y){if(!(y&&y.storageArea!==r)){if(y&&y.key==null){v.value=p;return}if(!(y&&y.key!==e)){A();try{(y==null?void 0:y.newValue)!==M.write(v.value)&&(v.value=b(y))}catch(w){c(w)}finally{y?C(V):V()}}}}function T(y){F(y.detail)}return v}function tn(e,t={}){var r,o;const{pointerTypes:l,preventDefault:s,stopPropagation:n,exact:i,onMove:u,onEnd:m,onStart:h,initialValue:d,axis:a="both",draggingElement:c=O,containerElement:f,handle:v=e}=t,p=I((r=S(d))!=null?r:{x:0,y:0}),g=I(),M=b=>l?l.includes(b.pointerType):!0,A=b=>{S(s)&&b.preventDefault(),S(n)&&b.stopPropagation()},V=b=>{var F;if(b.button!==0||S(t.disabled)||!M(b)||S(i)&&b.target!==S(e))return;const T=S(f),y=(F=T==null?void 0:T.getBoundingClientRect)==null?void 0:F.call(T),w=S(e).getBoundingClientRect(),k={x:b.clientX-(T?w.left-y.left+T.scrollLeft:w.left),y:b.clientY-(T?w.top-y.top+T.scrollTop:w.top)};(h==null?void 0:h(k,b))!==!1&&(g.value=k,A(b))},K=b=>{if(S(t.disabled)||!M(b)||!g.value)return;const F=S(f),T=S(e).getBoundingClientRect();let{x:y,y:w}=p.value;(a==="x"||a==="both")&&(y=b.clientX-g.value.x,F&&(y=Math.min(Math.max(0,y),F.scrollWidth-T.width))),(a==="y"||a==="both")&&(w=b.clientY-g.value.y,F&&(w=Math.min(Math.max(0,w),F.scrollHeight-T.height))),p.value={x:y,y:w},u==null||u(p.value,b),A(b)},ee=b=>{S(t.disabled)||!M(b)||g.value&&(g.value=void 0,m==null||m(p.value,b),A(b))};if(j){const b={capture:(o=t.capture)!=null?o:!0};R(v,"pointerdown",V,b),R(c,"pointermove",K,b),R(c,"pointerup",ee,b)}return{...St(p),position:p,isDragging:_(()=>!!g.value),style:_(()=>`left:${p.value.x}px;top:${p.value.y}px;`)}}function Rt(e,t,r={}){const{root:o,rootMargin:l="0px",threshold:s=.1,window:n=O,immediate:i=!0}=r,u=Fe(()=>n&&"IntersectionObserver"in n),m=_(()=>{const f=S(e);return(Array.isArray(f)?f:[f]).map(N).filter(mt)});let h=$;const d=I(i),a=u.value?z(()=>[m.value,N(o),d.value],([f,v])=>{if(h(),!d.value||!f.length)return;const p=new IntersectionObserver(t,{root:N(v),rootMargin:l,threshold:s});f.forEach(g=>g&&p.observe(g)),h=()=>{p.disconnect(),h=$}},{immediate:i,flush:"post"}):$,c=()=>{h(),a(),d.value=!1};return Y(c),{isSupported:u,isActive:d,pause(){h(),d.value=!1},resume(){d.value=!0},stop:c}}function nn(e,t={}){const{window:r=O,scrollTarget:o,threshold:l=0}=t,s=I(!1);return Rt(e,n=>{let i=s.value,u=0;for(const m of n)m.time>=u&&(u=m.time,i=m.isIntersecting);s.value=i},{root:o,window:r,threshold:l}),s}function Nt(e={}){const{controls:t=!1,interval:r="requestAnimationFrame"}=e,o=I(new Date),l=()=>o.value=new Date,s=r==="requestAnimationFrame"?Tt(l,{immediate:!0}):_t(l,r,{immediate:!0});return t?{now:o,...s}:o}const Lt=[{max:6e4,value:1e3,name:"second"},{max:276e4,value:6e4,name:"minute"},{max:72e6,value:36e5,name:"hour"},{max:5184e5,value:864e5,name:"day"},{max:24192e5,value:6048e5,name:"week"},{max:28512e6,value:2592e6,name:"month"},{max:Number.POSITIVE_INFINITY,value:31536e6,name:"year"}],Bt={justNow:"just now",past:e=>e.match(/\d/)?`${e} ago`:e,future:e=>e.match(/\d/)?`in ${e}`:e,month:(e,t)=>e===1?t?"last month":"next month":`${e} month${e>1?"s":""}`,year:(e,t)=>e===1?t?"last year":"next year":`${e} year${e>1?"s":""}`,day:(e,t)=>e===1?t?"yesterday":"tomorrow":`${e} day${e>1?"s":""}`,week:(e,t)=>e===1?t?"last week":"next week":`${e} week${e>1?"s":""}`,hour:e=>`${e} hour${e>1?"s":""}`,minute:e=>`${e} minute${e>1?"s":""}`,second:e=>`${e} second${e>1?"s":""}`,invalid:""};function Wt(e){return e.toISOString().slice(0,10)}function rn(e,t={}){const{controls:r=!1,updateInterval:o=3e4}=t,{now:l,...s}=Nt({interval:o,controls:!0}),n=_(()=>Vt(new Date(S(e)),t,S(l)));return r?{timeAgo:n,...s}:n}function Vt(e,t={},r=Date.now()){var o;const{max:l,messages:s=Bt,fullDateFormatter:n=Wt,units:i=Lt,showSecond:u=!1,rounding:m="round"}=t,h=typeof m=="number"?p=>+p.toFixed(m):Math[m],d=+r-+e,a=Math.abs(d);function c(p,g){return h(Math.abs(p)/g.value)}function f(p,g){const M=c(p,g),A=p>0,V=v(g.name,M,A);return v(A?"past":"future",V,A)}function v(p,g,M){const A=s[p];return typeof A=="function"?A(g,M):A.replace("{0}",g.toString())}if(a<6e4&&!u)return s.justNow;if(typeof l=="number"&&a>l)return n(new Date(e));if(typeof l=="string"){const p=(o=i.find(g=>g.name===l))==null?void 0:o.max;if(p&&a>p)return n(new Date(e))}for(const[p,g]of i.entries()){if(c(d,g)<=0&&i[p-1])return f(d,i[p-1]);if(a<g.max)return f(d,g)}return s.invalid}function an(e={}){const{window:t=O,initialWidth:r=Number.POSITIVE_INFINITY,initialHeight:o=Number.POSITIVE_INFINITY,listenOrientation:l=!0,includeScrollbar:s=!0}=e,n=I(r),i=I(o),u=()=>{t&&(s?(n.value=t.innerWidth,i.value=t.innerHeight):(n.value=t.document.documentElement.clientWidth,i.value=t.document.documentElement.clientHeight))};if(u(),_e(u),R("resize",u,{passive:!0}),l){const m=Et("(orientation: portrait)");z(m,()=>u())}return{width:n,height:i}}const Ht={name:"Dropdown",props:{button:{type:Object,default:null},options:{type:Array,default:()=>[]},placement:{type:String,default:"left"}},components:{Menu:ut,MenuButton:ct,MenuItems:ft,MenuItem:dt,Button:Qe,FeatherIcon:Xe,Popover:Ze},methods:{normalizeDropdownItem(e){let t=e.onClick||null;return!t&&e.route&&this.$router&&(t=()=>this.$router.push(e.route)),{label:e.label,icon:e.icon,group:e.group,component:e.component,onClick:t}},filterOptions(e){return(e||[]).filter(Boolean).filter(t=>t.condition?t.condition():!0).map(t=>this.normalizeDropdownItem(t))}},computed:{groups(){var t;return((t=this.options[0])!=null&&t.group?this.options:[{group:"",items:this.options}]).map((r,o)=>({key:o,group:r.group,hideLabel:r.hideLabel||!1,items:this.filterOptions(r.items)}))},dropdownTransition(){return{enterActiveClass:"transition duration-100 ease-out",enterFromClass:"transform scale-95 opacity-0",enterToClass:"transform scale-100 opacity-100",leaveActiveClass:"transition duration-75 ease-in",leaveFromClass:"transform scale-100 opacity-100",leaveToClass:"transform scale-95 opacity-0"}},popoverPlacement(){return this.placement==="left"?"bottom-start":this.placement==="right"?"bottom-end":this.placement==="center"?"bottom-center":"bottom"}}},Yt={key:0,class:"flex h-7 items-center px-2 text-sm font-medium text-gray-500"},jt=["onClick"],zt={class:"whitespace-nowrap"};function qt(e,t,r,o,l,s){const n=L("Button"),i=L("MenuButton"),u=L("FeatherIcon"),m=L("MenuItem"),h=L("MenuItems"),d=L("Popover"),a=L("Menu");return P(),H(a,{as:"div",class:"relative inline-block text-left"},{default:B(({open:c})=>[te(d,{transition:s.dropdownTransition,show:c,placement:s.popoverPlacement},{target:B(()=>[te(i,{as:"div"},{default:B(()=>[e.$slots.default?et(e.$slots,"default",tt(se({key:0},{open:c}))):(P(),H(n,se({key:1,active:c},r.button),{default:B(()=>{var f;return[nt(ne(r.button?((f=r.button)==null?void 0:f.label)||null:"Options"),1)]}),_:2},1040,["active"]))]),_:2},1024)]),body:B(()=>[te(h,{class:ie(["mt-2 min-w-40 divide-y divide-gray-100 rounded-lg bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none",{"left-0 origin-top-left":r.placement=="left","right-0 origin-top-right":r.placement=="right","inset-x-0 origin-top":r.placement=="center"}])},{default:B(()=>[(P(!0),q(ue,null,ce(s.groups,f=>(P(),q("div",{key:f.key,class:"p-1.5"},[f.group&&!f.hideLabel?(P(),q("div",Yt,ne(f.group),1)):fe("",!0),(P(!0),q(ue,null,ce(f.items,v=>(P(),H(m,{key:v.label},{default:B(({active:p})=>[v.component?(P(),H(de(v.component),{key:0,active:p},null,8,["active"])):(P(),q("button",{key:1,class:ie([p?"bg-gray-100":"text-gray-800","group flex h-7 w-full items-center rounded px-2 text-base"]),onClick:v.onClick},[v.icon&&typeof v.icon=="string"?(P(),H(u,{key:0,name:v.icon,class:"mr-2 h-4 w-4 flex-shrink-0 text-gray-700","aria-hidden":"true"},null,8,["name"])):v.icon?(P(),H(de(v.icon),{key:1,class:"mr-2 h-4 w-4 flex-shrink-0 text-gray-700"})):fe("",!0),rt("span",zt,ne(v.label),1)],10,jt))]),_:2},1024))),128))]))),128))]),_:1},8,["class"])]),_:2},1032,["transition","show","placement"])]),_:3})}const on=Ge(Ht,[["render",qt]]);export{on as D,ft as M,ct as S,en as a,nn as b,an as c,Y as d,N as e,Xt as f,S as g,Qt as h,dt as i,ut as j,tn as k,Jt as l,rn as m,Zt as o,_e as t,Ut as u,Gt as w};
//# sourceMappingURL=Dropdown-f8d4a8c8.js.map