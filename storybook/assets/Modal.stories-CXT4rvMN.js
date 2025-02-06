import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as u}from"./index-BBGmM4Ve.js";import{M as p,a as b,b as v,c as x,d as g,e as M,f as h}from"./Modal.component-Bi2H5BKg.js";import"./floating-ui.react-40E8SCbq.js";import"./index-DNXr5OWd.js";import"./index-CnEmR3yp.js";const O={component:p},o={render:p},a={render:()=>{const[t,i]=u.useState(!0);return console.log("open",t),e.jsxs(b,{open:t,onOpenChange:i,children:[e.jsx(v,{className:"rounded-md border border-violet-300 bg-violet-700 px-4 py-2 text-violet-200 data-[state=open]:border-violet-200 data-[state=open]:bg-violet-600",onClick:()=>i(c=>!c),children:"Click"}),e.jsxs(x,{className:"m-8 max-w-screen-sm rounded-xl border border-slate-800 bg-slate-900 p-8 text-slate-300",children:[e.jsx(g,{className:"pb-8 text-2xl",children:"Modal heading"}),e.jsxs(M,{children:[e.jsx("p",{className:"mb-2",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi recusandae mollitia adipisci, ut illum amet beatae sunt? Saepe, ad!"}),e.jsx("p",{className:"mb-2",children:"Saepe nesciunt voluptates, quibusdam voluptate perspiciatis aut iste tenetur corrupti assumenda reiciendis amet provident, est sequi vitae perferendis cumque dolorem."}),e.jsx("p",{className:"mb-2",children:"Suscipit delectus, doloribus temporibus adipisci quas, iusto dolore ipsum, dicta magnam blanditiis ipsa perspiciatis dolores doloremque quisquam? Error, beatae laudantium?"}),e.jsx("p",{className:"mb-8",children:"Totam id minima et provident odio a quas amet nesciunt? Adipisci rem dolore maxime maiores unde, distinctio fugit minus eligendi."})]}),e.jsx(h,{className:"cursor-pointer rounded-md border border-violet-300 bg-violet-700 px-4 py-2 text-violet-300 outline-none hover:border-violet-200 hover:bg-violet-600 hover:text-violet-200",children:"Close"})]})]})}};var s,r,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ModalBasic
}`,...(d=(r=o.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var l,n,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    console.log('open', open);
    return <Modal open={open} onOpenChange={setOpen}>
        <ModalTrigger className="rounded-md border border-violet-300 bg-violet-700 px-4 py-2 text-violet-200 data-[state=open]:border-violet-200 data-[state=open]:bg-violet-600" onClick={() => setOpen(prev => !prev)}>
          Click
        </ModalTrigger>
        <ModalContent className="m-8 max-w-screen-sm rounded-xl border border-slate-800 bg-slate-900 p-8 text-slate-300">
          <ModalHeading className="pb-8 text-2xl">Modal heading</ModalHeading>
          <ModalDescription>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel commodi recusandae mollitia adipisci, ut
              illum amet beatae sunt? Saepe, ad!
            </p>
            <p className="mb-2">
              Saepe nesciunt voluptates, quibusdam voluptate perspiciatis aut iste tenetur corrupti assumenda reiciendis
              amet provident, est sequi vitae perferendis cumque dolorem.
            </p>
            <p className="mb-2">
              Suscipit delectus, doloribus temporibus adipisci quas, iusto dolore ipsum, dicta magnam blanditiis ipsa
              perspiciatis dolores doloremque quisquam? Error, beatae laudantium?
            </p>
            <p className="mb-8">
              Totam id minima et provident odio a quas amet nesciunt? Adipisci rem dolore maxime maiores unde,
              distinctio fugit minus eligendi.
            </p>
          </ModalDescription>
          <ModalClose className="cursor-pointer rounded-md border border-violet-300 bg-violet-700 px-4 py-2 text-violet-300 outline-none hover:border-violet-200 hover:bg-violet-600 hover:text-violet-200">
            Close
          </ModalClose>
        </ModalContent>
      </Modal>;
  }
}`,...(m=(n=a.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const E=["Basic","Controlled"];export{o as Basic,a as Controlled,E as __namedExportsOrder,O as default};
