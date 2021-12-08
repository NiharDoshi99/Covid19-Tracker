(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{100:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},204:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),s=c.n(a),r=c(8),o=c.n(r),i=(c(98),c(23)),l=c.n(i),u=c(38),d=c(11),j=c(240),h=c(241),f=c(242),b=c(239),v=c(231),O=c(235),p=c(13),x=c(236);c(100);var m=function(e){var t=e.active,c=e.title,a=e.cases,s=e.isRed,r=e.total,o=Object(p.a)(e,["active","title","cases","isRed","total"]);return Object(n.jsx)("div",{children:Object(n.jsx)(v.a,{className:"infoBox ".concat(t&&"infoBox--selected"," ").concat(s&&"infoBox--red"),onClick:o.onClick,children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(x.a,{color:"textSecondary",className:"infoBox__title",children:c}),Object(n.jsx)("h2",{className:"infoBox_cases ".concat(!s&&"infoBox__cases--green"),children:a}),Object(n.jsxs)(x.a,{color:"textSecondary",className:"infoBox__total",children:[r," Total"]})]})})})},y=(c(104),c(238)),g=c(244),N=c(87),_=c(14),C=c.n(_),w=c(243),k=c(237),S={cases:{hex:"#CC1034",multiplier:800},recovered:{hex:"#7dd71d",multiplier:1200},deaths:{hex:"#fb4443",multiplier:2e3}},I=function(e){return Object(N.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},R=function(e){return e?"+".concat(C()(e).format("0.0a")):"+0"},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(n.jsx)(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:S[t].hex,fillColor:S[t].hex,radius:Math.sqrt(e[t])*S[t].multiplier,children:Object(n.jsx)(k.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases: ",C()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",C()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",C()(e.deaths).format("0,0")]})]})})})}))};var B=function(e){var t=e.countries,c=e.casesType,a=e.center,s=e.zoom;return Object(n.jsx)("div",{className:"map",children:Object(n.jsxs)(y.a,{center:a,zoom:s,scrollWheelZoom:!1,children:[Object(n.jsx)(g.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),T(t,c)]})})};c(105),c(106);var D=function(e){var t=e.countries;return Object(n.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:C()(c).format("0,0")})})]})}))})},E=c(86),F={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return C()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return C()(e).format("0a")}}}]}},L=function(e){var t,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",n=[];for(var a in e.cases){if(t){var s={x:a,y:e[c][a]-t};n.push(s)}t=e[c][a]}return n};var M=function(e){var t=e.casesType,c=void 0===t?"cases":t,s=Object(p.a)(e,["casesType"]),r=Object(a.useState)({}),o=Object(d.a)(r,2),i=o[0],j=o[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=L(e,c);j(t),console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(n.jsx)("div",{className:s.className,children:(null===i||void 0===i?void 0:i.length)>0?Object(n.jsx)(E.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:i}]},options:F}):Object(n.jsx)(b.a,{})})};c(203),c(18);var z=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)("worldwide"),o=Object(d.a)(r,2),i=o[0],p=o[1],x=Object(a.useState)({}),y=Object(d.a)(x,2),g=y[0],N=y[1],_=Object(a.useState)([]),C=Object(d.a)(_,2),w=C[0],k=C[1],S=Object(a.useState)({lat:34.80746,lng:-40.4796}),T=Object(d.a)(S,2),E=T[0],F=T[1],L=Object(a.useState)(3),z=Object(d.a)(L,2),A=z[0],W=z[1],J=Object(a.useState)([]),P=Object(d.a)(J,2),Y=P[0],q=P[1],K=Object(a.useState)("cases"),V=Object(d.a)(K,2),Z=V[0],G=V[1],H=Object(a.useState)(!1),Q=Object(d.a)(H,2),U=Q[0],X=Q[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){N(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!0),e.next=3,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=I(e);k(c),q(e),s(t)}));case 3:X(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var $=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!0),c=t.target.value,p(c),n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=6,fetch(n).then((function(e){return e.json()})).then((function(e){p(c),N(e),F([e.countryInfo.lat,e.countryInfo.long]),W(4)}));case 6:X(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app__left",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{children:"COVID 19 TRACKER"}),Object(n.jsx)(j.a,{className:"app__dropdown",children:Object(n.jsxs)(h.a,{variant:"outlined",value:i,onChange:$,children:[Object(n.jsx)(f.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e){return Object(n.jsx)(f.a,{value:e.value,children:e.name})}))]})})]}),U?Object(n.jsx)(b.a,{}):Object(n.jsxs)("div",{className:"app__stats",children:[Object(n.jsx)(m,{isRed:!0,active:"cases"===Z,onClick:function(e){return G("cases")},title:"Coronavirus Cases",cases:R(g.todayCases),total:R(g.cases)}),Object(n.jsx)(m,{active:"recovered"===Z,onClick:function(e){G("recovered")},title:"Recovered",cases:R(g.todayRecovered),total:R(g.recovered)}),Object(n.jsx)(m,{isRed:!0,active:"deaths"===Z,onClick:function(e){G("deaths")},title:"Deaths",cases:R(g.todayDeaths),total:R(g.deaths)})]}),Object(n.jsx)(B,{casesType:Z,countries:Y,center:E,zoom:A})]}),Object(n.jsx)(v.a,{className:"app__right",children:Object(n.jsx)(O.a,{children:Object(n.jsxs)("div",{className:"app__info",children:[Object(n.jsx)("h3",{children:"Live cases by country"}),w?Object(n.jsx)(D,{countries:w}):Object(n.jsx)(b.a,{}),Object(n.jsxs)("div",{className:"graph",children:[Object(n.jsxs)("h3",{className:"app__graphTitle",children:["Worldwide new ",Z]}),Object(n.jsx)(M,{className:"app__graph",casesType:Z})]})]})})})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,246)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),A()},98:function(e,t,c){}},[[204,1,2]]]);
//# sourceMappingURL=main.9fd0c43d.chunk.js.map