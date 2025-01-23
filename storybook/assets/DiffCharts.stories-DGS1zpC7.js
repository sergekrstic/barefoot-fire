import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./CollapsibleTree.component-DRXLFRFl.js";import"./DatePicker.component-CgTLAvva.js";import"./DropdownMenu.component-2YZdI-ss.js";import{R as t}from"./TimelineScrubber.component-c3zVx--a.js";import{g as L}from"./ScenarioGraph.component-CRAv5duO.js";import{w as E,L as P,b as _,c as q,d as z,e as T}from"./StyledAreaChart.component-CsuH0djd.js";import{t as O}from"./colors-Cuw9ST8W.js";import"./index-PahMPgEy.js";import"./Menu.icon-Dh1hQpZk.js";import"./index-jVKrJXHJ.js";import"./index-Dk70umWa.js";import"./clsx-B-dksMZM.js";import"./react-resizable-panels.browser.esm-zIh8wNIw.js";const B=()=>n.jsx("div",{children:"Placeholder"}),te={component:B,parameters:{layout:"fullscreen"},decorators:[E]},F=O.violet[400],G=O.amber[400],H=L({name:"highlighted",magnitude:50}),I=L({name:"pinned",magnitude:100}),b=I.map(e=>({...e,amount:e.amount-1e3})),a=[...H,...b].sort((e,r)=>new Date(e.date).getTime()-new Date(r.date).getTime()),o={render:()=>n.jsx(t,{children:({width:e,height:r})=>n.jsx(P,{width:e,height:r,data:a,color:"name"})})},s={render:()=>n.jsx(t,{children:({width:e,height:r})=>n.jsx(_,{width:e,height:r,data:a})})},i={render:()=>n.jsx(t,{children:({width:e,height:r})=>n.jsx(q,{width:e,height:r,data:a})})},d={render:()=>n.jsx(t,{children:({width:e,height:r})=>n.jsx(z,{width:e,height:r,data:b})})},c={render:()=>n.jsx(t,{children:({width:e,height:r})=>n.jsx(T,{width:e,height:r,data:a})})},h={render:()=>n.jsx(t,{children:({width:e,height:r})=>n.jsx(T,{width:e,height:r,data:a,secondaryColor:G,primaryColor:F})})};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <LineChart width={width} height={height} data={data} color="name" />}
      </ResponsiveContainer>;
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,C,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <StackedAreaChartV1 width={width} height={height} data={data} />}
      </ResponsiveContainer>;
  }
}`,...(f=(C=s.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var l,w,D;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <StackedAreaChartV2 width={width} height={height} data={data} />}
      </ResponsiveContainer>;
  }
}`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var x,R,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <DifferenceChartV1 width={width} height={height} data={pinnedOffsetData} />}
      </ResponsiveContainer>;
  }
}`,...(j=(R=d.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var v,S,V;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <DifferenceChartV2 width={width} height={height} data={data} />}
      </ResponsiveContainer>;
  }
}`,...(V=(S=c.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var k,A,y;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <DifferenceChartV2 width={width} height={height} data={data} secondaryColor={secondaryColor} primaryColor={primaryColor} />}
      </ResponsiveContainer>;
  }
}`,...(y=(A=h.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};const ae=["Line","StackedArea1","StackedArea2","Difference1","Difference2","Difference2Themed"];export{d as Difference1,c as Difference2,h as Difference2Themed,o as Line,s as StackedArea1,i as StackedArea2,ae as __namedExportsOrder,te as default};
