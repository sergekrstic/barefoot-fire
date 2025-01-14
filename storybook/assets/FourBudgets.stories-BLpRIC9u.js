import{j as Y}from"./jsx-runtime-D_zvdyIk.js";import{d as r}from"./ScenarioGraph.component-8XjDygki.js";import{S as ne,a as e,d as a,o as f,t as S}from"./sharedStoryData-BITM951W.js";import"./index-PahMPgEy.js";import"./colors-Cuw9ST8W.js";import"./CollapsibleTree.component-DSHTWi39.js";import"./Fire.icon-Di-S4vvp.js";import"./Header.component-BGqI9wSV.js";import"./TimelineScrubber.component-LLz_8pEk.js";import"./react-resizable-panels.browser.esm-zIh8wNIw.js";const le={component:ne,parameters:{layout:"fullscreen"},decorators:[ae=>Y.jsx("div",{style:{height:"100vh"},children:Y.jsx(ae,{})})]},n=[{id:"1",name:"Budget 1",amount:1e3,frequency:"year",...e},{id:"2",name:"Budget 2",amount:100,frequency:"week",...e},{id:"3",name:"Budget 3",amount:10,frequency:"day",...e},{id:"4",name:"Budget 4",amount:10,frequency:"day",...e}],t=[{id:"1",name:"Budget 1",amount:1e3,interestRate:.01,frequency:"year",...e},{id:"2",name:"Budget 2",amount:100,interestRate:.02,frequency:"week",...e},{id:"3",name:"Budget 3",amount:10,interestRate:.03,frequency:"day",...e},{id:"4",name:"Budget 4",amount:10,interestRate:.04,frequency:"day",...e}],s={args:{scenarioEvents:r({...a,period:f,budgets:n})}},o={args:{scenarioEvents:r({...a,period:S,budgets:n})}},u={args:{scenarioEvents:r({...a,period:e,budgets:n})}},i={args:{cumulative:!0,scenarioEvents:r({...a,period:f,budgets:n})}},c={args:{cumulative:!0,scenarioEvents:r({...a,period:S,budgets:n})}},d={args:{cumulative:!0,scenarioEvents:r({...a,period:e,budgets:n})}},m={args:{scenarioEvents:r({...a,period:f,budgets:t})}},p={args:{scenarioEvents:r({...a,period:S,budgets:t})}},g={args:{scenarioEvents:r({...a,period:e,budgets:t})}},l={args:{cumulative:!0,scenarioEvents:r({...a,period:f,budgets:t})}},v={args:{cumulative:!0,scenarioEvents:r({...a,period:S,budgets:t})}},E={args:{cumulative:!0,scenarioEvents:r({...a,period:e,budgets:t})}};var B,C,y;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(O=(P=u.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var q,x,R;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: oneYearPeriod,
      budgets: fourLinearBudgets
    })
  }
}`,...(R=(x=i.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var j,k,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    cumulative: true,
    scenarioEvents: calculateScenarioEvents({
      ...defaultScenarioBudgets,
      period: tenYearPeriod,
      budgets: fourLinearBudgets
    })
  }
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var _,V,z;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(re=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const ve=["OneYearLinearEvents","TenYearLinearEvents","ThirtyYearLinearEvents","OneYearLinearCumulative","TenYearLinearCumulative","ThirtyYearLinearCumulative","OneYearCompoundEvents","TenYearCompoundEvents","ThirtyYearCompoundEvents","OneYearCompoundCumulative","TenYearCompoundCumulative","ThirtyYearCompoundCumulative"];export{l as OneYearCompoundCumulative,m as OneYearCompoundEvents,i as OneYearLinearCumulative,s as OneYearLinearEvents,v as TenYearCompoundCumulative,p as TenYearCompoundEvents,c as TenYearLinearCumulative,o as TenYearLinearEvents,E as ThirtyYearCompoundCumulative,g as ThirtyYearCompoundEvents,d as ThirtyYearLinearCumulative,u as ThirtyYearLinearEvents,ve as __namedExportsOrder,le as default};
