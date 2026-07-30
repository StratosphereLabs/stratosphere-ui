import{j as n}from"./jsx-runtime-DiklIkkE.js";import{c as d}from"./index-lhGYx47h.js";import{r as h}from"./index-DRjF_FHU.js";import{B as f}from"./Button-DlMGMNp9.js";import{l as g,S as b,R as v}from"./popover-BZdC9fb8.js";import"./useFocusRing-CeEfTI_f.js";import"./use-resolve-button-type-BunvJ_cM.js";import"./keyboard-CkwPyo54.js";import"./floating-DbckstqE.js";import"./index-Bx0Ph3cE.js";import"./use-event-listener-B6ZzwbKe.js";import"./portal-klmoE2MD.js";import"./focus-management-BpNHtozA.js";import"./use-tab-direction-CP4NjNZo.js";import"./hidden-VT-llRfc.js";import"./open-closed-ZYQZnB1s.js";import"./close-provider-CMV4gi-l.js";import"./bugs-DpEN4NTH.js";const t=h.forwardRef(({anchor:s,buttonProps:i,className:l,popoverClassName:m,popoverComponent:p,portal:c},u)=>n.jsxs(g,{className:l,ref:u,children:[n.jsx(b,{as:f,...i}),n.jsx(v,{as:"div",anchor:s,portal:c,transition:!0,className:d("flex origin-top flex-col rounded-box p-2 shadow-lg transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0",m),children:p})]}));t.displayName="Popover";t.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{anchor:{required:!1,tsType:{name:"union",raw:`| false
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
}>`}]},description:""},buttonProps:{required:!0,tsType:{name:"ButtonProps"},description:""},className:{required:!1,tsType:{name:"string"},description:""},popoverClassName:{required:!1,tsType:{name:"string"},description:""},popoverComponent:{required:!0,tsType:{name:"signature",type:"function",raw:"({ open, close }: PopoverPanelRenderProps) => JSX.Element",signature:{arguments:[{type:{name:"PopoverPanelRenderProps"},name:""}],return:{name:"JSX.Element"}}},description:""},portal:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const B={title:"Popover",component:t},e={args:{anchor:"bottom start",buttonProps:{children:"Open Popover"},className:"mb-24",popoverComponent:()=>n.jsx("div",{className:"w-64",children:"Test Lmao"})}};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    anchor: 'bottom start',
    buttonProps: {
      children: 'Open Popover'
    },
    className: 'mb-24',
    popoverComponent: () => <div className="w-64">Test Lmao</div>
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const D=["Default"];export{e as Default,D as __namedExportsOrder,B as default};
