import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{u as d,F as l}from"./FormLabelText-2tTELyhz.js";import{a,b as t}from"./FormRadioGroupOption-CokWDAQ8.js";import"./FormCheckbox-CthDTzDt.js";import"./FormControl-DGcDh0VE.js";import"./FormError-Cspxj7f0.js";import"./FormFileInput-DBymLeFk.js";import"./FormRangeSlider-D1_AsYb-.js";import"./FormTextarea-Do43OudD.js";import"./FormToggleSwitch-DiQNfjGD.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";import"./lodash-CaEHFKMH.js";import"./Button-C8Er2sLW.js";import"./useFocusRing-Bmn-zFZf.js";import"./keyboard-CUk6zo9K.js";import"./description-DnSH_hHI.js";import"./index-rX-Bn4lm.js";import"./hidden-ZETsWED3.js";import"./label-DKwZbPqi.js";import"./bugs-DpEN4NTH.js";import"./focus-management-BR9cTPnt.js";const _={title:"FormRadioGroup",component:a},r={args:{name:"field1",labelText:"Field Label"},render:p=>{const s=d({defaultValues:{field1:"2"}});return o.jsx(l,{className:"w-60",methods:s,onFormSubmit:()=>null,children:o.jsxs(a,{...p,children:[o.jsx(t,{disabled:!0,value:"1",children:"Option 1"}),o.jsx(t,{value:"2",children:"Option 2"}),o.jsx(t,{value:"3",children:"Option 3"})]})})}};var e,i,m;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    name: 'field1',
    labelText: 'Field Label'
  },
  render: args => {
    const methods = useForm({
      defaultValues: {
        field1: '2'
      }
    });
    return <Form className="w-60" methods={methods} onFormSubmit={() => null}>
        <FormRadioGroup {...args}>
          <FormRadioGroupOption disabled value="1">
            Option 1
          </FormRadioGroupOption>
          <FormRadioGroupOption value="2">Option 2</FormRadioGroupOption>
          <FormRadioGroupOption value="3">Option 3</FormRadioGroupOption>
        </FormRadioGroup>
      </Form>;
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const k=["Default"];export{r as Default,k as __namedExportsOrder,_ as default};
