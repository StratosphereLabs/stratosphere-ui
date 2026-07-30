import{j as a}from"./jsx-runtime-DiklIkkE.js";import{a as Wa,d as ka,c as La,b as Na,u as ra,F as ta}from"./FormLabelText-CKiZ0bQS.js";import"./FormCheckbox-CofDc0ZL.js";import"./FormControl-Cg9MfuLQ.js";import{F as qa}from"./FormError-DCh6zGQK.js";import"./FormFileInput-DZxP-Ct9.js";import"./FormRadioGroupOption-CE5PN_Z4.js";import"./FormRangeSlider-DLPhn1Wz.js";import"./FormTextarea-TxRBtJWi.js";import"./FormToggleSwitch-BRqfyGoT.js";import{c as b}from"./index-lhGYx47h.js";import{r as d}from"./index-DRjF_FHU.js";import{u as Ma}from"./useFieldColor-BLag0axt.js";import{u as _a}from"./useValueChangeEffect-DgF92LoJ.js";import{B as pe}from"./Button-DlMGMNp9.js";import{b as Ca}from"./Icons-B4n3P6JJ.js";import{p as x,c as Oa,d as Ua,b as Ia,e as Ha,g as fe,D as $a,h as za,i as Ba,j as Ga,O as Ka,k as ge,C as E,l as Ya,R as Ja,m as Za,n as Qa,s as Xa,o as er,q as ar}from"./Calendar-p8yCck4s.js";import{l as rr,S as tr,R as nr}from"./popover-BZdC9fb8.js";import"./lodash-C1F-7-Ro.js";import"./label-BHy4_Co_.js";import"./keyboard-CkwPyo54.js";import"./description-BiWv9uhY.js";import"./useFocusRing-CeEfTI_f.js";import"./index-Bx0Ph3cE.js";import"./hidden-VT-llRfc.js";import"./bugs-DpEN4NTH.js";import"./focus-management-BpNHtozA.js";import"./use-resolve-button-type-BunvJ_cM.js";import"./floating-DbckstqE.js";import"./use-event-listener-B6ZzwbKe.js";import"./portal-klmoE2MD.js";import"./use-tab-direction-CP4NjNZo.js";import"./open-closed-ZYQZnB1s.js";import"./close-provider-CMV4gi-l.js";const Y={from:null,to:null},o=({anchor:r,buttonClassName:c,calendarClassName:w,captionLayout:U=Ya,className:sa,color:la,disabled:J,endName:h,fixedWeeks:oa,hideCalendarIcon:Z,hideErrorMessage:ia,inputClassName:ma,isClearable:Q,isDateDisabled:X,isRequired:ua,labelText:ee,locale:p,max:I,min:H,mode:n="single",name:u,numberOfMonths:da,onChange:s,panelClassName:ca,placeholder:pa,portal:fa,showDirty:ga,showOutsideDays:ha,showSeconds:Da,showWeekNumber:Ta,size:ae,timeLabel:ba,valueMode:xa="iso",weekStartsOn:ya})=>{const{field:{ref:Fa,value:v},fieldState:{error:A}}=Wa({name:u}),wa=ka({disabled:h===void 0,name:h??u}),{setValue:va}=La(),re=Ma(u,ga)??la,D=n!=="range"?Y:h!==void 0?{from:x(v),to:x(wa)}:Oa(v),f=n==="range"?null:n==="datetime"?Ua(v):x(v),te=({from:e,to:t})=>e!==null||t!==null?[e,t].map(l=>l!==null?fe(l,p):"…").join(Ja):null,ne=e=>e!==null?n==="month"?Ia(e,p):n==="datetime"?Ha(e,p):fe(e,p):null,j=n==="range"?te(D):ne(f),T=(e,t)=>{va(e,t,{shouldDirty:!0,shouldTouch:!0})},g=e=>Xa(e,n,xa),$=({from:e,to:t})=>{if(h!==void 0){T(u,g(e)),T(h,g(t));return}T(u,{from:g(e),to:g(t)})},Aa=(e,t)=>{$(e),s==null||s(e),e.from!==null&&e.to!==null&&t()},V=(e,t)=>{T(u,g(e)),s==null||s(e),t==null||t()},se=()=>{if(n==="range"){$(Y),s==null||s(Y);return}T(u,g(null)),s==null||s(null)},ja=e=>{se(),e()},P=d.useRef(null),le=d.useRef(null),oe=d.useRef(!1),S=d.useRef(!1),[ie,z]=d.useState(()=>j??"");_a(j??"",()=>{if(S.current){S.current=!1;return}z(j??"")});const Va=d.useMemo(()=>x(H),[H]),Pa=d.useMemo(()=>x(I),[I]),B=e=>{const t={isDateDisabled:X,max:Pa,min:Va};return n==="month"?er(e,t):ar(e,t)},me={locale:p,mode:n,referenceDate:n==="range"?D.from:f},Sa=n==="range"?D.from!==null||D.to!==null:f!==null,ue=(e,t)=>{if(e.trim()==="")return Sa&&se(),"";if(n==="range"){const m=Za(e,me);return m===null||m.from===null||m.to===null&&!t||B(m.from)||m.to!==null&&B(m.to)?null:($(m),s==null||s(m),te(m))}const l=Qa(e,me);return l===null||B(l)?null:(V(l),ne(l))},G=()=>{var e;return((e=P.current)==null?void 0:e.getAttribute("aria-expanded"))==="true"},de=()=>{var e,t;G()||((e=P.current)==null||e.click(),(t=le.current)==null||t.focus())},Ea=e=>{var t;if(e.key==="ArrowDown"){e.preventDefault(),de();return}e.key==="Enter"&&G()&&(e.preventDefault(),(t=P.current)==null||t.click())},Ra=pa??(n==="range"?$a:n==="month"?za:n==="datetime"?Ba:Ga),ce={captionLayout:U,className:w,isDateDisabled:X,locale:p,max:I,min:H},K={...ce,fixedWeeks:oa,numberOfMonths:da,showOutsideDays:ha,showWeekNumber:Ta,weekStartsOn:ya};return a.jsxs("fieldset",{className:b("fieldset py-0",sa),children:[ee!==void 0?a.jsx(Na,{isRequired:ua,children:ee}):null,a.jsxs(rr,{className:"relative w-full",children:[a.jsxs("div",{className:b("input w-full",re&&`input-${re}`,ae&&`input-${ae}`,c),children:[a.jsx("input",{"aria-keyshortcuts":"ArrowDown",autoComplete:"off",className:b("font-normal",ma),disabled:J,onBlur:()=>{S.current=!1;const e=ue(ie,!0);z(e??j??"")},onChange:e=>{S.current=!0,z(e.target.value),ue(e.target.value,!1)},onClick:()=>{oe.current||de()},onKeyDown:Ea,onPointerDown:()=>{oe.current=G()},placeholder:Ra,ref:e=>{le.current=e,Fa(e)},type:"text",value:ie}),a.jsx(tr,{"aria-label":Ka,className:b("cursor-pointer opacity-60",Z===!0&&"sr-only"),disabled:J,ref:P,tabIndex:Z===!0?-1:void 0,children:a.jsx(Ca,{className:"h-4 w-4 shrink-0"})})]}),a.jsx(nr,{anchor:typeof r=="object"?{...ge,...r}:r??ge,portal:fa,transition:!0,className:b("z-50 origin-top rounded-box shadow-lg transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0",ca),children:({close:e})=>{const t=Q===!0||n==="datetime"?a.jsxs("div",{className:"flex justify-end gap-2",children:[Q===!0?a.jsx(pe,{color:"ghost",onClick:()=>ja(e),size:"xs",children:"Clear"}):null,n==="datetime"?a.jsx(pe,{color:"primary",onClick:()=>e(),size:"xs",children:"Done"}):null]}):void 0;return n==="range"?a.jsx(E,{...K,footer:t,mode:"range",onChange:l=>Aa(l,e),value:D}):n==="datetime"?a.jsx(E,{...K,footer:t,mode:"datetime",onChange:l=>V(l),showSeconds:Da,timeLabel:ba,value:f}):n==="month"?a.jsx(E,{...ce,footer:t,mode:"month",onChange:l=>V(l,e),value:f}):a.jsx(E,{...K,footer:t,mode:"single",onChange:l=>V(l,e),value:f})}})]}),ia!==!0&&(A==null?void 0:A.message)!==void 0?a.jsx(qa,{children:A.message}):null]})};o.__docgenInfo={description:"A date picker field for react-hook-form, built on shadcn/ui's date picker\ncomposition of an input, a popover and a calendar, and styled by daisyUI.\nSupports selecting a single date, a date and a time, a date range or a single\nmonth, either by typing the value or by picking it from the calendar.\n\nWith the default `valueMode` of `iso`, `single` and `range` fields store\n`yyyy-MM-dd` strings, `datetime` fields store `yyyy-MM-ddTHH:mm` strings and\n`month` fields store `yyyy-MM` strings, matching the values of the native\n`date`, `datetime-local` and `month` inputs.",methods:[],displayName:"DatePicker",props:{anchor:{required:!1,tsType:{name:"union",raw:`| false
| PanelAnchorTo
| Partial<{
    /** The space between the control and the panel. */
    gap: number | string;
    /** How far the panel is nudged off its placement. */
    offset: number | string;
    /** The smallest space left between the panel and the viewport. */
    padding: number | string;
    to: PanelAnchorTo;
  }>`,elements:[{name:"literal",value:"false"},{name:"union",raw:"| AnchorPlacement\n| `${AnchorPlacement} ${AnchorAlign}`",elements:[{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},{name:"literal",value:"`${AnchorPlacement} ${AnchorAlign}`"}],required:!0},{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  /** The space between the control and the panel. */
  gap: number | string;
  /** How far the panel is nudged off its placement. */
  offset: number | string;
  /** The smallest space left between the panel and the viewport. */
  padding: number | string;
  to: PanelAnchorTo;
}`,signature:{properties:[{key:"gap",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0},description:"The space between the control and the panel."},{key:"offset",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0},description:"How far the panel is nudged off its placement."},{key:"padding",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0},description:"The smallest space left between the panel and the viewport."},{key:"to",value:{name:"union",raw:"| AnchorPlacement\n| `${AnchorPlacement} ${AnchorAlign}`",elements:[{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},{name:"literal",value:"`${AnchorPlacement} ${AnchorAlign}`"}],required:!0}}]}}],raw:`Partial<{
  /** The space between the control and the panel. */
  gap: number | string;
  /** How far the panel is nudged off its placement. */
  offset: number | string;
  /** The smallest space left between the panel and the viewport. */
  padding: number | string;
  to: PanelAnchorTo;
}>`}]},description:""},buttonClassName:{required:!1,tsType:{name:"string"},description:""},calendarClassName:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof INPUT_COLORS)[number]"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},endName:{required:!1,tsType:{name:"Path",elements:[{name:"Values"}],raw:"Path<Values>"},description:"Second form field used for the end of a range. When omitted, `range` mode\nstores its value as a `{ from, to }` object on `name` instead."},hideCalendarIcon:{required:!1,tsType:{name:"literal",value:"true"},description:""},hideErrorMessage:{required:!1,tsType:{name:"boolean"},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""},isClearable:{required:!1,tsType:{name:"boolean"},description:""},mode:{required:!1,tsType:{name:"union",raw:"'single' | 'datetime' | 'range' | 'month'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'datetime'"},{name:"literal",value:"'range'"},{name:"literal",value:"'month'"}]},description:"",defaultValue:{value:"'single'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: Date | DateRange | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | DateRange | null",elements:[{name:"Date"},{name:"DateRange"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:""},panelClassName:{required:!1,tsType:{name:"string"},description:""},portal:{required:!1,tsType:{name:"boolean"},description:""},showSeconds:{required:!1,tsType:{name:"boolean"},description:"Adds seconds to the time field of `datetime` mode."},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof INPUT_SIZES)[number]"},description:""},timeLabel:{required:!1,tsType:{name:"string"},description:"Label of the time field of `datetime` mode. Defaults to `Time`."},valueMode:{required:!1,tsType:{name:"union",raw:"'iso' | 'date'",elements:[{name:"literal",value:"'iso'"},{name:"literal",value:"'date'"}]},description:"Store the value as an ISO string (the default) or as a `Date`.",defaultValue:{value:"'iso'",computed:!1}},captionLayout:{defaultValue:{value:"'dropdown'",computed:!1},required:!1}},composes:["Omit","Pick"]};const na={dateTime:"",fromDate:"",month:"",singleDate:"",toDate:""},Or={title:"DatePicker",component:o},i=({children:r,defaultValues:c})=>{const w=ra({defaultValues:{...na,...c}}),U=w.watch();return a.jsxs(ta,{className:"flex h-96 w-72 flex-col gap-4",methods:w,onFormSubmit:()=>null,children:[r,a.jsx("pre",{className:"text-xs opacity-60",children:JSON.stringify(U,null,2)})]})},R={args:{labelText:"Departure Date",name:"singleDate"},render:r=>a.jsx(i,{children:a.jsx(o,{...r})})},W={args:{labelText:"Departure Date",name:"singleDate"},render:r=>a.jsx(i,{defaultValues:{singleDate:"2013-08-12"},children:a.jsx(o,{...r})})},k={args:{labelText:"Departure",mode:"datetime",name:"dateTime"},render:r=>a.jsx(i,{defaultValues:{dateTime:"2013-08-12T14:30"},children:a.jsx(o,{...r})})},L={args:{isClearable:!0,labelText:"Departure",mode:"datetime",name:"dateTime",showSeconds:!0,timeLabel:"Departure time"},render:r=>a.jsx(i,{defaultValues:{dateTime:"2013-08-12T14:30:45"},children:a.jsx(o,{...r})})},y={args:{endName:"toDate",labelText:"Flight Dates",mode:"range",name:"fromDate"},render:r=>a.jsx(i,{defaultValues:{fromDate:"2013-08-12",toDate:"2013-08-20"},children:a.jsx(o,{...r})})},N={args:{labelText:"Flight Dates",mode:"range",name:"singleDate"},render:r=>a.jsx(i,{children:a.jsx(o,{...r})})},q={args:{labelText:"Month",mode:"month",name:"month"},render:r=>a.jsx(i,{defaultValues:{month:"2013-08"},children:a.jsx(o,{...r})})},M={args:{isClearable:!0,labelText:"Departure Date",name:"singleDate"},render:r=>a.jsx(i,{defaultValues:{singleDate:"2013-08-12"},children:a.jsx(o,{...r})})},_={args:{labelText:"Departure Date",max:"2013-08-20",min:"2013-08-05",name:"singleDate"},render:r=>a.jsx(i,{defaultValues:{singleDate:"2013-08-12"},children:a.jsx(o,{...r})})},F={args:{captionLayout:"label",labelText:"Departure Date",name:"singleDate"},render:r=>a.jsx(i,{defaultValues:{singleDate:"2013-08-12"},children:a.jsx(o,{...r})})},C={args:{labelText:"Departure Date",name:"singleDate",size:"sm"},render:r=>a.jsx(i,{defaultValues:{singleDate:"2013-08-12"},children:a.jsx(o,{...r})})},O={args:{isRequired:!0,labelText:"Departure Date",name:"singleDate"},render:r=>{const c=ra({defaultValues:na});return c.setError("singleDate",{message:"Please select a date"}),a.jsx(ta,{className:"flex h-96 w-72 flex-col",methods:c,onFormSubmit:()=>null,children:a.jsx(o,{...r})})}};var he,De,Te;R.parameters={...R.parameters,docs:{...(he=R.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    labelText: 'Departure Date',
    name: 'singleDate'
  },
  render: args => <FormWrapper>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(Te=(De=R.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var be,xe,ye;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    labelText: 'Departure Date',
    name: 'singleDate'
  },
  render: args => <FormWrapper defaultValues={{
    singleDate: '2013-08-12'
  }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(ye=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var Fe,we,ve;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(ve=(we=k.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var Ae,je,Ve;L.parameters={...L.parameters,docs:{...(Ae=L.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ve=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Ve.source}}};var Pe,Se,Ee,Re,We;y.parameters={...y.parameters,docs:{...(Pe=y.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ee=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source},description:{story:"Two months are shown side by side from 40rem up, and one below it.",...(We=(Re=y.parameters)==null?void 0:Re.docs)==null?void 0:We.description}}};var ke,Le,Ne;N.parameters={...N.parameters,docs:{...(ke=N.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    labelText: 'Flight Dates',
    mode: 'range',
    name: 'singleDate'
  },
  render: args => <FormWrapper>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(Ne=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var qe,Me,_e;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(_e=(Me=q.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};var Ce,Oe,Ue;M.parameters={...M.parameters,docs:{...(Ce=M.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ue=(Oe=M.parameters)==null?void 0:Oe.docs)==null?void 0:Ue.source}}};var Ie,He,$e;_.parameters={..._.parameters,docs:{...(Ie=_.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...($e=(He=_.parameters)==null?void 0:He.docs)==null?void 0:$e.source}}};var ze,Be,Ge,Ke,Ye;F.parameters={...F.parameters,docs:{...(ze=F.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    captionLayout: 'label',
    labelText: 'Departure Date',
    name: 'singleDate'
  },
  render: args => <FormWrapper defaultValues={{
    singleDate: '2013-08-12'
  }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
}`,...(Ge=(Be=F.parameters)==null?void 0:Be.docs)==null?void 0:Ge.source},description:{story:"The arrows on their own, i.e. the caption of the calendar before dropdowns.",...(Ye=(Ke=F.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.description}}};var Je,Ze,Qe;C.parameters={...C.parameters,docs:{...(Je=C.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Qe=(Ze=C.parameters)==null?void 0:Ze.docs)==null?void 0:Qe.source}}};var Xe,ea,aa;O.parameters={...O.parameters,docs:{...(Xe=O.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(aa=(ea=O.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};const Ur=["SingleDate","WithDefaultValue","DateAndTime","DateAndTimeWithSeconds","DateRangeWithTwoFields","DateRangeAsObject","SingleMonth","Clearable","WithMinAndMax","WithCaptionLabel","Small","WithError"];export{M as Clearable,k as DateAndTime,L as DateAndTimeWithSeconds,N as DateRangeAsObject,y as DateRangeWithTwoFields,R as SingleDate,q as SingleMonth,C as Small,F as WithCaptionLabel,W as WithDefaultValue,O as WithError,_ as WithMinAndMax,Ur as __namedExportsOrder,Or as default};
