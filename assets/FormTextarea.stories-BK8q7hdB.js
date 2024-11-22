import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{t as L,z as u}from"./index-DBBOrYwS.js";import{r as z}from"./index-DRjF_FHU.js";import{u as t,F as a}from"./FormLabelText-2tTELyhz.js";import{F as n}from"./FormTextarea-Do43OudD.js";import"./index-lhGYx47h.js";import"./lodash-CaEHFKMH.js";import"./FormError-Cspxj7f0.js";const A={title:"FormTextarea",component:n},m={args:{name:"field1"},render:o=>{const r=t();return e.jsx(a,{methods:r,onFormSubmit:()=>null,children:e.jsx(n,{...o})})}},s={args:{name:"field1",labelText:"Field Label"},render:o=>{const r=t();return e.jsx(a,{methods:r,onFormSubmit:()=>null,children:e.jsx(n,{...o})})}},d={args:{...s.args,isRequired:!0},render:o=>{const r=t();return e.jsx(a,{methods:r,onFormSubmit:()=>null,children:e.jsx(n,{...o})})}},l={args:{name:"field1",placeholder:"Placeholder Text..."},render:o=>{const r=t();return e.jsx(a,{methods:r,onFormSubmit:()=>null,children:e.jsx(n,{...o})})}},i={args:{name:"field1"},render:o=>{const r=t({resolver:L(u.object({field1:u.string().min(1,"Required")}))});return z.useEffect(()=>{r.trigger("field1")},[r]),e.jsx(a,{methods:r,onFormSubmit:()=>null,children:e.jsx(n,{...o})})}};var c,h,F;m.parameters={...m.parameters,docs:{...(c=m.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'field1'
  },
  render: args => {
    const methods = useForm();
    return <Form methods={methods} onFormSubmit={() => null}>
        <FormTextarea {...args} />
      </Form>;
  }
}`,...(F=(h=m.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};var p,g,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'field1',
    labelText: 'Field Label'
  },
  render: args => {
    const methods = useForm();
    return <Form methods={methods} onFormSubmit={() => null}>
        <FormTextarea {...args} />
      </Form>;
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,b,S;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...WithLabel.args,
    isRequired: true
  },
  render: args => {
    const methods = useForm();
    return <Form methods={methods} onFormSubmit={() => null}>
        <FormTextarea {...args} />
      </Form>;
  }
}`,...(S=(b=d.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var j,T,R;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'field1',
    placeholder: 'Placeholder Text...'
  },
  render: args => {
    const methods = useForm();
    return <Form methods={methods} onFormSubmit={() => null}>
        <FormTextarea {...args} />
      </Form>;
  }
}`,...(R=(T=l.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var E,W,q;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    name: 'field1'
  },
  render: args => {
    const methods = useForm({
      resolver: zodResolver(z.object({
        field1: z.string().min(1, 'Required')
      }))
    });
    useEffect(() => {
      methods.trigger('field1');
    }, [methods]);
    return <Form methods={methods} onFormSubmit={() => null}>
        <FormTextarea {...args} />
      </Form>;
  }
}`,...(q=(W=i.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const B=["Default","WithLabel","Required","WithPlaceholder","WithError"];export{m as Default,d as Required,i as WithError,s as WithLabel,l as WithPlaceholder,B as __namedExportsOrder,A as default};
