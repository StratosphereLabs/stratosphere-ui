import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{c}from"./index-lhGYx47h.js";import"./index-DRjF_FHU.js";const E={sm:"h-8 w-8",md:"h-16 w-16",lg:"h-20 w-20",xl:"h-32 w-32"},r=({alt:e,className:B,hasRing:F,isOffline:O,isOnline:X,placeholderClassName:y,placeholderText:p,shapeClassName:C,size:R,src:l,...W})=>s.jsx("div",{className:c("avatar",O&&"offline",X&&"online",p!==void 0&&"placeholder",B),...W,children:s.jsxs("div",{className:c(E[R??"md"],F&&"ring-offset-base-100 rounded-full ring ring-offset-2",C),children:[l!==void 0?s.jsx("img",{src:l,alt:e}):null,p!==void 0?s.jsx("span",{className:y,children:p}):null]})});r.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{alt:{required:!1,tsType:{name:"string"},description:""},hasRing:{required:!1,tsType:{name:"boolean"},description:""},isOffline:{required:!1,tsType:{name:"boolean"},description:""},isOnline:{required:!1,tsType:{name:"boolean"},description:""},placeholderClassName:{required:!1,tsType:{name:"string"},description:""},placeholderText:{required:!1,tsType:{name:"string"},description:""},shapeClassName:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof AvatarSizes)[number]"},description:""},src:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const P={title:"Avatar",component:r},a={args:{src:"https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg"}},t={args:{shapeClassName:"rounded-full",src:"https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg"}},i={args:{shapeClassName:"rounded",src:"https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg"},render:e=>s.jsxs("div",{className:"flex flex-row gap-2 items-center",children:[s.jsx(r,{...e,size:"xl"}),s.jsx(r,{...e,size:"lg"}),s.jsx(r,{...e,size:"md"}),s.jsx(r,{...e,size:"sm"})]})},o={args:{hasRing:!0,src:"https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg"}},n={args:{isOnline:!0,shapeClassName:"rounded-full",src:"https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg"}},m={args:{isOffline:!0,shapeClassName:"rounded-full",src:"https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg"}};var d,g,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg'
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,h,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    shapeClassName: 'rounded-full',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg'
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var _,j,q;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    shapeClassName: 'rounded',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg'
  },
  render: args => <div className="flex flex-row gap-2 items-center">
      <Avatar {...args} size="xl" />
      <Avatar {...args} size="lg" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="sm" />
    </div>
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var T,w,b;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    hasRing: true,
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg'
  }
}`,...(b=(w=o.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var v,N,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isOnline: true,
    shapeClassName: 'rounded-full',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg'
  }
}`,...(S=(N=n.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var k,z,A;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    isOffline: true,
    shapeClassName: 'rounded-full',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg'
  }
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const V=["Default","Rounded","Sizes","WithRing","WithOnlineStatus","WithOfflineStatus"];export{a as Default,t as Rounded,i as Sizes,m as WithOfflineStatus,n as WithOnlineStatus,o as WithRing,V as __namedExportsOrder,P as default};
