(this["webpackJsonpburger-test-project"]=this["webpackJsonpburger-test-project"]||[]).push([[0],{100:function(e,n,t){e.exports=t(157)},105:function(e,n,t){},106:function(e,n,t){},157:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(8),o=t.n(i),c=(t(105),t(106),t(10)),l=t(39),u=t.n(l),s=t(46),d=t(15),m=Object(a.createContext)({isOnline:!0});function f(e){var n=e.children,t=function(){var e=Object(a.useState)(!0),n=Object(d.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){window.addEventListener("online",(function(){return r(!0)})),window.addEventListener("offline",(function(){return r(!1)}))}),[]),{isOnline:t}}();return r.a.createElement(m.Provider,{value:t},n)}var b=function(){return Object(a.useContext)(m)};var g=Object(a.createContext)({user:{name:"",email:""},token:"",signOut:function(){return console.log()},signIn:function(){return Promise.resolve("")}});function p(e){var n=e.children,t=function(){var e=Object(a.useState)(""),n=Object(d.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)({name:"",email:""}),o=Object(d.a)(i,2),l=o[0],m=o[1],f=b().isOnline,g=function(){var e=Object(s.a)(u.a.mark((function e(n){var a,i,o,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=window.gapi.auth2.getAuthInstance(),e.next=3,a.signIn();case 3:return i=e.sent,o=i.getBasicProfile(),c={name:o.getGivenName(),email:o.getEmail()},l=i.getAuthResponse().id_token,localStorage.setItem("token",l),localStorage.setItem("user",JSON.stringify(c)),r(l),m(c),n.push("/catalog"),e.abrupt("return",t);case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=function(){!function(){var e=localStorage.getItem("token"),n=localStorage.getItem("user");r(e||"");n&&m(JSON.parse(n))}()},n=function(e){console.log("error",e)};window.gapi.load("auth2",(function(){window.gapi.auth2.init(Object(c.a)({},"client_id","572926868404-jf8u20cba81glkuej1qht0sbh6ib9qpo.apps.googleusercontent.com")).then(e,n)}))}),[f]),{token:t,user:l,signIn:g,signOut:function(e){localStorage.clear(),r(""),m({name:"",email:""}),e.push("/")}}}();return r.a.createElement(g.Provider,{value:t},n)}var v=function(){return Object(a.useContext)(g)};var h=t(47),E=t.n(h),w=E.a.create({baseURL:"https://api.nutritionix.com/v1_1/",timeout:1e3,headers:{"Content-type":"application/json"}});w.interceptors.request.use((function(e){return e.params=e.params||{},e.params.appId="73a67f21",e.params.appKey="ae606d37e49327cb15fdba90f4111820",e}));var x=w,k={salad:"5da6c2339094e13219339f14",meat:"561e795169fc03824d08345e",cheese:"5976643fa690431a53463b05",bacon:"561e6c16c265794042cb5f20"},O=Object(a.createContext)({ingredients:[]});function j(e){var n=e.children,t=function(){var e=Object(a.useState)([]),n=Object(d.a)(e,2),t=n[0],r=n[1],i=b().isOnline;return Object(a.useEffect)((function(){!function(){var e=localStorage.getItem("ingredients");if(e){var n=JSON.parse(e);r(n)}else Promise.all(Object.keys(k).map(function(){var e=Object(s.a)(u.a.mark((function e(n){var t,a,r,i,o,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u=k[n],x.get("item",{params:{id:u}});case 2:return t=e.sent,a=t.data,r=a.nf_calories,i=a.nf_sodium,o=a.nf_vitamin_a_dv,c=a.nf_vitamin_c_dv,l={calories:r,sodium:i,vitaminA:o,vitaminC:c},e.abrupt("return",{key:n,detailedInfo:l});case 7:case"end":return e.stop()}var u}),e)})));return function(n){return e.apply(this,arguments)}}())).then((function(e){localStorage.setItem("ingredients",JSON.stringify(e)),r(e)}))}()}),[i]),{ingredients:t}}();return r.a.createElement(O.Provider,{value:t},n)}var y=t(13),C=t(93),S=t(21),I=t(188),A=t(201),N=t(190),B=t(191),D=t(192),_=Object(I.a)((function(e){return{grow:{flexGrow:1},appBar:{background:"rgb(255,141,85)"},title:Object(c.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),sectionDesktop:Object(c.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(c.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),W=Object(S.f)((function(e){var n=e.history,t=_(),a=v(),i=a.signIn,o=a.signOut,c=""===a.user.name?r.a.createElement(A.a,{color:"inherit",onClick:function(){return i(n)}},"Login"):r.a.createElement(A.a,{color:"inherit",onClick:function(){return o(n)}},"Logout");return r.a.createElement("div",{className:t.grow},r.a.createElement(N.a,{position:"static",className:t.appBar},r.a.createElement(B.a,null,r.a.createElement(D.a,{className:t.title,variant:"h6",noWrap:!0},"Burger-App"),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.sectionDesktop},c),r.a.createElement("div",{className:t.sectionMobile},c))))})),L=t(19),R=t(35),P=t(14),z=E.a.create({baseURL:"https://burger-app-eaa1f.firebaseio.com/"});function J(){var e=Object(y.a)(["\n  width: 10%;\n  height: 15%;\n  position: absolute;\n  background-color: white;\n  left: 64%;\n  top: 50%;\n  border-radius: 40%;\n  transform: rotate(10deg);\n  box-shadow: inset -3px 0 #c9c9c9;\n\n  &::before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: 150%;\n    top: -130%;\n    border-radius: 40%;\n    transform: rotate(90deg);\n    box-shadow: inset 1px 3px #c9c9c9;\n  }\n\n  &::after {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: -170%;\n    top: -260%;\n    border-radius: 40%;\n    transform: rotate(60deg);\n    box-shadow: inset -1px 2px #c9c9c9;\n  }\n"]);return J=function(){return e},e}function F(){var e=Object(y.a)(["\n  width: 10%;\n  height: 15%;\n  position: absolute;\n  background-color: white;\n  left: 30%;\n  top: 50%;\n  border-radius: 40%;\n  transform: rotate(-20deg);\n  box-shadow: inset -2px -3px #c9c9c9;\n\n  :before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: 180%;\n    top: -50%;\n    border-radius: 40%;\n    transform: rotate(60deg);\n    box-shadow: inset -1px -3px #c9c9c9;\n  }\n\n  :after {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    background-color: white;\n    left: -170%;\n    top: -260%;\n    border-radius: 40%;\n    transform: rotate(60deg);\n    box-shadow: inset -1px 2px #c9c9c9;\n  }\n"]);return F=function(){return e},e}function T(){var e=Object(y.a)(["\n  height: 20%;\n  width: 80%;\n  background: linear-gradient(#bc581e, #e27b36);\n  border-radius: 50% 50% 0 0;\n  box-shadow: inset -15px 0 #c15711;\n  margin: 2% auto;\n  position: relative;\n"]);return T=function(){return e},e}function U(){var e=Object(y.a)(["\n  height: 13%;\n  width: 80%;\n  background: #f08e4a;\n  border-radius: 0 0 30px 30px;\n  box-shadow: inset -15px 0 #c15711;\n  margin: 2% auto;\n"]);return U=function(){return e},e}var M={width:"90%",height:"4.5%",margin:"2% auto",background:"linear-gradient(#f4d004, #d6bb22)",borderRadius:"20px"},q={width:"80%",height:"8%",background:"linear-gradient(#7f3608, #702e05)",margin:"2% auto",borderRadius:"15px"},G={width:"85%",height:"7%",margin:"2% auto",background:"linear-gradient(#228c1d, #91ce50)",borderRadius:"20px"},V={width:"80%",height:"3%",background:"linear-gradient(#bf3813, #c45e38)",margin:"2% auto"},H=P.a.div(U()),K=P.a.div(T()),$=P.a.div(F()),Q=P.a.div(J()),X=function(e){var n=null;switch(e.type){case"bread-bottom":n=r.a.createElement(H,null);break;case"bread-top":n=r.a.createElement(K,null,r.a.createElement($,null),r.a.createElement(Q,null));break;case"meat":n=r.a.createElement("div",{style:q});break;case"cheese":n=r.a.createElement("div",{style:M});break;case"salad":n=r.a.createElement("div",{style:G});break;case"bacon":n=r.a.createElement("div",{style:V});break;default:n=null}return n};function Y(){var e=Object(y.a)(["\n  width: 100%;\n  margin: auto;\n  height: 100%;\n  text-align: center;\n  font-weight: bold;\n  fontsize: 1.2rem;\n"]);return Y=function(){return e},e}var Z=P.a.div(Y()),ee=function(e){var n=e.ingredients,t=e.name,a=e.isEditing,i=void 0!==a&&a,o=Object.keys(n).map((function(e){return Object(L.a)(Array(n[e])).map((function(n,t){return r.a.createElement(X,{key:e+t,type:e})}))})).reduce((function(e,n){return e.concat(n)}),[]);return 0===o.length&&o.push(r.a.createElement("p",null,"please start adding ingredients")),r.a.createElement(Z,null,!i&&r.a.createElement("div",{style:{fontSize:"20px",fontWeight:"bold",marginBottom:"10px"}},t),r.a.createElement(X,{type:"bread-top"}),o,r.a.createElement(X,{type:"bread-bottom"}))},ne=t(51),te=t.n(ne),ae=function(e){var n=e.children,t=e.isOpen,a=e.label;return r.a.createElement(te.a,{isOpen:t,contentLabel:a,ariaHideApp:!0},n)};function re(){var e=Object(y.a)(["\n  padding: 10px;\n  font-weight: bold;\n  width: 80px;\n"]);return re=function(){return e},e}function ie(){var e=Object(y.a)(["\n  display: block,\n  font: inherit;\n  padding: 5px;\n  margin: 0 5px;\n  width: 80px;\n  border: 1px solid #AA6817;\n  cursor: pointer;\n  outline: none;\n  \n  &::disabled {\n  background-color: #AC9980;\n  border: 1px solid #7E7365;\n  color: #ccc;\n  cursor: default;\n  }\n  \n  &::hover:disabled {\n  background-color: #AC9980;\n  color: #ccc;\n  cursor: not-allowed;\n  }\n  \n  ","\n  \n"]);return ie=function(){return e},e}function oe(){var e=Object(y.a)(["\n  background-color: #cf8f2e;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 5px 0;\n"]);return oe=function(){return e},e}var ce=P.a.div(oe()),le=P.a.button(ie(),(function(e){return"less"===e.buttonType?"\n  background-color: #D39952;\n  color: white;\n  :hover, :active {\n  background-color: #DAA972;\n  color: white;\n  }\n  ":"\n  background-color: #8F5E1E;\n  color: white;\n  :hover, :active {\n  background-color: #99703F;\n  color: white;\n  }\n  "})),ue=P.a.div(re()),se=function(e){var n=e.label,t=e.addIngredient,a=e.removeIngredient;return r.a.createElement(ce,null,r.a.createElement(ue,null,n),r.a.createElement(le,{buttonType:"less",onClick:function(){return a()}},"less"),r.a.createElement(le,{buttonType:"more",onClick:function(){return t()}},"more"))};function de(){var e=Object(y.a)(["\n  width: 100%;\n  background-color: #cf8f2e;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  box-shadow: 0 2px 1px #ccc;\n  margin: auto;\n  padding: 10px;\n"]);return de=function(){return e},e}var me=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],fe=P.a.div(de()),be=function(e){var n=e.addIngredient,t=e.removeIngredient;return r.a.createElement(fe,null,me.map((function(e){return r.a.createElement(se,{key:e.label,label:e.label,addIngredient:function(){return n(e.type)},removeIngredient:function(){return t(e.type)}})})))},ge=function(e){var n=e.children,t=e.isDisabled,a=e.onClick;return r.a.createElement(A.a,{disabled:t,onClick:a,style:{backgroundColor:"#F08E49"}},n)},pe=t(200),ve=function(e){var n=e.value,t=e.onChange,a=e.label;return r.a.createElement(pe.a,{style:{width:"100%"},value:n,onChange:t,id:"outlined-basic",label:a,variant:"outlined"})},he=function(e){var n=e.addBurger,t=e.updateBurger,i=e.ingredientsSet,o=e.burgerName,c=e.id,l=Object(a.useState)(""!==o),u=Object(d.a)(l,1)[0],s=Object(a.useState)(o||""),m=Object(d.a)(s,2),f=m[0],b=m[1],g=Object(a.useState)(i||{salad:0,meat:0,cheese:0,bacon:0}),p=Object(d.a)(g,2),v=p[0],h=p[1];return r.a.createElement("div",{style:{height:"400px"}},r.a.createElement("div",{style:{margin:"50px 0"}},r.a.createElement(ve,{value:f,onChange:function(e){b(e.target.value)},label:"Burger Name"})),r.a.createElement(ee,{ingredients:v,name:f,isEditing:u}),r.a.createElement(be,{addIngredient:function(e){var n=v[e]+1,t=Object(R.a)({},v);t[e]=n,h(t)},removeIngredient:function(e){var n=v[e];if(!(n<=0)){var t=n-1,a=Object(R.a)({},v);a[e]=t,h(a)}}}),c?r.a.createElement(ge,{isDisabled:!1,onClick:function(){var e={ingredients:v,name:f};(function(e,n){return z.put("/orders/".concat(e,".json/"),n)})(c,e).then((function(){t(e)}))}},"edit"):r.a.createElement(ge,{isDisabled:!1,onClick:function(){var e,t={ingredients:v,name:f};(e=t,z.post("/orders.json",e)).then((function(e){var a=e.data.name;n(Object(R.a)({},t,{id:a}))}))}},"save"))},Ee=t(195),we=t(194),xe=t(197),ke=t(196),Oe=t(162),je=t(198),ye=t(193),Ce=t(61),Se=t.n(Ce),Ie=t(92),Ae=t.n(Ie),Ne=Se()((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(ye.a),Be=Se()((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(we.a),De=Ae()({table:{}}),_e=function(e){return Math.round(e)},We=function(e){var n=e.ingredients,t=De(),i=Object(a.useContext)(O).ingredients,o=Object.keys(n).reduce((function(e,t){var a=n[t],r=i.find((function(e){return e.key===t})),o=r?r.detailedInfo:{},c=o.vitaminA,l=void 0===c?0:c,u=o.vitaminC,s=void 0===u?0:u,d=o.sodium,m=void 0===d?0:d,f=o.calories,b=void 0===f?0:f;return{vitaminA:_e(e.vitaminA+l*parseInt(a)),vitaminC:_e(e.vitaminC+s*parseInt(a)),sodium:_e(e.sodium+m*parseInt(a)),calories:_e(e.calories+b*parseInt(a))}}),{vitaminA:0,vitaminC:0,sodium:0,calories:0});return r.a.createElement("div",null,r.a.createElement(Ee.a,{component:Oe.a},r.a.createElement(ke.a,{className:t.table,"aria-label":"customized table"},r.a.createElement(xe.a,null,r.a.createElement(we.a,null,r.a.createElement(Ne,{align:"right"},"Vitamin A"),r.a.createElement(Ne,{align:"right"},"Vitamin C"),r.a.createElement(Ne,{align:"right"},"Sodium"),r.a.createElement(Ne,{align:"right"},"Calories"))),r.a.createElement(je.a,null,r.a.createElement(Be,null,r.a.createElement(Ne,{align:"right"},o.vitaminA),r.a.createElement(Ne,{align:"right"},o.vitaminC),r.a.createElement(Ne,{align:"right"},o.sodium),r.a.createElement(Ne,{align:"right"},o.calories))))))},Le=t(199);function Re(){var e=Object(y.a)(["\n  -webkit-box-shadow: 2px 2px 15px -6px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 2px 2px 15px -6px rgba(0, 0, 0, 0.75);\n  box-shadow: 2px 2px 15px -6px rgba(0, 0, 0, 0.75);\n  margin: 10px;\n\n  height: 300px;\n  text-align: center;\n  font-weight: bold;\n  fontsize: 1.2rem;\n  max-width: 450px;\n"]);return Re=function(){return e},e}var Pe=P.a.div(Re()),ze=function(){var e=Object(a.useState)(!1),n=Object(d.a)(e,2),t=n[0],i=n[1],o=b().isOnline,c=r.a.useState([]),l=Object(d.a)(c,2),u=l[0],s=l[1],m=r.a.useState(null),f=Object(d.a)(m,2),g=f[0],p=f[1];Object(a.useEffect)((function(){var e=setInterval((function(){z.get("orders.json").then((function(e){var n=e.data,t=void 0===n?{}:n,a=t||{},r=Object.keys(a).filter((function(e){return!u.some((function(n){return n.id===e}))})).map((function(e){return Object(R.a)({},t[e],{id:e})}));s(u.concat(r))}))}),0===u.length?1e3:5e3);return function(){return clearInterval(e)}}),[o,u]);var v=function(e){(function(e){return z.delete("orders/".concat(e,".json"))})(e).then((function(){var n=u.filter((function(n){return n.id!==e}));s(n)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{isOpen:t,label:"Burger Builder"},r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){i(!1),p(null)}},"close"),r.a.createElement(he,{addBurger:function(e){s([].concat(Object(L.a)(u),[e])),i(!1),p(null)},updateBurger:function(e){var n=u.filter((function(e){return e.id!==(null===g||void 0===g?void 0:g.id)}));s([].concat(Object(L.a)(n),[Object(R.a)({},e,{id:null===g||void 0===g?void 0:g.id})])),p(null),i(!1)},ingredientsSet:null===g||void 0===g?void 0:g.ingredients,burgerName:null===g||void 0===g?void 0:g.name,id:null===g||void 0===g?void 0:g.id}))),u.map((function(e){var n=e.ingredients,t=e.name,a=e.id;return r.a.createElement(Le.a,{container:!0},r.a.createElement(Le.a,{item:!0,xs:12,sm:6},r.a.createElement(Pe,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:"100%"}},r.a.createElement(ee,{ingredients:n,name:t}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(ge,{isDisabled:!1,onClick:function(){p(e),i(!0)}},"Edit"),r.a.createElement(ge,{isDisabled:!1,onClick:function(){v(a)}},"remove"))))),r.a.createElement(Le.a,{item:!0,xs:12,sm:6},r.a.createElement("div",null,r.a.createElement(We,{ingredients:n}))))})),r.a.createElement("div",{style:{position:"fixed",bottom:"5%",right:"10%"}},r.a.createElement(ge,{onClick:function(){return i(!0)},isDisabled:!1},"open builder")))},Je=Object(S.f)((function(e){var n=e.history,t=v().token;return console.log(t),""!==t&&n.push("/catalog"),r.a.createElement("div",null,"asdfasdfasdf")}));function Fe(){var e=Object(y.a)(["\n  width: 100%;\n  background-color: yellow;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  bottom: 0%;\n  z-index: 1;\n"]);return Fe=function(){return e},e}var Te=P.a.div(Fe()),Ue=function(){var e=b().isOnline;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,null,r.a.createElement("div",null,r.a.createElement(W,null)),r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/"},r.a.createElement(Je,null)),r.a.createElement(S.a,{path:"/catalog"},r.a.createElement(ze,null)))),!e&&r.a.createElement(Te,null,"you are offline"))},Me=function(){return r.a.createElement("div",null,r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(j,null,r.a.createElement(Ue,null)))))},qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ge(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}te.a.setAppElement("#root"),o.a.render(r.a.createElement(Me,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/burger-test-project",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/burger-test-project","/service-worker.js");qe?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ge(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ge(n,e)}))}}()}},[[100,1,2]]]);
//# sourceMappingURL=main.088aa572.chunk.js.map