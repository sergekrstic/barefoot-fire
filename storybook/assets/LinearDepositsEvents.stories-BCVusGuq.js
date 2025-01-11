import{j as D}from"./jsx-runtime-D_zvdyIk.js";import{d as e}from"./ScenarioGraph.component-CFO1VuCQ.js";import{S as me,a,d as r,o as s,t}from"./sharedStoryData-J2m90dxl.js";import"./index-PahMPgEy.js";import"./colors-Cuw9ST8W.js";import"./CollapsibleTree.component-DSHTWi39.js";import"./Fire.icon-Di-S4vvp.js";import"./Header.component-BGqI9wSV.js";import"./TimelineScrubber.component-Dmo5TZmq.js";import"./react-resizable-panels.browser.esm-zIh8wNIw.js";const be={component:me,parameters:{layout:"fullscreen"},decorators:[le=>D.jsx("div",{style:{height:"100vh"},children:D.jsx(le,{})})]},n={id:"1",name:"Budget 1",amount:1e3,frequency:"year",...a},o={args:{scenarioEvents:e({...r,period:s,budgets:[n]})}},c={args:{scenarioEvents:e({...r,period:s,budgets:[{...n,frequency:"quarter"}]})}},i={args:{scenarioEvents:e({...r,period:s,budgets:[{...n,frequency:"month"}]})}},d={args:{scenarioEvents:e({...r,period:s,budgets:[{...n,frequency:"week"}]})}},u={args:{scenarioEvents:e({...r,period:s,budgets:[{...n,frequency:"day"}]})}},p={args:{scenarioEvents:e({...r,period:t,budgets:[n]})}},g={args:{scenarioEvents:e({...r,period:t,budgets:[{...n,frequency:"quarter"}]})}},l={args:{scenarioEvents:e({...r,period:t,budgets:[{...n,frequency:"month"}]})}},m={args:{scenarioEvents:e({...r,period:t,budgets:[{...n,frequency:"week"}]})}},y={args:{scenarioEvents:e({...r,period:t,budgets:[{...n,frequency:"day"}]})}},Y={args:{scenarioEvents:e({...r,period:a,budgets:[n]})}},S={args:{scenarioEvents:e({...r,period:a,budgets:[{...n,frequency:"quarter"}]})}},v={args:{scenarioEvents:e({...r,period:a,budgets:[{...n,frequency:"month"}]})}},E={args:{scenarioEvents:e({...r,period:a,budgets:[{...n,frequency:"week"}]})}},f={args:{scenarioEvents:e({...r,period:a,budgets:[{...n,frequency:"day"}]})}};var h,B,q;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(ee=($=Y.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ne,ae;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ae=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,te,oe;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(oe=(te=v.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ce,ie,de;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,pe,ge;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ge=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const Te=["OneYearYearlyDeposit","OneYearQuarterlyDeposit","OneYearMonthlyDeposit","OneYearWeeklyDeposit","OneYearDailyDeposit","TenYearYearlyDeposit","TenYearQuarterlyDeposit","TenYearMonthlyDeposit","TenYearWeeklyDeposit","TenYearDailyDeposit","ThirtyYearYearlyDeposit","ThirtyYearQuarterlyDeposit","ThirtyYearMonthlyDeposit","ThirtyYearWeeklyDeposit","ThirtyYearDailyDeposit"];export{u as OneYearDailyDeposit,i as OneYearMonthlyDeposit,c as OneYearQuarterlyDeposit,d as OneYearWeeklyDeposit,o as OneYearYearlyDeposit,y as TenYearDailyDeposit,l as TenYearMonthlyDeposit,g as TenYearQuarterlyDeposit,m as TenYearWeeklyDeposit,p as TenYearYearlyDeposit,f as ThirtyYearDailyDeposit,v as ThirtyYearMonthlyDeposit,S as ThirtyYearQuarterlyDeposit,E as ThirtyYearWeeklyDeposit,Y as ThirtyYearYearlyDeposit,Te as __namedExportsOrder,be as default};
