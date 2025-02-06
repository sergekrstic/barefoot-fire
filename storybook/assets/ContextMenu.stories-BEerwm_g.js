import{j as e}from"./jsx-runtime-CLpGMVip.js";import{C as r,a as s}from"./ContextMenu.component-C5rbgKDU.js";import"./index-BBGmM4Ve.js";import"./floating-ui.react-40E8SCbq.js";import"./index-DNXr5OWd.js";import"./index-CnEmR3yp.js";const c=()=>null,b={component:c},t="flex w-full justify-between rounded px-2 py-0.5 outline-none focus:bg-violet-600 focus:text-slate-100 active:bg-violet-600 active:text-slate-100 disabled:text-slate-400",a={render:()=>e.jsxs("div",{children:[e.jsx("p",{children:"Right click on the page!"}),e.jsxs(r,{className:"rounded-lg border border-slate-300 bg-slate-200 p-1 text-slate-800 outline-none drop-shadow-lg",children:[e.jsx(s,{className:t,label:"Back",onClick:()=>console.log("Back")}),e.jsx(s,{className:t,label:"Forward"}),e.jsx(s,{className:t,label:"Reload",disabled:!0}),e.jsx(s,{className:t,label:"Save As..."}),e.jsx(s,{className:t,label:"Print"})]})]})};var l,o,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div>
      <p>Right click on the page!</p>
      <ContextMenu className="rounded-lg border border-slate-300 bg-slate-200 p-1 text-slate-800 outline-none drop-shadow-lg">
        <ContextMenuItem className={itemClasses} label="Back" onClick={() => console.log('Back')} />
        <ContextMenuItem className={itemClasses} label="Forward" />
        <ContextMenuItem className={itemClasses} label="Reload" disabled />
        <ContextMenuItem className={itemClasses} label="Save As..." />
        <ContextMenuItem className={itemClasses} label="Print" />
      </ContextMenu>
    </div>
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const C=["Basic"];export{a as Basic,C as __namedExportsOrder,b as default};
