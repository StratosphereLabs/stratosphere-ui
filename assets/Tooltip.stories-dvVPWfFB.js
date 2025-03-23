import{j as o}from"./jsx-runtime-DiklIkkE.js";import{B as j}from"./Badge-Cl8fL48M.js";import{B as e}from"./Button-D0Yf2K26.js";import{T as r,a as C}from"./TooltipContent-0P-NrBMs.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";import"./Icons-Cofxgy3z.js";const P={title:"Tooltip",component:r},i={args:{className:"my-8",text:"Tooltip text"},render:t=>o.jsx(r,{...t,children:o.jsx(e,{color:"info",children:"Toggle Tooltip"})})},n={args:{position:"right",text:"Tooltip text"},render:t=>o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsx(r,{...t,children:o.jsx(e,{children:"Default"})}),o.jsx(r,{color:"primary",...t,children:o.jsx(e,{color:"primary",children:"Primary"})}),o.jsx(r,{color:"secondary",...t,children:o.jsx(e,{color:"secondary",children:"Secondary"})}),o.jsx(r,{color:"accent",...t,children:o.jsx(e,{color:"accent",children:"Accent"})}),o.jsx(r,{color:"info",...t,children:o.jsx(e,{color:"info",children:"Info"})}),o.jsx(r,{color:"warning",...t,children:o.jsx(e,{color:"warning",children:"Warning"})}),o.jsx(r,{color:"success",...t,children:o.jsx(e,{color:"success",children:"Success"})}),o.jsx(r,{color:"error",...t,children:o.jsx(e,{color:"error",children:"Error"})})]})},l={args:{text:"Tooltip text"},render:t=>o.jsxs("div",{className:"flex flex-col gap-4 p-8",children:[o.jsx(r,{position:"top",...t,children:o.jsx(e,{color:"info",children:"Top"})}),o.jsx(r,{position:"right",...t,children:o.jsx(e,{color:"info",children:"Right"})}),o.jsx(r,{position:"bottom",...t,children:o.jsx(e,{color:"info",children:"Bottom"})}),o.jsx(r,{position:"left",...t,children:o.jsx(e,{color:"info",children:"Left"})})]})},s={args:{},render:t=>o.jsxs(r,{...t,children:[o.jsx(C,{children:o.jsx(j,{color:"primary",children:"Custom Tooltip Content"})}),o.jsx(e,{color:"info",children:"Toggle Tooltip"})]})};var c,a,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    className: 'my-8',
    text: 'Tooltip text'
  },
  render: args => <Tooltip {...args}>
      <Button color="info">Toggle Tooltip</Button>
    </Tooltip>
}`,...(p=(a=i.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var d,u,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    position: 'right',
    text: 'Tooltip text'
  },
  render: args => <div className="flex flex-col gap-4">
      <Tooltip {...args}>
        <Button>Default</Button>
      </Tooltip>
      <Tooltip color="primary" {...args}>
        <Button color="primary">Primary</Button>
      </Tooltip>
      <Tooltip color="secondary" {...args}>
        <Button color="secondary">Secondary</Button>
      </Tooltip>
      <Tooltip color="accent" {...args}>
        <Button color="accent">Accent</Button>
      </Tooltip>
      <Tooltip color="info" {...args}>
        <Button color="info">Info</Button>
      </Tooltip>
      <Tooltip color="warning" {...args}>
        <Button color="warning">Warning</Button>
      </Tooltip>
      <Tooltip color="success" {...args}>
        <Button color="success">Success</Button>
      </Tooltip>
      <Tooltip color="error" {...args}>
        <Button color="error">Error</Button>
      </Tooltip>
    </div>
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,T,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'Tooltip text'
  },
  render: args => <div className="flex flex-col gap-4 p-8">
      <Tooltip position="top" {...args}>
        <Button color="info">Top</Button>
      </Tooltip>
      <Tooltip position="right" {...args}>
        <Button color="info">Right</Button>
      </Tooltip>
      <Tooltip position="bottom" {...args}>
        <Button color="info">Bottom</Button>
      </Tooltip>
      <Tooltip position="left" {...args}>
        <Button color="info">Left</Button>
      </Tooltip>
    </div>
}`,...(g=(T=l.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var h,f,B;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: args => <Tooltip {...args}>
      <TooltipContent>
        <Badge color="primary">Custom Tooltip Content</Badge>
      </TooltipContent>
      <Button color="info">Toggle Tooltip</Button>
    </Tooltip>
}`,...(B=(f=s.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};const W=["Default","CustomColor","CustomPosition","WithCustomContent"];export{n as CustomColor,l as CustomPosition,i as Default,s as WithCustomContent,W as __namedExportsOrder,P as default};
