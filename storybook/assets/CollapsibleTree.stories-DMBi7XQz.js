import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as l}from"./CollapsibleTree.component-Bl3dlfdS.js";import"./index-PahMPgEy.js";const m={component:l,parameters:{layout:"fullscreen"}},e={args:{tree:[{id:"1",title:"Parent 1",children:[{id:"1.1",title:"Child 1.1"},{id:"1.2",title:"Child 1.2",children:[{id:"1.2.1",title:"Grandchild 1.2.1"},{id:"1.2.2",title:"Grandchild 1.2.2"}]}]},{id:"2",title:"Parent 2",children:[{id:"2.1",title:"Child 2.1"},{id:"2.2",title:"Child 2.2"}]}],renderCollapsibleItemContent:t=>n.jsx("div",{children:t.title}),renderLeafItemContent:t=>n.jsx("div",{children:t.title})}};var i,d,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
    // Todo: Update the type definition for \`renderCollapsibleItemContent\` and \`renderLeafItemContent\`
    renderCollapsibleItemContent: item => <div>{item.title as string}</div>,
    renderLeafItemContent: item => <div>{item.title as string}</div>
  }
}`,...(r=(d=e.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,m as default};
