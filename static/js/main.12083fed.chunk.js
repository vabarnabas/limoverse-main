(this.webpackJsonplimoverse=this.webpackJsonplimoverse||[]).push([[0],{45:function(e,t,s){},46:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var c=s(12),n=s.n(c),a=s(36),r=s.n(a),l=(s(45),s(13)),i=(s(46),s(1)),o=s.n(i),m=s(3),b=s(15),x=s(17),j=s(7),d=function(e){var t=Object(c.useState)([]),s=Object(l.a)(t,2),n=s[0],a=s[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(m.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(b.g)(Object(b.a)(e.firestore,"announcements"),(function(e){a(e.docs.map((function(e){return e.data()})))}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(j.jsx)("div",{className:"bg-primary h-screen overflow-y-auto flex flex-col items-center text-white pt-16 pb-2",children:n.map((function(e){return Object(j.jsxs)("div",{className:"bg-secondary py-4 px-6 rounded my-4 w-4/5 sm:w-2/5",children:[Object(j.jsxs)("p",{className:"font-semibold text-2xl flex items-center mb-0",children:[function(){switch(e.type){case"announcement":return Object(j.jsx)(x.a,{className:"text-md mr-2"});case"update":return Object(j.jsx)(x.h,{className:"text-md mr-2"});case"warning":return Object(j.jsx)(x.i,{className:"text-md mr-2"});default:return null}}(),e.title]}),Object(j.jsxs)("p",{className:"text-xs  mb-3 opacity-60 flex items-center",children:[Object(j.jsx)(x.d,{className:"mr-1"}),e.date,Object(j.jsx)(x.n,{className:"mr-1 ml-2"}),e.author]}),Object(j.jsx)("p",{className:"",children:e.message})]},e.id)}))})},u=s(37),f=s(29),h=function(e){var t=Object(c.useState)(""),s=Object(l.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),o=i[0],m=i[1],b=Object(c.useState)(""),d=Object(l.a)(b,2),h=d[0],p=d[1];return Object(j.jsxs)("div",{onClick:e.onClick,className:"h-screen w-screen top-0 left-0 fixed bg-primary bg-opacity-90 z-20 flex items-center justify-center flex-col",children:[Object(j.jsxs)("div",{onClick:function(e){e.stopPropagation()},className:"relative bg-secondary py-7 px-8 rounded-md w-4/5 flex flex-col justify-center sm:w-1/4",children:[Object(j.jsx)("p",{className:"text-3xl text-white mb-8 font-semibold flex items-center mx-auto",children:"Bejelentkez\xe9s"}),Object(j.jsxs)("form",{action:"",className:"w-full",onSubmit:function(t){t.preventDefault(),Object(f.b)(e.auth,n,o).then((function(t){t.user;e.setPageState("Menu")})).catch((function(e){console.log(e.code),function(){switch(e.code){case"auth/invalid-email":return p("Hib\xe1s vagy ismeretlen e-mail c\xedm!");case"auth/internal-error":return p("Hib\xe1s vagy hi\xe1nyz\xf3 adatok!");case"auth/wrong-password":return p("Hib\xe1s jelsz\xf3!");case"auth/too-many-requests":return p("T\xfal sok pr\xf3b\xe1lkoz\xe1s");case"auth/user-not-found":return p("Ismeretlen felhaszn\xe1l\xf3!");default:p("")}}()}))},children:[Object(j.jsxs)("div",{className:"flex flex-col mb-3",children:[Object(j.jsxs)("p",{className:"text-white text-sm mb-1 font-semibold",children:["E-mail",Object(j.jsx)("span",{className:"text-red-500 font-semibold",children:"*"})]}),Object(j.jsx)("input",{value:n,onChange:function(e){return a(e.target.value)},type:"email",className:"py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"}),Object(j.jsx)("p",{className:"text-xs mt-1 text-red-500",children:h})]}),Object(j.jsxs)("div",{className:"flex flex-col mb-5",children:[Object(j.jsxs)("p",{className:"text-white text-sm mb-1 font-semibold",children:["Jelsz\xf3",Object(j.jsx)("span",{className:"text-red-500 font-semibold",children:"*"})]}),Object(j.jsx)("input",{value:o,onChange:function(e){return m(e.target.value)},type:"password",className:"py-1 px-2 rounded-md bg-tertiary border hover:bg-quaternary text-white"})]}),Object(j.jsxs)("button",{className:"mt-6 py-1 bg-white px-4 rounded-md w-full flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary",children:[Object(j.jsx)(x.j,{className:"mr-2"}),"Bejelentkez\xe9s"]})]})]}),Object(j.jsxs)("p",{className:"text-white mt-2 text-sm flex items-center",children:[Object(j.jsx)(u.a,{className:"mr-1"}),"Powered by Firebase"]})]})},p=s.p+"static/media/limoverse_logo.96d1c46b.svg",O=function(e){var t=Object(c.useState)(!1),s=Object(l.a)(t,2),n=s[0],a=s[1];return Object(j.jsxs)("div",{className:"fixed top-0 right-0 left-0 h-12 bg-tertiary w-screen flex items-center shadow-md z-20",children:[Object(j.jsx)("img",{onClick:function(){return e.setPageState("Menu")},src:p,alt:"",className:"fixed h-32 pl-4"}),n?Object(j.jsx)("div",{onClick:function(){return a(!1)},className:"h-screen w-screen top-0 left-0 fixed flex z-40",children:Object(j.jsxs)("div",{onClick:function(e){e.stopPropagation(),a(!1)},className:"fixed top-14 right-0 mr-4 bg-tertiary flex flex-col rounded-md items-center text-white shadow-md",children:[Object(j.jsx)("p",{onClick:function(){return e.setPageState("News")},className:"mt-2 px-16 py-1 hover:bg-quaternary w-full text-center",children:"H\xedrek"}),Object(j.jsx)("p",{onClick:function(){return e.setPageState("Hash")},className:"py-1 hover:bg-quaternary w-full text-center",children:"SHA256 Tilt\xf3lista"}),Object(j.jsx)("p",{className:"py-1 hover:bg-quaternary w-full text-center",children:"Be\xe1ll\xedt\xe1sok"}),Object(j.jsx)("p",{onClick:function(){Object(f.c)(e.auth),e.setPageState("News"),e.setLogin(!1),a(!1)},className:"mb-2 py-1 hover:bg-quaternary w-full text-center cursor-pointer",children:"Kijelentkez\xe9s"})]})}):"",Object(j.jsx)("div",{className:"fixed right-0 top-0 pr-4 pl-1",children:Object(j.jsxs)("div",{className:"flex items-center h-12",children:[e.user?Object(j.jsx)("div",{className:"flex items-center mr-3",children:Object(j.jsx)("p",{className:"text-xs text-white mr-2 sm:visible invisible",children:e.user.email})}):"",e.user?n?Object(j.jsx)(x.f,{onClick:function(){return a(!n)},className:"text-primary text-3xl py-1 px-2 bg-white hover:bg-gray-200 rounded-md"}):Object(j.jsx)(x.g,{onClick:function(){return a(!n)},className:"text-primary text-3xl py-1 px-2 bg-white hover:bg-gray-200 rounded-md"}):Object(j.jsxs)("button",{onClick:function(){return e.setLogin(!0)},className:"bg-white py-1 px-4 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary",children:[Object(j.jsx)(x.j,{className:"mr-2"}),"Bejelentkez\xe9s"]})]})})]})},g=s(53),y=function(e){var t=[{id:Object(g.a)(),title:"Damage Control",message:"439 h\xe1tral\xe9v\u0151",version:"0.0.1",pageState:"DCS"},{id:Object(g.a)(),title:"B\xedrs\xe1g Kezel\xe9s",message:"",version:"0.0.1",pageState:"Fine"},{id:Object(g.a)(),title:"T\xf6lt\xe9s, Tankol\xe1s",message:"24 ellen\u0151rizend\u0151",version:"0.0.1",pageState:"Charge"},{id:Object(g.a)(),title:"SHA256 Tilt\xf3lista",message:"",version:"0.0.1",pageState:"Hash"}],s=Object(c.useState)(0),n=Object(l.a)(s,2),a=n[0],r=n[1];return console.log(a),Object(j.jsxs)("div",{className:"relative flex items-center justify-center h-full flex-col sm:flex-row",children:[a>0&&Object(j.jsx)(x.b,{onClick:function(){a>0&&r(a-1)},className:"text-white hover:text-gray-200 absolute left-5 text-4xl"}),a<Math.ceil(t.length/(window.innerWidth>480?4:2))-1&&Object(j.jsx)(x.c,{onClick:function(){a<Math.ceil(t.length/(window.innerWidth>480?4:2))-1&&r(a+1)},className:"text-white hover:text-gray-200 absolute right-5 text-4xl"}),t.slice(window.innerWidth>480?0+4*a:0+2*a,window.innerWidth>480?4+4*a:2+2*a).map((function(t){return Object(j.jsxs)("div",{onClick:function(){return e.setPageState(t.pageState)},className:"min-w-min sm:mx-10 my-4 relative flex w-1/2 h-1/3 sm:w-56 sm:h-64 flex-col bg-tertiary hover:bg-quaternary text-white rounded-xl items-center justify-center flex-wrap",children:[Object(j.jsx)("p",{className:"px-4 font-semibold text-3xl text-center",children:t.title}),Object(j.jsx)("p",{className:"absolute  bottom-2 right-3 text-xs",children:t.version}),""!==t.message?Object(j.jsx)("div",{className:"absolute bg-red-400 left-3 top-3 rounded-md",children:Object(j.jsx)("p",{className:"text-white py-1 px-2 text-xs font-semibold",children:t.message})}):""]},t.id)}))]})},v=(s(49),s(52),s(38)),w=s(39),N=s(24),k=function(e){var t=Object(c.useState)(""),s=Object(l.a)(t,2),n=s[0],a=s[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),d=i[0],u=i[1],f=Object(c.useState)(""),h=Object(l.a)(f,2),p=h[0],O=h[1],y=Object(c.useState)(""),v=Object(l.a)(y,2),w=v[0],k=v[1],S=Object(c.useState)([]),z=Object(l.a)(S,2),C=z[0],q=z[1],P=Object(c.useState)([]),H=Object(l.a)(P,2),T=H[0],B=H[1],D=Object(c.useState)([]),I=Object(l.a)(D,2),E=I[0],M=I[1],J=Object(c.useState)(!1),A=Object(l.a)(J,2),K=A[0],L=A[1],W=Object(c.useState)(!1),F=Object(l.a)(W,2),G=F[0],_=F[1],Q=Object(c.useState)({email:"",phone:"",license:""}),V=Object(l.a)(Q,2),R=V[0],U=V[1],X=function(){var t=Object(m.a)(o.a.mark((function t(s){var c,r,l,i,m,x;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===n||""===d||""===p){t.next=26;break}if(s.preventDefault(),n===R.email){t.next=8;break}return c=Object(b.h)(Object(b.a)(e.firestore,"blacklist"),Object(b.j)("email","==",Object(N.sha256)(n)),Object(b.f)(5)),t.next=6,Object(b.c)(c);case 6:r=t.sent,q(r.docs.map((function(e){return e.data()})));case 8:if(d===R.phone){t.next=14;break}return l=Object(b.h)(Object(b.a)(e.firestore,"blacklist"),Object(b.j)("phone","==",Object(N.sha256)(d)),Object(b.f)(5)),t.next=12,Object(b.c)(l);case 12:i=t.sent,B(i.docs.map((function(e){return e.data()})));case 14:if(p===R.license){t.next=20;break}return m=Object(b.h)(Object(b.a)(e.firestore,"blacklist"),Object(b.j)("license","==",Object(N.sha256)(p)),Object(b.f)(5)),t.next=18,Object(b.c)(m);case 18:x=t.sent,M(x.docs.map((function(e){return e.data()})));case 20:(C.length>0||T.length>0||E.length>0)&&L(!0),U({email:n,phone:d,license:p}),a(""),u(""),O(""),k("");case 26:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Y=function(e){e.stopPropagation()};return Object(j.jsxs)("div",{className:"flex items-center justify-center h-screen",children:[K?Object(j.jsx)("div",{onClick:function(){return L(!1)},className:"fixed flex items-center justify-center h-screen w-screen top-0 right-0 bg-primary z-50 bg-opacity-90",children:Object(j.jsxs)("div",{onClick:Y,className:"text-white bg-secondary py-7 px-8 rounded-md w-4/5 flex items-center justify-center flex-col sm:w-1/4",children:[Object(j.jsx)("p",{className:"text-3xl mb-6 font-semibold flex items-center",children:"Tilt\xf3lista Keres\xe9s"}),C.length>0?Object(j.jsxs)("div",{className:"flex items-center justify-center flex-col",children:[Object(j.jsx)("p",{className:"text-lg font-semibold",children:"E-mail egyez\xe9sek:"}),Object(j.jsx)("p",{className:"text-sm bg-red-400 py-0.5 px-6 mt-0.5 rounded-md",children:C.length<5?C.length:"5+"})]}):"",T.length>0?Object(j.jsxs)("div",{className:"flex items-center justify-center flex-col mt-2",children:[Object(j.jsx)("p",{className:"text-lg font-semibold",children:"Telefon egyez\xe9sek:"}),Object(j.jsx)("p",{className:"text-sm bg-red-400 py-0.5 px-6 mt-0.5 rounded-md",children:T.length<5?T.length:"5+"})]}):"",E.length>0?Object(j.jsxs)("div",{className:"flex items-center justify-center flex-col mt-2",children:[Object(j.jsx)("p",{className:"text-lg font-semibold",children:"Jogos\xedtv\xe1ny egyez\xe9sek:"}),Object(j.jsx)("p",{className:"text-sm bg-red-400 py-0.5 px-6 mt-0.5 rounded-md",children:E.length<5?E.length:"5+"})]}):""]})}):"",G?Object(j.jsx)("div",{onClick:function(){return _(!1)},className:"fixed flex items-center justify-center h-screen w-screen top-0 right-0 bg-primary z-50 bg-opacity-90",children:Object(j.jsxs)("div",{onClick:Y,className:"text-white bg-secondary py-7 px-8 rounded-md w-4/5 flex items-center justify-center flex-col sm:w-1/4",children:[Object(j.jsx)("p",{className:"text-center text-3xl mb-6 font-semibold flex items-center",children:"Tilt\xf3lista Hozz\xe1ad\xe1s"}),Object(j.jsxs)("p",{className:"text-center text-xs flex flex-col items-center justify-center",children:[Object(j.jsx)(x.k,{className:"text-5xl mb-2"}),"Biztosan j\xf3 form\xe1tum\xfa adatokat adt\xe1l meg \xe9s azzal a c\xe9llal, hogy ezeket a tilt\xf3list\xe1hoz add?"]}),Object(j.jsxs)("div",{className:"mt-6 flex justify-center",children:[Object(j.jsxs)("button",{onClick:function(t){t.preventDefault(),Object(b.i)(Object(b.b)(e.firestore,"blacklist",Object(g.a)()),{email:Object(N.sha256)(n),phone:Object(N.sha256)(d),license:Object(N.sha256)(p),birthday:Object(N.sha256)(w),uID:e.user.uid}),a(""),u(""),O(""),k(""),_(!1)},className:"mx-4 py-1 bg-white px-5 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary ",children:[Object(j.jsx)(x.e,{className:"mr-2"}),"Igen"]}),Object(j.jsxs)("button",{onClick:function(){return _(!1)},className:"mx-4 py-1 bg-white px-5 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary ",children:[Object(j.jsx)(x.o,{className:"mr-2"}),"Nem"]})]})]})}):"",Object(j.jsxs)("div",{className:"mt-12 bg-secondary py-7 px-8 rounded-md w-4/5 flex items-center justify-center flex-col sm:w-2/5",children:[Object(j.jsx)("p",{className:"text-center text-3xl text-white mb-6 font-semibold flex items-center mx-auto",children:"SHA256 Tilt\xf3lista"}),Object(j.jsxs)("form",{action:"",className:"flex flex-wrap items-center justify-center w-full",onSubmit:function(e){e.preventDefault(),_(!0)},children:[Object(j.jsxs)("div",{className:"w-full flex flex-col mb-3 mx-3 sm:w-2/5",children:[Object(j.jsxs)("p",{className:"text-white text-sm mb-1 font-semibold",children:["E-mail c\xedm",Object(j.jsx)("span",{className:"text-red-500 font-semibold",children:"*"})]}),Object(j.jsx)("input",{required:!0,value:n,onChange:function(e){return a(e.target.value)},type:"text",className:"w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"})]}),Object(j.jsxs)("div",{className:"w-full flex flex-col mb-3 mx-3 sm:w-2/5",children:[Object(j.jsxs)("p",{className:"text-white text-sm mb-1 font-semibold",children:["Telefonsz\xe1m",Object(j.jsx)("span",{className:"text-red-500 font-semibold",children:"*"})]}),Object(j.jsx)("input",{required:!0,value:d,onChange:function(e){return u(e.target.value)},type:"tel",className:"w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"})]}),Object(j.jsxs)("div",{className:"w-full flex flex-col mb-3 mx-3 sm:w-2/5",children:[Object(j.jsxs)("p",{className:"text-white text-sm mb-1 font-semibold",children:["Jogos\xedtv\xe1ny sz\xe1m",Object(j.jsx)("span",{className:"text-red-500 font-semibold",children:"*"})]}),Object(j.jsx)("input",{required:!0,value:p,onChange:function(e){return O(e.target.value)},type:"text",className:"w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"})]}),Object(j.jsxs)("div",{className:"w-full flex flex-col mb-3 mx-3 sm:w-2/5",children:[Object(j.jsxs)("p",{className:"text-white text-sm mb-1 font-semibold",children:["Sz\xfclet\xe9si D\xe1tum",Object(j.jsx)("span",{className:"text-red-500 font-semibold",children:"*"})]}),Object(j.jsx)("input",{required:!0,value:w,onChange:function(e){return k(e.target.value)},type:"date",className:"w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"})]}),Object(j.jsxs)("div",{className:"flex items-center justify-center mt-2 sm:w-5/6 w-4/6",children:[Object(j.jsxs)("button",{className:"w-11/12 py-1 bg-white px-4 rounded-md  flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary ",children:[Object(j.jsx)(x.m,{className:"mr-2"}),"Gener\xe1l\xe1s"]}),Object(j.jsx)("button",{onClick:X,className:"ml-2 bg-white hover:bg-gray-200 rounded-md py-2 px-2 flex items-center justify-center",children:Object(j.jsx)(x.l,{className:"text-black"})})]}),Object(j.jsx)("p",{className:"text-white w-5/6 text-center text-xs mt-2",children:"A gener\xe1l\xe1s gombra kattintva, tilt\xf3list\xe1ra ker\xfclnek az \xe1ltalad be\xedrt adatok, \xedgy k\xe9rlek figyelmesen n\xe9zd \xe1t a form\xe1tumokat !"})]})]})]})},S=Object(w.a)({apiKey:"AIzaSyCBzNwEVcGmlxKbkwEQghiLfP1Jp_qo6No",authDomain:"limoverse-main.firebaseapp.com",projectId:"limoverse-main",storageBucket:"limoverse-main.appspot.com",messagingSenderId:"567564750931",appId:"1:567564750931:web:ad97934e0cd98a70bd76a6"});Object(b.e)(S,{experimentalForceLongPolling:!0});var z=Object(f.a)(S);var C=function(){var e=Object(v.a)(z),t=Object(l.a)(e,1)[0],s=Object(b.d)(S),n=Object(c.useState)(!1),a=Object(l.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)("Menu"),m=Object(l.a)(o,2),x=m[0],u=m[1];return Object(j.jsxs)("div",{className:"bg-primary h-screen overflow-hidden select-none",children:[Object(j.jsx)(O,{user:t,setLogin:function(e){return i(e)},setPageState:function(e){return u(e)},auth:z}),r?t?"":Object(j.jsx)(h,{onClick:function(){return i(!1)},auth:z}):"",t?function(){switch(x){case"News":return Object(j.jsx)(d,{firestore:s,auth:z});case"Hash":return Object(j.jsx)(k,{firestore:s,auth:z,user:t});case"Menu":return Object(j.jsx)(y,{setPageState:function(e){return u(e)}});default:return null}}():"",Object(j.jsx)("div",{className:"text-white fixed bottom-2 left-3 cursor-default bg-tertiary py-1 px-3 text-sm rounded-md",children:Object(j.jsx)("p",{className:"",children:"limoverse 2.0.0 dev"})})]})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.12083fed.chunk.js.map