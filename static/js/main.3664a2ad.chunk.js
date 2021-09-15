(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{16:function(n,e,t){},21:function(n,e,t){n.exports={App:"App_App__25UyM","App-logo":"App_App-logo__N80lG","App-logo-spin":"App_App-logo-spin__1C3Xk","App-header":"App_App-header__XtA9N","App-link":"App_App-link__1-KmJ"}},23:function(n,e,t){"use strict";t.r(e);var a,r,i,c,o,s,p,u=t(1),b=t.n(u),d=t(8),l=t.n(d),j=(t(16),t(10)),x=t(4),m=t(2),g=t(3),f=g.a.label(a||(a=Object(m.a)(["\nfont-weight: 700;\nfont-style: italic;\nfont-size: 17px;\nmargin-right:5px;\n"]))),h=g.a.input(r||(r=Object(m.a)(["\nmargin-right: 5px;\npadding: 5px;\n\nborder-radius: 5px;\nbox-shadow: 1px 2px 3px rgb(85, 42, 85);\n"]))),O=g.a.button(i||(i=Object(m.a)(["\npadding: 5px;\nborder-radius: 5px;\nbox-shadow: 3px 2px 3px rgb(85, 42, 85);\nfont-size: 14px;\nfont-weight:700;\n  \n"]))),v=t(0);function A(n){var e=n.onSubmit,t=Object(u.useState)(""),a=Object(x.a)(t,2),r=a[0],i=a[1],c=Object(u.useState)(""),o=Object(x.a)(c,2),s=o[0],p=o[1],b=function(n){switch(n.target.name){case"name":i(n.target.value);break;case"number":p(n.target.value);break;default:return}};return Object(v.jsx)("div",{children:Object(v.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(r,s),i(""),p("")},children:[Object(v.jsx)(f,{children:"Name"}),Object(v.jsx)(h,{type:"text",name:"name",value:r,onChange:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(v.jsx)(f,{children:"Number"}),Object(v.jsx)(h,{type:"tel",name:"number",value:s,onChange:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(v.jsx)(O,{type:"submit",children:"Add contact"})]})})}var w=g.a.span(c||(c=Object(m.a)(["\nfont-weight: 500;\nfont-style: italic;\nfont-size: 17px;\n"]))),y=g.a.button(o||(o=Object(m.a)(["\npadding: 5px;\nborder-radius: 5px;\nbox-shadow: 3px 2px 3px rgb(85, 42, 85);\nfont-size: 14px;\nfont-weight:700;\n  \n"]))),C=g.a.ul(s||(s=Object(m.a)(["\nmargin-top: 40px;\npadding-right:40px;\n"]))),_=g.a.li(p||(p=Object(m.a)(["\n\nlist-style:none;\ndisplay: grid;\ngrid-template-columns: 1fr 1fr 1fr;\nalign-items: center;\nmargin-bottom:5px;\n\n"])));var k,S,z,J=function(n){var e=n.contacts,t=n.onRemove;return Object(v.jsx)(C,{children:e.map((function(n){var e=n.id,a=n.name,r=n.number;return Object(v.jsxs)(_,{name:a,number:r,children:[Object(v.jsxs)(w,{children:[a,": "]}),Object(v.jsxs)(w,{children:[r," "]}),Object(v.jsxs)(y,{type:"button",onClick:function(){return t(e)},children:[" ","Delete contact"]})]},e)}))})},N=function(n){var e=n.value,t=n.onChange,a=n.onBlur;return Object(v.jsxs)("label",{children:[Object(v.jsx)(f,{children:"Find contact by name"}),Object(v.jsx)(h,{type:"text",value:e,onChange:t,onBlur:a})]})},B=g.a.div(k||(k=Object(m.a)(["\nmargin: 20px;\n\n background: linear-gradient(45deg, rgb(240, 160, 199), rgb(87, 66, 100));\npadding: 10px;\nwidth: 700px;\nbox-shadow: 5px 6px 9px rgb(85, 42, 85);\n border-radius: 5px;\n text-align: center;\n\n\n\n"]))),E=g.a.h1(S||(S=Object(m.a)(["\nfont-style: italic;\n\n\n\n"]))),L=g.a.h2(z||(z=Object(m.a)(["\nfont-style: italic;\nmargin-top:46px;\n\n\n\n"]))),I=(t(21),t(22).v4);function M(){var n=Object(u.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),e=Object(x.a)(n,2),t=e[0],a=e[1],r=Object(u.useState)(""),i=Object(x.a)(r,2),c=i[0],o=i[1];Object(u.useEffect)((function(){var n,e=null!==(n=JSON.parse(localStorage.getItem("contacts")))&&void 0!==n?n:"";e&&a(e)}),[]),Object(u.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(t))}),[t]);return Object(v.jsxs)(B,{children:[Object(v.jsx)(E,{children:"Phonebook"}),Object(v.jsx)(A,{onSubmit:function(n,e){var r=t.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})),i=t.find((function(n){return n.number===e}));r&&alert("".concat(n," is already in contacts")),i&&alert("This number ".concat(e," is already in contacts"));var c={id:I(),name:n,number:e};!i&&!r&&a((function(n){return[c].concat(Object(j.a)(n))}))}}),Object(v.jsx)(L,{children:"Contacts"}),Object(v.jsx)(N,{value:c,onChange:function(n){o(n.currentTarget.value)},onBlur:function(n){o(""),n.currentTarget.value=""}}),Object(v.jsx)(J,{contacts:function(){var n=c.toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}(),onRemove:function(n){a(t.filter((function(e){return e.id!==n})))}})]})}l.a.render(Object(v.jsx)(b.a.StrictMode,{children:Object(v.jsx)(M,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.3664a2ad.chunk.js.map