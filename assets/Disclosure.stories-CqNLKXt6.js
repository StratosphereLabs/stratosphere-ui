import{j as c}from"./jsx-runtime-DR9Q75dM.js";import{c as z}from"./index-lhGYx47h.js";import{R as P,r as s}from"./index-DRjF_FHU.js";import{B as re}from"./Button-C8Er2sLW.js";import{e as se,f as oe}from"./Icons-DQZ7jVN3.js";import{S as F,D as E,y as R,T as ne,a as C,u as j,X as L,I as ee,e as le,b as x}from"./use-is-mounted-BwivAQE6.js";import{r as ae}from"./bugs-BqEXq7dn.js";import{c as ce,d as w,C as ue}from"./open-closed-DSFNRtpz.js";import{s as ie}from"./use-resolve-button-type-hEnF6IRh.js";import{t as de}from"./transition-CuZKXbF5.js";import"./use-flags-uZipNKZX.js";var U;let pe=(U=P.startTransition)!=null?U:function(e){e()};var me=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(me||{}),fe=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(fe||{});let he={0:e=>({...e,disclosureState:j(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},O=s.createContext(null);O.displayName="DisclosureContext";function $(e){let t=s.useContext(O);if(t===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,$),a}return t}let B=s.createContext(null);B.displayName="DisclosureAPIContext";function te(e){let t=s.useContext(B);if(t===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,te),a}return t}let M=s.createContext(null);M.displayName="DisclosurePanelContext";function be(){return s.useContext(M)}function ge(e,t){return j(t.type,he,e,t)}let De=s.Fragment;function xe(e,t){let{defaultOpen:a=!1,...u}=e,m=s.useRef(null),r=R(t,ne(p=>{m.current=p},e.as===void 0||e.as===s.Fragment)),o=s.useRef(null),i=s.useRef(null),l=s.useReducer(ge,{disclosureState:a?0:1,linkedPanel:!1,buttonRef:i,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:d,buttonId:f},g]=l,h=C(p=>{g({type:1});let n=le(m);if(!n||!f)return;let b=p?p instanceof HTMLElement?p:p.current instanceof HTMLElement?p.current:n.getElementById(f):n.getElementById(f);b==null||b.focus()}),D=s.useMemo(()=>({close:h}),[h]),T=s.useMemo(()=>({open:d===0,close:h}),[d,h]),v={ref:r};return P.createElement(O.Provider,{value:l},P.createElement(B.Provider,{value:D},P.createElement(ce,{value:j(d,{0:w.Open,1:w.Closed})},L({ourProps:v,theirProps:u,slot:T,defaultTag:De,name:"Disclosure"}))))}let Pe="button";function ve(e,t){let a=ee(),{id:u=`headlessui-disclosure-button-${a}`,...m}=e,[r,o]=$("Disclosure.Button"),i=be(),l=i===null?!1:i===r.panelId,d=s.useRef(null),f=R(d,t,l?null:r.buttonRef);s.useEffect(()=>{if(!l)return o({type:2,buttonId:u}),()=>{o({type:2,buttonId:null})}},[u,o,l]);let g=C(n=>{var b;if(l){if(r.disclosureState===1)return;switch(n.key){case x.Space:case x.Enter:n.preventDefault(),n.stopPropagation(),o({type:0}),(b=r.buttonRef.current)==null||b.focus();break}}else switch(n.key){case x.Space:case x.Enter:n.preventDefault(),n.stopPropagation(),o({type:0});break}}),h=C(n=>{switch(n.key){case x.Space:n.preventDefault();break}}),D=C(n=>{var b;ae(n.currentTarget)||e.disabled||(l?(o({type:0}),(b=r.buttonRef.current)==null||b.focus()):o({type:0}))}),T=s.useMemo(()=>({open:r.disclosureState===0}),[r]),v=ie(e,d),p=l?{ref:f,type:v,onKeyDown:g,onClick:D}:{ref:f,id:u,type:v,"aria-expanded":r.disclosureState===0,"aria-controls":r.linkedPanel?r.panelId:void 0,onKeyDown:g,onKeyUp:h,onClick:D};return L({ourProps:p,theirProps:m,slot:T,defaultTag:Pe,name:"Disclosure.Button"})}let ye="div",Ne=F.RenderStrategy|F.Static;function Ie(e,t){let a=ee(),{id:u=`headlessui-disclosure-panel-${a}`,...m}=e,[r,o]=$("Disclosure.Panel"),{close:i}=te("Disclosure.Panel"),l=R(t,r.panelRef,D=>{pe(()=>o({type:D?4:5}))});s.useEffect(()=>(o({type:3,panelId:u}),()=>{o({type:3,panelId:null})}),[u,o]);let d=ue(),f=d!==null?(d&w.Open)===w.Open:r.disclosureState===0,g=s.useMemo(()=>({open:r.disclosureState===0,close:i}),[r,i]),h={ref:l,id:u};return P.createElement(M.Provider,{value:r.panelId},L({ourProps:h,theirProps:m,slot:g,defaultTag:ye,features:Ne,visible:f,name:"Disclosure.Panel"}))}let Se=E(xe),Ce=E(ve),we=E(Ie),k=Object.assign(Se,{Button:Ce,Panel:we});const q=s.forwardRef(({buttonProps:{children:e,className:t,...a}={},children:u,className:m,defaultOpen:r,rounded:o},i)=>c.jsx(k,{as:"div",className:z("border border-base-300",o&&"rounded-box",m),defaultOpen:r,ref:i,children:({open:l})=>c.jsxs(c.Fragment,{children:[c.jsxs(k.Button,{as:re,className:z("w-full justify-between capitalize hover:bg-inherit",o&&"rounded-box",t),noAnimation:!0,...a,children:[e,l?c.jsx(se,{className:"h-4 w-4"}):c.jsx(oe,{className:"h-4 w-4"})]}),c.jsx(de,{show:l,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:c.jsx(k.Panel,{className:"p-2",children:u})})]})}));q.displayName="Disclosure";q.__docgenInfo={description:"",methods:[],displayName:"Disclosure",props:{buttonProps:{required:!1,tsType:{name:"ButtonProps"},description:"",defaultValue:{value:"{}",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:""}}};const ze={title:"Disclosure",component:q},y={args:{buttonProps:{color:"ghost",children:"Disclosure Label"},children:c.jsx("div",{className:"flex-1 text-center",children:"Disclosure Content"}),className:"w-64"}},N={args:{buttonProps:{color:"ghost",children:"Disclosure Label"},children:c.jsx("div",{className:"flex-1 text-center",children:"Disclosure Content"}),className:"w-64",rounded:!0}},I={args:{buttonProps:{color:"ghost",children:"Disclosure Label",size:"lg"},children:c.jsx("div",{className:"flex-1 text-center",children:"Disclosure Content"}),className:"w-64",rounded:!0}},S={args:{buttonProps:{color:"ghost",children:"Disclosure Label",size:"lg"},children:c.jsx("div",{className:"flex-1 text-center",children:"Disclosure Content"}),className:"w-64",defaultOpen:!0,rounded:!0}};var _,H,K;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    buttonProps: {
      color: 'ghost',
      children: 'Disclosure Label'
    },
    children: <div className="flex-1 text-center">Disclosure Content</div>,
    className: 'w-64'
  }
}`,...(K=(H=y.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var A,V,Q;N.parameters={...N.parameters,docs:{...(A=N.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    buttonProps: {
      color: 'ghost',
      children: 'Disclosure Label'
    },
    children: <div className="flex-1 text-center">Disclosure Content</div>,
    className: 'w-64',
    rounded: true
  }
}`,...(Q=(V=N.parameters)==null?void 0:V.docs)==null?void 0:Q.source}}};var X,Y,Z;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    buttonProps: {
      color: 'ghost',
      children: 'Disclosure Label',
      size: 'lg'
    },
    children: <div className="flex-1 text-center">Disclosure Content</div>,
    className: 'w-64',
    rounded: true
  }
}`,...(Z=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var G,J,W;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    buttonProps: {
      color: 'ghost',
      children: 'Disclosure Label',
      size: 'lg'
    },
    children: <div className="flex-1 text-center">Disclosure Content</div>,
    className: 'w-64',
    defaultOpen: true,
    rounded: true
  }
}`,...(W=(J=S.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};const Fe=["Default","Rounded","Large","Open"];export{y as Default,I as Large,S as Open,N as Rounded,Fe as __namedExportsOrder,ze as default};
