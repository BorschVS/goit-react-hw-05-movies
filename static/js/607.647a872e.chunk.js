"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[607],{1913:function(n,r,e){e.d(r,{Df:function(){return u},Fi:function(){return h},IQ:function(){return f},Jh:function(){return l},Pg:function(){return p}});var t=e(8683),a=e(5861),c=e(4687),o=e.n(c),i=e(5294),s={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjc2OTA4ODZmODIxN2FiZjEyMGMyMjNhNWYxNDEyYiIsInN1YiI6IjY1ZGI4MTljY2FiZmU0MDE4NmQxYmI3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n_mMnvljsxe6imM9UF46pVV1eqxnSfeB5tUjaDtgbHM"}},u=function(){var n=(0,a.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Z)((0,t.Z)((0,t.Z)({},s),{},{url:"https://api.themoviedb.org/3/trending/all/day"}));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)(o().mark((function n(r){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Z)((0,t.Z)((0,t.Z)({},s),{},{url:"https://api.themoviedb.org/3/movie/".concat(r)}));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)(o().mark((function n(r){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Z)((0,t.Z)((0,t.Z)({},s),{},{url:"https://api.themoviedb.org/3/movie/".concat(r,"/credits")}));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)(o().mark((function n(r){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Z)((0,t.Z)((0,t.Z)({},s),{},{url:"https://api.themoviedb.org/3/movie/".concat(r,"/reviews")}));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}(),h=function(){var n=(0,a.Z)(o().mark((function n(r){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Z)((0,t.Z)((0,t.Z)({},s),{},{url:"https://api.themoviedb.org/3/search/movie?query=".concat(r)}));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:throw n.prev=7,n.t0=n.catch(0),new Error(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}()},6607:function(n,r,e){e.r(r),e.d(r,{default:function(){return M}});var t,a,c,o,i,s,u,p,f=e(5861),l=e(9439),h=e(4687),d=e.n(h),v=e(1913),x=e(2791),Z=e(7689),m=e(168),w=e(4709),g=w.Z.ul(t||(t=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  border-right: 2px solid #fcff00;\n"]))),b=w.Z.div(a||(a=(0,m.Z)(["\n  position: relative;\n  width: 50px;\n  height: 50px;\n  background-color: #676767;\n  border: 2px solid #fcff00;\n"]))),j=w.Z.span(c||(c=(0,m.Z)(["\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-color: #fcff00;\n  color: #676767;\n  text-align: center;\n"]))),y=w.Z.li(o||(o=(0,m.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n\n  border-bottom: 2px solid #fcff00;\n\n  &:first-of-type {\n    border-top: 2px solid #fcff00;\n  }\n"]))),k=w.Z.h3(i||(i=(0,m.Z)(["\n  margin: 0;\n  font-size: 16px;\n\n  margin-bottom: 6px;\n"]))),I=w.Z.div(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),E=w.Z.p(u||(u=(0,m.Z)(["\n  margin: 0;\n  padding: 0;\n"]))),J=w.Z.a(p||(p=(0,m.Z)(["\n  color: #fcff00;\n\n  text-decoration: none;\n  border: 1px solid #fcff00;\n  padding: 0 4px;\n\n  &:hover {\n    background-color: #fcff00;\n    color: #323232;\n  }\n\n  &:active {\n    background-color: #00000000;\n    color: #fcff00;\n  }\n"]))),_=e(184),M=function(){var n=(0,x.useState)(!1),r=(0,l.Z)(n,2),e=r[0],t=r[1],a=(0,x.useState)([]),c=(0,l.Z)(a,2),o=c[0],i=c[1],s=(0,Z.UO)().id;return(0,x.useEffect)((function(){(0,f.Z)(d().mark((function n(){var r;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(!0),n.next=4,(0,v.Jh)(s);case 4:r=n.sent,i(r),n.next=11;break;case 8:throw n.prev=8,n.t0=n.catch(0),new Error(n.t0.message);case 11:return n.prev=11,t(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})))()}),[s]),!e&&(0,_.jsx)(g,{children:o.map((function(n){var r=n.id,e=n.author_details,t=n.url;return(0,_.jsxs)(y,{children:[(0,_.jsx)(b,{children:(0,_.jsx)(j,{children:e.rating})}),(0,_.jsxs)(I,{children:[(0,_.jsx)(k,{children:e.username}),(0,_.jsx)(E,{children:(0,_.jsx)(J,{href:t,target:"_blank",rel:"noopener noreferrer",children:"Watch review"})})]})]},r)}))})}}}]);
//# sourceMappingURL=607.647a872e.chunk.js.map