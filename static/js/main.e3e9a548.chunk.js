(this["webpackJsonpathlete-mgmt"]=this["webpackJsonpathlete-mgmt"]||[]).push([[0],{113:function(e,t,n){},159:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(115),i=n.n(s),r=(n(159),n.p+"static/media/pi_runner_logo.5c8f973f.png"),l=n.p+"static/media/t-shirt.771fb6b6.jpeg",j=(n(113),n(38)),o=n(14),b=n(5),d=n.p+"static/media/FM pic1.d1092062.jpg",h=n.p+"static/media/cricket team.20960958.jpg",u=n.p+"static/media/ST.696a0626.jpeg",O=(n(160),n(1)),x=function(){var e=a.a.useState(!0),t=Object(b.a)(e,2),n=(t[0],t[1],[d,h,u]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Welcome to the Pi Runner site"})}),Object(O.jsx)("div",{children:n.map((function(e){return Object(O.jsx)("img",{src:e,className:"home-images",alt:"logo"})}))})]})},g=n(17),m=n(22),p=n(249),f=n(260),v=n(252),N=n(256),k=n(250),A=n(254),y=n(259),C=n(245),E=function(){var e=Object(c.useState)(),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(),i=Object(b.a)(s,2),r=i[0],l=i[1],j=Object(c.useState)(),o=Object(b.a)(j,2),d=o[0],h=o[1],u=Object(c.useState)(),x=Object(b.a)(u,2),E=x[0],w=x[1],R={id:n,username:r,email:d,role:E},S=function(){var e=Object(m.a)(Object(g.a)().mark((function e(){var t,n;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:({Accept:"application/json","Content-Type":"application/json"}),t=p.a.post("https://kpirunnersapi.azurewebsites.net/api/UserRegistration?code=ZHVazmf8T8qYw2s5-pKipZQot76giBqaM7NxCRIMBkVKAzFuguAEEg==",R).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)})),n=t.data,alert("user created successfully..."+n);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"centerWithoutBorder",children:[Object(O.jsx)("h2",{style:{alignContent:"center"},children:"AddUser"}),Object(O.jsxs)(f.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"50ch"}},noValidate:!0,autoComplete:"off",children:[Object(O.jsx)(v.a,{id:"userId",label:"User Id",variant:"outlined",onChange:function(e){return a(e.target.value)}}),Object(O.jsx)(v.a,{id:"userName",label:"User Name",variant:"outlined",onChange:function(e){return l(e.target.value)}}),Object(O.jsx)(v.a,{id:"email",label:"User Email",variant:"outlined",onChange:function(e){return h(e.target.value)}}),Object(O.jsx)(N.a,{id:"role",children:"Select Role"}),Object(O.jsxs)(k.a,{labelId:"demo-simple-select-label",id:"role",label:"Age",onChange:function(e){return w(e.target.value)},children:[Object(O.jsx)(A.a,{value:"USER",children:"USER"}),Object(O.jsx)(A.a,{value:"ADMIN",children:"ADMIN"}),Object(O.jsx)(A.a,{value:"READ_ONLY",children:"READ ONLY"})]}),Object(O.jsx)(y.a,{variant:"contained",endIcon:Object(O.jsx)(C.a,{}),onClick:function(){r.length&&d.length&&(console.log("registering user"),console.log(R),S())},children:"Send"})]})]}),Object(O.jsx)("br",{})]})},w=(n(31),n(121)),R=n(247),S=n(246),U=n(265),I=n(266),F=n(267),L=n(268),z=n(269),B=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],s=function(){var e=Object(m.a)(Object(g.a)().mark((function e(){var t,n;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://kpirunnersapi.azurewebsites.net/api/UserRegistration?code=ZHVazmf8T8qYw2s5-pKipZQot76giBqaM7NxCRIMBkVKAzFuguAEEg==&entity=events");case 2:t=e.sent,n=t.data,a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{style:{alignContent:"center"},children:"Events"}),Object(O.jsx)("div",{className:"table-div",children:Object(O.jsxs)(U.a,{children:[Object(O.jsx)(I.a,{children:Object(O.jsxs)(F.a,{children:[Object(O.jsx)(L.a,{style:{fontWeight:"bold"},children:"Event Name"}),Object(O.jsx)(L.a,{style:{fontWeight:"bold"},children:"Event Data"}),Object(O.jsx)(L.a,{style:{fontWeight:"bold"},children:"Registation Link"})]})}),Object(O.jsx)(z.a,{children:n.map((function(e){return Object(O.jsxs)(F.a,{id:e.eventName,children:[Object(O.jsx)(L.a,{children:e.eventName}),Object(O.jsx)(L.a,{children:e.eventDate}),Object(O.jsx)(j.b,{className:"App-link",to:e.regLink,children:"Registration Link"})]})}))})]})})]})})},M=function(){var e=Object(c.useState)(),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(),i=Object(b.a)(s,2),r=i[0],l=i[1],j=Object(c.useState)(),o=Object(b.a)(j,2),d=o[0],h=o[1],u=Object(c.useState)(0),x=Object(b.a)(u,2),N=x[0],k=x[1],A={eventName:n,eventDate:r,regLink:d},E=function(){var e=Object(m.a)(Object(g.a)().mark((function e(){var t;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:({Accept:"application/json","Content-Type":"application/json"}),t=p.a.post("https://kpirunnersapi.azurewebsites.net/api/UserRegistration?code=ZHVazmf8T8qYw2s5-pKipZQot76giBqaM7NxCRIMBkVKAzFuguAEEg==&entity=events",A).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)})),t.data,alert("Event created successfully..."),k(N+1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:Object(O.jsxs)(f.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(O.jsx)(v.a,{id:"eventName",label:"Event Name",variant:"standard",onChange:function(e){return a(e.target.value)}}),Object(O.jsx)(w.a,{dateAdapter:S.a,children:Object(O.jsx)(R.a,{id:"eventDate",label:"Event Date",value:r,onChange:function(e){return l(e)}})}),Object(O.jsx)(v.a,{id:"regLink",label:"Registration Link",variant:"standard",onChange:function(e){return h(e.target.value)}}),Object(O.jsx)(y.a,{variant:"contained",endIcon:Object(O.jsx)(C.a,{}),onClick:function(){n.length&&E()},children:"Send"})]})}),Object(O.jsx)("br",{}),Object(O.jsx)(B,{},N)]})},D=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],s=function(){var e=Object(m.a)(Object(g.a)().mark((function e(){var t,n;return Object(g.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://kpirunnersapi.azurewebsites.net/api/UserRegistration?code=ZHVazmf8T8qYw2s5-pKipZQot76giBqaM7NxCRIMBkVKAzFuguAEEg==&entity=users");case 2:t=e.sent,n=t.data,a(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"center",children:[Object(O.jsx)("h3",{style:{alignContent:"center"},children:"UserList"}),Object(O.jsxs)(U.a,{children:[Object(O.jsx)(I.a,{children:Object(O.jsxs)(F.a,{children:[Object(O.jsx)(L.a,{style:{fontWeight:"bold"},children:"User Id"}),Object(O.jsx)(L.a,{style:{fontWeight:"bold"},children:"User Name"}),Object(O.jsx)(L.a,{style:{fontWeight:"bold"},children:"Email"}),Object(O.jsx)(L.a,{style:{fontWeight:"bold"},children:"Role"}),Object(O.jsx)(L.a,{style:{fontWeight:"bold"},children:"Action"})]})}),Object(O.jsx)(z.a,{children:n.map((function(e){return Object(O.jsxs)(F.a,{id:e.id,children:[Object(O.jsx)(L.a,{children:e.id}),Object(O.jsx)(L.a,{children:e.username}),Object(O.jsx)(L.a,{children:e.email}),Object(O.jsx)(L.a,{children:e.role}),Object(O.jsx)(L.a,{children:Object(O.jsx)(j.b,{className:"App-link",to:"/editUser/"+e.id,children:"Edit User"})})]})}))})]})]})})},T=n.p+"static/media/bansal_shiva.bdc0b28c.jfif",V=n.p+"static/media/piRunnersFamily.6f8db0ec.jpg",W=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"About"}),Object(O.jsx)("div",{children:Object(O.jsxs)(U.a,{className:"Table-Center",children:[Object(O.jsx)(I.a,{}),Object(O.jsxs)(z.a,{children:[Object(O.jsx)(L.a,{children:"Shiva Bansal"}),Object(O.jsx)(L.a,{children:Object(O.jsx)("img",{src:T,className:"additional-logo",alt:"logo"})})]}),Object(O.jsxs)(z.a,{children:[Object(O.jsx)(L.a,{children:"Yatin Ghanwat"}),Object(O.jsx)(L.a,{children:Object(O.jsx)("img",{src:V,className:"additional-logo",alt:"logo"})})]})]})})]})},q=n(33);function K(){return Object(O.jsxs)(q.c,{className:"bg-dark text-center text-white",children:[Object(O.jsx)(q.b,{className:"p-4 pb-0",children:Object(O.jsxs)("section",{className:"mb-4",children:[Object(O.jsx)(q.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"#!",role:"button",children:Object(O.jsx)(q.d,{fab:!0,icon:"facebook-f"})}),Object(O.jsx)(q.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"#!",role:"button",children:Object(O.jsx)(q.d,{fab:!0,icon:"twitter"})}),Object(O.jsx)(q.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"#!",role:"button",children:Object(O.jsx)(q.d,{fab:!0,icon:"google"})}),Object(O.jsx)(q.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"#!",role:"button",children:Object(O.jsx)(q.d,{fab:!0,icon:"instagram"})}),Object(O.jsx)(q.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"#!",role:"button",children:Object(O.jsx)(q.d,{fab:!0,icon:"linkedin-in"})}),Object(O.jsx)(q.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"#!",role:"button",children:Object(O.jsx)(q.d,{fab:!0,icon:"github"})})]})}),Object(O.jsxs)("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["\xa9 2020 Copyright:",Object(O.jsx)("a",{className:"text-white",href:"https://mdbootstrap.com/",children:"pirunners.com"})]})]})}var Z=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"List of Athletes"}),Object(O.jsx)(D,{})]})};var Y=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("div",{className:"App-logo-left",children:Object(O.jsx)("img",{src:l,className:"additional-logo",alt:"logo"})}),Object(O.jsx)("h1",{children:"\u03c0 Runners Club Run For Life"}),Object(O.jsx)("div",{className:"App-logo-right",children:Object(O.jsx)("img",{src:r,className:"App-logo",alt:"logo"})})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("nav",{children:[Object(O.jsx)(j.b,{to:"/",className:"nav-item",children:"Homepage"}),Object(O.jsx)(j.b,{to:"/register",className:"nav-item",children:"Register"}),Object(O.jsx)(j.b,{to:"/events",className:"nav-item",children:"Events"}),Object(O.jsx)(j.b,{to:"/athletes",className:"nav-item",children:"Athletes"}),Object(O.jsx)(j.b,{to:"/about",className:"nav-item",children:"About"})]}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/",element:Object(O.jsx)(x,{})}),Object(O.jsx)(o.a,{path:"/register",element:Object(O.jsx)(E,{})}),Object(O.jsx)(o.a,{path:"/events",element:Object(O.jsx)(M,{})}),Object(O.jsx)(o.a,{path:"/athletes",element:Object(O.jsx)(Z,{})}),Object(O.jsx)(o.a,{path:"/about",element:Object(O.jsx)(W,{})})]})]}),Object(O.jsx)(K,{})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,271)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(j.a,{children:Object(O.jsx)(Y,{})})})),H()}},[[171,1,2]]]);
//# sourceMappingURL=main.e3e9a548.chunk.js.map