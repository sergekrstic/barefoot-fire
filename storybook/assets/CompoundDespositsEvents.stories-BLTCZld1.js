import{j as h}from"./jsx-runtime-D_zvdyIk.js";import{c as e}from"./ScenarioGraph.component-B6pb_8LH.js";import{S as me,o as n,y as r,t as a,a as s}from"./sharedStoryData-DNr6Bjed.js";import"./index-PahMPgEy.js";import"./colors-Cuw9ST8W.js";import"./CollapsibleTree.component-30vHkhqS.js";import"./DropdownMenu.component-2YZdI-ss.js";import"./index-jVKrJXHJ.js";import"./index-Dk70umWa.js";import"./TimelineScrubber.component-CFhBcboa.js";import"./react-resizable-panels.browser.esm-zIh8wNIw.js";const Te={component:me,parameters:{layout:"fullscreen"},decorators:[ye=>h.jsx("div",{style:{height:"100vh"},children:h.jsx(ye,{})})]},o={args:{scenarioEvents:e({period:n,budgets:[r]})}},t={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"quarter"}]})}},c={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"month"}]})}},i={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"week"}]})}},d={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"day"}]})}},u={args:{scenarioEvents:e({period:a,budgets:[r]})}},p={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"quarter"}]})}},y={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"month"}]})}},m={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"week"}]})}},l={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"day"}]})}},g={args:{scenarioEvents:e({period:s,budgets:[r]})}},Y={args:{scenarioEvents:e({period:s,budgets:[{...r,frequency:"quarter"}]})}},v={args:{scenarioEvents:e({period:s,budgets:[{...r,frequency:"month"}]})}},E={args:{scenarioEvents:e({period:s,budgets:[{...r,frequency:"week"}]})}},D={args:{scenarioEvents:e({period:s,budgets:[{...r,frequency:"day"}]})}};var S,b,q;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [yearlyCompoundBudget]
    })
  }
}`,...(q=(b=o.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var f,T,P;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(P=(T=t.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var C,B,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(k=(B=c.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var O,w,x;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var M,Q,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(W=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var j,_,R;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [yearlyCompoundBudget]
    })
  }
}`,...(R=(_=u.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var V,z,A;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var F,G,H;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(H=(G=y.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,N,U;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(U=(N=l.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var X,Z,$;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [yearlyCompoundBudget]
    })
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ne;Y.parameters={...Y.parameters,docs:{...(ee=Y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(ne=(re=Y.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,se,oe;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(oe=(se=v.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var te,ce,ie;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(ie=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,ue,pe;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(pe=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const Pe=["OneYearYearlyDeposit","OneYearQuarterlyDeposit","OneYearMonthlyDeposit","OneYearWeeklyDeposit","OneYearDailyDeposit","TenYearYearlyDeposit","TenYearQuarterlyDeposit","TenYearMonthlyDeposit","TenYearWeeklyDeposit","TenYearDailyDeposit","ThirtyYearYearlyDeposit","ThirtyYearQuarterlyDeposit","ThirtyYearMonthlyDeposit","ThirtyYearWeeklyDeposit","ThirtyYearDailyDeposit"];export{d as OneYearDailyDeposit,c as OneYearMonthlyDeposit,t as OneYearQuarterlyDeposit,i as OneYearWeeklyDeposit,o as OneYearYearlyDeposit,l as TenYearDailyDeposit,y as TenYearMonthlyDeposit,p as TenYearQuarterlyDeposit,m as TenYearWeeklyDeposit,u as TenYearYearlyDeposit,D as ThirtyYearDailyDeposit,v as ThirtyYearMonthlyDeposit,Y as ThirtyYearQuarterlyDeposit,E as ThirtyYearWeeklyDeposit,g as ThirtyYearYearlyDeposit,Pe as __namedExportsOrder,Te as default};
