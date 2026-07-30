import{j as e}from"./jsx-runtime-DiklIkkE.js";import{a as sa,d as na,c as oa,b as la,u as ve,F as Pe}from"./FormLabelText-CKiZ0bQS.js";import"./FormCheckbox-CofDc0ZL.js";import"./FormControl-Cg9MfuLQ.js";import{F as ia}from"./FormError-DCh6zGQK.js";import"./FormFileInput-DZxP-Ct9.js";import"./FormRadioGroupOption-CE5PN_Z4.js";import"./FormRangeSlider-DLPhn1Wz.js";import"./FormTextarea-TxRBtJWi.js";import"./FormToggleSwitch-BRqfyGoT.js";import{c as F}from"./index-lhGYx47h.js";import"./index-DRjF_FHU.js";import{u as ma}from"./useFieldColor-BLag0axt.js";import"./lodash-C1F-7-Ro.js";import{B as G}from"./Button-DlMGMNp9.js";import{b as da}from"./Icons-B4n3P6JJ.js";import{p as M,c as ua,d as ca,e as B,R as pa,b as ga,g as Da,D as fa,h as ha,i as xa,j as Ta,C as y,s as ba}from"./Calendar-B2W5v6ym.js";import{l as Fa,S as ya,R as ja}from"./popover-BZdC9fb8.js";import"./label-BHy4_Co_.js";import"./keyboard-CkwPyo54.js";import"./description-BiWv9uhY.js";import"./useFocusRing-CeEfTI_f.js";import"./index-Bx0Ph3cE.js";import"./hidden-VT-llRfc.js";import"./bugs-DpEN4NTH.js";import"./focus-management-BpNHtozA.js";import"./useValueChangeEffect-DgF92LoJ.js";import"./use-resolve-button-type-BunvJ_cM.js";import"./floating-DbckstqE.js";import"./use-event-listener-B6ZzwbKe.js";import"./portal-klmoE2MD.js";import"./use-tab-direction-CP4NjNZo.js";import"./open-closed-ZYQZnB1s.js";import"./close-provider-CMV4gi-l.js";const q={from:null,to:null},n=({anchor:a,buttonClassName:u,calendarClassName:x,captionLayout:N,className:we,color:Re,disabled:Ne,endName:p,fixedWeeks:ke,hideCalendarIcon:Le,hideErrorMessage:Me,isClearable:_,isDateDisabled:qe,isRequired:_e,labelText:C,locale:g,max:Ce,min:Oe,mode:t="single",name:i,numberOfMonths:Ue,onChange:o,panelClassName:Ie,placeholder:ze,portal:He,showDirty:Ge,showOutsideDays:Be,showSeconds:$e,showWeekNumber:Je,size:O,timeLabel:Ye,valueMode:Ze="iso",weekStartsOn:Ke})=>{const{field:{ref:Qe,value:T},fieldState:{error:b}}=sa({name:i}),Xe=na({disabled:p===void 0,name:p??i}),{setValue:ea}=oa(),U=ma(i,Ge)??Re,D=t!=="range"?q:p!==void 0?{from:M(T),to:M(Xe)}:ua(T),m=t==="range"?null:t==="datetime"?ca(T):M(T),I=t==="range"?D.from!==null||D.to!==null?[D.from,D.to].map(r=>r!==null?B(r,g):"…").join(pa):null:m!==null?t==="month"?ga(m,g):t==="datetime"?Da(m,g):B(m,g):null,f=(r,s)=>{ea(r,s,{shouldDirty:!0,shouldTouch:!0})},c=r=>ba(r,t,Ze),z=({from:r,to:s})=>{if(p!==void 0){f(i,c(r)),f(p,c(s));return}f(i,{from:c(r),to:c(s)})},aa=(r,s)=>{z(r),o==null||o(r),r.from!==null&&r.to!==null&&s()},k=(r,s)=>{f(i,c(r)),o==null||o(r),s==null||s()},ra=r=>{t==="range"?(z(q),o==null||o(q)):(f(i,c(null)),o==null||o(null)),r()},ta=ze??(t==="range"?fa:t==="month"?ha:t==="datetime"?xa:Ta),H={className:x,isDateDisabled:qe,locale:g,max:Ce,min:Oe},L={...H,captionLayout:N,fixedWeeks:ke,numberOfMonths:Ue,showOutsideDays:Be,showWeekNumber:Je,weekStartsOn:Ke};return e.jsxs("fieldset",{className:F("fieldset py-0",we),children:[C!==void 0?e.jsx(la,{isRequired:_e,children:C}):null,e.jsxs(Fa,{className:"relative w-full",children:[e.jsxs(ya,{className:F("input w-full cursor-pointer justify-between",U&&`input-${U}`,O&&`input-${O}`,u),disabled:Ne,ref:Qe,children:[e.jsx("span",{className:F("truncate font-normal",I===null&&"opacity-50"),children:I??ta}),Le!==!0?e.jsx(da,{className:"h-4 w-4 shrink-0 opacity-60"}):null]}),e.jsx(ja,{anchor:a??{gap:4,to:"bottom start"},portal:He,transition:!0,className:F("z-50 origin-top rounded-box shadow-lg transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0",Ie),children:({close:r})=>{const s=_===!0||t==="datetime"?e.jsxs("div",{className:"flex justify-end gap-2",children:[_===!0?e.jsx(G,{color:"ghost",onClick:()=>ra(r),size:"xs",children:"Clear"}):null,t==="datetime"?e.jsx(G,{color:"primary",onClick:()=>r(),size:"xs",children:"Done"}):null]}):void 0;return t==="range"?e.jsx(y,{...L,footer:s,mode:"range",onChange:d=>aa(d,r),value:D}):t==="datetime"?e.jsx(y,{...L,footer:s,mode:"datetime",onChange:d=>k(d),showSeconds:$e,timeLabel:Ye,value:m}):t==="month"?e.jsx(y,{...H,footer:s,mode:"month",onChange:d=>k(d,r),value:m}):e.jsx(y,{...L,footer:s,mode:"single",onChange:d=>k(d,r),value:m})}})]}),Me!==!0&&(b==null?void 0:b.message)!==void 0?e.jsx(ia,{children:b.message}):null]})};n.__docgenInfo={description:"A date picker field for react-hook-form, built on shadcn/ui's date picker\ncomposition of a popover and a calendar, and styled by daisyUI. Supports\nselecting a single date, a date and a time, a date range or a single month.\n\nWith the default `valueMode` of `iso`, `single` and `range` fields store\n`yyyy-MM-dd` strings, `datetime` fields store `yyyy-MM-ddTHH:mm` strings and\n`month` fields store `yyyy-MM` strings, matching the values of the native\n`date`, `datetime-local` and `month` inputs.",methods:[],displayName:"DatePicker",props:{anchor:{required:!1,tsType:{name:"AnchorProps"},description:""},buttonClassName:{required:!1,tsType:{name:"string"},description:""},calendarClassName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof INPUT_COLORS)[number]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},endName:{required:!1,tsType:{name:"Path",elements:[{name:"Values"}],raw:"Path<Values>"},description:"Second form field used for the end of a range. When omitted, `range` mode\nstores its value as a `{ from, to }` object on `name` instead."},hideCalendarIcon:{required:!1,tsType:{name:"literal",value:"true"},description:""},hideErrorMessage:{required:!1,tsType:{name:"boolean"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},mode:{required:!1,tsType:{name:"union",raw:"'single' | 'datetime' | 'range' | 'month'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'datetime'"},{name:"literal",value:"'range'"},{name:"literal",value:"'month'"}]},description:"",defaultValue:{value:"'single'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: Date | DateRange | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | DateRange | null",elements:[{name:"Date"},{name:"DateRange"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},panelClassName:{required:!1,tsType:{name:"string"},description:""},portal:{required:!1,tsType:{name:"boolean"},description:""},showSeconds:{required:!1,tsType:{name:"boolean"},description:"Adds seconds to the time field of `datetime` mode."},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof INPUT_SIZES)[number]"},description:""},timeLabel:{required:!1,tsType:{name:"string"},description:"Label of the time field of `datetime` mode. Defaults to `Time`."},valueMode:{required:!1,tsType:{name:"union",raw:"'iso' | 'date'",elements:[{name:"literal",value:"'iso'"},{name:"literal",value:"'date'"}]},description:"Store the value as an ISO string (the default) or as a `Date`.",defaultValue:{value:"'iso'",computed:!1}}},composes:["Omit","Pick"]};const Ae={dateTime:"",fromDate:"",month:"",singleDate:"",toDate:""},nr={title:"DatePicker",component:n},l=({children:a,defaultValues:u})=>{const x=ve({defaultValues:{...Ae,...u}}),N=x.watch();return e.jsxs(Pe,{className:"flex h-96 w-72 flex-col gap-4",methods:x,onFormSubmit:()=>null,children:[a,e.jsx("pre",{className:"text-xs opacity-60",children:JSON.stringify(N,null,2)})]})},j={args:{labelText:"Departure Date",name:"singleDate"},render:a=>e.jsx(l,{children:e.jsx(n,{...a})})},V={args:{labelText:"Departure Date",name:"singleDate"},render:a=>e.jsx(l,{defaultValues:{singleDate:"2013-08-12"},children:e.jsx(n,{...a})})},S={args:{labelText:"Departure",mode:"datetime",name:"dateTime"},render:a=>e.jsx(l,{defaultValues:{dateTime:"2013-08-12T14:30"},children:e.jsx(n,{...a})})},W={args:{isClearable:!0,labelText:"Departure",mode:"datetime",name:"dateTime",showSeconds:!0,timeLabel:"Departure time"},render:a=>e.jsx(l,{defaultValues:{dateTime:"2013-08-12T14:30:45"},children:e.jsx(n,{...a})})},h={args:{endName:"toDate",labelText:"Flight Dates",mode:"range",name:"fromDate"},render:a=>e.jsx(l,{defaultValues:{fromDate:"2013-08-12",toDate:"2013-08-20"},children:e.jsx(n,{...a})})},E={args:{labelText:"Flight Dates",mode:"range",name:"singleDate"},render:a=>e.jsx(l,{children:e.jsx(n,{...a})})},v={args:{labelText:"Month",mode:"month",name:"month"},render:a=>e.jsx(l,{defaultValues:{month:"2013-08"},children:e.jsx(n,{...a})})},P={args:{isClearable:!0,labelText:"Departure Date",name:"singleDate"},render:a=>e.jsx(l,{defaultValues:{singleDate:"2013-08-12"},children:e.jsx(n,{...a})})},A={args:{labelText:"Departure Date",max:"2013-08-20",min:"2013-08-05",name:"singleDate"},render:a=>e.jsx(l,{defaultValues:{singleDate:"2013-08-12"},children:e.jsx(n,{...a})})},w={args:{labelText:"Departure Date",name:"singleDate",size:"sm"},render:a=>e.jsx(l,{defaultValues:{singleDate:"2013-08-12"},children:e.jsx(n,{...a})})},R={args:{isRequired:!0,labelText:"Departure Date",name:"singleDate"},render:a=>{const u=ve({defaultValues:Ae});return u.setError("singleDate",{message:"Please select a date"}),e.jsx(Pe,{className:"flex h-96 w-72 flex-col",methods:u,onFormSubmit:()=>null,children:e.jsx(n,{...a})})}};var $,J,Y;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    labelText: 'Departure Date',
    name: 'singleDate'
  },
  render: args => <FormWrapper>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(Y=(J=j.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var Z,K,Q;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    labelText: 'Departure Date',
    name: 'singleDate'
  },
  render: args => <FormWrapper defaultValues={{
    singleDate: '2013-08-12'
  }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(Q=(K=V.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,ee,ae;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    labelText: 'Departure',
    mode: 'datetime',
    name: 'dateTime'
  },
  render: args => <FormWrapper defaultValues={{
    dateTime: '2013-08-12T14:30'
  }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(ae=(ee=S.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,se;W.parameters={...W.parameters,docs:{...(re=W.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    isClearable: true,
    labelText: 'Departure',
    mode: 'datetime',
    name: 'dateTime',
    showSeconds: true,
    timeLabel: 'Departure time'
  },
  render: args => <FormWrapper defaultValues={{
    dateTime: '2013-08-12T14:30:45'
  }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(se=(te=W.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,oe,le,ie,me;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(le=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:le.source},description:{story:"Two months are shown side by side from 40rem up, and one below it.",...(me=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:me.description}}};var de,ue,ce;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    labelText: 'Flight Dates',
    mode: 'range',
    name: 'singleDate'
  },
  render: args => <FormWrapper>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(ce=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var pe,ge,De;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(De=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:De.source}}};var fe,he,xe;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(xe=(he=P.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var Te,be,Fe;A.parameters={...A.parameters,docs:{...(Te=A.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Fe=(be=A.parameters)==null?void 0:be.docs)==null?void 0:Fe.source}}};var ye,je,Ve;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ve=(je=w.parameters)==null?void 0:je.docs)==null?void 0:Ve.source}}};var Se,We,Ee;R.parameters={...R.parameters,docs:{...(Se=R.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ee=(We=R.parameters)==null?void 0:We.docs)==null?void 0:Ee.source}}};const or=["SingleDate","WithDefaultValue","DateAndTime","DateAndTimeWithSeconds","DateRangeWithTwoFields","DateRangeAsObject","SingleMonth","Clearable","WithMinAndMax","Small","WithError"];export{P as Clearable,S as DateAndTime,W as DateAndTimeWithSeconds,E as DateRangeAsObject,h as DateRangeWithTwoFields,j as SingleDate,v as SingleMonth,w as Small,V as WithDefaultValue,R as WithError,A as WithMinAndMax,or as __namedExportsOrder,nr as default};
