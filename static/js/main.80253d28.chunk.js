(this["webpackJsonplinks-app"]=this["webpackJsonplinks-app"]||[]).push([[0],{30:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(15),l=c.n(s),r=c(10),i=c(2),o=c(7),j=c(1),d=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=(t[1],Object(n.useState)("")),s=Object(o.a)(a,2),l=s[0],r=s[1],i=Object(n.useState)(""),d=Object(o.a)(i,2),b=d[0],u=d[1],h=Object(n.useState)(""),O=Object(o.a)(h,2),m=O[0],x=O[1];return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"container mt-4",style:{display:"flex",justifyContent:"center"},children:Object(j.jsx)("div",{style:{width:"fit-content",paddingTop:20},children:Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"",className:"form-label",children:"Titulo"}),Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Matematicas",onChange:function(e){var t=e.target.value;return r(t)},value:l})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{className:"form-label",children:"Hora"}),Object(j.jsx)("input",{onChange:function(e){var t=e.target.value;return u(t)},value:b,type:"text",placeholder:"1:00PM",className:"form-control",min:10})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{className:"form-label",children:"Link"}),Object(j.jsx)("input",{onChange:function(e){var t=e.target.value;return x(t)},value:m,type:"text",placeholder:"https://zoom.us/j/99458674833",className:"form-control",min:10})]}),Object(j.jsx)("button",{onClick:function(e){c.push({Title:l,Hora:b,Link:m}),localStorage.setItem("links",JSON.stringify(c)),r(""),u(""),x("")},className:"btn btn-primary",children:"Agregar"})]})})})})},b=function(e){var t=e.Person,c=e.Link,a="Hora:";null!=t&&(a="Edad");var s=Object(n.useState)({width:"18rem",cursor:"pointer"}),l=Object(o.a)(s,2),r=l[0],i=l[1];return Object(j.jsx)("div",{className:"card my-2",onMouseOver:function(){i({width:"18rem",cursor:"pointer",boxShadow:"0 0 6px gray"})},onMouseLeave:function(){i({width:"18rem",cursor:"pointer"})},style:r,onClick:function(){c&&(window.location.href=null===c||void 0===c?void 0:c.Link)},children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:(null===t||void 0===t?void 0:t.name)||(null===c||void 0===c?void 0:c.Title)}),Object(j.jsxs)("h6",{className:"card-subtitle mb-2 text-muted",children:[" ",a," ",(null===t||void 0===t?void 0:t.age)||(null===c||void 0===c?void 0:c.Hora)]})]})})},u=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){var e=localStorage.getItem("links");null!=e&&a(JSON.parse(e))}),[]);var s=c.map((function(e){return Object(j.jsx)(b,{Link:e},e.Link)}));return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"container mt-4",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-4",children:s})})})})},h=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("nav",{className:"navbar navbar-dark",style:{backgroundColor:"#000000"},children:Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("h2",{style:{color:"white"},children:"Links App"})})}),Object(j.jsxs)("nav",{style:O.nav,children:[Object(j.jsx)("span",{children:Object(j.jsx)(r.b,{style:O.link,to:"/",children:"Links"})}),Object(j.jsx)("span",{children:Object(j.jsx)(r.b,{style:O.link,to:"/editar",children:"Agregar"})})]}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/editar",children:Object(j.jsx)(d,{})}),Object(j.jsx)(i.a,{path:"/",children:Object(j.jsx)(u,{})})]})]})})},O={link:{textDecoration:"none",color:"#333",borderBottom:"solid 1px black",fontSize:25},nav:{display:"flex",width:"100vw",padding:10,justifyContent:"space-around"}};l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.80253d28.chunk.js.map