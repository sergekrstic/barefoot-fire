import{j as Y}from"./jsx-runtime-D_zvdyIk.js";import"./CollapsibleTree.component-De3ikyo2.js";import"./Header.component-Ci7o0xQy.js";import"./ScenarioChart.container.v2-DNS8kc5J.js";import{a as ne}from"./TimelineScrubber.component-BraCCxZP.js";import"./ScenarioGraph.component-DLxN6sq2.js";import{c as r}from"./budget.data-CxpMDVaV.js";import{a as e,d as a,o as f,t as S}from"./sharedStoryData-DL3TjDZl.js";import"./index-F28aNuxU.js";import"./Fire.icon-CswWR3EV.js";import"./colors-DQfPey5i.js";const ve={component:ne,parameters:{layout:"fullscreen"},decorators:[ae=>Y.jsx("div",{style:{height:"100vh"},children:Y.jsx(ae,{})})]},n=[{name:"Budget 1",amount:1e3,frequency:"year",...e},{name:"Budget 2",amount:100,frequency:"week",...e},{name:"Budget 3",amount:10,frequency:"day",...e},{name:"Budget 4",amount:10,frequency:"day",...e}],t=[{name:"Budget 1",amount:1e3,interestRate:.01,frequency:"year",...e},{name:"Budget 2",amount:100,interestRate:.02,frequency:"week",...e},{name:"Budget 3",amount:10,interestRate:.03,frequency:"day",...e},{name:"Budget 4",amount:10,interestRate:.04,frequency:"day",...e}],s={args:{scenarioEvents:r({...a,period:f,budgets:n})}},o={args:{scenarioEvents:r({...a,period:S,budgets:n})}},u={args:{scenarioEvents:r({...a,period:e,budgets:n})}},c={args:{cumulative:!0,scenarioEvents:r({...a,period:f,budgets:n})}},i={args:{cumulative:!0,scenarioEvents:r({...a,period:S,budgets:n})}},d={args:{cumulative:!0,scenarioEvents:r({...a,period:e,budgets:n})}},m={args:{scenarioEvents:r({...a,period:f,budgets:t})}},p={args:{scenarioEvents:r({...a,period:S,budgets:t})}},g={args:{scenarioEvents:r({...a,period:e,budgets:t})}},l={args:{cumulative:!0,scenarioEvents:r({...a,period:f,budgets:t})}},v={args:{cumulative:!0,scenarioEvents:r({...a,period:S,budgets:t})}},E={args:{cumulative:!0,scenarioEvents:r({...a,period:e,budgets:t})}};var B,C,y;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: fourLinearBudgets
    })
  }
}`,...(y=(C=s.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var b,L,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: fourLinearBudgets
    })
  }
}`,...(h=(L=o.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var T,P,O;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: fourLinearBudgets
    })
  }
}`,...(O=(P=u.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var q,x,R;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: fourLinearBudgets
    })
  }
}`,...(R=(x=c.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var j,k,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: fourLinearBudgets
    })
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var _,V,z;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: fourLinearBudgets
    })
  }
}`,...(z=(V=d.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var A,D,F;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: fourCompoundBudgets
    })
  }
}`,...(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var G,H,I;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: fourCompoundBudgets
    })
  }
}`,...(I=(H=p.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var J,K,M;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: fourCompoundBudgets
    })
  }
}`,...(M=(K=g.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,Q,U;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: fourCompoundBudgets
    })
  }
}`,...(U=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Z;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: fourCompoundBudgets
    })
  }
}`,...(Z=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,re;E.parameters={...E.parameters,docs:{...($=E.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: thirtyYearPeriod,
      budgets: fourCompoundBudgets
    })
  }
}`,...(re=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Ee=["OneYearLinearEvents","TenYearLinearEvents","ThirtyYearLinearEvents","OneYearLinearCumulative","TenYearLinearCumulative","ThirtyYearLinearCumulative","OneYearCompoundEvents","TenYearCompoundEvents","ThirtyYearCompoundEvents","OneYearCompoundCumulative","TenYearCompoundCumulative","ThirtyYearCompoundCumulative"];export{l as OneYearCompoundCumulative,m as OneYearCompoundEvents,c as OneYearLinearCumulative,s as OneYearLinearEvents,v as TenYearCompoundCumulative,p as TenYearCompoundEvents,i as TenYearLinearCumulative,o as TenYearLinearEvents,E as ThirtyYearCompoundCumulative,g as ThirtyYearCompoundEvents,d as ThirtyYearLinearCumulative,u as ThirtyYearLinearEvents,Ee as __namedExportsOrder,ve as default};
