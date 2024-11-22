import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{T as r}from"./Tooltip-CzOwTZPf.js";import{B as e}from"./Button-C8Er2sLW.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";const y={title:"Tooltip",component:r},i={args:{className:"my-8",text:"Tooltip text"},render:t=>o.jsx(r,{...t,children:o.jsx(e,{color:"info",children:"Toggle Tooltip"})})},l={args:{position:"right",text:"Tooltip text"},render:t=>o.jsxs("div",{className:"flex flex-col gap-4",children:[o.jsx(r,{...t,children:o.jsx(e,{children:"Default"})}),o.jsx(r,{color:"primary",...t,children:o.jsx(e,{color:"primary",children:"Primary"})}),o.jsx(r,{color:"secondary",...t,children:o.jsx(e,{color:"secondary",children:"Secondary"})}),o.jsx(r,{color:"accent",...t,children:o.jsx(e,{color:"accent",children:"Accent"})}),o.jsx(r,{color:"info",...t,children:o.jsx(e,{color:"info",children:"Info"})}),o.jsx(r,{color:"warning",...t,children:o.jsx(e,{color:"warning",children:"Warning"})}),o.jsx(r,{color:"success",...t,children:o.jsx(e,{color:"success",children:"Success"})}),o.jsx(r,{color:"error",...t,children:o.jsx(e,{color:"error",children:"Error"})})]})},c={args:{text:"Tooltip text"},render:t=>o.jsxs("div",{className:"flex flex-col gap-4 p-8",children:[o.jsx(r,{position:"top",...t,children:o.jsx(e,{color:"info",children:"Top"})}),o.jsx(r,{position:"right",...t,children:o.jsx(e,{color:"info",children:"Right"})}),o.jsx(r,{position:"bottom",...t,children:o.jsx(e,{color:"info",children:"Bottom"})}),o.jsx(r,{position:"left",...t,children:o.jsx(e,{color:"info",children:"Left"})})]})};var s,n,a;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    className: 'my-8',
    text: 'Tooltip text'
  },
  render: args => <Tooltip {...args}>
      <Button color="info">Toggle Tooltip</Button>
    </Tooltip>
}`,...(a=(n=i.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var p,d,u;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(d=l.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var x,m,T;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(m=c.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};const S=["Default","CustomColor","CustomPosition"];export{l as CustomColor,c as CustomPosition,i as Default,S as __namedExportsOrder,y as default};
