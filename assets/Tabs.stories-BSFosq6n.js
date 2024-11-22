import{j as E}from"./jsx-runtime-DR9Q75dM.js";import{c as ae}from"./index-lhGYx47h.js";import{r as d,R as N}from"./index-DRjF_FHU.js";import{f as Le,S as se,D as _,y as q,s as V,a as R,l as Z,X as j,I as we,u as M,e as Oe,b as v,d as ke}from"./use-is-mounted-BwivAQE6.js";import{I as k,N as z,O as C,M as I}from"./focus-management-D-lBgQCa.js";import{s as Me}from"./use-resolve-button-type-hEnF6IRh.js";import{c as De,p as _e}from"./hidden-tij90rwi.js";function qe({onFocus:e}){let[r,t]=d.useState(!0),n=Le();return r?N.createElement(De,{as:"button",type:"button",features:_e.Focusable,onFocus:s=>{s.preventDefault();let a,i=50;function m(){if(i--<=0){a&&cancelAnimationFrame(a);return}if(e()){if(cancelAnimationFrame(a),!n.current)return;t(!1);return}a=requestAnimationFrame(m)}a=requestAnimationFrame(m)}}):null}const Ae=d.createContext(null);function je(){return{groups:new Map,get(e,r){var t;let n=this.groups.get(e);n||(n=new Map,this.groups.set(e,n));let s=(t=n.get(r))!=null?t:0;n.set(r,s+1);let a=Array.from(n.keys()).indexOf(r);function i(){let m=n.get(r);m>1?n.set(r,m-1):n.delete(r)}return[a,i]}}}function Fe({children:e}){let r=d.useRef(je());return d.createElement(Ae.Provider,{value:r},e)}function Re(e){let r=d.useContext(Ae);if(!r)throw new Error("You must wrap your component in a <StableCollection>");let t=ze(),[n,s]=r.current.get(e,t);return d.useEffect(()=>s,[]),n}function ze(){var e,r,t;let n=(t=(r=(e=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:e.ReactCurrentOwner)==null?void 0:r.current)!=null?t:null;if(!n)return Symbol();let s=[],a=n;for(;a;)s.push(a.index),a=a.return;return"$."+s.join(".")}var Be=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Be||{}),Ue=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Ue||{}),Ge=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(Ge||{});let We={0(e,r){var t;let n=k(e.tabs,c=>c.current),s=k(e.panels,c=>c.current),a=n.filter(c=>{var x;return!((x=c.current)!=null&&x.hasAttribute("disabled"))}),i={...e,tabs:n,panels:s};if(r.index<0||r.index>n.length-1){let c=M(Math.sign(r.index-e.selectedIndex),{[-1]:()=>1,0:()=>M(Math.sign(r.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(a.length===0)return i;let x=M(c,{0:()=>n.indexOf(a[0]),1:()=>n.indexOf(a[a.length-1])});return{...i,selectedIndex:x===-1?e.selectedIndex:x}}let m=n.slice(0,r.index),g=[...n.slice(r.index),...m].find(c=>a.includes(c));if(!g)return i;let u=(t=n.indexOf(g))!=null?t:e.selectedIndex;return u===-1&&(u=e.selectedIndex),{...i,selectedIndex:u}},1(e,r){var t;if(e.tabs.includes(r.tab))return e;let n=e.tabs[e.selectedIndex],s=k([...e.tabs,r.tab],i=>i.current),a=(t=s.indexOf(n))!=null?t:e.selectedIndex;return a===-1&&(a=e.selectedIndex),{...e,tabs:s,selectedIndex:a}},2(e,r){return{...e,tabs:e.tabs.filter(t=>t!==r.tab)}},3(e,r){return e.panels.includes(r.panel)?e:{...e,panels:k([...e.panels,r.panel],t=>t.current)}},4(e,r){return{...e,panels:e.panels.filter(t=>t!==r.panel)}}},ee=d.createContext(null);ee.displayName="TabsDataContext";function O(e){let r=d.useContext(ee);if(r===null){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,O),t}return r}let re=d.createContext(null);re.displayName="TabsActionsContext";function te(e){let r=d.useContext(re);if(r===null){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,te),t}return r}function Xe(e,r){return M(r.type,We,e,r)}let Ye=d.Fragment;function He(e,r){let{defaultIndex:t=0,vertical:n=!1,manual:s=!1,onChange:a,selectedIndex:i=null,...m}=e;const g=n?"vertical":"horizontal",u=s?"manual":"auto";let c=i!==null,x=q(r),[o,b]=d.useReducer(Xe,{selectedIndex:i??t,tabs:[],panels:[]}),f=d.useMemo(()=>({selectedIndex:o.selectedIndex}),[o.selectedIndex]),P=V(a||(()=>{})),$=V(o.tabs),T=d.useMemo(()=>({orientation:g,activation:u,...o}),[g,u,o]),h=R(p=>(b({type:1,tab:p}),()=>b({type:2,tab:p}))),w=R(p=>(b({type:3,panel:p}),()=>b({type:4,panel:p}))),D=R(p=>{A.current!==p&&P.current(p),c||b({type:0,index:p})}),A=V(c?e.selectedIndex:o.selectedIndex),J=d.useMemo(()=>({registerTab:h,registerPanel:w,change:D}),[]);Z(()=>{b({type:0,index:i??t})},[i]),Z(()=>{if(A.current===void 0||o.tabs.length<=0)return;let p=k(o.tabs,S=>S.current);p.some((S,l)=>o.tabs[l]!==S)&&D(p.indexOf(o.tabs[A.current]))});let Q={ref:x};return N.createElement(Fe,null,N.createElement(re.Provider,{value:J},N.createElement(ee.Provider,{value:T},T.tabs.length<=0&&N.createElement(qe,{onFocus:()=>{var p,S;for(let l of $.current)if(((p=l.current)==null?void 0:p.tabIndex)===0)return(S=l.current)==null||S.focus(),!0;return!1}}),j({ourProps:Q,theirProps:m,slot:f,defaultTag:Ye,name:"Tabs"}))))}let Ke="div";function Ze(e,r){let{orientation:t,selectedIndex:n}=O("Tab.List"),s=q(r);return j({ourProps:{ref:s,role:"tablist","aria-orientation":t},theirProps:e,slot:{selectedIndex:n},defaultTag:Ke,name:"Tabs.List"})}let Je="button";function Qe(e,r){var t,n;let s=we(),{id:a=`headlessui-tabs-tab-${s}`,...i}=e,{orientation:m,activation:g,selectedIndex:u,tabs:c,panels:x}=O("Tab"),o=te("Tab"),b=O("Tab"),f=d.useRef(null),P=q(f,r);Z(()=>o.registerTab(f),[o,f]);let $=Re("tabs"),T=c.indexOf(f);T===-1&&(T=$);let h=T===u,w=R(l=>{var y;let F=l();if(F===z.Success&&g==="auto"){let Ce=(y=Oe(f))==null?void 0:y.activeElement,ne=b.tabs.findIndex(Ne=>Ne.current===Ce);ne!==-1&&o.change(ne)}return F}),D=R(l=>{let y=c.map(F=>F.current).filter(Boolean);if(l.key===v.Space||l.key===v.Enter){l.preventDefault(),l.stopPropagation(),o.change(T);return}switch(l.key){case v.Home:case v.PageUp:return l.preventDefault(),l.stopPropagation(),w(()=>C(y,I.First));case v.End:case v.PageDown:return l.preventDefault(),l.stopPropagation(),w(()=>C(y,I.Last))}if(w(()=>M(m,{vertical(){return l.key===v.ArrowUp?C(y,I.Previous|I.WrapAround):l.key===v.ArrowDown?C(y,I.Next|I.WrapAround):z.Error},horizontal(){return l.key===v.ArrowLeft?C(y,I.Previous|I.WrapAround):l.key===v.ArrowRight?C(y,I.Next|I.WrapAround):z.Error}}))===z.Success)return l.preventDefault()}),A=d.useRef(!1),J=R(()=>{var l;A.current||(A.current=!0,(l=f.current)==null||l.focus({preventScroll:!0}),o.change(T),ke(()=>{A.current=!1}))}),Q=R(l=>{l.preventDefault()}),p=d.useMemo(()=>({selected:h}),[h]),S={ref:P,onKeyDown:D,onMouseDown:Q,onClick:J,id:a,role:"tab",type:Me(e,f),"aria-controls":(n=(t=x[T])==null?void 0:t.current)==null?void 0:n.id,"aria-selected":h,tabIndex:h?0:-1};return j({ourProps:S,theirProps:i,slot:p,defaultTag:Je,name:"Tabs.Tab"})}let Ve="div";function er(e,r){let{selectedIndex:t}=O("Tab.Panels"),n=q(r),s=d.useMemo(()=>({selectedIndex:t}),[t]);return j({ourProps:{ref:n},theirProps:e,slot:s,defaultTag:Ve,name:"Tabs.Panels"})}let rr="div",tr=se.RenderStrategy|se.Static;function nr(e,r){var t,n,s,a;let i=we(),{id:m=`headlessui-tabs-panel-${i}`,tabIndex:g=0,...u}=e,{selectedIndex:c,tabs:x,panels:o}=O("Tab.Panel"),b=te("Tab.Panel"),f=d.useRef(null),P=q(f,r);Z(()=>b.registerPanel(f),[b,f]);let $=Re("panels"),T=o.indexOf(f);T===-1&&(T=$);let h=T===c,w=d.useMemo(()=>({selected:h}),[h]),D={ref:P,id:m,role:"tabpanel","aria-labelledby":(n=(t=x[T])==null?void 0:t.current)==null?void 0:n.id,tabIndex:h?g:-1};return!h&&((s=u.unmount)==null||s)&&!((a=u.static)!=null&&a)?N.createElement(De,{as:"span",...D}):j({ourProps:D,theirProps:u,slot:w,defaultTag:rr,features:tr,visible:h,name:"Tabs.Panel"})}let ar=_(Qe),sr=_(He),lr=_(Ze),ir=_(er),dr=_(nr),B=Object.assign(ar,{Group:sr,List:lr,Panels:ir,Panel:dr});const L=({bordered:e,boxed:r,children:t,className:n,manual:s,lifted:a,onChange:i,selectedTabId:m,size:g,tabs:u,vertical:c,...x})=>{const o=d.useMemo(()=>u.findIndex(({id:b})=>m===b),[m,u]);return E.jsxs(B.Group,{manual:s,onChange:b=>i(u[b]),selectedIndex:o>-1?o:void 0,vertical:c,children:[E.jsx(B.List,{className:ae("tabs",e&&"tabs-bordered",r&&"tabs-boxed",a&&"tabs-lifted",g&&`tabs-${g}`,n),...x,children:u.map(({children:b,className:f,disabled:P,id:$})=>E.jsx(B,{disabled:P,className:({selected:T})=>ae("tab",P&&"tab-disabled",T&&"tab-active",f),children:b},$))}),E.jsx(B.Panels,{children:t})]})};L.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{bordered:{required:!1,tsType:{name:"boolean"},description:""},boxed:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},lifted:{required:!1,tsType:{name:"boolean"},description:""},manual:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tab: TabData) => void",signature:{arguments:[{type:{name:"TabData"},name:"tab"}],return:{name:"void"}}},description:""},selectedTabId:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof TAB_SIZES)[number]"},description:""},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabData"}],raw:"TabData[]"},description:""},vertical:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const Tr={title:"Tabs",component:L},U={args:{tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]}},G={args:{bordered:!0,tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]}},W={args:{lifted:!0,tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]}},X={args:{boxed:!0,tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]}},Y={args:{boxed:!0,selectedTabId:"2",tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]}},H={args:{boxed:!0,tabs:[{id:"1",children:"Tab 1"},{id:"2",disabled:!0,children:"Tab 2"},{id:"3",children:"Tab 3"}]}},K={args:{boxed:!0,tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]},render:e=>E.jsxs("div",{className:"flex flex-col gap-4",children:[E.jsx(L,{size:"xs",...e}),E.jsx(L,{size:"sm",...e}),E.jsx(L,{...e}),E.jsx(L,{size:"lg",...e})]})};var le,ie,de;U.parameters={...U.parameters,docs:{...(le=U.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: '1',
      children: 'Tab 1'
    }, {
      id: '2',
      children: 'Tab 2'
    }, {
      id: '3',
      children: 'Tab 3'
    }]
  }
}`,...(de=(ie=U.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var oe,ce,ue;G.parameters={...G.parameters,docs:{...(oe=G.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    bordered: true,
    tabs: [{
      id: '1',
      children: 'Tab 1'
    }, {
      id: '2',
      children: 'Tab 2'
    }, {
      id: '3',
      children: 'Tab 3'
    }]
  }
}`,...(ue=(ce=G.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var be,pe,me;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    lifted: true,
    tabs: [{
      id: '1',
      children: 'Tab 1'
    }, {
      id: '2',
      children: 'Tab 2'
    }, {
      id: '3',
      children: 'Tab 3'
    }]
  }
}`,...(me=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var fe,Te,xe;X.parameters={...X.parameters,docs:{...(fe=X.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    boxed: true,
    tabs: [{
      id: '1',
      children: 'Tab 1'
    }, {
      id: '2',
      children: 'Tab 2'
    }, {
      id: '3',
      children: 'Tab 3'
    }]
  }
}`,...(xe=(Te=X.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var ge,he,ve;Y.parameters={...Y.parameters,docs:{...(ge=Y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    boxed: true,
    selectedTabId: '2',
    tabs: [{
      id: '1',
      children: 'Tab 1'
    }, {
      id: '2',
      children: 'Tab 2'
    }, {
      id: '3',
      children: 'Tab 3'
    }]
  }
}`,...(ve=(he=Y.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var Ie,ye,Ee;H.parameters={...H.parameters,docs:{...(Ie=H.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    boxed: true,
    tabs: [{
      id: '1',
      children: 'Tab 1'
    }, {
      id: '2',
      disabled: true,
      children: 'Tab 2'
    }, {
      id: '3',
      children: 'Tab 3'
    }]
  }
}`,...(Ee=(ye=H.parameters)==null?void 0:ye.docs)==null?void 0:Ee.source}}};var Pe,Se,$e;K.parameters={...K.parameters,docs:{...(Pe=K.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    boxed: true,
    tabs: [{
      id: '1',
      children: 'Tab 1'
    }, {
      id: '2',
      children: 'Tab 2'
    }, {
      id: '3',
      children: 'Tab 3'
    }]
  },
  render: args => <div className="flex flex-col gap-4">
      <Tabs size="xs" {...args} />
      <Tabs size="sm" {...args} />
      <Tabs {...args} />
      <Tabs size="lg" {...args} />
    </div>
}`,...($e=(Se=K.parameters)==null?void 0:Se.docs)==null?void 0:$e.source}}};const xr=["Default","Bordered","Lifted","Boxed","Controlled","Disabled","Sizes"];export{G as Bordered,X as Boxed,Y as Controlled,U as Default,H as Disabled,W as Lifted,K as Sizes,xr as __namedExportsOrder,Tr as default};
