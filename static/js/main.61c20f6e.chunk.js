(this.webpackJsonpsignaldesh=this.webpackJsonpsignaldesh||[]).push([[0],{151:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},161:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},171:function(e,t){},173:function(e,t){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),s=a.n(r),i=(a(151),a(13)),o=(a(152),a(153),a(243)),l=Object(o.a)({iconButton:{width:"40px",height:"40px"},chevronIcon:{width:"35px",left:"95%",top:"15px",transform:"translateX(-100%)"},openSideManu:{width:"40px"},addCSVIcon:{transform:"scale(1.7)"}}),d=a(116),j=a.n(d),u=a(258),b=a(1);var h=function(e){var t=e.setOpenManu,a=l();return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"navBar",children:Object(b.jsx)(u.a,{className:a.iconButton,onClick:function(){return t(!0)},children:Object(b.jsx)(j.a,{className:a.openSideManu})})})})},O=(a(161),a(41)),p=function(e){return{type:"LOAD_GROUP_CHART",payload:e}},x=a(261);var m=function(e){var t=e.roundGroup,a=Object.values(t)[0],n=Object(O.b)();return Object(b.jsx)("div",{children:Object(b.jsx)(x.a,{variant:"outlined",size:"large",onClick:function(){n(p(a))},children:t.id})})},v=(a(163),Object(o.a)({tableContainer:{},button:{minWidth:"80px",height:"25px",fontSize:"10px",marginTop:"2px"},tableRow:{},tableCell:{},tooltip:{fontSize:"13px!important"}})),f=a(265),g=a(263),S=a(266),N=a(262),R=a(267),_=a(252),I=(a(164),a(124)),C=a.n(I),T=a(123),L=a.n(T),y=a(268),A=a(256),w=a(253),D=(a(165),a(119)),k=a.n(D),E=a(120),M=a.n(E),F=a(121),V=a.n(F),G=a(122),B=a.n(G),P=a(254),z=a(257);var U=function(e){var t=e.roundInfo,a=e.CEOscore,c=v(),r=Object(n.useState)(!1),s=Object(i.a)(r,2),o=s[0],l=s[1],d=Object(n.useState)(""),j=Object(i.a)(d,2),u=j[0],h=j[1],O=Object(n.useState)(!1),p=Object(i.a)(O,2),x=p[0],m=p[1],f=Object(n.useState)(""),g=Object(i.a)(f,2),S=g[0],N=g[1];Object(n.useEffect)((function(){var e=t.leadInvestor,a=t.investors;R(e,a),t.TVR=Math.round(100*t.TVR)/100}),[t]);var R=function(e,t){var a=e.split(","),n=t.split(",");a.length>1?(l(e),h(a.slice(0,1).join(""))):l(!1),n.length>1?(m(t),N(n[0])):m(!1)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"companyRoundInfo-container",children:[Object(b.jsxs)("div",{className:"rawData",children:[Object(b.jsx)(P.a,{placement:"right-start",title:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(z.a,{className:c.tooltip,children:"Round Investment"})}),children:Object(b.jsxs)("div",{className:"inline",children:[Object(b.jsx)(k.a,{}),Object(b.jsx)("div",{children:"".concat(t.investment," (m)")})]})}),Object(b.jsx)(P.a,{placement:"right-start",title:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(z.a,{className:c.tooltip,children:"Round Date"})}),children:Object(b.jsxs)("div",{className:"inline",children:[Object(b.jsx)(M.a,{}),Object(b.jsx)("div",{children:t.date})]})}),Object(b.jsx)(P.a,{placement:"right-start",title:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(z.a,{className:c.tooltip,children:"Lead Investor/s"})}),children:Object(b.jsxs)("div",{className:"inline",children:[Object(b.jsx)(V.a,{}),Object(b.jsx)("div",{children:o?Object(b.jsxs)("div",{children:[u,Object(b.jsx)(P.a,{title:o,children:Object(b.jsx)(A.a,{variant:"contained",size:"small",color:"primary",children:"see more..."})})]}):Object(b.jsx)("div",{children:t.leadInvestor})})]})}),Object(b.jsx)(P.a,{placement:"right-start",title:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(z.a,{className:c.tooltip,children:"Investor/s"})}),children:Object(b.jsxs)("div",{className:"inline",children:[Object(b.jsx)(B.a,{}),Object(b.jsx)("div",{children:x?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:S}),Object(b.jsx)(P.a,{title:x,children:Object(b.jsx)(A.a,{variant:"contained",size:"small",color:"primary",children:"see more..."})})]}):Object(b.jsx)("div",{children:t.investors})})]})}),Object(b.jsx)(P.a,{placement:"right-start",title:Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(z.a,{className:c.tooltip,children:["TSLI - Time Since Last Round (","".concat(t.TSLI),")"]})}),children:Object(b.jsx)("div",{children:"TSLI: ".concat(t.TSLI)})})]}),Object(b.jsxs)("div",{className:"scoreData",children:[Object(b.jsx)(P.a,{placement:"right-start",title:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(z.a,{className:c.tooltip,children:"IGR - Investment Growth Relevance (25%)"}),Object(b.jsxs)(z.a,{className:c.tooltip,children:["IGR investment quality calc - Multiplier (","".concat(t.multiplier),") / TSLI (","".concat(t.TSLI),")"]}),Object(b.jsx)(z.a,{className:c.tooltip,children:"IGR Formula - 'investment quality calc'  * monthly factor"}),Object(b.jsx)(z.a,{className:c.tooltip,children:"'Multiplier' - investment ratio between two rounds"}),Object(b.jsx)(z.a,{className:c.tooltip,children:"'Monthly factor' - value between 1-3 based on TSLI"}),Object(b.jsx)(z.a,{className:c.tooltip,children:"*Finale IGR score can be up to 15 points if 'investment quality calc' result is below '0.5'"}),Object(b.jsx)(z.a,{className:c.tooltip,children:"*Finlae IGR score can be up to 25 points if 'investment quality calc' result is above '0.5'"})]}),children:Object(b.jsx)("div",{children:"IGR Score: ".concat(t.IGR)})}),Object(b.jsx)(P.a,{placement:"right-start",title:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(z.a,{className:c.tooltip,children:"TVR - Time Versus Rounds (10%)"}),Object(b.jsx)(z.a,{className:c.tooltip,children:"Formula - Avg TSLI ( TSLI / (number or rounds-1)"}),Object(b.jsx)(z.a,{className:c.tooltip,children:"Finale TVR score will be between 1-10 depends of TSLI in 6-24 months "}),Object(b.jsx)(z.a,{className:c.tooltip,children:"*6 months or below will credit 10 points"}),Object(b.jsx)(z.a,{className:c.tooltip,children:"*24 months or above will credit 1 point"})]}),children:Object(b.jsx)("div",{children:"TVR Score: ".concat(t.TVR)})}),Object(b.jsx)(P.a,{placement:"right-start",title:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(z.a,{className:c.tooltip,children:"Finance - Total raised investment (5%)"}),Object(b.jsx)(z.a,{className:c.tooltip,children:"5 points will be credited upon company funding sum reach above fixed threshold "}),Object(b.jsx)(z.a,{className:c.tooltip,children:" 2 rounds group threshold - 15m "}),Object(b.jsx)(z.a,{className:c.tooltip,children:" 3 rounds group threshold - 35m "}),Object(b.jsx)(z.a,{className:c.tooltip,children:" 4 rounds group threshold - 70m "}),Object(b.jsx)(z.a,{className:c.tooltip,children:" 5 rounds group threshold - 110m "}),Object(b.jsx)(z.a,{className:c.tooltip,children:" 6 rounds group threshold - 170m "}),Object(b.jsx)(z.a,{className:c.tooltip,children:" 7+ rounds group threshold - 250m "})]}),children:Object(b.jsx)("div",{children:"Finance Score: ".concat(t.finance)})}),Object(b.jsx)("div",{children:"CEO score: ".concat(a)}),Object(b.jsx)("div",{children:"Lead Score ".concat(t.leadScore)}),Object(b.jsx)("div",{children:"Previous Lead Score ".concat(t.previousLeadScore)})]})]})})};var q=function(e){var t=e.companyData,a=v(),c=Object(n.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],l=Object(n.useState)(!1),d=Object(i.a)(l,2),j=d[0],h=d[1],O=Object(n.useState)(""),p=Object(i.a)(O,2),x=p[0],m=p[1];Object(n.useEffect)((function(){var e=t.rounds[t.rounds.length-1].leadInvestor;f(e)}),[t]);var f=function(e){var t=e.split(",");t.length>2?(h(e),m(t.slice(0,2).join(", "))):h(!1)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(N.a,{className:a.tableRow,sx:{"& > *":{borderBottom:"unset"}},children:[Object(b.jsx)(g.a,{children:Object(b.jsx)(u.a,{"aria-label":"expand row",size:"small",onClick:function(){return o(!s)},children:s?Object(b.jsx)(L.a,{}):Object(b.jsx)(C.a,{})})}),Object(b.jsx)(g.a,{align:"left",children:t.name}),Object(b.jsx)(g.a,{align:"left",children:t.established}),Object(b.jsx)(g.a,{align:"left",children:t.numberOfRounds}),Object(b.jsx)(g.a,{align:"left",children:t.totalRaised}),j?Object(b.jsxs)(g.a,{className:a.tableCell,align:"left",children:[x,Object(b.jsx)(w.a,{title:j,children:Object(b.jsx)(A.a,{variant:"contained",className:a.button,color:"primary",children:"see more..."})})]}):Object(b.jsx)(g.a,{align:"left",children:t.rounds[t.rounds.length-1].leadInvestor}),Object(b.jsx)(g.a,{align:"left",children:t.CEO}),Object(b.jsx)(g.a,{align:"center",children:t.score})]}),Object(b.jsx)(N.a,{children:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(g.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(b.jsx)(y.a,{in:s,timeout:"auto",unmountOnExit:!0,children:Object(b.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:t.rounds.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(U,{roundInfo:e,CEOscore:t.CEOscore})},e.roundNumber)}))})})})})})]})},H=a(264);var W=function(e){var t=e.chartData,a=v(),c=Object(n.useState)(0),r=Object(i.a)(c,2),s=r[0],o=r[1],l=Object(n.useState)(10),d=Object(i.a)(l,2),j=d[0],u=d[1],h=Object(n.useState)(""),O=Object(i.a)(h,2),p=O[0],x=O[1];return Object(n.useEffect)((function(){var e=t.map((function(e){var t;return"Sorbet"==e.name&&console.log("aaaaaaaa",e,"aaaaaaaaa"),e.rounds.forEach((function(e){e.IGR=function(e){var t=e.TSLI,a=e.multiplier,n="N/A";if(t&&a){var c=a/t,r=3;t<=5?console.log("\u2193\u2193\u2193 Need Checking IGR \u2193\u2193\u2193"):t<=12?r-=.085*(t-5):t<=24?(r-=.6,r-=.11*(t-12)):r=1,n=c*r,n=Math.round(100*n)/100}return s=n,s<.04?s=1:s>=.04&&s<=.5?s=100*(s-.04)*(15/46):s>.5&&(s=s>1.5?25:10*(s-.5)+15),n=s,Math.round(100*n)/100;var s}(e),function(e){var t={lead:{AAA:21.84,AA:16.38,A:10.92,B:5.46},previousLead:{AAA:16.32,AA:12.24,A:8.16,B:4.08}};e.leadScore?e.leadScore=t.lead[e.leadScore]:e.leadScore=0,e.previousLeadScore?e.previousLeadScore=t.previousLead[e.previousLeadScore]:e.previousLeadScore=0}(e)})),function(e){for(var t=0,a=1;a<e.rounds.length;a++){var n=(t+=e.rounds[a].TSLI)/a;if(n<7)e.rounds[a].TVR=10;else if(n>23)e.rounds[a].TVR=0;else{var c=10-.555*(n-6);e.rounds[a].TVR=Math.round(100*c)/100}}}(e),function(e){var t=0;e.rounds[0]&&(t=+e.rounds[0].investment);for(var a=1;a<e.rounds.length;a++)switch(t+=+e.rounds[a].investment,e.rounds[a].roundNumber){case 2:t>15&&(e.rounds[a].finance=5);break;case 3:t>35&&(e.rounds[a].finance=5);break;case 4:t>70&&(e.rounds[a].finance=5);break;case 5:t>110&&(e.rounds[a].finance=5);break;case 6:t>170&&(e.rounds[a].finance=5);break;case 7:t>250&&(e.rounds[a].finance=5);break;default:e.rounds[a].finance=0}}(e),(t=e).CEOscore?t.CEOscore={AAA:21.84,AA:16.38,A:10.92,B:5.46}[t.CEOscore]:t.CEOscore=0,function(e){var t=e.rounds[e.rounds.length-1],a=(t.IGR?t.IGR:0)+(t.TVR?t.TVR:0)+(t.finance?t.finance:0)+e.CEOscore+t.leadScore+t.previousLeadScore,n=Math.round(100*a)/100;e.score=n}(e),e}));x(e)}),[t]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(H.a,{sx:{maxHeight:440},children:Object(b.jsxs)(f.a,{stickyHeader:!0,"aria-label":"collapsible table",className:a.tableContainer,children:[Object(b.jsx)(S.a,{children:Object(b.jsxs)(N.a,{children:[Object(b.jsx)(g.a,{}),Object(b.jsx)(g.a,{align:"left",children:"Name"}),Object(b.jsx)(g.a,{align:"left",children:"Established"}),Object(b.jsx)(g.a,{align:"left",children:"Round"}),Object(b.jsx)(g.a,{align:"left",children:"TotalRaised"}),Object(b.jsx)(g.a,{align:"left",children:"Lead"}),Object(b.jsx)(g.a,{align:"left",children:"CEO"}),Object(b.jsx)(g.a,{align:"center",children:"Score"})]})}),Object(b.jsx)(R.a,{children:p&&p.sort((function(e,t){return t.score-e.score})).slice(s*j,s*j+j).map((function(e){return Object(b.jsx)(q,{companyData:e},e.name)}))})]})}),Object(b.jsx)(_.a,{rowsPerPageOptions:[10,25,100],component:"div",count:t.length,rowsPerPage:j,page:s,onPageChange:function(e,t){o(t)},onRowsPerPageChange:function(e){u(+e.target.value),o(0)}})]})},J=a(259);var X=function(){var e=Object(O.c)((function(e){return e.csvData})),t=e.csvData,a=Object(O.c)((function(e){return e.chartData}));return Object(b.jsxs)("div",{className:"chartContainer",children:[Object(b.jsx)("div",{className:"chartContainer-leftMargin"}),Object(b.jsx)(J.a,{sx:{width:"100%",overflow:"hidden"},children:!e.error&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"chartContainer-tabs",children:t.map((function(e){return Object(b.jsx)(m,{roundGroup:e},e.id)}))}),Object(b.jsx)("div",{children:Object(b.jsx)(W,{chartData:a.roundGroupData})})]})}),Object(b.jsx)("div",{className:"chartContainer-rightMargin"})]})},K=(a(167),a(125)),Q=a.n(K);var Y=function(e){var t=e.openManu,a=e.setOpenManu,n=l();return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"sideManu-container",children:t&&Object(b.jsx)(u.a,{onClick:function(){return a(!1)},size:"small",className:n.chevronIcon,children:Object(b.jsx)(Q.a,{})})})})};a(168);var Z=function(e){var t=e.rounds.map((function(e){var t=e.date.split("/"),a=new Date(t[2],t[1],t[0]);return e.date=a,e})).sort((function(e,t){return e.date-t.date}));e.rounds=t;for(var a=0;a<e.rounds.length;a++){var n=e.rounds[a].date.toLocaleDateString("en-GB");e.rounds[a].date=n,e.rounds[a].roundNumber=a+1}return e},$=function(e){for(var t=1;t<e.length;t++){var a=e[t].date.split("/"),n=e[t-1].date.split("/"),c=12*(a[2]-n[2]);c-=Number(n[1]),c+=Number(a[1]),e[t].TSLI=c}},ee=function(e){for(var t=1;t<e.length;t++){var a=e[t].investment/e[t-1].investment;e[t].multiplier=Math.round(100*a)/100}},te=function(e){for(var t=[{round_one_group:[],id:"1"},{round_two_group:[],id:"2"},{round_three_group:[],id:"3"},{round_four_group:[],id:"4"},{round_five_group:[],id:"5"},{round_six_group:[],id:"6"},{round_seven_group:[],id:"7"},{round_eight_group:[],id:"8"},{more_than_eight_rounds:[],id:"+"}],a=!0,n={},c=1;c<e.length-1;c++){var r=e[c],s=e[c+1];if(a&&(n.name=r.data[0],n.established=r.data[6],n.numberOfRounds=1,n.totalRaised=r.data[7],n.CEO=r.data[15],n.description=r.data[2],n.subSector=r.data[3],n.employees=r.data[5],n.rounds=[{roundNumber:"",investment:r.data[12],date:r.data[9],leadInvestor:r.data[14],investors:r.data[13],leadScore:r.data[17],previousLeadScore:0}],n.companyValuation="",n.CEOscore=r.data[16],n.score=""),s&&r.data[0]===s.data[0])n.numberOfRounds+=1,n.rounds.push({roundNumber:"",investment:s.data[12],date:s.data[9],leadInvestor:s.data[14],investors:s.data[13],leadScore:s.data[17],previousLeadScore:r.data[17],TSLI:"",IGR:"Need to be caculated",finance:0}),a=!1;else{var i=Z(n);switch($(i.rounds),ee(i.rounds),i.numberOfRounds){case 1:t[0].round_one_group.push(i);break;case 2:t[1].round_two_group.push(i);break;case 3:t[2].round_three_group.push(i);break;case 4:t[3].round_four_group.push(i);break;case 5:t[4].round_five_group.push(i);break;case 6:t[5].round_six_group.push(i);break;case 7:t[6].round_seven_group.push(i);break;case 8:t[7].round_eight_group.push(i);break;default:t[8].more_than_eight_rounds.push(i)}n={},a=!0}}return t},ae=a(126),ne=a(260),ce=a(128),re=a.n(ce),se=c.a.createRef();var ie=function(e){var t=e.isOpen,a=l(),n=Object(O.b)(),c=function(e){se.current&&se.current.open(e)};return Object(b.jsx)("div",{className:t?"addCSVbutton-container isOpen":"addCSVbutton-container isClosed",children:Object(b.jsx)(ae.a,{ref:se,onFileLoad:function(e){n(function(e){return{type:"STORE_CSV_DATA",payload:te(e)}}(e))},onError:function(e){console.log(e),n({type:"CSV_DATA_FAILURE",error:e})},noClick:!0,progressBarColor:"red",children:function(e){e.file;return Object(b.jsx)("div",{children:Object(b.jsx)(w.a,{title:"Upload a CSV file",children:Object(b.jsx)(ne.a,{type:"button",color:"primary",className:a.addCSVIcon,"aria-label":"add",onClick:c,children:Object(b.jsx)(re.a,{})})})})}})})};var oe=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(b.jsxs)("div",{className:"app-container",children:[Object(b.jsx)("div",{className:a?"app-sideManu-open":"app-sideManu-shrinked",children:Object(b.jsx)(Y,{openManu:a,setOpenManu:c})}),Object(b.jsxs)("div",{className:"app-body-container",children:[Object(b.jsx)(ie,{isOpen:a}),Object(b.jsx)(h,{setOpenManu:c}),Object(b.jsx)("div",{className:"app-body-topInfo-container"}),Object(b.jsx)(X,{})]})]})},le=a(62),de=a(50),je={csvData:[],error:""},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STORE_CSV_DATA":return Object(de.a)(Object(de.a)({},e),{},{csvData:t.payload});case"CSV_DATA_FAILURE":return Object(de.a)(Object(de.a)({},e),{},{error:t.error});default:return e}},be={roundGroupData:[]},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;return"LOAD_GROUP_CHART"===t.type?Object(de.a)(Object(de.a)({},e),{},{roundGroupData:t.payload}):e},Oe=Object(le.combineReducers)({csvData:ue,chartData:he}),pe=a(129),xe=a(130),me=Object(le.createStore)(Oe,Object(xe.composeWithDevTools)(Object(le.applyMiddleware)(pe.a)));s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O.a,{store:me,children:Object(b.jsx)(oe,{})})}),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.61c20f6e.chunk.js.map