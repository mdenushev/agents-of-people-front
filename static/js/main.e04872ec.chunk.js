(this["webpackJsonpagents-of-people-front"]=this["webpackJsonpagents-of-people-front"]||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a,r,c=n(2),s=n.n(c),o=n(18),i=n.n(o),l=(n(27),n(9)),u=n.n(l),d=n(19),f=n(3),j=n(4),h=(n(29),n(20)),b=n.n(h),p=n(21),g=n(22),m=new(n(48))("Russian");function v(e){return e.split(/[^a-z\u0430-\u044f]+/i).map((function(e){return t=e.toLowerCase(),m.setCurrent(t),m.stem(),m.getCurrent()+"[\u0430-\u044fa-z']{0,2}";var t})).join("\\s+")}function O(e){var t=[];return e.aliases.forEach((function(e){t.push(v(e))})),t}!function(e){e.Person="person",e.Organization="organization"}(a||(a={})),function(e){e.ForeignAgent="foreign_agent",e.Extremist="extremist",e.Unwelcome="unwelcome"}(r||(r={}));var x={"person:foreign_agent":"\u043f\u0440\u0438\u0437\u043d\u0430\u043d(\u0430) \u0438\u043d\u043e\u0430\u0433\u0435\u043d\u0442\u043e\u043c","person:extremist":"\u043f\u0440\u0438\u0437\u043d\u0430\u043d(\u0430) \u044d\u043a\u0441\u0442\u0440\u0435\u043c\u0438\u0441\u0442\u043e\u043c","organization:foreign_agent":"\u043f\u0440\u0438\u0437\u043d\u0430\u043d\u043e(\u0430) \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0435\u0439-\u0438\u043d\u043e\u0430\u0433\u0435\u043d\u0442\u043e\u043c","organization:extremist":"\u043f\u0440\u0438\u0437\u043d\u0430\u043d\u043e(\u0430) \u044d\u043a\u0441\u0442\u0440\u0435\u043c\u0438\u0441\u0442\u0441\u043a\u043e\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0435\u0439","organization:unwelcome":"\u043f\u0440\u0438\u0437\u043d\u0430\u043d\u043e(\u0430) \u043d\u0435\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0435\u0439"};var y=function(){function e(t){Object(p.a)(this,e),this.tokens={};var n,a=Object(j.a)(t);try{for(a.s();!(n=a.n()).done;){var r,c=n.value,s=Object(j.a)(O(c));try{for(s.s();!(r=s.n()).done;){var o=r.value;this.tokens[o]=c}}catch(i){s.e(i)}finally{s.f()}}}catch(i){a.e(i)}finally{a.f()}}return Object(g.a)(e,[{key:"FindMatches",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],a={},r={};e=" "+e;for(var c=0,s=Object.entries(this.tokens);c<s.length;c++){var o,i=Object(f.a)(s[c],2),l=i[0],u=i[1],d=Object(j.a)(e.matchAll(RegExp(l,"gmi")));try{for(d.s();!(o=d.n()).done;){var h=o.value;if(h.index&&h[0]){var b=h.index.toString()+":"+h.index+h[0].length;if(console.log(h[0],t,r[u.full_name],r,u),void 0!==a[b]||t&&void 0!==r[u.full_name])continue;n.push({end:h.index-1+h[0].length,start:h.index-1,record:u}),a[b]=!0,r[u.full_name]=!0}}}catch(p){d.e(p)}finally{d.f()}}return n.sort((function(e,t){return e.start-t.start}))}}]),e}(),w=n(0),N="https://raw.githubusercontent.com/mdenushev/agent-of-people-data/master/foreign_agents.json";function k(e,t,n){return[e.slice(0,n),t,e.slice(n)].join("")}var z=function(){var e=Object(c.useState)(new y([])),t=Object(f.a)(e,2),n=t[0],r=t[1];function s(){return(s=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.next=3,b.a.get(N);case 3:t=e.sent.data,console.log(t),r(new y(t)),F(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]);var o=Object(c.useState)([]),i=Object(f.a)(o,2),l=i[0],h=i[1],p=Object(c.useState)(!1),g=Object(f.a)(p,2),m=g[0],v=g[1],O=Object(c.useState)(""),z=Object(f.a)(O,2),_=z[0],S=z[1],E=Object(c.useState)(!0),C=Object(f.a)(E,2),M=C[0],F=C[1];return Object(w.jsxs)("div",{className:"mt-5",children:[Object(w.jsx)("div",{className:"spinner-border",role:"status",hidden:!M,children:Object(w.jsx)("span",{className:"visually-hidden",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})}),Object(w.jsxs)("div",{className:"container",hidden:M,children:[Object(w.jsx)("div",{className:"menu row mb-3",children:Object(w.jsxs)("div",{className:"col",children:[Object(w.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(){F(!0),console.log(_);var e=n.FindMatches(_,!0);h(e);var t=document.getElementById("result-text");null!==t&&(t.innerHTML=function(e,t){console.log(t),e='<p class="result">'.concat(e,"</p>");var n,a=18,r=Object(j.a)(t);try{for(r.s();!(n=r.n()).done;){var c=n.value;e=k(e,'<span class="highlight">',c.start+a),a+=24,e=k(e,"</span>",c.end+a),a+=7}}catch(s){r.e(s)}finally{r.f()}return e}(_,e)),F(!1),v(!1)},children:"\u0410\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),m?Object(w.jsx)("span",{children:'\u0422\u0435\u043a\u0441\u0442 \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0441\u044f, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 "\u0410\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c"'}):null]})}),Object(w.jsx)("textarea",{className:"text form-control row mb-3",placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0432\u0430\u0448 \u0442\u0435\u043a\u0441\u0442",onInput:function(e){S(e.currentTarget.value),v(!0)}}),Object(w.jsx)("p",{id:"result-text",className:"mx-3"}),0===l.length?Object(w.jsx)("p",{children:"\u0412 \u0442\u0435\u043a\u0441\u0442\u0435 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b \u0443\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f \u0438\u043d\u043e\u0430\u0433\u0435\u043d\u0442\u043e\u0432"}):Object(w.jsx)("ul",{className:"list-group list-group-flush",children:l.map((function(e,t){return Object(w.jsxs)("li",{className:"list-group-item",children:[e.record.full_name,e.record.type===a.Organization&&0!==e.record.aliases.length?" (".concat(e.record.aliases[0],")"):null," ",(n=e.record,x["".concat(n.type,":").concat(n.reason)])," \u043e\u0442 ",e.record.date]},t);var n}))})]})]})};i.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(z,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.e04872ec.chunk.js.map