import{j as e}from"./jsx-runtime-DiklIkkE.js";import{a as Ue,d as Ie,c as ze,b as Ge,u as De,F as fe}from"./FormLabelText-CKiZ0bQS.js";import"./FormCheckbox-CofDc0ZL.js";import"./FormControl-Cg9MfuLQ.js";import{F as He}from"./FormError-DCh6zGQK.js";import"./FormFileInput-DZxP-Ct9.js";import"./FormRadioGroupOption-CE5PN_Z4.js";import"./FormRangeSlider-DLPhn1Wz.js";import"./FormTextarea-TxRBtJWi.js";import"./FormToggleSwitch-BRqfyGoT.js";import{c as F}from"./index-lhGYx47h.js";import"./index-DRjF_FHU.js";import{u as Be}from"./useFieldColor-BLag0axt.js";import"./lodash-C1F-7-Ro.js";import{B as $e}from"./Button-DlMGMNp9.js";import{b as Je}from"./Icons-D3_tvXUy.js";import{p as A,b as Ye,c as U,R as Ze,a as Ke,D as Qe,d as Xe,e as ea,C as w,s as aa}from"./Calendar-BK__IhI_.js";import{l as ra,S as sa,R as ta}from"./popover-BZdC9fb8.js";import"./label-BHy4_Co_.js";import"./keyboard-CkwPyo54.js";import"./description-BiWv9uhY.js";import"./useFocusRing-CeEfTI_f.js";import"./index-Bx0Ph3cE.js";import"./hidden-VT-llRfc.js";import"./bugs-DpEN4NTH.js";import"./focus-management-BpNHtozA.js";import"./useValueChangeEffect-DgF92LoJ.js";import"./use-resolve-button-type-BunvJ_cM.js";import"./floating-DbckstqE.js";import"./use-event-listener-B6ZzwbKe.js";import"./portal-klmoE2MD.js";import"./use-tab-direction-CP4NjNZo.js";import"./open-closed-ZYQZnB1s.js";import"./close-provider-CMV4gi-l.js";const k={from:null,to:null},n=({anchor:r,buttonClassName:m,calendarClassName:f,className:P,color:xe,disabled:Fe,endName:d,fixedWeeks:Te,hideCalendarIcon:be,hideErrorMessage:je,isClearable:ye,isDateDisabled:Ve,isRequired:Se,labelText:q,locale:h,max:Ee,min:We,mode:l="single",name:i,onChange:s,panelClassName:ve,placeholder:Pe,portal:Ne,showDirty:Re,showOutsideDays:Ae,size:M,valueMode:we="iso",weekStartsOn:ke})=>{const{field:{ref:qe,value:N},fieldState:{error:x}}=Ue({name:i}),Me=Ie({disabled:d===void 0,name:d??i}),{setValue:Le}=ze(),L=Be(i,Re)??xe,c=l!=="range"?k:d!==void 0?{from:A(N),to:A(Me)}:Ye(N),p=l==="range"?null:A(N),_=l==="range"?c.from!==null||c.to!==null?[c.from,c.to].map(a=>a!==null?U(a,h):"…").join(Ze):null:p!==null?l==="month"?Ke(p,h):U(p,h):null,g=(a,t)=>{Le(a,t,{shouldDirty:!0,shouldTouch:!0})},u=a=>aa(a,l,we),O=({from:a,to:t})=>{if(d!==void 0){g(i,u(a)),g(d,u(t));return}g(i,{from:u(a),to:u(t)})},_e=(a,t)=>{O(a),s==null||s(a),a.from!==null&&a.to!==null&&t()},C=(a,t)=>{g(i,u(a)),s==null||s(a),t()},Oe=a=>{l==="range"?(O(k),s==null||s(k)):(g(i,u(null)),s==null||s(null)),a()},Ce=Pe??(l==="range"?Qe:l==="month"?Xe:ea),R={className:f,fixedWeeks:Te,isDateDisabled:Ve,locale:h,max:Ee,min:We,showOutsideDays:Ae,weekStartsOn:ke};return e.jsxs("fieldset",{className:F("fieldset py-0",P),children:[q!==void 0?e.jsx(Ge,{isRequired:Se,children:q}):null,e.jsxs(ra,{className:"relative w-full",children:[e.jsxs(sa,{className:F("input w-full cursor-pointer justify-between",L&&`input-${L}`,M&&`input-${M}`,m),disabled:Fe,ref:qe,children:[e.jsx("span",{className:F("truncate font-normal",_===null&&"opacity-50"),children:_??Ce}),be!==!0?e.jsx(Je,{className:"h-4 w-4 shrink-0 opacity-60"}):null]}),e.jsx(ta,{anchor:r??{gap:4,to:"bottom start"},portal:Ne,transition:!0,className:F("z-50 origin-top rounded-box shadow-lg transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0",ve),children:({close:a})=>{const t=ye===!0?e.jsx("div",{className:"flex justify-end",children:e.jsx($e,{color:"ghost",onClick:()=>Oe(a),size:"xs",children:"Clear"})}):void 0;return l==="range"?e.jsx(w,{...R,footer:t,mode:"range",onChange:D=>_e(D,a),value:c}):l==="month"?e.jsx(w,{...R,footer:t,mode:"month",onChange:D=>C(D,a),value:p}):e.jsx(w,{...R,footer:t,mode:"single",onChange:D=>C(D,a),value:p})}})]}),je!==!0&&(x==null?void 0:x.message)!==void 0?e.jsx(He,{children:x.message}):null]})};n.__docgenInfo={description:"A date picker field for react-hook-form, built on the daisyUI calendar\nstyles. Supports selecting a single date, a date range or a single month.\n\nWith the default `valueMode` of `iso`, `single` and `range` fields store\n`yyyy-MM-dd` strings and `month` fields store `yyyy-MM` strings, matching the\nvalues of native `date` and `month` inputs.",methods:[],displayName:"DatePicker",props:{anchor:{required:!1,tsType:{name:"AnchorProps"},description:""},buttonClassName:{required:!1,tsType:{name:"string"},description:""},calendarClassName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof INPUT_COLORS)[number]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},endName:{required:!1,tsType:{name:"Path",elements:[{name:"Values"}],raw:"Path<Values>"},description:"Second form field used for the end of a range. When omitted, `range` mode\nstores its value as a `{ from, to }` object on `name` instead."},hideCalendarIcon:{required:!1,tsType:{name:"literal",value:"true"},description:""},hideErrorMessage:{required:!1,tsType:{name:"boolean"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},mode:{required:!1,tsType:{name:"union",raw:"'single' | 'range' | 'month'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'range'"},{name:"literal",value:"'month'"}]},description:"",defaultValue:{value:"'single'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: Date | DateRange | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | DateRange | null",elements:[{name:"Date"},{name:"DateRange"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},panelClassName:{required:!1,tsType:{name:"string"},description:""},portal:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof INPUT_SIZES)[number]"},description:""},valueMode:{required:!1,tsType:{name:"union",raw:"'iso' | 'date'",elements:[{name:"literal",value:"'iso'"},{name:"literal",value:"'date'"}]},description:"Store the value as an ISO string (the default) or as a `Date`.",defaultValue:{value:"'iso'",computed:!1}}},composes:["Omit","Pick"]};const he={fromDate:"",month:"",singleDate:"",toDate:""},Ca={title:"DatePicker",component:n},o=({children:r,defaultValues:m})=>{const f=De({defaultValues:{...he,...m}}),P=f.watch();return e.jsxs(fe,{className:"flex h-96 w-72 flex-col gap-4",methods:f,onFormSubmit:()=>null,children:[r,e.jsx("pre",{className:"text-xs opacity-60",children:JSON.stringify(P,null,2)})]})},T={args:{labelText:"Departure Date",name:"singleDate"},render:r=>e.jsx(o,{children:e.jsx(n,{...r})})},b={args:{labelText:"Departure Date",name:"singleDate"},render:r=>e.jsx(o,{defaultValues:{singleDate:"2013-08-12"},children:e.jsx(n,{...r})})},j={args:{endName:"toDate",labelText:"Flight Dates",mode:"range",name:"fromDate"},render:r=>e.jsx(o,{defaultValues:{fromDate:"2013-08-12",toDate:"2013-08-20"},children:e.jsx(n,{...r})})},y={args:{labelText:"Flight Dates",mode:"range",name:"singleDate"},render:r=>e.jsx(o,{children:e.jsx(n,{...r})})},V={args:{labelText:"Month",mode:"month",name:"month"},render:r=>e.jsx(o,{defaultValues:{month:"2013-08"},children:e.jsx(n,{...r})})},S={args:{isClearable:!0,labelText:"Departure Date",name:"singleDate"},render:r=>e.jsx(o,{defaultValues:{singleDate:"2013-08-12"},children:e.jsx(n,{...r})})},E={args:{labelText:"Departure Date",max:"2013-08-20",min:"2013-08-05",name:"singleDate"},render:r=>e.jsx(o,{defaultValues:{singleDate:"2013-08-12"},children:e.jsx(n,{...r})})},W={args:{labelText:"Departure Date",name:"singleDate",size:"sm"},render:r=>e.jsx(o,{defaultValues:{singleDate:"2013-08-12"},children:e.jsx(n,{...r})})},v={args:{isRequired:!0,labelText:"Departure Date",name:"singleDate"},render:r=>{const m=De({defaultValues:he});return m.setError("singleDate",{message:"Please select a date"}),e.jsx(fe,{className:"flex h-96 w-72 flex-col",methods:m,onFormSubmit:()=>null,children:e.jsx(n,{...r})})}};var I,z,G;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    labelText: 'Departure Date',
    name: 'singleDate'
  },
  render: args => <FormWrapper>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(G=(z=T.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,B,$;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    labelText: 'Departure Date',
    name: 'singleDate'
  },
  render: args => <FormWrapper defaultValues={{
    singleDate: '2013-08-12'
  }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...($=(B=b.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var J,Y,Z;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    endName: 'toDate',
    labelText: 'Flight Dates',
    mode: 'range',
    name: 'fromDate'
  },
  render: args => <FormWrapper defaultValues={{
    fromDate: '2013-08-12',
    toDate: '2013-08-20'
  }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var K,Q,X;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    labelText: 'Flight Dates',
    mode: 'range',
    name: 'singleDate'
  },
  render: args => <FormWrapper>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var ee,ae,re;V.parameters={...V.parameters,docs:{...(ee=V.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    labelText: 'Month',
    mode: 'month',
    name: 'month'
  },
  render: args => <FormWrapper defaultValues={{
    month: '2013-08'
  }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(re=(ae=V.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,te,ne;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    isClearable: true,
    labelText: 'Departure Date',
    name: 'singleDate'
  },
  render: args => <FormWrapper defaultValues={{
    singleDate: '2013-08-12'
  }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(ne=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var le,oe,ie;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    labelText: 'Departure Date',
    max: '2013-08-20',
    min: '2013-08-05',
    name: 'singleDate'
  },
  render: args => <FormWrapper defaultValues={{
    singleDate: '2013-08-12'
  }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(ie=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var me,ue,de;W.parameters={...W.parameters,docs:{...(me=W.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    labelText: 'Departure Date',
    name: 'singleDate',
    size: 'sm'
  },
  render: args => <FormWrapper defaultValues={{
    singleDate: '2013-08-12'
  }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(de=(ue=W.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var ce,pe,ge;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    isRequired: true,
    labelText: 'Departure Date',
    name: 'singleDate'
  },
  render: args => {
    const methods = useForm<FormValues>({
      defaultValues: DEFAULT_VALUES
    });
    methods.setError('singleDate', {
      message: 'Please select a date'
    });
    return <Form className="flex h-96 w-72 flex-col" methods={methods} onFormSubmit={() => null}>
        <DatePicker<FormValues> {...args} />
      </Form>;
  }
}`,...(ge=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const Ua=["SingleDate","WithDefaultValue","DateRangeWithTwoFields","DateRangeAsObject","SingleMonth","Clearable","WithMinAndMax","Small","WithError"];export{S as Clearable,y as DateRangeAsObject,j as DateRangeWithTwoFields,T as SingleDate,V as SingleMonth,W as Small,b as WithDefaultValue,v as WithError,E as WithMinAndMax,Ua as __namedExportsOrder,Ca as default};
