import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{C as r}from"./CollapsibleTree.component-DRXLFRFl.js";import"./index-PahMPgEy.js";import"./Menu.icon-Dh1hQpZk.js";const c={component:r,parameters:{layout:"fullscreen"}},e={args:{tree:[{id:"1",title:"Parent 1",children:[{id:"1.1",title:"Child 1.1"},{id:"1.2",title:"Child 1.2",children:[{id:"1.2.1",title:"Grandchild 1.2.1"},{id:"1.2.2",title:"Grandchild 1.2.2"}]}]},{id:"2",title:"Parent 2",children:[{id:"2.1",title:"Child 2.1"},{id:"2.2",title:"Child 2.2"}]}],renderCollapsibleItemContent:t=>i.jsx("div",{children:t.title}),renderLeafItemContent:t=>i.jsx("div",{children:t.title})}};var n,d,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    tree: [{
      id: '1',
      title: 'Parent 1',
      children: [{
        id: '1.1',
        title: 'Child 1.1'
      }, {
        id: '1.2',
        title: 'Child 1.2',
        children: [{
          id: '1.2.1',
          title: 'Grandchild 1.2.1'
        }, {
          id: '1.2.2',
          title: 'Grandchild 1.2.2'
        }]
      }]
    }, {
      id: '2',
      title: 'Parent 2',
      children: [{
        id: '2.1',
        title: 'Child 2.1'
      }, {
        id: '2.2',
        title: 'Child 2.2'
      }]
    }],
    renderCollapsibleItemContent: item => <div>{(item as Item).title}</div>,
    renderLeafItemContent: item => <div>{(item as Item).title}</div>
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,c as default};
