import{j as n}from"./jsx-runtime-CLpGMVip.js";import"./CollapsibleTreeNode.component-Cokz7cxH.js";import"./ContextMenu.component-C5rbgKDU.js";import"./DatePicker.component-BGinrmpb.js";import"./DropdownMenu.component-BiHVZO5i.js";import{R as t}from"./TimelineScrubber.component-Bt_S_518.js";import"./Modal.component-Bi2H5BKg.js";import"./Popover.trigger-D7H7D4Fb.js";import"./ScenarioGraph.component-BMugaKV0.js";import"./Select.component-D-qpFJd6.js";import"./Tooltip.trigger-Cx9X1lyG.js";import{w as E,L as P,b as _,c as q,d as z,e as L}from"./StyledAreaChart.component-1HzdblTz.js";import{t as T}from"./colors-CdXc3yLe.js";import"./moment-CGDQJbyj.js";import{g as O}from"./timeseries.generators-DvDT1Ueo.js";import"./index-BBGmM4Ve.js";import"./Menu.icon-B-AbzxGV.js";import"./floating-ui.react-40E8SCbq.js";import"./index-DNXr5OWd.js";import"./index-CnEmR3yp.js";import"./clsx-B-dksMZM.js";import"./react-resizable-panels.browser.esm-D8Tkf0_w.js";const B=()=>n.jsx("div",{children:"Placeholder"}),me={component:B,parameters:{layout:"fullscreen"},decorators:[E]},F=T.violet[400],G=T.amber[400],H=O({name:"highlighted",magnitude:50}),I=O({name:"pinned",magnitude:100}),b=I.map(e=>({...e,amount:e.amount-1e3})),a=[...H,...b].sort((e,r)=>new Date(e.date).getTime()-new Date(r.date).getTime()),o={render:()=>n.jsx(t,{children:({width:e,height:r})=>n.jsx(P,{width:e,height:r,data:a,color:"name"})})},i={render:()=>n.jsx(t,{children:({width:e,height:r})=>n.jsx(_,{width:e,height:r,data:a})})},s={render:()=>n.jsx(t,{children:({width:e,height:r})=>n.jsx(q,{width:e,height:r,data:a})})},d={render:()=>n.jsx(t,{children:({width:e,height:r})=>n.jsx(z,{width:e,height:r,data:b})})},c={render:()=>n.jsx(t,{children:({width:e,height:r})=>n.jsx(L,{width:e,height:r,data:a})})},h={render:()=>n.jsx(t,{children:({width:e,height:r})=>n.jsx(L,{width:e,height:r,data:a,secondaryColor:G,primaryColor:F})})};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <LineChart width={width} height={height} data={data} color="name" />}
      </ResponsiveContainer>;
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,C,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <StackedAreaChartV1 width={width} height={height} data={data} />}
      </ResponsiveContainer>;
  }
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var l,w,D;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <StackedAreaChartV2 width={width} height={height} data={data} />}
      </ResponsiveContainer>;
  }
}`,...(D=(w=s.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var x,R,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(A=h.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};const pe=["Line","StackedArea1","StackedArea2","Difference1","Difference2","Difference2Themed"];export{d as Difference1,c as Difference2,h as Difference2Themed,o as Line,i as StackedArea1,s as StackedArea2,pe as __namedExportsOrder,me as default};
