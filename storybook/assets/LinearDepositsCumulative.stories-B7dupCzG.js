import{j as D}from"./jsx-runtime-D_zvdyIk.js";import{d as e}from"./ScenarioGraph.component-CFO1VuCQ.js";import{S as ge,d as r,o as n,b as a,t,a as s}from"./sharedStoryData-J2m90dxl.js";import"./index-PahMPgEy.js";import"./colors-Cuw9ST8W.js";import"./CollapsibleTree.component-DSHTWi39.js";import"./Fire.icon-Di-S4vvp.js";import"./Header.component-BGqI9wSV.js";import"./TimelineScrubber.component-Dmo5TZmq.js";import"./react-resizable-panels.browser.esm-zIh8wNIw.js";const qe={component:ge,parameters:{layout:"fullscreen"},decorators:[me=>D.jsx("div",{style:{height:"100vh"},children:D.jsx(me,{})})]},o={args:{cumulative:!0,scenarioEvents:e({...r,period:n,budgets:[a]})}},u={args:{cumulative:!0,scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"quarter"}]})}},c={args:{cumulative:!0,scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"month"}]})}},i={args:{cumulative:!0,scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"week"}]})}},d={args:{cumulative:!0,scenarioEvents:e({...r,period:n,budgets:[{...a,frequency:"day"}]})}},p={args:{cumulative:!0,scenarioEvents:e({...r,period:t,budgets:[a]})}},l={args:{cumulative:!0,scenarioEvents:e({...r,period:t,budgets:[{...a,frequency:"quarter"}]})}},m={args:{cumulative:!0,scenarioEvents:e({...r,period:t,budgets:[{...a,frequency:"month"}]})}},g={args:{cumulative:!0,scenarioEvents:e({...r,period:t,budgets:[{...a,frequency:"week"}]})}},v={args:{cumulative:!0,scenarioEvents:e({...r,period:t,budgets:[{...a,frequency:"day"}]})}},y={args:{cumulative:!0,scenarioEvents:e({...r,period:s,budgets:[a]})}},Y={args:{cumulative:!0,scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"quarter"}]})}},S={args:{cumulative:!0,scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"month"}]})}},E={args:{cumulative:!0,scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"week"}]})}},f={args:{cumulative:!0,scenarioEvents:e({...r,period:s,budgets:[{...a,frequency:"day"}]})}};var h,B,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [oneYearLinearBudget]
    })
  }
}`,...(b=(B=o.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var q,T,P;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(P=(T=u.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var L,k,O;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
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
        ...oneYearLinearBudget,
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
        ...oneYearLinearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(j=(W=d.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var _,C,R;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [oneYearLinearBudget]
    })
  }
}`,...(R=(C=p.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var V,z,A;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var F,G,H;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,U,X;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,$,ee;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [oneYearLinearBudget]
    })
  }
}`,...(ee=($=y.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,ne;Y.parameters={...Y.parameters,docs:{...(re=Y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(ne=(ae=Y.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,se,oe;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(oe=(se=S.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ue,ce,ie;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(ie=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,pe,le;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(le=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};const Te=["OneYearYearlyDeposit","OneYearQuarterlyDeposit","OneYearMonthlyDeposit","OneYearWeeklyDeposit","OneYearDailyDeposit","TenYearYearlyDeposit","TenYearQuarterlyDeposit","TenYearMonthlyDeposit","TenYearWeeklyDeposit","TenYearDailyDeposit","ThirtyYearYearlyDeposit","ThirtyYearQuarterlyDeposit","ThirtyYearMonthlyDeposit","ThirtyYearWeeklyDeposit","ThirtyYearDailyDeposit"];export{d as OneYearDailyDeposit,c as OneYearMonthlyDeposit,u as OneYearQuarterlyDeposit,i as OneYearWeeklyDeposit,o as OneYearYearlyDeposit,v as TenYearDailyDeposit,m as TenYearMonthlyDeposit,l as TenYearQuarterlyDeposit,g as TenYearWeeklyDeposit,p as TenYearYearlyDeposit,f as ThirtyYearDailyDeposit,S as ThirtyYearMonthlyDeposit,Y as ThirtyYearQuarterlyDeposit,E as ThirtyYearWeeklyDeposit,y as ThirtyYearYearlyDeposit,Te as __namedExportsOrder,qe as default};
