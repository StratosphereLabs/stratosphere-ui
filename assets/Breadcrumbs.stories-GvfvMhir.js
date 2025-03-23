import{j as e}from"./jsx-runtime-DiklIkkE.js";import{H as I,I as H}from"./Icons-Cofxgy3z.js";import{c as L}from"./index-lhGYx47h.js";import"./index-DRjF_FHU.js";const s=({className:n,items:A,...B})=>e.jsx("div",{className:L("breadcrumbs",n),...B,children:e.jsx("ul",{children:A.map(({children:v,className:S,href:i,icon:t,id:W,onClick:m})=>{const d=e.jsxs(e.Fragment,{children:[t!==void 0?e.jsx(t,{className:"h-4 w-4"}):null,v]});return e.jsx("li",{className:S,children:i!==void 0||m!==void 0?e.jsx("a",{className:"inline-flex items-center gap-2",href:i,onClick:m,children:d}):e.jsx("span",{className:"inline-flex items-center gap-2",children:d})},W)})})});s.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbsItem"}],raw:"BreadcrumbsItem[]"},description:""}},composes:["HTMLProps"]};const z={title:"Breadcrumbs",component:s},c={args:{items:[{id:"home",children:"Home"},{id:"about",children:"About"},{id:"contact",children:"Contact"}]}},o={args:{items:[{id:"home",children:"Home",onClick:()=>{}},{id:"about",children:"About",onClick:()=>{}},{id:"contact",children:"Contact",onClick:()=>{}}]}},a={args:{items:[{id:"home",children:"Home",icon:I,onClick:()=>{}},{id:"about",children:"About",icon:H,onClick:()=>{}},{id:"contact",children:"Contact",onClick:()=>{}}]}},r={args:{items:[{id:"home",children:"Home",icon:I,onClick:()=>{}},{id:"about",children:"About",icon:H,onClick:()=>{}},{id:"contact",children:"Contact",onClick:()=>{}}]},render:n=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(s,{...n,className:"text-xs"}),e.jsx(s,{...n,className:"text-sm"}),e.jsx(s,{...n,className:"text-md"}),e.jsx(s,{...n,className:"text-lg"}),e.jsx(s,{...n,className:"text-xl"})]})};var l,u,h;c.parameters={...c.parameters,docs:{...(l=c.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      children: 'Home'
    }, {
      id: 'about',
      children: 'About'
    }, {
      id: 'contact',
      children: 'Contact'
    }]
  }
}`,...(h=(u=c.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var p,x,b;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      children: 'Home',
      onClick: () => {}
    }, {
      id: 'about',
      children: 'About',
      onClick: () => {}
    }, {
      id: 'contact',
      children: 'Contact',
      onClick: () => {}
    }]
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var C,g,k;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      children: 'Home',
      icon: HomeIcon,
      onClick: () => {}
    }, {
      id: 'about',
      children: 'About',
      icon: InfoIcon,
      onClick: () => {}
    }, {
      id: 'contact',
      children: 'Contact',
      onClick: () => {}
    }]
  }
}`,...(k=(g=a.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var N,f,j;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      children: 'Home',
      icon: HomeIcon,
      onClick: () => {}
    }, {
      id: 'about',
      children: 'About',
      icon: InfoIcon,
      onClick: () => {}
    }, {
      id: 'contact',
      children: 'Contact',
      onClick: () => {}
    }]
  },
  render: args => <div className="flex flex-col gap-2">
      <Breadcrumbs {...args} className="text-xs" />
      <Breadcrumbs {...args} className="text-sm" />
      <Breadcrumbs {...args} className="text-md" />
      <Breadcrumbs {...args} className="text-lg" />
      <Breadcrumbs {...args} className="text-xl" />
    </div>
}`,...(j=(f=r.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const D=["Default","WithLinks","WithIconsAndLinks","WithSizes"];export{c as Default,a as WithIconsAndLinks,o as WithLinks,r as WithSizes,D as __namedExportsOrder,z as default};
