import{j as l}from"./jsx-runtime-CLpGMVip.js";import{C as p,a as r}from"./CollapsibleTreeNode.component-Byz-LEAI.js";import"./index-BBGmM4Ve.js";import"./Menu.icon-B-AbzxGV.js";import"./moment-CGDQJbyj.js";import"./clsx-B-dksMZM.js";const u={component:p,parameters:{layout:"fullscreen"}},e={args:{tree:[{id:"1",title:"Parent 1",children:[{id:"1.1",title:"Child 1.1"},{id:"1.2",title:"Child 1.2",children:[{id:"1.2.1",title:"Grandchild 1.2.1"},{id:"1.2.2",title:"Grandchild 1.2.2"}]}]},{id:"2",title:"Parent 2",children:[{id:"2.1",title:"Child 2.1"},{id:"2.2",title:"Child 2.2"}]}],renderCollapsibleItemContent:(t,i,d)=>l.jsx(r,{type:"group",depth:i,expanded:d,children:t.title}),renderLeafItemContent:(t,i,d)=>l.jsx(r,{type:"item",depth:i,expanded:d,children:t.title})}};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    renderCollapsibleItemContent: (item, depth, expanded) => <CollapsibleTreeNode type="group" depth={depth} expanded={expanded}>
        {(item as Item).title}
      </CollapsibleTreeNode>,
    renderLeafItemContent: (item, depth, expanded) => <CollapsibleTreeNode type="item" depth={depth} expanded={expanded}>
        {(item as Item).title}
      </CollapsibleTreeNode>
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,u as default};
