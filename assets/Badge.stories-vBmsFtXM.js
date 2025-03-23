import{j as e}from"./jsx-runtime-DiklIkkE.js";import{C as _}from"./Icons-Cofxgy3z.js";import{B as s}from"./Badge-Cl8fL48M.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";import"./Button-D0Yf2K26.js";const J={title:"Badge",component:s},m=r=>e.jsxs("div",{className:"flex flex-col items-center gap-8",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{...r,children:"default"}),e.jsx(s,{...r,color:"neutral",children:"neutral"}),e.jsx(s,{...r,color:"primary",children:"primary"}),e.jsx(s,{...r,color:"secondary",children:"secondary"}),e.jsx(s,{...r,color:"accent",children:"accent"}),e.jsx(s,{...r,color:"ghost",children:"ghost"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{...r,color:"info",children:"info"}),e.jsx(s,{...r,color:"success",children:"success"}),e.jsx(s,{...r,color:"warning",children:"warning"}),e.jsx(s,{...r,color:"error",children:"error"})]})]}),a={args:{children:"Badge"}},o={args:{},render:m},c={args:{color:"neutral"},render:r=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(s,{...r,size:"xs",children:"Extra Small"}),e.jsx(s,{...r,size:"sm",children:"Small"}),e.jsx(s,{...r,size:"md",children:"Medium"}),e.jsx(s,{...r,size:"lg",children:"Large"}),e.jsx(s,{...r,size:"xl",children:"Extra Large"})]})},n={args:{outline:!0},render:m},i={args:{dash:!0},render:m},l={args:{soft:!0},render:m},t={args:{children:"With icon",color:"neutral",icon:()=>e.jsx(_,{className:"mr-1 h-4 w-4"})}},d={args:{children:"Dismissible",color:"neutral",dismissable:!0}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Badge'
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,x,j;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: renderColors
}`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var f,S,B;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: 'neutral'
  },
  render: args => <div className="flex items-center gap-2">
      <Badge {...args} size="xs">
        Extra Small
      </Badge>
      <Badge {...args} size="sm">
        Small
      </Badge>
      <Badge {...args} size="md">
        Medium
      </Badge>
      <Badge {...args} size="lg">
        Large
      </Badge>
      <Badge {...args} size="xl">
        Extra Large
      </Badge>
    </div>
}`,...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var z,C,D;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    outline: true
  },
  render: renderColors
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var N,b,v;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    dash: true
  },
  render: renderColors
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var E,w,y;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    soft: true
  },
  render: renderColors
}`,...(y=(w=l.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var I,L,W;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'With icon',
    color: 'neutral',
    icon: () => <CheckIcon className="mr-1 h-4 w-4" />
  }
}`,...(W=(L=t.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var O,k,M;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Dismissible',
    color: 'neutral',
    dismissable: true
  }
}`,...(M=(k=d.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const K=["Default","Colors","Sizes","Outline","Dash","Soft","WithIcon","Dismissable"];export{o as Colors,i as Dash,a as Default,d as Dismissable,n as Outline,c as Sizes,l as Soft,t as WithIcon,K as __namedExportsOrder,J as default};
