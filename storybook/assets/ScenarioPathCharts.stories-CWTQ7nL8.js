import{j as f}from"./jsx-runtime-BjgbQsUx.js";import{S as De}from"./moment-BD2cCKma.js";import{c as e}from"./engine.core-BpYA4RGt.js";import"./index-D2MAbzvX.js";import"./index-jJyPZTrg.js";import"./colors-UMl0uCuE.js";const be={component:De,parameters:{layout:"fullscreen"},decorators:[Ye=>f.jsx("div",{style:{height:"100vh"},children:f.jsx(Ye,{})})]},n={startDate:"2024-01-01",endDate:"2024-12-31"},a={startDate:"2024-01-01",endDate:"2034-12-31"},t={startDate:"2024-01-01",endDate:"2054-12-31"},r={name:"Budget 1",amount:1e3,frequency:"year",startDate:"2024-01-01",endDate:"3034-12-31"},s={args:{scenarioEvents:e({period:n,budgets:[r]})}},o={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"quarter"}]})}},c={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"month"}]})}},i={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"week"}]})}},d={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"day"}]})}},u={args:{scenarioEvents:e({period:a,budgets:[r]})}},p={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"quarter"}]})}},g={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"month"}]})}},m={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"week"}]})}},y={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"day"}]})}},l={args:{scenarioEvents:e({period:t,budgets:[r]})}},Y={args:{scenarioEvents:e({period:t,budgets:[{...r,frequency:"quarter"}]})}},D={args:{scenarioEvents:e({period:t,budgets:[{...r,frequency:"month"}]})}},v={args:{scenarioEvents:e({period:t,budgets:[{...r,frequency:"week"}]})}},E={args:{scenarioEvents:e({period:t,budgets:[{...r,frequency:"day"}]})}},q={args:{scenarioEvents:e({period:{startDate:"2024-01-01",endDate:"2024-12-31"},budgets:[{name:"Budget 1",amount:1e3,frequency:"year",startDate:"2024-01-01",endDate:"2034-12-31"},{name:"Budget 2",amount:100,frequency:"week",startDate:"2024-01-01",endDate:"2034-12-31"},{name:"Budget 33",amount:10,frequency:"day",startDate:"2024-01-01",endDate:"2034-12-31"},{name:"Budget 4",amount:10,frequency:"day",startDate:"2024-01-01",endDate:"2034-12-31"}]})}};var S,h,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [oneYearBudget]
    })
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var B,T,P;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(P=(T=o.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var k,O,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(w=(O=c.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var x,M,Q;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(Q=(M=i.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var W,j,F;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(F=(j=d.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var _,C,R;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [oneYearBudget]
    })
  }
}`,...(R=(C=u.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var z,A,G;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(G=(A=p.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var H,I,J;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(J=(I=g.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,L,N;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(N=(L=m.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var U,V,X;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(X=(V=y.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Z,$,ee;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [oneYearBudget]
    })
  }
}`,...(ee=($=l.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ne,ae;Y.parameters={...Y.parameters,docs:{...(re=Y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(ae=(ne=Y.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,se,oe;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(oe=(se=D.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ce,ie,de;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(de=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,pe,ge;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(ge=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var me,ye,le;q.parameters={...q.parameters,docs:{...(me=q.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: {
        startDate: '2024-01-01',
        endDate: '2024-12-31'
      },
      budgets: [{
        name: 'Budget 1',
        amount: 1000,
        frequency: 'year',
        startDate: '2024-01-01',
        endDate: '2034-12-31'
      }, {
        name: 'Budget 2',
        amount: 100,
        frequency: 'week',
        startDate: '2024-01-01',
        endDate: '2034-12-31'
      }, {
        name: 'Budget 33',
        amount: 10,
        frequency: 'day',
        startDate: '2024-01-01',
        endDate: '2034-12-31'
      }, {
        name: 'Budget 4',
        amount: 10,
        frequency: 'day',
        startDate: '2024-01-01',
        endDate: '2034-12-31'
      }]
    })
  }
}`,...(le=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:le.source}}};const Be=["OneYearYearlyDeposit","OneYearQuarterlyDeposit","OneYearMonthlyDeposit","OneYearWeeklyDeposit","OneYearDailyDeposit","TenYearYearlyDeposit","TenYearQuarterlyDeposit","TenYearMonthlyDeposit","TenYearWeeklyDeposit","TenYearDailyDeposit","ThirtyYearYearlyDeposit","ThirtyYearQuarterlyDeposit","ThirtyYearMonthlyDeposit","ThirtyYearWeeklyDeposit","ThirtyYearDailyDeposit","FourBudgets"];export{q as FourBudgets,d as OneYearDailyDeposit,c as OneYearMonthlyDeposit,o as OneYearQuarterlyDeposit,i as OneYearWeeklyDeposit,s as OneYearYearlyDeposit,y as TenYearDailyDeposit,g as TenYearMonthlyDeposit,p as TenYearQuarterlyDeposit,m as TenYearWeeklyDeposit,u as TenYearYearlyDeposit,E as ThirtyYearDailyDeposit,D as ThirtyYearMonthlyDeposit,Y as ThirtyYearQuarterlyDeposit,v as ThirtyYearWeeklyDeposit,l as ThirtyYearYearlyDeposit,Be as __namedExportsOrder,be as default};
