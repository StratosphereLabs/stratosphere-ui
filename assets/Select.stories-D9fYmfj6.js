import{j as T}from"./jsx-runtime-DiklIkkE.js";import{a as We,b as Je,u as oe,F as re}from"./FormLabelText-CKiZ0bQS.js";import"./FormCheckbox-CofDc0ZL.js";import"./FormControl-Cg9MfuLQ.js";import"./FormError-DCh6zGQK.js";import"./FormFileInput-DZxP-Ct9.js";import{l as Xe,T as Ze,u as Ye,j as et,p as tt}from"./FormRadioGroupOption-CE5PN_Z4.js";import"./FormRangeSlider-DLPhn1Wz.js";import"./FormTextarea-TxRBtJWi.js";import"./FormToggleSwitch-BRqfyGoT.js";import{Q as Le,u as nt,I as at,K as ot}from"./label-BHy4_Co_.js";import{$ as rt,a as lt}from"./useFocusRing-CeEfTI_f.js";import{r as c,R as C}from"./index-DRjF_FHU.js";import{r as j}from"./index-Bx0Ph3cE.js";import{w as it,e as st}from"./use-resolve-button-type-BunvJ_cM.js";import{s as ut,a as dt}from"./use-text-value-BrtKXhrT.js";import{K as z,y as G,b as S,_ as Ae,L as W,p as Ne,u as mt,s as ct,n as xe,o as pt,O as ge,a as B,c as R}from"./keyboard-CkwPyo54.js";import{y as ft,F as bt,x as vt,R as xt,b as ht,d as gt,M as St}from"./floating-DbckstqE.js";import{y as It}from"./use-inert-others-xmMDja1V.js";import{n as yt,m as Ot,f as wt,r as Tt,R as $t}from"./portal-klmoE2MD.js";import{u as Et,c as $,f as fe}from"./calculate-active-index-u79R9Ahj.js";import{u as Rt,x as Pt,i as ae,R as Dt,c as Ft}from"./open-closed-ZYQZnB1s.js";import{U as Mt,a as Lt}from"./description-BiWv9uhY.js";import{l as At,d as Nt,g as Ct,u as _t}from"./useSelectFormSync-D97ZPy3c.js";import{r as kt}from"./bugs-DpEN4NTH.js";import{j as qt,F as Se,_ as jt,A as Vt,h as Bt}from"./focus-management-BpNHtozA.js";import{c as be}from"./index-lhGYx47h.js";import{u as Qt}from"./useFieldColor-BLag0axt.js";import"./lodash-C1F-7-Ro.js";import{B as Kt}from"./Button-DlMGMNp9.js";import{g as Ht}from"./Icons-B4n3P6JJ.js";import{a as Ut,M as zt}from"./MenuItem-BDlX4InB.js";import"./hidden-VT-llRfc.js";import"./useValueChangeEffect-DgF92LoJ.js";var Gt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Gt||{}),Wt=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Wt||{}),Jt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Jt||{}),Xt=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.SetButtonElement=7]="SetButtonElement",e[e.SetOptionsElement=8]="SetOptionsElement",e))(Xt||{});function ve(e,t=r=>r){let r=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,n=jt(t(e.options.slice()),p=>p.dataRef.current.domRef.current),o=r?n.indexOf(r):null;return o===-1&&(o=null),{options:n,activeOptionIndex:o}}let Zt={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1,__demoMode:!1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let t=e.activeOptionIndex,{isSelected:r}=e.dataRef.current,n=e.options.findIndex(o=>r(o.dataRef.current.value));return n!==-1&&(t=n),{...e,listboxState:0,activeOptionIndex:t,__demoMode:!1}},2(e,t){var r,n,o,p,x;if(e.dataRef.current.disabled||e.listboxState===1)return e;let d={...e,searchQuery:"",activationTrigger:(r=t.trigger)!=null?r:1,__demoMode:!1};if(t.focus===$.Nothing)return{...d,activeOptionIndex:null};if(t.focus===$.Specific)return{...d,activeOptionIndex:e.options.findIndex(s=>s.id===t.id)};if(t.focus===$.Previous){let s=e.activeOptionIndex;if(s!==null){let m=e.options[s].dataRef.current.domRef,I=fe(t,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:f=>f.id,resolveDisabled:f=>f.dataRef.current.disabled});if(I!==null){let f=e.options[I].dataRef.current.domRef;if(((n=m.current)==null?void 0:n.previousElementSibling)===f.current||((o=f.current)==null?void 0:o.previousElementSibling)===null)return{...d,activeOptionIndex:I}}}}else if(t.focus===$.Next){let s=e.activeOptionIndex;if(s!==null){let m=e.options[s].dataRef.current.domRef,I=fe(t,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:f=>f.id,resolveDisabled:f=>f.dataRef.current.disabled});if(I!==null){let f=e.options[I].dataRef.current.domRef;if(((p=m.current)==null?void 0:p.nextElementSibling)===f.current||((x=f.current)==null?void 0:x.nextElementSibling)===null)return{...d,activeOptionIndex:I}}}}let i=ve(e),h=fe(t,{resolveItems:()=>i.options,resolveActiveIndex:()=>i.activeOptionIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});return{...d,...i,activeOptionIndex:h}},3:(e,t)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=e.searchQuery!==""?0:1,n=e.searchQuery+t.value.toLowerCase(),o=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+r).concat(e.options.slice(0,e.activeOptionIndex+r)):e.options).find(x=>{var d;return!x.dataRef.current.disabled&&((d=x.dataRef.current.textValue)==null?void 0:d.startsWith(n))}),p=o?e.options.indexOf(o):-1;return p===-1||p===e.activeOptionIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeOptionIndex:p,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,t)=>{let r={id:t.id,dataRef:t.dataRef},n=ve(e,o=>[...o,r]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(n.activeOptionIndex=n.options.indexOf(r)),{...e,...n}},6:(e,t)=>{let r=ve(e,n=>{let o=n.findIndex(p=>p.id===t.id);return o!==-1&&n.splice(o,1),n});return{...e,...r,activationTrigger:1}},7:(e,t)=>e.buttonElement===t.element?e:{...e,buttonElement:t.element},8:(e,t)=>e.optionsElement===t.element?e:{...e,optionsElement:t.element}},he=c.createContext(null);he.displayName="ListboxActionsContext";function le(e){let t=c.useContext(he);if(t===null){let r=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,le),r}return t}let ie=c.createContext(null);ie.displayName="ListboxDataContext";function J(e){let t=c.useContext(ie);if(t===null){let r=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,J),r}return t}function Yt(e,t){return B(t.type,Zt,e,t)}let en=c.Fragment;function tn(e,t){var r;let n=Lt(),{value:o,defaultValue:p,form:x,name:d,onChange:i,by:h,invalid:s=!1,disabled:m=n||!1,horizontal:I=!1,multiple:f=!1,__demoMode:a=!1,...y}=e;const q=I?"horizontal":"vertical";let N=G(t),O=Xe(p),[g=f?[]:void 0,P]=Ze(o,i,O),[M,w]=c.useReducer(Yt,{dataRef:c.createRef(),listboxState:a?0:1,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1,optionsVisible:!1,buttonElement:null,optionsElement:null,__demoMode:a}),_=c.useRef({static:!1,hold:!1}),L=c.useRef(new Map),b=Ye(h),D=c.useCallback(v=>B(l.mode,{1:()=>g.some(E=>b(E,v)),0:()=>b(g,v)}),[g]),l=c.useMemo(()=>({...M,value:g,disabled:m,invalid:s,mode:f?1:0,orientation:q,compare:b,isSelected:D,optionsPropsRef:_,listRef:L}),[g,m,s,f,M,L]);xe(()=>{M.dataRef.current=l},[l]);let A=l.listboxState===0;$t(A,[l.buttonElement,l.optionsElement],(v,E)=>{var k;w({type:1}),Vt(E,Bt.Loose)||(v.preventDefault(),(k=l.buttonElement)==null||k.focus())});let K=c.useMemo(()=>({open:l.listboxState===0,disabled:m,invalid:s,value:g}),[l,m,g,s]),H=S(v=>{let E=l.options.find(k=>k.id===v);E&&U(E.dataRef.current.value)}),se=S(()=>{if(l.activeOptionIndex!==null){let{dataRef:v,id:E}=l.options[l.activeOptionIndex];U(v.current.value),w({type:2,focus:$.Specific,id:E})}}),ue=S(()=>w({type:0})),X=S(()=>w({type:1})),Z=Ne(),de=S((v,E,k)=>{Z.dispose(),Z.microTask(()=>v===$.Specific?w({type:2,focus:$.Specific,id:E,trigger:k}):w({type:2,focus:v,trigger:k}))}),me=S((v,E)=>(w({type:5,id:v,dataRef:E}),()=>w({type:6,id:v}))),U=S(v=>B(l.mode,{0(){return P==null?void 0:P(v)},1(){let E=l.value.slice(),k=E.findIndex(Ge=>b(Ge,v));return k===-1?E.push(v):E.splice(k,1),P==null?void 0:P(E)}})),ce=S(v=>w({type:3,value:v})),u=S(()=>w({type:4})),F=S(v=>{w({type:7,element:v})}),V=S(v=>{w({type:8,element:v})}),pe=c.useMemo(()=>({onChange:U,registerOption:me,goToOption:de,closeListbox:X,openListbox:ue,selectActiveOption:se,selectOption:H,search:ce,clearSearch:u,setButtonElement:F,setOptionsElement:V}),[]),[Qe,Ke]=ot({inherit:!0}),He={ref:N},Ue=c.useCallback(()=>{if(O!==void 0)return P==null?void 0:P(O)},[P,O]),ze=W();return C.createElement(Ke,{value:Qe,props:{htmlFor:(r=l.buttonElement)==null?void 0:r.id},slot:{open:l.listboxState===0,disabled:m}},C.createElement(St,null,C.createElement(he.Provider,{value:pe},C.createElement(ie.Provider,{value:l},C.createElement(Ft,{value:B(l.listboxState,{0:ae.Open,1:ae.Closed})},d!=null&&g!=null&&C.createElement(et,{disabled:m,data:{[d]:g},form:x,onReset:Ue}),ze({ourProps:He,theirProps:y,slot:K,defaultTag:en,name:"Listbox"}))))))}let nn="button";function an(e,t){var r;let n=J("Listbox.Button"),o=le("Listbox.Button"),p=c.useId(),x=nt(),{id:d=x||`headlessui-listbox-button-${p}`,disabled:i=n.disabled||!1,autoFocus:h=!1,...s}=e,m=G(t,ft(),o.setButtonElement),I=bt(),f=S(l=>{switch(l.key){case R.Enter:tt(l.currentTarget);break;case R.Space:case R.ArrowDown:l.preventDefault(),j.flushSync(()=>o.openListbox()),n.value||o.goToOption($.First);break;case R.ArrowUp:l.preventDefault(),j.flushSync(()=>o.openListbox()),n.value||o.goToOption($.Last);break}}),a=S(l=>{switch(l.key){case R.Space:l.preventDefault();break}}),y=S(l=>{var A;if(kt(l.currentTarget))return l.preventDefault();n.listboxState===0?(j.flushSync(()=>o.closeListbox()),(A=n.buttonElement)==null||A.focus({preventScroll:!0})):(l.preventDefault(),o.openListbox())}),q=S(l=>l.preventDefault()),N=at([d]),O=Mt(),{isFocusVisible:g,focusProps:P}=rt({autoFocus:h}),{isHovered:M,hoverProps:w}=lt({isDisabled:i}),{pressed:_,pressProps:L}=it({disabled:i}),b=c.useMemo(()=>({open:n.listboxState===0,active:_||n.listboxState===0,disabled:i,invalid:n.invalid,value:n.value,hover:M,focus:g,autofocus:h}),[n.listboxState,n.value,i,M,g,_,n.invalid,h]),D=Ae(I(),{ref:m,id:d,type:st(e,n.buttonElement),"aria-haspopup":"listbox","aria-controls":(r=n.optionsElement)==null?void 0:r.id,"aria-expanded":n.listboxState===0,"aria-labelledby":N,"aria-describedby":O,disabled:i||void 0,autoFocus:h,onKeyDown:f,onKeyUp:a,onKeyPress:q,onClick:y},P,w,L);return W()({ourProps:D,theirProps:s,slot:b,defaultTag:nn,name:"Listbox.Button"})}let Ce=c.createContext(!1),on="div",rn=ge.RenderStrategy|ge.Static;function ln(e,t){var r,n;let o=c.useId(),{id:p=`headlessui-listbox-options-${o}`,anchor:x,portal:d=!1,modal:i=!0,transition:h=!1,...s}=e,m=vt(x),[I,f]=c.useState(null);m&&(d=!0);let a=J("Listbox.Options"),y=le("Listbox.Options"),q=yt(a.optionsElement),N=Rt(),[O,g]=Pt(h,I,N!==null?(N&ae.Open)===ae.Open:a.listboxState===0);Ot(O,a.buttonElement,y.closeListbox);let P=a.__demoMode?!1:i&&a.listboxState===0;wt(P,q);let M=a.__demoMode?!1:i&&a.listboxState===0;It(M,{allowed:c.useCallback(()=>[a.buttonElement,a.optionsElement],[a.buttonElement,a.optionsElement])});let w=a.listboxState!==0,_=ut(w,a.buttonElement)?!1:O,L=O&&a.listboxState===1,b=At(L,a.value),D=S(u=>a.compare(b,u)),l=c.useMemo(()=>{var u;if(m==null||!((u=m==null?void 0:m.to)!=null&&u.includes("selection")))return null;let F=a.options.findIndex(V=>D(V.dataRef.current.value));return F===-1&&(F=0),F},[m,a.options]),A=(()=>{if(m==null)return;if(l===null)return{...m,inner:void 0};let u=Array.from(a.listRef.current.values());return{...m,inner:{listRef:{current:u},index:l}}})(),[K,H]=xt(A),se=ht(),ue=G(t,m?K:null,y.setOptionsElement,f),X=Ne();c.useEffect(()=>{var u;let F=a.optionsElement;F&&a.listboxState===0&&F!==((u=mt(F))==null?void 0:u.activeElement)&&(F==null||F.focus({preventScroll:!0}))},[a.listboxState,a.optionsElement]);let Z=S(u=>{var F,V;switch(X.dispose(),u.key){case R.Space:if(a.searchQuery!=="")return u.preventDefault(),u.stopPropagation(),y.search(u.key);case R.Enter:if(u.preventDefault(),u.stopPropagation(),a.activeOptionIndex!==null){let{dataRef:pe}=a.options[a.activeOptionIndex];y.onChange(pe.current.value)}a.mode===0&&(j.flushSync(()=>y.closeListbox()),(F=a.buttonElement)==null||F.focus({preventScroll:!0}));break;case B(a.orientation,{vertical:R.ArrowDown,horizontal:R.ArrowRight}):return u.preventDefault(),u.stopPropagation(),y.goToOption($.Next);case B(a.orientation,{vertical:R.ArrowUp,horizontal:R.ArrowLeft}):return u.preventDefault(),u.stopPropagation(),y.goToOption($.Previous);case R.Home:case R.PageUp:return u.preventDefault(),u.stopPropagation(),y.goToOption($.First);case R.End:case R.PageDown:return u.preventDefault(),u.stopPropagation(),y.goToOption($.Last);case R.Escape:u.preventDefault(),u.stopPropagation(),j.flushSync(()=>y.closeListbox()),(V=a.buttonElement)==null||V.focus({preventScroll:!0});return;case R.Tab:u.preventDefault(),u.stopPropagation(),j.flushSync(()=>y.closeListbox()),qt(a.buttonElement,u.shiftKey?Se.Previous:Se.Next);break;default:u.key.length===1&&(y.search(u.key),X.setTimeout(()=>y.clearSearch(),350));break}}),de=(r=a.buttonElement)==null?void 0:r.id,me=c.useMemo(()=>({open:a.listboxState===0}),[a.listboxState]),U=Ae(m?se():{},{id:p,ref:ue,"aria-activedescendant":a.activeOptionIndex===null||(n=a.options[a.activeOptionIndex])==null?void 0:n.id,"aria-multiselectable":a.mode===1?!0:void 0,"aria-labelledby":de,"aria-orientation":a.orientation,onKeyDown:Z,role:"listbox",tabIndex:a.listboxState===0?0:void 0,style:{...s.style,...H,"--button-width":gt(a.buttonElement,!0).width},...Dt(g)}),ce=W();return C.createElement(Tt,{enabled:d?e.static||O:!1},C.createElement(ie.Provider,{value:a.mode===1?a:{...a,isSelected:D}},ce({ourProps:U,theirProps:s,slot:me,defaultTag:on,features:rn,visible:_,name:"Listbox.Options"})))}let sn="div";function un(e,t){let r=c.useId(),{id:n=`headlessui-listbox-option-${r}`,disabled:o=!1,value:p,...x}=e,d=c.useContext(Ce)===!0,i=J("Listbox.Option"),h=le("Listbox.Option"),s=i.activeOptionIndex!==null?i.options[i.activeOptionIndex].id===n:!1,m=i.isSelected(p),I=c.useRef(null),f=dt(I),a=ct({disabled:o,value:p,domRef:I,get textValue(){return f()}}),y=G(t,I,b=>{b?i.listRef.current.set(n,b):i.listRef.current.delete(n)});xe(()=>{if(!i.__demoMode&&i.listboxState===0&&s&&i.activationTrigger!==0)return pt().requestAnimationFrame(()=>{var b,D;(D=(b=I.current)==null?void 0:b.scrollIntoView)==null||D.call(b,{block:"nearest"})})},[I,s,i.__demoMode,i.listboxState,i.activationTrigger,i.activeOptionIndex]),xe(()=>{if(!d)return h.registerOption(n,a)},[a,n,d]);let q=S(b=>{var D;if(o)return b.preventDefault();h.onChange(p),i.mode===0&&(j.flushSync(()=>h.closeListbox()),(D=i.buttonElement)==null||D.focus({preventScroll:!0}))}),N=S(()=>{if(o)return h.goToOption($.Nothing);h.goToOption($.Specific,n)}),O=Et(),g=S(b=>{O.update(b),!o&&(s||h.goToOption($.Specific,n,0))}),P=S(b=>{O.wasMoved(b)&&(o||s||h.goToOption($.Specific,n,0))}),M=S(b=>{O.wasMoved(b)&&(o||s&&h.goToOption($.Nothing))}),w=c.useMemo(()=>({active:s,focus:s,selected:m,disabled:o,selectedOption:m&&d}),[s,m,o,d]),_=d?{}:{id:n,ref:y,role:"option",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,"aria-selected":m,disabled:void 0,onClick:q,onFocus:N,onPointerEnter:g,onMouseEnter:g,onPointerMove:P,onMouseMove:P,onPointerLeave:M,onMouseLeave:M},L=W();return!m&&d?null:L({ourProps:_,theirProps:x,slot:w,defaultTag:sn,name:"Listbox.Option"})}let dn=c.Fragment;function mn(e,t){let{options:r,placeholder:n,...o}=e,p={ref:G(t)},x=J("ListboxSelectedOption"),d=c.useMemo(()=>({}),[]),i=x.value===void 0||x.value===null||x.mode===1&&Array.isArray(x.value)&&x.value.length===0,h=W();return C.createElement(Ce.Provider,{value:!0},h({ourProps:p,theirProps:{...o,children:C.createElement(C.Fragment,null,n&&i?n:r)},slot:d,defaultTag:dn,name:"ListboxSelectedOption"}))}let cn=z(tn),_e=z(an),pn=Le,ke=z(ln),qe=z(un),fn=z(mn),je=Object.assign(cn,{Button:_e,Label:pn,Options:ke,Option:qe,SelectedOption:fn});const Ve=({children:e,className:t,disabled:r,name:n,selectedItems:o,setSelectedItems:p})=>T.jsx(je,{as:"div",by:Nt,className:t,disabled:r,multiple:!0,name:n,onChange:p,value:o,children:e});Ve.__docgenInfo={description:"",methods:[],displayName:"FormSelectMulti",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"DataItem"}],raw:"DataItem[]"},description:""},setSelectedItems:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"DataItem"}],raw:"DataItem[]"}],raw:"SetStateAction<DataItem[]>"}],raw:"Dispatch<SetStateAction<DataItem[]>>"},description:""}},composes:["Pick"]};const Be=({children:e,className:t,disabled:r,name:n,selectedItems:o,setSelectedItems:p})=>{const x=o[0]??null;return T.jsx(je,{as:"div",by:"id",className:t,disabled:r,name:n,onChange:d=>d&&p([d]),value:x,children:e})};Be.__docgenInfo={description:"",methods:[],displayName:"FormSelectSingle",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"DataItem"}],raw:"DataItem[]"},description:""},setSelectedItems:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"Array",elements:[{name:"DataItem"}],raw:"DataItem[]"}],raw:"SetStateAction<DataItem[]>"}],raw:"Dispatch<SetStateAction<DataItem[]>>"},description:""}},composes:["Pick"]};const Q=({anchor:e,buttonColor:t,buttonProps:{children:r,className:n,color:o,...p}={},className:x,disabled:d,dropdownIcon:i,formValueMode:h,getItemText:s,hideDropdownIcon:m,isRequired:I,labelText:f,menuClassName:a,menuItemClassName:y,menuSize:q,multi:N,name:O,options:g,portal:P,showDirty:M})=>{const{field:{ref:w}}=We({name:O}),_=Ct(g??[]),[L,b]=c.useState([]);_t({multi:N,name:O,options:_,selectedItems:L,setSelectedItems:b,valueMode:h});const D=Qt(O,M),l=N===!0?Ve:Be;return T.jsxs(l,{className:x,disabled:d,name:O,selectedItems:L,setSelectedItems:b,children:[T.jsxs("fieldset",{className:"fieldset py-0",children:[f!==void 0?T.jsx(Le,{as:Je,isRequired:I,children:f}):null,T.jsxs(_e,{as:Kt,className:be("w-full flex-nowrap",n),color:D??o??t,loading:g===void 0,ref:w,...p,children:[r??(L.length>0?L.map(A=>s(A)).join(", "):"Select an item"),m!==!0?i??T.jsx(Ht,{className:"h-4 w-4"}):null]})]}),T.jsx(ke,{as:Ut,anchor:e,portal:P,size:q,transition:!0,className:be("origin-top rounded-box p-2 shadow-lg transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0",a),children:g==null?void 0:g.map(A=>T.jsx(qe,{as:c.Fragment,value:A,children:({disabled:K,selected:H})=>T.jsx(zt,{className:be("w-full",y),disabled:K,selected:H,children:s(A)})},A.id))})]})};Q.__docgenInfo={description:"",methods:[],displayName:"Select",props:{anchor:{required:!1,tsType:{name:"union",raw:`| false
| PanelAnchorTo
| Partial<{
    /** The space between the control and the panel. */
    gap: number | string;
    /** How far the panel is nudged off its placement. */
    offset: number | string;
    /** The smallest space left between the panel and the viewport. */
    padding: number | string;
    to: PanelAnchorTo;
  }>`,elements:[{name:"literal",value:"false"},{name:"union",raw:"| AnchorPlacement\n| `${AnchorPlacement} ${AnchorAlign}`",elements:[{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},{name:"literal",value:"`${AnchorPlacement} ${AnchorAlign}`"}],required:!0},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  /** The space between the control and the panel. */
  gap: number | string;
  /** How far the panel is nudged off its placement. */
  offset: number | string;
  /** The smallest space left between the panel and the viewport. */
  padding: number | string;
  to: PanelAnchorTo;
}`,signature:{properties:[{key:"gap",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0},description:"The space between the control and the panel."},{key:"offset",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0},description:"How far the panel is nudged off its placement."},{key:"padding",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0},description:"The smallest space left between the panel and the viewport."},{key:"to",value:{name:"union",raw:"| AnchorPlacement\n| `${AnchorPlacement} ${AnchorAlign}`",elements:[{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},{name:"literal",value:"`${AnchorPlacement} ${AnchorAlign}`"}],required:!0}}]}}],raw:`Partial<{
  /** The space between the control and the panel. */
  gap: number | string;
  /** How far the panel is nudged off its placement. */
  offset: number | string;
  /** The smallest space left between the panel and the viewport. */
  padding: number | string;
  to: PanelAnchorTo;
}>`}]},description:""},buttonColor:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof BUTTON_COLORS)[number]"},description:""},buttonProps:{required:!1,tsType:{name:"ButtonProps"},description:"",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},dropdownIcon:{required:!1,tsType:{name:"ReactNode"},description:""},formValueMode:{required:!1,tsType:{name:"union",raw:"'item' | 'id'",elements:[{name:"literal",value:"'item'"},{name:"literal",value:"'id'"}]},description:""},getItemText:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: DataItem) => ReactNode",signature:{arguments:[{type:{name:"DataItem"},name:"data"}],return:{name:"ReactNode"}}},description:""},hideDropdownIcon:{required:!1,tsType:{name:"literal",value:"true"},description:""},menuClassName:{required:!1,tsType:{name:"string"},description:""},menuItemClassName:{required:!1,tsType:{name:"string"},description:""},menuSize:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof MENU_SIZES)[number]"},description:""},multi:{required:!1,tsType:{name:"literal",value:"true"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DataItem"}],raw:"DataItem[]"},description:""},portal:{required:!1,tsType:{name:"boolean"},description:""},showDirty:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const Wn={title:"Select",component:Q},Y={args:{labelText:"Field Label",name:"field1",getItemText:({id:e,label:t})=>`${e} - ${t}`,formValueMode:"item",options:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}]},render:e=>{const t=oe();return T.jsx(re,{className:"h-60 w-60",methods:t,onFormSubmit:()=>null,children:T.jsx(Q,{...e})})}},ee={args:{labelText:"Field Label",name:"field1",getItemText:({id:e,label:t})=>`${e} - ${t}`,options:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}]},render:e=>{const t=oe({defaultValues:{field1:{id:"2",label:"Item 2"}}});return T.jsx(re,{className:"h-60 w-60",methods:t,onFormSubmit:()=>null,children:T.jsx(Q,{...e})})}},te={args:{labelText:"Field Label",multi:!0,name:"field1",getItemText:({id:e,label:t})=>`${e} - ${t}`,options:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}]},render:e=>{const t=oe();return T.jsx(re,{className:"h-60 w-60",methods:t,onFormSubmit:()=>null,children:T.jsx(Q,{...e})})}},ne={args:{labelText:"Field Label",multi:!0,name:"field1",getItemText:({id:e,label:t})=>`${e} - ${t}`,options:[{id:"1",label:"Item 1"},{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}]},render:e=>{const t=oe({defaultValues:{field1:[{id:"2",label:"Item 2"},{id:"3",label:"Item 3"}]}});return T.jsx(re,{className:"h-60 w-60",methods:t,onFormSubmit:()=>null,children:T.jsx(Q,{...e})})}};var Ie,ye,Oe;Y.parameters={...Y.parameters,docs:{...(Ie=Y.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Oe=(ye=Y.parameters)==null?void 0:ye.docs)==null?void 0:Oe.source}}};var we,Te,$e;ee.parameters={...ee.parameters,docs:{...(we=ee.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...($e=(Te=ee.parameters)==null?void 0:Te.docs)==null?void 0:$e.source}}};var Ee,Re,Pe;te.parameters={...te.parameters,docs:{...(Ee=te.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Pe=(Re=te.parameters)==null?void 0:Re.docs)==null?void 0:Pe.source}}};var De,Fe,Me;ne.parameters={...ne.parameters,docs:{...(De=ne.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Me=(Fe=ne.parameters)==null?void 0:Fe.docs)==null?void 0:Me.source}}};const Jn=["Default","WithDefaultValue","SelectMultiple","WithMultipleDefaultValues"];export{Y as Default,te as SelectMultiple,ee as WithDefaultValue,ne as WithMultipleDefaultValues,Jn as __namedExportsOrder,Wn as default};
