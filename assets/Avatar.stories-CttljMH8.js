import{j as e}from"./jsx-runtime-DiklIkkE.js";import{c as h}from"./index-lhGYx47h.js";import"./index-DRjF_FHU.js";const Z={sm:"w-8",md:"w-16",lg:"w-20",xl:"w-32"},r=({alt:s,className:u,isOffline:g,isOnline:t,placeholderClassName:f,placeholderText:a,ringColor:x,shapeClassName:L,size:_,src:v,...M})=>e.jsx("div",{className:h("avatar",g&&"avatar-offline",t&&"avatar-online",a!==void 0&&"avatar-placeholder",u),...M,children:e.jsxs("div",{className:h(_&&Z[_],x&&`rounded-full ring ring-offset-2 ring-offset-base-100 ring-${x}`,a&&"bg-neutral text-neutral-content",L),children:[v!==void 0?e.jsx("img",{src:v,alt:s}):null,a!==void 0?e.jsx("span",{className:f,children:a}):null]})});r.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{alt:{required:!1,tsType:{name:"string"},description:""},isOffline:{required:!1,tsType:{name:"boolean"},description:""},isOnline:{required:!1,tsType:{name:"boolean"},description:""},placeholderClassName:{required:!1,tsType:{name:"string"},description:""},placeholderText:{required:!1,tsType:{name:"string"},description:""},ringColor:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof COLORS)[number]"},description:""},shapeClassName:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof AvatarSizes)[number]"},description:""},src:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const V=({children:s,className:u,countSize:g,remainingCount:t,space:f=8,...a})=>e.jsxs("div",{className:h("avatar-group",`-space-x-${f}`,u),role:"group",...a,children:[s,t?e.jsx(r,{size:g??"md",placeholderText:`+${t}`}):null]});V.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{countSize:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof AvatarSizes)[number]"},description:""},remainingCount:{required:!1,tsType:{name:"number"},description:""},space:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}}}};const Q={title:"Avatar",component:r},n={args:{src:"https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg"}},i={args:{shapeClassName:"rounded-full",src:"https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg"}},o={args:{shapeClassName:"rounded",src:"https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg"},render:s=>e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(r,{...s,size:"xl"}),e.jsx(r,{...s,size:"lg"}),e.jsx(r,{...s,size:"md"}),e.jsx(r,{...s,size:"sm"})]})},p={args:{ringColor:"primary",src:"https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg"}},m={args:{isOnline:!0,shapeClassName:"rounded-full",src:"https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg"}},l={args:{isOffline:!0,shapeClassName:"rounded-full",src:"https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg"}},c={args:{isOffline:!0,shapeClassName:"rounded-full",placeholderText:"ES"}},d={args:{shapeClassName:"rounded",size:"md",src:"https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg"},render:s=>e.jsxs(V,{remainingCount:99,children:[e.jsx(r,{...s}),e.jsx(r,{...s}),e.jsx(r,{...s}),e.jsx(r,{...s})]})};var j,T,b;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg'
  }
}`,...(b=(T=n.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var q,w,A;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    shapeClassName: 'rounded-full',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg'
  }
}`,...(A=(w=i.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var N,S,y;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    shapeClassName: 'rounded',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg'
  },
  render: args => <div className="flex flex-row items-center gap-2">
      <Avatar {...args} size="xl" />
      <Avatar {...args} size="lg" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="sm" />
    </div>
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var C,k,z;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ringColor: 'primary',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg'
  }
}`,...(z=(k=p.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var O,B,F;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    isOnline: true,
    shapeClassName: 'rounded-full',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg'
  }
}`,...(F=(B=m.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var X,W,R;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    isOffline: true,
    shapeClassName: 'rounded-full',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg'
  }
}`,...(R=(W=l.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var G,E,I;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    isOffline: true,
    shapeClassName: 'rounded-full',
    placeholderText: 'ES'
  }
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var P,$,D;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    shapeClassName: 'rounded',
    size: 'md',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg'
  },
  render: args => <AvatarGroup remainingCount={99}>
      <Avatar {...args} />
      <Avatar {...args} />
      <Avatar {...args} />
      <Avatar {...args} />
    </AvatarGroup>
}`,...(D=($=d.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};const U=["Default","Rounded","Sizes","WithRing","WithOnlineStatus","WithOfflineStatus","WithPlaceholderText","WithAvatarGroup"];export{n as Default,i as Rounded,o as Sizes,d as WithAvatarGroup,l as WithOfflineStatus,m as WithOnlineStatus,c as WithPlaceholderText,p as WithRing,U as __namedExportsOrder,Q as default};
