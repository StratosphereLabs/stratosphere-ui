import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as u}from"./index-lhGYx47h.js";import{B as d}from"./Button-C8Er2sLW.js";import{a as c}from"./Icons-C2hG1eOz.js";const g=({children:i,className:m,color:s,dismissable:t,icon:a,onDismiss:o,outline:p,size:r,...l})=>e.jsxs("div",{className:u("badge gap-1",s&&`badge-${s}`,r&&`badge-${r}`,p===!0&&"badge-outline",t===!0&&"pr-0",m),...l,children:[a!==void 0?e.jsx(a,{}):null,e.jsx("div",{className:"flex-1 truncate font-semibold",children:i}),t===!0?e.jsxs(d,{as:"a",color:"ghost",shape:"circle",size:"xs",onClick:n=>{n.stopPropagation(),o==null||o(n)},onKeyDown:n=>{n.stopPropagation()},children:[e.jsx(c,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Remove badge"})]}):null]});g.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof BADGE_COLORS)[number]"},description:""},dismissable:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"FC",elements:[{name:"ComponentProps",elements:[{name:"literal",value:"'svg'"}],raw:"ComponentProps<'svg'>"}],raw:"FC<ComponentProps<'svg'>>"},description:""},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:""},outline:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof BADGE_SIZES)[number]"},description:""}},composes:["Omit"]};export{g as B};
