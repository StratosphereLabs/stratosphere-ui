import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{c as i}from"./index-lhGYx47h.js";import"./index-DRjF_FHU.js";const m=({bordered:a,className:r,compact:w,imageFull:D,normal:E,side:H,...L})=>e.jsx("div",{"data-testid":"card",className:i("card",a&&"card-bordered",w&&"card-compact",D&&"image-full",E&&"card-normal",H&&"card-side",r),...L});m.__docgenInfo={description:"",methods:[],displayName:"Card",props:{bordered:{required:!1,tsType:{name:"boolean"},description:""},compact:{required:!1,tsType:{name:"boolean"},description:""},imageFull:{required:!1,tsType:{name:"boolean"},description:""},normal:{required:!1,tsType:{name:"boolean"},description:""},side:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLAttributes"]};const p=({className:a,...r})=>e.jsx("div",{className:i("card-actions justify-end",a),...r});p.__docgenInfo={description:"",methods:[],displayName:"CardActions"};const l=({className:a,...r})=>e.jsx("div",{className:i("card-body",a),...r});l.__docgenInfo={description:"",methods:[],displayName:"CardBody"};const u=({className:a,...r})=>e.jsx("h2",{className:i("card-title",a),...r});u.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};const z={title:"Card",component:m},g={render:a=>e.jsx(m,{className:"w-64 bg-base-100",...a,children:e.jsxs(l,{children:[e.jsx(u,{children:"Card Title"}),e.jsx("p",{children:"Card Body"}),e.jsx(p,{})]})})},s={...g,args:{}},o={...g,args:{bordered:!0}},t={...g,args:{compact:!0}},h={render:a=>e.jsxs(m,{className:"w-64 bg-base-100",...a,children:[e.jsx("figure",{children:e.jsx("img",{src:"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",alt:"Shoes"})}),e.jsxs(l,{children:[e.jsx(u,{children:"Card Title"}),e.jsx("p",{children:"Card Body"}),e.jsx(p,{})]})]})},d={...h,args:{}},c={...h,args:{imageFull:!0}},n={...h,args:{side:!0}};var j,x,C;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...CardTemplate,
  args: {}
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var T,b,f;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...CardTemplate,
  args: {
    bordered: true
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,I,N;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...CardTemplate,
  args: {
    compact: true
  }
}`,...(N=(I=t.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var W,_,S;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  ...WithImageTemplate,
  args: {}
}`,...(S=(_=d.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var B,q,k;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...WithImageTemplate,
  args: {
    imageFull: true
  }
}`,...(k=(q=c.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var v,A,F;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...WithImageTemplate,
  args: {
    side: true
  }
}`,...(F=(A=n.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const G=["Default","Bordered","Compact","WithImage","WithBackgroundImage","WithSideImage"];export{o as Bordered,t as Compact,s as Default,c as WithBackgroundImage,d as WithImage,n as WithSideImage,G as __namedExportsOrder,z as default};
