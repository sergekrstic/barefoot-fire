import{j as n}from"./jsx-runtime-BjgbQsUx.js";import{m as Ze,i as er,M as rr,c as tr,p as nr,d as ar,e as or,f as sr,g as ir,j as dr,t as cr,k,l as lr,s as pr,n as Z,o as ee,q as ur,r as mr,u as j,v as b,w as Je,x as hr,y as Ke,z as yr,h as fr,R as p}from"./TimelineScrubber.component-W7CwS7jP.js";import{t as f}from"./colors-UMl0uCuE.js";import{g as u}from"./utils-D7wPnyP3.js";import{r as h}from"./index-jJyPZTrg.js";import"./index-D2MAbzvX.js";const gr={ariaLabel:"dot",fill:"none",stroke:"currentColor",strokeWidth:1.5};function Cr(e){return e.sort===void 0&&e.reverse===void 0?pr({channel:"-r"},e):e}class vr extends rr{constructor(t,r={}){const{x:o,y:i,r:d,rotate:c,symbol:l=Z,frameAnchor:s}=r,[C,m]=ee(c,0),[x,w]=tr(l),[S,L]=ee(d,x==null?3:4.5);super(t,{x:{value:o,scale:"x",optional:!0},y:{value:i,scale:"y",optional:!0},r:{value:S,scale:"r",filter:nr,optional:!0},rotate:{value:C,optional:!0},symbol:{value:x,scale:"auto",optional:!0}},Cr(r),gr),this.r=L,this.rotate=m,this.symbol=w,this.frameAnchor=ar(s);const{channels:R}=this,{symbol:v}=R;if(v){const{fill:T,stroke:D}=R;v.hint={fill:T?T.value===v.value?"color":"currentColor":this.fill??"currentColor",stroke:D?D.value===v.value?"color":"currentColor":this.stroke??"none"}}}render(t,r,o,i,d){const{x:c,y:l}=r,{x:s,y:C,r:m,rotate:x,symbol:w}=o,{r:S,rotate:L,symbol:R}=this,[v,T]=ur(this,i),D=R===Z,U=m?void 0:S*S*Math.PI;return mr(S)&&(t=[]),or("svg:g",d).call(sr,this,i,d).call(ir,this,{x:s&&c,y:C&&l}).call(Ue=>Ue.selectAll().data(t).enter().append(D?"circle":"path").call(dr,this).call(D?J=>{J.attr("cx",s?a=>s[a]:v).attr("cy",C?a=>C[a]:T).attr("r",m?a=>m[a]:S)}:J=>{J.attr("transform",cr`translate(${s?a=>s[a]:v},${C?a=>C[a]:T})${x?a=>` rotate(${x[a]})`:L?` rotate(${L})`:""}`).attr("d",m&&w?a=>{const y=k();return w[a].draw(y,m[a]*m[a]*Math.PI),y}:m?a=>{const y=k();return R.draw(y,m[a]*m[a]*Math.PI),y}:w?a=>{const y=k();return w[a].draw(y,U),y}:(()=>{const a=k();return R.draw(a,U),a})())}).call(lr,this,o)).node()}}function wr(e,{y:t=er,...r}={}){return new vr(e,Ze({...r,y:t}))}function Qe(e){return n.jsx("div",{style:{height:"100vh",width:"100%"},children:n.jsx(e,{})})}Qe.__docgenInfo={description:"",methods:[],displayName:"withChartContainer"};function A({width:e,height:t,data:r,color:o=f.violet[700],opacity:i}){const d=h.useRef(null);return h.useEffect(()=>{var l;const c=j([b([0]),Je(r,{x:s=>new Date(s.date),y:"amount",fill:o,opacity:i})]).plot({width:e,height:t,marginLeft:50,y:{grid:!0}});return(l=d.current)==null||l.append(c),()=>c.remove()},[o,r,t,i,e]),n.jsx("div",{ref:d,className:"h-full w-full"})}A.__docgenInfo={description:"",methods:[],displayName:"AreaChart",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},data:{required:!0,tsType:{name:"Plot.Data"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"twColors.violet[700]",computed:!0}},opacity:{required:!1,tsType:{name:"number"},description:""}}};function K({width:e,height:t,data:r,interval:o,color:i=f.violet[700]}){const d=h.useRef(null);return h.useEffect(()=>{var l;const c=j([b([0]),hr(r,{x:s=>new Date(s.date),y:"amount",interval:o,fill:i})]).plot({width:e,height:t,marginLeft:50,y:{grid:!0}});return(l=d.current)==null||l.append(c),()=>c.remove()},[i,r,t,o,e]),n.jsx("div",{ref:d,className:"h-full w-full"})}K.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},data:{required:!0,tsType:{name:"Plot.Data"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"twColors.violet[700]",computed:!0}},interval:{required:!0,tsType:{name:"Plot.Interval"},description:""}}};function P({width:e,height:t,data:r,interval:o,color:i=f.violet[700]}){const d=h.useRef(null);return h.useEffect(()=>{var l;const c=j([b([0]),wr(r,{x:s=>new Date(s.date),y:"amount",fill:i,interval:o})]).plot({width:e,height:t,marginLeft:50,y:{grid:!0}});return(l=d.current)==null||l.append(c),()=>c.remove()},[i,r,t,o,e]),n.jsx("div",{ref:d,className:"h-full w-full"})}P.__docgenInfo={description:"",methods:[],displayName:"DotChart",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},data:{required:!0,tsType:{name:"Plot.Data"},description:""},interval:{required:!1,tsType:{name:"Plot.Interval"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"twColors.violet[700]",computed:!0}}}};function q({width:e,height:t,data:r,color:o=f.violet[700],smooth:i=!1}){const d=h.useRef(null);return h.useEffect(()=>{var l;const c=j([b([0]),Ke(r,{x:s=>new Date(s.date),y:"amount",stroke:o,curve:i?"natural":void 0})]).plot({width:e,height:t,marginLeft:50,y:{grid:!0}});return(l=d.current)==null||l.append(c),()=>c.remove()},[o,r,t,i,e]),n.jsx("div",{ref:d,className:"h-full w-full"})}q.__docgenInfo={description:"",methods:[],displayName:"LineChart",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},data:{required:!0,tsType:{name:"Plot.Data"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"twColors.violet[700]",computed:!0}},smooth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};function Q({width:e,height:t,data:r,color:o=f.violet[700],opacity:i}){const d=h.useRef(null);return h.useEffect(()=>{var l;const c=j([()=>yr`<defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="20%" stop-color="${o}" stop-opacity="0.5" />
          <stop offset="100%" stop-color="${o}" stop-opacity="0" />
        </linearGradient>
      </defs>`,b([0]),Je(r,{x:s=>new Date(s.date),y:"amount",fill:"url(#gradient)",opacity:i}),Ke(r,{x:s=>new Date(s.date),y:"amount",stroke:o,marker:"dot",channels:{amount:{label:"",value:"amount"},date:{label:"",value:"date"}},tip:{stroke:f.slate[700],fill:f.slate[800],fillOpacity:.9,format:{date:s=>fr(s).format("YYYY-MM-DD"),x:!1,y:!1}}})]).plot({width:e,height:t,marginLeft:50,y:{grid:!0}});return(l=d.current)==null||l.append(c),()=>c.remove()},[o,r,t,i,e]),n.jsx("div",{ref:d,className:"h-full w-full"})}Q.__docgenInfo={description:"",methods:[],displayName:"StyledAreaChart",props:{width:{required:!0,tsType:{name:"number"},description:""},height:{required:!0,tsType:{name:"number"},description:""},data:{required:!0,tsType:{name:"Plot.Data"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"twColors.violet[700]",computed:!0}},opacity:{required:!1,tsType:{name:"number"},description:""}}};const Sr=()=>n.jsx("div",{children:"Placeholder"}),Ar={component:Sr,parameters:{layout:"fullscreen"},decorators:[Qe]},g=f.amber[400],_={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(K,{width:t,height:r,data:e,interval:"month"})})}},I={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(K,{width:t,height:r,data:e,interval:"month",color:g})})}},B={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(q,{width:t,height:r,data:e})})}},N={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(q,{width:t,height:r,data:e,color:g})})}},Y={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(q,{width:t,height:r,data:e,smooth:!0})})}},E={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(q,{width:t,height:r,data:e,color:g,smooth:!0})})}},M={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(P,{width:t,height:r,data:e})})}},$={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(P,{width:t,height:r,data:e,color:g})})}},V={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(P,{width:t,height:r,data:e,interval:"month"})})}},z={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(P,{width:t,height:r,data:e,color:g,interval:"month"})})}},F={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(A,{width:t,height:r,data:e})})}},G={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(A,{width:t,height:r,data:e,color:g})})}},O={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(A,{width:t,height:r,data:e,opacity:.5})})}},X={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(A,{width:t,height:r,data:e,color:g,opacity:.5})})}},W={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(Q,{width:t,height:r,data:e,opacity:.5})})}},H={render:()=>{const e=u();return n.jsx(p,{children:({width:t,height:r})=>n.jsx(Q,{width:t,height:r,data:e,color:g,opacity:.5})})}};var re,te,ne;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <BarChartComponent width={width} height={height} data={data} interval="month" />}
      </ResponsiveContainer>;
  }
}`,...(ne=(te=_.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,se;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <BarChartComponent width={width} height={height} data={data} interval="month" color={secondaryColor} />}
      </ResponsiveContainer>;
  }
}`,...(se=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,de,ce;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <LineChartComponent width={width} height={height} data={data} />}
      </ResponsiveContainer>;
  }
}`,...(ce=(de=B.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var le,pe,ue;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <LineChartComponent width={width} height={height} data={data} color={secondaryColor} />}
      </ResponsiveContainer>;
  }
}`,...(ue=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,he,ye;Y.parameters={...Y.parameters,docs:{...(me=Y.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <LineChartComponent width={width} height={height} data={data} smooth />}
      </ResponsiveContainer>;
  }
}`,...(ye=(he=Y.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var fe,ge,Ce;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <LineChartComponent width={width} height={height} data={data} color={secondaryColor} smooth />}
      </ResponsiveContainer>;
  }
}`,...(Ce=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};var ve,we,Se;M.parameters={...M.parameters,docs:{...(ve=M.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <DotChartComponent width={width} height={height} data={data} />}
      </ResponsiveContainer>;
  }
}`,...(Se=(we=M.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Re,xe,Te;$.parameters={...$.parameters,docs:{...(Re=$.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <DotChartComponent width={width} height={height} data={data} color={secondaryColor} />}
      </ResponsiveContainer>;
  }
}`,...(Te=(xe=$.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var De,je,be;V.parameters={...V.parameters,docs:{...(De=V.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <DotChartComponent width={width} height={height} data={data} interval="month" />}
      </ResponsiveContainer>;
  }
}`,...(be=(je=V.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};var Ae,Pe,qe;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <DotChartComponent width={width} height={height} data={data} color={secondaryColor} interval="month" />}
      </ResponsiveContainer>;
  }
}`,...(qe=(Pe=z.parameters)==null?void 0:Pe.docs)==null?void 0:qe.source}}};var Le,ke,_e;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <AreaChartComponent width={width} height={height} data={data} />}
      </ResponsiveContainer>;
  }
}`,...(_e=(ke=F.parameters)==null?void 0:ke.docs)==null?void 0:_e.source}}};var Ie,Be,Ne;G.parameters={...G.parameters,docs:{...(Ie=G.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <AreaChartComponent width={width} height={height} data={data} color={secondaryColor} />}
      </ResponsiveContainer>;
  }
}`,...(Ne=(Be=G.parameters)==null?void 0:Be.docs)==null?void 0:Ne.source}}};var Ye,Ee,Me;O.parameters={...O.parameters,docs:{...(Ye=O.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <AreaChartComponent width={width} height={height} data={data} opacity={0.5} />}
      </ResponsiveContainer>;
  }
}`,...(Me=(Ee=O.parameters)==null?void 0:Ee.docs)==null?void 0:Me.source}}};var $e,Ve,ze;X.parameters={...X.parameters,docs:{...($e=X.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <AreaChartComponent width={width} height={height} data={data} color={secondaryColor} opacity={0.5} />}
      </ResponsiveContainer>;
  }
}`,...(ze=(Ve=X.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}};var Fe,Ge,Oe;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <StyledAreaChartComponent width={width} height={height} data={data} opacity={0.5} />}
      </ResponsiveContainer>;
  }
}`,...(Oe=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:Oe.source}}};var Xe,We,He;H.parameters={...H.parameters,docs:{...(Xe=H.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => {
    const data = generateRandomTimeSeriesData();
    return <ResponsiveContainer>
        {({
        width,
        height
      }) => <StyledAreaChartComponent width={width} height={height} data={data} color={secondaryColor} opacity={0.5} />}
      </ResponsiveContainer>;
  }
}`,...(He=(We=H.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};const Pr=["BarPrimary","BarSecondary","LinePrimary","LineSecondary","SmoothLinePrimary","SmoothLineSecondary","DotPrimary","DotSecondary","DotBinnedPrimary","DotBinnedSecondary","AreaPrimary","AreaSecondary","AreaTransparentPrimary","AreaTransparentSecondary","StyledAreaTransparentPrimary","StyledAreaTransparentSecondary"];export{F as AreaPrimary,G as AreaSecondary,O as AreaTransparentPrimary,X as AreaTransparentSecondary,_ as BarPrimary,I as BarSecondary,V as DotBinnedPrimary,z as DotBinnedSecondary,M as DotPrimary,$ as DotSecondary,B as LinePrimary,N as LineSecondary,Y as SmoothLinePrimary,E as SmoothLineSecondary,W as StyledAreaTransparentPrimary,H as StyledAreaTransparentSecondary,Pr as __namedExportsOrder,Ar as default};
