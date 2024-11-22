import{j as $}from"./jsx-runtime-DR9Q75dM.js";import{c as oe}from"./index-lhGYx47h.js";import{r as i,R}from"./index-DRjF_FHU.js";import{$ as ke,a as Ue}from"./useFocusRing-Bmn-zFZf.js";import{w as Ke,e as We}from"./use-resolve-button-type-CNcqzI1Z.js";import{O as ce,K as z,s as K,y as B,o as F,n as re,L as G,_ as Me,u as _,a as He,c as I,e as Ve}from"./keyboard-CUk6zo9K.js";import{f as Je}from"./use-is-mounted-DBJHk9C2.js";import{f as Re,s as Ye}from"./hidden-ZETsWED3.js";import{_ as O,T as W,P as M,F as P}from"./focus-management-BR9cTPnt.js";function Ze({onFocus:e}){let[r,n]=i.useState(!0),t=Je();return r?R.createElement(Re,{as:"button",type:"button",features:Ye.Focusable,onFocus:l=>{l.preventDefault();let s,a=50;function d(){if(a--<=0){s&&cancelAnimationFrame(s);return}if(e()){if(cancelAnimationFrame(s),!t.current)return;n(!1);return}s=requestAnimationFrame(d)}s=requestAnimationFrame(d)}}):null}const qe=i.createContext(null);function Qe(){return{groups:new Map,get(e,r){var n;let t=this.groups.get(e);t||(t=new Map,this.groups.set(e,t));let l=(n=t.get(r))!=null?n:0;t.set(r,l+1);let s=Array.from(t.keys()).indexOf(r);function a(){let d=t.get(r);d>1?t.set(r,d-1):t.delete(r)}return[s,a]}}}function Xe({children:e}){let r=i.useRef(Qe());return i.createElement(qe.Provider,{value:r},e)}function Le(e){let r=i.useContext(qe);if(!r)throw new Error("You must wrap your component in a <StableCollection>");let n=i.useId(),[t,l]=r.current.get(e,n);return i.useEffect(()=>l,[]),t}var er=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(er||{}),rr=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(rr||{}),tr=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(tr||{});let nr={0(e,r){var n;let t=O(e.tabs,u=>u.current),l=O(e.panels,u=>u.current),s=t.filter(u=>{var T;return!((T=u.current)!=null&&T.hasAttribute("disabled"))}),a={...e,tabs:t,panels:l};if(r.index<0||r.index>t.length-1){let u=_(Math.sign(r.index-e.selectedIndex),{[-1]:()=>1,0:()=>_(Math.sign(r.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(s.length===0)return a;let T=_(u,{0:()=>t.indexOf(s[0]),1:()=>t.indexOf(s[s.length-1])});return{...a,selectedIndex:T===-1?e.selectedIndex:T}}let d=t.slice(0,r.index),x=[...t.slice(r.index),...d].find(u=>s.includes(u));if(!x)return a;let p=(n=t.indexOf(x))!=null?n:e.selectedIndex;return p===-1&&(p=e.selectedIndex),{...a,selectedIndex:p}},1(e,r){if(e.tabs.includes(r.tab))return e;let n=e.tabs[e.selectedIndex],t=O([...e.tabs,r.tab],s=>s.current),l=e.selectedIndex;return e.info.current.isControlled||(l=t.indexOf(n),l===-1&&(l=e.selectedIndex)),{...e,tabs:t,selectedIndex:l}},2(e,r){return{...e,tabs:e.tabs.filter(n=>n!==r.tab)}},3(e,r){return e.panels.includes(r.panel)?e:{...e,panels:O([...e.panels,r.panel],n=>n.current)}},4(e,r){return{...e,panels:e.panels.filter(n=>n!==r.panel)}}},ne=i.createContext(null);ne.displayName="TabsDataContext";function L(e){let r=i.useContext(ne);if(r===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,L),n}return r}let ae=i.createContext(null);ae.displayName="TabsActionsContext";function se(e){let r=i.useContext(ae);if(r===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,se),n}return r}function ar(e,r){return _(r.type,nr,e,r)}let sr="div";function ir(e,r){let{defaultIndex:n=0,vertical:t=!1,manual:l=!1,onChange:s,selectedIndex:a=null,...d}=e;const x=t?"vertical":"horizontal",p=l?"manual":"auto";let u=a!==null,T=K({isControlled:u}),y=B(r),[o,b]=i.useReducer(ar,{info:T,selectedIndex:a??n,tabs:[],panels:[]}),E=i.useMemo(()=>({selectedIndex:o.selectedIndex}),[o.selectedIndex]),D=K(s||(()=>{})),v=K(o.tabs),f=i.useMemo(()=>({orientation:x,activation:p,...o}),[x,p,o]),k=F(m=>(b({type:1,tab:m}),()=>b({type:2,tab:m}))),j=F(m=>(b({type:3,panel:m}),()=>b({type:4,panel:m}))),h=F(m=>{g.current!==m&&D.current(m),u||b({type:0,index:m})}),g=K(u?e.selectedIndex:o.selectedIndex),A=i.useMemo(()=>({registerTab:k,registerPanel:j,change:h}),[]);re(()=>{b({type:0,index:a??n})},[a]),re(()=>{if(g.current===void 0||o.tabs.length<=0)return;let m=O(o.tabs,w=>w.current);m.some((w,C)=>o.tabs[C]!==w)&&h(m.indexOf(o.tabs[g.current]))});let te={ref:y},N=G();return R.createElement(Xe,null,R.createElement(ae.Provider,{value:A},R.createElement(ne.Provider,{value:f},f.tabs.length<=0&&R.createElement(Ze,{onFocus:()=>{var m,w;for(let C of v.current)if(((m=C.current)==null?void 0:m.tabIndex)===0)return(w=C.current)==null||w.focus(),!0;return!1}}),N({ourProps:te,theirProps:d,slot:E,defaultTag:sr,name:"Tabs"}))))}let lr="div";function dr(e,r){let{orientation:n,selectedIndex:t}=L("Tab.List"),l=B(r),s=i.useMemo(()=>({selectedIndex:t}),[t]),a=e,d={ref:l,role:"tablist","aria-orientation":n};return G()({ourProps:d,theirProps:a,slot:s,defaultTag:lr,name:"Tabs.List"})}let or="button";function cr(e,r){var n,t;let l=i.useId(),{id:s=`headlessui-tabs-tab-${l}`,disabled:a=!1,autoFocus:d=!1,...x}=e,{orientation:p,activation:u,selectedIndex:T,tabs:y,panels:o}=L("Tab"),b=se("Tab"),E=L("Tab"),[D,v]=i.useState(null),f=i.useRef(null),k=B(f,r,v);re(()=>b.registerTab(f),[b,f]);let j=Le("tabs"),h=y.indexOf(f);h===-1&&(h=j);let g=h===T,A=F(c=>{var S;let U=c();if(U===W.Success&&u==="auto"){let Be=(S=He(f))==null?void 0:S.activeElement,de=E.tabs.findIndex(Ge=>Ge.current===Be);de!==-1&&b.change(de)}return U}),te=F(c=>{let S=y.map(U=>U.current).filter(Boolean);if(c.key===I.Space||c.key===I.Enter){c.preventDefault(),c.stopPropagation(),b.change(h);return}switch(c.key){case I.Home:case I.PageUp:return c.preventDefault(),c.stopPropagation(),A(()=>M(S,P.First));case I.End:case I.PageDown:return c.preventDefault(),c.stopPropagation(),A(()=>M(S,P.Last))}if(A(()=>_(p,{vertical(){return c.key===I.ArrowUp?M(S,P.Previous|P.WrapAround):c.key===I.ArrowDown?M(S,P.Next|P.WrapAround):W.Error},horizontal(){return c.key===I.ArrowLeft?M(S,P.Previous|P.WrapAround):c.key===I.ArrowRight?M(S,P.Next|P.WrapAround):W.Error}}))===W.Success)return c.preventDefault()}),N=i.useRef(!1),m=F(()=>{var c;N.current||(N.current=!0,(c=f.current)==null||c.focus({preventScroll:!0}),b.change(h),Ve(()=>{N.current=!1}))}),w=F(c=>{c.preventDefault()}),{isFocusVisible:C,focusProps:je}=ke({autoFocus:d}),{isHovered:ie,hoverProps:Ne}=Ue({isDisabled:a}),{pressed:le,pressProps:Oe}=Ke({disabled:a}),_e=i.useMemo(()=>({selected:g,hover:ie,active:le,focus:C,autofocus:d,disabled:a}),[g,ie,C,le,d,a]),ze=Me({ref:k,onKeyDown:te,onMouseDown:w,onClick:m,id:s,role:"tab",type:We(e,D),"aria-controls":(t=(n=o[h])==null?void 0:n.current)==null?void 0:t.id,"aria-selected":g,tabIndex:g?0:-1,disabled:a||void 0,autoFocus:d},je,Ne,Oe);return G()({ourProps:ze,theirProps:x,slot:_e,defaultTag:or,name:"Tabs.Tab"})}let ur="div";function br(e,r){let{selectedIndex:n}=L("Tab.Panels"),t=B(r),l=i.useMemo(()=>({selectedIndex:n}),[n]),s=e,a={ref:t};return G()({ourProps:a,theirProps:s,slot:l,defaultTag:ur,name:"Tabs.Panels"})}let pr="div",mr=ce.RenderStrategy|ce.Static;function fr(e,r){var n,t,l,s;let a=i.useId(),{id:d=`headlessui-tabs-panel-${a}`,tabIndex:x=0,...p}=e,{selectedIndex:u,tabs:T,panels:y}=L("Tab.Panel"),o=se("Tab.Panel"),b=i.useRef(null),E=B(b,r);re(()=>o.registerPanel(b),[o,b]);let D=Le("panels"),v=y.indexOf(b);v===-1&&(v=D);let f=v===u,{isFocusVisible:k,focusProps:j}=ke(),h=i.useMemo(()=>({selected:f,focus:k}),[f,k]),g=Me({ref:E,id:d,role:"tabpanel","aria-labelledby":(t=(n=T[v])==null?void 0:n.current)==null?void 0:t.id,tabIndex:f?x:-1},j),A=G();return!f&&((l=p.unmount)==null||l)&&!((s=p.static)!=null&&s)?R.createElement(Re,{"aria-hidden":"true",...g}):A({ourProps:g,theirProps:p,slot:h,defaultTag:pr,features:mr,visible:f,name:"Tabs.Panel"})}let Tr=z(cr),xr=z(ir),hr=z(dr),gr=z(br),vr=z(fr),H=Object.assign(Tr,{Group:xr,List:hr,Panels:gr,Panel:vr});const q=({bordered:e,boxed:r,children:n,className:t,manual:l,lifted:s,onChange:a,selectedTabId:d,size:x,tabs:p,vertical:u,...T})=>{const y=i.useMemo(()=>p.findIndex(({id:o})=>d===o),[d,p]);return $.jsxs(H.Group,{manual:l,onChange:o=>a(p[o]),selectedIndex:y>-1?y:void 0,vertical:u,children:[$.jsx(H.List,{className:oe("tabs",e&&"tabs-bordered",r&&"tabs-boxed",s&&"tabs-lifted",x&&`tabs-${x}`,t),...T,children:p.map(({children:o,className:b,disabled:E,id:D})=>$.jsx(H,{disabled:E,className:({selected:v})=>oe("tab",E&&"tab-disabled",v&&"tab-active",b),children:o},D))}),$.jsx(H.Panels,{children:n})]})};q.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{bordered:{required:!1,tsType:{name:"boolean"},description:""},boxed:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},lifted:{required:!1,tsType:{name:"boolean"},description:""},manual:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tab: TabData) => void",signature:{arguments:[{type:{name:"TabData"},name:"tab"}],return:{name:"void"}}},description:""},selectedTabId:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof TAB_SIZES)[number]"},description:""},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabData"}],raw:"TabData[]"},description:""},vertical:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const Cr={title:"Tabs",component:q},V={args:{tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]}},J={args:{bordered:!0,tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]}},Y={args:{lifted:!0,tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]}},Z={args:{boxed:!0,tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]}},Q={args:{boxed:!0,selectedTabId:"2",tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]}},X={args:{boxed:!0,tabs:[{id:"1",children:"Tab 1"},{id:"2",disabled:!0,children:"Tab 2"},{id:"3",children:"Tab 3"}]}},ee={args:{boxed:!0,tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]},render:e=>$.jsxs("div",{className:"flex flex-col gap-4",children:[$.jsx(q,{size:"xs",...e}),$.jsx(q,{size:"sm",...e}),$.jsx(q,{...e}),$.jsx(q,{size:"lg",...e})]})};var ue,be,pe;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(be=V.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var me,fe,Te;J.parameters={...J.parameters,docs:{...(me=J.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(Te=(fe=J.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var xe,he,ge;Y.parameters={...Y.parameters,docs:{...(xe=Y.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(ge=(he=Y.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ve,Ie,Pe;Z.parameters={...Z.parameters,docs:{...(ve=Z.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(Pe=(Ie=Z.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var ye,Se,$e;Q.parameters={...Q.parameters,docs:{...(ye=Q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...($e=(Se=Q.parameters)==null?void 0:Se.docs)==null?void 0:$e.source}}};var Ee,we,De;X.parameters={...X.parameters,docs:{...(Ee=X.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(De=(we=X.parameters)==null?void 0:we.docs)==null?void 0:De.source}}};var Ae,Ce,Fe;ee.parameters={...ee.parameters,docs:{...(Ae=ee.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Fe=(Ce=ee.parameters)==null?void 0:Ce.docs)==null?void 0:Fe.source}}};const Fr=["Default","Bordered","Lifted","Boxed","Controlled","Disabled","Sizes"];export{J as Bordered,Z as Boxed,Q as Controlled,V as Default,X as Disabled,Y as Lifted,ee as Sizes,Fr as __namedExportsOrder,Cr as default};
