(function(e){function t(t){for(var a,o,s=t[0],u=t[1],i=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"918f4f97"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"dd6f501e"}[e]+".css",r=u.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var i=c[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===r))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],l=i.getAttribute("data-href");if(l===a||l===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],b.parentNode.removeChild(b),n(c)},b.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue-pages/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var b=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02b8":function(e,t,n){e.exports=n.p+"img/bg3.d01e3caf.webp"},"1fb7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");function o(e,t,n,o,r,c){const s=Object(a["F"])("Header"),u=Object(a["F"])("router-view");return Object(a["y"])(),Object(a["f"])(a["a"],null,[Object(a["j"])(s),Object(a["j"])(u)],64)}const r={class:"header j-spc-btwn"},c={id:"nav",class:"df"};function s(e,t,n,o,s,u){const i=Object(a["F"])("router-link"),l=Object(a["F"])("LanguageSwitcher");return Object(a["y"])(),Object(a["f"])("div",r,[Object(a["g"])("div",c,[Object(a["j"])(i,{to:"/vue-pages"},{default:Object(a["O"])(()=>[Object(a["i"])(Object(a["J"])(e.$t("message.home")),1)]),_:1}),Object(a["i"])(" | "),Object(a["j"])(i,{to:"/about"},{default:Object(a["O"])(()=>[Object(a["i"])("About")]),_:1}),Object(a["i"])(" | "),Object(a["j"])(i,{to:"/test"},{default:Object(a["O"])(()=>[Object(a["i"])("test")]),_:1}),Object(a["i"])(" | ")]),Object(a["j"])(l)])}const u={class:"nav pr"},i={class:"nav__lng-text"},l={class:"nav__list tc dropdown"},d=["onClick"];function b(e,t,n,o,r,c){return Object(a["y"])(),Object(a["f"])("nav",u,[Object(a["g"])("button",{class:Object(a["r"])(["nav__globe df a-center",c.currentLanguageIcon]),onClick:t[0]||(t[0]=(...e)=>c.toggleDropdown&&c.toggleDropdown(...e))},[Object(a["g"])("span",i,Object(a["J"])(c.currentLanguageLabel),1)],2),Object(a["j"])(a["c"],{name:"dropdown-transition"},{default:Object(a["O"])(()=>[Object(a["P"])(Object(a["g"])("div",l,[(Object(a["y"])(!0),Object(a["f"])(a["a"],null,Object(a["E"])(r.languages,e=>(Object(a["y"])(),Object(a["f"])("button",{key:e.code,class:Object(a["r"])(["nav__lng-item db fs14",{active:e.code===c.currentLanguage,["icon-"+e.code]:!0}]),onClick:t=>c.changeLanguage(e.code)},Object(a["J"])(e.label),11,d))),128))],512),[[a["M"],r.isDropdownOpen]])]),_:1})])}var f={data(){return{isDropdownOpen:!1,languages:[{code:"hy",label:"Հայ"},{code:"ru",label:"Рус"},{code:"en",label:"Eng"}]}},computed:{currentLanguageLabel(){const e=this.languages.find(e=>e.code===this.currentLanguage);return e?e.label:"Language"},currentLanguage(){return this.$i18n.locale},currentLanguageIcon(){return"icon-"+this.currentLanguage}},methods:{changeLanguage(e){this.$i18n.locale=e,localStorage.setItem("language",e),this.isDropdownOpen=!1},toggleDropdown(){this.isDropdownOpen=!this.isDropdownOpen},handleDocumentClick(e){this.$el.contains(e.target)||(this.isDropdownOpen=!1)}},mounted(){document.addEventListener("click",this.handleDocumentClick)},beforeUnmount(){document.removeEventListener("click",this.handleDocumentClick)}},g=(n("fda3"),n("6b0d")),p=n.n(g);const h=p()(f,[["render",b]]);var m=h,v={components:{LanguageSwitcher:m},data(){return{}},methods:{changeLanguage(e){this.$i18n.locale=e}}};n("9eff");const O=p()(v,[["render",s]]);var j=O,y={components:{Header:j},data(){return{}},methods:{changeLanguage(e){this.$i18n.locale=e}}};const _=p()(y,[["render",o]]);var w=_,k=n("6605");const L=Object(a["h"])('<h2 class="home__header-title font-italiano" data-v-9ab43750> The <mark data-v-9ab43750>Perfect</mark> Baked Cake Everyday </h2><span class="font-italiano db fs30" data-v-9ab43750>“Where there is cake, there is hope.”</span><div class="home__soc-box" data-v-9ab43750><div class="home__soc-box-wrapper" data-v-9ab43750><a class="home__soc-link home__soc-link--fb" href="https://www.facebook.com/gevorg.gasparyan.7528/" target="_blank" aria-label="Facebook" data-v-9ab43750></a><a class="home__soc-link home__soc-link--ig" href="#" target="_blank" aria-label="Instagram" data-v-9ab43750></a><a class="home__soc-link home__soc-link--tg" href="#" target="_blank" aria-label="Telegram" data-v-9ab43750></a></div></div>',3),x=[L];function S(e,t,n,o,r,c){return Object(a["y"])(),Object(a["f"])("div",{class:"home",style:Object(a["s"])({backgroundImage:"url("+o.currentImage+")"})},x,4)}var D=n("d8fb"),C=n.n(D),E=n("f78c"),I=n.n(E),P=n("02b8"),T=n.n(P),A={name:"Home",setup(){const e=[C.a,I.a,T.a],t=Object(a["D"])(e[0]);let n;const o=()=>{const n=e[Math.floor(Math.random()*e.length)];t.value=n,document.querySelector(".home").classList.add("transitioning"),setTimeout(()=>{document.querySelector(".home").classList.remove("transitioning")},1e3)};return Object(a["w"])(()=>{o(),n=setInterval(o,1e4)}),Object(a["x"])(()=>{clearInterval(n)}),{currentImage:t}}};n("add6");const J=p()(A,[["render",S],["__scopeId","data-v-9ab43750"]]);var N=J;const M=[{path:"/vue-pages",name:"Home",component:N},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))},{path:"/test",name:"Test",component:()=>n.e("about").then(n.bind(null,"78c1"))}],$=Object(k["a"])({history:Object(k["b"])(),routes:M});var F=$,H=n("5502"),q=Object(H["a"])({state:{},mutations:{},actions:{},modules:{}}),B=n("9ca6"),U=n("edd4"),W=n("7704"),K=n("dfc6");const Q={en:U,ru:W,hy:K},z=localStorage.getItem("language")||"hy",G=Object(B["a"])({locale:z,fallbackLocale:"hy",messages:Q});var R=G,V=n("1157"),X=n.n(V),Y=n("a051"),Z=n.n(Y);window.$=X.a,window.jQuery=X.a;const ee=Object(a["e"])(w);ee.use(q),ee.use(Z.a),ee.use(F),ee.use(R),ee.mount("#app")},7704:function(e){e.exports=JSON.parse('{"message":{"home":"Основной","text-info":"Добро пожаловать на нашу новую платформу"}}')},"79e5":function(e,t,n){},"9eff":function(e,t,n){"use strict";n("79e5")},a051:function(e,t){},add6:function(e,t,n){"use strict";n("f164")},d8fb:function(e,t,n){e.exports=n.p+"img/bg1.57804fc6.webp"},dfc6:function(e){e.exports=JSON.parse('{"message":{"home":"Գլխավոր","text-info":"Ողջունւմ ենք ձեզ մեր նոր հարտակում"}}')},edd4:function(e){e.exports=JSON.parse('{"message":{"home":"Home","text-info":"Welcome to our new floor"}}')},f164:function(e,t,n){},f78c:function(e,t,n){e.exports=n.p+"img/bg2.86d5c3e1.webp"},fda3:function(e,t,n){"use strict";n("1fb7")}});
//# sourceMappingURL=app.09b7cd6e.js.map