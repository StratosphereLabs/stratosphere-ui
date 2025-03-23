import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as u}from"./Icons-Cofxgy3z.js";import{B as s}from"./Button-D0Yf2K26.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";const k={title:"Button",component:s},m=r=>e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{...r,children:"Default"}),e.jsx(s,{color:"neutral",...r,children:"Neutral"}),e.jsx(s,{color:"ghost",...r,children:"Ghost"}),e.jsx(s,{color:"primary",...r,children:"Primary"}),e.jsx(s,{color:"secondary",...r,children:"Secondary"}),e.jsx(s,{color:"accent",...r,children:"Accent"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{color:"info",...r,children:"Info"}),e.jsx(s,{color:"success",...r,children:"Success"}),e.jsx(s,{color:"warning",...r,children:"Warning"}),e.jsx(s,{color:"error",...r,children:"Error"})]})]}),n={args:{children:"Default"}},o={args:{children:"Loading",loading:!0}},a={args:{size:"md"},render:m},t={args:{},render:r=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{size:"xs",...r,children:"Extra Small"}),e.jsx(s,{size:"sm",...r,children:"Small"}),e.jsx(s,{size:"md",...r,children:"Medium"}),e.jsx(s,{size:"lg",...r,children:"Large"}),e.jsx(s,{size:"xl",...r,children:"Extra Large"})]})},c={args:{outline:!0,size:"md"},render:m},i={args:{size:"md",soft:!0},render:m},d={args:{dash:!0,size:"md"},render:m},l={args:{color:"primary",size:"md"},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(s,{...r,shape:"square",children:e.jsx(u,{className:"h-6 w-6"})}),e.jsx(s,{...r,shape:"circle",children:e.jsx(u,{className:"h-6 w-6"})})]})};var p,h,x;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,j,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Loading',
    loading: true
  }
}`,...(f=(j=o.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var z,S,B;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: renderColors
}`,...(B=(S=a.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var C,N,I;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex items-center gap-2">
      <Button size="xs" {...args}>
        Extra Small
      </Button>
      <Button size="sm" {...args}>
        Small
      </Button>
      <Button size="md" {...args}>
        Medium
      </Button>
      <Button size="lg" {...args}>
        Large
      </Button>
      <Button size="xl" {...args}>
        Extra Large
      </Button>
    </div>
}`,...(I=(N=t.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var L,D,E;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    outline: true,
    size: 'md'
  },
  render: renderColors
}`,...(E=(D=c.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var v,y,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: 'md',
    soft: true
  },
  render: renderColors
}`,...(w=(y=i.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var O,q,M;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    dash: true,
    size: 'md'
  },
  render: renderColors
}`,...(M=(q=d.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var _,A,F;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    color: 'primary',
    size: 'md'
  },
  render: args => <>
      <Button {...args} shape="square">
        <InfoIcon className="h-6 w-6" />
      </Button>
      <Button {...args} shape="circle">
        <InfoIcon className="h-6 w-6" />
      </Button>
    </>
}`,...(F=(A=l.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const H=["Default","Loading","CustomColor","CustomSize","Outline","Soft","Dash","Shapes"];export{a as CustomColor,t as CustomSize,d as Dash,n as Default,o as Loading,c as Outline,l as Shapes,i as Soft,H as __namedExportsOrder,k as default};
