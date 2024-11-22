import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{c}from"./index-lhGYx47h.js";import{r as B}from"./index-DRjF_FHU.js";import{B as q}from"./Button-C8Er2sLW.js";import{D as F}from"./DropdownMenu-0q23Bbg9.js";import{c as M,E as m,I as u,W as p}from"./Icons-DQZ7jVN3.js";import{T as V}from"./Tooltip-CzOwTZPf.js";import"./MenuItem-Hg2aCcF3.js";import"./use-is-mounted-BwivAQE6.js";import"./bugs-BqEXq7dn.js";import"./use-tracked-pointer-icV3TFbN.js";import"./focus-management-D-lBgQCa.js";import"./use-outside-click-ryvoS0Jt.js";import"./use-tree-walker-BP3EYLpg.js";import"./open-closed-DSFNRtpz.js";import"./use-resolve-button-type-hEnF6IRh.js";import"./use-owner-DSsMAH39.js";import"./use-text-value-B3-EWJXX.js";import"./transition-CuZKXbF5.js";import"./use-flags-uZipNKZX.js";const _={sm:"sm:flex",md:"md:flex",lg:"lg:flex",xl:"xl:flex"},A={sm:"sm:hidden",md:"md:hidden",lg:"lg:hidden",xl:"xl:hidden"},I=({buttonOptions:d,collapseAt:e,dropdownMenuProps:{buttonProps:P,...z}={},withTooltips:b,...j})=>{const N=b?V:B.Fragment;return n.jsxs("div",{...j,children:[n.jsx("div",{className:c("gap-1",e===void 0&&"flex",e!==void 0&&`hidden ${_[e]}`),children:d.map(({children:t,className:o,icon:l,key:a,menuText:x,onClick:O,tooltipText:W,...E})=>n.jsx(N,{text:W??x??"",children:n.jsxs(q,{className:c("px-1",o),onClick:O,...E,children:[n.jsx(l,{className:"h-4 w-4"}),t??n.jsx("span",{className:"sr-only",children:x})]})},a))}),n.jsx("div",{className:c(e===void 0&&"hidden",e!==void 0&&`flex ${A[e]}`),children:n.jsx(F,{buttonProps:{color:"ghost",shape:"circle",size:"sm",children:n.jsxs(n.Fragment,{children:[n.jsx(M,{className:"h-5 w-5"}),n.jsx("span",{className:"sr-only",children:"Actions Menu"})]}),...P},items:d.map(({icon:t,key:o,menuText:l,onClick:a})=>({id:typeof o=="number"||typeof o=="bigint"?o.toString():o,onClick:a,children:n.jsxs(n.Fragment,{children:[n.jsx(t,{className:"h-4 w-4"}),l]})})),...z})})]})};I.__docgenInfo={description:"",methods:[],displayName:"ButtonArray",props:{buttonOptions:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Omit<ButtonProps, 'onClick'> & {
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
}`,signature:{properties:[{key:"icon",value:{name:"FC",elements:[{name:"ComponentProps",elements:[{name:"literal",value:"'svg'"}],raw:"ComponentProps<'svg'>"}],raw:"FC<ComponentProps<'svg'>>",required:!0}},{key:"key",value:{name:"Key",required:!0}},{key:"menuText",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"tooltipText",value:{name:"string",required:!1}}]}}]}],raw:"ButtonOptions[]"},description:""},collapseAt:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:""},dropdownMenuProps:{required:!1,tsType:{name:"Omit",elements:[{name:"DropdownMenuProps"},{name:"literal",value:"'items'"}],raw:"Omit<DropdownMenuProps, 'items'>"},description:"",defaultValue:{value:"{}",computed:!1}},withTooltips:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const ln={title:"ButtonArray",component:I},i={args:{buttonOptions:[{color:"accent",key:"view",icon:m,menuText:"View",onClick:()=>null,size:"xs"},{color:"info",key:"info",icon:u,menuText:"Info",onClick:()=>null,size:"xs"},{color:"warning",key:"warning",icon:p,menuText:"Warning",onClick:()=>null,size:"xs"}]}},r={args:{buttonOptions:[{color:"accent",key:"view",icon:m,menuText:"View",onClick:()=>null,size:"xs"},{color:"info",key:"info",icon:u,menuText:"Info",onClick:()=>null,size:"xs"},{color:"warning",key:"warning",icon:p,menuText:"Warning",onClick:()=>null,size:"xs"}],withTooltips:!0}},s={args:{buttonOptions:[{color:"accent",key:"view",icon:m,menuText:"View",onClick:()=>null,size:"xs"},{color:"info",key:"info",icon:u,menuText:"Info",onClick:()=>null,size:"xs"},{color:"warning",key:"warning",icon:p,menuText:"Warning",onClick:()=>null,size:"xs"}],className:"pb-[120px]",collapseAt:"xl",withTooltips:!0}};var g,f,k;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(h=(C=s.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};const an=["Primary","WithTooltips","Collapsable"];export{s as Collapsable,i as Primary,r as WithTooltips,an as __namedExportsOrder,ln as default};
