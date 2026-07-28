import{j as a}from"./jsx-runtime-DiklIkkE.js";import{r as s}from"./index-DRjF_FHU.js";import{C as n,f as Y,a as E}from"./Calendar-BK__IhI_.js";import"./index-lhGYx47h.js";import"./useValueChangeEffect-DgF92LoJ.js";import"./lodash-C1F-7-Ro.js";import"./Icons-D3_tvXUy.js";const G={title:"Calendar",component:n},l={render:()=>{const[e,t]=s.useState(new Date);return a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx(n,{mode:"single",onChange:t,value:e}),a.jsx("span",{className:"text-sm opacity-60",children:e!==null?Y(e):"No date selected"})]})}},o={render:()=>{const[e,t]=s.useState({from:null,to:null});return a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx(n,{mode:"range",onChange:t,value:e}),a.jsx("span",{className:"text-sm opacity-60",children:[e.from,e.to].map(r=>r!==null?Y(r):"…").join(" – ")})]})}},u={render:()=>{const[e,t]=s.useState(new Date(2013,7,1));return a.jsxs("div",{className:"flex flex-col items-center gap-2",children:[a.jsx(n,{mode:"month",onChange:t,value:e}),a.jsx("span",{className:"text-sm opacity-60",children:e!==null?E(e):"No month selected"})]})}},c={render:()=>{const e=new Date,[t,r]=s.useState(e);return a.jsx(n,{max:new Date(e.getFullYear(),e.getMonth(),20),min:new Date(e.getFullYear(),e.getMonth(),5),onChange:r,value:t})}},d={render:()=>{const[e,t]=s.useState(null);return a.jsx(n,{isDateDisabled:r=>[0,6].includes(r.getDay()),onChange:t,value:e})}},m={render:()=>{const[e,t]=s.useState(new Date);return a.jsx(n,{onChange:t,value:e,weekStartsOn:1})}},i={render:()=>{const[e,t]=s.useState(new Date);return a.jsx(n,{footer:a.jsx("div",{className:"flex justify-end",children:a.jsx("button",{className:"btn btn-ghost btn-xs",onClick:()=>t(null),type:"button",children:"Clear"})}),onChange:t,value:e})}};var p,g,x;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return <div className="flex flex-col items-center gap-2">
        <Calendar mode="single" onChange={setValue} value={value} />
        <span className="text-sm opacity-60">
          {value !== null ? formatISODate(value) : 'No date selected'}
        </span>
      </div>;
  }
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,h,D;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(D=(h=o.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var S,f,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date(2013, 7, 1));
    return <div className="flex flex-col items-center gap-2">
        <Calendar mode="month" onChange={setValue} value={value} />
        <span className="text-sm opacity-60">
          {value !== null ? formatMonthText(value) : 'No month selected'}
        </span>
      </div>;
  }
}`,...(C=(f=u.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var V,j,y;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const today = new Date();
    const [value, setValue] = useState<Date | null>(today);
    return <Calendar max={new Date(today.getFullYear(), today.getMonth(), 20)} min={new Date(today.getFullYear(), today.getMonth(), 5)} onChange={setValue} value={value} />;
  }
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var N,w,b;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | null>(null);
    return <Calendar isDateDisabled={date => [0, 6].includes(date.getDay())} onChange={setValue} value={value} />;
  }
}`,...(b=(w=d.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var M,O,W;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return <Calendar onChange={setValue} value={value} weekStartsOn={1} />;
  }
}`,...(W=(O=m.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var k,F,R;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return <Calendar footer={<div className="flex justify-end">
            <button className="btn btn-ghost btn-xs" onClick={() => setValue(null)} type="button">
              Clear
            </button>
          </div>} onChange={setValue} value={value} />;
  }
}`,...(R=(F=i.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const H=["SingleDate","DateRangeSelection","SingleMonth","WithMinAndMax","WithDisabledWeekends","StartingOnMonday","WithFooter"];export{o as DateRangeSelection,l as SingleDate,u as SingleMonth,m as StartingOnMonday,d as WithDisabledWeekends,i as WithFooter,c as WithMinAndMax,H as __namedExportsOrder,G as default};
