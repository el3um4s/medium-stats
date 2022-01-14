var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function l(t){t.forEach(o)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const c="undefined"!=typeof window;let a=c?()=>window.performance.now():()=>Date.now(),u=c?t=>requestAnimationFrame(t):t;const d=new Set;function h(t){d.forEach((e=>{e.c(t)||(d.delete(e),e.f())})),0!==d.size&&u(h)}function f(t){let e;return 0===d.size&&u(h),{promise:new Promise((n=>{d.add(e={c:t,f:n})})),abort(){d.delete(e)}}}function m(t,e){t.appendChild(e)}function p(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function y(t){const e=v("style");return function(t,e){m(t.head||t,e)}(p(t),e),e.sheet}function g(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function w(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function x(){return b(" ")}function k(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function C(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function S(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function O(t,e,n){t.classList[n?"add":"remove"](e)}function T(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}const E=new Map;let N,_=0;function P(t,e,n,o,r,l,s,i=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*l(t);a+=100*t+`%{${s(o,1-o)}}\n`}const u=a+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,h=p(t),{stylesheet:f,rules:m}=E.get(h)||function(t,e){const n={stylesheet:y(e),rules:{}};return E.set(t,n),n}(h,t);m[d]||(m[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${d} ${o}ms linear ${r}ms 1 both`,_+=1,d}function D(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),_-=r,_||u((()=>{_||(E.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),E.clear())})))}function z(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:o}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=o,function(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}(t,r)}}function F(t){N=t}function I(){const t=function(){if(!N)throw new Error("Function called outside component initialization");return N}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=T(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}const B=[],H=[],j=[],R=[],V=Promise.resolve();let L=!1;function q(t){j.push(t)}const U=new Set;let W,Y=0;function J(){const t=N;do{for(;Y<B.length;){const t=B[Y];Y++,F(t),X(t.$$)}for(F(null),B.length=0,Y=0;H.length;)H.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];U.has(e)||(U.add(e),e())}j.length=0}while(B.length);for(;R.length;)R.pop()();L=!1,U.clear(),F(t)}function X(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}function G(t,e,n){t.dispatchEvent(T(`${e?"intro":"outro"}${n}`))}const K=new Set;let Q;function Z(){Q={r:0,c:[],p:Q}}function tt(){Q.r||l(Q.c),Q=Q.p}function et(t,e){t&&t.i&&(K.delete(t),t.i(e))}function nt(t,e,n,o){if(t&&t.o){if(K.has(t))return;K.add(t),Q.c.push((()=>{K.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const ot={duration:0};function rt(n,o,r,i){let c=o(n,r),u=i?0:1,d=null,h=null,m=null;function p(){m&&D(n,m)}function y(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(o){const{delay:r=0,duration:s=300,easing:i=e,tick:g=t,css:$}=c||ot,v={start:a()+r,b:o};o||(v.group=Q,Q.r+=1),d||h?h=v:($&&(p(),m=P(n,u,o,s,r,i,$)),o&&g(0,1),d=y(v,s),q((()=>G(n,o,"start"))),f((t=>{if(h&&t>h.start&&(d=y(h,s),h=null,G(n,d.b,"start"),$&&(p(),m=P(n,u,d.b,d.duration,0,i,c.css))),d)if(t>=d.end)g(u=d.b,1-u),G(n,d.b,"end"),h||(d.b?p():--d.group.r||l(d.group.c)),d=null;else if(t>=d.start){const e=t-d.start;u=d.a+d.d*i(e/d.duration),g(u,1-u)}return!(!d&&!h)})))}return{run(t){s(c)?(W||(W=Promise.resolve(),W.then((()=>{W=null}))),W).then((()=>{c=c(),g(t)})):g(t)},end(){p(),d=h=null}}}function lt(t,e){t.d(1),e.delete(t.key)}function st(t,e){nt(t,1,1,(()=>{e.delete(t.key)}))}function it(t,e){t.f(),lt(t,e)}function ct(t,e,n,o,r,l,s,i,c,a,u,d){let h=t.length,f=l.length,m=h;const p={};for(;m--;)p[t[m].key]=m;const y=[],g=new Map,$=new Map;for(m=f;m--;){const t=d(r,l,m),i=n(t);let c=s.get(i);c?o&&c.p(t,e):(c=a(i,t),c.c()),g.set(i,y[m]=c),i in p&&$.set(i,Math.abs(m-p[i]))}const v=new Set,w=new Set;function b(t){et(t,1),t.m(i,u),s.set(t.key,t),u=t.first,f--}for(;h&&f;){const e=y[f-1],n=t[h-1],o=e.key,r=n.key;e===n?(u=e.first,h--,f--):g.has(r)?!s.has(o)||v.has(o)?b(e):w.has(r)?h--:$.get(o)>$.get(r)?(w.add(o),b(e)):(v.add(r),h--):(c(n,s),h--)}for(;h--;){const e=t[h];g.has(e.key)||c(e,s)}for(;f;)b(y[f-1]);return y}function at(t){t&&t.c()}function ut(t,e,n,r){const{fragment:i,on_mount:c,on_destroy:a,after_update:u}=t.$$;i&&i.m(e,n),r||q((()=>{const e=c.map(o).filter(s);a?a.push(...e):l(e),t.$$.on_mount=[]})),u.forEach(q)}function dt(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(t,e){-1===t.$$.dirty[0]&&(B.push(t),L||(L=!0,V.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ft(e,n,o,s,i,c,a,u=[-1]){const d=N;F(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};a&&a(h.root);let f=!1;if(h.ctx=o?o(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&i(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),f&&ht(e,t)),n})):[],h.update(),f=!0,l(h.before_update),h.fragment=!!s&&s(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach($)}else h.fragment&&h.fragment.c();n.intro&&et(e.$$.fragment),ut(e,n.target,n.anchor,n.customElement),J()}F(d)}class mt{$destroy(){dt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function pt(t){const e=t-1;return e*e*e+1}function yt(t){return Math.sin(t*Math.PI/2)}function gt(t,{delay:n=0,duration:o=400,easing:r=e}={}){const l=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*l}}function $t(t,{delay:e=0,duration:n=400,easing:o=pt}={}){const r=getComputedStyle(t),l=+r.opacity,s=parseFloat(r.height),i=parseFloat(r.paddingTop),c=parseFloat(r.paddingBottom),a=parseFloat(r.marginTop),u=parseFloat(r.marginBottom),d=parseFloat(r.borderTopWidth),h=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:o,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*l};height: ${t*s}px;padding-top: ${t*i}px;padding-bottom: ${t*c}px;margin-top: ${t*a}px;margin-bottom: ${t*u}px;border-top-width: ${t*d}px;border-bottom-width: ${t*h}px;`}}const vt=t=>{const e=new Date(t);return{timestamp:e,year:e.getFullYear(),month:e.getMonth(),monthName:e.toLocaleString("default",{month:"short"}),day:e.getDate()}},wt=(t,e=!1)=>({isCurrentMonth:e,month:vt(t.periodStartedAt),amount:t.amount}),bt=t=>[wt(t.payload.currentMonthAmount,!0),...t.payload.completedMonthlyAmounts.map((t=>wt(t)))],xt=t=>({data:t.map((t=>t.amount)).reverse(),labels:t.map((t=>t.month.monthName)).reverse()}),kt=t=>t.map((t=>(t=>({id:t.post.id,title:t.post.title,amountMonth:t.amount,amountTot:t.totalAmountPaidToDate,homeCollectionId:t.post.homeCollectionId,wordCount:t.post.virtuals.wordCount,readingTime:t.post.virtuals.readingTime,firstPublishedAt:vt(t.post.firstPublishedAt)}))(t))),Ct=t=>{const e=function(){const t=Date.now();return vt(t)}(),{monthName:n,month:o,year:r}=e,l=function(t){const{listStories:e,month:n,year:o}=t,r=e.filter((t=>t.firstPublishedAt.month===n&&t.firstPublishedAt.year===o)),l=At(r),s=Mt(r);return{income:l,articles:s}}({listStories:t,month:o,year:r}),s=function(t){const{listStories:e,month:n,year:o}=t,r=e.filter((t=>t.firstPublishedAt.year<o||t.firstPublishedAt.year===o&&t.firstPublishedAt.month<n)),l=At(r),s=Mt(r);return{income:l,articles:s}}({listStories:t,month:o,year:r});return{monthName:n,month:o,year:r,monthlyIncomeTotal:At(t),monthlyIncomeNewArticle:l.income,monthlyIncomeOldArticle:s.income,numberArticleTotal:Mt(t),numberArticleNewArticle:l.articles,numberArticleOldArticle:s.articles,monthsTopStory:St(t)}};function At(t){return t.reduce(((t,e)=>e.amountMonth+t),0)}function Mt(t){return t.length}function St(t){const e=t.map((t=>t.amountMonth));return Math.max(...e)}const Ot=[{key:"firstPublishedAt",title:"Date",type:"date",width:"12ch"},{key:"amountTot",title:"$ Tot",type:"cents",width:"10ch",align:"end"},{key:"amountMonth",title:"$ Month",type:"cents",width:"10ch",align:"end"},{key:"title",title:"Title",type:"text"},{key:"wordCount",title:"Words",type:"numeric",width:"6ch",align:"end"}],Tt=[{key:"firstPublishedAt",functionOrderASC:(t,e)=>[...Ft(t,e)],functionOrderDESC:(t,e)=>[...It(t,e)]},{key:"amountTot",functionOrderASC:(t,e)=>[...Dt(t,e)],functionOrderDESC:(t,e)=>[...zt(t,e)]},{key:"amountMonth",functionOrderASC:(t,e)=>[...Dt(t,e)],functionOrderDESC:(t,e)=>[...zt(t,e)]},{key:"title",functionOrderASC:(t,e)=>[..._t(t,e)],functionOrderDESC:(t,e)=>[...Pt(t,e)]},{key:"wordCount",functionOrderASC:(t,e)=>[...Dt(t,e)],functionOrderDESC:(t,e)=>[...zt(t,e)]}],Et=["amountTot","amountMonth","wordCount"],Nt=(t,e)=>{const n=e.map((e=>{let n="";return"numeric"!==e.type&&"cents"!==e.type||(n=function(t,e){return t.reduce(((t,n)=>t+n[e]),0)}(t,e.key)),{...e,value:n}}));return n};function _t(t,e){return e.sort(((e,n)=>{const o=e[t].toUpperCase(),r=n[t].toUpperCase();return o>r?1:o<r?-1:0}))}function Pt(t,e){return e.sort(((e,n)=>{const o=e[t].toUpperCase(),r=n[t].toUpperCase();return o>r?-1:o<r?1:0}))}function Dt(t,e){return e.sort(((e,n)=>{const o=e[t],r=n[t];return o>r?1:o<r?-1:0}))}function zt(t,e){return e.sort(((e,n)=>{const o=e[t],r=n[t];return o>r?-1:o<r?1:0}))}function Ft(t,e){return e.sort(((e,n)=>{const o=e[t].timestamp,r=n[t].timestamp;return o>r?1:o<r?-1:0}))}function It(t,e){return e.sort(((e,n)=>{const o=e[t].timestamp,r=n[t].timestamp;return o>r?-1:o<r?1:0}))}function Bt(e){let n,o;return{c(){n=w("svg"),o=w("path"),A(o,"d","M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"),A(n,"xmlns","http://www.w3.org/2000/svg"),A(n,"viewBox","0 0 20 20"),A(n,"fill","currentColor"),A(n,"class","svelte-1at6spx")},m(t,e){g(t,n,e),m(n,o)},p:t,i:t,o:t,d(t){t&&$(n)}}}class Ht extends mt{constructor(t){super(),ft(this,t,null,Bt,i,{})}}function jt(e){let n,o;return{c(){n=w("svg"),o=w("path"),A(o,"d","M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"),A(n,"xmlns","http://www.w3.org/2000/svg"),A(n,"viewBox","0 0 20 20"),A(n,"fill","currentColor"),A(n,"class","svelte-1at6spx")},m(t,e){g(t,n,e),m(n,o)},p:t,i:t,o:t,d(t){t&&$(n)}}}class Rt extends mt{constructor(t){super(),ft(this,t,null,jt,i,{})}}function Vt(e){let n,o;return{c(){n=w("svg"),o=w("path"),A(o,"d","M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"),A(n,"xmlns","http://www.w3.org/2000/svg"),A(n,"viewBox","0 0 20 20"),A(n,"fill","currentColor"),A(n,"class","svelte-1at6spx")},m(t,e){g(t,n,e),m(n,o)},p:t,i:t,o:t,d(t){t&&$(n)}}}class Lt extends mt{constructor(t){super(),ft(this,t,null,Vt,i,{})}}function qt(t){let e,n,o,r,s,i,c,a,u,d,h,f=`${t[1]}px`,p=`${t[2]}px`;o=new Rt({}),i=new Ht({});let y=t[3]&&Ut(t);return{c(){e=v("section"),n=v("button"),at(o.$$.fragment),r=x(),s=v("button"),at(i.$$.fragment),c=x(),y&&y.c(),A(e,"class","svelte-1v63if8"),S(e,"visible",t[0],!1),S(e,"left",f,!1),S(e,"top",p,!1)},m(l,a){g(l,e,a),m(e,n),ut(o,n,null),m(e,r),m(e,s),ut(i,s,null),m(e,c),y&&y.m(e,null),u=!0,d||(h=[k(n,"click",t[6]),k(s,"click",t[7])],d=!0)},p(t,n){t[3]?y?(y.p(t,n),8&n&&et(y,1)):(y=Ut(t),y.c(),et(y,1),y.m(e,null)):y&&(Z(),nt(y,1,1,(()=>{y=null})),tt()),1&n&&S(e,"visible",t[0],!1),2&n&&f!==(f=`${t[1]}px`)&&S(e,"left",f,!1),4&n&&p!==(p=`${t[2]}px`)&&S(e,"top",p,!1)},i(t){u||(et(o.$$.fragment,t),et(i.$$.fragment,t),et(y),q((()=>{a||(a=rt(e,gt,{},!0)),a.run(1)})),u=!0)},o(t){nt(o.$$.fragment,t),nt(i.$$.fragment,t),nt(y),a||(a=rt(e,gt,{},!1)),a.run(0),u=!1},d(t){t&&$(e),dt(o),dt(i),y&&y.d(),t&&a&&a.end(),d=!1,l(h)}}}function Ut(e){let n,o,r,l,s;return o=new Lt({}),{c(){n=v("button"),at(o.$$.fragment)},m(t,i){g(t,n,i),ut(o,n,null),r=!0,l||(s=k(n,"click",e[8]),l=!0)},p:t,i(t){r||(et(o.$$.fragment,t),r=!0)},o(t){nt(o.$$.fragment,t),r=!1},d(t){t&&$(n),dt(o),l=!1,s()}}}function Wt(t){let e,n,o,r,s=t[0]&&qt(t);return{c(){s&&s.c(),e=x()},m(l,i){s&&s.m(l,i),g(l,e,i),n=!0,o||(r=[k(document.body,"click",t[5]),k(document.body,"wheel",t[5])],o=!0)},p(t,[n]){t[0]?s?(s.p(t,n),1&n&&et(s,1)):(s=qt(t),s.c(),et(s,1),s.m(e.parentNode,e)):s&&(Z(),nt(s,1,1,(()=>{s=null})),tt())},i(t){n||(et(s),n=!0)},o(t){nt(s),n=!1},d(t){s&&s.d(t),t&&$(e),o=!1,l(r)}}}function Yt(t,e,n){const o=I();let{x:r=0}=e,{y:l=0}=e,{show:s=!1}=e,{canChart:i=!1}=e;const c=()=>{n(0,s=!1),o("hide")};return t.$$set=t=>{"x"in t&&n(1,r=t.x),"y"in t&&n(2,l=t.y),"show"in t&&n(0,s=t.show),"canChart"in t&&n(3,i=t.canChart)},[s,r,l,i,o,c,()=>{c(),o("order-desc")},()=>{c(),o("order-asc")},()=>{c(),o("chart-this")}]}class Jt extends mt{constructor(t){super(),ft(this,t,Yt,Wt,i,{x:1,y:2,show:0,canChart:3})}}function Xt(t,{from:e,to:n},o={}){const r=getComputedStyle(t),l="none"===r.transform?"":r.transform,[i,c]=r.transformOrigin.split(" ").map(parseFloat),a=e.left+e.width*i/n.width-(n.left+i),u=e.top+e.height*c/n.height-(n.top+c),{delay:d=0,duration:h=(t=>120*Math.sqrt(t)),easing:f=pt}=o;return{delay:d,duration:s(h)?h(Math.sqrt(a*a+u*u)):h,easing:f,css:(t,o)=>{const r=o*a,s=o*u,i=t+o*e.width/n.width,c=t+o*e.height/n.height;return`transform: ${l} translate(${r}px, ${s}px) scale(${i}, ${c});`}}}function Gt(t,e,n){const o=t.slice();return o[27]=e[n],o}function Kt(t,e,n){const o=t.slice();return o[30]=e[n],o[32]=n,o}function Qt(t,e,n){const o=t.slice();return o[33]=e[n],o}function Zt(t,e,n){const o=t.slice();return o[33]=e[n],o}function te(t,e){let n,o,r,l,s,i,c=e[33].title+"";function a(...t){return e[20](e[33],...t)}return{key:t,first:null,c(){n=v("div"),o=b(c),r=x(),A(n,"class","cell title svelte-1x7ak6b"),A(n,"style",l=e[10](e[33])),O(n,"column-order",e[7]?.key===e[33].key),O(n,"data-charted",e[1]===e[33].key),this.first=n},m(t,e){g(t,n,e),m(n,o),m(n,r),s||(i=k(n,"contextmenu",C(a)),s=!0)},p(t,r){e=t,4&r[0]&&c!==(c=e[33].title+"")&&M(o,c),4&r[0]&&l!==(l=e[10](e[33]))&&A(n,"style",l),132&r[0]&&O(n,"column-order",e[7]?.key===e[33].key),6&r[0]&&O(n,"data-charted",e[1]===e[33].key)},d(t){t&&$(n),s=!1,i()}}}function ee(t,e){let n,o,r,l,s,i,c,a=e[11](e[33].type,e[30][e[33].key])+"";function u(...t){return e[21](e[33],...t)}return{key:t,first:null,c(){n=v("div"),o=v("div"),r=b(a),A(o,"class","chart-bar svelte-1x7ak6b"),A(o,"style",l=e[15](e[4]===e[33].key,e[30][e[1]])),A(n,"class","cell svelte-1x7ak6b"),A(n,"style",s=e[10](e[33])),O(n,"column-order",e[7]?.key===e[33].key),O(n,"data-charted",e[1]===e[33].key),this.first=n},m(t,e){g(t,n,e),m(n,o),m(o,r),i||(c=k(n,"contextmenu",C(u)),i=!0)},p(t,i){e=t,5&i[0]&&a!==(a=e[11](e[33].type,e[30][e[33].key])+"")&&M(r,a),23&i[0]&&l!==(l=e[15](e[4]===e[33].key,e[30][e[1]]))&&A(o,"style",l),4&i[0]&&s!==(s=e[10](e[33]))&&A(n,"style",s),132&i[0]&&O(n,"column-order",e[7]?.key===e[33].key),6&i[0]&&O(n,"data-charted",e[1]===e[33].key)},d(t){t&&$(n),i=!1,c()}}}function ne(n,o){let r,l,s,i,c,u,d=o[32]+1+"",h=[],p=new Map,y=t,w=o[2];const k=t=>t[33].key;for(let t=0;t<w.length;t+=1){let e=Qt(o,w,t),n=k(e);p.set(n,h[t]=ee(n,e))}return{key:n,first:null,c(){r=v("div"),l=v("div"),s=b(d),i=x();for(let t=0;t<h.length;t+=1)h[t].c();c=x(),A(l,"class","cell svelte-1x7ak6b"),A(r,"class","row svelte-1x7ak6b"),A(r,"style",o[9]),this.first=r},m(t,e){g(t,r,e),m(r,l),m(l,s),m(r,i);for(let t=0;t<h.length;t+=1)h[t].m(r,null);m(r,c)},p(t,e){o=t,1&e[0]&&d!==(d=o[32]+1+"")&&M(s,d),40087&e[0]&&(w=o[2],h=ct(h,e,k,1,o,w,p,r,lt,ee,c,Qt)),512&e[0]&&A(r,"style",o[9])},r(){u=r.getBoundingClientRect()},f(){z(r),y()},a(){y(),y=function(n,o,r,l){if(!o)return t;const s=n.getBoundingClientRect();if(o.left===s.left&&o.right===s.right&&o.top===s.top&&o.bottom===s.bottom)return t;const{delay:i=0,duration:c=300,easing:u=e,start:d=a()+i,end:h=d+c,tick:m=t,css:p}=r(n,{from:o,to:s},l);let y,g=!0,$=!1;function v(){p&&D(n,y),g=!1}return f((t=>{if(!$&&t>=d&&($=!0),$&&t>=h&&(m(1,0),v()),!g)return!1;if($){const e=0+1*u((t-d)/c);m(e,1-e)}return!0})),p&&(y=P(n,0,1,c,i,u,p)),i||($=!0),m(0,1),v}(r,u,Xt,{duration:1e3,easing:yt})},d(t){t&&$(r);for(let t=0;t<h.length;t+=1)h[t].d()}}}function oe(t){let e,n,o,r=t[3],l=[];for(let e=0;e<r.length;e+=1)l[e]=re(Gt(t,r,e));return{c(){e=v("footer"),n=v("div"),o=x();for(let t=0;t<l.length;t+=1)l[t].c();A(n,"class","cell total svelte-1x7ak6b"),A(e,"style",t[9]),A(e,"class","svelte-1x7ak6b")},m(t,r){g(t,e,r),m(e,n),m(e,o);for(let t=0;t<l.length;t+=1)l[t].m(e,null)},p(t,n){if(7306&n[0]){let o;for(r=t[3],o=0;o<r.length;o+=1){const s=Gt(t,r,o);l[o]?l[o].p(s,n):(l[o]=re(s),l[o].c(),l[o].m(e,null))}for(;o<l.length;o+=1)l[o].d(1);l.length=r.length}512&n[0]&&A(e,"style",t[9])},d(t){t&&$(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(l,t)}}}function re(t){let e,n,o,r,l,s,i=t[11](t[27].type,t[27].value)+"";function c(...e){return t[22](t[27],...e)}return{c(){e=v("div"),n=b(i),o=x(),A(e,"class","cell total svelte-1x7ak6b"),A(e,"style",r=t[10](t[27])),O(e,"column-order",t[7]?.key===t[27].key),O(e,"data-charted",t[1]===t[27].key)},m(t,r){g(t,e,r),m(e,n),m(e,o),l||(s=k(e,"contextmenu",C(c)),l=!0)},p(o,l){t=o,8&l[0]&&i!==(i=t[11](t[27].type,t[27].value)+"")&&M(n,i),8&l[0]&&r!==(r=t[10](t[27]))&&A(e,"style",r),136&l[0]&&O(e,"column-order",t[7]?.key===t[27].key),10&l[0]&&O(e,"data-charted",t[1]===t[27].key)},d(t){t&&$(e),l=!1,s()}}}function le(t){let e,o,r,l,s,i,c,a,u,d,h=[],f=new Map,p=[],y=new Map;const w=[{show:t[6]},t[8],{canChart:t[5].includes(t[7]?.key)}];let b={};for(let t=0;t<w.length;t+=1)b=n(b,w[t]);o=new Jt({props:b}),o.$on("order-asc",t[13]),o.$on("order-desc",t[14]),o.$on("hide",t[19]),o.$on("chart-this",t[16]);let k=t[2];const C=t=>t[33].key;for(let e=0;e<k.length;e+=1){let n=Zt(t,k,e),o=C(n);f.set(o,h[e]=te(o,n))}let M=t[0];const S=t=>t[30].id;for(let e=0;e<M.length;e+=1){let n=Kt(t,M,e),o=S(n);y.set(o,p[e]=ne(o,n))}let O=t[3].length>0&&oe(t);return{c(){e=v("article"),at(o.$$.fragment),r=x(),l=v("header"),s=v("div"),i=x();for(let t=0;t<h.length;t+=1)h[t].c();c=x(),a=v("section");for(let t=0;t<p.length;t+=1)p[t].c();u=x(),O&&O.c(),A(s,"class","cell title svelte-1x7ak6b"),A(l,"style",t[9]),A(l,"class","svelte-1x7ak6b"),A(a,"class","svelte-1x7ak6b"),A(e,"class","table svelte-1x7ak6b")},m(t,n){g(t,e,n),ut(o,e,null),m(e,r),m(e,l),m(l,s),m(l,i);for(let t=0;t<h.length;t+=1)h[t].m(l,null);m(e,c),m(e,a);for(let t=0;t<p.length;t+=1)p[t].m(a,null);m(e,u),O&&O.m(e,null),d=!0},p(t,n){const r=480&n[0]?function(t,e){const n={},o={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],i=e[l];if(i){for(const t in s)t in i||(o[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[l]=i}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(w,[64&n[0]&&{show:t[6]},256&n[0]&&(s=t[8],"object"==typeof s&&null!==s?s:{}),160&n[0]&&{canChart:t[5].includes(t[7]?.key)}]):{};var s;if(o.$set(r),5254&n[0]&&(k=t[2],h=ct(h,n,C,1,t,k,f,l,lt,te,null,Zt)),(!d||512&n[0])&&A(l,"style",t[9]),40599&n[0]){M=t[0];for(let t=0;t<p.length;t+=1)p[t].r();p=ct(p,n,S,1,t,M,y,a,it,ne,null,Kt);for(let t=0;t<p.length;t+=1)p[t].a()}t[3].length>0?O?O.p(t,n):(O=oe(t),O.c(),O.m(e,null)):O&&(O.d(1),O=null)},i(t){d||(et(o.$$.fragment,t),d=!0)},o(t){nt(o.$$.fragment,t),d=!1},d(t){t&&$(e),dt(o);for(let t=0;t<h.length;t+=1)h[t].d();for(let t=0;t<p.length;t+=1)p[t].d();O&&O.d()}}}function se(t,e){const n=e.findIndex((e=>e.key===t));return e[n]}function ie(t,e,n){let o,r,l,{rows:s=[]}=e,{headers:i=[]}=e,{totals:c=[]}=e;let a,u=!1,d={x:0,y:0};async function h(t,e){u&&(n(6,u=!1),await new Promise((t=>setTimeout(t,10)))),n(8,d={x:e.pageX,y:e.pageY}),n(7,a={...t}),n(6,u=!0)}let{orders:f=[]}=e;let{chartColumn:m=""}=e,{chartValue:p=""}=e;let{chartsColumns:y=[]}=e;return t.$$set=t=>{"rows"in t&&n(0,s=t.rows),"headers"in t&&n(2,i=t.headers),"totals"in t&&n(3,c=t.totals),"orders"in t&&n(17,f=t.orders),"chartColumn"in t&&n(4,m=t.chartColumn),"chartValue"in t&&n(1,p=t.chartValue),"chartsColumns"in t&&n(5,y=t.chartsColumns)},t.$$.update=()=>{var e;4&t.$$.dirty[0]&&n(9,o=`grid-template-columns: 4ch ${e=i,e.map((t=>(null==t?void 0:t.width)?t.width:"auto")).join(" ")};`),192&t.$$.dirty[0]&&n(7,a=u?a:null),3&t.$$.dirty[0]&&n(18,r=[...s.map((t=>t[p]))]),262144&t.$$.dirty[0]&&(l=Math.max(...r))},[s,p,i,c,m,y,u,a,d,o,t=>(null==t?void 0:t.align)?`text-align: ${t.align};`:"",(t,e)=>{return"cents"===t&&"number"==typeof e?(e/100).toFixed(2):"date"===t&&"object"==typeof e?`${(n=e).year} ${n.monthName} ${n.day}`:e;var n},h,function(){n(0,s=[...se(a.key,f).functionOrderASC(a.key,s)])},function(){n(0,s=[...se(a.key,f).functionOrderDESC(a.key,s)])},function(t,e){if(!t)return"";const n=Math.round(e/l*100);return`background:linear-gradient(to right,#fdba74 ${n}%, transparent ${n}%)`},function(){n(1,p=a.key)},f,r,()=>{n(6,u=!1)},(t,e)=>{h(t,e)},(t,e)=>{h(t,e)},(t,e)=>{h(t,e)}]}class ce extends mt{constructor(t){super(),ft(this,t,ie,le,i,{rows:0,headers:2,totals:3,orders:17,chartColumn:4,chartValue:1,chartsColumns:5},null,[-1,-1])}}function ae(t,e,n){const o=t.slice();return o[5]=e[n],o}function ue(t,e,n){const o=t.slice();return o[8]=e[n],o}function de(t,e){let n,o,r,l,s,i,c=e[8]/100+"";return{key:t,first:null,c(){n=v("div"),o=v("span"),r=b(c),l=x(),A(o,"class","value svelte-1vcxm30"),A(n,"class","column svelte-1vcxm30"),S(n,"height",e[8]/e[3]*100+"%"),this.first=n},m(t,e){g(t,n,e),m(n,o),m(o,r),m(n,l),i=!0},p(t,o){e=t,(!i||1&o)&&c!==(c=e[8]/100+"")&&M(r,c),(!i||9&o)&&S(n,"height",e[8]/e[3]*100+"%")},i(t){i||(q((()=>{s||(s=rt(n,$t,{},!0)),s.run(1)})),i=!0)},o(t){s||(s=rt(n,$t,{},!1)),s.run(0),i=!1},d(t){t&&$(n),t&&s&&s.end()}}}function he(t,e){let n,o,r=e[5]+"";return{key:t,first:null,c(){n=v("div"),o=b(r),this.first=n},m(t,e){g(t,n,e),m(n,o)},p(t,n){e=t,2&n&&r!==(r=e[5]+"")&&M(o,r)},d(t){t&&$(n)}}}function fe(t){let e,n,o,r,l,s=[],i=new Map,c=[],a=new Map,u=t[0];const d=t=>Math.random();for(let e=0;e<u.length;e+=1){let n=ue(t,u,e),o=d();i.set(o,s[e]=de(o,n))}let h=t[1];const f=t=>Math.random();for(let e=0;e<h.length;e+=1){let n=ae(t,h,e),o=f();a.set(o,c[e]=he(o,n))}return{c(){e=v("section"),n=v("div");for(let t=0;t<s.length;t+=1)s[t].c();o=x(),r=v("div");for(let t=0;t<c.length;t+=1)c[t].c();A(n,"class","columns data svelte-1vcxm30"),S(n,"grid-template-columns",t[2],!1),A(r,"class","columns labels svelte-1vcxm30"),S(r,"grid-template-columns",t[2],!1),A(e,"class","svelte-1vcxm30")},m(t,i){g(t,e,i),m(e,n);for(let t=0;t<s.length;t+=1)s[t].m(n,null);m(e,o),m(e,r);for(let t=0;t<c.length;t+=1)c[t].m(r,null);l=!0},p(t,[e]){9&e&&(u=t[0],Z(),s=ct(s,e,d,1,t,u,i,n,st,de,null,ue),tt()),4&e&&S(n,"grid-template-columns",t[2],!1),2&e&&(h=t[1],c=ct(c,e,f,1,t,h,a,r,lt,he,null,ae)),4&e&&S(r,"grid-template-columns",t[2],!1)},i(t){if(!l){for(let t=0;t<u.length;t+=1)et(s[t]);l=!0}},o(t){for(let t=0;t<s.length;t+=1)nt(s[t]);l=!1},d(t){t&&$(e);for(let t=0;t<s.length;t+=1)s[t].d();for(let t=0;t<c.length;t+=1)c[t].d()}}}function me(t,e,n){let o,r,l,{data:s=[]}=e,{labels:i=[]}=e;return t.$$set=t=>{"data"in t&&n(0,s=t.data),"labels"in t&&n(1,i=t.labels)},t.$$.update=()=>{1&t.$$.dirty&&n(4,o=s.length),1&t.$$.dirty&&n(3,r=Math.max(...s)),16&t.$$.dirty&&n(2,l=`repeat(${o}, minmax(0, 1fr))`)},[s,i,l,r,o]}class pe extends mt{constructor(t){super(),ft(this,t,me,fe,i,{data:0,labels:1})}}function ye(e){let n,o,r,l,s,i,c,a,u,d,h,f,p,y,w,k,C,S,O,T,E,N,_,P,D,z,F,I,B,H,j,R,V,L,q,U,W,Y,J,X,G,K,Q,Z,tt,et,nt,ot,rt=e[0].monthName+"",lt=e[0].year+"",st=e[0].monthlyIncomeTotal+"",it=e[0].monthlyIncomeNewArticle+"",ct=e[0].monthlyIncomeOldArticle+"",at=e[0].numberArticleTotal+"",ut=e[0].numberArticleNewArticle+"",dt=e[0].numberArticleOldArticle+"",ht=e[0].monthsTopStory+"";return{c(){n=v("article"),o=v("header"),r=b(rt),l=x(),s=b(lt),i=x(),c=v("section"),a=v("div"),u=v("div"),u.textContent="Total Monthy Income:",d=x(),h=v("div"),f=b(st),p=x(),y=v("div"),w=v("div"),w.textContent="New Article Earning (Active):",k=x(),C=v("div"),S=b(it),O=x(),T=v("div"),E=v("div"),E.textContent="Old Article Earning (Passive):",N=x(),_=v("div"),P=b(ct),D=x(),z=v("div"),F=v("div"),F.textContent="Total Articles:",I=x(),B=v("div"),H=b(at),j=x(),R=v("div"),V=v("div"),V.textContent="# of New Articles Published:",L=x(),q=v("div"),U=b(ut),W=x(),Y=v("div"),J=v("div"),J.textContent="# of Old Articles Published:",X=x(),G=v("div"),K=b(dt),Q=x(),Z=v("div"),tt=v("div"),tt.textContent="Month's top story:",et=x(),nt=v("div"),ot=b(ht),A(o,"class","svelte-aw1ho5"),A(u,"class","label"),A(h,"class","value"),A(a,"class","row svelte-aw1ho5"),A(w,"class","label"),A(C,"class","value"),A(y,"class","row svelte-aw1ho5"),A(E,"class","label"),A(_,"class","value"),A(T,"class","row svelte-aw1ho5"),A(F,"class","label"),A(B,"class","value"),A(z,"class","row svelte-aw1ho5"),A(V,"class","label"),A(q,"class","value"),A(R,"class","row svelte-aw1ho5"),A(J,"class","label"),A(G,"class","value"),A(Y,"class","row svelte-aw1ho5"),A(tt,"class","label"),A(nt,"class","value"),A(Z,"class","row svelte-aw1ho5"),A(c,"class","svelte-aw1ho5")},m(t,e){g(t,n,e),m(n,o),m(o,r),m(o,l),m(o,s),m(n,i),m(n,c),m(c,a),m(a,u),m(a,d),m(a,h),m(h,f),m(c,p),m(c,y),m(y,w),m(y,k),m(y,C),m(C,S),m(c,O),m(c,T),m(T,E),m(T,N),m(T,_),m(_,P),m(c,D),m(c,z),m(z,F),m(z,I),m(z,B),m(B,H),m(c,j),m(c,R),m(R,V),m(R,L),m(R,q),m(q,U),m(c,W),m(c,Y),m(Y,J),m(Y,X),m(Y,G),m(G,K),m(c,Q),m(c,Z),m(Z,tt),m(Z,et),m(Z,nt),m(nt,ot)},p(t,[e]){1&e&&rt!==(rt=t[0].monthName+"")&&M(r,rt),1&e&&lt!==(lt=t[0].year+"")&&M(s,lt),1&e&&st!==(st=t[0].monthlyIncomeTotal+"")&&M(f,st),1&e&&it!==(it=t[0].monthlyIncomeNewArticle+"")&&M(S,it),1&e&&ct!==(ct=t[0].monthlyIncomeOldArticle+"")&&M(P,ct),1&e&&at!==(at=t[0].numberArticleTotal+"")&&M(H,at),1&e&&ut!==(ut=t[0].numberArticleNewArticle+"")&&M(U,ut),1&e&&dt!==(dt=t[0].numberArticleOldArticle+"")&&M(K,dt),1&e&&ht!==(ht=t[0].monthsTopStory+"")&&M(ot,ht)},i:t,o:t,d(t){t&&$(n)}}}function ge(t,e,n){let{monthSynthesis:o}=e;return t.$$set=t=>{"monthSynthesis"in t&&n(0,o=t.monthSynthesis)},[o]}class $e extends mt{constructor(t){super(),ft(this,t,ge,ye,i,{monthSynthesis:0})}}function ve(t,e,n){const o=t.slice();return o[15]=e[n],o}function we(t){let e,n,o;function r(t,e){return t[8]?be:xe}let l=r(t),s=l(t);return{c(){e=v("button"),s.c()},m(r,l){g(r,e,l),s.m(e,null),n||(o=k(e,"click",t[12]),n=!0)},p(t,n){l!==(l=r(t))&&(s.d(1),s=l(t),s&&(s.c(),s.m(e,null)))},d(t){t&&$(e),s.d(),n=!1,o()}}}function be(t){let e;return{c(){e=b("Hide Monthly Amounts")},m(t,n){g(t,e,n)},d(t){t&&$(e)}}}function xe(t){let e;return{c(){e=b("Show Monthly Amounts")},m(t,n){g(t,e,n)},d(t){t&&$(e)}}}function ke(t){let e,n,o;function r(t,e){return t[7]?Ce:Ae}let l=r(t),s=l(t);return{c(){e=v("button"),s.c()},m(r,l){g(r,e,l),s.m(e,null),n||(o=k(e,"click",t[13]),n=!0)},p(t,n){l!==(l=r(t))&&(s.d(1),s=l(t),s&&(s.c(),s.m(e,null)))},d(t){t&&$(e),s.d(),n=!1,o()}}}function Ce(t){let e;return{c(){e=b("Hide List Stories")},m(t,n){g(t,e,n)},d(t){t&&$(e)}}}function Ae(t){let e;return{c(){e=b("Show List Stories")},m(t,n){g(t,e,n)},d(t){t&&$(e)}}}function Me(t){let e,n,o;function r(t,e){return t[6]?Se:Oe}let l=r(t),s=l(t);return{c(){e=v("button"),s.c()},m(r,l){g(r,e,l),s.m(e,null),n||(o=k(e,"click",t[14]),n=!0)},p(t,n){l!==(l=r(t))&&(s.d(1),s=l(t),s&&(s.c(),s.m(e,null)))},d(t){t&&$(e),s.d(),n=!1,o()}}}function Se(t){let e;return{c(){e=b("Hide Month Synthesis")},m(t,n){g(t,e,n)},d(t){t&&$(e)}}}function Oe(t){let e;return{c(){e=b("Show Month Synthesis")},m(t,n){g(t,e,n)},d(t){t&&$(e)}}}function Te(t){let e,n,o,r,l,s,i,c,a=[],u=new Map,d=t[1];const h=t=>t[15].month;for(let e=0;e<d.length;e+=1){let n=ve(t,d,e),o=h(n);u.set(o,a[e]=Ee(o,n))}return s=new pe({props:{labels:t[3],data:t[2]}}),{c(){e=v("div"),n=v("div"),o=v("ul");for(let t=0;t<a.length;t+=1)a[t].c();r=x(),l=v("div"),at(s.$$.fragment),A(n,"class","monthly-list svelte-pwapd9"),A(l,"class","histogram svelte-pwapd9"),A(e,"class","monthly-amounts svelte-pwapd9")},m(t,i){g(t,e,i),m(e,n),m(n,o);for(let t=0;t<a.length;t+=1)a[t].m(o,null);m(e,r),m(e,l),ut(s,l,null),c=!0},p(t,e){2&e&&(d=t[1],a=ct(a,e,h,1,t,d,u,o,lt,Ee,null,ve));const n={};8&e&&(n.labels=t[3]),4&e&&(n.data=t[2]),s.$set(n)},i(t){c||(et(s.$$.fragment,t),q((()=>{i||(i=rt(e,$t,{},!0)),i.run(1)})),c=!0)},o(t){nt(s.$$.fragment,t),i||(i=rt(e,$t,{},!1)),i.run(0),c=!1},d(t){t&&$(e);for(let t=0;t<a.length;t+=1)a[t].d();dt(s),t&&i&&i.end()}}}function Ee(t,e){let n,o,r,l,s,i,c,a=e[15].month.monthName+"",u=e[15].month.year+"",d=e[15].amount/100+"";return{key:t,first:null,c(){n=v("li"),o=b(a),r=x(),l=b(u),s=b(" - "),i=b(d),c=b(" $\n            "),this.first=n},m(t,e){g(t,n,e),m(n,o),m(n,r),m(n,l),m(n,s),m(n,i),m(n,c)},p(t,n){e=t,2&n&&a!==(a=e[15].month.monthName+"")&&M(o,a),2&n&&u!==(u=e[15].month.year+"")&&M(l,u),2&n&&d!==(d=e[15].amount/100+"")&&M(i,d)},d(t){t&&$(n)}}}function Ne(t){let e,n,o,r;return n=new ce({props:{rows:t[0],headers:Ot,totals:t[5],orders:Tt,chartsColumns:Et,chartColumn:"title",chartValue:"amountMonth"}}),{c(){e=v("div"),at(n.$$.fragment),A(e,"class","list-stories svelte-pwapd9")},m(t,o){g(t,e,o),ut(n,e,null),r=!0},p(t,e){const o={};1&e&&(o.rows=t[0]),32&e&&(o.totals=t[5]),n.$set(o)},i(t){r||(et(n.$$.fragment,t),q((()=>{o||(o=rt(e,$t,{},!0)),o.run(1)})),r=!0)},o(t){nt(n.$$.fragment,t),o||(o=rt(e,$t,{},!1)),o.run(0),r=!1},d(t){t&&$(e),dt(n),t&&o&&o.end()}}}function _e(t){let e,n,o,r;return n=new $e({props:{monthSynthesis:t[4]}}),{c(){e=v("div"),at(n.$$.fragment),A(e,"class","synthesis")},m(t,o){g(t,e,o),ut(n,e,null),r=!0},p(t,e){const o={};16&e&&(o.monthSynthesis=t[4]),n.$set(o)},i(t){r||(et(n.$$.fragment,t),q((()=>{o||(o=rt(e,$t,{},!0)),o.run(1)})),r=!0)},o(t){nt(n.$$.fragment,t),o||(o=rt(e,$t,{},!1)),o.run(0),r=!1},d(t){t&&$(e),dt(n),t&&o&&o.end()}}}function Pe(t){let e,n,o,r,s,i,c,a,u,d,h,f,p,y,w,b,C=t[1].length>0&&we(t),A=t[0].length>0&&ke(t),M=t[0].length>0&&Me(t),S=t[1].length>0&&t[8]&&Te(t),O=t[0].length>0&&t[7]&&Ne(t),T=t[0].length>0&&t[6]&&_e(t);return{c(){e=v("main"),n=v("p"),n.textContent="Version: 0.0.8",o=x(),r=v("button"),r.textContent="Save dashboard.json",s=x(),i=v("button"),i.textContent="Load dashboard.json",c=x(),a=v("div"),C&&C.c(),u=x(),A&&A.c(),d=x(),M&&M.c(),h=x(),S&&S.c(),f=x(),O&&O.c(),p=x(),T&&T.c()},m(l,$){g(l,e,$),m(e,n),m(e,o),m(e,r),m(e,s),m(e,i),m(e,c),m(e,a),C&&C.m(a,null),m(a,u),A&&A.m(a,null),m(a,d),M&&M.m(a,null),m(e,h),S&&S.m(e,null),m(e,f),O&&O.m(e,null),m(e,p),T&&T.m(e,null),y=!0,w||(b=[k(r,"click",t[10]),k(i,"click",t[11])],w=!0)},p(t,[n]){t[1].length>0?C?C.p(t,n):(C=we(t),C.c(),C.m(a,u)):C&&(C.d(1),C=null),t[0].length>0?A?A.p(t,n):(A=ke(t),A.c(),A.m(a,d)):A&&(A.d(1),A=null),t[0].length>0?M?M.p(t,n):(M=Me(t),M.c(),M.m(a,null)):M&&(M.d(1),M=null),t[1].length>0&&t[8]?S?(S.p(t,n),258&n&&et(S,1)):(S=Te(t),S.c(),et(S,1),S.m(e,f)):S&&(Z(),nt(S,1,1,(()=>{S=null})),tt()),t[0].length>0&&t[7]?O?(O.p(t,n),129&n&&et(O,1)):(O=Ne(t),O.c(),et(O,1),O.m(e,p)):O&&(Z(),nt(O,1,1,(()=>{O=null})),tt()),t[0].length>0&&t[6]?T?(T.p(t,n),65&n&&et(T,1)):(T=_e(t),T.c(),et(T,1),T.m(e,null)):T&&(Z(),nt(T,1,1,(()=>{T=null})),tt())},i(t){y||(et(S),et(O),et(T),y=!0)},o(t){nt(S),nt(O),nt(T),y=!1},d(t){t&&$(e),C&&C.d(),A&&A.d(),M&&M.d(),S&&S.d(),O&&O.d(),T&&T.d(),w=!1,l(b)}}}function De(t,e,n){let o,r,l,s,i,c=[],a=[],u=[],d=[];async function h(){const t=await(async()=>{let[t]=await window.showOpenFilePicker();const e=await t.getFile(),n=await e.text(),o=JSON.parse((t=>t.startsWith("])}while(1);</x>")?t.replace("])}while(1);</x>",""):t)(n));return o})();n(1,a=[...bt(t)]),n(0,c=[...kt(t.payload.postAmounts)])}return t.$$.update=()=>{2&t.$$.dirty&&n(8,o=a.length>0),1&t.$$.dirty&&n(7,r=c.length>0),1&t.$$.dirty&&n(6,l=c.length>0),2&t.$$.dirty&&n(2,u=[...xt(a).data]),2&t.$$.dirty&&n(3,d=[...xt(a).labels]),1&t.$$.dirty&&n(5,s=[...Nt(c,Ot)]),1&t.$$.dirty&&n(4,i=Ct(c))},[c,a,u,d,i,s,l,r,o,h,()=>{window.open("https://medium.com/me/partner/dashboard?format=json","medium stats")},async()=>{await h()},()=>{n(8,o=!o)},()=>{n(7,r=!r)},()=>{n(6,l=!l)}]}return new class extends mt{constructor(t){super(),ft(this,t,De,Pe,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map