import{H as A,I as N}from"./Icons-CIT3nYro.js";import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{c as B}from"./index-lhGYx47h.js";import"./index-DRjF_FHU.js";const k=({className:x,items:g,...I})=>n.jsx("div",{className:B("breadcrumbs text-sm",x),...I,children:n.jsx("ul",{children:g.map(({children:f,className:H,href:s,icon:r,id:j,onClick:i})=>{const t=n.jsxs(n.Fragment,{children:[r!==void 0?n.jsx(r,{className:"h-4 w-4"}):null,f]});return n.jsx("li",{className:H,children:s!==void 0||i!==void 0?n.jsx("a",{className:"inline-flex items-center gap-2",href:s,onClick:i,children:t}):n.jsx("span",{className:"inline-flex items-center gap-2",children:t})},j)})})});k.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbsItem"}],raw:"BreadcrumbsItem[]"},description:""}},composes:["HTMLProps"]};const y={title:"Breadcrumbs",component:k},e={args:{items:[{id:"home",children:"Home"},{id:"about",children:"About"},{id:"contact",children:"Contact"}]}},o={args:{items:[{id:"home",children:"Home",onClick:()=>{}},{id:"about",children:"About",onClick:()=>{}},{id:"contact",children:"Contact",onClick:()=>{}}]}},c={args:{items:[{id:"home",children:"Home",icon:A,onClick:()=>{}},{id:"about",children:"About",icon:N,onClick:()=>{}},{id:"contact",children:"Contact",onClick:()=>{}}]}};var a,d,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,h,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var p,b,C;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(C=(b=c.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const E=["Default","WithLinks","WithIconsAndLinks"];export{e as Default,c as WithIconsAndLinks,o as WithLinks,E as __namedExportsOrder,y as default};
