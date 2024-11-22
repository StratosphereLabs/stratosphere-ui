import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{t as x,z as i}from"./index-DBBOrYwS.js";import{r as j}from"./index-DRjF_FHU.js";import{u as F,F as R}from"./FormLabelText-2tTELyhz.js";import{F as m}from"./FormRadioGroupOption-CokWDAQ8.js";import"./FormCheckbox-CthDTzDt.js";import"./FormControl-DGcDh0VE.js";import"./FormError-Cspxj7f0.js";import"./FormFileInput-DBymLeFk.js";import"./FormRangeSlider-D1_AsYb-.js";import"./FormTextarea-Do43OudD.js";import"./FormToggleSwitch-DiQNfjGD.js";import"./index-lhGYx47h.js";import"./lodash-CaEHFKMH.js";import"./Button-C8Er2sLW.js";import"./useFocusRing-Bmn-zFZf.js";import"./keyboard-CUk6zo9K.js";import"./description-DnSH_hHI.js";import"./index-rX-Bn4lm.js";import"./hidden-ZETsWED3.js";import"./label-DKwZbPqi.js";import"./bugs-DpEN4NTH.js";import"./focus-management-BR9cTPnt.js";const P={title:"FormRadio",component:m},q=[{id:1,label:"Label 1",value:"1"},{id:2,label:"Label 2",value:"2"},{id:3,label:"Label 3",value:"3"}],h={render:a=>{const r=F();return s.jsx(R,{className:"w-60",methods:r,onFormSubmit:()=>null,children:s.jsx(m,{...a})})}},e={...h,args:{name:"field1",labelText:"Field Label",options:q}},o={...h,args:{...e.args,isRequired:!0}},t={args:o.args,render:a=>{const r=F({resolver:x(i.object({field1:i.string().min(1,"Required")}))});return j.useEffect(()=>{r.trigger("field1")},[r]),s.jsx(R,{className:"w-60",methods:r,onFormSubmit:()=>null,children:s.jsx(m,{...a})})}};var l,n,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...NoDefaultsTemplate,
  args: {
    name: 'field1',
    labelText: 'Field Label',
    options: radioOptions
  }
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var p,u,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...NoDefaultsTemplate,
  args: {
    ...Default.args,
    isRequired: true
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var f,g,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: Required.args,
  render: args => {
    const methods = useForm({
      resolver: zodResolver(z.object({
        field1: z.string().min(1, 'Required')
      }))
    });
    useEffect(() => {
      methods.trigger('field1');
    }, [methods]);
    return <Form className="w-60" methods={methods} onFormSubmit={() => null}>
        <FormRadio {...args} />
      </Form>;
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const Q=["Default","Required","WithError"];export{e as Default,o as Required,t as WithError,Q as __namedExportsOrder,P as default};
