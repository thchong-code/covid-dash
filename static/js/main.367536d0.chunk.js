(this["webpackJsonpcovid-dash"]=this["webpackJsonpcovid-dash"]||[]).push([[0],{104:function(e,a,t){e.exports=t(234)},232:function(e,a,t){},234:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(31),c=t.n(o),l=t(62),i=t(10),s=t(3),m=t.n(s),u=t(6),d=t(11),p=t(250),b=t(266),g=t(101),E=t(254),h=t(264),f=t(255),v=t(256),y=t(257),k=t(258),x=t(259),C=t(260),w=t(261),j=t(262),N=t(252),O=t(253),T=t(235),A=Object(p.a)({root:{backgroundColor:"rgb(92, 219, 149, 0.2)",padding:"0% !important",margin:"0% !important"},root1:{padding:"1%",textAlign:"justify",marginTop:"0% !important",backgroundColor:"rgb(92, 219, 149, 0.2)"}}),R=function(){var e=A();return n.a.createElement(n.a.Fragment,null,n.a.createElement(N.a,{position:"static",color:"transparent",elevation:0,className:e.root},n.a.createElement(O.a,null,n.a.createElement(E.a,{justify:"space-evenly",container:!0,spacing:3},n.a.createElement(E.a,{item:!0},n.a.createElement(h.a,{href:"#/",className:e.button,color:"inherit"},n.a.createElement(T.a,{variant:"h6"},n.a.createElement("span",{role:"img","aria-label":"grinning face",id:"rise trend"},"\ud835\uddd6\ud835\udde2\ud835\udde9\ud835\udddc\ud835\uddd7\ud83e\udda0\ud835\udde7\ud835\udde5\ud835\uddd4\ud835\uddd6\ud835\uddde\ud835\uddd8\ud835\udde5")))),n.a.createElement(E.a,{item:!0},n.a.createElement(h.a,{size:"large",href:" #/",color:"inherit",className:e.current},"Home")),n.a.createElement(E.a,{item:!0},n.a.createElement(h.a,{size:"large",href:" #/singapore",color:"inherit",className:e.current},"Singapore")),n.a.createElement(E.a,{item:!0},n.a.createElement(h.a,{size:"large",href:" #/summary",color:"inherit",className:e.current},"Summary")),n.a.createElement(E.a,{item:!0},n.a.createElement(h.a,{size:"large",href:" #/news",color:"inherit",className:e.current},"News")),n.a.createElement(E.a,{item:!0},n.a.createElement(h.a,{size:"large",href:" #/about",color:"inherit",className:e.current},"About")),n.a.createElement(E.a,{item:!0},n.a.createElement(h.a,{size:"large",onClick:function(){return window.location.reload(!1)},color:"secondary",className:e.current},n.a.createElement("span",{role:"img","aria-label":"grinning face",id:"rise trend"},"\ud83d\udd04")))))),n.a.createElement(g.a,{elevation:0,className:e.root1},n.a.createElement(T.a,{variant:"button"},"For the latest travel advisories visit",n.a.createElement(h.a,{color:"secondary",href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/travel-advice",target:"_blank"},"World Health Organisation"))))},D=t(13),S=t.n(D),F=function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.covid19api.com/summary",e.next=4,S.a.get("https://api.covid19api.com/summary");case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(u.a)(m.a.mark((function e(a){var t,r,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t="https://api.covid19api.com/total/country",a&&(r="".concat(t,"/").concat(a)),a||(r="".concat(t,"/singapore")),e.prev=4,e.next=7,S.a.get(r);case 7:return n=e.sent,e.abrupt("return",n.data);case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(a){return e.apply(this,arguments)}}(),H=function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://covid19-api.org/api/timeline",e.next=4,S.a.get("https://covid19-api.org/api/timeline");case 4:return a=e.sent,e.abrupt("return",a.data.reverse());case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(m.a.mark((function e(){var a,t,r,n,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://covid19.mathdro.id/api/countries/Singapore",e.next=4,S.a.get("https://covid19.mathdro.id/api/countries/Singapore");case 4:return a=e.sent,t=a.data.confirmed.value,r=a.data.recovered.value,n=a.data.deaths.value,o={infected:t,recovered:r,active:t-n-r,deaths:n},e.abrupt("return",o);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.coronatracker.com/news/trending",e.next=4,S.a.get("https://api.coronatracker.com/news/trending");case 4:return a=e.sent,t=a.data.items,e.abrupt("return",t);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://api.apify.com/v2/key-value-stores/yaPbKe9e5Et61bl7W/records/LATEST?disableRedirect=true",e.next=4,S.a.get("https://api.apify.com/v2/key-value-stores/yaPbKe9e5Et61bl7W/records/LATEST?disableRedirect=true");case 4:return a=e.sent,t={community:a.data.inCommunityFacilites,stable:a.data.stableHospitalized,critical:a.data.criticalHospitalized},e.abrupt("return",t);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(m.a.mark((function e(){var a,t,r,n,o,c,l,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://disease.sh/v3/covid-19/countries?sort=todayCases",a="https://disease.sh/v3/covid-19/countries",t="https://disease.sh/v3/covid-19/countries?yesterday=true&sort=todayCases",r="https://disease.sh/v3/covid-19/countries?yesterday=true",e.next=7,S.a.get("https://disease.sh/v3/covid-19/countries?sort=todayCases");case 7:return n=e.sent,e.next=10,S.a.get(t);case 10:return o=e.sent,e.next=13,S.a.get(a);case 13:return c=e.sent,e.next=16,S.a.get(r);case 16:return l=e.sent,i={today:n.data.slice(0,10),todayAll:c.data,yesterday:o.data.slice(0,10),yesterdayAll:l.data},e.abrupt("return",i);case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}(),z=Object(p.a)({root:{width:"100%"},container:{maxHeight:530,backgroundColor:"rgb(92, 219, 149, 0.1)"},card:{backgroundColor:"rgb(92, 219, 149, 0.1)"}}),M=function(){var e=z(),a=Object(r.useState)([]),t=Object(d.a)(a,2),o=t[0],c=t[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:a=e.sent,t=a.todayAll,c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=[{id:"country",label:"Country"},{id:"cases",label:"Total Cases"},{id:"todayCases",label:"New Cases"},{id:"deaths",label:"Total Deaths"},{id:"recovered",label:"Total Recovered"},{id:"todayRecovered",label:"New Recovered"},{id:"active",label:"Active"},{id:"casesPerOneMillion",label:"Cases per million"},{id:"deathsPerOneMillion",label:"Deaths per million"},{id:"population",label:"Total Population"},{id:"continent",label:"Continent"}];return o.map((function(e){return e.country}))?n.a.createElement(n.a.Fragment,null,n.a.createElement(R,null),n.a.createElement(g.a,{className:e.root},n.a.createElement(E.a,{spacing:3,align:"center"},n.a.createElement(E.a,{item:!0},n.a.createElement(h.a,{color:"secondary",className:e.more,href:"#/summary"},"Today"),n.a.createElement(h.a,{color:"secondary",className:e.more,href:"#/ytdsummary"},"Yesterday"),n.a.createElement(h.a,{color:"secondary",className:e.more,href:"#/"},"Home")),n.a.createElement(E.a,{item:!0,component:f.a,className:e.card},n.a.createElement(v.a,null,n.a.createElement(y.a,{className:e.container},n.a.createElement(k.a,{stickyHeader:!0,"aria-label":"sticky table"},n.a.createElement(x.a,{className:e.head},n.a.createElement(C.a,null,l.map((function(e){return n.a.createElement(w.a,{key:e.id},e.label)})))),n.a.createElement(j.a,null,o.map((function(e){return n.a.createElement(C.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.CountryCode},l.map((function(a){var t=e[a.id];return n.a.createElement(w.a,{key:a.id},t.toLocaleString())})))}))),n.a.createElement("caption",null,"Courtesy of https://disease.sh/")))))))):n.a.createElement(b.a,null)},Y=t(19),W=t(21),q=t.n(W),G=t(22),J=t.n(G),K=Object(p.a)({container:{margin:0,textAlign:"center"},card:{margin:"2% !important",marginBottom:"0% !important",borderRadius:"12px"},root:{padding:"2% !important",margin:"10% !important",marginTop:"4% !important",marginBottom:"2% !important",textAlign:"justify"},infected:{borderBottom:"20px solid orange",color:"orange",backgroundColor:"rgba(255,165,0, 0.1)"},active:{borderBottom:"20px solid turquoise",color:"#40E0D0",backgroundColor:"rgb(64,224,208, 0.1)"},recovered:{borderBottom:"20px solid springgreen",color:"green",backgroundColor:"rgb(0,128,0, 0.1)"},deaths:{borderBottom:"20px solid red",color:"red",backgroundColor:"rgb(255, 0, 0, 0.1)"}}),Q=function(){var e=Object(r.useState)([]),a=Object(d.a)(e,2),t=a[0],o=a[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:a=e.sent,o(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var c=t.infected,l=t.recovered,i=t.deaths,s=t.active,p=K();return c?n.a.createElement("div",{className:p.container},n.a.createElement(E.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(E.a,{item:!0,component:f.a,xs:12,md:2,className:J()(p.card,p.infected)},n.a.createElement(v.a,null,n.a.createElement(T.a,{gutterBottom:!0},"Confirmed"),n.a.createElement(T.a,{variant:"h5"},n.a.createElement(q.a,{start:0,end:c,duration:2.5,separator:","})))),n.a.createElement(E.a,{item:!0,component:f.a,xs:12,md:2,className:J()(p.card,p.active)},n.a.createElement(v.a,null,n.a.createElement(T.a,{gutterBottom:!0},"Active"),n.a.createElement(T.a,{variant:"h5"},n.a.createElement(q.a,{start:0,end:s,duration:2.5,separator:","})))),n.a.createElement(E.a,{item:!0,component:f.a,xs:12,md:2,className:J()(p.card,p.recovered)},n.a.createElement(v.a,null,n.a.createElement(T.a,{gutterBottom:!0},"Recovered"),n.a.createElement(T.a,{variant:"h5"},n.a.createElement(q.a,{start:0,end:l,duration:2.5,separator:","})))),n.a.createElement(E.a,{item:!0,component:f.a,xs:12,md:2,className:J()(p.card,p.deaths)},n.a.createElement(v.a,null,n.a.createElement(T.a,{gutterBottom:!0},"Deaths"),n.a.createElement(T.a,{variant:"h5"},n.a.createElement(q.a,{start:0,end:i,duration:2.5,separator:","})))))):null},U=Object(p.a)({container:{display:"flexbox",justifyContent:"center",textAlign:"center",marginTop:"0% !important"},root:{width:"80%",marginLeft:"10% !important",marginTop:"2% !important"},root1:{width:"80%",marginLeft:"10% !important",marginTop:"1% !important"},card:{width:"50%",padding:"2% !important",marginTop:"0% !important",borderRadius:"12px",backgroundColor:"rgb(92, 219, 149, 0.1)"},card1:{width:"50%",padding:"2% !important",marginTop:"0% !important",borderRadius:"12px",backgroundColor:"rgb(92, 219, 149, 0.1)"},card2:{width:"50%",padding:"2% !important",marginTop:"0% !important",borderRadius:"12px",backgroundColor:"rgb(92, 219, 149, 0.1)"},card3:{width:"50%",padding:"2% !important",marginTop:"0% !important",borderRadius:"12px",backgroundColor:"rgb(92, 219, 149, 0.1)"}}),V=function(){var e=Object(r.useState)([]),a=Object(d.a)(e,2),t=a[0],o=a[1],c=Object(r.useState)({}),l=Object(d.a)(c,2),i=l[0],s=l[1],p=Object(r.useState)({}),b=Object(d.a)(p,2),h=b[0],v=b[1],y=U();Object(r.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,B();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=s,e.next=8,L();case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=v,e.next=13,_();case 13:e.t5=e.sent,(0,e.t4)(e.t5);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=t.length?n.a.createElement(Y.Line,{data:{labels:t.map((function(e){return new Date(e.Date).toDateString()})),datasets:[{data:t.map((function(e){return e.Confirmed})),label:"Confirmed",borderColor:"#FFA500",backgroundColor:"rgba(255,165,0, 0.3)",fill:"origin"},{data:t.map((function(e){return e.Deaths})),label:"Deaths",borderColor:"#FF0000",backgroundColor:"rgba(255,0,0, 0.3)",fill:"origin"},{data:t.map((function(e){return e.Recovered})),label:"Recovered",borderColor:"#00FF7F",backgroundColor:"rgba(0,255,127, 0.3)",fill:"origin"},{data:t.map((function(e){return e.Active})),label:"Active",borderColor:"#FFFF00",backgroundColor:"rgba(255,255,0, 0.3)",fill:"origin"}]},options:{maintainAspectRatio:!0,responsive:!0,scales:{xAxes:[{type:"time",ticks:{autoSkip:!0,maxTicksLimit:4}}],yAxes:[{ticks:{maxTicksLimit:4}}]}}}):null,x=i?n.a.createElement(Y.HorizontalBar,{data:{labels:["Confirmed","Recovered","Active","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(255,165,0, 0.5)","rgba(0,255,127, 0.5)","rgba(255,255,0, 0.5)","rgba(255, 0, 0, 0.3)"],data:[i.infected,i.recovered,i.active,i.deaths]}]},options:{legend:{display:!1}}}):null,C=h?n.a.createElement(Y.HorizontalBar,{data:{labels:["Community","Stable","Critical"],datasets:[{label:"People",backgroundColor:["rgba(255,165,0, 0.5)","rgba(0,255,127, 0.5)","rgba(255,255,0, 0.5)"],data:[h.community,h.stable,h.critical]}]},options:{legend:{display:!1}}}):null,w=h?n.a.createElement(Y.Doughnut,{data:{labels:["Community","Stable","Critical"],datasets:[{data:[h.community,h.stable,h.critical],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]}]}}):null;return n.a.createElement(n.a.Fragment,null,n.a.createElement(R,null),n.a.createElement("div",{className:y.info},n.a.createElement(Q,null)),n.a.createElement(g.a,{elevation:0,className:y.root},n.a.createElement(E.a,{xs:12,container:!0,justify:"center",direction:"row"},n.a.createElement(E.a,{item:!0,component:f.a,className:y.card},n.a.createElement(T.a,{variant:"button",align:"center"},"Trend"),k),n.a.createElement(E.a,{item:!0,component:f.a,className:y.card1},n.a.createElement(T.a,{variant:"button",align:"center"},"Summary"),x))),n.a.createElement(g.a,{elevation:0,className:y.root1},n.a.createElement(E.a,{xs:12,container:!0,alignItems:"center"},n.a.createElement(E.a,{item:!0,component:f.a,className:y.card2},n.a.createElement(T.a,{variant:"button",align:"center"},"Breakdown of Active Cases"),w),n.a.createElement(E.a,{item:!0,component:f.a,className:y.card3},n.a.createElement(T.a,{variant:"button",align:"center"},i.active," Active Cases in Hospital"),C))))},X=t(263),Z=t(95),$=Object(p.a)({container:{textAlign:"justify"},card:{margin:"2% !important",backgroundColor:"rgb(64,224,208, 0.1)",borderRadius:"12px",borderTop:"12px solid rgb(64,224,208)",width:"80%",textAlign:"justify"}}),ee=function(){var e=Object(r.useState)([]),a=Object(d.a)(e,2),t=a[0],o=a[1],c=$();if(Object(r.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:a=e.sent,o(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!t)return n.a.createElement(b.a,null);var l=t.map((function(e,a){return n.a.createElement("div",null,n.a.createElement(v.a,{className:c.card},n.a.createElement(T.a,{variant:"h6",color:"textPrimary",gutterBotton:!0},Z.countries[e.countryCode].name),n.a.createElement(T.a,{variant:"h6",color:"primary",gutterBottom:!0},e.title),n.a.createElement(T.a,{variant:"body2"},e.content),n.a.createElement(T.a,{variant:"caption"},"Source:\xa0",n.a.createElement(X.a,{href:e.url,target:"_blank"},e.url)),n.a.createElement(T.a,{variant:"body2"},"Published:\xa0",new Date(e.publishedAt).toLocaleString())))}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(R,null),n.a.createElement(E.a,{container:!0,spacing:0,align:"center"},n.a.createElement(E.a,{item:!0,component:f.a},l)))},ae=t(236),te=Object(ae.a)({container:{textAlign:"center"},card:{margin:"2% !important",backgroundColor:"rgb(64,224,208, 0.1)",borderRadius:"12px",borderTop:"12px solid rgb(64,224,208)",width:"80%",marginLeft:"10% !important",textAlign:"justify"}}),re=function(){var e=te();return n.a.createElement(n.a.Fragment,null,n.a.createElement(R,null),n.a.createElement(v.a,{elevation:1,className:e.card},n.a.createElement(T.a,{align:"inherit",variant:"h5"},"Mentions"),n.a.createElement(h.a,{href:"https://api.covid19api.com",target:"_blank"},"covid19api"),n.a.createElement(h.a,{href:"https://covid19-api.org",target:"_blank"},"covid19-api"),n.a.createElement(h.a,{href:"https://covid19.mathdro.id",target:"_blank"},"covid19.mathdro.id"),n.a.createElement(h.a,{href:"https://api.coronatracker.com",target:"_blank"},"CoronaTrackerAPI"),n.a.createElement(h.a,{href:"https://api.apify.com",target:"_blank"},"Apify API"),n.a.createElement(h.a,{href:"https://disease.sh/",target:"_blank"},"disease.sh")),n.a.createElement(v.a,{elevation:1,className:e.card},n.a.createElement(T.a,{align:"inherit",variant:"h5"},"Content"),n.a.createElement(T.a,{variant:"button"},"Made with React, material-ui and chartjs")),n.a.createElement(v.a,{elevation:1,className:e.card},n.a.createElement(T.a,{align:"inherit",variant:"h5"},"Code and Contributors"),n.a.createElement(h.a,{size:"large",href:" https://github.com/thchong-code/covid-dash",target:"_blank",color:"inherit"},"Github"),n.a.createElement(h.a,{size:"large",href:"https://github.com/imsamuel",target:"_blank",color:"inherit"},"imsamuel")),n.a.createElement(v.a,{elevation:1,className:e.card},n.a.createElement(T.a,{align:"inherit",variant:"h5"},"Find me !"),n.a.createElement(h.a,{size:"large",href:" https://thchong-code.github.io/portfolio-webpage/#/",target:"_blank",color:"inherit"},"HC")))},ne=t(96),oe=t(97),ce=t(99),le=t(98),ie=Object(p.a)({container:{textAlign:"center",width:"50% !important"},card:{margin:"2% !important",borderRadius:"12px"},root:{margin:"2% !important",padding:"2%",textAlign:"justify",width:"76%",marginLeft:"10% !important",marginTop:"0% !important",marginBottom:"1% !important",borderRadius:"12px",backgroundColor:"rgb(92, 219, 149, 0.1)"},root1:{padding:"1%",textAlign:"justify",marginTop:"0% !important",backgroundColor:"rgb(92, 219, 149, 0.2)"},infected:{borderBottom:"20px solid orange",color:"orange",backgroundColor:"rgba(255,165,0, 0.1)"},active:{borderBottom:"20px solid turquoise",color:"#40E0D0",backgroundColor:"rgb(64,224,208, 0.1)"},recovered:{borderBottom:"20px solid springgreen",color:"green",backgroundColor:"rgb(0,128,0, 0.1)"},deaths:{borderBottom:"20px solid red",color:"red",backgroundColor:"rgb(255, 0, 0, 0.1)"},tables:{maxHeight:"240px",width:"100% !important"},more:{alignItems:"center"}}),se=function(e){var a=e.data,t=(e.date,parseInt(a.TotalConfirmed)),o=parseInt(a.TotalRecovered),c=parseInt(a.TotalDeaths),l=t-c-o,i=ie(),s=Object(r.useState)([]),p=Object(d.a)(s,2),N=p[0],O=p[1],A=Object(r.useState)([]),R=Object(d.a)(A,2),D=R[0],S=R[1],F=[{id:"country",label:"Country"},{id:"todayCases",label:"Newly Confirmed"},{id:"todayDeaths",label:"New Deaths"}];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var a,t,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:a=e.sent,t=a.today,r=a.yesterday,O(t),S(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var B=N?n.a.createElement(Y.HorizontalBar,{data:{labels:N.map((function(e){return e.country})),datasets:[{label:"New Cases",backgroundColor:"rgba(0,255,127, 0.5)",data:N.map((function(e){return e.todayCases}))},{label:"Deaths",backgroundColor:"rgba(0, 0, 225, 0.5)",data:N.map((function(e){return e.todayDeaths}))}]},options:{legend:{display:!0},scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}):n.a.createElement(b.a,null),H=D?n.a.createElement(Y.HorizontalBar,{data:{labels:D.map((function(e){return e.country})),datasets:[{label:"New Cases",backgroundColor:"rgb(128,0,128, 0.5)",data:D.map((function(e){return e.todayCases}))},{label:"Deaths",backgroundColor:"yellow",data:D.map((function(e){return e.todayDeaths}))}]},options:{legend:{display:!0},scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}):n.a.createElement(b.a,null);return t?n.a.createElement("div",null,n.a.createElement(E.a,{container:!0,spacing:3,justify:"center",borderRadius:16},n.a.createElement(E.a,{item:!0,component:f.a,xs:12,md:2,className:J()(i.card,i.infected)},n.a.createElement(v.a,null,n.a.createElement(T.a,{gutterBottom:!0},"Confirmed"),n.a.createElement(T.a,{variant:"h5"},n.a.createElement(q.a,{start:0,end:t,duration:2.5,separator:","})))),n.a.createElement(E.a,{item:!0,component:f.a,xs:12,md:2,className:J()(i.card,i.recovered)},n.a.createElement(v.a,null,n.a.createElement(T.a,{gutterBottom:!0},"Recovered"),n.a.createElement(T.a,{variant:"h5"},n.a.createElement(q.a,{start:0,end:o,duration:2.5,separator:","})))),n.a.createElement(E.a,{item:!0,component:f.a,xs:12,md:2,className:J()(i.card,i.active)},n.a.createElement(v.a,null,n.a.createElement(T.a,{gutterBottom:!0},"Active"),n.a.createElement(T.a,{variant:"h5"},n.a.createElement(q.a,{start:0,end:l,duration:2.5,separator:","})))),n.a.createElement(E.a,{item:!0,component:f.a,xs:12,md:2,className:J()(i.card,i.deaths)},n.a.createElement(v.a,null,n.a.createElement(T.a,{gutterBottom:!0},"Deaths"),n.a.createElement(T.a,{variant:"h5"},n.a.createElement(q.a,{start:0,end:c,duration:2.5,separator:","}))))),n.a.createElement(g.a,{elevation:0,className:i.root},n.a.createElement(T.a,{variant:"h5",color:"textSecondary",gutterBottom:!0,style:{textAlign:"center"}},"Top 10 Today ",n.a.createElement("span",{role:"img","aria-label":"grinning face",id:"rise trend"},"\ud83d\udcc8")),n.a.createElement(E.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(E.a,{item:!0},n.a.createElement(y.a,{className:i.tables},n.a.createElement(k.a,{stickyHeader:!0,"aria-label":"sticky table"},n.a.createElement(x.a,null,n.a.createElement(C.a,null,F.map((function(e){return n.a.createElement(w.a,{key:e.id},e.label)})))),n.a.createElement(j.a,null,N.map((function(e){return n.a.createElement(C.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.country},F.map((function(a){var t=e[a.id];return n.a.createElement(w.a,{key:a.id},t.toLocaleString())})))})))))),n.a.createElement("div",{className:i.container},n.a.createElement(E.a,{item:!0},B)))),n.a.createElement(g.a,{elevation:0,className:i.root},n.a.createElement(T.a,{variant:"h5",color:"textSecondary",gutterBottom:!0,style:{textAlign:"center"}},"Top 10 Yesterday ",n.a.createElement("span",{role:"img","aria-label":"grinning face",id:"rise trend"},"\ud83d\udcc8")),n.a.createElement(E.a,{container:!0,spacing:3,justify:"center"},n.a.createElement(E.a,{item:!0},n.a.createElement(y.a,{className:i.tables},n.a.createElement(k.a,{stickyHeader:!0,"aria-label":"sticky table"},n.a.createElement(x.a,null,n.a.createElement(C.a,null,F.map((function(e){return n.a.createElement(w.a,{key:e.id},e.label)})))),n.a.createElement(j.a,null,D.map((function(e){return n.a.createElement(C.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.country},F.map((function(a){var t=e[a.id];return n.a.createElement(w.a,{key:a.id},t.toLocaleString())})))})))))),n.a.createElement("div",{className:i.container},n.a.createElement(E.a,{item:!0},H)),n.a.createElement(E.a,{item:!0},n.a.createElement(T.a,{variant:"button"},n.a.createElement(h.a,{color:"secondary",className:i.more,href:"#/toptensummary"},"Comparison Tables Click Here")))))):null},me=Object(p.a)({container:{display:"flexbox",textAlign:"center",width:"80%",justifyItems:"center"},card:{padding:"2%",width:"50%",marginTop:"0% !important",backgroundColor:"rgb(92, 219, 149, 0.1)",borderRadius:"12px"},card1:{padding:"2%",width:"50%",marginTop:"0% !important",backgroundColor:"rgb(92, 219, 149, 0.1)",borderRadius:"12px"},root:{marginTop:"0.5%",marginLeft:"10%",width:"80%"},more:{backgroundColor:"rgb(92, 219, 149, 0.2)"}}),ue=function(e){var a=e.data,t=Object(r.useState)([]),o=Object(d.a)(t,2),c=o[0],l=o[1],i=a.TotalConfirmed,s=a.TotalRecovered,p=a.TotalDeaths,b=i-p-s,h=i+p+s;console.log(i);var v=me();Object(r.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,H();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var y=i?n.a.createElement(Y.Doughnut,{data:{labels:["Infected","Recovered","Deaths","Active"],datasets:[{data:[i,s,p,b],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)","rgb(0, 225, 0, 0.5)"]}]}}):null,k=c.length?n.a.createElement(Y.Line,{data:{labels:c.map((function(e){return new Date(e.last_update).toDateString()})),datasets:[{data:c.map((function(e){return e.total_cases})),label:"Confirmed",borderColor:"#FFA500",backgroundColor:"rgba(255,165,0, 0.3)",fill:"origin"},{data:c.map((function(e){return e.total_deaths})),label:"Deaths",borderColor:"#FF0000",backgroundColor:"rgba(255,0,0, 0.3)",fill:"origin"},{data:c.map((function(e){return e.total_recovered})),label:"Recovered",borderColor:"#00FF7F",backgroundColor:"rgba(0,255,127, 0.3)",fill:"origin"},{data:c.map((function(e){return e.total_cases-e.total_deaths-e.total_recovered})),label:"Active",borderColor:"#FFFF00",backgroundColor:"rgba(255,255,0, 0.3)",fill:"origin"}]},options:{maintainAspectRatio:!0,responsive:!0,scales:{xAxes:[{type:"time",ticks:{autoSkip:!0,maxTicksLimit:3}}],yAxes:[{ticks:{maxTicksLimit:4}}]}}}):null;return n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{elevation:0,className:v.root},n.a.createElement(E.a,{xs:12,lg:12,container:!0,justify:"center",direction:"row"},n.a.createElement(E.a,{item:!0,component:f.a,className:v.card},n.a.createElement(T.a,{variant:"button",align:"center"},"Trend"),k),n.a.createElement(E.a,{item:!0,component:f.a,className:v.card1},n.a.createElement(T.a,{variant:"button",align:"center"},"Breakdown"),y,n.a.createElement(T.a,{variant:"button",align:"center"},"Death Rate: ",(p/h*100).toFixed(2),"%")))))},de=(t(232),function(e){Object(ce.a)(t,e);var a=Object(le.a)(t);function t(){var e;Object(ne.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={data:{},dataDynamic:{},date:"",country:""},e}return Object(oe.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:a=e.sent,this.setState({data:a.Global}),this.setState({date:a.Date});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.data,a=this.state.date;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement(R,null),n.a.createElement(se,{data:e,date:a}),n.a.createElement(ue,{data:e})))}}]),t}(n.a.Component)),pe=Object(p.a)({root:{width:"100%"},container:{maxHeight:530,backgroundColor:"rgb(92, 219, 149, 0.1)"},card:{backgroundColor:"rgb(92, 219, 149, 0.1)"},more:{alignItems:"center"}}),be=function(){var e=pe(),a=Object(r.useState)([]),t=Object(d.a)(a,2),o=t[0],c=t[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:a=e.sent,t=a.today,c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=[{id:"country",label:"Country"},{id:"cases",label:"Total Cases"},{id:"todayCases",label:"New Cases"},{id:"deaths",label:"Total Deaths"},{id:"recovered",label:"Total Recovered"},{id:"todayRecovered",label:"New Recovered"},{id:"active",label:"Active"},{id:"casesPerOneMillion",label:"Cases per million"},{id:"deathsPerOneMillion",label:"Deaths per million"},{id:"population",label:"Total Population"},{id:"continent",label:"Continent"}];return o.map((function(e){return e.country}))?n.a.createElement(n.a.Fragment,null,n.a.createElement(R,null),n.a.createElement(g.a,{className:e.root},n.a.createElement(E.a,{spacing:3,align:"center"},n.a.createElement(E.a,{item:!0},n.a.createElement(h.a,{color:"secondary",className:e.more,href:"#/toptensummary"},"Today"),n.a.createElement(h.a,{color:"secondary",className:e.more,href:"#/toptensummaryytd"},"Yesterday"),n.a.createElement(h.a,{color:"secondary",className:e.more,href:"#/"},"Home")),n.a.createElement(E.a,{item:!0,component:f.a,className:e.card},n.a.createElement(v.a,null,n.a.createElement(y.a,{className:e.container},n.a.createElement(k.a,{stickyHeader:!0,"aria-label":"sticky table"},n.a.createElement(x.a,{className:e.head},n.a.createElement(C.a,null,l.map((function(e){return n.a.createElement(w.a,{key:e.id},e.label)})))),n.a.createElement(j.a,null,o.map((function(e){return n.a.createElement(C.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.country},l.map((function(a){var t=e[a.id];return n.a.createElement(w.a,{key:a.id},t.toLocaleString())})))}))),n.a.createElement("caption",null,"Courtesy of https://disease.sh/")))))))):n.a.createElement(b.a,null)},ge=Object(p.a)({root:{width:"100%"},container:{maxHeight:530,backgroundColor:"rgb(92, 219, 149, 0.1)"},card:{backgroundColor:"rgb(92, 219, 149, 0.1)"}}),Ee=function(){var e=ge(),a=Object(r.useState)([]),t=Object(d.a)(a,2),o=t[0],c=t[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:a=e.sent,t=a.yesterdayAll,c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=[{id:"country",label:"Country"},{id:"cases",label:"Total Cases"},{id:"todayCases",label:"New Cases"},{id:"deaths",label:"Total Deaths"},{id:"recovered",label:"Total Recovered"},{id:"todayRecovered",label:"New Recovered"},{id:"active",label:"Active"},{id:"casesPerOneMillion",label:"Cases per million"},{id:"deathsPerOneMillion",label:"Deaths per million"},{id:"population",label:"Total Population"},{id:"continent",label:"Continent"}];return o.map((function(e){return e.country}))?n.a.createElement(n.a.Fragment,null,n.a.createElement(R,null),n.a.createElement(g.a,{className:e.root},n.a.createElement(E.a,{spacing:3,align:"center"},n.a.createElement(E.a,{item:!0,component:f.a,className:e.card},n.a.createElement(E.a,{item:!0},n.a.createElement(h.a,{color:"secondary",className:e.more,href:"#/summary"},"Today"),n.a.createElement(h.a,{color:"secondary",className:e.more,href:"#/ytdsummary"},"Yesterday"),n.a.createElement(h.a,{color:"secondary",className:e.more,href:"#/"},"Home")),n.a.createElement(v.a,null,n.a.createElement(y.a,{className:e.container},n.a.createElement(k.a,{stickyHeader:!0,"aria-label":"sticky table"},n.a.createElement(x.a,{className:e.head},n.a.createElement(C.a,null,l.map((function(e){return n.a.createElement(w.a,{key:e.id},e.label)})))),n.a.createElement(j.a,null,o.map((function(e){return n.a.createElement(C.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.CountryCode},l.map((function(a){var t=e[a.id];return n.a.createElement(w.a,{key:a.id},t.toLocaleString())})))}))),n.a.createElement("caption",null,"Courtesy of https://disease.sh/")))))))):n.a.createElement(b.a,null)},he=Object(p.a)({root:{width:"100%"},container:{maxHeight:530,backgroundColor:"rgb(92, 219, 149, 0.1)"},card:{backgroundColor:"rgb(92, 219, 149, 0.1)"}}),fe=function(){var e=he(),a=Object(r.useState)([]),t=Object(d.a)(a,2),o=t[0],c=t[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var a,t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:a=e.sent,t=a.yesterday,c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=[{id:"country",label:"Country"},{id:"cases",label:"Total Cases"},{id:"todayCases",label:"New Cases"},{id:"deaths",label:"Total Deaths"},{id:"recovered",label:"Total Recovered"},{id:"todayRecovered",label:"New Recovered"},{id:"active",label:"Active"},{id:"casesPerOneMillion",label:"Cases per million"},{id:"deathsPerOneMillion",label:"Deaths per million"},{id:"population",label:"Total Population"},{id:"continent",label:"Continent"}];return o.map((function(e){return e.country}))?n.a.createElement(n.a.Fragment,null,n.a.createElement(R,null),n.a.createElement(g.a,{className:e.root},n.a.createElement(E.a,{spacing:3,align:"center"},n.a.createElement(E.a,{item:!0},n.a.createElement(h.a,{color:"secondary",className:e.more,href:"#/toptensummary"},"Today"),n.a.createElement(h.a,{color:"secondary",className:e.more,href:"#/toptensummaryytd"},"Yesterday"),n.a.createElement(h.a,{color:"secondary",className:e.more,href:"#/"},"Home")),n.a.createElement(E.a,{item:!0,component:f.a,className:e.card},n.a.createElement(v.a,null,n.a.createElement(y.a,{className:e.container},n.a.createElement(k.a,{stickyHeader:!0,"aria-label":"sticky table"},n.a.createElement(x.a,{className:e.head},n.a.createElement(C.a,null,l.map((function(e){return n.a.createElement(w.a,{key:e.id},e.label)})))),n.a.createElement(j.a,null,o.map((function(e){return n.a.createElement(C.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.country},l.map((function(a){var t=e[a.id];return n.a.createElement(w.a,{key:a.id},t.toLocaleString())})))}))),n.a.createElement("caption",null,"Courtesy of https://disease.sh/")))))))):n.a.createElement(b.a,null)},ve=function(){return n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:de}),n.a.createElement(i.a,{path:"/summary",component:M}),n.a.createElement(i.a,{path:"/ytdsummary",component:Ee}),n.a.createElement(i.a,{path:"/toptensummary",component:be}),n.a.createElement(i.a,{path:"/toptensummaryytd",component:fe}),n.a.createElement(i.a,{path:"/singapore",component:V}),n.a.createElement(i.a,{path:"/news",component:ee}),n.a.createElement(i.a,{path:"/about",component:re}))};c.a.render(n.a.createElement(l.a,{basename:"/covid-dash/"},n.a.createElement(ve,null)),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.367536d0.chunk.js.map