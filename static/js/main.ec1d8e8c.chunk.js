(this["webpackJsonpgithub-timeline"]=this["webpackJsonpgithub-timeline"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),i=n.n(s),r=n(14),c=n.n(r),o=n(8),l=n(5),u=n(4),j=n.n(u),d=n(7),b=n(3),h=n(22),p=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,s,i,r,c=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:1,e.prev=1,e.next=4,fetch("https://api.github.com/users/".concat(t,"/repos?type=public&sort=created&direction=desc&page=").concat(n,"&per_page=").concat(30));case 4:return a=e.sent,e.next=7,a.json();case 7:if(s=e.sent,i=a.headers.get("Link"),!(s.length<1||s.message)){e.next=13;break}throw s.message||"Not Found";case 13:i?(r=h(i),s={repos:Object(l.a)(s),pagination:Object(o.a)({},r)}):s={repos:Object(l.a)(s),pagination:Object(o.a)({},null)};case 14:return e.abrupt("return",s);case 17:return e.prev=17,e.t0=e.catch(1),e.abrupt("return",e.t0);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}(),f=n(2),m=n.n(f),O=n(12),v=n.n(O),_=(n(33),"DD-MM-YYYY"),x=function(e){var t,n,s=e.data,i=s.name,r=s.description,c=s.created_at,o=s.fork,l=s.html_url;return Object(a.jsxs)("div",{className:"timelineitem__root",children:[Object(a.jsxs)("div",{className:"timelineitem__separator",children:[Object(a.jsxs)("div",{title:o?"Fork":"Repository",className:"timelineitem__dot",children:[Object(a.jsx)("h2",{className:"timelineitem__label",children:(n=c,v()(n).format("YYYY"))}),(t=o,t?Object(a.jsx)("i",{className:"fas fa-code-branch timelineitem__dot-icon"}):Object(a.jsx)("i",{className:"fas fa-folder timelineitem__dot-icon"}))]}),Object(a.jsx)("div",{className:"timelineitem__connector"})]}),Object(a.jsxs)("div",{className:"timelineitem__content",children:[Object(a.jsx)("a",{className:"timelineitem__title",target:"_blank",rel:"noreferrer noopener",href:l,children:i}),Object(a.jsx)("h2",{className:"timelineitem__description",children:r}),Object(a.jsx)("p",{title:_,className:"timelineitem__date",children:function(e,t){return v()(e).format(t)}(c,_)})]})]})},g=x;x.prototypes={data:m.a.object};var N=n.p+"static/media/error.df882897.svg",y=(n(11),function(){return Object(a.jsxs)("div",{className:"state__root",children:[Object(a.jsx)("img",{className:"state__illustration",alt:"",src:N,title:"hint-illustration"}),Object(a.jsx)("h2",{className:"state__title",children:"Something unexpected happened!"}),Object(a.jsx)("h3",{className:"state__subtitle",children:"Please try again later"})]})}),w=n.p+"static/media/hint.4093998e.svg",k=function(){return Object(a.jsxs)("div",{className:"state__root",children:[Object(a.jsx)("img",{className:"state__illustration",alt:"",src:w,title:"hint-illustration"}),Object(a.jsx)("h2",{className:"state__title",children:"Activity history visualized"}),Object(a.jsx)("h3",{className:"state__subtitle",children:"GitHub Timeline creates a visual history of users GitHub activity"})]})},L=n.p+"static/media/not-found.dc13f67c.svg",E=function(){return Object(a.jsxs)("div",{className:"state__root",children:[Object(a.jsx)("img",{className:"state__illustration",alt:"",src:L,title:"hint-illustration"}),Object(a.jsx)("h2",{className:"state__title",children:"No user found"}),Object(a.jsx)("h3",{className:"state__subtitle",children:"..maybe you mistyped it?"})]})},S=(n(34),function(e){return e.isLoading?Object(a.jsx)("div",{className:"loader__root",children:Object(a.jsx)("div",{className:"small progress",children:Object(a.jsx)("div",{})})}):null}),F=S;S.prototypes={isLoading:m.a.bool};n(35);var Y=function(e){var t,n,s=e.data,i=e.user,r=e.loadMore,c=e.isLoading,o=e.hasError,l=e.notFound;return Object(a.jsxs)("div",{className:"timeline__root",children:[null===s||void 0===s||null===(t=s.repos)||void 0===t?void 0:t.map((function(e){return Object(a.jsx)(g,{data:e},e.id)})),(null===s||void 0===s||null===(n=s.pagination)||void 0===n?void 0:n.next)&&Object(a.jsx)("div",{className:"loadmore__root",children:Object(a.jsx)(P,{fn:r,text:"Load More",isLoading:c,hasError:o})}),!s.repos&&!o&&!l&&Object(a.jsx)(k,{}),!s.repos&&o&&Object(a.jsx)(y,{}),!s.repos&&l&&!o&&Object(a.jsx)(E,{user:i})]})},C=Y;Y.prototypes={data:m.a.array,loadMore:m.a.func,isLoading:m.a.bool,hasError:m.a.bool,notFound:m.a.bool};n(36);var M=function(e){var t=e.getData,n=e.isLoading,i=Object(s.useState)(""),r=Object(b.a)(i,2),c=r[0],o=r[1],l=Object(s.useState)(!1),u=Object(b.a)(l,2),j=u[0],d=u[1],h=Object(s.useRef)(null),p=function(){c.length&&(d(!1),t(c),o(""))};return Object(s.useEffect)((function(){var e=h.current;j?e.focus():e.blur()}),[j]),Object(a.jsxs)("div",{className:"search__root",children:[Object(a.jsx)("input",{ref:h,onFocus:function(){return d(!0)},value:c,onChange:function(e){o(e.target.value)},className:"search__input",placeholder:"Enter GitHub username",onKeyUp:function(e){"Enter"===e.key&&p()},type:"text"}),Object(a.jsx)(P,{fn:p,text:"Generate",isLoading:n,cssClass:"search__input-btn"})]})},D=M;M.prototypes={getData:m.a.func,isLoading:m.a.bool};n(37);var H=function(){return Object(a.jsx)("div",{className:"header__root",children:Object(a.jsxs)("h1",{className:"header__title",children:[Object(a.jsx)("span",{className:"thin",children:"GitHub "}),"Timeline"]})})},G=(n(38),function(e){var t=e.data;if(!t||t.length<1)return null;var n=t[0].owner,s=n.login,i=n.avatar_url,r=n.html_url;return Object(a.jsxs)("div",{className:"infopanel__root",children:[Object(a.jsx)("img",{className:"infopanel__avatar",src:i,alt:"avatar"}),Object(a.jsx)("a",{className:"infopanel__username",target:"_blank",rel:"noreferrer noopener",href:r,children:Object(a.jsx)("span",{className:"alt-link",children:s})}),"'s activity"]},s)}),T=G;G.prototypes={data:m.a.array};n(39);var P=function(e){var t=e.isLoading,n=e.hasError,s=e.text,i=e.fn,r=e.cssClass;return Object(a.jsxs)("div",{className:"button__root",children:[Object(a.jsxs)("button",{disabled:!!t,onClick:i,className:r,children:[Object(a.jsx)(F,{isLoading:t}),s]}),n&&Object(a.jsx)("p",{className:"button__error",children:"Something didn't quite work"})]})},A=n(15),B=n.n(A),I=function(e){var t=e.show,n=e.children,i=e.transition,r=void 0===i?.5:i,c=Object(s.useState)(t),o=Object(b.a)(c,2),l=o[0],u=o[1];Object(s.useEffect)((function(){t&&u(!0)}),[t]);return l&&Object(a.jsx)("div",{style:{animation:"".concat(t?"fade-in":"fade-out"," ").concat(r,"s")},onAnimationEnd:function(){t||u(!1)},children:n})};n(40);B.a.polyfill();var J=function(e){var t=e.visibilityHeight,n=void 0===t?500:t,i=e.transition,r=Object(s.useState)(!1),c=Object(b.a)(r,2),o=c[0],l=c[1];Object(s.useEffect)((function(){return window.addEventListener("scroll",u,{passive:!0}),function(){window.removeEventListener("scroll",u)}}),[]);var u=function(){var e=window.pageYOffset;l(e>=n)};return Object(a.jsx)(I,{show:o,transition:i,children:Object(a.jsx)("div",{className:"backtotop__root",onClick:function(){window.scroll({top:0,left:0,behavior:"smooth"})},children:Object(a.jsx)("i",{className:"fas fa-arrow-up backtotop__icon"})})})};n(41);var R=function(){var e=Object(s.useState)({}),t=Object(b.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)(!1),c=Object(b.a)(r,2),u=c[0],h=c[1],f=Object(s.useState)(!1),m=Object(b.a)(f,2),O=m[0],v=m[1],_=Object(s.useState)(!1),x=Object(b.a)(_,2),g=x[0],N=x[1],y=function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,p(t);case 4:"Not Found"===(n=e.sent)&&N(!0),i(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),v(!0);case 12:return e.prev=12,h(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,t=n.repos[0].owner.login,a=n.pagination.next.page,e.next=6,p(t,a);case 6:s=e.sent,i({repos:[].concat(Object(l.a)(n.repos),Object(l.a)(s.repos)),pagination:Object(o.a)({},s.pagination)}),v(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),v(!0);case 14:return e.prev=14,h(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"app__root",children:[Object(a.jsx)(H,{}),Object(a.jsx)(D,{getData:y,isLoading:u}),Object(a.jsx)(T,{data:n.repos}),Object(a.jsx)(C,{data:n,loadMore:w,isLoading:u,hasError:O,notFound:g}),Object(a.jsx)(J,{visibilityHeight:4e3,transition:.35})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(R,{})}),document.getElementById("root")),q()}],[[42,1,2]]]);
//# sourceMappingURL=main.ec1d8e8c.chunk.js.map