import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{t as D,z as h}from"./index-DBBOrYwS.js";import{r as _}from"./index-DRjF_FHU.js";import{u as n,F as t}from"./FormLabelText-2tTELyhz.js";import{I as v}from"./Icons-CIT3nYro.js";import{F as s}from"./FormControl-DGcDh0VE.js";import"./index-lhGYx47h.js";import"./FormError-Cspxj7f0.js";import"./lodash-CaEHFKMH.js";const Q={title:"FormControl",component:s},a={args:{name:"field1"},render:o=>{const r=n();return e.jsx(t,{methods:r,onFormSubmit:()=>null,children:e.jsx(s,{...o})})}},m={args:{name:"field1",labelText:"Field Label"},render:o=>{const r=n();return e.jsx(t,{methods:r,onFormSubmit:()=>null,children:e.jsx(s,{...o})})}},l={args:{...m.args,isRequired:!0},render:o=>{const r=n();return e.jsx(t,{methods:r,onFormSubmit:()=>null,children:e.jsx(s,{...o})})}},d={args:{name:"field1",placeholder:"Placeholder Text..."},render:o=>{const r=n();return e.jsx(t,{methods:r,onFormSubmit:()=>null,children:e.jsx(s,{...o})})}},i={args:{name:"field1"},render:o=>{const r=n({resolver:D(h.object({field1:h.string().min(1,"Required")}))});return _.useEffect(()=>{r.trigger("field1")},[r]),e.jsx(t,{methods:r,onFormSubmit:()=>null,children:e.jsx(s,{...o})})}},c={args:{name:"field1",elementLeft:e.jsx(v,{className:"h-6 w-6"}),inputClassName:"pl-10"},render:o=>{const r=n();return e.jsx(t,{methods:r,onFormSubmit:()=>null,children:e.jsx(s,{...o})})}},u={args:{name:"field1",elementRight:e.jsx(v,{className:"h-6 w-6"}),inputClassName:"pr-10"},render:o=>{const r=n();return e.jsx(t,{methods:r,onFormSubmit:()=>null,children:e.jsx(s,{...o})})}};var p,F,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'field1'
  },
  render: args => {
    const methods = useForm();
    return <Form methods={methods} onFormSubmit={() => null}>
        <FormControl {...args} />
      </Form>;
  }
}`,...(g=(F=a.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};var f,x,b;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'field1',
    labelText: 'Field Label'
  },
  render: args => {
    const methods = useForm();
    return <Form methods={methods} onFormSubmit={() => null}>
        <FormControl {...args} />
      </Form>;
  }
}`,...(b=(x=m.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var S,j,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...WithLabel.args,
    isRequired: true
  },
  render: args => {
    const methods = useForm();
    return <Form methods={methods} onFormSubmit={() => null}>
        <FormControl {...args} />
      </Form>;
  }
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var R,E,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    name: 'field1',
    placeholder: 'Placeholder Text...'
  },
  render: args => {
    const methods = useForm();
    return <Form methods={methods} onFormSubmit={() => null}>
        <FormControl {...args} />
      </Form>;
  }
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var L,N,I;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
        <FormControl {...args} />
      </Form>;
  }
}`,...(I=(N=i.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var q,O,w;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: 'field1',
    elementLeft: <InfoIcon className="h-6 w-6" />,
    inputClassName: 'pl-10'
  },
  render: args => {
    const methods = useForm();
    return <Form methods={methods} onFormSubmit={() => null}>
        <FormControl {...args} />
      </Form>;
  }
}`,...(w=(O=c.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var z,P,T;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: 'field1',
    elementRight: <InfoIcon className="h-6 w-6" />,
    inputClassName: 'pr-10'
  },
  render: args => {
    const methods = useForm();
    return <Form methods={methods} onFormSubmit={() => null}>
        <FormControl {...args} />
      </Form>;
  }
}`,...(T=(P=u.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const U=["Default","WithLabel","Required","WithPlaceholder","WithError","WithElementOnLeft","WithElementOnRight"];export{a as Default,l as Required,c as WithElementOnLeft,u as WithElementOnRight,i as WithError,m as WithLabel,d as WithPlaceholder,U as __namedExportsOrder,Q as default};
