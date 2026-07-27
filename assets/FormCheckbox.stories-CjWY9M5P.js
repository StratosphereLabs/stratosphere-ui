import{j as o}from"./jsx-runtime-DiklIkkE.js";import{u as c,F as p}from"./FormLabelText-CKiZ0bQS.js";import{F as s}from"./FormCheckbox-CofDc0ZL.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";import"./useFieldColor-BLag0axt.js";import"./lodash-C1F-7-Ro.js";const j={title:"FormCheckbox",component:s},e={args:{labelText:"Label Text",name:"field1",children:"Option 1"},render:n=>{const t=c();return o.jsx(p,{methods:t,onFormSubmit:()=>null,children:o.jsx(s,{...n})})}},r={args:{labelText:"Label Text",name:"field1",children:"Option 1"},render:n=>{const t=c({defaultValues:{field1:!0}});return o.jsx(p,{methods:t,onFormSubmit:()=>null,children:o.jsx(s,{...n})})}};var a,m,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const S=["Default","WithDefaultValue"];export{e as Default,r as WithDefaultValue,S as __namedExportsOrder,j as default};
