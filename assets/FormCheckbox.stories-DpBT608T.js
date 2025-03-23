import{j as n}from"./jsx-runtime-DiklIkkE.js";import{u as c,F as p}from"./FormLabelText-BYRBbg7S.js";import{F as s}from"./FormCheckbox-CmXjOFpU.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";import"./lodash-CjHNWSW5.js";const T={title:"FormCheckbox",component:s},e={args:{labelText:"Label Text",name:"field1",children:"Option 1"},render:o=>{const t=c();return n.jsx(p,{methods:t,onFormSubmit:()=>null,children:n.jsx(s,{...o})})}},r={args:{labelText:"Label Text",name:"field1",children:"Option 1"},render:o=>{const t=c({defaultValues:{field1:!0}});return n.jsx(p,{methods:t,onFormSubmit:()=>null,children:n.jsx(s,{...o})})}};var a,m,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    labelText: 'Label Text',
    name: 'field1',
    children: 'Option 1'
  },
  render: args => {
    const methods = useForm();
    return <Form methods={methods} onFormSubmit={() => null}>
        <FormCheckbox {...args} />
      </Form>;
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,d,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    labelText: 'Label Text',
    name: 'field1',
    children: 'Option 1'
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
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const j=["Default","WithDefaultValue"];export{e as Default,r as WithDefaultValue,j as __namedExportsOrder,T as default};
