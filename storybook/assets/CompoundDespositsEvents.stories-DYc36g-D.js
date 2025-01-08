import{j as D}from"./jsx-runtime-D_zvdyIk.js";import"./CollapsibleTree.component-DSHTWi39.js";import"./Header.component-BGqI9wSV.js";import"./ScenarioChart.container.v2-BI2yzkxS.js";import{a as ge}from"./TimelineScrubber.component-bNzPTvUM.js";import"./ScenarioGraph.component-DA7gkCLf.js";import{c as e}from"./budget.data-CpXsGSqR.js";import{d as r,o as n,y as a,t as s,a as o}from"./sharedStoryData-DL3TjDZl.js";import"./index-PahMPgEy.js";import"./Fire.icon-Di-S4vvp.js";import"./colors-Cuw9ST8W.js";import"./react-resizable-panels.browser.esm-zIh8wNIw.js";const Pe={component:ge,parameters:{layout:"fullscreen"},decorators:[ye=>D.jsx("div",{style:{height:"100vh"},children:D.jsx(ye,{})})]},t={args:{scenarioEvents:e({...r,period:n,budgets:[a]})}},c={args:{scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"quarter"}]})}},i={args:{scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"month"}]})}},d={args:{scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"week"}]})}},u={args:{scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"day"}]})}},p={args:{scenarioEvents:e({...r,period:s,budgets:[a]})}},l={args:{scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"quarter"}]})}},y={args:{scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"month"}]})}},g={args:{scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"week"}]})}},m={args:{scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"day"}]})}},Y={args:{scenarioEvents:e({...r,period:o,budgets:[a]})}},v={args:{scenarioEvents:e({...r,period:o,budgets:[{...a,frequency:"quarter"}]})}},E={args:{scenarioEvents:e({...r,period:o,budgets:[{...a,frequency:"month"}]})}},S={args:{scenarioEvents:e({...r,period:o,budgets:[{...a,frequency:"week"}]})}},f={args:{scenarioEvents:e({...r,period:o,budgets:[{...a,frequency:"day"}]})}};var h,B,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [yearlyCompoundBudget]
    })
  }
}`,...(b=(B=t.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var q,T,P;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(P=(T=c.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var C,k,O;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(O=(k=i.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var w,x,M;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(M=(x=d.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var Q,W,j;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(j=(W=u.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var _,R,V;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [yearlyCompoundBudget]
    })
  }
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var z,A,F;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(F=(A=l.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,H,I;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(I=(H=y.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var J,K,L;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(L=(K=g.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var N,U,X;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;Y.parameters={...Y.parameters,docs:{...(Z=Y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [yearlyCompoundBudget]
    })
  }
}`,...(ee=($=Y.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,ne;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(ne=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,oe,te;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(te=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ce,ie,de;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(de=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,pe,le;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(le=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};const Ce=["OneYearYearlyDeposit","OneYearQuarterlyDeposit","OneYearMonthlyDeposit","OneYearWeeklyDeposit","OneYearDailyDeposit","TenYearYearlyDeposit","TenYearQuarterlyDeposit","TenYearMonthlyDeposit","TenYearWeeklyDeposit","TenYearDailyDeposit","ThirtyYearYearlyDeposit","ThirtyYearQuarterlyDeposit","ThirtyYearMonthlyDeposit","ThirtyYearWeeklyDeposit","ThirtyYearDailyDeposit"];export{u as OneYearDailyDeposit,i as OneYearMonthlyDeposit,c as OneYearQuarterlyDeposit,d as OneYearWeeklyDeposit,t as OneYearYearlyDeposit,m as TenYearDailyDeposit,y as TenYearMonthlyDeposit,l as TenYearQuarterlyDeposit,g as TenYearWeeklyDeposit,p as TenYearYearlyDeposit,f as ThirtyYearDailyDeposit,E as ThirtyYearMonthlyDeposit,v as ThirtyYearQuarterlyDeposit,S as ThirtyYearWeeklyDeposit,Y as ThirtyYearYearlyDeposit,Ce as __namedExportsOrder,Pe as default};
