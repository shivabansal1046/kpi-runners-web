(this["webpackJsonpathlete-mgmt"]=this["webpackJsonpathlete-mgmt"]||[]).push([[0],{113:function(e,t,n){},159:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(115),i=n.n(s),r=(n(159),n(5)),l=n.p+"static/media/pi_runner_logo.5c8f973f.png",o=n.p+"static/media/t-shirt.771fb6b6.jpeg",j=(n(113),n(31)),d=n(14),b=n(260),h=n(246),u=n.p+"static/media/FM pic1.d1092062.jpg",O=n.p+"static/media/cricket team.20960958.jpg",g=n.p+"static/media/ST.696a0626.jpeg",x=(n(160),n(1)),m=function(){var e=[u,O,g],t=c.a.useState(window.innerWidth),n=Object(r.a)(t,2),a=(n[0],n[1]),s=c.a.useState(window.innerHeight),i=Object(r.a)(s,2),l=(i[0],i[1]);c.a.useEffect((function(){return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}}));var o=function(){a(window.innerWidth),l(window.innerHeight)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{children:Object(x.jsx)("h1",{children:"Welcome to the Pi Runner site"})}),Object(x.jsx)("div",{children:e.map((function(e){return Object(x.jsx)("img",{src:e,className:"home-images",alt:"logo"})}))})]})},f=n(17),p=n(22),v=n(250),N=n(261),w=n(253),y=n(257),A=n(251),k=n(255),S=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(),i=Object(r.a)(s,2),l=i[0],o=i[1],j=Object(a.useState)(),d=Object(r.a)(j,2),u=d[0],O=d[1],g=Object(a.useState)(),m=Object(r.a)(g,2),S=m[0],C=m[1],E={id:n,username:l,email:u,role:S},I=function(){var e=Object(p.a)(Object(f.a)().mark((function e(){var t,n;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=v.a.post("https://kpirunnersapi.azurewebsites.net/api/UserRegistration?code=ZHVazmf8T8qYw2s5-pKipZQot76giBqaM7NxCRIMBkVKAzFuguAEEg==",E).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)})),n=t.data,alert("user created successfully..."+n);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"centerWithoutBorder",children:[Object(x.jsx)("h2",{style:{alignContent:"center"},children:"AddUser"}),Object(x.jsxs)(N.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"50ch"}},noValidate:!0,autoComplete:"off",children:[Object(x.jsx)(w.a,{id:"userId",label:"User Id",variant:"outlined",onChange:function(e){return c(e.target.value)}}),Object(x.jsx)(w.a,{id:"userName",label:"User Name",variant:"outlined",onChange:function(e){return o(e.target.value)}}),Object(x.jsx)(w.a,{id:"email",label:"User Email",variant:"outlined",onChange:function(e){return O(e.target.value)}}),Object(x.jsx)(y.a,{id:"role",children:"Select Role"}),Object(x.jsxs)(A.a,{labelId:"demo-simple-select-label",id:"role",label:"Age",onChange:function(e){return C(e.target.value)},children:[Object(x.jsx)(k.a,{value:"USER",children:"USER"}),Object(x.jsx)(k.a,{value:"ADMIN",children:"ADMIN"}),Object(x.jsx)(k.a,{value:"READ_ONLY",children:"READ ONLY"})]}),Object(x.jsx)(b.a,{variant:"contained",endIcon:Object(x.jsx)(h.a,{}),onClick:function(){l.length&&u.length&&(console.log("registering user"),console.log(E),I())},children:"Send"})]})]}),Object(x.jsx)("br",{})]})},C=n(121),E=n(248),I=n(247),R=n(15),M=n(266),L=n(267),U=n(268),W=n(269),z=n(270),B=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=function(){var e=Object(p.a)(Object(f.a)().mark((function e(){var t,n,a;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://kpirunnersapi.azurewebsites.net/api/UserRegistration?code=ZHVazmf8T8qYw2s5-pKipZQot76giBqaM7NxCRIMBkVKAzFuguAEEg==&entity=events");case 2:t=e.sent,n=t.data,a=Object(R.a)(n).sort((function(e,t){return e.eventDate>t.eventDate?1:-1})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{style:{alignContent:"center"},children:"Events"}),Object(x.jsx)("div",{className:"table-div",children:Object(x.jsxs)(M.a,{children:[Object(x.jsx)(L.a,{children:Object(x.jsxs)(U.a,{children:[Object(x.jsx)(W.a,{style:{fontWeight:"bold"},children:"Event Name"}),Object(x.jsx)(W.a,{style:{fontWeight:"bold"},children:"Event Date"}),Object(x.jsx)(W.a,{style:{fontWeight:"bold"},children:"Registation Link"})]})}),Object(x.jsx)(z.a,{children:n.map((function(e){return Object(x.jsxs)(U.a,{id:e.eventName,children:[Object(x.jsx)(W.a,{children:e.eventName}),Object(x.jsx)(W.a,{children:e.eventDate}),Object(x.jsx)(j.b,{className:"App-link",to:e.regLink,children:"Registration Link"})]})}))})]})})]})})},D=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(),i=Object(r.a)(s,2),l=i[0],o=i[1],j=Object(a.useState)(),d=Object(r.a)(j,2),u=d[0],O=d[1],g=Object(a.useState)(0),m=Object(r.a)(g,2),y=m[0],A=m[1],k={eventName:n,eventDate:l,regLink:u},S=function(){var e=Object(p.a)(Object(f.a)().mark((function e(){return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.a.post("https://kpirunnersapi.azurewebsites.net/api/UserRegistration?code=ZHVazmf8T8qYw2s5-pKipZQot76giBqaM7NxCRIMBkVKAzFuguAEEg==&entity=events",k).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)})),alert("Event created successfully..."),A(y+1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:Object(x.jsxs)(N.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(x.jsx)(w.a,{id:"eventName",label:"Event Name",variant:"standard",onChange:function(e){return c(e.target.value)}}),Object(x.jsx)(C.a,{dateAdapter:I.a,children:Object(x.jsx)(E.a,{id:"eventDate",label:"Event Date",value:l,onChange:function(e){return o(e)}})}),Object(x.jsx)(w.a,{id:"regLink",label:"Registration Link",variant:"standard",onChange:function(e){return O(e.target.value)}}),Object(x.jsx)(b.a,{variant:"contained",endIcon:Object(x.jsx)(h.a,{}),onClick:function(){n.length&&S()},children:"Send"})]})}),Object(x.jsx)("br",{}),Object(x.jsx)(B,{},y)]})},F=n.p+"static/media/bansal_shiva.bdc0b28c.jfif",K=n.p+"static/media/Sachin.6a82955b.jpg",H=n.p+"static/media/Reshma.b5b3bec0.jpg",T=n.p+"static/media/Saggy.f88636af.jpg",V=n.p+"static/media/yatin.84850917.jpg",q=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:"About"}),Object(x.jsx)("div",{className:"centerWithoutBorder",children:Object(x.jsxs)(M.a,{className:"Table-Center-admins",children:[Object(x.jsx)(L.a,{}),Object(x.jsxs)(z.a,{children:[Object(x.jsxs)(W.a,{children:[Object(x.jsx)("b",{children:"Shiva Bansal"})," is passionate runner aspiring to become professional triathlete.I transformed my self from 93kg to 68kg and from being diabetic (HbA1c 9.6) to non-diabetic (HbA1c 5.5)."]}),Object(x.jsx)(W.a,{children:Object(x.jsx)("img",{src:F,className:"additional-logo",alt:"logo"})})]}),Object(x.jsxs)(z.a,{children:[Object(x.jsxs)(W.a,{children:[Object(x.jsx)("b",{children:"Yatin Ghanwat"})," is an entrepreneur and philanthropist. Yatin has been guiding light of the group since begining. He is very passionate triathlete and great motivator."]}),Object(x.jsx)(W.a,{children:Object(x.jsx)("img",{src:V,className:"additional-logo",alt:"logo"})})]}),Object(x.jsxs)(z.a,{children:[Object(x.jsxs)(W.a,{children:[Object(x.jsx)("b",{children:"Sachin Goel"})," Started running with motive to reduce weight though realized that Strength Training, Running and clean eating is the mantra for weight loss (myself reduced 78Kg to 62KG). Currently, I am trying to balance the running passion & motivate other runners along with family commitments."]}),Object(x.jsx)(W.a,{children:Object(x.jsx)("img",{src:K,className:"additional-logo",alt:"logo"})})]}),Object(x.jsxs)(z.a,{children:[Object(x.jsxs)(W.a,{children:[Object(x.jsx)("b",{children:"Reshma a proud working mother,"})," My running Journey started to get some relief from severe migraine conditions in 2021. But it got converted to a hobby in 2022. I did my first HM in December 2022 and first FM in March 2023."]}),Object(x.jsx)(W.a,{children:Object(x.jsx)("img",{src:H,className:"additional-logo",alt:"logo"})})]}),Object(x.jsxs)(z.a,{children:[Object(x.jsxs)(W.a,{children:[Object(x.jsx)("b",{children:"Sagar Magdum"}),"Running since July 2022. In last one year I have reached from running 1KM to Half Marathon (21KM). Aspiring for full Marathon Runner by end of 2024.I occasionally do cycling and swimming."]}),Object(x.jsx)(W.a,{children:Object(x.jsx)("img",{src:T,className:"additional-logo",alt:"logo"})})]})]})})]})},Y=n(34);function Z(){return Object(x.jsxs)(Y.c,{className:"bg-dark text-center text-white",children:[Object(x.jsx)(Y.b,{className:"p-4 pb-0",children:Object(x.jsxs)("section",{className:"mb-4",children:[Object(x.jsx)(Y.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"#!",role:"button",children:Object(x.jsx)(Y.d,{fab:!0,icon:"facebook-f"})}),Object(x.jsx)(Y.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"#!",role:"button",children:Object(x.jsx)(Y.d,{fab:!0,icon:"twitter"})}),Object(x.jsx)(Y.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"#!",role:"button",children:Object(x.jsx)(Y.d,{fab:!0,icon:"google"})}),Object(x.jsx)(Y.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"#!",role:"button",children:Object(x.jsx)(Y.d,{fab:!0,icon:"instagram"})}),Object(x.jsx)(Y.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"#!",role:"button",children:Object(x.jsx)(Y.d,{fab:!0,icon:"linkedin-in"})}),Object(x.jsx)(Y.a,{outline:!0,color:"light",floating:!0,className:"m-1",href:"#!",role:"button",children:Object(x.jsx)(Y.d,{fab:!0,icon:"github"})})]})}),Object(x.jsxs)("div",{className:"text-center p-3",style:{backgroundColor:"rgba(0, 0, 0, 0.2)"},children:["\xa9 2020 Copyright:",Object(x.jsx)("a",{className:"text-white",href:"https://mdbootstrap.com/",children:"pirunners.in"})]})]})}var P=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],s=function(){var e=Object(p.a)(Object(f.a)().mark((function e(){var t,n;return Object(f.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://kpirunnersapi.azurewebsites.net/api/UserRegistration?code=ZHVazmf8T8qYw2s5-pKipZQot76giBqaM7NxCRIMBkVKAzFuguAEEg==&entity=users");case 2:t=e.sent,n=t.data,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[]),Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"center",children:[Object(x.jsx)("h3",{style:{alignContent:"center"},children:"UserList"}),Object(x.jsxs)(M.a,{children:[Object(x.jsx)(L.a,{children:Object(x.jsxs)(U.a,{children:[Object(x.jsx)(W.a,{style:{fontWeight:"bold"},children:"User Id"}),Object(x.jsx)(W.a,{style:{fontWeight:"bold"},children:"User Name"}),Object(x.jsx)(W.a,{style:{fontWeight:"bold"},children:"Email"}),Object(x.jsx)(W.a,{style:{fontWeight:"bold"},children:"Role"}),Object(x.jsx)(W.a,{style:{fontWeight:"bold"},children:"Action"})]})}),Object(x.jsx)(z.a,{children:n.map((function(e){return Object(x.jsxs)(U.a,{id:e.id,children:[Object(x.jsx)(W.a,{children:e.id}),Object(x.jsx)(W.a,{children:e.username}),Object(x.jsx)(W.a,{children:e.email}),Object(x.jsx)(W.a,{children:e.role}),Object(x.jsx)(W.a,{children:Object(x.jsx)(j.b,{className:"App-link",to:"/editUser/"+e.id,children:"Edit User"})})]})}))})]})]})})};n(171);function Q(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),l=Object(r.a)(i,2),o=l[0],j=l[1],d=e.setIsAuth;return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"centerWithoutBorder",children:Object(x.jsxs)(N.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"50ch"}},noValidate:!0,autoComplete:"off",children:[Object(x.jsx)(w.a,{id:"email",label:"User Email",variant:"outlined",onChange:function(e){return s(e.target.value)}}),Object(x.jsx)(w.a,{id:"password",type:"password",label:"Password",variant:"outlined",onChange:function(e){return j(e.target.value)}}),Object(x.jsx)(b.a,{variant:"contained",endIcon:Object(x.jsx)(h.a,{}),onClick:function(){c.length>0&&o.length>0?(d(!0),alert("successfull signed in !!")):alert("Enter valid username and password !!")},children:"Send"})]})})})}var G=function(e){return e.isAuth?Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"List of Athletes"}),Object(x.jsx)(P,{})]}):Object(x.jsx)(Q,{isAuth:e.isAuth,setIsAuth:e.setIsAuth})},J=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Photos"}),Object(x.jsx)(j.b,{className:"App-link",to:"https://photos.app.goo.gl/K3w8ThLWcWmqQh438",children:"ST Sessions"})]})};var _=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)("div",{className:"App-logo-left",children:Object(x.jsx)("img",{src:o,className:"additional-logo",alt:"logo"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:" \u03c0 Runners Club Run For Life "}),Object(x.jsx)(j.b,{to:"/login",className:"nav-item",children:Object(x.jsx)(b.a,{variant:"contained",endIcon:Object(x.jsx)(h.a,{}),children:" Login "})})]}),Object(x.jsx)("div",{className:"App-logo-right",children:Object(x.jsx)("img",{src:l,className:"App-logo",alt:"logo"})})]}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("nav",{children:[Object(x.jsx)(j.b,{to:"/",className:"nav-item",children:"Homepage"}),Object(x.jsx)(j.b,{to:"/gallery",className:"nav-item",children:"Gallery"}),Object(x.jsx)(j.b,{to:"/register",className:"nav-item",children:"Register"}),Object(x.jsx)(j.b,{to:"/events",className:"nav-item",children:"Events"}),Object(x.jsx)(j.b,{to:"/athletes",className:"nav-item",children:"Athletes"}),Object(x.jsx)(j.b,{to:"/admin",className:"nav-item",children:"Admin"})]}),Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{path:"/",element:Object(x.jsx)(m,{})}),Object(x.jsx)(d.a,{path:"/gallery",element:Object(x.jsx)(J,{})}),Object(x.jsx)(d.a,{path:"/register",element:Object(x.jsx)(S,{})}),Object(x.jsx)(d.a,{path:"/events",element:Object(x.jsx)(D,{})}),Object(x.jsx)(d.a,{path:"/athletes",element:Object(x.jsx)(G,{isAuth:n,setIsAuth:c})}),Object(x.jsx)(d.a,{path:"/admin",element:Object(x.jsx)(q,{})}),Object(x.jsx)(d.a,{path:"/login",element:Object(x.jsx)(Q,{setIsAuth:c})})]})]}),Object(x.jsx)(Z,{})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,272)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.createRoot(document.getElementById("root")).render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(j.a,{children:Object(x.jsx)(_,{})})})),X()}},[[172,1,2]]]);
//# sourceMappingURL=main.168a53df.chunk.js.map