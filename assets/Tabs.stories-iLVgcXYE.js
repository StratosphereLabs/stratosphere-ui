import{j as $}from"./jsx-runtime-DiklIkkE.js";import{c as oe}from"./index-lhGYx47h.js";import{r as i,R}from"./index-DRjF_FHU.js";import{$ as Fe,a as We}from"./useFocusRing-CeEfTI_f.js";import{w as He,e as Ve}from"./use-resolve-button-type-BunvJ_cM.js";import{K as z,s as K,y as B,b as F,n as ee,L as G,a as _,_ as ke,t as Je,c as I,O as de,u as Ye}from"./keyboard-CkwPyo54.js";import{f as Ze}from"./use-is-mounted-y19JrxnP.js";import{f as Me,s as Qe}from"./hidden-VT-llRfc.js";import{P as M,F as P,T as W,_ as O}from"./focus-management-BpNHtozA.js";function Xe({onFocus:e}){let[r,n]=i.useState(!0),t=Ze();return r?R.createElement(Me,{as:"button",type:"button",features:Qe.Focusable,onFocus:l=>{l.preventDefault();let s,a=50;function o(){if(a--<=0){s&&cancelAnimationFrame(s);return}if(e()){if(cancelAnimationFrame(s),!t.current)return;n(!1);return}s=requestAnimationFrame(o)}s=requestAnimationFrame(o)}}):null}const Re=i.createContext(null);function er(){return{groups:new Map,get(e,r){var n;let t=this.groups.get(e);t||(t=new Map,this.groups.set(e,t));let l=(n=t.get(r))!=null?n:0;t.set(r,l+1);let s=Array.from(t.keys()).indexOf(r);function a(){let o=t.get(r);o>1?t.set(r,o-1):t.delete(r)}return[s,a]}}}function rr({children:e}){let r=i.useRef(er());return i.createElement(Re.Provider,{value:r},e)}function qe(e){let r=i.useContext(Re);if(!r)throw new Error("You must wrap your component in a <StableCollection>");let n=i.useId(),[t,l]=r.current.get(e,n);return i.useEffect(()=>l,[]),t}var tr=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(tr||{}),nr=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(nr||{}),ar=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(ar||{});let sr={0(e,r){var n;let t=O(e.tabs,u=>u.current),l=O(e.panels,u=>u.current),s=t.filter(u=>{var T;return!((T=u.current)!=null&&T.hasAttribute("disabled"))}),a={...e,tabs:t,panels:l};if(r.index<0||r.index>t.length-1){let u=_(Math.sign(r.index-e.selectedIndex),{[-1]:()=>1,0:()=>_(Math.sign(r.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(s.length===0)return a;let T=_(u,{0:()=>t.indexOf(s[0]),1:()=>t.indexOf(s[s.length-1])});return{...a,selectedIndex:T===-1?e.selectedIndex:T}}let o=t.slice(0,r.index),x=[...t.slice(r.index),...o].find(u=>s.includes(u));if(!x)return a;let p=(n=t.indexOf(x))!=null?n:e.selectedIndex;return p===-1&&(p=e.selectedIndex),{...a,selectedIndex:p}},1(e,r){if(e.tabs.includes(r.tab))return e;let n=e.tabs[e.selectedIndex],t=O([...e.tabs,r.tab],s=>s.current),l=e.selectedIndex;return e.info.current.isControlled||(l=t.indexOf(n),l===-1&&(l=e.selectedIndex)),{...e,tabs:t,selectedIndex:l}},2(e,r){return{...e,tabs:e.tabs.filter(n=>n!==r.tab)}},3(e,r){return e.panels.includes(r.panel)?e:{...e,panels:O([...e.panels,r.panel],n=>n.current)}},4(e,r){return{...e,panels:e.panels.filter(n=>n!==r.panel)}}},te=i.createContext(null);te.displayName="TabsDataContext";function j(e){let r=i.useContext(te);if(r===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,j),n}return r}let ne=i.createContext(null);ne.displayName="TabsActionsContext";function ae(e){let r=i.useContext(ne);if(r===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ae),n}return r}function ir(e,r){return _(r.type,sr,e,r)}let lr="div";function or(e,r){let{defaultIndex:n=0,vertical:t=!1,manual:l=!1,onChange:s,selectedIndex:a=null,...o}=e;const x=t?"vertical":"horizontal",p=l?"manual":"auto";let u=a!==null,T=K({isControlled:u}),y=B(r),[d,b]=i.useReducer(ir,{info:T,selectedIndex:a??n,tabs:[],panels:[]}),E=i.useMemo(()=>({selectedIndex:d.selectedIndex}),[d.selectedIndex]),D=K(s||(()=>{})),v=K(d.tabs),m=i.useMemo(()=>({orientation:x,activation:p,...d}),[x,p,d]),k=F(f=>(b({type:1,tab:f}),()=>b({type:2,tab:f}))),L=F(f=>(b({type:3,panel:f}),()=>b({type:4,panel:f}))),h=F(f=>{g.current!==f&&D.current(f),u||b({type:0,index:f})}),g=K(u?e.selectedIndex:d.selectedIndex),A=i.useMemo(()=>({registerTab:k,registerPanel:L,change:h}),[]);ee(()=>{b({type:0,index:a??n})},[a]),ee(()=>{if(g.current===void 0||d.tabs.length<=0)return;let f=O(d.tabs,w=>w.current);f.some((w,C)=>d.tabs[C]!==w)&&h(f.indexOf(d.tabs[g.current]))});let re={ref:y},N=G();return R.createElement(rr,null,R.createElement(ne.Provider,{value:A},R.createElement(te.Provider,{value:m},m.tabs.length<=0&&R.createElement(Xe,{onFocus:()=>{var f,w;for(let C of v.current)if(((f=C.current)==null?void 0:f.tabIndex)===0)return(w=C.current)==null||w.focus(),!0;return!1}}),N({ourProps:re,theirProps:o,slot:E,defaultTag:lr,name:"Tabs"}))))}let dr="div";function cr(e,r){let{orientation:n,selectedIndex:t}=j("Tab.List"),l=B(r),s=i.useMemo(()=>({selectedIndex:t}),[t]),a=e,o={ref:l,role:"tablist","aria-orientation":n};return G()({ourProps:o,theirProps:a,slot:s,defaultTag:dr,name:"Tabs.List"})}let ur="button";function br(e,r){var n,t;let l=i.useId(),{id:s=`headlessui-tabs-tab-${l}`,disabled:a=!1,autoFocus:o=!1,...x}=e,{orientation:p,activation:u,selectedIndex:T,tabs:y,panels:d}=j("Tab"),b=ae("Tab"),E=j("Tab"),[D,v]=i.useState(null),m=i.useRef(null),k=B(m,r,v);ee(()=>b.registerTab(m),[b,m]);let L=qe("tabs"),h=y.indexOf(m);h===-1&&(h=L);let g=h===T,A=F(c=>{var S;let U=c();if(U===W.Success&&u==="auto"){let Ue=(S=Ye(m))==null?void 0:S.activeElement,le=E.tabs.findIndex(Ke=>Ke.current===Ue);le!==-1&&b.change(le)}return U}),re=F(c=>{let S=y.map(U=>U.current).filter(Boolean);if(c.key===I.Space||c.key===I.Enter){c.preventDefault(),c.stopPropagation(),b.change(h);return}switch(c.key){case I.Home:case I.PageUp:return c.preventDefault(),c.stopPropagation(),A(()=>M(S,P.First));case I.End:case I.PageDown:return c.preventDefault(),c.stopPropagation(),A(()=>M(S,P.Last))}if(A(()=>_(p,{vertical(){return c.key===I.ArrowUp?M(S,P.Previous|P.WrapAround):c.key===I.ArrowDown?M(S,P.Next|P.WrapAround):W.Error},horizontal(){return c.key===I.ArrowLeft?M(S,P.Previous|P.WrapAround):c.key===I.ArrowRight?M(S,P.Next|P.WrapAround):W.Error}}))===W.Success)return c.preventDefault()}),N=i.useRef(!1),f=F(()=>{var c;N.current||(N.current=!0,(c=m.current)==null||c.focus({preventScroll:!0}),b.change(h),Je(()=>{N.current=!1}))}),w=F(c=>{c.preventDefault()}),{isFocusVisible:C,focusProps:Oe}=Fe({autoFocus:o}),{isHovered:se,hoverProps:_e}=We({isDisabled:a}),{pressed:ie,pressProps:ze}=He({disabled:a}),Be=i.useMemo(()=>({selected:g,hover:se,active:ie,focus:C,autofocus:o,disabled:a}),[g,se,C,ie,o,a]),Ge=ke({ref:k,onKeyDown:re,onMouseDown:w,onClick:f,id:s,role:"tab",type:Ve(e,D),"aria-controls":(t=(n=d[h])==null?void 0:n.current)==null?void 0:t.id,"aria-selected":g,tabIndex:g?0:-1,disabled:a||void 0,autoFocus:o},Oe,_e,ze);return G()({ourProps:Ge,theirProps:x,slot:Be,defaultTag:ur,name:"Tabs.Tab"})}let pr="div";function fr(e,r){let{selectedIndex:n}=j("Tab.Panels"),t=B(r),l=i.useMemo(()=>({selectedIndex:n}),[n]),s=e,a={ref:t};return G()({ourProps:a,theirProps:s,slot:l,defaultTag:pr,name:"Tabs.Panels"})}let mr="div",Tr=de.RenderStrategy|de.Static;function xr(e,r){var n,t,l,s;let a=i.useId(),{id:o=`headlessui-tabs-panel-${a}`,tabIndex:x=0,...p}=e,{selectedIndex:u,tabs:T,panels:y}=j("Tab.Panel"),d=ae("Tab.Panel"),b=i.useRef(null),E=B(b,r);ee(()=>d.registerPanel(b),[d,b]);let D=qe("panels"),v=y.indexOf(b);v===-1&&(v=D);let m=v===u,{isFocusVisible:k,focusProps:L}=Fe(),h=i.useMemo(()=>({selected:m,focus:k}),[m,k]),g=ke({ref:E,id:o,role:"tabpanel","aria-labelledby":(t=(n=T[v])==null?void 0:n.current)==null?void 0:t.id,tabIndex:m?x:-1},L),A=G();return!m&&((l=p.unmount)==null||l)&&!((s=p.static)!=null&&s)?R.createElement(Me,{"aria-hidden":"true",...g}):A({ourProps:g,theirProps:p,slot:h,defaultTag:mr,features:Tr,visible:m,name:"Tabs.Panel"})}let hr=z(br),je=z(or),Le=z(cr),Ne=z(fr),gr=z(xr),vr=Object.assign(hr,{Group:je,List:Le,Panels:Ne,Panel:gr});const q=({border:e,box:r,children:n,className:t,lift:l,manual:s,onChange:a,selectedTabId:o,size:x,tabs:p,vertical:u,...T})=>{const y=i.useMemo(()=>p.findIndex(({id:d})=>o===d),[o,p]);return $.jsxs(je,{manual:s,onChange:d=>a(p[d]),selectedIndex:y>-1?y:void 0,vertical:u,children:[$.jsx(Le,{className:oe("tabs",e&&"tabs-border",r&&"tabs-box",l&&"tabs-lift",x&&`tabs-${x}`,t),...T,children:p.map(({children:d,className:b,disabled:E,id:D})=>$.jsx(vr,{disabled:E,className:({selected:v})=>oe("tab",E&&"tab-disabled",v&&"tab-active",b),children:d},D))}),$.jsx(Ne,{children:n})]})};q.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{border:{required:!1,tsType:{name:"boolean"},description:""},box:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},lift:{required:!1,tsType:{name:"boolean"},description:""},manual:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tab: TabData) => void",signature:{arguments:[{type:{name:"TabData"},name:"tab"}],return:{name:"void"}}},description:""},selectedTabId:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof TAB_SIZES)[number]"},description:""},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabData"}],raw:"TabData[]"},description:""},vertical:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const Cr={title:"Tabs",component:q},H={args:{tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]}},V={args:{border:!0,tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]}},J={args:{lift:!0,tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]}},Y={args:{box:!0,tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]}},Z={args:{box:!0,selectedTabId:"2",tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]}},Q={args:{box:!0,tabs:[{id:"1",children:"Tab 1"},{id:"2",disabled:!0,children:"Tab 2"},{id:"3",children:"Tab 3"}]}},X={args:{box:!0,tabs:[{id:"1",children:"Tab 1"},{id:"2",children:"Tab 2"},{id:"3",children:"Tab 3"}]},render:e=>$.jsxs("div",{className:"flex flex-col gap-4",children:[$.jsx(q,{size:"xs",...e}),$.jsx(q,{size:"sm",...e}),$.jsx(q,{...e}),$.jsx(q,{size:"lg",...e})]})};var ce,ue,be;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(be=(ue=H.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var pe,fe,me;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    border: true,
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
}`,...(me=(fe=V.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var Te,xe,he;J.parameters={...J.parameters,docs:{...(Te=J.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    lift: true,
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
}`,...(he=(xe=J.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var ge,ve,Ie;Y.parameters={...Y.parameters,docs:{...(ge=Y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    box: true,
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
}`,...(Ie=(ve=Y.parameters)==null?void 0:ve.docs)==null?void 0:Ie.source}}};var Pe,ye,Se;Z.parameters={...Z.parameters,docs:{...(Pe=Z.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    box: true,
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
}`,...(Se=(ye=Z.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var $e,Ee,we;Q.parameters={...Q.parameters,docs:{...($e=Q.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    box: true,
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
}`,...(we=(Ee=Q.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};var De,Ae,Ce;X.parameters={...X.parameters,docs:{...(De=X.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    box: true,
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
}`,...(Ce=(Ae=X.parameters)==null?void 0:Ae.docs)==null?void 0:Ce.source}}};const Fr=["Default","Border","Lift","Box","Controlled","Disabled","Sizes"];export{V as Border,Y as Box,Z as Controlled,H as Default,Q as Disabled,J as Lift,X as Sizes,Fr as __namedExportsOrder,Cr as default};
