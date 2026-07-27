import{j as o}from"./jsx-runtime-DiklIkkE.js";import{u as d,F as l}from"./FormLabelText-CKiZ0bQS.js";import"./FormCheckbox-CofDc0ZL.js";import"./FormControl-Cg9MfuLQ.js";import"./FormError-DCh6zGQK.js";import"./FormFileInput-DZxP-Ct9.js";import{a,b as t}from"./FormRadioGroupOption-CE5PN_Z4.js";import"./FormRangeSlider-DLPhn1Wz.js";import"./FormTextarea-TxRBtJWi.js";import"./FormToggleSwitch-BRqfyGoT.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";import"./useFieldColor-BLag0axt.js";import"./lodash-C1F-7-Ro.js";import"./label-BHy4_Co_.js";import"./keyboard-CkwPyo54.js";import"./description-BiWv9uhY.js";import"./Button-DlMGMNp9.js";import"./useFocusRing-CeEfTI_f.js";import"./index-Bx0Ph3cE.js";import"./hidden-VT-llRfc.js";import"./bugs-DpEN4NTH.js";import"./focus-management-BpNHtozA.js";const k={title:"FormRadioGroup",component:a},r={args:{name:"field1",labelText:"Field Label"},render:p=>{const s=d({defaultValues:{field1:"2"}});return o.jsx(l,{className:"w-60",methods:s,onFormSubmit:()=>null,children:o.jsxs(a,{...p,children:[o.jsx(t,{disabled:!0,value:"1",children:"Option 1"}),o.jsx(t,{value:"2",children:"Option 2"}),o.jsx(t,{value:"3",children:"Option 3"})]})})}};var e,i,m;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const q=["Default"];export{r as Default,q as __namedExportsOrder,k as default};
