(this.webpackJsonptranslate=this.webpackJsonptranslate||[]).push([[0],{41:function(t,e,a){},83:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(35),c=a.n(r),i=a(14),o=a(15),l=a(17),d=a(16),j=a(18),u=a(3),b=(a(41),a(5)),x=a.n(b),m=a(10),_=a(91),p=a(92),O=a(84),h=a(85),f=a(1),v=function(t){var e=t.actionClick,a=t.leadingClick,n=t.title,s=t.action,r=void 0===s||s,c=t.leading,i=void 0===c||c;return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsxs)("div",{className:"header__titleLeading",children:[i&&Object(f.jsx)(w,{btnClick:a,icon:Object(f.jsx)(O.a,{}),className:"header__leading",expanded:!1}),Object(f.jsx)("h4",{children:n})]}),r&&Object(f.jsx)(w,{icon:Object(f.jsx)(h.a,{}),expandedText:"\u062c\u0639\u0628\u0647 \u0644\u0627\u06cc\u062a\u0646\u0631",btnClick:e,className:"header__actions"})]})},w=function(t){var e=t.expandedText,a=t.className,n=t.expanded,s=void 0===n||n,r=t.btnClick,c=t.icon;return Object(f.jsxs)("div",{className:"expandedButton "+a,onClick:r,children:[s&&Object(f.jsx)("span",{children:e}),c]})},g=function(t){var e=t.text;return Object(f.jsx)("div",{className:"wordCard",children:Object(f.jsx)("h5",{children:e})})},y=a(12),N=a(86),k=a(87),C=a(88),T=a(89),S=a(90),F=a(11),W=a.n(F),B="http://127.0.0.1:5005",D=function(){var t=a(33),e=s.a.useState(!1),n=Object(y.a)(e,2),r=n[0],c=n[1],i=s.a.useState(!1),o=Object(y.a)(i,2),l=o[0],d=o[1],j=s.a.useState([]),u=Object(y.a)(j,2),b=u[0],_=u[1],p=s.a.useState(0),O=Object(y.a)(p,2),h=O[0],v=O[1],F=s.a.useState(0),D=Object(y.a)(F,2),L=D[0],E=D[1],I=s.a.useState(5),J=Object(y.a)(I,2),P=J[0],A=J[1],M=s.a.useState(""),U=Object(y.a)(M,2),q=U[0],z=U[1],G=[1,3,7,21,40],H=L+864e5;s.a.useEffect((function(){return setTimeout((function(){P>0&&A(P-1)}),1e3),0===P&&(z(""),A(5)),function(){return clearTimeout(P)}}),[P]);var K=function(){var e=Object(m.a)(x.a.mark((function e(){var a,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Date.now(),E(a),e.next=4,W.a.post("".concat(B,"/show_words/"),t.stringify({time_stamp:a}));case 4:n=e.sent,0!==Object.keys(n.data).length?(_(n.data),d(!0)):z("\u06a9\u0644\u0645\u0647 \u0627\u06cc \u0628\u0631\u0627\u06cc \u0627\u0645\u0631\u0648\u0632 \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u0647 :)");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(m.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.post("".concat(B,"/remember_word/"),t.stringify({word:b[h].word,cycle:b[h].cycle+1,time_stamp:L+G[b[h].cycle+1]*H}));case 2:200===e.sent.status&&(c(!1),h<b.length-1?v(h+1):(_([]),c(!1),d(!1)));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(m.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.post("".concat(B,"/remember_word/"),t.stringify({word:b[h].word,cycle:b[h].cycle,time_stamp:L+H}));case 2:200===e.sent.status&&(c(!1),h<b.length-1?v(h+1):(_([]),c(!1),d(!1)));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(m.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.post("".concat(B,"/remember_word/"),t.stringify({word:b[h].word,cycle:1,time_stamp:L+H}));case 2:200===e.sent.status&&(c(!1),h<b.length-1?v(h+1):(_([]),c(!1),d(!1)));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[q?Object(f.jsx)("div",{className:"translate__alert",children:q}):Object(f.jsx)(f.Fragment,{}),Object(f.jsx)("div",{className:"container leitnerWordCard",children:Object(f.jsx)("div",{className:"col-sm-10 col-md-7",children:b.length&&l?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{text:r?b[h].translate:b[h].word}),r?Object(f.jsxs)("div",{className:"leitnerWordCard__moods",children:[Object(f.jsx)(w,{icon:Object(f.jsx)(N.a,{}),expandedText:"\u0628\u0644\u062f \u0628\u0648\u062f\u0645",className:"leitnerWordCard__moods__mood",btnClick:Q}),Object(f.jsx)(w,{icon:Object(f.jsx)(k.a,{}),expandedText:"\u06cc\u06a9\u0645 \u06af\u06cc\u0631 \u062f\u0627\u0634\u062a\u0645",className:"leitnerWordCard__moods__mood",btnClick:R}),Object(f.jsx)(w,{icon:Object(f.jsx)(C.a,{}),expandedText:"\u0628\u0644\u062f \u0646\u0628\u0648\u062f\u0645",className:"leitnerWordCard__moods__mood",btnClick:V})]}):Object(f.jsx)("div",{className:"leitnerWordCard__sayBtn",children:Object(f.jsx)(w,{icon:Object(f.jsx)(T.a,{}),expandedText:"\u06af\u0641\u062a\u0645",className:"leitnerWordCard__moods__mood",btnClick:function(){return c(!0)}})})]}):Object(f.jsx)("div",{children:Object(f.jsx)(w,{icon:Object(f.jsx)(S.a,{}),expandedText:"\u0634\u0631\u0648\u0639",className:"leitnerWordCard__start",btnClick:K})})})})]})},L=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={alert:!1,alert_message:"",time:4,translate:"",word:""},t}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(){var t=this;if(this.state.alert)return setTimeout((function(){t.state.time>0&&t.setState({time:t.state.time-1})}),1e3),0===this.state.time&&this.setState({alert:!1,time:4}),function(){return clearTimeout(t.state.time)}}},{key:"render",value:function(){var t=this,e=a(33),n=function(){var e=Object(m.a)(x.a.mark((function e(a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({word:a.target.value});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var a=Object(m.a)(x.a.mark((function a(){var n;return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t.state.word){a.next=5;break}return a.next=3,W.a.post("".concat(B,"/translate/"),e.stringify({word:t.state.word}));case 3:n=a.sent,t.setState({translate:n.data});case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),r=function(){var a=Object(m.a)(x.a.mark((function a(){return x.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t.state.word||!t.state.translate){a.next=11;break}return a.prev=1,a.next=4,W.a.post("".concat(B,"/add_to_leitner/"),e.stringify({word:t.state.word,translate:t.state.translate,cycle:1,time_stamp:Date.now()}));case 4:201===a.sent.status&&t.setState({alert:!0,alert_message:"\u06a9\u0644\u0645\u0647 \u0628\u0647 \u0644\u0627\u06cc\u062a\u0646\u0631 \u0627\u0636\u0627\u0641\u0647 \u0634\u062f ... :)"}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),400===a.t0.response.status&&t.setState({alert:!0,alert_message:"\u0627\u06cc\u0646 \u06a9\u0644\u0645\u0647 \u062f\u0631 \u0644\u0627\u06cc\u062a\u0646\u0631 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u0647 !"});case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(){return a.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"translate__layout",children:[Object(f.jsx)(v,{leading:!1,title:"\u0633\u0631\u0648\u06cc\u0633 \u062a\u0631\u062c\u0645\u0647",actionClick:function(){return t.props.history.push("/leitner")}}),this.state.alert?Object(f.jsx)("div",{className:"translate__alert",children:this.state.alert_message}):Object(f.jsx)(f.Fragment,{}),Object(f.jsxs)("div",{className:"translate__layout__container",children:[Object(f.jsxs)("div",{className:"translate",children:[Object(f.jsxs)("div",{className:"translate__box",children:[Object(f.jsxs)("div",{className:"translate__box__translateTitle",children:[Object(f.jsx)("span",{className:"translate__box__title",children:"\u062a\u0631\u062c\u0645\u0647"}),Object(f.jsx)("span",{className:"translate__box__lang",children:"(\u0641\u0627\u0631\u0633\u06cc)"})]}),Object(f.jsx)("div",{className:"translate__box__translateBox",children:this.state.translate})]}),Object(f.jsxs)("div",{className:"translate__box",children:[Object(f.jsxs)("div",{className:"translate__box__wordTitle",children:[Object(f.jsx)("span",{className:"translate__box__title",children:"\u06a9\u0644\u0645\u0647"}),Object(f.jsx)("span",{className:"translate__box__lang",children:"(\u0627\u0646\u06af\u0644\u06cc\u0633\u06cc)"})]}),Object(f.jsx)("textarea",{onChange:n,autoFocus:!0})]})]}),Object(f.jsx)("div",{className:"translate__btn",children:Object(f.jsx)(w,{icon:Object(f.jsx)(_.a,{}),btnClick:s,expandedText:"\u062a\u0631\u062c\u0645\u0647",className:"translate__btn__translate"})})]}),Object(f.jsx)(w,{icon:Object(f.jsx)(p.a,{}),expandedText:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 \u062c\u0639\u0628\u0647 \u0644\u0627\u06cc\u062a\u0646\u0631",className:"translate__addBtn",btnClick:r})]})}}]),n}(s.a.Component),E=Object(u.f)(L),I=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var t=this;return Object(f.jsxs)("div",{className:"leitner__layout",children:[Object(f.jsx)(v,{title:"\u062c\u0639\u0628\u0647 \u0644\u0627\u06cc\u062a\u0646\u0631",action:!1,leading:!0,leadingClick:function(){return t.props.history.goBack()}}),Object(f.jsx)(D,{})]})}}]),a}(s.a.Component),J=Object(u.f)(I),P=function(t){Object(l.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)(j.a,{children:Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{exact:!0,path:"/",component:E}),Object(f.jsx)(u.a,{exact:!0,path:"/leitner",component:J})]})})}}]),a}(s.a.Component),A=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,93)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),r(t),c(t)}))};c.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root")),A()}},[[83,1,2]]]);
//# sourceMappingURL=main.f6384d29.chunk.js.map