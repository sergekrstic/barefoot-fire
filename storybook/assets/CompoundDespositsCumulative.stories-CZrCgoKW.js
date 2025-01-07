import{j as D}from"./jsx-runtime-D_zvdyIk.js";import"./CollapsibleTree.component-DSHTWi39.js";import"./Header.component-BGqI9wSV.js";import"./ScenarioChart.container.v2-Br42t3Hy.js";import{a as ye}from"./TimelineScrubber.component-fsbWO01F.js";import"./ScenarioGraph.component-Bo6nmH1Y.js";import{c as e}from"./budget.data-nDvbkWrp.js";import{d as r,o as n,y as a,t,a as s}from"./sharedStoryData-DL3TjDZl.js";import"./index-PahMPgEy.js";import"./Fire.icon-Di-S4vvp.js";import"./colors-Cuw9ST8W.js";import"./react-resizable-panels.browser.esm-zIh8wNIw.js";const Pe={component:ye,parameters:{layout:"fullscreen"},decorators:[me=>D.jsx("div",{style:{height:"100vh"},children:D.jsx(me,{})})]},o={args:{cumulative:!0,scenarioEvents:e({...r,period:n,budgets:[a]})}},u={args:{cumulative:!0,scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"quarter"}]})}},c={args:{cumulative:!0,scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"month"}]})}},i={args:{cumulative:!0,scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"week"}]})}},d={args:{cumulative:!0,scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"day"}]})}},p={args:{cumulative:!0,scenarioEvents:e({...r,period:t,budgets:[a]})}},l={args:{cumulative:!0,scenarioEvents:e({...r,period:t,budgets:[{...a,frequency:"quarter"}]})}},m={args:{cumulative:!0,scenarioEvents:e({...r,period:t,budgets:[{...a,frequency:"month"}]})}},y={args:{cumulative:!0,scenarioEvents:e({...r,period:t,budgets:[{...a,frequency:"week"}]})}},g={args:{cumulative:!0,scenarioEvents:e({...r,period:t,budgets:[{...a,frequency:"day"}]})}},v={args:{cumulative:!0,scenarioEvents:e({...r,period:s,budgets:[a]})}},Y={args:{cumulative:!0,scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"quarter"}]})}},E={args:{cumulative:!0,scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"month"}]})}},S={args:{cumulative:!0,scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"week"}]})}},f={args:{cumulative:!0,scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"day"}]})}};var h,B,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [yearlyCompoundBudget]
    })
  }
}`,...(b=(B=o.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var q,T,P;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(P=(T=u.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var C,k,O;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var w,x,M;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var Q,W,j;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(j=(W=d.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var _,R,V;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [yearlyCompoundBudget]
    })
  }
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var z,A,F;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(F=(A=l.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,H,I;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(I=(H=m.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var J,K,L;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(L=(K=y.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var N,U,X;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [yearlyCompoundBudget]
    })
  }
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,ne;Y.parameters={...Y.parameters,docs:{...(re=Y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(ne=(ae=Y.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,oe;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(oe=(se=E.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ue,ce,ie;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(ie=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,pe,le;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(le=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};const Ce=["OneYearYearlyDeposit","OneYearQuarterlyDeposit","OneYearMonthlyDeposit","OneYearWeeklyDeposit","OneYearDailyDeposit","TenYearYearlyDeposit","TenYearQuarterlyDeposit","TenYearMonthlyDeposit","TenYearWeeklyDeposit","TenYearDailyDeposit","ThirtyYearYearlyDeposit","ThirtyYearQuarterlyDeposit","ThirtyYearMonthlyDeposit","ThirtyYearWeeklyDeposit","ThirtyYearDailyDeposit"];export{d as OneYearDailyDeposit,c as OneYearMonthlyDeposit,u as OneYearQuarterlyDeposit,i as OneYearWeeklyDeposit,o as OneYearYearlyDeposit,g as TenYearDailyDeposit,m as TenYearMonthlyDeposit,l as TenYearQuarterlyDeposit,y as TenYearWeeklyDeposit,p as TenYearYearlyDeposit,f as ThirtyYearDailyDeposit,E as ThirtyYearMonthlyDeposit,Y as ThirtyYearQuarterlyDeposit,S as ThirtyYearWeeklyDeposit,v as ThirtyYearYearlyDeposit,Ce as __namedExportsOrder,Pe as default};
