import{j as h}from"./jsx-runtime-CLpGMVip.js";import{c as e}from"./ScenarioGraph.component-BMugaKV0.js";import{S as ye,o as n,y as r,t as a,a as s}from"./sharedStoryData-DE2uTdTE.js";import"./moment-CGDQJbyj.js";import"./clsx-B-dksMZM.js";import"./index-BBGmM4Ve.js";import"./colors-CdXc3yLe.js";import"./CollapsibleTreeNode.component-Cokz7cxH.js";import"./Menu.icon-B-AbzxGV.js";import"./ContextMenu.component-C5rbgKDU.js";import"./floating-ui.react-40E8SCbq.js";import"./index-DNXr5OWd.js";import"./index-CnEmR3yp.js";import"./DatePicker.component-BGinrmpb.js";import"./DropdownMenu.component-BiHVZO5i.js";import"./TimelineScrubber.component-Bt_S_518.js";import"./Modal.component-Bi2H5BKg.js";import"./Popover.trigger-D7H7D4Fb.js";import"./Select.component-D-qpFJd6.js";import"./Tooltip.trigger-Cx9X1lyG.js";import"./react-resizable-panels.browser.esm-D8Tkf0_w.js";const We={component:ye,parameters:{layout:"fullscreen"},decorators:[me=>h.jsx("div",{style:{height:"100vh"},children:h.jsx(me,{})})]},o={args:{scenarioEvents:e({period:n,budgets:[r]})}},t={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"quarter"}]})}},c={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"month"}]})}},i={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"week"}]})}},d={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"day"}]})}},u={args:{scenarioEvents:e({period:a,budgets:[r]})}},p={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"quarter"}]})}},m={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"month"}]})}},y={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"week"}]})}},l={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"day"}]})}},g={args:{scenarioEvents:e({period:s,budgets:[r]})}},Y={args:{scenarioEvents:e({period:s,budgets:[{...r,frequency:"quarter"}]})}},v={args:{scenarioEvents:e({period:s,budgets:[{...r,frequency:"month"}]})}},E={args:{scenarioEvents:e({period:s,budgets:[{...r,frequency:"week"}]})}},D={args:{scenarioEvents:e({period:s,budgets:[{...r,frequency:"day"}]})}};var S,b,q;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var F,G,H;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...yearlyCompoundBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,N,U;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(pe=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const je=["OneYearYearlyDeposit","OneYearQuarterlyDeposit","OneYearMonthlyDeposit","OneYearWeeklyDeposit","OneYearDailyDeposit","TenYearYearlyDeposit","TenYearQuarterlyDeposit","TenYearMonthlyDeposit","TenYearWeeklyDeposit","TenYearDailyDeposit","ThirtyYearYearlyDeposit","ThirtyYearQuarterlyDeposit","ThirtyYearMonthlyDeposit","ThirtyYearWeeklyDeposit","ThirtyYearDailyDeposit"];export{d as OneYearDailyDeposit,c as OneYearMonthlyDeposit,t as OneYearQuarterlyDeposit,i as OneYearWeeklyDeposit,o as OneYearYearlyDeposit,l as TenYearDailyDeposit,m as TenYearMonthlyDeposit,p as TenYearQuarterlyDeposit,y as TenYearWeeklyDeposit,u as TenYearYearlyDeposit,D as ThirtyYearDailyDeposit,v as ThirtyYearMonthlyDeposit,Y as ThirtyYearQuarterlyDeposit,E as ThirtyYearWeeklyDeposit,g as ThirtyYearYearlyDeposit,je as __namedExportsOrder,We as default};
