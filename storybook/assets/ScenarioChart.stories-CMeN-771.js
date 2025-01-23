import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{g as d,t as Q,a}from"./ScenarioGraph.component-CRAv5duO.js";import{b as U}from"./TimelineScrubber.component-BeTazprh.js";import"./index-PahMPgEy.js";import"./clsx-B-dksMZM.js";import"./colors-Cuw9ST8W.js";import"./CollapsibleTree.component-DRXLFRFl.js";import"./Menu.icon-Dh1hQpZk.js";import"./DatePicker.component-D_nLB7of.js";import"./index-jVKrJXHJ.js";import"./index-Dk70umWa.js";import"./DropdownMenu.component-2YZdI-ss.js";import"./react-resizable-panels.browser.esm-zIh8wNIw.js";const ue={component:U,parameters:{layout:"fullscreen"},decorators:[e=>u.jsx("div",{style:{height:"100vh"},children:u.jsx(e,{})})]},s={args:{type:"area",timeseries:[],scenarioEvents:[],selection:[0,100]}},r={args:{type:"area",timeseries:[{date:"2025-01-01",amount:0,name:"A"}],scenarioEvents:[],selection:[0,100]}},t={args:{type:"area",timeseries:d(),scenarioEvents:[],selection:[0,100]}},n={args:{type:"area",timeseries:Q,scenarioEvents:[],selection:[0,100]}},i={args:{type:"area",timeseries:a(),scenarioEvents:[],selection:[0,100]}},o={args:{type:"area",timeseries:a(),scenarioEvents:[],selection:[0,50]}},c={args:{type:"area",timeseries:a(),scenarioEvents:[],selection:[50,100]}},m={args:{type:"area",timeseries:a(),scenarioEvents:[],selection:[25,75]}},p={args:{type:"area",timeseries:a(),scenarioEvents:[],selection:[0,0]}},l={args:{type:"area",timeseries:a(),scenarioEvents:[],selection:[100,100]}},V=d({name:"highlighted",magnitude:50}),X=d({name:"pinned",magnitude:100}),$=X.map(e=>({...e,amount:e.amount-1e3})),ee=[...V,...$].sort((e,M)=>new Date(e.date).getTime()-new Date(M.date).getTime()),g={args:{type:"difference",timeseries:ee,scenarioEvents:[],selection:[0,100]}};var D,S,v;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: [],
    scenarioEvents: [],
    selection: [0, 100]
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var y,O,E;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: [{
      date: '2025-01-01',
      amount: 0,
      name: 'A'
    }],
    scenarioEvents: [],
    selection: [0, 100]
  }
}`,...(E=(O=r.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var f,h,Y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: generateRandomTimeSeriesData(),
    scenarioEvents: [],
    selection: [0, 100]
  }
}`,...(Y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:Y.source}}};var T,C,W;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: thirtyYearCompoundPlotData,
    scenarioEvents: [],
    selection: [0, 100]
  }
}`,...(W=(C=n.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var x,j,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    scenarioEvents: [],
    selection: [0, 100]
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var H,P,R;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    scenarioEvents: [],
    selection: [0, 50]
  }
}`,...(R=(P=o.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var A,F,I;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    scenarioEvents: [],
    selection: [50, 100]
  }
}`,...(I=(F=c.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var L,N,Z;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    scenarioEvents: [],
    selection: [25, 75]
  }
}`,...(Z=(N=m.parameters)==null?void 0:N.docs)==null?void 0:Z.source}}};var _,b,k;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    scenarioEvents: [],
    selection: [0, 0]
  }
}`,...(k=(b=p.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var q,z,B;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    scenarioEvents: [],
    selection: [100, 100]
  }
}`,...(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var G,J,K;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: 'difference',
    timeseries: data,
    scenarioEvents: [],
    selection: [0, 100]
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const De=["NoData","InsufficientData","OneYearDailyDeposit","ThirtyYearDepositCompounded","OneYearOscillatingDepositFullSelection","OneYearOscillatingDepositLowSelection","OneYearOscillatingDepositHighSelection","OneYearOscillatingDepositPartialSelection","OneYearOscillatingDepositZeroSelection","OneYearOscillatingDepositOneHundredSelection","DifferenceChart"];export{g as DifferenceChart,r as InsufficientData,s as NoData,t as OneYearDailyDeposit,i as OneYearOscillatingDepositFullSelection,c as OneYearOscillatingDepositHighSelection,o as OneYearOscillatingDepositLowSelection,l as OneYearOscillatingDepositOneHundredSelection,m as OneYearOscillatingDepositPartialSelection,p as OneYearOscillatingDepositZeroSelection,n as ThirtyYearDepositCompounded,De as __namedExportsOrder,ue as default};
