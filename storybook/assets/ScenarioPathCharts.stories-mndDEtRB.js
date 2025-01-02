import{j as O}from"./jsx-runtime-BjgbQsUx.js";import{S as be}from"./TimelineScrubber.component-CO8RFmp0.js";import"./CollapsibleTree.component-yedGRdFl.js";import{h as Te}from"./ScenarioChart.container.v2-GwWsEAg6.js";import"./ScenarioGraph.component-CFAPW4q-.js";import"./index-D2MAbzvX.js";import"./index-jJyPZTrg.js";import"./colors-UMl0uCuE.js";function r({period:e,budgets:a}){const t=a.map(o=>Pe(o,e)),s=t.reduce((o,P)=>o+P.totalExpense,0);return{period:e,budgetEvents:t,totalExpense:s}}function Pe(e,a){const t=[];let s=0;const o=ke(a,e.frequency),P=e.interestRate?e.interestRate/o:0;e.initialAmount&&(t.push({date:e.startDate,value:e.initialAmount}),s+=e.initialAmount);for(let d=Te(a.startDate);d.isBefore(a.endDate);d.add(1,e.frequency))if(d.isBetween(e.startDate,e.endDate,void 0,"[]")){const Be=e.interestRate?s*P:0,k=e.amount+Be;t.push({date:d.format("YYYY-MM-DD"),value:k}),s+=k}return{budget:e,period:a,events:t,totalExpense:s}}function ke(e,a){if(a==="day")return 365;if(a==="week")return 52;if(a==="month")return 12;if(a==="quarter")return 4;if(a==="year")return 1;throw new Error(`Invalid frequency: ${a}`)}const Ae={component:be,parameters:{layout:"fullscreen"},decorators:[e=>O.jsx("div",{style:{height:"100vh"},children:O.jsx(e,{})})]},c={startDate:"2024-01-01",endDate:"2024-12-31"},i={startDate:"2024-01-01",endDate:"2034-12-31"},u={startDate:"2024-01-01",endDate:"2054-12-31"},n={name:"Budget 1",amount:1e3,frequency:"year",startDate:"2024-01-01",endDate:"3034-12-31"},p={args:{scenarioEvents:r({period:c,budgets:[n]})}},m={args:{scenarioEvents:r({period:c,budgets:[{...n,frequency:"quarter"}]})}},g={args:{scenarioEvents:r({period:c,budgets:[{...n,frequency:"month"}]})}},l={args:{scenarioEvents:r({period:c,budgets:[{...n,frequency:"week"}]})}},y={args:{scenarioEvents:r({period:c,budgets:[{...n,frequency:"day"}]})}},Y={args:{scenarioEvents:r({period:i,budgets:[n]})}},D={args:{scenarioEvents:r({period:i,budgets:[{...n,frequency:"quarter"}]})}},v={args:{scenarioEvents:r({period:i,budgets:[{...n,frequency:"month"}]})}},E={args:{scenarioEvents:r({period:i,budgets:[{...n,frequency:"week"}]})}},f={args:{scenarioEvents:r({period:i,budgets:[{...n,frequency:"day"}]})}},h={args:{scenarioEvents:r({period:u,budgets:[n]})}},q={args:{scenarioEvents:r({period:u,budgets:[{...n,frequency:"quarter"}]})}},S={args:{scenarioEvents:r({period:u,budgets:[{...n,frequency:"month"}]})}},B={args:{scenarioEvents:r({period:u,budgets:[{...n,frequency:"week"}]})}},b={args:{scenarioEvents:r({period:u,budgets:[{...n,frequency:"day"}]})}},T={args:{scenarioEvents:r({period:{startDate:"2024-01-01",endDate:"2024-12-31"},budgets:[{name:"Budget 1",amount:1e3,frequency:"year",startDate:"2024-01-01",endDate:"2034-12-31"},{name:"Budget 2",amount:100,frequency:"week",startDate:"2024-01-01",endDate:"2034-12-31"},{name:"Budget 33",amount:10,frequency:"day",startDate:"2024-01-01",endDate:"2034-12-31"},{name:"Budget 4",amount:10,frequency:"day",startDate:"2024-01-01",endDate:"2034-12-31"}]})}};var w,x,M;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [oneYearBudget]
    })
  }
}`,...(M=(x=p.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var Q,W,j;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(j=(W=m.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var R,A,F;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(F=(A=g.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var I,_,C;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(C=(_=l.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var N,V,$;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: oneYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...($=(V=y.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var z,G,H;Y.parameters={...Y.parameters,docs:{...(z=Y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [oneYearBudget]
    })
  }
}`,...(H=(G=Y.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,L;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(L=(K=D.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var U,X,Z;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(Z=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,re,ne;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(ne=(re=E.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,te,se;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: tenYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(se=(te=f.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ce,ie;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [oneYearBudget]
    })
  }
}`,...(ie=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var ue,de,pe;q.parameters={...q.parameters,docs:{...(ue=q.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'quarter'
      }]
    })
  }
}`,...(pe=(de=q.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ge,le;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'month'
      }]
    })
  }
}`,...(le=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:le.source}}};var ye,Ye,De;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'week'
      }]
    })
  }
}`,...(De=(Ye=B.parameters)==null?void 0:Ye.docs)==null?void 0:De.source}}};var ve,Ee,fe;b.parameters={...b.parameters,docs:{...(ve=b.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: thirtyYearPeriod,
      budgets: [{
        ...oneYearBudget,
        frequency: 'day'
      }]
    })
  }
}`,...(fe=(Ee=b.parameters)==null?void 0:Ee.docs)==null?void 0:fe.source}}};var he,qe,Se;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    scenarioEvents: calculateScenarioEvents({
      period: {
        startDate: '2024-01-01',
        endDate: '2024-12-31'
      },
      budgets: [{
        name: 'Budget 1',
        amount: 1000,
        frequency: 'year',
        startDate: '2024-01-01',
        endDate: '2034-12-31'
      }, {
        name: 'Budget 2',
        amount: 100,
        frequency: 'week',
        startDate: '2024-01-01',
        endDate: '2034-12-31'
      }, {
        name: 'Budget 33',
        amount: 10,
        frequency: 'day',
        startDate: '2024-01-01',
        endDate: '2034-12-31'
      }, {
        name: 'Budget 4',
        amount: 10,
        frequency: 'day',
        startDate: '2024-01-01',
        endDate: '2034-12-31'
      }]
    })
  }
}`,...(Se=(qe=T.parameters)==null?void 0:qe.docs)==null?void 0:Se.source}}};const Fe=["OneYearYearlyDeposit","OneYearQuarterlyDeposit","OneYearMonthlyDeposit","OneYearWeeklyDeposit","OneYearDailyDeposit","TenYearYearlyDeposit","TenYearQuarterlyDeposit","TenYearMonthlyDeposit","TenYearWeeklyDeposit","TenYearDailyDeposit","ThirtyYearYearlyDeposit","ThirtyYearQuarterlyDeposit","ThirtyYearMonthlyDeposit","ThirtyYearWeeklyDeposit","ThirtyYearDailyDeposit","FourBudgets"];export{T as FourBudgets,y as OneYearDailyDeposit,g as OneYearMonthlyDeposit,m as OneYearQuarterlyDeposit,l as OneYearWeeklyDeposit,p as OneYearYearlyDeposit,f as TenYearDailyDeposit,v as TenYearMonthlyDeposit,D as TenYearQuarterlyDeposit,E as TenYearWeeklyDeposit,Y as TenYearYearlyDeposit,b as ThirtyYearDailyDeposit,S as ThirtyYearMonthlyDeposit,q as ThirtyYearQuarterlyDeposit,B as ThirtyYearWeeklyDeposit,h as ThirtyYearYearlyDeposit,Fe as __namedExportsOrder,Ae as default};
