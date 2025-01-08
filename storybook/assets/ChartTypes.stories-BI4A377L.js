import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./CollapsibleTree.component-DSHTWi39.js";import"./Header.component-BGqI9wSV.js";import{m as nr,i as ar,M as or,a as sr,p as ir,b as dr,c as cr,d as lr,e as ur,f as pr,t as hr,g as L,h as mr,s as yr,j as Z,k as ee,l as fr,n as gr,r as Cr,o as D,q as re,u as T,v as vr,w as xr,x as Sr,y as Qe,z as wr,A as Ze,B as Rr,R as p}from"./ScenarioChart.container.v2-BI2yzkxS.js";import"./TimelineScrubber.component-bNzPTvUM.js";import"./ScenarioGraph.component-DA7gkCLf.js";import{t as g}from"./colors-Cuw9ST8W.js";import{h as Dr,g as h}from"./budget.data-CpXsGSqR.js";import{r as y}from"./index-PahMPgEy.js";import"./Fire.icon-Di-S4vvp.js";import"./react-resizable-panels.browser.esm-zIh8wNIw.js";const Tr={ariaLabel:"dot",fill:"none",stroke:"currentColor",strokeWidth:1.5};function jr(e){return e.sort===void 0&&e.reverse===void 0?yr({channel:"-r"},e):e}class br extends or{constructor(r,t={}){const{x:a,y:i,r:d,rotate:c,symbol:s=Z,frameAnchor:o}=t,[m,u]=ee(c,0),[f,C]=sr(s),[v,q]=ee(d,f==null?3:4.5);super(r,{x:{value:a,scale:"x",optional:!0},y:{value:i,scale:"y",optional:!0},r:{value:v,scale:"r",filter:ir,optional:!0},rotate:{value:m,optional:!0},symbol:{value:f,scale:"auto",optional:!0}},jr(t),Tr),this.r=q,this.rotate=u,this.symbol=C,this.frameAnchor=dr(o);const{channels:R}=this,{symbol:w}=R;if(w){const{fill:j,stroke:b}=R;w.hint={fill:j?j.value===w.value?"color":"currentColor":this.fill??"currentColor",stroke:b?b.value===w.value?"color":"currentColor":this.stroke??"none"}}}render(r,t,a,i,d){const{x:c,y:s}=t,{x:o,y:m,r:u,rotate:f,symbol:C}=a,{r:v,rotate:q,symbol:R}=this,[w,j]=fr(this,i),b=R===Z,Q=u?void 0:v*v*Math.PI;return gr(v)&&(r=[]),cr("svg:g",d).call(lr,this,i,d).call(ur,this,{x:o&&c,y:m&&s}).call(tr=>tr.selectAll().data(r).enter().append(b?"circle":"path").call(pr,this).call(b?K=>{K.attr("cx",o?l=>o[l]:w).attr("cy",m?l=>m[l]:j).attr("r",u?l=>u[l]:v)}:K=>{K.attr("transform",hr`translate(${o?l=>o[l]:w},${m?l=>m[l]:j})${f?l=>` rotate(${f[l]})`:q?` rotate(${q})`:""}`).attr("d",u&&C?l=>{const x=L();return C[l].draw(x,u[l]*u[l]*Math.PI),x}:u?l=>{const x=L();return R.draw(x,u[l]*u[l]*Math.PI),x}:C?l=>{const x=L();return C[l].draw(x,Q),x}:(()=>{const l=L();return R.draw(l,Q),l})())}).call(mr,this,a)).node()}}function Ar(e,{y:r=ar,...t}={}){return new br(e,nr({...t,y:r}))}function kr(e,r){return Pr(xr,e,r)}function Pr(e,r,t={}){const{x:a,y:i,maxRadius:d}=t,c=e({px:a,py:i,maxRadius:d}),s=[];a!=null&&s.push(Cr(r,te("x",{...c,inset:-6},t))),i!=null&&s.push(D(r,te("y",{...c,inset:-6},t))),a!=null&&s.push(re(r,ne("x",{...c,dy:9,frameAnchor:"bottom",lineAnchor:"top"},t))),i!=null&&s.push(re(r,ne("y",{...c,dx:-9,frameAnchor:"left",textAnchor:"end"},t)));for(const o of s)o.ariaLabel=`crosshair ${o.ariaLabel}`;return T(...s)}function er(e,{channels:r,...t},{facet:a,facetAnchor:i,fx:d,fy:c,[e]:s,channels:o,transform:m,initializer:u}){return{...t,facet:a,facetAnchor:i,fx:d,fy:c,[e]:s,channels:{...r,...o},transform:m,initializer:qr(e,u)}}function qr(e,r){return r==null?r:function(t,a,{x:i,y:d,px:c,py:s,...o},...m){const{channels:{x:u,y:f,...C}={},...v}=r.call(this,t,a,{...o,x:c,y:s},...m);return{channels:{...C,...u&&{px:u,...e==="x"&&{x:u}},...f&&{py:f,...e==="y"&&{y:f}}},...v}}}function te(e,r,t){const{color:a="currentColor",opacity:i=.2,ruleStroke:d=a,ruleStrokeOpacity:c=i,ruleStrokeWidth:s}=t;return{...er(e,r,t),stroke:d,strokeOpacity:c,strokeWidth:s}}function ne(e,r,t){const{color:a="currentColor",textFill:i=a,textFillOpacity:d,textStroke:c="var(--plot-background)",textStrokeOpacity:s,textStrokeWidth:o=5}=t;return{...er(e,r,Lr(e,t)),fill:i,fillOpacity:d,stroke:c,strokeOpacity:s,strokeWidth:o}}function Lr(e,r){return vr(r,(t,a,i)=>{var d;return{channels:{text:{value:(d=Sr(i,e))==null?void 0:d.value}}}})}const rr=e=>n.jsx("div",{style:{height:"100vh",width:"100%"},children:n.jsx(e,{})});rr.__docgenInfo={description:"",methods:[],displayName:"withChartContainer"};function A({width:e,height:r,data:t,color:a=g.violet[700],opacity:i}){const d=y.useRef(null);return y.useEffect(()=>{var s;const c=T([D([0]),Qe(t,{x:o=>new Date(o.date),y:"amount",fill:a,opacity:i})]).plot({width:e,height:r,marginLeft:50,y:{grid:!0}});return(s=d.current)==null||s.append(c),()=>c.remove()},[a,t,r,i,e]),n.jsx("div",{ref:d,className:"h-full w-full"})}A.__docgenInfo={description:"",methods:[],displayName:"AreaChart",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},data:{required:!0,tsType:{name:"Plot.Data"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"twColors.violet[700]",computed:!0}},opacity:{required:!1,tsType:{name:"number"},description:""}}};function H({width:e,height:r,data:t,interval:a,color:i=g.violet[700]}){const d=y.useRef(null);return y.useEffect(()=>{var s;const c=T([D([0]),wr(t,{x:o=>new Date(o.date),y:"amount",interval:a,fill:i})]).plot({width:e,height:r,marginLeft:50,y:{grid:!0}});return(s=d.current)==null||s.append(c),()=>c.remove()},[i,t,r,a,e]),n.jsx("div",{ref:d,className:"h-full w-full"})}H.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},data:{required:!0,tsType:{name:"Plot.Data"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"twColors.violet[700]",computed:!0}},interval:{required:!0,tsType:{name:"Plot.Interval"},description:""}}};function k({width:e,height:r,data:t,interval:a,color:i=g.violet[700]}){const d=y.useRef(null);return y.useEffect(()=>{var s;const c=T([D([0]),Ar(t,{x:o=>new Date(o.date),y:"amount",fill:i,interval:a})]).plot({width:e,height:r,marginLeft:50,y:{grid:!0}});return(s=d.current)==null||s.append(c),()=>c.remove()},[i,t,r,a,e]),n.jsx("div",{ref:d,className:"h-full w-full"})}k.__docgenInfo={description:"",methods:[],displayName:"DotChart",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},data:{required:!0,tsType:{name:"Plot.Data"},description:""},interval:{required:!1,tsType:{name:"Plot.Interval"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"twColors.violet[700]",computed:!0}}}};function P({width:e,height:r,data:t,color:a=g.violet[700],smooth:i=!1}){const d=y.useRef(null);return y.useEffect(()=>{var s;const c=T([D([0]),Ze(t,{x:o=>new Date(o.date),y:"amount",stroke:a,curve:i?"natural":void 0})]).plot({width:e,height:r,marginLeft:50,y:{grid:!0}});return(s=d.current)==null||s.append(c),()=>c.remove()},[a,t,r,i,e]),n.jsx("div",{ref:d,className:"h-full w-full"})}P.__docgenInfo={description:"",methods:[],displayName:"LineChart",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},data:{required:!0,tsType:{name:"Plot.Data"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"twColors.violet[700]",computed:!0}},smooth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function J({width:e,height:r,data:t,color:a=g.violet[700],opacity:i}){const d=y.useRef(null);return y.useEffect(()=>{var s;const c=T([()=>Rr`<defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="20%" stop-color="${a}" stop-opacity="0.5" />
          <stop offset="100%" stop-color="${a}" stop-opacity="0" />
        </linearGradient>
      </defs>`,D([0]),Qe(t,{x:o=>new Date(o.date),y:"amount",fill:"url(#gradient)",opacity:i}),kr(t,{x:o=>new Date(o.date),y:"amount",ruleStroke:"currentColor",ruleStrokeOpacity:.2,ruleStrokeWidth:1,textFill:"currentColor",textStroke:g.slate[950],textStrokeOpacity:1,textStrokeWidth:5}),Ze(t,{x:o=>new Date(o.date),y:"amount",stroke:a,marker:"dot",channels:{amount:{label:"Amount",value:"amount"},date:{label:"",value:"date"}},tip:{stroke:g.slate[700],fill:g.slate[800],fillOpacity:.9,format:{x:!1,y:!1,date:o=>Dr(o).format("D MMMM, YYYY"),amount:o=>o.toLocaleString("en-AU",{style:"currency",currency:"AUD"})}}})]).plot({width:e,height:r,marginLeft:50,y:{grid:!0}});return(s=d.current)==null||s.append(c),()=>c.remove()},[a,t,r,i,e]),n.jsx("div",{ref:d,className:"h-full w-full"})}J.__docgenInfo={description:"",methods:[],displayName:"StyledAreaChart",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},data:{required:!0,tsType:{name:"Plot.Data"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"twColors.violet[700]",computed:!0}},opacity:{required:!1,tsType:{name:"number"},description:""}}};const _r=()=>n.jsx("div",{children:"Placeholder"}),zr={component:_r,parameters:{layout:"fullscreen"},decorators:[rr]},S=g.amber[400],_={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(H,{width:r,height:t,data:e,interval:"month"})})}},B={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(H,{width:r,height:t,data:e,interval:"month",color:S})})}},I={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(P,{width:r,height:t,data:e})})}},O={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(P,{width:r,height:t,data:e,color:S})})}},N={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(P,{width:r,height:t,data:e,smooth:!0})})}},M={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(P,{width:r,height:t,data:e,color:S,smooth:!0})})}},Y={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(k,{width:r,height:t,data:e})})}},E={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(k,{width:r,height:t,data:e,color:S})})}},$={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(k,{width:r,height:t,data:e,interval:"month"})})}},W={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(k,{width:r,height:t,data:e,color:S,interval:"month"})})}},V={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(A,{width:r,height:t,data:e})})}},F={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(A,{width:r,height:t,data:e,color:S})})}},z={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(A,{width:r,height:t,data:e,opacity:.4})})}},X={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(A,{width:r,height:t,data:e,color:S,opacity:.4})})}},G={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(J,{width:r,height:t,data:e,opacity:.5})})}},U={render:()=>{const e=h();return n.jsx(p,{children:({width:r,height:t})=>n.jsx(J,{width:r,height:t,data:e,color:S,opacity:.5})})}};var ae,oe,se;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <BarChartComponent width={width} height={height} data={data} interval="month" />}
      </ResponsiveContainer>;
  }
}`,...(se=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,de,ce;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <BarChartComponent width={width} height={height} data={data} interval="month" color={secondaryColor} />}
      </ResponsiveContainer>;
  }
}`,...(ce=(de=B.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var le,ue,pe;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <LineChartComponent width={width} height={height} data={data} />}
      </ResponsiveContainer>;
  }
}`,...(pe=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var he,me,ye;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <LineChartComponent width={width} height={height} data={data} color={secondaryColor} />}
      </ResponsiveContainer>;
  }
}`,...(ye=(me=O.parameters)==null?void 0:me.docs)==null?void 0:ye.source}}};var fe,ge,Ce;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <LineChartComponent width={width} height={height} data={data} smooth />}
      </ResponsiveContainer>;
  }
}`,...(Ce=(ge=N.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};var ve,xe,Se;M.parameters={...M.parameters,docs:{...(ve=M.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <LineChartComponent width={width} height={height} data={data} color={secondaryColor} smooth />}
      </ResponsiveContainer>;
  }
}`,...(Se=(xe=M.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var we,Re,De;Y.parameters={...Y.parameters,docs:{...(we=Y.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <DotChartComponent width={width} height={height} data={data} />}
      </ResponsiveContainer>;
  }
}`,...(De=(Re=Y.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var Te,je,be;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <DotChartComponent width={width} height={height} data={data} color={secondaryColor} />}
      </ResponsiveContainer>;
  }
}`,...(be=(je=E.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};var Ae,ke,Pe;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <DotChartComponent width={width} height={height} data={data} interval="month" />}
      </ResponsiveContainer>;
  }
}`,...(Pe=(ke=$.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var qe,Le,_e;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <DotChartComponent width={width} height={height} data={data} color={secondaryColor} interval="month" />}
      </ResponsiveContainer>;
  }
}`,...(_e=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:_e.source}}};var Be,Ie,Oe;V.parameters={...V.parameters,docs:{...(Be=V.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <AreaChartComponent width={width} height={height} data={data} />}
      </ResponsiveContainer>;
  }
}`,...(Oe=(Ie=V.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var Ne,Me,Ye;F.parameters={...F.parameters,docs:{...(Ne=F.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <AreaChartComponent width={width} height={height} data={data} color={secondaryColor} />}
      </ResponsiveContainer>;
  }
}`,...(Ye=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:Ye.source}}};var Ee,$e,We;z.parameters={...z.parameters,docs:{...(Ee=z.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <AreaChartComponent width={width} height={height} data={data} opacity={0.4} />}
      </ResponsiveContainer>;
  }
}`,...(We=($e=z.parameters)==null?void 0:$e.docs)==null?void 0:We.source}}};var Ve,Fe,ze;X.parameters={...X.parameters,docs:{...(Ve=X.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <AreaChartComponent width={width} height={height} data={data} color={secondaryColor} opacity={0.4} />}
      </ResponsiveContainer>;
  }
}`,...(ze=(Fe=X.parameters)==null?void 0:Fe.docs)==null?void 0:ze.source}}};var Xe,Ge,Ue;G.parameters={...G.parameters,docs:{...(Xe=G.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <StyledAreaChartComponent width={width} height={height} data={data} opacity={0.5} />}
      </ResponsiveContainer>;
  }
}`,...(Ue=(Ge=G.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};var Ke,He,Je;U.parameters={...U.parameters,docs:{...(Ke=U.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <StyledAreaChartComponent width={width} height={height} data={data} color={secondaryColor} opacity={0.5} />}
      </ResponsiveContainer>;
  }
}`,...(Je=(He=U.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};const Xr=["BarPrimary","BarSecondary","LinePrimary","LineSecondary","SmoothLinePrimary","SmoothLineSecondary","DotPrimary","DotSecondary","DotBinnedPrimary","DotBinnedSecondary","AreaPrimary","AreaSecondary","AreaTransparentPrimary","AreaTransparentSecondary","StyledAreaPrimary","StyledAreaSecondary"];export{V as AreaPrimary,F as AreaSecondary,z as AreaTransparentPrimary,X as AreaTransparentSecondary,_ as BarPrimary,B as BarSecondary,$ as DotBinnedPrimary,W as DotBinnedSecondary,Y as DotPrimary,E as DotSecondary,I as LinePrimary,O as LineSecondary,N as SmoothLinePrimary,M as SmoothLineSecondary,G as StyledAreaPrimary,U as StyledAreaSecondary,Xr as __namedExportsOrder,zr as default};
