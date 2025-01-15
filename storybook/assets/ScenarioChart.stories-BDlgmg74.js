import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{t as Q}from"./budget.data-Db8gjiZ-.js";import{g,a as r}from"./ScenarioGraph.component-Da6RCEiv.js";import{a as U}from"./TimelineScrubber.component-BzaO8mdv.js";import"./index-PahMPgEy.js";import"./colors-Cuw9ST8W.js";import"./CollapsibleTree.component-Bl3dlfdS.js";import"./DropdownMenu.component-2YZdI-ss.js";import"./index-jVKrJXHJ.js";import"./index-Dk70umWa.js";import"./react-resizable-panels.browser.esm-zIh8wNIw.js";const de={component:U,parameters:{layout:"fullscreen"},decorators:[e=>u.jsx("div",{style:{height:"100vh"},children:u.jsx(e,{})})]},a={args:{type:"area",timeseries:[],periods:[],selection:[0,100]}},s={args:{type:"area",timeseries:[{date:"2025-01-01",amount:0,name:"A"}],periods:[],selection:[0,100]}},t={args:{type:"area",timeseries:g(),periods:[],selection:[0,100]}},i={args:{type:"area",timeseries:Q,periods:[],selection:[0,100]}},n={args:{type:"area",timeseries:r(),periods:[],selection:[0,100]}},o={args:{type:"area",timeseries:r(),periods:[],selection:[0,50]}},c={args:{type:"area",timeseries:r(),periods:[],selection:[50,100]}},p={args:{type:"area",timeseries:r(),periods:[],selection:[25,75]}},m={args:{type:"area",timeseries:r(),periods:[],selection:[0,0]}},l={args:{type:"area",timeseries:r(),periods:[],selection:[100,100]}},V=g({name:"highlighted",magnitude:50}),X=g({name:"pinned",magnitude:100}),$=X.map(e=>({...e,amount:e.amount-1e3})),ee=[...V,...$].sort((e,M)=>new Date(e.date).getTime()-new Date(M.date).getTime()),d={args:{type:"difference",timeseries:ee,periods:[],selection:[0,100]}};var D,S,y;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: [],
    periods: [],
    selection: [0, 100]
  }
}`,...(y=(S=a.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var O,f,h;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: [{
      date: '2025-01-01',
      amount: 0,
      name: 'A'
    }],
    periods: [],
    selection: [0, 100]
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var Y,T,v;t.parameters={...t.parameters,docs:{...(Y=t.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: generateRandomTimeSeriesData(),
    periods: [],
    selection: [0, 100]
  }
}`,...(v=(T=t.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var W,x,C;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: thirtyYearPlotData,
    periods: [],
    selection: [0, 100]
  }
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var j,w,H;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    periods: [],
    selection: [0, 100]
  }
}`,...(H=(w=n.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var P,R,A;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    periods: [],
    selection: [0, 50]
  }
}`,...(A=(R=o.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var E,F,I;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    periods: [],
    selection: [50, 100]
  }
}`,...(I=(F=c.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var L,N,Z;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    periods: [],
    selection: [25, 75]
  }
}`,...(Z=(N=p.parameters)==null?void 0:N.docs)==null?void 0:Z.source}}};var _,b,k;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    periods: [],
    selection: [0, 0]
  }
}`,...(k=(b=m.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var q,z,B;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'area',
    timeseries: generateSineWaveTimeSeriesData(),
    periods: [],
    selection: [100, 100]
  }
}`,...(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var G,J,K;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: 'difference',
    timeseries: data,
    periods: [],
    selection: [0, 100]
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const ge=["NoData","InsufficientData","OneYearDailyDeposit","ThirtyYearDepositCompounded","OneYearOscillatingDepositFullSelection","OneYearOscillatingDepositLowSelection","OneYearOscillatingDepositHighSelection","OneYearOscillatingDepositPartialSelection","OneYearOscillatingDepositZeroSelection","OneYearOscillatingDepositOneHundredSelection","DifferenceChart"];export{d as DifferenceChart,s as InsufficientData,a as NoData,t as OneYearDailyDeposit,n as OneYearOscillatingDepositFullSelection,c as OneYearOscillatingDepositHighSelection,o as OneYearOscillatingDepositLowSelection,l as OneYearOscillatingDepositOneHundredSelection,p as OneYearOscillatingDepositPartialSelection,m as OneYearOscillatingDepositZeroSelection,i as ThirtyYearDepositCompounded,ge as __namedExportsOrder,de as default};
