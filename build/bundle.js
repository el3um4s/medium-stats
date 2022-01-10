var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function i(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}let y;function $(t){y=t}const v=[],b=[],w=[],x=[],k=Promise.resolve();let M=!1;function _(t){w.push(t)}const A=new Set;let C=0;function N(){const t=y;do{for(;C<v.length;){const t=v[C];C++,$(t),S(t.$$)}for($(null),v.length=0,C=0;b.length;)b.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];A.has(e)||(A.add(e),e())}w.length=0}while(v.length);for(;x.length;)x.pop()();M=!1,A.clear(),$(t)}function S(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const T=new Set;let j;function E(){j={r:0,c:[],p:j}}function P(){j.r||l(j.c),j=j.p}function O(t,e){t&&t.i&&(T.delete(t),t.i(e))}function D(t,e,n,l){if(t&&t.o){if(T.has(t))return;T.add(t),j.c.push((()=>{T.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}function L(t,e){t.d(1),e.delete(t.key)}function F(t,e,n,l,o,r,s,c,a,i,u,d){let f=t.length,h=r.length,m=f;const p={};for(;m--;)p[t[m].key]=m;const g=[],y=new Map,$=new Map;for(m=h;m--;){const t=d(o,r,m),c=n(t);let a=s.get(c);a?l&&a.p(t,e):(a=i(c,t),a.c()),y.set(c,g[m]=a),c in p&&$.set(c,Math.abs(m-p[c]))}const v=new Set,b=new Set;function w(t){O(t,1),t.m(c,u),s.set(t.key,t),u=t.first,h--}for(;f&&h;){const e=g[h-1],n=t[f-1],l=e.key,o=n.key;e===n?(u=e.first,f--,h--):y.has(o)?!s.has(l)||v.has(l)?w(e):b.has(o)?f--:$.get(l)>$.get(o)?(b.add(l),w(e)):(v.add(o),f--):(a(n,s),f--)}for(;f--;){const e=t[f];y.has(e.key)||a(e,s)}for(;h;)w(g[h-1]);return g}function I(t){t&&t.c()}function W(t,n,r,s){const{fragment:c,on_mount:a,on_destroy:i,after_update:u}=t.$$;c&&c.m(n,r),s||_((()=>{const n=a.map(e).filter(o);i?i.push(...n):l(n),t.$$.on_mount=[]})),u.forEach(_)}function q(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(v.push(t),M||(M=!0,k.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,o,r,s,c,i,u,d=[-1]){const f=y;$(e);const h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:o.target||f.$$.root};u&&u(h.root);let m=!1;if(h.ctx=r?r(e,o.props||{},((t,n,...l)=>{const o=l.length?l[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),m&&B(e,t)),n})):[],h.update(),m=!0,l(h.before_update),h.fragment=!!s&&s(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(a)}else h.fragment&&h.fragment.c();o.intro&&O(e.$$.fragment),W(e,o.target,o.anchor,o.customElement),N()}$(f)}class J{$destroy(){q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const V=t=>{const e=new Date(t);return{timestamp:e,year:e.getFullYear(),month:e.getMonth(),monthName:e.toLocaleString("default",{month:"short"}),day:e.getDate()}},Y=(t,e=!1)=>({isCurrentMonth:e,month:V(t.periodStartedAt),amount:t.amount}),z=t=>[Y(t.payload.currentMonthAmount,!0),...t.payload.completedMonthlyAmounts.map((t=>Y(t)))],G=t=>({data:t.map((t=>t.amount)).reverse(),labels:t.map((t=>t.month.monthName)).reverse()}),K=t=>t.map((t=>(t=>({id:t.post.id,title:t.post.title,amountMonth:t.amount,amountTot:t.totalAmountPaidToDate,homeCollectionId:t.post.homeCollectionId,wordCount:t.post.virtuals.wordCount,readingTime:t.post.virtuals.readingTime,firstPublishedAt:V(t.post.firstPublishedAt)}))(t))),Q=[{key:"firstPublishedAt",title:"Date",type:"date",width:"12ch"},{key:"amountTot",title:"$ Tot",type:"cents",width:"10ch",align:"end"},{key:"amountMonth",title:"$ Month",type:"cents",width:"10ch",align:"end"},{key:"title",title:"Title",type:"text"},{key:"wordCount",title:"Words",type:"numeric",width:"6ch",align:"end"}],R=(t,e)=>{const n=e.map((e=>{let n="";return"numeric"!==e.type&&"cents"!==e.type||(n=function(t,e){return t.reduce(((t,n)=>t+n[e]),0)}(t,e.key)),{...e,value:n}}));return n};function U(t,e,n){const l=t.slice();return l[9]=e[n],l}function X(t,e,n){const l=t.slice();return l[12]=e[n],l}function Z(t,e,n){const l=t.slice();return l[15]=e[n],l}function tt(t,e,n){const l=t.slice();return l[15]=e[n],l}function et(t){let e,n,l,o,r=t[15].title+"";return{c(){e=u("div"),n=d(r),l=f(),m(e,"class","cell title svelte-4heeyr"),m(e,"style",o=t[4](t[15]))},m(t,o){c(t,e,o),s(e,n),s(e,l)},p(t,l){2&l&&r!==(r=t[15].title+"")&&p(n,r),2&l&&o!==(o=t[4](t[15]))&&m(e,"style",o)},d(t){t&&a(e)}}}function nt(t){let e,n,l,o,r=t[5](t[15].type,t[12][t[15].key])+"";return{c(){e=u("div"),n=d(r),l=f(),m(e,"class","cell svelte-4heeyr"),m(e,"style",o=t[4](t[15]))},m(t,o){c(t,e,o),s(e,n),s(e,l)},p(t,l){3&l&&r!==(r=t[5](t[15].type,t[12][t[15].key])+"")&&p(n,r),2&l&&o!==(o=t[4](t[15]))&&m(e,"style",o)},d(t){t&&a(e)}}}function lt(t){let e,n=t[1],l=[];for(let e=0;e<n.length;e+=1)l[e]=nt(Z(t,n,e));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=d("")},m(t,n){for(let e=0;e<l.length;e+=1)l[e].m(t,n);c(t,e,n)},p(t,o){if(51&o){let r;for(n=t[1],r=0;r<n.length;r+=1){const s=Z(t,n,r);l[r]?l[r].p(s,o):(l[r]=nt(s),l[r].c(),l[r].m(e.parentNode,e))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(t){i(l,t),t&&a(e)}}}function ot(t){let e,n=t[2],l=[];for(let e=0;e<n.length;e+=1)l[e]=rt(U(t,n,e));return{c(){e=u("footer");for(let t=0;t<l.length;t+=1)l[t].c();m(e,"style",t[3]),m(e,"class","svelte-4heeyr")},m(t,n){c(t,e,n);for(let t=0;t<l.length;t+=1)l[t].m(e,null)},p(t,o){if(52&o){let r;for(n=t[2],r=0;r<n.length;r+=1){const s=U(t,n,r);l[r]?l[r].p(s,o):(l[r]=rt(s),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}8&o&&m(e,"style",t[3])},d(t){t&&a(e),i(l,t)}}}function rt(t){let e,n,l,o,r=t[5](t[9].type,t[9].value)+"";return{c(){e=u("div"),n=d(r),l=f(),m(e,"class","cell total svelte-4heeyr"),m(e,"style",o=t[4](t[9]))},m(t,o){c(t,e,o),s(e,n),s(e,l)},p(t,l){4&l&&r!==(r=t[5](t[9].type,t[9].value)+"")&&p(n,r),4&l&&o!==(o=t[4](t[9]))&&m(e,"style",o)},d(t){t&&a(e)}}}function st(e){let n,l,o,r,d,h=e[1],p=[];for(let t=0;t<h.length;t+=1)p[t]=et(tt(e,h,t));let g=e[0],y=[];for(let t=0;t<g.length;t+=1)y[t]=lt(X(e,g,t));let $=e[2].length>0&&ot(e);return{c(){n=u("article"),l=u("header");for(let t=0;t<p.length;t+=1)p[t].c();o=f(),r=u("section");for(let t=0;t<y.length;t+=1)y[t].c();d=f(),$&&$.c(),m(l,"style",e[3]),m(l,"class","svelte-4heeyr"),m(r,"style",e[3]),m(r,"class","svelte-4heeyr"),m(n,"class","table svelte-4heeyr")},m(t,e){c(t,n,e),s(n,l);for(let t=0;t<p.length;t+=1)p[t].m(l,null);s(n,o),s(n,r);for(let t=0;t<y.length;t+=1)y[t].m(r,null);s(n,d),$&&$.m(n,null)},p(t,[e]){if(18&e){let n;for(h=t[1],n=0;n<h.length;n+=1){const o=tt(t,h,n);p[n]?p[n].p(o,e):(p[n]=et(o),p[n].c(),p[n].m(l,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=h.length}if(8&e&&m(l,"style",t[3]),51&e){let n;for(g=t[0],n=0;n<g.length;n+=1){const l=X(t,g,n);y[n]?y[n].p(l,e):(y[n]=lt(l),y[n].c(),y[n].m(r,null))}for(;n<y.length;n+=1)y[n].d(1);y.length=g.length}8&e&&m(r,"style",t[3]),t[2].length>0?$?$.p(t,e):($=ot(t),$.c(),$.m(n,null)):$&&($.d(1),$=null)},i:t,o:t,d(t){t&&a(n),i(p,t),i(y,t),$&&$.d()}}}function ct(t,e,n){let l,{rows:o=[]}=e,{headers:r=[]}=e,{totals:s=[]}=e;return t.$$set=t=>{"rows"in t&&n(0,o=t.rows),"headers"in t&&n(1,r=t.headers),"totals"in t&&n(2,s=t.totals)},t.$$.update=()=>{var e;2&t.$$.dirty&&n(3,l=`grid-template-columns: ${e=r,e.map((t=>(null==t?void 0:t.width)?t.width:"auto")).join(" ")};`)},[o,r,s,l,t=>(null==t?void 0:t.align)?`text-align: ${t.align};`:"",(t,e)=>{return"cents"===t&&"number"==typeof e?e/100:"date"===t&&"object"==typeof e?`${(n=e).year} ${n.monthName} ${n.day}`:e;var n}]}class at extends J{constructor(t){super(),H(this,t,ct,st,r,{rows:0,headers:1,totals:2})}}function it(t,e,n){const l=t.slice();return l[5]=e[n],l}function ut(t,e,n){const l=t.slice();return l[8]=e[n],l}function dt(t,e){let n,l,o,r,i=e[8]/100+"";return{key:t,first:null,c(){n=u("div"),l=u("span"),o=d(i),r=f(),m(l,"class","value svelte-1vcxm30"),m(n,"class","column svelte-1vcxm30"),g(n,"height",e[8]/e[3]*100+"%"),this.first=n},m(t,e){c(t,n,e),s(n,l),s(l,o),s(n,r)},p(t,l){e=t,1&l&&i!==(i=e[8]/100+"")&&p(o,i),9&l&&g(n,"height",e[8]/e[3]*100+"%")},d(t){t&&a(n)}}}function ft(t,e){let n,l,o=e[5]+"";return{key:t,first:null,c(){n=u("div"),l=d(o),this.first=n},m(t,e){c(t,n,e),s(n,l)},p(t,n){e=t,2&n&&o!==(o=e[5]+"")&&p(l,o)},d(t){t&&a(n)}}}function ht(e){let n,l,o,r,i=[],d=new Map,h=[],p=new Map,g=e[0];const y=t=>Math.random();for(let t=0;t<g.length;t+=1){let n=ut(e,g,t),l=y();d.set(l,i[t]=dt(l,n))}let $=e[1];const v=t=>Math.random();for(let t=0;t<$.length;t+=1){let n=it(e,$,t),l=v();p.set(l,h[t]=ft(l,n))}return{c(){n=u("section"),l=u("div");for(let t=0;t<i.length;t+=1)i[t].c();o=f(),r=u("div");for(let t=0;t<h.length;t+=1)h[t].c();m(l,"class","columns data svelte-1vcxm30"),m(l,"style",e[2]),m(r,"class","columns labels svelte-1vcxm30"),m(r,"style",e[2]),m(n,"class","svelte-1vcxm30")},m(t,e){c(t,n,e),s(n,l);for(let t=0;t<i.length;t+=1)i[t].m(l,null);s(n,o),s(n,r);for(let t=0;t<h.length;t+=1)h[t].m(r,null)},p(t,[e]){9&e&&(g=t[0],i=F(i,e,y,1,t,g,d,l,L,dt,null,ut)),4&e&&m(l,"style",t[2]),2&e&&($=t[1],h=F(h,e,v,1,t,$,p,r,L,ft,null,it)),4&e&&m(r,"style",t[2])},i:t,o:t,d(t){t&&a(n);for(let t=0;t<i.length;t+=1)i[t].d();for(let t=0;t<h.length;t+=1)h[t].d()}}}function mt(t,e,n){let l,o,r,{data:s=[]}=e,{labels:c=[]}=e;return t.$$set=t=>{"data"in t&&n(0,s=t.data),"labels"in t&&n(1,c=t.labels)},t.$$.update=()=>{1&t.$$.dirty&&n(4,l=s.length),1&t.$$.dirty&&n(3,o=Math.max(...s)),16&t.$$.dirty&&n(2,r=`grid-template-columns: repeat(${l}, minmax(0, 1fr));`)},[s,c,r,o,l]}class pt extends J{constructor(t){super(),H(this,t,mt,ht,r,{data:0,labels:1})}}function gt(t,e,n){const l=t.slice();return l[10]=e[n],l}function yt(t){let e,n,l,o;function r(t,e){return t[5]?$t:vt}let i=r(t),d=i(t);return{c(){e=u("div"),n=u("button"),d.c()},m(r,a){c(r,e,a),s(e,n),d.m(n,null),l||(o=h(n,"click",t[9]),l=!0)},p(t,e){i!==(i=r(t))&&(d.d(1),d=i(t),d&&(d.c(),d.m(n,null)))},d(t){t&&a(e),d.d(),l=!1,o()}}}function $t(t){let e;return{c(){e=d("Hide Monthly Amounts")},m(t,n){c(t,e,n)},d(t){t&&a(e)}}}function vt(t){let e;return{c(){e=d("Show Monthly Amounts")},m(t,n){c(t,e,n)},d(t){t&&a(e)}}}function bt(t){let e,n,l,o,r,i,d,h=[],p=new Map,g=t[1];const y=t=>t[10].month;for(let e=0;e<g.length;e+=1){let n=gt(t,g,e),l=y(n);p.set(l,h[e]=wt(l,n))}return i=new pt({props:{labels:t[3],data:t[2]}}),{c(){e=u("div"),n=u("div"),l=u("ul");for(let t=0;t<h.length;t+=1)h[t].c();o=f(),r=u("div"),I(i.$$.fragment),m(n,"class","monthly-list svelte-6ntumb"),m(r,"class","istogram svelte-6ntumb"),m(e,"class","monthly-amounts svelte-6ntumb")},m(t,a){c(t,e,a),s(e,n),s(n,l);for(let t=0;t<h.length;t+=1)h[t].m(l,null);s(e,o),s(e,r),W(i,r,null),d=!0},p(t,e){2&e&&(g=t[1],h=F(h,e,y,1,t,g,p,l,L,wt,null,gt));const n={};8&e&&(n.labels=t[3]),4&e&&(n.data=t[2]),i.$set(n)},i(t){d||(O(i.$$.fragment,t),d=!0)},o(t){D(i.$$.fragment,t),d=!1},d(t){t&&a(e);for(let t=0;t<h.length;t+=1)h[t].d();q(i)}}}function wt(t,e){let n,l,o,r,i,h,m,g=e[10].month.monthName+"",y=e[10].month.year+"",$=e[10].amount/100+"";return{key:t,first:null,c(){n=u("li"),l=d(g),o=f(),r=d(y),i=d(" - "),h=d($),m=d(" $\n            "),this.first=n},m(t,e){c(t,n,e),s(n,l),s(n,o),s(n,r),s(n,i),s(n,h),s(n,m)},p(t,n){e=t,2&n&&g!==(g=e[10].month.monthName+"")&&p(l,g),2&n&&y!==(y=e[10].month.year+"")&&p(r,y),2&n&&$!==($=e[10].amount/100+"")&&p(h,$)},d(t){t&&a(n)}}}function xt(t){let e,n,l;return n=new at({props:{rows:t[0],headers:Q,totals:t[4]}}),{c(){e=u("div"),I(n.$$.fragment),m(e,"class","list-stories svelte-6ntumb")},m(t,o){c(t,e,o),W(n,e,null),l=!0},p(t,e){const l={};1&e&&(l.rows=t[0]),16&e&&(l.totals=t[4]),n.$set(l)},i(t){l||(O(n.$$.fragment,t),l=!0)},o(t){D(n.$$.fragment,t),l=!1},d(t){t&&a(e),q(n)}}}function kt(t){let e,n,o,r,i,d,m,p,g,y,$,v,b=t[1].length>0&&yt(t),w=t[1].length>0&&t[5]&&bt(t),x=t[0].length>0&&xt(t);return{c(){e=u("main"),n=u("p"),n.textContent="Version: 0.0.2",o=f(),r=u("button"),r.textContent="Save dashboard.json",i=f(),d=u("button"),d.textContent="Load dashboard.json",m=f(),b&&b.c(),p=f(),w&&w.c(),g=f(),x&&x.c()},m(l,a){c(l,e,a),s(e,n),s(e,o),s(e,r),s(e,i),s(e,d),s(e,m),b&&b.m(e,null),s(e,p),w&&w.m(e,null),s(e,g),x&&x.m(e,null),y=!0,$||(v=[h(r,"click",t[7]),h(d,"click",t[8])],$=!0)},p(t,[n]){t[1].length>0?b?b.p(t,n):(b=yt(t),b.c(),b.m(e,p)):b&&(b.d(1),b=null),t[1].length>0&&t[5]?w?(w.p(t,n),34&n&&O(w,1)):(w=bt(t),w.c(),O(w,1),w.m(e,g)):w&&(E(),D(w,1,1,(()=>{w=null})),P()),t[0].length>0?x?(x.p(t,n),1&n&&O(x,1)):(x=xt(t),x.c(),O(x,1),x.m(e,null)):x&&(E(),D(x,1,1,(()=>{x=null})),P())},i(t){y||(O(w),O(x),y=!0)},o(t){D(w),D(x),y=!1},d(t){t&&a(e),b&&b.d(),w&&w.d(),x&&x.d(),$=!1,l(v)}}}function Mt(t,e,n){let l,o,r=[],s=[],c=[],a=[];async function i(){const t=await(async()=>{let[t]=await window.showOpenFilePicker();const e=await t.getFile(),n=await e.text(),l=JSON.parse((t=>t.startsWith("])}while(1);</x>")?t.replace("])}while(1);</x>",""):t)(n));return l})();n(1,s=[...z(t)]),n(0,r=[...K(t.payload.postAmounts)])}return t.$$.update=()=>{2&t.$$.dirty&&n(5,l=s.length>0),2&t.$$.dirty&&n(2,c=[...G(s).data]),2&t.$$.dirty&&n(3,a=[...G(s).labels]),1&t.$$.dirty&&n(4,o=[...R(r,Q)])},[r,s,c,a,o,l,i,()=>{window.open("https://medium.com/me/partner/dashboard?format=json","medium stats")},async()=>{await i()},()=>{n(5,l=!l)}]}return new class extends J{constructor(t){super(),H(this,t,Mt,kt,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
