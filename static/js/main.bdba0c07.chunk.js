(this.webpackJsonplimoverse=this.webpackJsonplimoverse||[]).push([[0],{42:function(e,t,s){},43:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var c=s(13),n=s.n(c),r=s(34),a=s.n(r),i=(s(42),s(14)),l=(s(43),s(1)),o=s.n(l),m=s(3),j=s(23),d=s(20),x=s(11),b=function(e){var t=Object(c.useState)([]),s=Object(i.a)(t,2),n=s[0],r=s[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(m.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(j.d)(Object(j.a)(e.firestore,"announcements"),(function(e){r(e.docs.map((function(e){return e.data()}))),console.log(e.docs.map((function(e){return e.data()})))}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(x.jsx)("div",{className:"bg-primary h-screen overflow-y-auto flex flex-col items-center text-white pt-16 pb-2",children:n.map((function(e){return Object(x.jsxs)("div",{className:"bg-secondary py-4 px-6 rounded my-4 w-2/5",children:[Object(x.jsxs)("p",{className:"font-semibold text-2xl flex items-center mb-0",children:[function(){switch(e.type){case"announcement":return Object(x.jsx)(d.a,{className:"text-md mr-2"});case"update":return Object(x.jsx)(d.e,{className:"text-md mr-2"});case"warning":return Object(x.jsx)(d.f,{className:"text-md mr-2"});default:return null}}(),e.title]}),Object(x.jsxs)("p",{className:"text-xs  mb-3 opacity-60 flex items-center",children:[Object(x.jsx)(d.b,{className:"mr-1"}),e.date,Object(x.jsx)(d.i,{className:"mr-1 ml-2"}),e.author]}),Object(x.jsx)("p",{className:"",children:e.message})]},e.id)}))})},u=s(35),f=s(28),p=function(e){var t=Object(c.useState)(""),s=Object(i.a)(t,2),n=s[0],r=s[1],a=Object(c.useState)(""),l=Object(i.a)(a,2),o=l[0],m=l[1];return Object(x.jsxs)("div",{onClick:e.onClick,className:"h-screen w-screen top-0 left-0 fixed bg-black bg-opacity-90 z-20 flex items-center justify-center flex-col",children:[Object(x.jsxs)("div",{onClick:function(e){e.stopPropagation()},className:"relative bg-secondary py-7 px-8 rounded-md w-1/4 flex flex-col justify-center",children:[Object(x.jsxs)("p",{className:"text-3xl text-white mb-8 font-semibold flex items-center mx-auto",children:[Object(x.jsx)(d.h,{className:"mr-2"}),"Bejelentkez\xe9s"]}),Object(x.jsxs)("form",{action:"",className:"w-full",onSubmit:function(t){t.preventDefault(),Object(f.b)(e.auth,n,o).then((function(e){e.user})).catch((function(e){e.code,e.message}))},children:[Object(x.jsxs)("div",{className:"flex flex-col mb-3",children:[Object(x.jsxs)("p",{className:"text-white text-sm mb-1 font-semibold",children:["E-mail",Object(x.jsx)("span",{className:"text-red-500 font-semibold",children:"*"})]}),Object(x.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)},type:"email",className:"py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"})]}),Object(x.jsxs)("div",{className:"flex flex-col mb-5",children:[Object(x.jsxs)("p",{className:"text-white text-sm mb-1 font-semibold",children:["Jelsz\xf3",Object(x.jsx)("span",{className:"text-red-500 font-semibold",children:"*"})]}),Object(x.jsx)("input",{value:o,onChange:function(e){return m(e.target.value)},type:"password",className:"py-1 px-2 rounded-md bg-tertiary border hover:bg-quaternary text-white"})]}),Object(x.jsxs)("button",{className:"py-1 bg-white px-4 rounded-md w-full flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary",children:[Object(x.jsx)(d.g,{className:"mr-2"}),"Bejelentkez\xe9s"]}),Object(x.jsx)("p",{className:"text-white text-xs mt-3 underline cursor-pointer",children:"Elfelejtett jelsz\xf3"})]})]}),Object(x.jsxs)("p",{className:"text-white mt-2 text-sm flex items-center",children:[Object(x.jsx)(u.a,{className:"mr-1"}),"Powered by Firebase"]})]})},h=function(e){var t=Object(c.useState)(!1),s=Object(i.a)(t,2),n=s[0],r=s[1];return Object(x.jsxs)("div",{className:"fixed top-0 right-0 left-0 h-12 bg-tertiary w-screen flex items-center shadow-md ",children:[n?Object(x.jsx)("div",{onClick:function(){return r(!1)},className:"h-screen w-screen top-0 left-0 fixed flex z-40",children:Object(x.jsxs)("div",{onClick:function(e){e.stopPropagation()},className:"fixed top-14 right-0 mr-4 w-40 bg-tertiary flex flex-col rounded-md items-center text-white",children:[Object(x.jsx)("p",{className:"mt-2 py-1 hover:bg-quaternary w-full text-center",children:"Profilom"}),Object(x.jsx)("p",{className:"py-1 hover:bg-quaternary w-full text-center",children:"Be\xe1ll\xedt\xe1sok"}),Object(x.jsx)("p",{onClick:function(){Object(f.c)(e.auth),e.setLogin(!1),r(!1)},className:"mb-2 py-1 hover:bg-quaternary w-full text-center cursor-pointer",children:"Kijelentkez\xe9s"})]})}):"",Object(x.jsx)("div",{className:"fixed right-0 top-0 pr-4 pl-1",children:Object(x.jsxs)("div",{className:"flex items-center h-12",children:[e.user?Object(x.jsx)("div",{className:"flex items-center mr-3",children:Object(x.jsx)("p",{className:"text-xs text-white mr-2",children:e.user.email})}):"",e.user?n?Object(x.jsx)(d.c,{onClick:function(){return r(!n)},className:"text-white text-4xl py-1 px-2 bg-quaternary rounded-md"}):Object(x.jsx)(d.d,{onClick:function(){return r(!n)},className:"text-white text-4xl py-1 px-2 bg-quaternary rounded-md"}):Object(x.jsxs)("button",{onClick:function(){return e.setLogin(!0)},className:"bg-white py-1 px-4 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary",children:[Object(x.jsx)(d.g,{className:"mr-2"}),"Bejelentkez\xe9s"]})]})})]})},O=(s.p,s(47),s(49),s(36)),g=s(37),v=Object(g.a)({apiKey:"AIzaSyABvq9i9E4DngeMWTIoPlsnoBz3cjtv82s",authDomain:"limoverse-3085c.firebaseapp.com",projectId:"limoverse-3085c",storageBucket:"limoverse-3085c.appspot.com",messagingSenderId:"751192749715",appId:"1:751192749715:web:5815d4e7219ff068a57f66"});Object(j.c)(v,{experimentalForceLongPolling:!0});var y=Object(f.a)(v);var N=function(){var e=Object(O.a)(y),t=Object(i.a)(e,1)[0],s=Object(j.b)(v),n=Object(c.useState)(!1),r=Object(i.a)(n,2),a=r[0],l=r[1];return Object(x.jsxs)("div",{className:"bg-primary h-screen overflow-hidden select-none",children:[Object(x.jsx)(h,{user:t,setLogin:l,auth:y}),a?t?"":Object(x.jsx)(p,{onClick:function(){return l(!1)},auth:y}):"",Object(x.jsx)(b,{firestore:s,auth:y}),Object(x.jsx)("div",{className:"text-white fixed bottom-2 left-3 cursor-default bg-tertiary py-1 px-3 text-sm rounded-md",children:Object(x.jsx)("p",{className:"",children:"limoverse 2.0.0 dev"})})]})};a.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(N,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.bdba0c07.chunk.js.map