import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as n,E as t,S as m,W as p}from"./Icons-Cofxgy3z.js";import{c as I}from"./index-lhGYx47h.js";import{B as j}from"./Button-D0Yf2K26.js";import"./index-DRjF_FHU.js";const o=({actionButtons:r,className:L,color:g,dash:$,description:s,icon:x,iconClassName:G,onDismiss:h,outline:H,soft:J,title:K,...M})=>e.jsxs("div",{className:I("alert relative",g&&`alert-${g}`,J&&"alert-soft",H&&"alert-outline",$&&"alert-dash",L),role:"alert",...M,children:[x!==void 0?e.jsx(x,{className:I("h-6 w-6 shrink-0 stroke-current",G)}):null,e.jsxs("span",{children:[e.jsx("h3",{className:s!=null&&s.length?"font-bold":void 0,children:K}),s!=null&&s.length?e.jsx("div",{className:"text-xs",children:s}):null]}),r?e.jsx("div",{className:"flex flex-wrap gap-1",children:r.map(({id:Q,label:U,...V})=>e.jsx(j,{"aria-label":U,...V},Q))}):null,h?e.jsx(j,{className:"absolute right-0 top-0 mr-[-2px] mt-[-2px] font-bold",color:"ghost",onClick:h,shape:"circle",size:"xs",children:"✕"}):null]});o.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{actionButtons:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"({ id: string; label: string } & ButtonProps)[]"},description:""},color:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof ALERT_COLORS)[number]"},description:""},dash:{required:!1,tsType:{name:"boolean"},description:""},description:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"FC",elements:[{name:"ComponentProps",elements:[{name:"literal",value:"'svg'"}],raw:"ComponentProps<'svg'>"}],raw:"FC<ComponentProps<'svg'>>"},description:""},iconClassName:{required:!1,tsType:{name:"string"},description:""},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},outline:{required:!1,tsType:{name:"boolean"},description:""},soft:{required:!1,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"string"},description:""}},composes:["Omit"]};const oe={title:"Alert",component:o},l={args:{className:"w-full",color:"info",icon:n,title:"Alert Title"}},i={args:{},render:r=>e.jsxs("div",{className:"flex flex-1 flex-col gap-2",children:[e.jsx(o,{...r,title:"Default"}),e.jsx(o,{...r,color:"info",icon:n,title:"Info"}),e.jsx(o,{...r,color:"success",icon:m,title:"Success"}),e.jsx(o,{...r,color:"warning",icon:p,title:"Warning"}),e.jsx(o,{...r,color:"error",icon:t,title:"Error"})]})},c={args:{className:"w-full",color:"info",icon:n,title:"Alert Title",description:"This is a description for this alert."}},a={args:{className:"w-full",color:"error",icon:t,onDismiss:()=>{},title:"Error",description:"This is a description for this error.",actionButtons:[{id:"retry",label:"Retry",color:"primary",onClick:()=>null,size:"sm",children:"Retry"}]}},u={args:{},render:r=>e.jsxs("div",{className:"flex flex-1 flex-col gap-2",children:[e.jsx(o,{...r,soft:!0,title:"Default"}),e.jsx(o,{...r,soft:!0,color:"info",icon:n,title:"Info"}),e.jsx(o,{...r,soft:!0,color:"success",icon:m,title:"Success"}),e.jsx(o,{...r,soft:!0,color:"warning",icon:p,title:"Warning"}),e.jsx(o,{...r,soft:!0,color:"error",icon:t,title:"Error"})]})},f={args:{},render:r=>e.jsxs("div",{className:"flex flex-1 flex-col gap-2",children:[e.jsx(o,{...r,outline:!0,title:"Default"}),e.jsx(o,{...r,outline:!0,color:"info",icon:n,title:"Info"}),e.jsx(o,{...r,outline:!0,color:"success",icon:m,title:"Success"}),e.jsx(o,{...r,outline:!0,color:"warning",icon:p,title:"Warning"}),e.jsx(o,{...r,outline:!0,color:"error",icon:t,title:"Error"})]})},d={args:{},render:r=>e.jsxs("div",{className:"flex flex-1 flex-col gap-2",children:[e.jsx(o,{...r,dash:!0,title:"Default"}),e.jsx(o,{...r,dash:!0,color:"info",icon:n,title:"Info"}),e.jsx(o,{...r,dash:!0,color:"success",icon:m,title:"Success"}),e.jsx(o,{...r,dash:!0,color:"warning",icon:p,title:"Warning"}),e.jsx(o,{...r,dash:!0,color:"error",icon:t,title:"Error"})]})};var A,v,S;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    className: 'w-full',
    color: 'info',
    icon: InfoIcon,
    title: 'Alert Title'
  }
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var w,N,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex flex-1 flex-col gap-2">
      <Alert {...args} title="Default" />
      <Alert {...args} color="info" icon={InfoIcon} title="Info" />
      <Alert {...args} color="success" icon={SuccessIcon} title="Success" />
      <Alert {...args} color="warning" icon={WarningIcon} title="Warning" />
      <Alert {...args} color="error" icon={ErrorIcon} title="Error" />
    </div>
}`,...(y=(N=i.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var E,W,T;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    className: 'w-full',
    color: 'info',
    icon: InfoIcon,
    title: 'Alert Title',
    description: 'This is a description for this alert.'
  }
}`,...(T=(W=c.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var D,b,C;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    className: 'w-full',
    color: 'error',
    icon: ErrorIcon,
    onDismiss: () => {},
    title: 'Error',
    description: 'This is a description for this error.',
    actionButtons: [{
      id: 'retry',
      label: 'Retry',
      color: 'primary',
      onClick: () => null,
      size: 'sm',
      children: 'Retry'
    }]
  }
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var q,k,B;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex flex-1 flex-col gap-2">
      <Alert {...args} soft title="Default" />
      <Alert {...args} soft color="info" icon={InfoIcon} title="Info" />
      <Alert {...args} soft color="success" icon={SuccessIcon} title="Success" />
      <Alert {...args} soft color="warning" icon={WarningIcon} title="Warning" />
      <Alert {...args} soft color="error" icon={ErrorIcon} title="Error" />
    </div>
}`,...(B=(k=u.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var R,O,_;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex flex-1 flex-col gap-2">
      <Alert {...args} outline title="Default" />
      <Alert {...args} outline color="info" icon={InfoIcon} title="Info" />
      <Alert {...args} outline color="success" icon={SuccessIcon} title="Success" />
      <Alert {...args} outline color="warning" icon={WarningIcon} title="Warning" />
      <Alert {...args} outline color="error" icon={ErrorIcon} title="Error" />
    </div>
}`,...(_=(O=f.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var P,z,F;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex flex-1 flex-col gap-2">
      <Alert {...args} dash title="Default" />
      <Alert {...args} dash color="info" icon={InfoIcon} title="Info" />
      <Alert {...args} dash color="success" icon={SuccessIcon} title="Success" />
      <Alert {...args} dash color="warning" icon={WarningIcon} title="Warning" />
      <Alert {...args} dash color="error" icon={ErrorIcon} title="Error" />
    </div>
}`,...(F=(z=d.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};const se=["Default","WithColors","WithDescription","WithActionButtons","Soft","Outline","Dash"];export{d as Dash,l as Default,f as Outline,u as Soft,a as WithActionButtons,i as WithColors,c as WithDescription,se as __namedExportsOrder,oe as default};
