(this.webpackJsonplimoverse=this.webpackJsonplimoverse||[]).push([[0],{45:function(e,t,s){},46:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var c=s(12),a=s.n(c),r=s(36),n=s.n(r),l=(s(45),s(13)),i=(s(46),s(1)),o=s.n(i),m=s(3),b=s(22),x=s(17),u=s(8),d=function(e){var t=Object(c.useState)([]),s=Object(l.a)(t,2),a=s[0],r=s[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(m.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(b.e)(Object(b.a)(e.firestore,"announcements"),(function(e){r(e.docs.map((function(e){return e.data()})))}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(u.jsx)("div",{className:"bg-primary h-screen overflow-y-auto flex flex-col items-center text-white pt-16 pb-2",children:a.map((function(e){return Object(u.jsxs)("div",{className:"bg-secondary py-4 px-6 rounded my-4 w-4/5 sm:w-2/5",children:[Object(u.jsxs)("p",{className:"font-semibold text-2xl flex items-center mb-0",children:[function(){switch(e.type){case"announcement":return Object(u.jsx)(x.a,{className:"text-md mr-2"});case"update":return Object(u.jsx)(x.g,{className:"text-md mr-2"});case"warning":return Object(u.jsx)(x.h,{className:"text-md mr-2"});default:return null}}(),e.title]}),Object(u.jsxs)("p",{className:"text-xs  mb-3 opacity-60 flex items-center",children:[Object(u.jsx)(x.d,{className:"mr-1"}),e.date,Object(u.jsx)(x.k,{className:"mr-1 ml-2"}),e.author]}),Object(u.jsx)("p",{className:"",children:e.message})]},e.id)}))})},j=s(37),f=s(28),h=function(e){var t=Object(c.useState)(""),s=Object(l.a)(t,2),a=s[0],r=s[1],n=Object(c.useState)(""),i=Object(l.a)(n,2),o=i[0],m=i[1],b=Object(c.useState)(""),d=Object(l.a)(b,2),h=d[0],p=d[1];return Object(u.jsxs)("div",{onClick:e.onClick,className:"h-screen w-screen top-0 left-0 fixed bg-black bg-opacity-90 z-20 flex items-center justify-center flex-col",children:[Object(u.jsxs)("div",{onClick:function(e){e.stopPropagation()},className:"relative bg-secondary py-7 px-8 rounded-md w-4/5 flex flex-col justify-center sm:w-1/4",children:[Object(u.jsx)("p",{className:"text-3xl text-white mb-8 font-semibold flex items-center mx-auto",children:"Bejelentkez\xe9s"}),Object(u.jsxs)("form",{action:"",className:"w-full",onSubmit:function(t){t.preventDefault(),Object(f.b)(e.auth,a,o).then((function(e){e.user})).catch((function(e){console.log(e.code),function(){switch(e.code){case"auth/invalid-email":return p("Hib\xe1s vagy ismeretlen e-mail c\xedm!");case"auth/internal-error":return p("Hib\xe1s vagy hi\xe1nyz\xf3 adatok!");case"auth/wrong-password":return p("Hib\xe1s jelsz\xf3!");case"auth/too-many-requests":return p("T\xfal sok pr\xf3b\xe1lkoz\xe1s");case"auth/user-not-found":return p("Ismeretlen felhaszn\xe1l\xf3!");default:p("")}}()}))},children:[Object(u.jsxs)("div",{className:"flex flex-col mb-3",children:[Object(u.jsxs)("p",{className:"text-white text-sm mb-1 font-semibold",children:["E-mail",Object(u.jsx)("span",{className:"text-red-500 font-semibold",children:"*"})]}),Object(u.jsx)("input",{value:a,onChange:function(e){return r(e.target.value)},type:"email",className:"py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"}),Object(u.jsx)("p",{className:"text-xs mt-1 text-red-500",children:h})]}),Object(u.jsxs)("div",{className:"flex flex-col mb-5",children:[Object(u.jsxs)("p",{className:"text-white text-sm mb-1 font-semibold",children:["Jelsz\xf3",Object(u.jsx)("span",{className:"text-red-500 font-semibold",children:"*"})]}),Object(u.jsx)("input",{value:o,onChange:function(e){return m(e.target.value)},type:"password",className:"py-1 px-2 rounded-md bg-tertiary border hover:bg-quaternary text-white"})]}),Object(u.jsxs)("button",{className:"mt-6 py-1 bg-white px-4 rounded-md w-full flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary",children:[Object(u.jsx)(x.i,{className:"mr-2"}),"Bejelentkez\xe9s"]})]})]}),Object(u.jsxs)("p",{className:"text-white mt-2 text-sm flex items-center",children:[Object(u.jsx)(j.a,{className:"mr-1"}),"Powered by Firebase"]})]})},p=s.p+"static/media/limoverse_logo.96d1c46b.svg",O=function(e){var t=Object(c.useState)(!1),s=Object(l.a)(t,2),a=s[0],r=s[1];return Object(u.jsxs)("div",{className:"fixed top-0 right-0 left-0 h-12 bg-tertiary w-screen flex items-center shadow-md z-20",children:[Object(u.jsx)("img",{onClick:function(){return e.setPageState("Menu")},src:p,alt:"",className:"fixed h-32 pl-4"}),a?Object(u.jsx)("div",{onClick:function(){return r(!1)},className:"h-screen w-screen top-0 left-0 fixed flex z-40",children:Object(u.jsxs)("div",{onClick:function(e){e.stopPropagation(),r(!1)},className:"fixed top-14 right-0 mr-4 w-40 bg-tertiary flex flex-col rounded-md items-center text-white shadow-md",children:[Object(u.jsx)("p",{onClick:function(){return e.setPageState("News")},className:"mt-2 py-1 hover:bg-quaternary w-full text-center",children:"H\xedrek"}),Object(u.jsx)("p",{onClick:function(){return e.setPageState("Hash")},className:"py-1 hover:bg-quaternary w-full text-center",children:"SHA256 Tilt\xf3lista"}),Object(u.jsx)("p",{className:"py-1 hover:bg-quaternary w-full text-center",children:"Be\xe1ll\xedt\xe1sok"}),Object(u.jsx)("p",{onClick:function(){Object(f.c)(e.auth),e.setPageState("News"),e.setLogin(!1),r(!1)},className:"mb-2 py-1 hover:bg-quaternary w-full text-center cursor-pointer",children:"Kijelentkez\xe9s"})]})}):"",Object(u.jsx)("div",{className:"fixed right-0 top-0 pr-4 pl-1",children:Object(u.jsxs)("div",{className:"flex items-center h-12",children:[e.user?Object(u.jsx)("div",{className:"flex items-center mr-3",children:Object(u.jsx)("p",{className:"text-xs text-white mr-2 sm:visible invisible",children:e.user.email})}):"",e.user?a?Object(u.jsx)(x.e,{onClick:function(){return r(!a)},className:"text-primary text-3xl py-1 px-2 bg-white hover:bg-gray-200 rounded-md"}):Object(u.jsx)(x.f,{onClick:function(){return r(!a)},className:"text-primary text-3xl py-1 px-2 bg-white hover:bg-gray-200 rounded-md"}):Object(u.jsxs)("button",{onClick:function(){return e.setLogin(!0)},className:"bg-white py-1 px-4 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary",children:[Object(u.jsx)(x.i,{className:"mr-2"}),"Bejelentkez\xe9s"]})]})})]})},g=s(53),v=function(e){var t=[{id:Object(g.a)(),title:"Damage Control",version:"0.0.1",pageState:"DCS"},{id:Object(g.a)(),title:"B\xedrs\xe1g Kezel\xe9s",version:"0.0.1",pageState:"Fine"},{id:Object(g.a)(),title:"T\xf6lt\xe9s, Tankol\xe1s",version:"0.0.1",pageState:"Charge"},{id:Object(g.a)(),title:"SHA256 Tilt\xf3lista",version:"0.0.1",pageState:"Hash"}],s=Object(c.useState)(0),a=Object(l.a)(s,2),r=a[0],n=a[1];return console.log(r),Object(u.jsxs)("div",{className:"relative flex items-center justify-center h-full flex-col sm:flex-row",children:[r>0&&Object(u.jsx)(x.b,{onClick:function(){r>0&&n(r-1)},className:"text-white hover:text-gray-200 absolute left-5 text-4xl sm:invisible"}),r<Math.ceil(t.length/2)-1&&Object(u.jsx)(x.c,{onClick:function(){r<Math.ceil(t.length/2)-1&&n(r+1)},className:"text-white hover:text-gray-200 absolute right-5 text-4xl sm:invisible"}),t.slice(window.innerWidth>480?0:0+2*r,window.innerWidth>480?t.length:2+2*r).map((function(t){return Object(u.jsxs)("div",{onClick:function(){return e.setPageState(t.pageState)},className:"min-w-min sm:mx-10 my-4 relative flex w-1/2 h-1/3 sm:w-56 sm:h-64 flex-col bg-tertiary hover:bg-quaternary text-white rounded-xl items-center justify-center flex-wrap",children:[Object(u.jsx)("p",{className:"px-4 font-semibold text-3xl text-center",children:t.title}),Object(u.jsx)("p",{className:"absolute right-3 bottom-2 text-xs",children:t.version})]},t.id)}))]})},w=(s(49),s(52),s(38)),y=s(39),N=s(30),k=function(e){var t=Object(c.useState)(""),s=Object(l.a)(t,2),a=s[0],r=s[1],n=Object(c.useState)(""),i=Object(l.a)(n,2),o=i[0],m=i[1],d=Object(c.useState)(""),j=Object(l.a)(d,2),f=j[0],h=j[1],p=Object(c.useState)(""),O=Object(l.a)(p,2),v=O[0],w=O[1];return Object(u.jsx)("div",{className:"flex items-center justify-center h-screen",children:Object(u.jsxs)("div",{className:"bg-secondary py-7 px-8 rounded-md w-4/5 flex items center justify-center flex-col sm:w-2/5",children:[Object(u.jsx)("p",{className:"text-center text-3xl text-white mb-6 font-semibold flex items-center mx-auto",children:"SHA256 Tilt\xf3lista"}),Object(u.jsxs)("form",{action:"",className:"flex flex-wrap items-center justify-center w-full",onSubmit:function(t){t.preventDefault(),Object(b.f)(Object(b.b)(e.firestore,"blacklist",Object(g.a)()),{email:Object(N.sha256)(a),phone:Object(N.sha256)(o),license:Object(N.sha256)(f),birthday:Object(N.sha256)(v),uID:e.user.uid}),r(""),m(""),h(""),w("")},children:[Object(u.jsxs)("div",{className:"w-full flex flex-col mb-3 mx-3 sm:w-2/5",children:[Object(u.jsxs)("p",{className:"text-white text-sm mb-1 font-semibold",children:["E-mail c\xedm",Object(u.jsx)("span",{className:"text-red-500 font-semibold",children:"*"})]}),Object(u.jsx)("input",{required:!0,value:a,onChange:function(e){return r(e.target.value)},type:"text",className:"w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"})]}),Object(u.jsxs)("div",{className:"w-full flex flex-col mb-3 mx-3 sm:w-2/5",children:[Object(u.jsxs)("p",{className:"text-white text-sm mb-1 font-semibold",children:["Telefonsz\xe1m",Object(u.jsx)("span",{className:"text-red-500 font-semibold",children:"*"})]}),Object(u.jsx)("input",{required:!0,value:o,onChange:function(e){return m(e.target.value)},type:"tel",className:"w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"})]}),Object(u.jsxs)("div",{className:"w-full flex flex-col mb-3 mx-3 sm:w-2/5",children:[Object(u.jsxs)("p",{className:"text-white text-sm mb-1 font-semibold",children:["Jogos\xedtv\xe1ny sz\xe1m",Object(u.jsx)("span",{className:"text-red-500 font-semibold",children:"*"})]}),Object(u.jsx)("input",{required:!0,value:f,onChange:function(e){return h(e.target.value)},type:"text",className:"w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"})]}),Object(u.jsxs)("div",{className:"w-full flex flex-col mb-3 mx-3 sm:w-2/5",children:[Object(u.jsxs)("p",{className:"text-white text-sm mb-1 font-semibold",children:["Sz\xfclet\xe9si D\xe1tum",Object(u.jsx)("span",{className:"text-red-500 font-semibold",children:"*"})]}),Object(u.jsx)("input",{required:!0,value:v,onChange:function(e){return w(e.target.value)},type:"date",className:"w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"})]}),Object(u.jsxs)("button",{className:"mt-2 py-1 bg-white px-4 rounded-md w-4/6 flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary sm:w-5/6",children:[Object(u.jsx)(x.j,{className:"mr-2"}),"Gener\xe1l\xe1s"]}),Object(u.jsx)("p",{className:"text-white w-5/6 text-center text-xs mt-2",children:"A gener\xe1l\xe1s gombra kattintva, tilt\xf3list\xe1ra ker\xfclnek az \xe1ltalad be\xedrt adatok, \xedgy k\xe9rlek figyelmesen n\xe9zd \xe1t a form\xe1tumokat !"})]})]})})},S=Object(y.a)({apiKey:"AIzaSyCBzNwEVcGmlxKbkwEQghiLfP1Jp_qo6No",authDomain:"limoverse-main.firebaseapp.com",projectId:"limoverse-main",storageBucket:"limoverse-main.appspot.com",messagingSenderId:"567564750931",appId:"1:567564750931:web:ad97934e0cd98a70bd76a6"});Object(b.d)(S,{experimentalForceLongPolling:!0});var C=Object(f.a)(S);var z=function(){var e=Object(w.a)(C),t=Object(l.a)(e,1)[0],s=Object(b.c)(S),a=Object(c.useState)(!1),r=Object(l.a)(a,2),n=r[0],i=r[1],o=Object(c.useState)("Menu"),m=Object(l.a)(o,2),x=m[0],j=m[1];return Object(u.jsxs)("div",{className:"bg-primary h-screen overflow-hidden select-none",children:[Object(u.jsx)(O,{user:t,setLogin:function(e){return i(e)},setPageState:function(e){return j(e)},auth:C}),n?t?"":Object(u.jsx)(h,{onClick:function(){return i(!1)},auth:C}):"",function(){switch(x){case"News":return Object(u.jsx)(d,{firestore:s,auth:C});case"Hash":return Object(u.jsx)(k,{firestore:s,auth:C,user:t});case"Menu":return Object(u.jsx)(v,{setPageState:function(e){return j(e)}});default:return null}}(),Object(u.jsx)("div",{className:"text-white fixed bottom-2 left-3 cursor-default bg-tertiary py-1 px-3 text-sm rounded-md",children:Object(u.jsx)("p",{className:"",children:"limoverse 2.0.0 dev"})})]})};n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.390c4c52.chunk.js.map