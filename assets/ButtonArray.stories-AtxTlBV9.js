import{d as E,c as m,I as p,W as u}from"./Icons-Cofxgy3z.js";import{j as n}from"./jsx-runtime-DiklIkkE.js";import{c}from"./index-lhGYx47h.js";import{r as q}from"./index-DRjF_FHU.js";import{B as F}from"./Button-D0Yf2K26.js";import{D as M}from"./DropdownMenu-a10oD2-h.js";import{T as V}from"./TooltipContent-0P-NrBMs.js";import"./MenuItem-BBhh-GbJ.js";import"./useFocusRing-CeEfTI_f.js";import"./index-Bx0Ph3cE.js";import"./use-resolve-button-type-BunvJ_cM.js";import"./keyboard-CkwPyo54.js";import"./use-text-value-BrtKXhrT.js";import"./floating-DbckstqE.js";import"./use-inert-others-xmMDja1V.js";import"./portal-klmoE2MD.js";import"./focus-management-BpNHtozA.js";import"./calculate-active-index-u79R9Ahj.js";import"./open-closed-ZYQZnB1s.js";import"./use-tree-walker-ClltwzGM.js";import"./bugs-DpEN4NTH.js";import"./description-BiWv9uhY.js";import"./label-BHy4_Co_.js";const _={sm:"sm:flex",md:"md:flex",lg:"lg:flex",xl:"xl:flex"},A={sm:"sm:hidden",md:"md:hidden",lg:"lg:hidden",xl:"xl:hidden"},I=({buttonOptions:d,collapseAt:e,dropdownMenuProps:{buttonProps:P,...z}={},withTooltips:b,...j})=>{const N=b?V:q.Fragment;return n.jsxs("div",{...j,children:[n.jsx("div",{className:c("gap-1",e===void 0&&"flex",e!==void 0&&`hidden ${_[e]}`),children:d.map(({children:t,className:o,icon:l,key:a,menuText:x,onClick:O,tooltipText:W,...B})=>n.jsx(N,{text:W??x??"",children:n.jsxs(F,{className:c("px-1",o),onClick:O,...B,children:[n.jsx(l,{className:"h-4 w-4"}),t??n.jsx("span",{className:"sr-only",children:x})]})},a))}),n.jsx("div",{className:c(e===void 0&&"hidden",e!==void 0&&`flex ${A[e]}`),children:n.jsx(M,{buttonProps:{color:"ghost",shape:"circle",size:"sm",children:n.jsxs(n.Fragment,{children:[n.jsx(E,{className:"h-5 w-5"}),n.jsx("span",{className:"sr-only",children:"Actions Menu"})]}),...P},items:d.map(({icon:t,key:o,menuText:l,onClick:a})=>({id:typeof o=="number"||typeof o=="bigint"?o.toString():o,onClick:a,children:n.jsxs(n.Fragment,{children:[n.jsx(t,{className:"h-4 w-4"}),l]})})),...z})})]})};I.__docgenInfo={description:"",methods:[],displayName:"ButtonArray",props:{buttonOptions:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<ButtonProps, 'onClick'> & {
  icon: FC<ComponentProps<'svg'>>;
  key: Key;
  menuText?: string;
  onClick: () => void;
  tooltipText?: string;
}`,elements:[{name:"Omit",elements:[{name:"ButtonProps"},{name:"literal",value:"'onClick'"}],raw:"Omit<ButtonProps, 'onClick'>"},{name:"signature",type:"object",raw:`{
  icon: FC<ComponentProps<'svg'>>;
  key: Key;
  menuText?: string;
  onClick: () => void;
  tooltipText?: string;
}`,signature:{properties:[{key:"icon",value:{name:"FC",elements:[{name:"ComponentProps",elements:[{name:"literal",value:"'svg'"}],raw:"ComponentProps<'svg'>"}],raw:"FC<ComponentProps<'svg'>>",required:!0}},{key:"key",value:{name:"Key",required:!0}},{key:"menuText",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"tooltipText",value:{name:"string",required:!1}}]}}]}],raw:"ButtonOptions[]"},description:""},collapseAt:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:""},dropdownMenuProps:{required:!1,tsType:{name:"Omit",elements:[{name:"DropdownMenuProps"},{name:"literal",value:"'items'"}],raw:"Omit<DropdownMenuProps, 'items'>"},description:"",defaultValue:{value:"{}",computed:!1}},withTooltips:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const mn={title:"ButtonArray",component:I},i={args:{buttonOptions:[{color:"accent",key:"view",icon:m,menuText:"View",onClick:()=>null,size:"xs"},{color:"info",key:"info",icon:p,menuText:"Info",onClick:()=>null,size:"xs"},{color:"warning",key:"warning",icon:u,menuText:"Warning",onClick:()=>null,size:"xs"}]}},r={args:{buttonOptions:[{color:"accent",key:"view",icon:m,menuText:"View",onClick:()=>null,size:"xs"},{color:"info",key:"info",icon:p,menuText:"Info",onClick:()=>null,size:"xs"},{color:"warning",key:"warning",icon:u,menuText:"Warning",onClick:()=>null,size:"xs"}],withTooltips:!0}},s={args:{buttonOptions:[{color:"accent",key:"view",icon:m,menuText:"View",onClick:()=>null,size:"xs"},{color:"info",key:"info",icon:p,menuText:"Info",onClick:()=>null,size:"xs"},{color:"warning",key:"warning",icon:u,menuText:"Warning",onClick:()=>null,size:"xs"}],className:"pb-[120px]",collapseAt:"xl",withTooltips:!0}};var g,f,k;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    buttonOptions: [{
      color: 'accent',
      key: 'view',
      icon: EyeIcon,
      menuText: 'View',
      onClick: () => null,
      size: 'xs'
    }, {
      color: 'info',
      key: 'info',
      icon: InfoIcon,
      menuText: 'Info',
      onClick: () => null,
      size: 'xs'
    }, {
      color: 'warning',
      key: 'warning',
      icon: WarningIcon,
      menuText: 'Warning',
      onClick: () => null,
      size: 'xs'
    }]
  }
}`,...(k=(f=i.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var y,w,T;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    buttonOptions: [{
      color: 'accent',
      key: 'view',
      icon: EyeIcon,
      menuText: 'View',
      onClick: () => null,
      size: 'xs'
    }, {
      color: 'info',
      key: 'info',
      icon: InfoIcon,
      menuText: 'Info',
      onClick: () => null,
      size: 'xs'
    }, {
      color: 'warning',
      key: 'warning',
      icon: WarningIcon,
      menuText: 'Warning',
      onClick: () => null,
      size: 'xs'
    }],
    withTooltips: true
  }
}`,...(T=(w=r.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var v,C,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    buttonOptions: [{
      color: 'accent',
      key: 'view',
      icon: EyeIcon,
      menuText: 'View',
      onClick: () => null,
      size: 'xs'
    }, {
      color: 'info',
      key: 'info',
      icon: InfoIcon,
      menuText: 'Info',
      onClick: () => null,
      size: 'xs'
    }, {
      color: 'warning',
      key: 'warning',
      icon: WarningIcon,
      menuText: 'Warning',
      onClick: () => null,
      size: 'xs'
    }],
    className: 'pb-[120px]',
    collapseAt: 'xl',
    withTooltips: true
  }
}`,...(h=(C=s.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};const pn=["Primary","WithTooltips","Collapsable"];export{s as Collapsable,i as Primary,r as WithTooltips,pn as __namedExportsOrder,mn as default};
