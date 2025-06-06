import{j as h}from"./jsx-runtime-CLpGMVip.js";import{c as e}from"./ScenarioGraph.component-BMugaKV0.js";import{S as le,o as a,b as r,t as n,a as t}from"./sharedStoryData-DE2uTdTE.js";import"./moment-CGDQJbyj.js";import"./clsx-B-dksMZM.js";import"./index-BBGmM4Ve.js";import"./colors-CdXc3yLe.js";import"./CollapsibleTreeNode.component-Cokz7cxH.js";import"./Menu.icon-B-AbzxGV.js";import"./ContextMenu.component-C5rbgKDU.js";import"./floating-ui.react-40E8SCbq.js";import"./index-DNXr5OWd.js";import"./index-CnEmR3yp.js";import"./DatePicker.component-BGinrmpb.js";import"./DropdownMenu.component-BiHVZO5i.js";import"./TimelineScrubber.component-Bt_S_518.js";import"./Modal.component-Bi2H5BKg.js";import"./Popover.trigger-D7H7D4Fb.js";import"./Select.component-D-qpFJd6.js";import"./Tooltip.trigger-Cx9X1lyG.js";import"./react-resizable-panels.browser.esm-D8Tkf0_w.js";const We={component:le,parameters:{layout:"fullscreen"},decorators:[me=>h.jsx("div",{style:{height:"100vh"},children:h.jsx(me,{})})]},s={args:{cumulative:!0,scenarioEvents:e({period:a,budgets:[r]})}},o={args:{cumulative:!0,scenarioEvents:e({period:a,budgets:[{...r,frequency:"quarter"}]})}},i={args:{cumulative:!0,scenarioEvents:e({period:a,budgets:[{...r,frequency:"month"}]})}},c={args:{cumulative:!0,scenarioEvents:e({period:a,budgets:[{...r,frequency:"week"}]})}},u={args:{cumulative:!0,scenarioEvents:e({period:a,budgets:[{...r,frequency:"day"}]})}},d={args:{cumulative:!0,scenarioEvents:e({period:n,budgets:[r]})}},p={args:{cumulative:!0,scenarioEvents:e({period:n,budgets:[{...r,frequency:"quarter"}]})}},m={args:{cumulative:!0,scenarioEvents:e({period:n,budgets:[{...r,frequency:"month"}]})}},l={args:{cumulative:!0,scenarioEvents:e({period:n,budgets:[{...r,frequency:"week"}]})}},g={args:{cumulative:!0,scenarioEvents:e({period:n,budgets:[{...r,frequency:"day"}]})}},v={args:{cumulative:!0,scenarioEvents:e({period:t,budgets:[r]})}},y={args:{cumulative:!0,scenarioEvents:e({period:t,budgets:[{...r,frequency:"quarter"}]})}},Y={args:{cumulative:!0,scenarioEvents:e({period:t,budgets:[{...r,frequency:"month"}]})}},E={args:{cumulative:!0,scenarioEvents:e({period:t,budgets:[{...r,frequency:"week"}]})}},D={args:{cumulative:!0,scenarioEvents:e({period:t,budgets:[{...r,frequency:"day"}]})}};var S,b,q;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(T=o.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var B,L,k;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(L=i.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var O,w,x;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(x=(w=c.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var M,Q,W;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(se=(te=Y.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ie,ce;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,de,pe;D.parameters={...D.parameters,docs:{...(ue=D.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(de=D.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const je=["OneYearYearlyDeposit","OneYearQuarterlyDeposit","OneYearMonthlyDeposit","OneYearWeeklyDeposit","OneYearDailyDeposit","TenYearYearlyDeposit","TenYearQuarterlyDeposit","TenYearMonthlyDeposit","TenYearWeeklyDeposit","TenYearDailyDeposit","ThirtyYearYearlyDeposit","ThirtyYearQuarterlyDeposit","ThirtyYearMonthlyDeposit","ThirtyYearWeeklyDeposit","ThirtyYearDailyDeposit"];export{u as OneYearDailyDeposit,i as OneYearMonthlyDeposit,o as OneYearQuarterlyDeposit,c as OneYearWeeklyDeposit,s as OneYearYearlyDeposit,g as TenYearDailyDeposit,m as TenYearMonthlyDeposit,p as TenYearQuarterlyDeposit,l as TenYearWeeklyDeposit,d as TenYearYearlyDeposit,D as ThirtyYearDailyDeposit,Y as ThirtyYearMonthlyDeposit,y as ThirtyYearQuarterlyDeposit,E as ThirtyYearWeeklyDeposit,v as ThirtyYearYearlyDeposit,je as __namedExportsOrder,We as default};
