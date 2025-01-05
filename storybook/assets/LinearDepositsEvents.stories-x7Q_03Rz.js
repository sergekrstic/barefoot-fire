import{j as D}from"./jsx-runtime-D_zvdyIk.js";import"./CollapsibleTree.component-De3ikyo2.js";import"./Header.component-Ci7o0xQy.js";import"./ScenarioChart.container.v2-DNS8kc5J.js";import{a as me}from"./TimelineScrubber.component-BraCCxZP.js";import"./ScenarioGraph.component-DLxN6sq2.js";import{c as e}from"./budget.data-CxpMDVaV.js";import{a as n,d as r,o as s,t}from"./sharedStoryData-DL3TjDZl.js";import"./index-F28aNuxU.js";import"./Fire.icon-CswWR3EV.js";import"./colors-DQfPey5i.js";const Te={component:me,parameters:{layout:"fullscreen"},decorators:[le=>D.jsx("div",{style:{height:"100vh"},children:D.jsx(le,{})})]},a={name:"Budget 1",amount:1e3,frequency:"year",...n},o={args:{scenarioEvents:e({...r,period:s,budgets:[a]})}},c={args:{scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"quarter"}]})}},i={args:{scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"month"}]})}},d={args:{scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"week"}]})}},u={args:{scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"day"}]})}},p={args:{scenarioEvents:e({...r,period:t,budgets:[a]})}},g={args:{scenarioEvents:e({...r,period:t,budgets:[{...a,frequency:"quarter"}]})}},l={args:{scenarioEvents:e({...r,period:t,budgets:[{...a,frequency:"month"}]})}},m={args:{scenarioEvents:e({...r,period:t,budgets:[{...a,frequency:"week"}]})}},y={args:{scenarioEvents:e({...r,period:t,budgets:[{...a,frequency:"day"}]})}},Y={args:{scenarioEvents:e({...r,period:n,budgets:[a]})}},v={args:{scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"quarter"}]})}},E={args:{scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"month"}]})}},S={args:{scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"week"}]})}},f={args:{scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"day"}]})}};var h,B,q;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [oneYearBudget]
    })
  }
}`,...(q=(B=o.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var b,T,P;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(P=(T=c.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var k,O,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(w=(O=i.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var x,M,Q;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(Q=(M=d.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var W,j,_;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(_=(j=u.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var C,R,V;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [oneYearBudget]
    })
  }
}`,...(V=(R=p.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var z,A,F;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(F=(A=g.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,H,I;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(I=(H=l.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var J,K,L;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var N,U,X;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(X=(U=y.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;Y.parameters={...Y.parameters,docs:{...(Z=Y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [oneYearBudget]
    })
  }
}`,...(ee=($=Y.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,ne;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(ne=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,te,oe;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(oe=(te=E.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ce,ie,de;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(de=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,pe,ge;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(ge=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const Pe=["OneYearYearlyDeposit","OneYearQuarterlyDeposit","OneYearMonthlyDeposit","OneYearWeeklyDeposit","OneYearDailyDeposit","TenYearYearlyDeposit","TenYearQuarterlyDeposit","TenYearMonthlyDeposit","TenYearWeeklyDeposit","TenYearDailyDeposit","ThirtyYearYearlyDeposit","ThirtyYearQuarterlyDeposit","ThirtyYearMonthlyDeposit","ThirtyYearWeeklyDeposit","ThirtyYearDailyDeposit"];export{u as OneYearDailyDeposit,i as OneYearMonthlyDeposit,c as OneYearQuarterlyDeposit,d as OneYearWeeklyDeposit,o as OneYearYearlyDeposit,y as TenYearDailyDeposit,l as TenYearMonthlyDeposit,g as TenYearQuarterlyDeposit,m as TenYearWeeklyDeposit,p as TenYearYearlyDeposit,f as ThirtyYearDailyDeposit,E as ThirtyYearMonthlyDeposit,v as ThirtyYearQuarterlyDeposit,S as ThirtyYearWeeklyDeposit,Y as ThirtyYearYearlyDeposit,Pe as __namedExportsOrder,Te as default};
