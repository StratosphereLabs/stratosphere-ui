import{j as r}from"./jsx-runtime-DiklIkkE.js";import{u as n,F as d}from"./FormLabelText-BYRBbg7S.js";import{F as s}from"./FormRangeSlider-Danb-6H0.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";const x={title:"FormRangeSlider",component:s},e={args:{name:"field1",labelText:"Label Text",min:0,max:100},render:t=>{const l=n({defaultValues:{field1:[0,100]}});return r.jsx(d,{className:"w-full",methods:l,onFormSubmit:()=>null,children:r.jsx(s,{...t})})}};var a,o,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    name: 'field1',
    labelText: 'Label Text',
    min: 0,
    max: 100
  },
  render: args => {
    const methods = useForm({
      defaultValues: {
        field1: [0, 100]
      }
    });
    return <Form className="w-full" methods={methods} onFormSubmit={() => null}>
        <FormRangeSlider {...args} />
      </Form>;
  }
}`,...(m=(o=e.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const F=["Default"];export{e as Default,F as __namedExportsOrder,x as default};
