"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[623],{1687:function(n,t,e){e.d(t,{$7:function(){return s},Hx:function(){return l},Y5:function(){return p},_k:function(){return c},uV:function(){return f}});var r=e(5861),a=e(7757),u=e.n(a),i=e(5294);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="16274515b96a6cc71d1764f30d5e6439",c=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(t,"&api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9777:function(n,t,e){e.d(t,{Z:function(){return o}});var r,a=e(168),u=e(6444).ZP.p(r||(r=(0,a.Z)(["\nfont-size: 20px;\nfont-weight: 500;\ntext-align: center;\nmargin-top: 50px;\n"]))),i=e(184);function o(){return(0,i.jsx)(u,{children:"Oops! Something went wrong! Please, reload this page!"})}},7335:function(n,t,e){e.d(t,{O:function(){return l}});var r,a,u=e(7689),i=e(1087),o=e(168),c=e(6444),s=c.ZP.ol(r||(r=(0,o.Z)(["\n  counter-reset: orderedlist;\n"]))),p=c.ZP.li(a||(a=(0,o.Z)(["\n  & {\n    font-size: 16px;\n    margin-bottom: 10px;\n  }\n  &:before {\n    counter-increment: orderedlist;\n    content: counter(orderedlist);\n    font-family: 'Indie Flower';\n    display: inline-block;\n    font-size: 10px;\n    line-height: 0.75;\n    width: 25px;\n    height: 15px;\n    padding-top: 10px;\n    margin-right: 10px;\n    text-align: center;\n    color: #fff;\n    background-color: rgba(132, 137, 143, 0.8);\n    border-radius: 5px;\n  }\n"]))),f=e(184),l=function(n){var t=n.items,e=(0,u.TH)();return(0,f.jsx)(s,{children:t.map((function(n){var t=n.id,r=n.title;return(0,f.jsx)(p,{children:(0,f.jsx)(i.rU,{to:"/movies/".concat(t),state:{from:e},className:"item-link",children:r})},t)}))})}},623:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,a,u,i=e(5861),o=e(9439),c=e(7757),s=e.n(c),p=e(2791),f=e(1087),l=e(5218),d=e(1687),x=e(4768),h=e(168),v=e(6444),m=v.ZP.form(r||(r=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 30px 0 30px 0;\n"]))),g=v.ZP.input(a||(a=(0,h.Z)(["\n  min-width: 260px;\n  border: 1px solid rgba(148, 136, 255, 0.815);\n  outline: none;\n  padding: 10px;\n"]))),Z=v.ZP.button(u||(u=(0,h.Z)(["\n  width: 40px;\n  height: 37px;\n  border: none;\n  margin-left: 0;\n  background-color: rgba(148, 136, 255, 0.815);\n"]))),b=e(184);function w(n){var t=n.onSubmit;return(0,b.jsxs)(m,{onSubmit:function(n){n.preventDefault();var e=n.target.input.value;t(e.trim().toLowerCase()),n.target.reset()},children:[(0,b.jsx)(g,{type:"text",name:"input",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,b.jsx)(Z,{type:"submit",children:(0,b.jsx)(x.uFR,{})})]})}var k=e(7335),y=e(3675),j=e(9777);function _(){var n,t=(0,p.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1],u=(0,p.useState)(!1),c=(0,o.Z)(u,2),x=c[0],h=c[1],v=(0,p.useState)(!1),m=(0,o.Z)(v,2),g=m[0],Z=m[1],_=(0,f.lr)(),P=(0,o.Z)(_,2),S=P[0],q=P[1],C=null!==(n=S.get("query"))&&void 0!==n?n:"";(0,p.useEffect)((function(){function n(){return(n=(0,i.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!1),h(!0),n.next=5,(0,d.$7)(C);case 5:t=n.sent,a(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),Z(!0);case 12:return n.prev=12,h(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}C&&function(){n.apply(this,arguments)}()}),[C]);return(0,b.jsxs)("div",{children:[(0,b.jsx)(w,{onSubmit:function(n){""!==n?(S.set("query",n),q(S)):l.ZP.error("Please, enter your request")}}),x&&(0,b.jsx)(y.Z,{}),g&&(0,b.jsx)(j.Z,{}),r.length>0&&(0,b.jsx)(k.O,{items:r})]})}}}]);
//# sourceMappingURL=623.9d12ded6.chunk.js.map