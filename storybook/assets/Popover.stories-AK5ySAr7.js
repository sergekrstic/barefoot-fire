import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as h}from"./index-BBGmM4Ve.js";import{P as g,a as x,b as P,c as u}from"./Popover.trigger-D7H7D4Fb.js";import"./floating-ui.react-40E8SCbq.js";import"./index-DNXr5OWd.js";import"./index-CnEmR3yp.js";const T={component:g},o={render:g},t={render:()=>e.jsxs(x,{children:[e.jsx(P,{className:"bg-violet-700 px-4 py-2 text-violet-300 data-[state=open]:bg-violet-600 data-[state=open]:text-violet-200",children:"Click"}),e.jsx(u,{className:"bg-violet-400 p-8 text-violet-800",children:"Popover content"})]})},r={render:()=>{const[b,n]=h.useState(!1);return e.jsxs(x,{open:b,onOpenChange:n,children:[e.jsx(P,{className:"rounded-md border border-violet-300 bg-violet-700 px-4 py-2 text-violet-200 data-[state=open]:border-violet-200 data-[state=open]:bg-violet-600",onClick:()=>n(C=>!C),children:"Click"}),e.jsx(u,{className:"rounded-lg bg-violet-400 p-8 text-violet-800",children:"Popover content"})]})}};var a,s,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: PopoverBasic
}`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var l,i,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger className="bg-violet-700 px-4 py-2 text-violet-300 data-[state=open]:bg-violet-600 data-[state=open]:text-violet-200">
        Click
      </PopoverTrigger>
      <PopoverContent className="bg-violet-400 p-8 text-violet-800">Popover content</PopoverContent>
    </Popover>
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,v,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="rounded-md border border-violet-300 bg-violet-700 px-4 py-2 text-violet-200 data-[state=open]:border-violet-200 data-[state=open]:bg-violet-600" onClick={() => setOpen(value => !value)}>
          Click
        </PopoverTrigger>
        <PopoverContent className="rounded-lg bg-violet-400 p-8 text-violet-800">Popover content</PopoverContent>
      </Popover>;
  }
}`,...(m=(v=r.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};const y=["Basic","Uncontrolled","Controlled"];export{o as Basic,r as Controlled,t as Uncontrolled,y as __namedExportsOrder,T as default};
