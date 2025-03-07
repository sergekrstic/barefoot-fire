import{j as h}from"./jsx-runtime-CLpGMVip.js";import{c as e}from"./ScenarioGraph.component-DBI4LeJB.js";import{S as ge,a as n,o as a,t as s}from"./sharedStoryData-4mWaufBd.js";import"./moment-CGDQJbyj.js";import"./clsx-B-dksMZM.js";import"./index-BBGmM4Ve.js";import"./colors-CdXc3yLe.js";import"./CollapsibleTreeNode.component-Byz-LEAI.js";import"./Menu.icon-B-AbzxGV.js";import"./ContextMenu.component-C5rbgKDU.js";import"./floating-ui.react-40E8SCbq.js";import"./index-DNXr5OWd.js";import"./index-CnEmR3yp.js";import"./DatePicker.component-BGinrmpb.js";import"./DropdownMenu.component-BiHVZO5i.js";import"./TimelineScrubber.component-DK-E0cto.js";import"./Modal.component-Bi2H5BKg.js";import"./Popover.trigger-D7H7D4Fb.js";import"./Select.component-D-qpFJd6.js";import"./Tooltip.trigger-Cx9X1lyG.js";import"./react-resizable-panels.browser.esm-D8Tkf0_w.js";const je={component:ge,parameters:{layout:"fullscreen"},decorators:[me=>h.jsx("div",{style:{height:"100vh"},children:h.jsx(me,{})})]},r={id:"1",name:"Budget 1",amount:1e3,frequency:"year",...n},o={args:{scenarioEvents:e({period:a,budgets:[r]})}},t={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"quarter"}]})}},c={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"month"}]})}},i={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"week"}]})}},d={args:{scenarioEvents:e({period:a,budgets:[{...r,frequency:"day"}]})}},u={args:{scenarioEvents:e({period:s,budgets:[r]})}},p={args:{scenarioEvents:e({period:s,budgets:[{...r,frequency:"quarter"}]})}},m={args:{scenarioEvents:e({period:s,budgets:[{...r,frequency:"month"}]})}},g={args:{scenarioEvents:e({period:s,budgets:[{...r,frequency:"week"}]})}},l={args:{scenarioEvents:e({period:s,budgets:[{...r,frequency:"day"}]})}},y={args:{scenarioEvents:e({period:n,budgets:[r]})}},Y={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"quarter"}]})}},v={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"month"}]})}},E={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"week"}]})}},D={args:{scenarioEvents:e({period:n,budgets:[{...r,frequency:"day"}]})}};var S,q,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [oneYearBudget]
    })
  }
}`,...(b=(q=o.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};var f,T,P;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(P=(T=t.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var B,k,O;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(O=(k=c.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var w,x,M;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(M=(x=i.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var Q,W,j;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(j=(W=d.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var _,C,R;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [oneYearBudget]
    })
  }
}`,...(R=(C=u.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var V,z,A;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var F,G,H;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,N,U;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(U=(N=l.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var X,Z,$;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [oneYearBudget]
    })
  }
}`,...($=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,ne;Y.parameters={...Y.parameters,docs:{...(ee=Y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(ne=(re=Y.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,se,oe;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(oe=(se=v.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var te,ce,ie;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(ie=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,ue,pe;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(pe=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const _e=["OneYearYearlyDeposit","OneYearQuarterlyDeposit","OneYearMonthlyDeposit","OneYearWeeklyDeposit","OneYearDailyDeposit","TenYearYearlyDeposit","TenYearQuarterlyDeposit","TenYearMonthlyDeposit","TenYearWeeklyDeposit","TenYearDailyDeposit","ThirtyYearYearlyDeposit","ThirtyYearQuarterlyDeposit","ThirtyYearMonthlyDeposit","ThirtyYearWeeklyDeposit","ThirtyYearDailyDeposit"];export{d as OneYearDailyDeposit,c as OneYearMonthlyDeposit,t as OneYearQuarterlyDeposit,i as OneYearWeeklyDeposit,o as OneYearYearlyDeposit,l as TenYearDailyDeposit,m as TenYearMonthlyDeposit,p as TenYearQuarterlyDeposit,g as TenYearWeeklyDeposit,u as TenYearYearlyDeposit,D as ThirtyYearDailyDeposit,v as ThirtyYearMonthlyDeposit,Y as ThirtyYearQuarterlyDeposit,E as ThirtyYearWeeklyDeposit,y as ThirtyYearYearlyDeposit,_e as __namedExportsOrder,je as default};
