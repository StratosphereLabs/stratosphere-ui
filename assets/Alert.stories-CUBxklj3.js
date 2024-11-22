import{j as o}from"./jsx-runtime-DR9Q75dM.js";import{I as c,S as W,W as T,E as S}from"./Icons-C2hG1eOz.js";import{A as r}from"./Alert-B8kWLCv2.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";import"./Button-C8Er2sLW.js";const z={title:"Alert",component:r},n={args:{color:"info",icon:c,title:"Alert Title"}},i={args:{},render:e=>o.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[o.jsx(r,{...e,title:"Default"}),o.jsx(r,{...e,color:"info",icon:c,title:"Info"}),o.jsx(r,{...e,color:"success",icon:W,title:"Success"}),o.jsx(r,{...e,color:"warning",icon:T,title:"Warning"}),o.jsx(r,{...e,color:"error",icon:S,title:"Error"})]})},t={args:{color:"info",icon:c,title:"Alert Title",description:"This is a description for this alert."}},s={args:{color:"info",icon:c,title:"Alert Title",description:"This is a description for this alert.",actionButtons:[{id:"close","aria-label":"Close Alert",className:"mt-[-10px] mr-[-10px]",color:"ghost",onClick:()=>null,shape:"circle",size:"xs",children:"✕"},{id:"info","aria-label":"More Info",color:"neutral",onClick:()=>null,size:"xs",children:"More Info"}]}};var l,a,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    color: 'info',
    icon: InfoIcon,
    title: 'Alert Title'
  }
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var f,d,m;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex-1 flex flex-col gap-2">
      <Alert {...args} title="Default" />
      <Alert {...args} color="info" icon={InfoIcon} title="Info" />
      <Alert {...args} color="success" icon={SuccessIcon} title="Success" />
      <Alert {...args} color="warning" icon={WarningIcon} title="Warning" />
      <Alert {...args} color="error" icon={ErrorIcon} title="Error" />
    </div>
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: 'info',
    icon: InfoIcon,
    title: 'Alert Title',
    description: 'This is a description for this alert.'
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,I,A;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: 'info',
    icon: InfoIcon,
    title: 'Alert Title',
    description: 'This is a description for this alert.',
    actionButtons: [{
      id: 'close',
      'aria-label': 'Close Alert',
      className: 'mt-[-10px] mr-[-10px]',
      color: 'ghost',
      onClick: () => null,
      shape: 'circle',
      size: 'xs',
      children: '✕'
    }, {
      id: 'info',
      'aria-label': 'More Info',
      color: 'neutral',
      onClick: () => null,
      size: 'xs',
      children: 'More Info'
    }]
  }
}`,...(A=(I=s.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};const B=["Default","WithColors","WithDescription","WithActionButtons"];export{n as Default,s as WithActionButtons,i as WithColors,t as WithDescription,B as __namedExportsOrder,z as default};
