import{j as s}from"./jsx-runtime-DiklIkkE.js";import{c as x}from"./index-lhGYx47h.js";import"./index-DRjF_FHU.js";const r=({className:e,size:m,style:u,thickness:p,value:g,...v})=>{const f={"--size":m,"--thickness":p,"--value":g,...u};return s.jsx("div",{className:x("radial-progress",e),style:f,...v})};r.__docgenInfo={description:"",methods:[],displayName:"RadialProgress",props:{size:{required:!1,tsType:{name:"string"},description:""},thickness:{required:!1,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}},composes:["HTMLAttributes"]};const j={title:"RadialProgress",component:r},a={args:{value:10,children:10}},n={args:{},render:e=>s.jsxs("div",{className:"flex w-full gap-2",children:[s.jsx(r,{...e,children:"0"}),s.jsx(r,{...e,value:20,children:"20"}),s.jsx(r,{...e,value:50,children:"50"}),s.jsx(r,{...e,value:70,children:"70"})]})};var o,i,l;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    value: 10,
    children: 10
  }
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var t,d,c;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex w-full gap-2">
      <RadialProgress {...args}>0</RadialProgress>
      <RadialProgress {...args} value={20}>
        20
      </RadialProgress>
      <RadialProgress {...args} value={50}>
        50
      </RadialProgress>
      <RadialProgress {...args} value={70}>
        70
      </RadialProgress>
    </div>
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const y=["Default","CustomValue"];export{n as CustomValue,a as Default,y as __namedExportsOrder,j as default};
