(function(e){function t(t){for(var a,o,s=t[0],u=t[1],i=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"893eaa9d"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"dd6f501e"}[e]+".css",r=u.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var i=c[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],l=i.getAttribute("data-href");if(l===a||l===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],b.parentNode.removeChild(b),n(c)},b.href=r;var g=document.getElementsByTagName("head")[0];g.appendChild(b)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-pages/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var b=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02b8":function(e,t,n){e.exports=n.p+"img/bg3.d01e3caf.webp"},"37bb":function(e,t,n){"use strict";n("84e7")},5668:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");function o(e,t,n,o,r,c){const s=Object(a["F"])("Header"),u=Object(a["F"])("router-view");return Object(a["y"])(),Object(a["f"])(a["a"],null,[Object(a["j"])(s),Object(a["j"])(u)],64)}var r=n("7f01"),c=n.n(r);const s={class:"header df a-center j-ctr"},u={id:"nav",class:"nav df a-center"},i=Object(a["g"])("img",{src:c.a,alt:"logo"},null,-1);function l(e,t,n,o,r,c){const l=Object(a["F"])("LanguageSwitcher"),d=Object(a["F"])("router-link");return Object(a["y"])(),Object(a["f"])("div",s,[Object(a["j"])(l),Object(a["g"])("div",u,[Object(a["j"])(d,{class:"router-link fs20",to:"/vue-pages"},{default:Object(a["O"])(()=>[Object(a["i"])(Object(a["J"])(e.$t("message.home")),1)]),_:1}),Object(a["j"])(d,{class:"router-link fs20",to:"/about"},{default:Object(a["O"])(()=>[Object(a["i"])("About")]),_:1}),i,Object(a["j"])(d,{class:"router-link fs20",to:"/test"},{default:Object(a["O"])(()=>[Object(a["i"])("test")]),_:1}),Object(a["j"])(d,{class:"router-link fs20",to:"/test2"},{default:Object(a["O"])(()=>[Object(a["i"])("test2")]),_:1})])])}const d={class:"language-box"},b={class:"nav__lng-text"},g={class:"language-box__list tc dropdown"},f=["onClick"];function p(e,t,n,o,r,c){return Object(a["y"])(),Object(a["f"])("nav",d,[Object(a["g"])("button",{class:Object(a["r"])(["language-box__globe df a-center",c.currentLanguageIcon]),onClick:t[0]||(t[0]=(...e)=>c.toggleDropdown&&c.toggleDropdown(...e))},[Object(a["g"])("span",b,Object(a["J"])(c.currentLanguageLabel),1)],2),Object(a["j"])(a["c"],{name:"dropdown-transition"},{default:Object(a["O"])(()=>[Object(a["P"])(Object(a["g"])("div",g,[(Object(a["y"])(!0),Object(a["f"])(a["a"],null,Object(a["E"])(r.languages,e=>(Object(a["y"])(),Object(a["f"])("button",{key:e.code,class:Object(a["r"])(["language-box__lng-item db fs14",{active:e.code===c.currentLanguage,["icon-"+e.code]:!0}]),onClick:t=>c.changeLanguage(e.code)},Object(a["J"])(e.label),11,f))),128))],512),[[a["M"],r.isDropdownOpen]])]),_:1})])}var h={data(){return{isDropdownOpen:!1,languages:[{code:"hy",label:"Հայ"},{code:"ru",label:"Рус"},{code:"en",label:"Eng"}]}},computed:{currentLanguageLabel(){const e=this.languages.find(e=>e.code===this.currentLanguage);return e?e.label:"Language"},currentLanguage(){return this.$i18n.locale},currentLanguageIcon(){return"icon-"+this.currentLanguage}},methods:{changeLanguage(e){this.$i18n.locale=e,localStorage.setItem("language",e),this.isDropdownOpen=!1},toggleDropdown(){this.isDropdownOpen=!this.isDropdownOpen},handleDocumentClick(e){this.$el.contains(e.target)||(this.isDropdownOpen=!1)}},mounted(){document.addEventListener("click",this.handleDocumentClick)},beforeUnmount(){document.removeEventListener("click",this.handleDocumentClick)}},m=(n("877a"),n("6b0d")),O=n.n(m);const v=O()(h,[["render",p]]);var j=v,y={components:{LanguageSwitcher:j},data(){return{}},methods:{changeLanguage(e){this.$i18n.locale=e}}};n("c003");const _=O()(y,[["render",l]]);var w=_,k={components:{Header:w},data(){return{}},methods:{changeLanguage(e){this.$i18n.locale=e}}};const L=O()(k,[["render",o]]);var x=L,S=n("6605");const D=Object(a["h"])('<h2 class="home__header-title font-italiano" data-v-9394982e> The <mark data-v-9394982e>Perfect</mark> Baked Cake Everyday </h2><span class="font-italiano db fs30" data-v-9394982e>“Where there is cake, there is hope.”</span><div class="home__soc-box" data-v-9394982e><div class="home__soc-box-wrapper" data-v-9394982e><a class="home__soc-link home__soc-link--fb" href="https://www.facebook.com/gevorg.gasparyan.7528/" target="_blank" aria-label="Facebook" data-v-9394982e></a><a class="home__soc-link home__soc-link--ig" href="#" target="_blank" aria-label="Instagram" data-v-9394982e></a><a class="home__soc-link home__soc-link--tg" href="#" target="_blank" aria-label="Telegram" data-v-9394982e></a></div></div>',3),C=[D];function E(e,t,n,o,r,c){return Object(a["y"])(),Object(a["f"])("div",{class:"home pr",style:Object(a["s"])({backgroundImage:"url("+o.currentImage+")"})},C,4)}var I=n("d8fb"),P=n.n(I),T=n("f78c"),A=n.n(T),J=n("02b8"),N=n.n(J),M={name:"Home",setup(){const e=[P.a,A.a,N.a],t=Object(a["D"])(e[0]);let n;const o=()=>{const n=e[Math.floor(Math.random()*e.length)];t.value=n,document.querySelector(".home").classList.add("transitioning"),setTimeout(()=>{document.querySelector(".home").classList.remove("transitioning")},1e3)};return Object(a["w"])(()=>{o(),n=setInterval(o,1e4)}),Object(a["x"])(()=>{clearInterval(n)}),{currentImage:t}}};n("37bb");const $=O()(M,[["render",E],["__scopeId","data-v-9394982e"]]);var F=$;const H=[{path:"/vue-pages",name:"Home",component:F},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))},{path:"/test",name:"Test",component:()=>n.e("about").then(n.bind(null,"78c1"))},{path:"/test2",name:"Test2",component:()=>n.e("about").then(n.bind(null,"fb6d"))}],q=Object(S["a"])({history:Object(S["b"])(),routes:H});var B=q,U=n("5502"),W=Object(U["a"])({state:{},mutations:{},actions:{},modules:{}}),K=n("9ca6"),Q=n("edd4"),z=n("7704"),G=n("dfc6");const R={en:Q,ru:z,hy:G},V=localStorage.getItem("language")||"hy",X=Object(K["a"])({locale:V,fallbackLocale:"hy",messages:R});var Y=X,Z=n("1157"),ee=n.n(Z),te=n("a051"),ne=n.n(te);window.$=ee.a,window.jQuery=ee.a;const ae=Object(a["e"])(x);ae.use(W),ae.use(ne.a),ae.use(B),ae.use(Y),ae.mount("#app")},7704:function(e){e.exports=JSON.parse('{"message":{"home":"Основной","text-info":"Добро пожаловать на нашу новую платформу"}}')},"7f01":function(e,t,n){e.exports=n.p+"img/logo.711ae7c0.svg"},8226:function(e,t,n){},"84e7":function(e,t,n){},"877a":function(e,t,n){"use strict";n("5668")},a051:function(e,t){},c003:function(e,t,n){"use strict";n("8226")},d8fb:function(e,t,n){e.exports=n.p+"img/bg1.57804fc6.webp"},dfc6:function(e){e.exports=JSON.parse('{"message":{"home":"Գլխավոր","text-info":"Ողջունւմ ենք ձեզ մեր նոր հարտակում"}}')},edd4:function(e){e.exports=JSON.parse('{"message":{"home":"Home","text-info":"Welcome to our new floor"}}')},f78c:function(e,t,n){e.exports=n.p+"img/bg2.86d5c3e1.webp"}});
//# sourceMappingURL=app.54a5a056.js.map