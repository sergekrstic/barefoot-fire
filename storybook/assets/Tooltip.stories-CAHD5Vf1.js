import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as N}from"./index-PahMPgEy.js";import{T as g,a as T,b as x,c as u}from"./Tooltip.trigger-BLwQiu7C.js";import"./floating-ui.react-DXVSm5aW.js";import"./index-jVKrJXHJ.js";import"./index-Dk70umWa.js";const y={component:g},t={render:g},o={render:()=>e.jsxs(T,{children:[e.jsx(x,{className:"bg-violet-700 px-4 py-2 text-violet-300 data-[state=open]:bg-violet-600 data-[state=open]:text-violet-200",children:"Hover"}),e.jsx(u,{className:"bg-violet-400 p-8 text-violet-800",children:"Tooltip content"})]})},r={render:()=>{const[b,n]=N.useState(!1);return e.jsx("div",{className:"App",children:e.jsxs(T,{open:b,onOpenChange:n,children:[e.jsx(x,{className:"rounded-md border border-violet-300 bg-violet-700 px-4 py-2 text-violet-200 data-[state=open]:border-violet-200 data-[state=open]:bg-violet-600",onClick:()=>n(C=>!C),children:"Click"}),e.jsx(u,{className:"rounded-lg bg-violet-400 p-8 text-violet-800",children:"Tooltip content"})]})})}};var a,s,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: TooltipBasic
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,p,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    return <Tooltip>
        <TooltipTrigger className="bg-violet-700 px-4 py-2 text-violet-300 data-[state=open]:bg-violet-600 data-[state=open]:text-violet-200">
          Hover
        </TooltipTrigger>
        <TooltipContent className="bg-violet-400 p-8 text-violet-800">Tooltip content</TooltipContent>
      </Tooltip>;
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,v;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="App">
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger className="rounded-md border border-violet-300 bg-violet-700 px-4 py-2 text-violet-200 data-[state=open]:border-violet-200 data-[state=open]:bg-violet-600" onClick={() => setOpen(value => !value)}>
            Click
          </TooltipTrigger>
          <TooltipContent className="rounded-lg bg-violet-400 p-8 text-violet-800">Tooltip content</TooltipContent>
        </Tooltip>
      </div>;
  }
}`,...(v=(m=r.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const B=["Basic","Uncontrolled","Controlled"];export{t as Basic,r as Controlled,o as Uncontrolled,B as __namedExportsOrder,y as default};
