import{j as C}from"./jsx-runtime-D_zvdyIk.js";import{c as r}from"./ScenarioGraph.component-CRAv5duO.js";import{S as ae,a as e,o as E,t as Y}from"./sharedStoryData-zdJhspIL.js";import"./index-PahMPgEy.js";import"./clsx-B-dksMZM.js";import"./colors-Cuw9ST8W.js";import"./CollapsibleTree.component-DRXLFRFl.js";import"./Menu.icon-Dh1hQpZk.js";import"./ContextMenu.component-CiBhxQiZ.js";import"./floating-ui.react-DXVSm5aW.js";import"./index-jVKrJXHJ.js";import"./index-Dk70umWa.js";import"./DatePicker.component-D4qOE7Yf.js";import"./DropdownMenu.component-wXtweCx3.js";import"./TimelineScrubber.component-Bye3qQj4.js";import"./Modal.component-BzCUJgMo.js";import"./Popover.trigger-CTMGeKFO.js";import"./Tooltip.trigger-BLwQiu7C.js";import"./react-resizable-panels.browser.esm-zIh8wNIw.js";const be={component:ae,parameters:{layout:"fullscreen"},decorators:[re=>C.jsx("div",{style:{height:"100vh"},children:C.jsx(re,{})})]},a=[{id:"1",name:"Budget 1",amount:1e3,frequency:"year",...e},{id:"2",name:"Budget 2",amount:100,frequency:"week",...e},{id:"3",name:"Budget 3",amount:10,frequency:"day",...e},{id:"4",name:"Budget 4",amount:10,frequency:"day",...e}],n=[{id:"1",name:"Budget 1",amount:1e3,interestRate:.01,frequency:"year",...e},{id:"2",name:"Budget 2",amount:100,interestRate:.02,frequency:"week",...e},{id:"3",name:"Budget 3",amount:10,interestRate:.03,frequency:"day",...e},{id:"4",name:"Budget 4",amount:10,interestRate:.04,frequency:"day",...e}],t={args:{scenarioEvents:r({period:E,budgets:a})}},s={args:{scenarioEvents:r({period:Y,budgets:a})}},o={args:{scenarioEvents:r({period:e,budgets:a})}},u={args:{cumulative:!0,scenarioEvents:r({period:E,budgets:a})}},i={args:{cumulative:!0,scenarioEvents:r({period:Y,budgets:a})}},c={args:{cumulative:!0,scenarioEvents:r({period:e,budgets:a})}},d={args:{scenarioEvents:r({period:E,budgets:n})}},m={args:{scenarioEvents:r({period:Y,budgets:n})}},p={args:{scenarioEvents:r({period:e,budgets:n})}},g={args:{cumulative:!0,scenarioEvents:r({period:E,budgets:n})}},v={args:{cumulative:!0,scenarioEvents:r({period:Y,budgets:n})}},l={args:{cumulative:!0,scenarioEvents:r({period:e,budgets:n})}};var y,f,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: fourLinearBudgets
    })
  }
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,B,L;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: fourLinearBudgets
    })
  }
}`,...(L=(B=s.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var h,T,P;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: fourLinearBudgets
    })
  }
}`,...(P=(T=o.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var O,q,x;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: fourLinearBudgets
    })
  }
}`,...(x=(q=u.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};var R,j,k;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: fourLinearBudgets
    })
  }
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var w,_,V;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: fourLinearBudgets
    })
  }
}`,...(V=(_=c.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var z,A,D;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: fourCompoundBudgets
    })
  }
}`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var F,G,H;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: fourCompoundBudgets
    })
  }
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: fourCompoundBudgets
    })
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,N,Q;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: fourCompoundBudgets
    })
  }
}`,...(Q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var U,W,X;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: fourCompoundBudgets
    })
  }
}`,...(X=(W=v.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,$,ee;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: fourCompoundBudgets
    })
  }
}`,...(ee=($=l.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Be=["OneYearLinearEvents","TenYearLinearEvents","ThirtyYearLinearEvents","OneYearLinearCumulative","TenYearLinearCumulative","ThirtyYearLinearCumulative","OneYearCompoundEvents","TenYearCompoundEvents","ThirtyYearCompoundEvents","OneYearCompoundCumulative","TenYearCompoundCumulative","ThirtyYearCompoundCumulative"];export{g as OneYearCompoundCumulative,d as OneYearCompoundEvents,u as OneYearLinearCumulative,t as OneYearLinearEvents,v as TenYearCompoundCumulative,m as TenYearCompoundEvents,i as TenYearLinearCumulative,s as TenYearLinearEvents,l as ThirtyYearCompoundCumulative,p as ThirtyYearCompoundEvents,c as ThirtyYearLinearCumulative,o as ThirtyYearLinearEvents,Be as __namedExportsOrder,be as default};
