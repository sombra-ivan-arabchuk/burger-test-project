(this["webpackJsonpburger-test-project"]=this["webpackJsonpburger-test-project"]||[]).push([[0],{155:function(e,n,t){e.exports=t(211)},159:function(e,n,t){},160:function(e,n,t){},211:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(9),o=t.n(i),c=(t(159),t(160),t(14)),l=t(72),u=t.n(l),s=t(83),d=t(18),m=Object(a.createContext)({isOnline:!0});function f(e){var n=e.children,t=function(){var e=Object(a.useState)(navigator.onLine),n=Object(d.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){window.addEventListener("online",(function(){return r(!0)})),window.addEventListener("offline",(function(){return r(!1)}))}),[]),{isOnline:t}}();return r.a.createElement(m.Provider,{value:t},n)}var b=function(){return Object(a.useContext)(m)};var g={home:"/",catalog:"/catalog"},p=Object(a.createContext)({user:{name:"",email:""},token:"",signOut:function(){return""},signIn:function(){return Promise.resolve()}});function v(e){var n=e.children,t=function(){var e=Object(a.useState)(),n=Object(d.a)(e,2)[1],t=Object(a.useState)(""),r=Object(d.a)(t,2),i=r[0],o=r[1],l=Object(a.useState)({name:"",email:""}),m=Object(d.a)(l,2),f=m[0],p=m[1],v=b().isOnline,h=function(){var e=Object(s.a)(u.a.mark((function e(n){var t,a,r,i,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=window.gapi.auth2.getAuthInstance(),e.next=4,t.signIn();case 4:a=e.sent,r=a.getBasicProfile(),i={name:r.getGivenName(),email:r.getEmail()},c=a.getAuthResponse().id_token,localStorage.setItem("token",c),localStorage.setItem("user",JSON.stringify(i)),o(c),p(i),n.push(g.catalog),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=function(){!function(){var e=localStorage.getItem("token"),n=localStorage.getItem("user");o(e||"");n&&p(JSON.parse(n))}()},t=function(e){console.log("error",e)},a=window.gapi;a?a.load("auth2",(function(){a.auth2.init(Object(c.a)({},"client_id","572926868404-jf8u20cba81glkuej1qht0sbh6ib9qpo.apps.googleusercontent.com")).then(e,t)})):window.myFunc=n}),[v,window.gapi]),{token:i,user:f,signIn:h,signOut:function(e){localStorage.clear(),o(""),p({name:"",email:""}),e.push(g.home)}}}();return r.a.createElement(p.Provider,{value:t},n)}var h=function(){return Object(a.useContext)(p)};var E=t(84),x=t.n(E),w=x.a.create({baseURL:"https://api.nutritionix.com/v1_1/",timeout:1e3,headers:{"Content-type":"application/json"}});w.interceptors.request.use((function(e){return e.params=e.params||{},e.params.appId="73a67f21",e.params.appKey="ae606d37e49327cb15fdba90f4111820",e}));var O=w,k={salad:"5da6c2339094e13219339f14",meat:"561e795169fc03824d08345e",cheese:"5976643fa690431a53463b05",bacon:"561e6c16c265794042cb5f20"},j=Object(a.createContext)({ingredients:[]});function y(e){var n=e.children,t=function(){var e=Object(a.useState)([]),n=Object(d.a)(e,2),t=n[0],r=n[1],i=b().isOnline;return Object(a.useEffect)((function(){!function(){var e=localStorage.getItem("ingredients");if(e){var n=JSON.parse(e);r(n)}else Promise.all(Object.keys(k).map(function(){var e=Object(s.a)(u.a.mark((function e(n){var t,a,r,i,o,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u=k[n],O.get("item",{params:{id:u}});case 2:return t=e.sent,a=t.data,r=a.nf_calories,i=a.nf_sodium,o=a.nf_vitamin_a_dv,c=a.nf_vitamin_c_dv,l={calories:r,sodium:i,vitaminA:o,vitaminC:c},e.abrupt("return",{key:n,detailedInfo:l});case 7:case"end":return e.stop()}var u}),e)})));return function(n){return e.apply(this,arguments)}}())).then((function(e){localStorage.setItem("ingredients",JSON.stringify(e)),r(e)}))}()}),[i]),{ingredients:t}}();return r.a.createElement(j.Provider,{value:t},n)}var C=t(20),S=t(148),I=t(32),A=t(241),B=t(254),N=t(243),D=t(244),_=t(245),L=Object(A.a)((function(e){return{grow:{flexGrow:1},appBar:{background:"rgb(255,141,85)"},title:Object(c.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),sectionDesktop:Object(c.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(c.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),W=Object(I.f)((function(e){var n=e.history,t=L(),a=h(),i=a.signIn,o=a.signOut,c=""===a.user.name?r.a.createElement(B.a,{color:"inherit",onClick:function(){return i(n)}},"Login"):r.a.createElement(B.a,{color:"inherit",onClick:function(){return o(n)}},"Logout");return r.a.createElement("div",{className:t.grow},r.a.createElement(N.a,{position:"static",className:t.appBar},r.a.createElement(D.a,null,r.a.createElement(_.a,{className:t.title,variant:"h6",noWrap:!0},"Burger-App"),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.sectionDesktop},c),r.a.createElement("div",{className:t.sectionMobile},c))))})),R=t(27),J=t(39),P=t(21),z=x.a.create({baseURL:"https://burger-app-eaa1f.firebaseio.com/"});function F(){var e=Object(C.a)(["\n  width: 10%;\n  height: 15%;\n  position: absolute;\n  background-color: white;\n  left: 64%;\n  top: 50%;\n  border-radius: 40%;\n  transform: rotate(10deg);\n  box-shadow: inset -3px 0 #c9c9c9;\n\n  &::before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: 150%;\n    top: -130%;\n    border-radius: 40%;\n    transform: rotate(90deg);\n    box-shadow: inset 1px 3px #c9c9c9;\n  }\n\n  &::after {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: -170%;\n    top: -260%;\n    border-radius: 40%;\n    transform: rotate(60deg);\n    box-shadow: inset -1px 2px #c9c9c9;\n  }\n"]);return F=function(){return e},e}function T(){var e=Object(C.a)(["\n  width: 10%;\n  height: 15%;\n  position: absolute;\n  background-color: white;\n  left: 30%;\n  top: 50%;\n  border-radius: 40%;\n  transform: rotate(-20deg);\n  box-shadow: inset -2px -3px #c9c9c9;\n\n  :before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: 180%;\n    top: -50%;\n    border-radius: 40%;\n    transform: rotate(60deg);\n    box-shadow: inset -1px -3px #c9c9c9;\n  }\n\n  :after {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: -170%;\n    top: -260%;\n    border-radius: 40%;\n    transform: rotate(60deg);\n    box-shadow: inset -1px 2px #c9c9c9;\n  }\n"]);return T=function(){return e},e}function U(){var e=Object(C.a)(["\n  height: 20%;\n  width: 80%;\n  background: linear-gradient(#bc581e, #e27b36);\n  border-radius: 50% 50% 0 0;\n  box-shadow: inset -15px 0 #c15711;\n  margin: 2% auto;\n  position: relative;\n"]);return U=function(){return e},e}function q(){var e=Object(C.a)(["\n  height: 13%;\n  width: 80%;\n  background: #f08e4a;\n  border-radius: 0 0 30px 30px;\n  box-shadow: inset -15px 0 #c15711;\n  margin: 2% auto;\n"]);return q=function(){return e},e}var M={width:"90%",height:"4.5%",margin:"2% auto",background:"linear-gradient(#f4d004, #d6bb22)",borderRadius:"20px"},V={width:"80%",height:"8%",background:"linear-gradient(#7f3608, #702e05)",margin:"2% auto",borderRadius:"15px"},G={width:"85%",height:"7%",margin:"2% auto",background:"linear-gradient(#228c1d, #91ce50)",borderRadius:"20px"},H={width:"80%",height:"3%",background:"linear-gradient(#bf3813, #c45e38)",margin:"2% auto"},K=P.a.div(q()),$=P.a.div(U()),Q=P.a.div(T()),X=P.a.div(F()),Y=function(e){var n=null;switch(e.type){case"bread-bottom":n=r.a.createElement(K,null);break;case"bread-top":n=r.a.createElement($,null,r.a.createElement(Q,null),r.a.createElement(X,null));break;case"meat":n=r.a.createElement("div",{style:V});break;case"cheese":n=r.a.createElement("div",{style:M});break;case"salad":n=r.a.createElement("div",{style:G});break;case"bacon":n=r.a.createElement("div",{style:H});break;default:n=null}return n};function Z(){var e=Object(C.a)(["\n  width: 100%;\n  margin: auto;\n  height: 100%;\n  text-align: center;\n  font-weight: bold;\n  fontsize: 1.2rem;\n"]);return Z=function(){return e},e}var ee=P.a.div(Z()),ne=function(e){var n=e.ingredients,t=e.name,a=e.isEditing,i=void 0!==a&&a;console.log(i);var o=Object.keys(n).map((function(e){return Object(R.a)(Array(n[e])).map((function(n,t){return r.a.createElement(Y,{key:e+t,type:e})}))})).reduce((function(e,n){return e.concat(n)}),[]);return 0===o.length&&o.push(r.a.createElement("p",null,"please start adding ingredients")),r.a.createElement(ee,null,!i&&r.a.createElement("div",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"10px"}},t),r.a.createElement(Y,{type:"bread-top"}),o,r.a.createElement(Y,{type:"bread-bottom"}))},te=t(88),ae=t.n(te),re=function(e){var n=e.children,t=e.isOpen,a=e.label;return r.a.createElement(ae.a,{isOpen:t,contentLabel:a,ariaHideApp:!0},n)};function ie(){var e=Object(C.a)(["\n  padding: 10px;\n  font-weight: bold;\n  width: 80px;\n"]);return ie=function(){return e},e}function oe(){var e=Object(C.a)(["\n  display: block,\n  font: inherit;\n  padding: 5px;\n  margin: 0 5px;\n  width: 80px;\n  border: 1px solid #AA6817;\n  cursor: pointer;\n  outline: none;\n  \n  &::disabled {\n  background-color: #AC9980;\n  border: 1px solid #7E7365;\n  color: #ccc;\n  cursor: default;\n  }\n  \n  &::hover:disabled {\n  background-color: #AC9980;\n  color: #ccc;\n  cursor: not-allowed;\n  }\n  \n  ","\n  \n"]);return oe=function(){return e},e}function ce(){var e=Object(C.a)(["\n  background-color: #cf8f2e;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 5px 0;\n"]);return ce=function(){return e},e}var le=P.a.div(ce()),ue=P.a.button(oe(),(function(e){return"less"===e.buttonType?"\n  background-color: #D39952;\n  color: white;\n  :hover, :active {\n  background-color: #DAA972;\n  color: white;\n  }\n  ":"\n  background-color: #8F5E1E;\n  color: white;\n  :hover, :active {\n  background-color: #99703F;\n  color: white;\n  }\n  "})),se=P.a.div(ie()),de=function(e){var n=e.label,t=e.addIngredient,a=e.removeIngredient;return r.a.createElement(le,null,r.a.createElement(se,null,n),r.a.createElement(ue,{type:"button",buttonType:"less","data-testid":"".concat(n,"-less"),onClick:function(){return a()}},"less"),r.a.createElement(ue,{type:"button",buttonType:"more","data-testid":"".concat(n,"-more"),onClick:function(){return t()}},"more"))};function me(){var e=Object(C.a)(["\n  width: 100%;\n  background-color: #cf8f2e;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  box-shadow: 0 2px 1px #ccc;\n  margin: auto;\n  padding: 10px;\n"]);return me=function(){return e},e}var fe=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],be=P.a.div(me()),ge=function(e){var n=e.addIngredient,t=e.removeIngredient;return r.a.createElement(be,null,fe.map((function(e){var a=e.type,i=e.label;return r.a.createElement(de,{key:i,label:i,addIngredient:function(){return n(a)},removeIngredient:function(){return t(a)}})})))},pe=function(e){var n=e.children,t=e.isDisabled,a=e.onClick,i=e.testId,o=e.type,c=e.style;return r.a.createElement(B.a,{type:o,"data-testid":i,disabled:t,onClick:a,style:Object(J.a)({},c,{backgroundColor:"#F08E49"})},n)},ve=t(253),he=function(e){var n=e.value,t=e.onChange,a=e.label;return(r.a.createElement(ve.a,{style:{width:"100%"},value:n,onChange:t,id:"outlined-basic","data-testid":"burger-input",label:a,variant:"outlined"}))},Ee=t(111),xe=t(110),we=xe.a().shape({name:xe.b().required()}),Oe=function(e){var n=e.addBurger,t=e.updateBurger,i=e.ingredientsSet,o=e.burgerName,c=e.id,l=Object(a.useState)(""!==o),u=Object(d.a)(l,1)[0],s=Object(a.useState)(o||""),m=Object(d.a)(s,1)[0],f=Object(a.useState)(i||{salad:0,meat:0,cheese:0,bacon:0}),b=Object(d.a)(f,2),g=b[0],p=b[1],v=function(e){var n=g[e]+1,t=Object(J.a)({},g);t[e]=n,p(t)},h=function(e){var t,a={ingredients:g,name:e};(t=a,z.post("/orders.json",t)).then((function(e){var t=e.data.name;n(Object(J.a)({},a,{id:t}))}))},E=function(e){var n={ingredients:g,name:e};(function(e,n){return z.put("/orders/".concat(e,".json/"),n)})(c,n).then((function(){t(n)}))},x=function(e){var n=g[e];if(!(n<=0)){var t=n-1,a=Object(J.a)({},g);a[e]=t,p(a)}},w=function(e){return Object.keys(e).length>0||!Object.keys(g).some((function(e){return g[e]>0}))};return r.a.createElement("div",{style:{height:"400px"}},r.a.createElement(Ee.b,{initialValues:{name:m},validationSchema:we,onSubmit:function(e){var n=e.name;return u&&""!==m?E(n):h(n)}},(function(e){var n=e.errors,t=e.handleChange,a=e.touched,i=e.values;return r.a.createElement(Ee.a,{style:{height:"100%"}},r.a.createElement("div",{style:{margin:"50px 0"}},r.a.createElement(he,{value:i.name,onChange:t("name"),label:"Burger Name"}),n.name&&a.name?r.a.createElement("div",{style:{color:"red"}},n.name):null),r.a.createElement(ne,{ingredients:g,name:m,isEditing:u}),r.a.createElement(ge,{addIngredient:v,removeIngredient:x}),c?r.a.createElement(pe,{type:"submit",testId:"editBurger",isDisabled:w(n)},"edit"):r.a.createElement(pe,{type:"submit",testId:"saveBurger",isDisabled:w(n)},"save"))})))},ke=t(248),je=t(247),ye=t(250),Ce=t(249),Se=t(216),Ie=t(251),Ae=t(246),Be=t(109),Ne=t.n(Be),De=t(147),_e=t.n(De),Le=Ne()((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(Ae.a),We=Ne()((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(je.a),Re=_e()({table:{}}),Je=function(e){return Math.round(e)},Pe=function(e){var n=e.ingredients,t=Re(),i=Object(a.useContext)(j).ingredients,o=Object.keys(n).reduce((function(e,t){var a=n[t],r=i.find((function(e){return e.key===t})),o=r?r.detailedInfo:{},c=o.vitaminA,l=void 0===c?0:c,u=o.vitaminC,s=void 0===u?0:u,d=o.sodium,m=void 0===d?0:d,f=o.calories,b=void 0===f?0:f;return{vitaminA:Je(e.vitaminA+l*parseInt(a)),vitaminC:Je(e.vitaminC+s*parseInt(a)),sodium:Je(e.sodium+m*parseInt(a)),calories:Je(e.calories+b*parseInt(a))}}),{vitaminA:0,vitaminC:0,sodium:0,calories:0});return r.a.createElement("div",null,r.a.createElement(ke.a,{component:Se.a},r.a.createElement(Ce.a,{className:t.table,"aria-label":"customized table"},r.a.createElement(ye.a,null,r.a.createElement(je.a,null,r.a.createElement(Le,{align:"right"},"Vitamin A"),r.a.createElement(Le,{align:"right"},"Vitamin C"),r.a.createElement(Le,{align:"right"},"Sodium"),r.a.createElement(Le,{align:"right"},"Calories"))),r.a.createElement(Ie.a,null,r.a.createElement(We,null,r.a.createElement(Le,{align:"right"},o.vitaminA),r.a.createElement(Le,{align:"right"},o.vitaminC),r.a.createElement(Le,{align:"right"},o.sodium),r.a.createElement(Le,{align:"right"},o.calories))))))},ze=t(252);function Fe(){var e=Object(C.a)(["\n  -webkit-box-shadow: 2px 2px 15px -6px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 2px 2px 15px -6px rgba(0, 0, 0, 0.75);\n  box-shadow: 2px 2px 15px -6px rgba(0, 0, 0, 0.75);\n  margin: 10px;\n\n  height: 300px;\n  text-align: center;\n  font-weight: bold;\n  fontsize: 1.2rem;\n  max-width: 450px;\n"]);return Fe=function(){return e},e}var Te=P.a.div(Fe()),Ue=function(){var e=Object(a.useState)(!1),n=Object(d.a)(e,2),t=n[0],i=n[1],o=b().isOnline,c=r.a.useState([]),l=Object(d.a)(c,2),u=l[0],s=l[1],m=r.a.useState(null),f=Object(d.a)(m,2),g=f[0],p=f[1];Object(a.useEffect)((function(){var e=setInterval((function(){z.get("orders.json").then((function(e){var n=e.data,t=void 0===n?{}:n,a=t||{},r=Object.keys(a).filter((function(e){return!u.some((function(n){return n.id===e}))})).map((function(e){return Object(J.a)({},t[e],{id:e})}));s(u.concat(r))})).catch((function(e){return console.log(e)}))}),0===u.length?1e3:5e3);return function(){return clearInterval(e)}}),[o,u]),Object(a.useEffect)((function(){if(!o){var e=localStorage.getItem("burgers")||"[]";localStorage.setItem("burgers",JSON.stringify(u)),s(JSON.parse(e))}}),[o]);var v=function(e){(function(e){return z.delete("orders/".concat(e,".json"))})(e).then((function(){var n=u.filter((function(n){return n.id!==e}));s(n)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,{isOpen:t,label:"Burger Builder"},r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){i(!1),p(null)}},"close"),r.a.createElement(Oe,{addBurger:function(e){s([].concat(Object(R.a)(u),[e])),i(!1),p(null)},updateBurger:function(e){var n=u.filter((function(e){return e.id!==(null===g||void 0===g?void 0:g.id)}));s([].concat(Object(R.a)(n),[Object(J.a)({},e,{id:null===g||void 0===g?void 0:g.id})])),p(null),i(!1)},ingredientsSet:null===g||void 0===g?void 0:g.ingredients,burgerName:null===g||void 0===g?void 0:g.name,id:null===g||void 0===g?void 0:g.id}))),u.map((function(e){var n=e.ingredients,t=e.name,a=e.id;return r.a.createElement(ze.a,{container:!0},r.a.createElement(ze.a,{item:!0,xs:12,sm:6},r.a.createElement(Te,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:"100%"}},r.a.createElement(ne,{ingredients:n,name:t,"data-testid":t}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(pe,{style:{marginBottom:"10px"},testId:"".concat(t,"-update"),isDisabled:!1,onClick:function(){p(e),i(!0)}},"Edit"),r.a.createElement(pe,{testId:"".concat(t,"-delete"),isDisabled:!1,onClick:function(){v(a)}},"remove"))))),r.a.createElement(ze.a,{item:!0,xs:12,sm:6},r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement(Pe,{ingredients:n}))))})),r.a.createElement("div",{style:{position:"fixed",bottom:"5%",right:"10%"}},r.a.createElement(pe,{testId:"openBuilder",onClick:function(){return i(!0)},isDisabled:!1},"open builder")))},qe=Object(I.f)((function(e){var n=e.history,t=h().token;return console.log(t),""!==t&&n.push(g.catalog),r.a.createElement("div",null,"asdfasdfasdf")}));function Me(){var e=Object(C.a)(["\n  width: 100%;\n  background-color: yellow;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  bottom: 0%;\n  z-index: 1;\n"]);return Me=function(){return e},e}var Ve=P.a.div(Me()),Ge=function(){var e=b().isOnline;return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,null,r.a.createElement("div",null,r.a.createElement(W,null)),r.a.createElement(I.c,null,r.a.createElement(I.a,{exact:!0,path:g.home},r.a.createElement(qe,null)),r.a.createElement(I.a,{path:g.catalog},r.a.createElement(Ue,null)))),!e&&r.a.createElement(Ve,null,"you are offline"))},He=function(){return r.a.createElement("div",null,r.a.createElement(f,null,r.a.createElement(v,null,r.a.createElement(y,null,r.a.createElement(Ge,null)))))},Ke=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $e(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}ae.a.setAppElement("#root"),o.a.render(r.a.createElement(He,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/burger-test-project",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/burger-test-project","/service-worker.js");Ke?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$e(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$e(n,e)}))}}()}},[[155,1,2]]]);
//# sourceMappingURL=main.81cd0cf2.chunk.js.map