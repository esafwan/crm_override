import{l as h,ac as j,j as g,a8 as L,ah as S,a as k,ai as y,u as C,af as E,aj as O}from"./index-82d0b844.js";let i=Symbol("LabelContext");function p(){let t=O(i,null);if(t===null){let a=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(a,p),a}return t}function w({slot:t={},name:a="Label",props:o={}}={}){let e=h([]);function r(l){return e.value.push(l),()=>{let n=e.value.indexOf(l);n!==-1&&e.value.splice(n,1)}}return j(i,{register:r,slot:t,name:a,props:o}),g(()=>e.value.length>0?e.value.join(" "):void 0)}let P=L({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(t,{slots:a,attrs:o}){var e;let r=(e=t.id)!=null?e:`headlessui-label-${S()}`,l=p();return k(()=>y(l.register(r))),()=>{let{name:n="Label",slot:c={},props:d={}}=l,{passive:f,...u}=t,s={...Object.entries(d).reduce((m,[b,v])=>Object.assign(m,{[b]:C(v)}),{}),id:r};return f&&(delete s.onClick,delete s.htmlFor,delete u.onClick),E({ourProps:s,theirProps:u,slot:c,attrs:o,slots:a,name:n})}}});export{w as E,P as K};
//# sourceMappingURL=label-16764775.js.map
