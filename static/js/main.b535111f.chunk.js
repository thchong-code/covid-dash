(this["webpackJsonpcovid-dash"]=this["webpackJsonpcovid-dash"]||[]).push([[0],{12:function(e,a,t){e.exports={container:"Cards_container__2alDK",card:"Cards_card__2yU1P",infected:"Cards_infected__1EFcA",active:"Cards_active__TD9Xv",recovered:"Cards_recovered__947st",deaths:"Cards_deaths__2I0Ix"}},211:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(17),o=t.n(c),i=t(6),l=t.n(i),s=t(11),d=t(76),u=t(77),m=t(83),p=t(82),v=t(228),h=t(50),f=t.n(h),b=t(225),g=t(226),E=t(227),y=t(27),C=t.n(y),x=t(28),_=t.n(x),w=t(12),S=t.n(w),D=function(e){var a=e.data,t=e.date,r=a.TotalConfirmed,c=a.TotalRecovered,o=a.TotalDeaths,i=r-o-c,l=new Date(t).toDateString();return r?n.a.createElement("div",{className:S.a.container},n.a.createElement(b.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(b.a,{item:!0,component:g.a,xs:12,md:2,className:_()(S.a.card,S.a.infected)},n.a.createElement(E.a,null,n.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0},"Confirmed"),n.a.createElement(v.a,{variant:"h5"},n.a.createElement(C.a,{start:0,end:r,duration:2.5,seperator:","})),n.a.createElement(v.a,{color:"textSecondary"},l),n.a.createElement(v.a,{variant:"body2"},"Number of infections globally"))),n.a.createElement(b.a,{item:!0,component:g.a,xs:12,md:2,className:_()(S.a.card,S.a.active)},n.a.createElement(E.a,null,n.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0},"Active"),n.a.createElement(v.a,{variant:"h5"},n.a.createElement(C.a,{start:0,end:i,duration:2.5,seperator:","})),n.a.createElement(v.a,{color:"textSecondary"},l),n.a.createElement(v.a,{variant:"body2"},"Number of active cases globally"))),n.a.createElement(b.a,{item:!0,component:g.a,xs:12,md:2,className:_()(S.a.card,S.a.recovered)},n.a.createElement(E.a,null,n.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),n.a.createElement(v.a,{variant:"h5"},n.a.createElement(C.a,{start:0,end:c,duration:2.5,seperator:","})),n.a.createElement(v.a,{color:"textSecondary"},l),n.a.createElement(v.a,{variant:"body2"},"Number of recoveries cases globally"))),n.a.createElement(b.a,{item:!0,component:g.a,xs:12,md:2,className:_()(S.a.card,S.a.deaths)},n.a.createElement(E.a,null,n.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),n.a.createElement(v.a,{variant:"h5"},n.a.createElement(C.a,{start:0,end:o,duration:2.5,seperator:","})),n.a.createElement(v.a,{color:"textSecondary"},l),n.a.createElement(v.a,{variant:"body2"},"Number of fatalities globally"))))):"Loading..."},k=t(39),j=t(37),F=t(20),N=t.n(F),O=function(){var e=Object(s.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.covid19api.com/summary",e.next=4,N.a.get("https://api.covid19api.com/summary");case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(l.a.mark((function e(a){var t,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t="https://api.covid19api.com/total/country",a&&(r="".concat(t,"/").concat(a)),a||(r="".concat(t,"/singapore")),e.prev=4,e.next=7,N.a.get(r);case 7:return n=e.sent,e.abrupt("return",n.data);case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(a){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://covid19.mathdro.id/api/daily",e.next=4,N.a.get("https://covid19.mathdro.id/api/daily");case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(s.a)(l.a.mark((function e(){var a,t,r,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://covid19.mathdro.id/api/countries/Singapore",e.next=4,N.a.get("https://covid19.mathdro.id/api/countries/Singapore");case 4:return a=e.sent,t=a.data.confirmed.value,r=a.data.recovered.value,n=a.data.deaths.value,c={infected:t,recovered:r,active:t-n-r,deaths:n},e.abrupt("return",c);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),T=t(29),I=t.n(T),H=function(e){e.country;var a=Object(r.useState)([]),t=Object(k.a)(a,2),c=t[0],o=t[1],i=Object(r.useState)({}),d=Object(k.a)(i,2),u=d[0],m=d[1],p=Object(r.useState)([]),h=Object(k.a)(p,2),f=h[0],y=h[1];Object(r.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,A();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=m,e.next=8,B();case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=y,e.next=13,R();case 13:e.t5=e.sent,(0,e.t4)(e.t5);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var C=f.length?n.a.createElement(j.Line,{data:{labels:f.map((function(e){return new Date(e.reportDate).toDateString()})),datasets:[{data:f.map((function(e){return e.totalConfirmed})),label:"Confirmed",borderColor:"#FFA500",backgroundColor:"rgba(255,165,0, 0.3)",fill:"origin"},{data:f.map((function(e){return e.deaths.total})),label:"Deaths",borderColor:"#FF0000",backgroundColor:"rgba(255,0,0, 0.3)",fill:"origin"},{data:f.map((function(e){return e.totalConfirmed-e.deaths.total})),label:"Active / Recovered",borderColor:"#8A2BE2",backgroundColor:"rgba(138,43,226, 0.3)",fill:"origin"}]},options:{maintainAspectRatio:!0,responsive:!0}}):null,x=c.length?n.a.createElement(j.Line,{data:{labels:c.map((function(e){return new Date(e.Date).toDateString()})),datasets:[{data:c.map((function(e){return e.Confirmed})),label:"Confirmed",borderColor:"#FFA500",backgroundColor:"rgba(255,165,0, 0.3)",fill:"origin"},{data:c.map((function(e){return e.Deaths})),label:"Deaths",borderColor:"#FF0000",backgroundColor:"rgba(255,0,0, 0.3)",fill:"origin"},{data:c.map((function(e){return e.Recovered})),label:"Recovered",borderColor:"#00FF7F",backgroundColor:"rgba(0,255,127, 0.3)",fill:"origin"},{data:c.map((function(e){return e.Active})),label:"Active",borderColor:"#FFFF00",backgroundColor:"rgba(255,255,0, 0.3)",fill:"origin"}]},options:{maintainAspectRatio:!0,responsive:!0}}):null,_=u?n.a.createElement(j.HorizontalBar,{data:{labels:["Confirmed","Recovered","Active","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(255,165,0, 0.5)","rgba(0,255,127, 0.5)","rgba(255,255,0, 0.5)","rgba(255, 0, 0, 0.3)"],data:[u.infected,u.recovered,u.active,u.deaths]}]},options:{legend:{display:!1}}}):null;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:I.a.container},n.a.createElement(b.a,{spacing:3,align:"center"},n.a.createElement(b.a,{item:!0,component:g.a,className:I.a.card},n.a.createElement(E.a,null,n.a.createElement(v.a,{variant:"h5",align:"center"},"World Trends \ud83c\udf0e"),C)),n.a.createElement(b.a,{item:!0,component:g.a,className:I.a.card},n.a.createElement(E.a,null,n.a.createElement(v.a,{variant:"h5",align:"center"},"Singapore Trends \ud83c\uddf8\ud83c\uddec"),x)),n.a.createElement(b.a,{item:!0,component:g.a,className:I.a.card},n.a.createElement(E.a,null,n.a.createElement(v.a,{variant:"h5",align:"center"},"Singapore Summary \ud83c\uddf8\ud83c\uddec"),_)))))},L=t(229),G=t(230),J=t(231),M=t(38),P=t.n(M),W=function(){return n.a.createElement("div",{className:P.a.root},n.a.createElement(L.a,{position:"static",style:{background:"#639ACE"}},n.a.createElement(G.a,{variant:"dense"},n.a.createElement(v.a,{variant:"h6",className:P.a.title},"COVID-19-DASH"),n.a.createElement(J.a,{onClick:function(){window.location.href="https://thchong-code.github.io/covid-dash/"},className:P.a.button,color:"inherit"},"\ud83d\udd04"))))},Y=function(e){Object(m.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(d.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={data:{},dataDynamic:{},date:"",country:""},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:a=e.sent,this.setState({data:a.Global}),this.setState({date:a.Date});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data,a=this.state.date,t=this.state.country;return n.a.createElement(n.a.Fragment,null,n.a.createElement(W,null),n.a.createElement("div",{className:f.a.container},n.a.createElement(D,{data:e,date:a}),n.a.createElement(H,{country:t})),n.a.createElement("div",{className:f.a.container},n.a.createElement(v.a,{variant:"h6",align:"center"},"Made with React and chart.js"),n.a.createElement(v.a,{variant:"h6",align:"center"},n.a.createElement("a",{href:"https://github.com/thchong-code/covid-dash"},"GitHub"),"\xa0\xa0",n.a.createElement("a",{href:"https://thchong-code.github.io/portfolio-webpage/"},"Website"))))}}]),t}(n.a.Component);o.a.render(n.a.createElement(Y,null),document.getElementById("root"))},29:function(e,a,t){e.exports={container:"Charts_container__1Y8uv",card:"Charts_card__1_Yrv"}},38:function(e,a,t){},50:function(e,a,t){e.exports={container:"App_container__3Cyev"}},88:function(e,a,t){e.exports=t(211)}},[[88,1,2]]]);
//# sourceMappingURL=main.b535111f.chunk.js.map