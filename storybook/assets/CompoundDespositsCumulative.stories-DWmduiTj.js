import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{c as e}from"./ScenarioGraph.component-Dv1Z6XQf.js";import{S as le,o as a,y as r,t as n,a as t}from"./sharedStoryData-DlqXdcID.js";import"./index-PahMPgEy.js";import"./colors-Cuw9ST8W.js";import"./CollapsibleTree.component-30vHkhqS.js";import"./DropdownMenu.component-2YZdI-ss.js";import"./index-jVKrJXHJ.js";import"./index-Dk70umWa.js";import"./TimelineScrubber.component-B0Y13nkF.js";import"./react-resizable-panels.browser.esm-zIh8wNIw.js";const Te={component:le,parameters:{layout:"fullscreen"},decorators:[me=>h.jsx("div",{style:{height:"100vh"},children:h.jsx(me,{})})]},s={args:{cumulative:!0,scenarioEvents:e({period:a,budgets:[r]})}},o={args:{cumulative:!0,scenarioEvents:e({period:a,budgets:[{...r,frequency:"quarter"}]})}},u={args:{cumulative:!0,scenarioEvents:e({period:a,budgets:[{...r,frequency:"month"}]})}},c={args:{cumulative:!0,scenarioEvents:e({period:a,budgets:[{...r,frequency:"week"}]})}},i={args:{cumulative:!0,scenarioEvents:e({period:a,budgets:[{...r,frequency:"day"}]})}},d={args:{cumulative:!0,scenarioEvents:e({period:n,budgets:[r]})}},p={args:{cumulative:!0,scenarioEvents:e({period:n,budgets:[{...r,frequency:"quarter"}]})}},m={args:{cumulative:!0,scenarioEvents:e({period:n,budgets:[{...r,frequency:"month"}]})}},l={args:{cumulative:!0,scenarioEvents:e({period:n,budgets:[{...r,frequency:"week"}]})}},y={args:{cumulative:!0,scenarioEvents:e({period:n,budgets:[{...r,frequency:"day"}]})}},g={args:{cumulative:!0,scenarioEvents:e({period:t,budgets:[r]})}},v={args:{cumulative:!0,scenarioEvents:e({period:t,budgets:[{...r,frequency:"quarter"}]})}},Y={args:{cumulative:!0,scenarioEvents:e({period:t,budgets:[{...r,frequency:"month"}]})}},E={args:{cumulative:!0,scenarioEvents:e({period:t,budgets:[{...r,frequency:"week"}]})}},D={args:{cumulative:!0,scenarioEvents:e({period:t,budgets:[{...r,frequency:"day"}]})}};var S,b,q;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [yearlyCompoundBudget]
    })
  }
}`,...(q=(b=s.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var f,T,P;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(P=(T=o.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var C,B,k;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(k=(B=u.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var O,w,x;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(x=(w=c.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var M,Q,W;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(W=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var j,_,R;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [yearlyCompoundBudget]
    })
  }
}`,...(R=(_=d.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var V,z,A;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var F,G,H;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,N,U;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(U=(N=y.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var X,Z,$;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [yearlyCompoundBudget]
    })
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(ae=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var ne,te,se;Y.parameters={...Y.parameters,docs:{...(ne=Y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(se=(te=Y.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ue,ce;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(ce=(ue=E.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var ie,de,pe;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(pe=(de=D.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const Pe=["OneYearYearlyDeposit","OneYearQuarterlyDeposit","OneYearMonthlyDeposit","OneYearWeeklyDeposit","OneYearDailyDeposit","TenYearYearlyDeposit","TenYearQuarterlyDeposit","TenYearMonthlyDeposit","TenYearWeeklyDeposit","TenYearDailyDeposit","ThirtyYearYearlyDeposit","ThirtyYearQuarterlyDeposit","ThirtyYearMonthlyDeposit","ThirtyYearWeeklyDeposit","ThirtyYearDailyDeposit"];export{i as OneYearDailyDeposit,u as OneYearMonthlyDeposit,o as OneYearQuarterlyDeposit,c as OneYearWeeklyDeposit,s as OneYearYearlyDeposit,y as TenYearDailyDeposit,m as TenYearMonthlyDeposit,p as TenYearQuarterlyDeposit,l as TenYearWeeklyDeposit,d as TenYearYearlyDeposit,D as ThirtyYearDailyDeposit,Y as ThirtyYearMonthlyDeposit,v as ThirtyYearQuarterlyDeposit,E as ThirtyYearWeeklyDeposit,g as ThirtyYearYearlyDeposit,Pe as __namedExportsOrder,Te as default};
