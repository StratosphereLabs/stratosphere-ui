import{j as e}from"./jsx-runtime-DiklIkkE.js";import{M as n,a}from"./MenuItem-BBhh-GbJ.js";import"./index-DRjF_FHU.js";import"./index-lhGYx47h.js";import"./Icons-Cofxgy3z.js";const b={title:"MenuItem",component:n},l={args:{},render:s=>e.jsxs("div",{className:"flex w-[200px] flex-col gap-4",children:[e.jsx(a,{className:"w-full rounded-box bg-base-100 p-2",children:e.jsx(n,{...s,children:"Default"})}),e.jsx(a,{className:"w-full rounded-box bg-base-100 p-2",children:e.jsx(n,{active:!0,...s,children:"Active"})}),e.jsx(a,{className:"w-full rounded-box bg-base-100 p-2",children:e.jsx(n,{disabled:!0,...s,children:"Disabled"})}),e.jsx(a,{className:"w-full rounded-box bg-base-100 p-2",children:e.jsx(n,{selected:!0,...s,children:"Selected"})})]})};var r,u,d;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {},
  render: args => <div className="flex w-[200px] flex-col gap-4">
      <Menu className="w-full rounded-box bg-base-100 p-2">
        <MenuItem {...args}>Default</MenuItem>
      </Menu>
      <Menu className="w-full rounded-box bg-base-100 p-2">
        <MenuItem active {...args}>
          Active
        </MenuItem>
      </Menu>
      <Menu className="w-full rounded-box bg-base-100 p-2">
        <MenuItem disabled {...args}>
          Disabled
        </MenuItem>
      </Menu>
      <Menu className="w-full rounded-box bg-base-100 p-2">
        <MenuItem selected {...args}>
          Selected
        </MenuItem>
      </Menu>
    </div>
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const x=["Default"];export{l as Default,x as __namedExportsOrder,b as default};
