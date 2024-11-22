import{j as v}from"./jsx-runtime-DR9Q75dM.js";import{a as je,b as ke,u as Y,F as Z}from"./FormLabelText-2tTELyhz.js";import{c as oe}from"./index-lhGYx47h.js";import{r as u,R as z}from"./index-DRjF_FHU.js";import{i as Re,d as qe,g as Ae,u as Ve}from"./useSelectFormSync-DN9FPssX.js";import{u as Be}from"./lodash-CaEHFKMH.js";import{B as _e}from"./Button-C8Er2sLW.js";import"./FormCheckbox-CthDTzDt.js";import"./FormControl-DGcDh0VE.js";import"./FormError-Cspxj7f0.js";import"./FormFileInput-DBymLeFk.js";import{T as Qe,e as ze}from"./FormRadioGroupOption-DLb27xFN.js";import"./FormRangeSlider-D1_AsYb-.js";import"./FormTextarea-Do43OudD.js";import"./FormToggleSwitch-DiQNfjGD.js";import{p as K,r as Ue}from"./bugs-BqEXq7dn.js";import{S as ce,D as k,y as q,a as f,u as M,l as X,R as We,X as A,I as ee,e as Ge,s as He,b as y,o as ie}from"./use-is-mounted-BwivAQE6.js";import{u as Ke,a as L,x as Xe}from"./use-tracked-pointer-icV3TFbN.js";import{h as Je,T as Ye,I as Ze}from"./focus-management-D-lBgQCa.js";import{c as et,d as J,C as tt}from"./open-closed-DSFNRtpz.js";import{s as nt}from"./use-resolve-button-type-hEnF6IRh.js";import{h as at}from"./use-outside-click-ryvoS0Jt.js";import{c as rt,p as ot}from"./hidden-tij90rwi.js";import{b as lt}from"./use-text-value-B3-EWJXX.js";import{f as it}from"./Icons-DQZ7jVN3.js";import{a as st,M as dt}from"./MenuItem-Hg2aCcF3.js";import{t as ut}from"./transition-CuZKXbF5.js";import"./use-flags-uZipNKZX.js";import"./description-CIrZ1Jfq.js";import"./use-tree-walker-BP3EYLpg.js";var ct=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ct||{}),mt=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(mt||{}),pt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(pt||{}),bt=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(bt||{});function le(e,t=l=>l){let l=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=Ze(t(e.options.slice()),s=>s.dataRef.current.domRef.current),i=l?r.indexOf(l):null;return i===-1&&(i=null),{options:r,activeOptionIndex:i}}let ft={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let t=e.activeOptionIndex,{isSelected:l}=e.dataRef.current,r=e.options.findIndex(i=>l(i.dataRef.current.value));return r!==-1&&(t=r),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var l;if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=le(e),i=Xe(t,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:i,activationTrigger:(l=t.trigger)!=null?l:1}},3:(e,t)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let l=e.searchQuery!==""?0:1,r=e.searchQuery+t.value.toLowerCase(),i=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+l).concat(e.options.slice(0,e.activeOptionIndex+l)):e.options).find(n=>{var o;return!n.dataRef.current.disabled&&((o=n.dataRef.current.textValue)==null?void 0:o.startsWith(r))}),s=i?e.options.indexOf(i):-1;return s===-1||s===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:s,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,t)=>{let l={id:t.id,dataRef:t.dataRef},r=le(e,i=>[...i,l]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(l)),{...e,...r}},6:(e,t)=>{let l=le(e,r=>{let i=r.findIndex(s=>s.id===t.id);return i!==-1&&r.splice(i,1),r});return{...e,...l,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},se=u.createContext(null);se.displayName="ListboxActionsContext";function V(e){let t=u.useContext(se);if(t===null){let l=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,V),l}return t}let de=u.createContext(null);de.displayName="ListboxDataContext";function B(e){let t=u.useContext(de);if(t===null){let l=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,B),l}return t}function xt(e,t){return M(t.type,ft,e,t)}let vt=u.Fragment;function gt(e,t){let{value:l,defaultValue:r,form:i,name:s,onChange:n,by:o=(d,c)=>d===c,disabled:x=!1,horizontal:g=!1,multiple:I=!1,...T}=e;const $=g?"horizontal":"vertical";let w=q(t),[S=I?[]:void 0,O]=Qe(l,n,r),[m,a]=u.useReducer(xt,{dataRef:u.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),p=u.useRef({static:!1,hold:!1}),F=u.useRef(null),N=u.useRef(null),P=u.useRef(null),h=f(typeof o=="string"?(d,c)=>{let R=o;return(d==null?void 0:d[R])===(c==null?void 0:c[R])}:o),D=u.useCallback(d=>M(b.mode,{1:()=>S.some(c=>h(c,d)),0:()=>h(S,d)}),[S]),b=u.useMemo(()=>({...m,value:S,disabled:x,mode:I?1:0,orientation:$,compare:h,isSelected:D,optionsPropsRef:p,labelRef:F,buttonRef:N,optionsRef:P}),[S,x,I,m]);X(()=>{m.dataRef.current=b},[b]),at([b.buttonRef,b.optionsRef],(d,c)=>{var R;a({type:1}),Je(c,Ye.Loose)||(d.preventDefault(),(R=b.buttonRef.current)==null||R.focus())},b.listboxState===0);let C=u.useMemo(()=>({open:b.listboxState===0,disabled:x,value:S}),[b,x,S]),te=f(d=>{let c=b.options.find(R=>R.id===d);c&&re(c.dataRef.current.value)}),ne=f(()=>{if(b.activeOptionIndex!==null){let{dataRef:d,id:c}=b.options[b.activeOptionIndex];re(d.current.value),a({type:2,focus:L.Specific,id:c})}}),ae=f(()=>a({type:0})),$e=f(()=>a({type:1})),we=f((d,c,R)=>d===L.Specific?a({type:2,focus:L.Specific,id:c,trigger:R}):a({type:2,focus:d,trigger:R})),De=f((d,c)=>(a({type:5,id:d,dataRef:c}),()=>a({type:6,id:d}))),Fe=f(d=>(a({type:7,id:d}),()=>a({type:7,id:null}))),re=f(d=>M(b.mode,{0(){return O==null?void 0:O(d)},1(){let c=b.value.slice(),R=c.findIndex(Q=>h(Q,d));return R===-1?c.push(d):c.splice(R,1),O==null?void 0:O(c)}})),Pe=f(d=>a({type:3,value:d})),Ce=f(()=>a({type:4})),Ne=u.useMemo(()=>({onChange:re,registerOption:De,registerLabel:Fe,goToOption:we,closeListbox:$e,openListbox:ae,selectActiveOption:ne,selectOption:te,search:Pe,clearSearch:Ce}),[]),Me={ref:w},_=u.useRef(null),Ee=K();return u.useEffect(()=>{_.current&&r!==void 0&&Ee.addEventListener(_.current,"reset",()=>{O==null||O(r)})},[_,O]),z.createElement(se.Provider,{value:Ne},z.createElement(de.Provider,{value:b},z.createElement(et,{value:M(b.listboxState,{0:J.Open,1:J.Closed})},s!=null&&S!=null&&ze({[s]:S}).map(([d,c],R)=>z.createElement(rt,{features:ot.Hidden,ref:R===0?Q=>{var ue;_.current=(ue=Q==null?void 0:Q.closest("form"))!=null?ue:null}:void 0,...We({key:d,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:i,name:d,value:c})})),A({ourProps:Me,theirProps:T,slot:C,defaultTag:vt,name:"Listbox"}))))}let ht="button";function It(e,t){var l;let r=ee(),{id:i=`headlessui-listbox-button-${r}`,...s}=e,n=B("Listbox.Button"),o=V("Listbox.Button"),x=q(n.buttonRef,t),g=K(),I=f(m=>{switch(m.key){case y.Space:case y.Enter:case y.ArrowDown:m.preventDefault(),o.openListbox(),g.nextFrame(()=>{n.value||o.goToOption(L.First)});break;case y.ArrowUp:m.preventDefault(),o.openListbox(),g.nextFrame(()=>{n.value||o.goToOption(L.Last)});break}}),T=f(m=>{switch(m.key){case y.Space:m.preventDefault();break}}),$=f(m=>{if(Ue(m.currentTarget))return m.preventDefault();n.listboxState===0?(o.closeListbox(),g.nextFrame(()=>{var a;return(a=n.buttonRef.current)==null?void 0:a.focus({preventScroll:!0})})):(m.preventDefault(),o.openListbox())}),w=Re(()=>{if(n.labelId)return[n.labelId,i].join(" ")},[n.labelId,i]),S=u.useMemo(()=>({open:n.listboxState===0,disabled:n.disabled,value:n.value}),[n]),O={ref:x,id:i,type:nt(e,n.buttonRef),"aria-haspopup":"listbox","aria-controls":(l=n.optionsRef.current)==null?void 0:l.id,"aria-expanded":n.listboxState===0,"aria-labelledby":w,disabled:n.disabled,onKeyDown:I,onKeyUp:T,onClick:$};return A({ourProps:O,theirProps:s,slot:S,defaultTag:ht,name:"Listbox.Button"})}let St="label";function yt(e,t){let l=ee(),{id:r=`headlessui-listbox-label-${l}`,...i}=e,s=B("Listbox.Label"),n=V("Listbox.Label"),o=q(s.labelRef,t);X(()=>n.registerLabel(r),[r]);let x=f(()=>{var I;return(I=s.buttonRef.current)==null?void 0:I.focus({preventScroll:!0})}),g=u.useMemo(()=>({open:s.listboxState===0,disabled:s.disabled}),[s]);return A({ourProps:{ref:o,id:r,onClick:x},theirProps:i,slot:g,defaultTag:St,name:"Listbox.Label"})}let Ot="ul",Rt=ce.RenderStrategy|ce.Static;function Tt(e,t){var l;let r=ee(),{id:i=`headlessui-listbox-options-${r}`,...s}=e,n=B("Listbox.Options"),o=V("Listbox.Options"),x=q(n.optionsRef,t),g=K(),I=K(),T=tt(),$=T!==null?(T&J.Open)===J.Open:n.listboxState===0;u.useEffect(()=>{var a;let p=n.optionsRef.current;p&&n.listboxState===0&&p!==((a=Ge(p))==null?void 0:a.activeElement)&&p.focus({preventScroll:!0})},[n.listboxState,n.optionsRef]);let w=f(a=>{switch(I.dispose(),a.key){case y.Space:if(n.searchQuery!=="")return a.preventDefault(),a.stopPropagation(),o.search(a.key);case y.Enter:if(a.preventDefault(),a.stopPropagation(),n.activeOptionIndex!==null){let{dataRef:p}=n.options[n.activeOptionIndex];o.onChange(p.current.value)}n.mode===0&&(o.closeListbox(),ie().nextFrame(()=>{var p;return(p=n.buttonRef.current)==null?void 0:p.focus({preventScroll:!0})}));break;case M(n.orientation,{vertical:y.ArrowDown,horizontal:y.ArrowRight}):return a.preventDefault(),a.stopPropagation(),o.goToOption(L.Next);case M(n.orientation,{vertical:y.ArrowUp,horizontal:y.ArrowLeft}):return a.preventDefault(),a.stopPropagation(),o.goToOption(L.Previous);case y.Home:case y.PageUp:return a.preventDefault(),a.stopPropagation(),o.goToOption(L.First);case y.End:case y.PageDown:return a.preventDefault(),a.stopPropagation(),o.goToOption(L.Last);case y.Escape:return a.preventDefault(),a.stopPropagation(),o.closeListbox(),g.nextFrame(()=>{var p;return(p=n.buttonRef.current)==null?void 0:p.focus({preventScroll:!0})});case y.Tab:a.preventDefault(),a.stopPropagation();break;default:a.key.length===1&&(o.search(a.key),I.setTimeout(()=>o.clearSearch(),350));break}}),S=Re(()=>{var a,p,F;return(F=(a=n.labelRef.current)==null?void 0:a.id)!=null?F:(p=n.buttonRef.current)==null?void 0:p.id},[n.labelRef.current,n.buttonRef.current]),O=u.useMemo(()=>({open:n.listboxState===0}),[n]),m={"aria-activedescendant":n.activeOptionIndex===null||(l=n.options[n.activeOptionIndex])==null?void 0:l.id,"aria-multiselectable":n.mode===1?!0:void 0,"aria-labelledby":S,"aria-orientation":n.orientation,id:i,onKeyDown:w,role:"listbox",tabIndex:0,ref:x};return A({ourProps:m,theirProps:s,slot:O,defaultTag:Ot,features:Rt,visible:$,name:"Listbox.Options"})}let Lt="li";function $t(e,t){let l=ee(),{id:r=`headlessui-listbox-option-${l}`,disabled:i=!1,value:s,...n}=e,o=B("Listbox.Option"),x=V("Listbox.Option"),g=o.activeOptionIndex!==null?o.options[o.activeOptionIndex].id===r:!1,I=o.isSelected(s),T=u.useRef(null),$=lt(T),w=He({disabled:i,value:s,domRef:T,get textValue(){return $()}}),S=q(t,T);X(()=>{if(o.listboxState!==0||!g||o.activationTrigger===0)return;let h=ie();return h.requestAnimationFrame(()=>{var D,b;(b=(D=T.current)==null?void 0:D.scrollIntoView)==null||b.call(D,{block:"nearest"})}),h.dispose},[T,g,o.listboxState,o.activationTrigger,o.activeOptionIndex]),X(()=>x.registerOption(r,w),[w,r]);let O=f(h=>{if(i)return h.preventDefault();x.onChange(s),o.mode===0&&(x.closeListbox(),ie().nextFrame(()=>{var D;return(D=o.buttonRef.current)==null?void 0:D.focus({preventScroll:!0})}))}),m=f(()=>{if(i)return x.goToOption(L.Nothing);x.goToOption(L.Specific,r)}),a=Ke(),p=f(h=>a.update(h)),F=f(h=>{a.wasMoved(h)&&(i||g||x.goToOption(L.Specific,r,0))}),N=f(h=>{a.wasMoved(h)&&(i||g&&x.goToOption(L.Nothing))}),P=u.useMemo(()=>({active:g,selected:I,disabled:i}),[g,I,i]);return A({ourProps:{id:r,ref:S,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,"aria-selected":I,disabled:void 0,onClick:O,onFocus:m,onPointerEnter:p,onMouseEnter:p,onPointerMove:F,onMouseMove:F,onPointerLeave:N,onMouseLeave:N},theirProps:n,slot:P,defaultTag:Lt,name:"Listbox.Option"})}let wt=k(gt),Dt=k(It),Ft=k(yt),Pt=k(Tt),Ct=k($t),j=Object.assign(wt,{Button:Dt,Label:Ft,Options:Pt,Option:Ct});const Te=({children:e,className:t,disabled:l,name:r,selectedItems:i,setSelectedItems:s})=>v.jsx(j,{as:"div",by:qe,className:t,disabled:l,multiple:!0,name:r,onChange:s,value:i,children:e});Te.__docgenInfo={description:"",methods:[],displayName:"FormSelectMulti",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"DataItem"}],raw:"DataItem[]"},description:""},setSelectedItems:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"DataItem"}],raw:"DataItem[]"}],raw:"SetStateAction<DataItem[]>"}],raw:"Dispatch<SetStateAction<DataItem[]>>"},description:""}},composes:["Pick"]};const Le=({children:e,className:t,disabled:l,name:r,selectedItems:i,setSelectedItems:s})=>{const n=i[0]??null;return v.jsx(j,{as:"div",by:"id",className:t,disabled:l,name:r,onChange:o=>o&&s([o]),value:n,children:e})};Le.__docgenInfo={description:"",methods:[],displayName:"FormSelectSingle",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"DataItem"}],raw:"DataItem[]"},description:""},setSelectedItems:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"DataItem"}],raw:"DataItem[]"}],raw:"SetStateAction<DataItem[]>"}],raw:"Dispatch<SetStateAction<DataItem[]>>"},description:""}},composes:["Pick"]};const E=({buttonColor:e,buttonProps:{children:t,className:l,color:r,...i}={},className:s,disabled:n,dropdownIcon:o,formValueMode:x,getItemText:g,hideDropdownIcon:I,isRequired:T,labelText:$,menuClassName:w,menuSize:S,multi:O,name:m,options:a,showDirty:p})=>{const{field:{ref:F}}=je({name:m}),N=Ae(a??[]),[P,h]=u.useState([]);Ve({multi:O,name:m,options:N,selectedItems:P,setSelectedItems:h,valueMode:x});const D=Be(m,p),b=O===!0?Te:Le;return v.jsxs(b,{className:oe("relative",s),disabled:n,name:m,selectedItems:P,setSelectedItems:h,children:[v.jsxs("label",{className:"form-control",children:[$!==void 0?v.jsx("div",{className:"label",children:v.jsx(ke,{isRequired:T,children:$})}):null,v.jsxs(j.Button,{as:_e,className:oe("w-full flex-nowrap",l),color:D??r??e,loading:a===void 0,ref:F,...i,children:[t??(P.length>0?P.map(C=>g(C)).join(", "):"Select an item"),I!==!0?o??v.jsx(it,{className:"h-4 w-4"}):null]})]}),v.jsx(ut,{as:u.Fragment,enter:"transition duration-100 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-75 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:v.jsx(j.Options,{as:st,size:S,className:oe("rounded-box absolute z-50 bg-base-100 p-2 shadow-xl",w),children:a==null?void 0:a.map(C=>v.jsx(j.Option,{as:u.Fragment,value:C,children:({active:te,disabled:ne,selected:ae})=>v.jsx(dt,{disabled:ne,focus:te,selected:ae,children:g(C)})},C.id))})})]})};E.__docgenInfo={description:"",methods:[],displayName:"Select",props:{buttonColor:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof BUTTON_COLORS)[number]"},description:""},buttonProps:{required:!1,tsType:{name:"ButtonProps"},description:"",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},dropdownIcon:{required:!1,tsType:{name:"ReactNode"},description:""},formValueMode:{required:!1,tsType:{name:"union",raw:"'item' | 'id'",elements:[{name:"literal",value:"'item'"},{name:"literal",value:"'id'"}]},description:""},getItemText:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: DataItem) => ReactNode",signature:{arguments:[{type:{name:"DataItem"},name:"data"}],return:{name:"ReactNode"}}},description:""},hideDropdownIcon:{required:!1,tsType:{name:"literal",value:"true"},description:""},menuClassName:{required:!1,tsType:{name:"string"},description:""},menuSize:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof MENU_SIZES)[number]"},description:""},multi:{required:!1,tsType:{name:"literal",value:"true"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DataItem"}],raw:"DataItem[]"},description:""},showDirty:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const un={title:"Select",component:E},U={args:{labelText:"Field Label",name:"field1",getItemText:({id:e,label:t})=>`${e} - ${t}`,formValueMode:"item",options:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}]},render:e=>{const t=Y();return v.jsx(Z,{className:"h-60 w-60",methods:t,onFormSubmit:()=>null,children:v.jsx(E,{...e})})}},W={args:{labelText:"Field Label",name:"field1",getItemText:({id:e,label:t})=>`${e} - ${t}`,options:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}]},render:e=>{const t=Y({defaultValues:{field1:{id:"2",label:"Item 2"}}});return v.jsx(Z,{className:"h-60 w-60",methods:t,onFormSubmit:()=>null,children:v.jsx(E,{...e})})}},G={args:{labelText:"Field Label",multi:!0,name:"field1",getItemText:({id:e,label:t})=>`${e} - ${t}`,options:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}]},render:e=>{const t=Y();return v.jsx(Z,{className:"h-60 w-60",methods:t,onFormSubmit:()=>null,children:v.jsx(E,{...e})})}},H={args:{labelText:"Field Label",multi:!0,name:"field1",getItemText:({id:e,label:t})=>`${e} - ${t}`,options:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}]},render:e=>{const t=Y({defaultValues:{field1:[{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}]}});return v.jsx(Z,{className:"h-60 w-60",methods:t,onFormSubmit:()=>null,children:v.jsx(E,{...e})})}};var me,pe,be;U.parameters={...U.parameters,docs:{...(me=U.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    labelText: 'Field Label',
    name: 'field1',
    getItemText: ({
      id,
      label
    }) => \`\${id} - \${label}\`,
    formValueMode: 'item',
    options: [{
      id: '1',
      label: 'Item 1'
    }, {
      id: '2',
      label: 'Item 2'
    }, {
      id: '3',
      label: 'Item 3'
    }]
  },
  render: args => {
    const methods = useForm();
    return <Form className="h-60 w-60" methods={methods} onFormSubmit={() => null}>
        <Select {...args} />
      </Form>;
  }
}`,...(be=(pe=U.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var fe,xe,ve;W.parameters={...W.parameters,docs:{...(fe=W.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    labelText: 'Field Label',
    name: 'field1',
    getItemText: ({
      id,
      label
    }) => \`\${id} - \${label}\`,
    options: [{
      id: '1',
      label: 'Item 1'
    }, {
      id: '2',
      label: 'Item 2'
    }, {
      id: '3',
      label: 'Item 3'
    }]
  },
  render: args => {
    const methods = useForm({
      defaultValues: {
        field1: {
          id: '2',
          label: 'Item 2'
        }
      }
    });
    return <Form className="h-60 w-60" methods={methods} onFormSubmit={() => null}>
        <Select {...args} />
      </Form>;
  }
}`,...(ve=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var ge,he,Ie;G.parameters={...G.parameters,docs:{...(ge=G.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    labelText: 'Field Label',
    multi: true,
    name: 'field1',
    getItemText: ({
      id,
      label
    }) => \`\${id} - \${label}\`,
    options: [{
      id: '1',
      label: 'Item 1'
    }, {
      id: '2',
      label: 'Item 2'
    }, {
      id: '3',
      label: 'Item 3'
    }]
  },
  render: args => {
    const methods = useForm();
    return <Form className="h-60 w-60" methods={methods} onFormSubmit={() => null}>
        <Select {...args} />
      </Form>;
  }
}`,...(Ie=(he=G.parameters)==null?void 0:he.docs)==null?void 0:Ie.source}}};var Se,ye,Oe;H.parameters={...H.parameters,docs:{...(Se=H.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    labelText: 'Field Label',
    multi: true,
    name: 'field1',
    getItemText: ({
      id,
      label
    }) => \`\${id} - \${label}\`,
    options: [{
      id: '1',
      label: 'Item 1'
    }, {
      id: '2',
      label: 'Item 2'
    }, {
      id: '3',
      label: 'Item 3'
    }]
  },
  render: args => {
    const methods = useForm({
      defaultValues: {
        field1: [{
          id: '2',
          label: 'Item 2'
        }, {
          id: '3',
          label: 'Item 3'
        }]
      }
    });
    return <Form className="h-60 w-60" methods={methods} onFormSubmit={() => null}>
        <Select {...args} />
      </Form>;
  }
}`,...(Oe=(ye=H.parameters)==null?void 0:ye.docs)==null?void 0:Oe.source}}};const cn=["Default","WithDefaultValue","SelectMultiple","WithMultipleDefaultValues"];export{U as Default,G as SelectMultiple,W as WithDefaultValue,H as WithMultipleDefaultValues,cn as __namedExportsOrder,un as default};
