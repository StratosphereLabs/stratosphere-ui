import{j as t}from"./jsx-runtime-DiklIkkE.js";import{r as s}from"./index-DRjF_FHU.js";import{C as n,f as Z,a as $,b as ee}from"./Calendar-p8yCck4s.js";import"./index-lhGYx47h.js";import"./useValueChangeEffect-DgF92LoJ.js";import"./lodash-C1F-7-Ro.js";import"./Icons-B4n3P6JJ.js";const ue={title:"Calendar",component:n},l={render:()=>{const[e,a]=s.useState(new Date);return t.jsxs("div",{className:"flex flex-col items-center gap-2",children:[t.jsx(n,{mode:"single",onChange:a,value:e}),t.jsx("span",{className:"text-sm opacity-60",children:e!==null?Z(e):"No date selected"})]})}},u={render:()=>{const[e,a]=s.useState(new Date);return t.jsxs("div",{className:"flex flex-col items-center gap-2",children:[t.jsx(n,{mode:"datetime",onChange:a,value:e}),t.jsx("span",{className:"text-sm opacity-60",children:e!==null?$(e):"No date selected"})]})}},c={render:()=>{const[e,a]=s.useState(new Date);return t.jsx(n,{mode:"datetime",onChange:a,showSeconds:!0,timeLabel:"Departure time",value:e})}},o={render:()=>{const[e,a]=s.useState({from:null,to:null});return t.jsxs("div",{className:"flex flex-col items-center gap-2",children:[t.jsx(n,{mode:"range",onChange:a,value:e}),t.jsx("span",{className:"text-sm opacity-60",children:[e.from,e.to].map(r=>r!==null?Z(r):"…").join(" – ")})]})}},d={render:()=>{const[e,a]=s.useState(new Date(2013,7,1));return t.jsxs("div",{className:"flex flex-col items-center gap-2",children:[t.jsx(n,{mode:"month",onChange:a,value:e}),t.jsx("span",{className:"text-sm opacity-60",children:e!==null?ee(e):"No month selected"})]})}},m={render:()=>{const e=new Date,[a,r]=s.useState(e);return t.jsx(n,{max:new Date(e.getFullYear(),e.getMonth(),20),min:new Date(e.getFullYear(),e.getMonth(),5),onChange:r,value:a})}},i={render:()=>{const[e,a]=s.useState(null);return t.jsx(n,{isDateDisabled:r=>[0,6].includes(r.getDay()),onChange:a,value:e})}},p={render:()=>{const[e,a]=s.useState(new Date);return t.jsx(n,{captionLayout:"dropdown",onChange:a,value:e})}},v={render:()=>{const[e,a]=s.useState(new Date);return t.jsx(n,{onChange:a,showWeekNumber:!0,value:e})}},g={render:()=>{const[e,a]=s.useState(new Date);return t.jsx(n,{onChange:a,value:e,weekStartsOn:1})}},h={render:()=>{const[e,a]=s.useState(new Date);return t.jsx(n,{footer:t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{className:"btn btn-ghost btn-xs",onClick:()=>a(null),type:"button",children:"Clear"})}),onChange:a,value:e})}};var x,D,S;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return <div className="flex flex-col items-center gap-2">
        <Calendar mode="single" onChange={setValue} value={value} />
        <span className="text-sm opacity-60">
          {value !== null ? formatISODate(value) : 'No date selected'}
        </span>
      </div>;
  }
}`,...(S=(D=l.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var C,f,w;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return <div className="flex flex-col items-center gap-2">
        <Calendar mode="datetime" onChange={setValue} value={value} />
        <span className="text-sm opacity-60">
          {value !== null ? formatISODateTime(value) : 'No date selected'}
        </span>
      </div>;
  }
}`,...(w=(f=u.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var V,N,j;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return <Calendar mode="datetime" onChange={setValue} showSeconds timeLabel="Departure time" value={value} />;
  }
}`,...(j=(N=c.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var y,b,W,M,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<DateRange>({
      from: null,
      to: null
    });
    return <div className="flex flex-col items-center gap-2">
        <Calendar mode="range" onChange={setValue} value={value} />
        <span className="text-sm opacity-60">
          {[value.from, value.to].map(date => date !== null ? formatISODate(date) : '…').join(' – ')}
        </span>
      </div>;
  }
}`,...(W=(b=o.parameters)==null?void 0:b.docs)==null?void 0:W.source},description:{story:"Two months are shown side by side from 40rem up, and one below it.",...(k=(M=o.parameters)==null?void 0:M.docs)==null?void 0:k.description}}};var O,T,A;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date(2013, 7, 1));
    return <div className="flex flex-col items-center gap-2">
        <Calendar mode="month" onChange={setValue} value={value} />
        <span className="text-sm opacity-60">
          {value !== null ? formatMonthText(value) : 'No month selected'}
        </span>
      </div>;
  }
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var F,I,L;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const today = new Date();
    const [value, setValue] = useState<Date | null>(today);
    return <Calendar max={new Date(today.getFullYear(), today.getMonth(), 20)} min={new Date(today.getFullYear(), today.getMonth(), 5)} onChange={setValue} value={value} />;
  }
}`,...(L=(I=m.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var R,Y,E;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | null>(null);
    return <Calendar isDateDisabled={date => [0, 6].includes(date.getDay())} onChange={setValue} value={value} />;
  }
}`,...(E=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:E.source}}};var _,q,z;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return <Calendar captionLayout="dropdown" onChange={setValue} value={value} />;
  }
}`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var B,G,H;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return <Calendar onChange={setValue} showWeekNumber value={value} />;
  }
}`,...(H=(G=v.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,P;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return <Calendar onChange={setValue} value={value} weekStartsOn={1} />;
  }
}`,...(P=(K=g.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,U,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return <Calendar footer={<div className="flex justify-end">
            <button className="btn btn-ghost btn-xs" onClick={() => setValue(null)} type="button">
              Clear
            </button>
          </div>} onChange={setValue} value={value} />;
  }
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const ce=["SingleDate","DateAndTime","DateAndTimeWithSeconds","DateRangeSelection","SingleMonth","WithMinAndMax","WithDisabledWeekends","WithDropdownNavigation","WithWeekNumbers","StartingOnMonday","WithFooter"];export{u as DateAndTime,c as DateAndTimeWithSeconds,o as DateRangeSelection,l as SingleDate,d as SingleMonth,g as StartingOnMonday,i as WithDisabledWeekends,p as WithDropdownNavigation,h as WithFooter,m as WithMinAndMax,v as WithWeekNumbers,ce as __namedExportsOrder,ue as default};
