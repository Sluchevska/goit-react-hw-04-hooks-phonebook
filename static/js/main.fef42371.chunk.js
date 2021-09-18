(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{16:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var a,r,c,i,o,s,u,b=t(1),d=t.n(b),l=t(8),j=t.n(l),p=(t(16),t(10)),x=t(4),m=t(2),f=t(3),g=f.a.label(a||(a=Object(m.a)(["\nfont-weight: 700;\nfont-style: italic;\nfont-size: 17px;\nmargin-right:5px;\n"]))),h=f.a.input(r||(r=Object(m.a)(["\nmargin-right: 5px;\npadding: 5px;\n\nborder-radius: 5px;\nbox-shadow: 1px 2px 3px rgb(85, 42, 85);\n"]))),O=f.a.button(c||(c=Object(m.a)(["\npadding: 5px;\nborder-radius: 5px;\nbox-shadow: 3px 2px 3px rgb(85, 42, 85);\nfont-size: 14px;\nfont-weight:700;\n  \n"]))),v=t(0);function w(n){var e=n.onSubmit,t=Object(b.useState)(""),a=Object(x.a)(t,2),r=a[0],c=a[1],i=Object(b.useState)(""),o=Object(x.a)(i,2),s=o[0],u=o[1],d=function(n){switch(n.target.name){case"name":c(n.target.value);break;case"number":u(n.target.value);break;default:return}};return Object(v.jsx)("div",{children:Object(v.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(r,s),c(""),u("")},children:[Object(v.jsx)(g,{children:"Name"}),Object(v.jsx)(h,{type:"text",name:"name",value:r,onChange:d,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(v.jsx)(g,{children:"Number"}),Object(v.jsx)(h,{type:"tel",name:"number",value:s,onChange:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(v.jsx)(O,{type:"submit",children:"Add contact"})]})})}var y=f.a.span(i||(i=Object(m.a)(["\nfont-weight: 500;\nfont-style: italic;\nfont-size: 17px;\n"]))),C=f.a.button(o||(o=Object(m.a)(["\npadding: 5px;\nborder-radius: 5px;\nbox-shadow: 3px 2px 3px rgb(85, 42, 85);\nfont-size: 14px;\nfont-weight:700;\n  \n"]))),S=f.a.ul(s||(s=Object(m.a)(["\nmargin-top: 40px;\npadding-right:40px;\n"]))),k=f.a.li(u||(u=Object(m.a)(["\n\nlist-style:none;\ndisplay: grid;\ngrid-template-columns: 1fr 1fr 1fr;\nalign-items: center;\nmargin-bottom:5px;\n\n"])));var z,A,B,J=function(n){var e=n.contacts,t=n.onRemove;return Object(v.jsx)(S,{children:e.map((function(n){var e=n.id,a=n.name,r=n.number;return Object(v.jsxs)(k,{name:a,number:r,children:[Object(v.jsxs)(y,{children:[a,": "]}),Object(v.jsxs)(y,{children:[r," "]}),Object(v.jsx)(C,{type:"button",onClick:function(){return t(e)},children:"Delete contact"})]},e)}))})},E=function(n){var e=n.value,t=n.onChange,a=n.onBlur;return Object(v.jsxs)("label",{children:[Object(v.jsx)(g,{children:"Find contact by name"}),Object(v.jsx)(h,{type:"text",value:e,onChange:t,onBlur:a})]})},L=f.a.div(z||(z=Object(m.a)(["\nmargin: 20px;\n\n background: linear-gradient(45deg, rgb(240, 160, 199), rgb(87, 66, 100));\npadding: 10px;\nwidth: 700px;\nbox-shadow: 5px 6px 9px rgb(85, 42, 85);\n border-radius: 5px;\n text-align: center;\n\n\n\n"]))),N=f.a.h1(A||(A=Object(m.a)(["\nfont-style: italic;\n\n\n\n"]))),I=f.a.h2(B||(B=Object(m.a)(["\nfont-style: italic;\nmargin-top:46px;\n\n\n\n"]))),R=t(21).v4;function T(){var n=Object(b.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),e=Object(x.a)(n,2),t=e[0],a=e[1],r=Object(b.useState)(""),c=Object(x.a)(r,2),i=c[0],o=c[1];Object(b.useEffect)((function(){var n,e=null!==(n=JSON.parse(localStorage.getItem("contacts")))&&void 0!==n?n:"";e&&a(e)}),[]),Object(b.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(t))}),[t]);return Object(v.jsxs)(L,{children:[Object(v.jsx)(N,{children:"Phonebook"}),Object(v.jsx)(w,{onSubmit:function(n,e){var r=t.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})),c=t.find((function(n){return n.number===e}));r&&alert("".concat(n," is already in contacts")),c&&alert("This number ".concat(e," is already in contacts"));var i={id:R(),name:n,number:e};!c&&!r&&a((function(n){return[i].concat(Object(p.a)(n))}))}}),Object(v.jsx)(I,{children:"Contacts"}),Object(v.jsx)(E,{value:i,onChange:function(n){o(n.currentTarget.value)},onBlur:function(n){o(""),n.currentTarget.value=""}}),Object(v.jsx)(J,{contacts:function(){var n=i.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}(),onRemove:function(n){a(t.filter((function(e){return e.id!==n})))}})]})}j.a.render(Object(v.jsx)(d.a.StrictMode,{children:Object(v.jsx)(T,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.fef42371.chunk.js.map