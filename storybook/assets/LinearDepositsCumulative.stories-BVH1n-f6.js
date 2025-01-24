import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{c as e}from"./ScenarioGraph.component-CRAv5duO.js";import{S as le,o as a,b as r,t as n,a as t}from"./sharedStoryData-Vwf6_u20.js";import"./index-PahMPgEy.js";import"./clsx-B-dksMZM.js";import"./colors-Cuw9ST8W.js";import"./CollapsibleTree.component-DRXLFRFl.js";import"./Menu.icon-Dh1hQpZk.js";import"./DatePicker.component-BJiRWqV-.js";import"./floating-ui.react-f02HS2BF.js";import"./index-jVKrJXHJ.js";import"./index-Dk70umWa.js";import"./DropdownMenu.component-BYo-Av9w.js";import"./TimelineScrubber.component-DWTkBeZi.js";import"./react-resizable-panels.browser.esm-zIh8wNIw.js";const ke={component:le,parameters:{layout:"fullscreen"},decorators:[me=>h.jsx("div",{style:{height:"100vh"},children:h.jsx(me,{})})]},s={args:{cumulative:!0,scenarioEvents:e({period:a,budgets:[r]})}},o={args:{cumulative:!0,scenarioEvents:e({period:a,budgets:[{...r,frequency:"quarter"}]})}},c={args:{cumulative:!0,scenarioEvents:e({period:a,budgets:[{...r,frequency:"month"}]})}},i={args:{cumulative:!0,scenarioEvents:e({period:a,budgets:[{...r,frequency:"week"}]})}},u={args:{cumulative:!0,scenarioEvents:e({period:a,budgets:[{...r,frequency:"day"}]})}},d={args:{cumulative:!0,scenarioEvents:e({period:n,budgets:[r]})}},p={args:{cumulative:!0,scenarioEvents:e({period:n,budgets:[{...r,frequency:"quarter"}]})}},m={args:{cumulative:!0,scenarioEvents:e({period:n,budgets:[{...r,frequency:"month"}]})}},l={args:{cumulative:!0,scenarioEvents:e({period:n,budgets:[{...r,frequency:"week"}]})}},g={args:{cumulative:!0,scenarioEvents:e({period:n,budgets:[{...r,frequency:"day"}]})}},v={args:{cumulative:!0,scenarioEvents:e({period:t,budgets:[r]})}},y={args:{cumulative:!0,scenarioEvents:e({period:t,budgets:[{...r,frequency:"quarter"}]})}},Y={args:{cumulative:!0,scenarioEvents:e({period:t,budgets:[{...r,frequency:"month"}]})}},E={args:{cumulative:!0,scenarioEvents:e({period:t,budgets:[{...r,frequency:"week"}]})}},D={args:{cumulative:!0,scenarioEvents:e({period:t,budgets:[{...r,frequency:"day"}]})}};var S,b,q;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [oneYearLinearBudget]
    })
  }
}`,...(q=(b=s.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var f,T,P;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(P=(T=o.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var B,L,k;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(k=(L=c.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var O,w,x;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var M,Q,W;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(W=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var j,_,C;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [oneYearLinearBudget]
    })
  }
}`,...(C=(_=d.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var R,V,z;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(z=(V=p.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var A,F,G;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,I,J;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(J=(I=l.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,N,U;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(U=(N=g.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var X,Z,$;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [oneYearLinearBudget]
    })
  }
}`,...($=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(ae=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,te,se;Y.parameters={...Y.parameters,docs:{...(ne=Y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(se=(te=Y.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ce,ie;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(ie=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var ue,de,pe;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearLinearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(pe=(de=D.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const Oe=["OneYearYearlyDeposit","OneYearQuarterlyDeposit","OneYearMonthlyDeposit","OneYearWeeklyDeposit","OneYearDailyDeposit","TenYearYearlyDeposit","TenYearQuarterlyDeposit","TenYearMonthlyDeposit","TenYearWeeklyDeposit","TenYearDailyDeposit","ThirtyYearYearlyDeposit","ThirtyYearQuarterlyDeposit","ThirtyYearMonthlyDeposit","ThirtyYearWeeklyDeposit","ThirtyYearDailyDeposit"];export{u as OneYearDailyDeposit,c as OneYearMonthlyDeposit,o as OneYearQuarterlyDeposit,i as OneYearWeeklyDeposit,s as OneYearYearlyDeposit,g as TenYearDailyDeposit,m as TenYearMonthlyDeposit,p as TenYearQuarterlyDeposit,l as TenYearWeeklyDeposit,d as TenYearYearlyDeposit,D as ThirtyYearDailyDeposit,Y as ThirtyYearMonthlyDeposit,y as ThirtyYearQuarterlyDeposit,E as ThirtyYearWeeklyDeposit,v as ThirtyYearYearlyDeposit,Oe as __namedExportsOrder,ke as default};
