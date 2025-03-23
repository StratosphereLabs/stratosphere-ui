import{j as s}from"./jsx-runtime-DiklIkkE.js";import{c as d}from"./index-lhGYx47h.js";import"./index-DRjF_FHU.js";const o=({className:r,color:c,...i})=>s.jsx("progress",{className:d("progress",c&&`progress-${c}`,r),...i});o.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{color:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof PROGRESS_COLORS)[number]"},description:""}},composes:["HTMLAttributes"]};const j={title:"Progress",component:o},e={args:{}},a={args:{},render:r=>s.jsxs("div",{className:"flex w-full flex-col gap-8",children:[s.jsx(o,{...r}),s.jsx(o,{color:"neutral",...r}),s.jsx(o,{color:"accent",...r}),s.jsx(o,{color:"error",...r}),s.jsx(o,{color:"info",...r}),s.jsx(o,{color:"primary",...r}),s.jsx(o,{color:"secondary",...r}),s.jsx(o,{color:"success",...r}),s.jsx(o,{color:"warning",...r})]})};var n,l,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(t=(l=e.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex w-full flex-col gap-8">
      <Progress {...args} />
      <Progress color="neutral" {...args} />
      <Progress color="accent" {...args} />
      <Progress color="error" {...args} />
      <Progress color="info" {...args} />
      <Progress color="primary" {...args} />
      <Progress color="secondary" {...args} />
      <Progress color="success" {...args} />
      <Progress color="warning" {...args} />
    </div>
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const P=["Default","CustomColor"];export{a as CustomColor,e as Default,P as __namedExportsOrder,j as default};
