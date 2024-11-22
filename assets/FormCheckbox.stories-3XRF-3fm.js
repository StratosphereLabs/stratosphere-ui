import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{u as i,F as x}from"./FormLabelText-2tTELyhz.js";import{F as s}from"./FormCheckbox-CthDTzDt.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";import"./lodash-CaEHFKMH.js";const T={title:"FormCheckbox",component:s},e={args:{labelText:"Label Text",name:"field1"},render:t=>{const n=i();return o.jsx(x,{methods:n,onFormSubmit:()=>null,children:o.jsx(s,{...t})})}},r={args:{labelText:"Label Text",name:"field1"},render:t=>{const n=i({defaultValues:{field1:!0}});return o.jsx(x,{methods:n,onFormSubmit:()=>null,children:o.jsx(s,{...t})})}};var a,m,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    labelText: 'Label Text',
    name: 'field1'
  },
  render: args => {
    const methods = useForm();
    return <Form methods={methods} onFormSubmit={() => null}>
        <FormCheckbox {...args} />
      </Form>;
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,d,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    labelText: 'Label Text',
    name: 'field1'
  },
  render: args => {
    const methods = useForm({
      defaultValues: {
        field1: true
      }
    });
    return <Form methods={methods} onFormSubmit={() => null}>
        <FormCheckbox {...args} />
      </Form>;
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const j=["Default","WithDefaultValue"];export{e as Default,r as WithDefaultValue,j as __namedExportsOrder,T as default};
