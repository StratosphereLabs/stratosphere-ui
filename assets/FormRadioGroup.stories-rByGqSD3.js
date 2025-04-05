import{j as o}from"./jsx-runtime-DiklIkkE.js";import{u as d,F as l}from"./FormLabelText-BYRBbg7S.js";import"./FormCheckbox-CmXjOFpU.js";import"./FormControl-BdTh8q4i.js";import"./FormError-DCh6zGQK.js";import"./FormFileInput-Pog9VxRe.js";import{a,b as t}from"./FormRadioGroupOption-B7rU_Jup.js";import"./FormRangeSlider-Danb-6H0.js";import"./FormTextarea-DF7-D8_R.js";import"./FormToggleSwitch-BqtyrF8U.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";import"./lodash-CjHNWSW5.js";import"./label-BHy4_Co_.js";import"./keyboard-CkwPyo54.js";import"./description-BiWv9uhY.js";import"./Button-D0Yf2K26.js";import"./useFocusRing-CeEfTI_f.js";import"./index-Bx0Ph3cE.js";import"./hidden-VT-llRfc.js";import"./bugs-DpEN4NTH.js";import"./focus-management-BpNHtozA.js";const _={title:"FormRadioGroup",component:a},r={args:{name:"field1",labelText:"Field Label"},render:p=>{const s=d({defaultValues:{field1:"2"}});return o.jsx(l,{className:"w-60",methods:s,onFormSubmit:()=>null,children:o.jsxs(a,{...p,children:[o.jsx(t,{disabled:!0,value:"1",children:"Option 1"}),o.jsx(t,{value:"2",children:"Option 2"}),o.jsx(t,{value:"3",children:"Option 3"})]})})}};var e,i,m;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
