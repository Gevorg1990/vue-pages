(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72c89820"],{7914:function(e,t,a){},9048:function(e,t,a){"use strict";a("7914")},"9a9d":function(e,t,a){"use strict";a.r(t);var r=a("7a23");const s={class:"tart cake center df f-dir-clmn j-spc-btwn",style:{"padding-top":"150px","min-height":"100vh"}},o={id:"comments",class:""},n={class:"avatar-box"},c=["src"],i={key:0,class:"avatar-picker"},l=["onClick"],m=["src","alt"],d={key:0,class:"error"},g={class:"input__box"},h={key:0,class:"error"},b={class:"editable-div-box"},u={class:"editable-div-box-wrapper"},v={key:0,class:"error"},p={class:"character-count",style:{color:"black"}},j={class:"text-length"},O={class:"emoji-picker"},f={key:0,class:"emoji-list"},k=["onClick"],E=["src","alt"],C={class:"stars"},N=["onMouseover","onClick"],w={key:0,class:"pr"},y={class:"item__name fs28"},P={class:"tabs"},A=["onClick"],V={class:"tab-content"},B={class:"tab-content__img-box pr"},T=["src","alt"],S=["data-target"],R={key:0,class:"info-save"};function M(e,t,a,M,x,I){const D=Object(r["resolveComponent"])("AnimatedButton"),L=Object(r["resolveComponent"])("SuccessModal"),$=Object(r["resolveComponent"])("Count");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",s,[Object(r["createElementVNode"])("div",o,[Object(r["createVNode"])(D,{notifyParent:I.openModal},null,8,["notifyParent"]),Object(r["createVNode"])(L,{isSuccessModalOpen:x.isSuccessModalOpen,onCloseModal:I.closeModal},null,8,["isSuccessModalOpen","onCloseModal"]),Object(r["createVNode"])(r["Transition"],{name:"modal-fade"},{default:Object(r["withCtx"])(()=>[x.isModalOpen?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:0,class:"modal",onClick:t[13]||(t[13]=(...e)=>I.handleClickOutside&&I.handleClickOutside(...e))},[Object(r["createElementVNode"])("div",{class:"modal-content",onClick:t[12]||(t[12]=Object(r["withModifiers"])(()=>{},["stop"])),ref:"modalContent"},[Object(r["createElementVNode"])("span",{class:"close",onClick:t[0]||(t[0]=(...e)=>I.closeModal&&I.closeModal(...e))},"×"),Object(r["createElementVNode"])("form",{onSubmit:t[11]||(t[11]=Object(r["withModifiers"])((...e)=>I.addComment&&I.addComment(...e),["prevent"]))},[Object(r["createElementVNode"])("div",{class:"img-box-file",onMouseleave:t[5]||(t[5]=e=>x.showAvatarPicker=!1)},[Object(r["createElementVNode"])("div",n,[Object(r["createElementVNode"])("input",{type:"file",onChange:t[1]||(t[1]=(...e)=>I.handleFileChange&&I.handleFileChange(...e)),id:"file",name:"avatar",accept:"image/*",style:{display:"none"}},null,32),Object(r["createElementVNode"])("label",{for:"file",style:{cursor:"pointer",poition:"relative"},onMouseover:t[2]||(t[2]=e=>x.showAvatarPicker=!0)},[Object(r["createElementVNode"])("img",{src:x.avatarPreview||"avatars-img/avatar-default.png",alt:"avatar",class:"avatar"},null,8,c),x.showAvatarPicker?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",i,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(x.avatars,e=>(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:e.src,onClick:Object(r["withModifiers"])(t=>I.selectAvatar(e),["stop","prevent"]),class:"avatar-item"},[Object(r["createElementVNode"])("img",{src:e.src,alt:e.alt,class:"avatar-preview"},null,8,m)],8,l))),128))])):Object(r["createCommentVNode"])("",!0)],32),x.avatarError?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",d)):Object(r["createCommentVNode"])("",!0)]),Object(r["createElementVNode"])("div",g,[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{class:"input__name",type:"text",onInput:t[3]||(t[3]=(...e)=>I.handleNameInput&&I.handleNameInput(...e)),"onUpdate:modelValue":t[4]||(t[4]=e=>x.userName=e),placeholder:"Your Name"},null,544),[[r["vModelText"],x.userName]]),x.nameError?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",h,Object(r["toDisplayString"])(x.nameError),1)):Object(r["createCommentVNode"])("",!0)])],32),Object(r["createElementVNode"])("div",b,[Object(r["createElementVNode"])("div",u,[Object(r["createElementVNode"])("div",{class:"editable-div",contenteditable:"true",ref:"editableDiv",onInput:t[6]||(t[6]=(...e)=>I.handleCommentInput&&I.handleCommentInput(...e)),"data-placeholder":"Type your comment here...",onKeydown:t[7]||(t[7]=(...e)=>I.limitTextLength&&I.limitTextLength(...e)),onFocus:t[8]||(t[8]=e=>x.showPicker=!1)},null,544),x.commentError?(Object(r["openBlock"])(),Object(r["createElementBlock"])("span",v,Object(r["toDisplayString"])(x.commentError),1)):Object(r["createCommentVNode"])("",!0)]),Object(r["createElementVNode"])("div",p,[Object(r["createElementVNode"])("span",j,Object(r["toDisplayString"])(x.commentLength),1),t[15]||(t[15]=Object(r["createTextVNode"])("/300"))]),Object(r["createElementVNode"])("div",O,[Object(r["createElementVNode"])("button",{onClick:t[9]||(t[9]=(...e)=>I.togglePicker&&I.togglePicker(...e)),type:"button"},t[16]||(t[16]=[Object(r["createElementVNode"])("img",{src:"emojis/1.gif",alt:"🤩"},null,-1)])),x.showPicker?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",f,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(x.emojis,e=>(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{key:e.src,onClick:t=>I.selectEmoji(e),class:"emoji-item"},[Object(r["createElementVNode"])("img",{src:e.src,alt:e.alt},null,8,E)],8,k))),128))])):Object(r["createCommentVNode"])("",!0)])]),Object(r["createElementVNode"])("div",C,[(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(5,e=>Object(r["createElementVNode"])("span",{key:e,class:Object(r["normalizeClass"])(["star",{filled:e<=x.tempRating,empty:e>x.tempRating}]),onMouseover:t=>I.hoverRating(e),onMouseleave:t[10]||(t[10]=(...e)=>I.resetRating&&I.resetRating(...e)),onClick:t=>I.setRating(e)}," ★ ",42,N)),64))]),t[17]||(t[17]=Object(r["createElementVNode"])("button",{class:"btn btn--submit",type:"submit"},"Add Comment",-1))],32)],512)])):Object(r["createCommentVNode"])("",!0)]),_:1})]),M.item?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",w,[Object(r["createElementVNode"])("h3",y,Object(r["toDisplayString"])(M.item.name),1),Object(r["createElementVNode"])("div",P,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(M.item.images,(e,t)=>(Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{class:Object(r["normalizeClass"])(["tab-btn",{active:M.selectedTab===t+1}]),key:t,ref_for:!0,ref:"tabButton",onClick:e=>M.changeTab(t,M.item.count[t])},Object(r["toDisplayString"])(M.item.sort[t]),11,A))),128))]),Object(r["createElementVNode"])("div",V,[Object(r["createElementVNode"])("figure",B,[Object(r["createElementVNode"])("img",{src:M.item.images[M.selectedTab-1].src,alt:"Image "+(M.selectedTab+1)},null,8,T),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(M.item.images,(e,a)=>(Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{class:Object(r["normalizeClass"])(["btn btn--save pa",{hide:M.selectedTab!==a+1}]),key:a,ref_for:!0,ref:"saveButton","data-target":M.item.sort[a],onClick:t[14]||(t[14]=e=>I.saveItem(e))},t[18]||(t[18]=[Object(r["createStaticVNode"])('<svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" stroke="#c21919"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>',1)]),10,S))),128))]),Object(r["createVNode"])(r["Transition"],{name:"fade"},{default:Object(r["withCtx"])(()=>[x.saved?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",R," Item is saved successfully in wishlist ")):Object(r["createCommentVNode"])("",!0)]),_:1}),Object(r["createElementVNode"])("p",null,Object(r["toDisplayString"])(M.item.sort[M.selectedTab-1]),1)])])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])($,{buyNumber:M.buyNumber},null,8,["buyNumber"])])}a("d9e2"),a("14d9"),a("88a7"),a("271a"),a("5494");var x=a("6605"),I=a("5502"),D=a("a3c9"),L=a("9225"),F=a("ec26"),_=a("a42b"),U=a("0165"),J=a("6513");function z(e){const t="; "+document.cookie,a=t.split(`; ${e}=`);if(2===a.length)return a.pop().split(";").shift()}function G(e,t,a){let r="";if(a){const e=new Date;e.setTime(e.getTime()+24*a*60*60*1e3),r=`expires=${e.toUTCString()};`}document.cookie=`${e}=${t}; ${r}path=/`}var q={components:{SuccessModal:J["a"],AnimatedButton:_["a"],Count:U["a"]},setup(){const e=Object(D["a"])(),t=Object(I["b"])(),a=Object(x["c"])(),s=Object(x["d"])(),o=Object(r["ref"])(null),n=Object(r["ref"])(Number(a.query.tab)||1),c=Object(r["computed"])(()=>{const e=l.value.find(e=>{var t;return e.id===(null===(t=o.value)||void 0===t?void 0:t.id)});return e?e.count.map(Number):[1]}),i=Object(r["computed"])(()=>{const e=n.value-1;return void 0!==c.value[e]?c.value[e]:1}),l=Object(r["computed"])(()=>t.getters.itemsTartalet.map(e=>({...e,name:L["a"].global.t(e.nameKey),des:Array.isArray(e.des)?e.des.map(e=>L["a"].global.t(e)):[L["a"].global.t(e.des)],sort:Array.isArray(e.sort)?e.sort.map(e=>L["a"].global.t(e)):[L["a"].global.t(e.sort)]}))),m=()=>{const e=a.params.id;o.value=l.value.find(t=>t.id===Number(e))};Object(r["watchEffect"])(m),Object(r["watchEffect"])(()=>{n.value=Number(a.query.tab)||1});const d=(e,t)=>{n.value=e+1,s.push({query:{tab:e+1}})};return{items:l,item:o,selectedTab:n,changeTab:d,buyNumber:i,globalStore:e}},data(){return{saved:!1,pageId:"tartalet/"+this.item.id,globalRating:5,tempRating:5,comments:[],isActive:!1,commentCount:0,averageRating:0,frontUserId:z("frontUserId")||Object(F["a"])(),showPicker:!1,isModalOpen:!1,emojis:[{src:"emojis/1.gif",alt:"🤩"},{src:"emojis/2.gif",alt:"🥳"},{src:"emojis/3.gif",alt:"🥰"},{src:"emojis/4.gif",alt:"😃"},{src:"emojis/5.gif",alt:"🎂"},{src:"emojis/7.gif",alt:"🤯"},{src:"emojis/6.gif",alt:"🪩"},{src:"emojis/8.gif",alt:"🌟"},{src:"emojis/9.gif",alt:"👏"},{src:"emojis/10.gif",alt:"👍"},{src:"emojis/11.gif",alt:"🎁"},{src:"emojis/12.gif",alt:"🎉"},{src:"emojis/13.gif",alt:"💥"},{src:"emojis/14.gif",alt:"🐝"},{src:"emojis/15.gif",alt:"🎯"},{src:"emojis/16.gif",alt:"❣"}],showAvatarPicker:!1,avatars:[{src:"avatars-img/avatar1.png",alt:"Avatar 1"},{src:"avatars-img/avatar2.png",alt:"Avatar 2"},{src:"avatars-img/avatar3.png",alt:"Avatar 3"},{src:"avatars-img/avatar4.png",alt:"Avatar 4"},{src:"avatars-img/avatar5.png",alt:"Avatar 5"},{src:"avatars-img/avatar6.png",alt:"Avatar 6"},{src:"avatars-img/avatar7.png",alt:"Avatar 7"},{src:"avatars-img/avatar8.png",alt:"Avatar 8"},{src:"avatars-img/avatar9.png",alt:"Avatar 9"},{src:"avatars-img/avatar10.png",alt:"Avatar 10"},{src:"avatars-img/avatar11.png",alt:"Avatar 11"},{src:"avatars-img/avatar12.png",alt:"Avatar 12"}],userAvatar:null,avatarPreview:"",userName:"",nameError:"",commentError:"",avatarError:"",commentText:"",commentLength:0,maxCommentLength:300,targets:[],isSuccessModalOpen:!1}},computed:{totalPages(){return Math.ceil(this.comments.length/this.commentsPerPage)},paginatedComments(){const e=(this.currentPage-1)*this.commentsPerPage,t=e+this.commentsPerPage;return this.comments.slice(e,t)},visiblePages(){const e=[];let t,a;this.totalPages<=5?(t=1,a=this.totalPages):this.currentPage<=3?(t=1,a=5):this.currentPage+2>=this.totalPages?(t=this.totalPages-4,a=this.totalPages):(t=this.currentPage-2,a=this.currentPage+2);for(let r=t;r<=a;r++)e.push(r);return e},showFirstEllipsis(){return this.totalPages>5&&this.currentPage>4},showLastEllipsis(){return this.totalPages>5&&this.currentPage<this.totalPages-3}},methods:{async saveItem(e){const t=e.target.closest("button"),a=t.getAttribute("data-target"),r=JSON.parse(localStorage.getItem("data-target"))||[];r.includes(a)||(r.push(a),localStorage.setItem("data-target",JSON.stringify(r))),this.saved=!0,setTimeout(()=>this.saved=!1,3e3),t.setAttribute("active","true");const s=this.item.images[this.selectedTab-1],o=this.item.sort[this.selectedTab-1],n=this.item.count[this.selectedTab-1],c=this.item.min[this.selectedTab-1],i=this.item.max[this.selectedTab-1],l={id:Date.now(),image:s.src,description:o,count:n,min:c,max:i};try{const e=await fetch("http://localhost:3000/items",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(!e.ok)throw new Error("Failed to save active tab content");const t=await e.json();console.log("Save successful:",t),this.globalStore.getitemsLangth()}catch(m){console.error("Error saving active tab content:",m)}},handleCommentInput(){this.commentText=this.$refs.editableDiv.innerText,this.commentLength=this.commentText.length+$(".editable-div").find("img").length,this.clearCommentError()},limitTextLength(e){this.commentLength>=this.maxCommentLength&&"Backspace"!==e.key&&"Delete"!==e.key?($(".text-length").addClass("anim"),e.preventDefault()):$(".text-length").removeClass("anim")},clearNameError(){this.nameError=""},clearCommentError(){this.commentError=""},clearAvatarError(){this.avatarError=""},handleFileChange(e){const t=e.target.files[0];t&&(t.type.startsWith("image/")?(this.userAvatar=t,this.avatarPreview=URL.createObjectURL(t),this.clearAvatarError()):(alert("Please select a valid image file."),this.userAvatar=null,this.avatarPreview="avatars-img/avatar-default.png",this.avatarError="Invalid image file."))},selectAvatar(e){this.userAvatar=e.src,this.avatarPreview=e.src,this.clearAvatarError(),this.showAvatarPicker=!1},handleNameInput(){const e=event.target.value;/[^a-zA-Z\s]/.test(e)&&(this.userName=e.replace(/[^a-zA-Z\s]/g,"")),this.clearNameError()},async addComment(){this.nameError="",this.commentError="",this.avatarError="";const e=this.$refs.editableDiv.innerHTML.trim();if(this.userName||(this.nameError=this.$t("error-message.name")),e||(this.commentError=this.$t("error-message.comment")),this.userAvatar||(this.avatarError="Avatar is required."),this.userName&&e&&this.userAvatar)try{const t=new FormData;t.append("text",e),t.append("rating",this.globalRating),t.append("userId",this.frontUserId),t.append("name",this.userName),t.append("pageId",this.pageId),t.append("selectedTab",this.selectedTab),(this.userAvatar instanceof File||this.userAvatar)&&t.append("avatar",this.userAvatar);const a=await fetch("http://localhost:3000/comments",{method:"POST",body:t});if(!a.ok)throw new Error("Failed to add comment");this.$refs.editableDiv.innerHTML="",this.userName="",this.userAvatar=null,this.avatarPreview="avatars-img/avatar-default.png",this.closeModal(),await this.fetchComments(),this.currentPage=this.totalPages,this.isSuccessModalOpen=!0}catch(t){console.error("Error adding comment:",t),alert("Error adding comment: "+t.message)}},closeSuccessModal(){this.isSuccessModalOpen=!1},async fetchComments(){try{const e=await fetch("http://localhost:3000/comments");if(!e.ok)throw new Error("Failed to fetch comments");const t=await e.json();this.comments=t.comments,this.globalRating=this.globalRating||t.globalRating,this.tempRating=this.globalRating,this.commentCount=t.comments.length,this.averageRating=t.averageRating||0,this.currentPage>this.totalPages&&(this.currentPage=this.totalPages)}catch(e){console.error("Error fetching comments:",e)}},async saveGlobalRating(){try{const e=await fetch("http://localhost:3000/global-rating",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rating:this.globalRating})});if(!e.ok)throw new Error("Failed to save global rating");await this.fetchComments()}catch(e){console.error("Error saving global rating:",e)}},setRating(e){this.globalRating=e,this.saveGlobalRating()},hoverRating(e){this.tempRating=e},resetRating(){this.tempRating=this.globalRating},togglePicker(){this.showPicker=!this.showPicker},selectEmoji(e){const t=this.$refs.editableDiv,a=document.createRange(),r=window.getSelection();if(this.commentLength>=300)return $(".text-length").addClass("anim"),void setTimeout(()=>this.showPicker=!1,1e3);t.focus(),r.rangeCount>0?(a.setStart(r.getRangeAt(0).startContainer,r.getRangeAt(0).startOffset),a.collapse(!0)):(a.setStart(t,0),a.collapse(!0));const s=`<img style="vertical-align: middle; width: 20px; margin: 0 2px;" src="${e.src}" alt="${e.alt}" />`,o=(new DOMParser).parseFromString(s,"text/html").body.firstChild;t.contains(a.startContainer)&&(a.deleteContents(),a.insertNode(o),a.setStartAfter(o),a.collapse(!0),r.removeAllRanges(),r.addRange(a),t.focus()),this.handleCommentInput(),this.showPicker=!1},handleClickOutside(e){this.$refs.modalContent.contains(e.target)||this.closeModal()},openModal(){this.isModalOpen=!0},closeModal(){this.isModalOpen=!1,this.showPicker=!1,this.userName="",this.globalRating=5,this.tempRating=5,this.avatarPreview="avatars-img/avatar-default.png",this.isSuccessModalOpen=!1},formatDate(e){const t=new Date(e);return isNaN(t.getTime())?"Invalid Date":t.toLocaleDateString()}},mounted(){z("frontUserId")||G("frontUserId",this.frontUserId,365),this.fetchComments().then(()=>{this.currentPage=1});const e=JSON.parse(localStorage.getItem("data-target"))||[];this.storedTargets=e;const t=this.$refs.saveButton;t.forEach(e=>{const t=e.getAttribute("data-target");this.storedTargets.includes(t)&&e.setAttribute("active","true")})}},Z=(a("9048"),a("d959")),H=a.n(Z);const K=H()(q,[["render",M]]);t["default"]=K}}]);
//# sourceMappingURL=chunk-72c89820.2bf2379b.js.map