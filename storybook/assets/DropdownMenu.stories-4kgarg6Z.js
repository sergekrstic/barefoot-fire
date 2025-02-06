import{j as e}from"./jsx-runtime-CLpGMVip.js";import{M as r,a as t}from"./DropdownMenu.component-BiHVZO5i.js";import"./index-BBGmM4Ve.js";import"./floating-ui.react-40E8SCbq.js";import"./index-DNXr5OWd.js";import"./index-CnEmR3yp.js";const I={component:r},u="rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-200 hover:text-slate-900 data-[open]:bg-slate-200 data-[open]:text-slate-900",l="bg-slate-200 py-1 outline-none rounded-md text-slate-800",s="min-w-28 flex w-full items-center justify-between outline-none focus:bg-violet-600 focus:text-slate-100 px-4 py-1",a={args:{label:"Menu",menuButtonClasses:u,menuContainerClasses:l,children:e.jsxs(e.Fragment,{children:[e.jsx(t,{className:s,label:"Item 1"}),e.jsx("div",{className:"px-4 py-1 text-slate-800",children:"Non-menu item"}),e.jsxs(r,{menuContainerClasses:l,menuItemClasses:s,label:"Item 2",children:[e.jsx(t,{className:s,label:"Sub-item 1"}),e.jsx(t,{className:s,label:"Sub-item 2"})]}),e.jsx(t,{className:s,label:"Item 3"})]})}};var m,n,o;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Menu',
    // label: <div>Hello</div>, // <-- Typescript error: Type 'string' is not assignable to type 'ReactNode'
    menuButtonClasses,
    menuContainerClasses,
    children: <>
        <MenuItem className={menuItemClasses} label="Item 1" />
        <div className="px-4 py-1 text-slate-800">Non-menu item</div>
        <Menu menuContainerClasses={menuContainerClasses} menuItemClasses={menuItemClasses} label="Item 2">
          <MenuItem className={menuItemClasses} label="Sub-item 1" />
          <MenuItem className={menuItemClasses} label="Sub-item 2" />
        </Menu>
        <MenuItem className={menuItemClasses} label="Item 3" />
      </>
  }
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const C=["Default"];export{a as Default,C as __namedExportsOrder,I as default};
