(this["webpackJsonpbaby-book"]=this["webpackJsonpbaby-book"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(29),r=a.n(n),o=(a(37),a(38),a(10)),i=a(6),l=a(4),b=a(21),d=(a(49),a(39),a(50),b.a.initializeApp({apiKey:"AIzaSyDfS6glxj5hdnEq8_xRY6aseIVbQkp7wi4",authDomain:"babybook-5abd5.firebaseapp.com",projectId:"babybook-5abd5",storageBucket:"babybook-5abd5.appspot.com",messagingSenderId:"880031780712",appId:"1:880031780712:web:109ffc9e896dc36dd190dd",measurementId:"G-5XFM74Q419"}));b.a.analytics();var u=d.auth(),j=b.a.firestore(),m=d,h=a(1),p=s.a.createContext();function O(){return Object(c.useContext)(p)}function x(e){var t=e.children,a=Object(c.useState)(""),s=Object(l.a)(a,2),n=s[0],r=s[1],o=Object(c.useState)(!0),i=Object(l.a)(o,2),b=i[0],d=i[1];Object(c.useEffect)((function(){return u.onAuthStateChanged((function(e){r(e),d(!1)}))}),[]);var j={currentUser:n,signup:function(e,t){return u.createUserWithEmailAndPassword(e,t)},login:function(e,t){return u.signInWithEmailAndPassword(e,t)},logout:function(){return u.signOut()},updateEmail:function(e){return n.updateEmail(e)},updatePassword:function(e){return n.updatePassword(e)}};return Object(h.jsxs)(p.Provider,{value:j,children:[" ",!b&&t]})}var f=a(22),g=a(32);var v=function(e){var t=e.component,a=Object(g.a)(e,["component"]),c=O().currentUser;return Object(h.jsx)(i.b,Object(f.a)(Object(f.a)({},a),{},{render:function(e){return c?Object(h.jsx)(t,Object(f.a)({},e)):Object(h.jsx)(i.a,{to:"/babybook"})}}))},N=a(7),y=a.n(N),w=a(13);var k=function(){return Object(h.jsx)("footer",{className:"footer",children:" \xa9 BabyBook 2021 "})},S=a.p+"static/media/Cloud.c26d84c0.png",C=a.p+"static/media/open-book.310a4d62.png";var D=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=O().login,s=Object(c.useState)(""),n=Object(l.a)(s,2),r=n[0],b=n[1],d=Object(c.useState)(!1),u=Object(l.a)(d,2),j=(u[0],u[1]),m=Object(i.g)();function p(){return(p=Object(w.a)(y.a.mark((function c(s){return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s.preventDefault(),c.prev=1,b(""),j(!0),c.next=6,a(e.current.value,t.current.value);case 6:m.push("/profile"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),b("Failed to log in");case 12:j(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(h.jsxs)("div",{id:"landing",children:[r&&Object(h.jsx)("div",{className:"alert alert-danger",role:"alert",children:r}),Object(h.jsxs)("form",{onSubmit:function(e){return p.apply(this,arguments)},children:[Object(h.jsx)("div",{className:"mb-3 d-inline-flex p-2",children:Object(h.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",required:!0,ref:e,name:"email",placeholder:"EMAIL"})}),Object(h.jsx)("div",{className:"mb-3 d-inline-flex p-2",children:Object(h.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",ref:t,required:!0,name:"password",placeholder:"PASSWORD"})}),Object(h.jsx)("button",{id:"login-button",type:"submit",className:"btn btn-primary",children:Object(h.jsx)("i",{className:"fas fa-sign-in-alt"})})]}),Object(h.jsx)("img",{src:S,alt:"cloud",id:"cloud"}),Object(h.jsx)("h1",{className:"landing-header container-fluid",children:"Virtual Baby Book"})," ",Object(h.jsx)("button",{id:"register-link",className:"container-fluid",children:Object(h.jsx)(o.b,{to:"https://kchasepdx.github.io/babybook/#/register",children:"Register Now"})}),Object(h.jsx)("img",{src:C,alt:"book image",id:"book-img"}),Object(h.jsx)("div",{id:"rainbow-div"}),Object(h.jsx)(k,{})]})},E=a.p+"static/media/onesie.cde6736f.png",U=a.p+"static/media/pacifier.6f179ff2.png",_=a.p+"static/media/teddy-bear.8acb32bd.png",B=a.p+"static/media/rubber-duck.6696b333.png";var I=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),s=O().signup,n=Object(c.useState)(""),r=Object(l.a)(n,2),b=r[0],d=r[1],u=Object(c.useState)(!1),j=Object(l.a)(u,2),m=j[0],p=j[1],x=Object(i.g)();function f(){return(f=Object(w.a)(y.a.mark((function c(n){return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(n.preventDefault(),t.current.value===a.current.value){c.next=3;break}return c.abrupt("return",d("Passwords do not match"));case 3:return c.prev=3,d(""),p(!0),c.next=9,s(e.current.value,t.current.value);case 9:x.push("/profile"),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(3),d("Failed to create an account");case 15:p(!1);case 16:case"end":return c.stop()}}),c,null,[[3,12]])})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"Register container-fluid",children:[Object(h.jsx)("img",{id:"onesie",className:"reg-images",src:E,alt:"cartoon onesie"}),Object(h.jsx)("img",{id:"pacifier",className:"reg-images",src:U,alt:"cartoon pacifier"}),Object(h.jsx)("img",{id:"teddy-bear",className:"reg-images",src:_,alt:"cartoon teddy bear"}),Object(h.jsx)("img",{id:"rubber-duck",className:"reg-images",src:B,alt:"cartoon rubber duck"}),Object(h.jsx)("h1",{className:"register-header",children:" New Account?"}),b&&Object(h.jsx)("div",{className:"alert alert-danger",role:"alert",children:b}),Object(h.jsx)("form",{onSubmit:function(e){return f.apply(this,arguments)},className:"registration-box",children:Object(h.jsxs)("div",{className:"form-group",id:"reg-form-div",children:[Object(h.jsx)("div",{className:"form-group-row ",children:Object(h.jsx)("input",{type:"text",name:"email",placeholder:"email address",autoFocus:!0,ref:e,className:"register-input form-control",required:!0})}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"form-group-row",children:[Object(h.jsx)("input",{type:"password",name:"password",placeholder:"password",required:!0,ref:t,className:"register-input form-control"}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{className:"form-group-row",children:[Object(h.jsx)("input",{type:"password",name:"passwordConfirm",placeholder:"confirm password",required:!0,ref:a,className:"register-input form-control"}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("button",{disabled:m,className:"register-button",type:"submit",value:"Register",children:[" ","Sign Up"," "]}),Object(h.jsx)("button",{id:"register-link-reg",children:Object(h.jsx)(o.b,{to:"babybook/",children:"Already have an account?"})})]})})]})},F=a.p+"static/media/baby-boy.b604a341.png";var P=function(e){var t=Object(i.g)(),a=O().logout,s=Object(c.useState)(""),n=Object(l.a)(s,2),r=(n[0],n[1]),o=Object(c.useState)(""),b=Object(l.a)(o,2),d=b[0],u=b[1],j=Object(c.useState)(!1),p=Object(l.a)(j,2),x=p[0],f=p[1],g=m.auth().currentUser.displayName;function v(){return N.apply(this,arguments)}function N(){return(N=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,r(""),e.next=5,a();case 5:t.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r("failed to log out");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function k(){f(!x)}return Object(c.useEffect)((function(){u(document.URL.substr(document.URL.lastIndexOf("/")))}),[]),Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("nav",{id:"full-navbar",className:"navbar fixed-top",children:Object(h.jsxs)("div",{className:"container-fluid ".concat(g&&"nav-with-user"),children:["/profile"===d?Object(h.jsx)("a",{className:"current-nav navbar-brand",href:"/profile",children:"Home"}):Object(h.jsx)("a",{className:"navbar-brand",href:"/profile",children:"Home"}),"/community"===d?Object(h.jsx)("a",{className:"navbar-brand current-nav",href:"/community",children:"Community"}):Object(h.jsx)("a",{className:"navbar-brand ",href:"/community",children:"Community"}),Object(h.jsxs)("li",{class:"nav-item dropdown",children:["/book"===d?Object(h.jsx)("a",{class:"nav-link dropdown-toggle current-nav",id:"navbarDropdown",role:"button",dataToggle:"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:k,children:"My Book"}):Object(h.jsx)("a",{class:"nav-link dropdown-toggle navbar-brand",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:k,children:"My Book"}),x&&Object(h.jsxs)("div",{id:"dropdown-main-menu",className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[Object(h.jsx)("a",{class:"drop-brand drop-main",href:"/book",children:"View Book"}),Object(h.jsx)("a",{class:"drop-brand drop-main",href:"/questionnaire",children:"Edit"})]})]}),Object(h.jsxs)("a",{onClick:v,className:"navbar-brand user-name-nav",children:[g&&Object(h.jsx)("span",{style:{color:"#b3e988"},children:g})," ","Logout"]})]})}),Object(h.jsxs)("div",{className:"dropdown navbar-phone",children:[Object(h.jsx)("button",{className:"btn btn-secondary dropdown-toggle dropdown-toggle-split menu-btn",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:Object(h.jsx)("i",{class:"fas fa-bars"})}),Object(h.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"dropdown-item",href:"/profile",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"dropdown-item",href:"/book",children:"My Book"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"dropdown-item",href:"/community",children:"Community"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"dropdown-item",onClick:v,children:"Logout"})})]})]})]})};var M=function(e){var t=new Date,a=new Date(e+" 00:");return a.getDate()<=t.getDate()?t.getMonth()-a.getMonth()+12*(t.getFullYear()-a.getFullYear()):t.getMonth()-1-a.getMonth()+12*(t.getFullYear()-a.getFullYear())};var T=function(){var e,t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],n=(a[1],m.auth().currentUser),r=Object(c.useState)(""),i=Object(l.a)(r,2),b=i[0],d=i[1],u=Object(c.useState)(""),p=Object(l.a)(u,2),O=p[0],x=p[1],f=Object(c.useState)(""),g=Object(l.a)(f,2),v=g[0],N=g[1];null!=n&&(e=n.uid),j.collection("Users").doc(e).get().then((function(e){if(e.exists){var t=e.data();d(t.baby_name.babyName),x(t.date_of_birth.babyBDay),N(n.photoURL)}else console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}));var y=M(O),w=new Date(O+" 00:"),S=(new Date).getFullYear()-w.getFullYear();return Object(h.jsxs)("div",{children:[Object(h.jsx)(P,{}),s&&Object(h.jsx)("small",{children:s}),Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsxs)("div",{className:"profile-container",children:[""===b||""===O?Object(h.jsx)("h1",{className:"h1 profile-header",children:"Welcome!"}):y>=24?Object(h.jsxs)("h1",{className:"h1 profile-header",children:[b," is ",S," years old!"]}):Object(h.jsxs)("h1",{className:"h1 profile-header",children:[b," is"," ",Object(h.jsxs)("span",{style:{color:"#c1a1d3"},children:[y," months"]})," ","old!"]}),Object(h.jsx)("img",{className:"baby img-fluid",src:v||F,alt:"cartoon baby"}),Object(h.jsx)("div",{className:"view-book",children:Object(h.jsx)(o.b,{to:"/babybook/book",children:Object(h.jsx)("button",{className:"prof-btn",id:"book-button",children:Object(h.jsx)("h2",{children:"View My Book"})})})}),Object(h.jsx)("div",{className:"update-book",children:Object(h.jsx)(o.b,{to:"/babybook/questionnaire",children:Object(h.jsx)("button",{className:"prof-btn",id:"update-button",children:Object(h.jsx)("h2",{children:"Update My Book"})})})}),Object(h.jsx)("div",{className:"community",children:Object(h.jsx)(o.b,{to:"/babybook/community",children:Object(h.jsx)("button",{className:"prof-btn",id:"comm-button",children:Object(h.jsx)("h2",{children:"Community"})})})})]}),Object(h.jsx)(k,{})]})]})},R=a.p+"static/media/conversation.55309667.png";var q=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],n=a[1],r=e.content.length;return Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)("div",{className:"card",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:e.title}),Object(h.jsx)("h4",{className:"card-subtitle user-name-comment ",children:e.user}),s===e.id?Object(h.jsx)("p",{className:"card-text",children:e.content}):Object(h.jsx)("p",{className:"card-text text-overflow",children:e.content}),Object(h.jsx)(o.b,{to:"/post/".concat(e.id),children:Object(h.jsx)("button",{className:"btn btn-primary card-button ",children:"View Full Post"})}),r>115?Object(h.jsx)("a",{onClick:function(t){!function(e,t){t.preventDefault(),n(s===e?"":e)}(e.id,t)},href:"#",className:"btn btn-full-post",children:s===e.id?Object(h.jsx)("i",{className:"fas fa-angle-double-up"}):Object(h.jsx)("i",{className:"fas fa-angle-double-down"})}):null]})})})};var A=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],s=t[1],n=[],r=Object(c.useState)(""),i=Object(l.a)(r,2),b=i[0],d=i[1];function u(e,t){d(b===e?"":e)}return Object(c.useEffect)(Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.collection("Posts"),e.next=3,t.get().then((function(e){e.forEach((function(e){var t={id:e.id,data:e.data()};n.push(t)})),s(n),console.log(n)}));case 3:case"end":return e.stop()}}),e)}))),[]),Object(h.jsxs)("div",{className:"Community container-fluid",children:[Object(h.jsx)(P,{}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h1",{id:"community-header",children:[Object(h.jsx)("img",{id:"conversation",src:R,alt:"two cartoon people chatting"}),"Community"]}),Object(h.jsx)("p",{id:"community-tagline",children:"Share Your Highs and Lows"}),Object(h.jsx)("p",{id:"post-add",children:Object(h.jsx)(o.b,{to:"/babybook/post",children:Object(h.jsx)("i",{class:"far fa-edit"})})}),Object(h.jsx)("div",{className:"row posts",children:a&&a.map((function(e,t){return Object(h.jsx)(q,{id:a[t].id,title:e.data.post.post.Title,content:e.data.post.post.Content,user:e.data.post.post.userName,handleComment:u},t)}))})]}),Object(h.jsx)(k,{})]})};var L=function(){var e,t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(""),o=Object(l.a)(r,2),b=o[0],d=o[1],u=Object(c.useState)(""),p=Object(l.a)(u,2),O=p[0],x=p[1],f=Object(c.useState)(""),g=Object(l.a)(f,2),v=g[0],N=g[1],y=Object(c.useState)(""),w=Object(l.a)(y,2),k=w[0],S=w[1],C=Object(c.useState)(""),D=Object(l.a)(C,2),E=D[0],U=D[1],_=Object(c.useState)(""),B=Object(l.a)(_,2),I=B[0],F=B[1],M=Object(c.useState)(""),T=Object(l.a)(M,2),R=T[0],q=T[1],A=m.auth().currentUser,L=Object(i.g)(),W=A.displayName;return null!=A&&(e=A.uid),Object(c.useEffect)((function(){null!=A&&(e=A.uid),j.collection("Users").doc(e).get().then((function(t){if(t.exists){var a=t.data();n(a.baby_name.babyName||""),d(a.date_of_birth.babyBDay||""),x(a.birth_weight.birthWeight||""),N(a.take_home_outfit.takeHomeOutfit||""),S(a.birth_story.birthStory||""),U(a.fav_songs.favSongs||""),F(A.displayName||""),q(A.photoURL||"")}else console.log("No such document!"),console.log(e),console.log(W)})).catch((function(e){console.log("Error getting document:",e)}))}),[]),Object(h.jsxs)("div",{className:"Questionnaire",children:[Object(h.jsx)(P,{}),Object(h.jsxs)("div",{className:"white-box-quest",children:[Object(h.jsx)("h1",{id:"quest-header",children:" Questionnaire"}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"User Name"}),Object(h.jsx)("input",{type:"text",className:"form-control answer-box","aria-label":"Username","aria-describedby":"basic-addon1",onChange:function(e){F(e.target.value)},name:"userpost",rows:"1",cols:"100",value:I,placeholder:"User Name"})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Photo URL"}),Object(h.jsx)("input",{type:"text",className:"form-control answer-box","aria-label":"Photo","aria-describedby":"basic-addon1",onChange:function(e){q(e.target.value)},name:"userpost",rows:"1",cols:"100",value:R,placeholder:R})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Baby's Name"}),Object(h.jsx)("input",{type:"text",className:"form-control answer-box","aria-label":"Username","aria-describedby":"basic-addon1",onChange:function(e){n(e.target.value)},name:"userpost",rows:"1",cols:"100",value:s,placeholder:s,id:"setBabyName"})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Date of Birth"}),Object(h.jsx)("input",{className:"form-control answer-box","aria-label":"Username","aria-describedby":"basic-addon1",value:b,onChange:function(e){d(e.target.value)},type:"date",id:"setBabyBDay"})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Birth Weight:"}),Object(h.jsx)("input",{type:"text",className:"form-control answer-box","aria-label":"Username","aria-describedby":"basic-addon1",value:O,onChange:function(e){x(e.target.value)},placeholder:O})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Take Home Outfit:"}),Object(h.jsx)("input",{type:"text",className:"form-control answer-box","aria-label":"Username","aria-describedby":"basic-addon1",value:v,onChange:function(e){N(e.target.value)},placeholder:v})]}),Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("span",{className:"input-group-text",children:"Birth Story:"}),Object(h.jsx)("textarea",{className:"form-control answer-box ","aria-label":"With textarea",value:k,onChange:function(e){S(e.target.value)},placeholder:k,rows:"8"})]}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("span",{className:"input-group-text",id:"basic-addon1",children:"Favorite Songs"}),Object(h.jsx)("input",{type:"text",className:"form-control answer-box","aria-label":"Username","aria-describedby":"basic-addon1",onChange:function(e){U(e.target.value)},name:"userpost",rows:"1",cols:"100",value:E,placeholder:E})]}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:"btn",type:"button",onClick:function(t){t.preventDefault();var a=m.auth().currentUser;a.updateProfile({displayName:I,photoURL:R}).then((function(){console.log("Name and Photo set!"),console.log(a.userName)})).catch((function(e){console.log(e)})),j.collection("Users").doc(e).set({baby_name:{babyName:s},date_of_birth:{babyBDay:b},birth_weight:{birthWeight:O},take_home_outfit:{takeHomeOutfit:v},birth_story:{birthStory:k},fav_songs:{favSongs:E}}).then((function(){console.log("Document successfully written!"),L.push("/profile")})).catch((function(e){console.error("Error writing document: ",e)}))},id:"save-button",children:Object(h.jsx)("i",{class:"fas fa-save"})}),Object(h.jsx)("button",{className:"btn",id:"cancel-button",onClick:function(){L.push("/profile")},children:Object(h.jsx)("i",{class:"fas fa-window-close"})})]})]})};var W=function(e){var t=Object(c.useState)({Title:"",Content:"",userName:""}),a=Object(l.a)(t,2),s=a[0],n=a[1],r=Object(i.g)(),o=m.auth().currentUser;function b(e){var t=e.target.value,a=e.target.name,c=o.displayName;n((function(e){return"title"===a?{Title:t,Content:e.Content,userName:c}:{Title:e.Title,Content:t,userName:c}}))}return Object(h.jsxs)("div",{children:[Object(h.jsx)(P,{}),Object(h.jsxs)("div",{className:"container-fluid",id:"post-container",children:[Object(h.jsx)("h1",{id:"post-header",children:" Community Post"}),Object(h.jsx)("label",{id:"post-label",children:"What do you want to share?"}),Object(h.jsx)("input",{id:"post-title",value:s.Title,onChange:b,name:"title",placeholder:"Enter Title...",className:"form-control"}),Object(h.jsx)("textarea",{id:"user-post",name:"content",rows:"10",cols:"50",onChange:b,placeholder:"Tell your story...",className:"form-control"}),Object(h.jsx)("button",{type:"button",onClick:function(e){n({Title:"",Content:""}),e.preventDefault(),j.collection("Posts").doc().set({post:{post:s}}).then((function(){console.log("Document successfully written!"),r.push("/community")})).catch((function(e){console.error("Error writing document: ",e)})),r.push("/community")},id:"post-button",children:"Share"})]})]})};var H=function(e){switch(e.getDay()){case 0:return"Sunday";case 1:return"Monday";case 2:return"Tuesday";case 3:return"Wednesday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:return"??"}};var Y=function(e){switch(e.getMonth()+1){case 1:return"January";case 2:return"February";case 3:return"March";case 4:return"April";case 5:return"May";case 6:return"June";case 7:return"July";case 8:return"August";case 9:return"September";case 10:return"October";case 11:return"November";case 12:return"December";default:return""}},J=a.p+"static/media/birthday-cake.852a1ff0.png",V=a.p+"static/media/weighing-machine.da3f758e.png",Q=a.p+"static/media/music.9c96a18b.png";var z=function(){var e=m.auth().currentUser,t=Object(c.useState)(),a=Object(l.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),b=i[0],d=i[1],u=Object(c.useState)(""),p=Object(l.a)(u,2),O=p[0],x=p[1],f=Object(c.useState)(""),g=Object(l.a)(f,2),v=g[0],N=g[1],S=Object(c.useState)(),C=Object(l.a)(S,2),D=C[0],U=C[1],_=Object(c.useState)(""),B=Object(l.a)(_,2),I=B[0],F=B[1],M=Object(c.useState)(""),T=Object(l.a)(M,2),R=T[0],q=T[1],A=Object(c.useState)(""),L=Object(l.a)(A,2),W=L[0],z=L[1],G=Object(c.useState)(""),K=Object(l.a)(G,2),X=K[0],Z=K[1],$=Object(c.useState)(""),ee=Object(l.a)($,2),te=ee[0],ae=ee[1];return Object(c.useEffect)(Object(w.a)(y.a.mark((function t(){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null!=e&&(a=e.uid),j.collection("Users").doc(a).get().then((function(e){if(e.exists){var t=e.data();console.log(t),d(t.birth_weight.birthWeight),x(t.take_home_outfit.takeHomeOutfit),N(t.birth_story.birthStory),n(t.baby_name.babyName),U(t.date_of_birth.babyBDay),ae(t.fav_songs.favSongs);var a=new Date(t.date_of_birth.babyBDay+" 05:");z(a.getDate()),Z(a.getFullYear()),F(H(a)),q(Y(a))}else console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}));case 3:case"end":return t.stop()}}),t)}))),[]),Object(h.jsxs)("div",{className:"Book",children:[Object(h.jsx)(P,{}),Object(h.jsx)("container",{id:"book-container"}),Object(h.jsxs)("h1",{id:"baby-name",children:[" Baby ",s," "]}),Object(h.jsx)("button",{id:"book-button-edit",children:Object(h.jsxs)(o.b,{className:"book-link-1",to:"/questionnaire",children:[Object(h.jsx)("i",{className:"fas fa-edit"}),"Edit"]})}),Object(h.jsxs)("div",{id:"carouselExampleIndicators",className:"carousel slide","data-bs-interval":"false",children:[Object(h.jsxs)("div",{className:"carousel-indicators",children:[Object(h.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(h.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(h.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2","aria-label":"Slide 3"}),Object(h.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"3","aria-label":"Slide 4"}),Object(h.jsx)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"4","aria-label":"Slide 5"})]}),Object(h.jsxs)("div",{className:"carousel-inner",children:[Object(h.jsx)("div",{className:"carousel-item active",children:Object(h.jsx)("div",{className:"container content-container",children:Object(h.jsxs)("div",{className:"row bk-row",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("img",{id:"onesie-book",src:J,alt:"cartoon cake"})}),D&&Object(h.jsxs)("div",{class:"col",children:[Object(h.jsxs)("h3",{className:"entries",children:[I,","]}),Object(h.jsxs)("h3",{className:"entries",children:[R," ",W,",",X]})]})]})})}),Object(h.jsx)("div",{className:"carousel-item",children:Object(h.jsx)("div",{className:"container content-container",children:Object(h.jsxs)("div",{className:"row bk-row",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("img",{id:"onesie-book",src:V,alt:"cartoon scale"})}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("h3",{className:"entries",children:b})})]})})}),Object(h.jsx)("div",{className:"carousel-item",children:Object(h.jsx)("div",{className:"container content-container",children:Object(h.jsxs)("div",{className:"row bk-row",children:[Object(h.jsxs)("div",{className:"col",children:[Object(h.jsxs)("h3",{className:"book-label",children:["Take",Object(h.jsx)("br",{})," Home ",Object(h.jsx)("br",{})," Outfit"]}),Object(h.jsx)("img",{id:"onesie-book",src:E,alt:"cartoon onesie"})]}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("h3",{className:"entries",children:O})})]})})}),Object(h.jsx)("div",{className:"carousel-item",children:Object(h.jsx)("div",{className:"container content-container",children:Object(h.jsxs)("div",{className:"row bk-row",children:[Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("h3",{className:"book-label",children:"Favorite Songs"}),Object(h.jsx)("img",{id:"music-note",src:Q,alt:"music note"})]}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("h3",{className:"entries",children:te})})]})})}),Object(h.jsx)("div",{className:"carousel-item",children:Object(h.jsx)("div",{className:"container content-container",children:Object(h.jsxs)("div",{className:"row bk-row",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("h3",{className:"entries",children:"Birth Story:"})}),Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("h3",{className:"birth-story",children:v})})]})})})]}),Object(h.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"prev",children:[Object(h.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(h.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(h.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide":"next",children:[Object(h.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(h.jsx)("span",{className:"visually-hidden",children:"Next"})]})]}),Object(h.jsx)(k,{})]})};var G=function(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],n=a[1],r=e.content.length;return Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsxs)("div",{className:"card comments",children:[Object(h.jsx)("div",{className:"card-title",children:Object(h.jsxs)("p",{className:"user-name-comment",children:[Object(h.jsx)("span",{style:{color:"#5bc6e8"},children:e.user})," says..."]})}),Object(h.jsxs)("div",{className:"card-body ",children:[s===e.id?Object(h.jsx)("p",{className:"card-text",children:e.content}):Object(h.jsx)("p",{className:"card-text text-overflow",children:e.content}),r>=115?Object(h.jsx)("button",{onClick:function(t){!function(e,t){t.preventDefault(),n(s===e?"":e)}(e.id,t)},className:"cmt-xpnd btn btn-full-post",href:"#",children:s===e.id?Object(h.jsx)("i",{className:"fas fa-angle-double-up"}):Object(h.jsx)("i",{className:"fas fa-angle-double-down"})}):null]})]})})};var K=function(e){var t=Object(c.useState)(!1),a=Object(l.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(""),o=Object(l.a)(r,2),i=o[0],b=o[1],d=e.match.params.id,u=Object(c.useState)(""),p=Object(l.a)(u,2),O=p[0],x=p[1],f=Object(c.useState)([{}]),g=Object(l.a)(f,2),v=g[0],N=g[1],k=Object(c.useState)("false"),S=Object(l.a)(k,2),C=S[0],D=S[1],E=Object(c.useState)(!1),U=Object(l.a)(E,2),_=U[0],B=U[1],I=m.auth().currentUser;return Object(c.useEffect)(Object(w.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.collection("Posts").doc(d),e.next=3,t.get().then((function(e){e.exists?(console.log("Document data:",e.data()),x({title:e.data().post.post.Title,content:e.data().post.post.Content,userName:e.data().post.post.userName})):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}));case 3:case"end":return e.stop()}}),e)}))),[]),Object(c.useEffect)(Object(w.a)(y.a.mark((function e(){var t,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=j.collection("Comments"+d),e.next=4,a.get().then((function(e){e.forEach((function(e){var a=e.data();t.push(a)})),t.sort((function(e,t){return e.timestamp-t.timestamp})),N(t),B(!0)}));case 4:case"end":return e.stop()}}),e)}))),[C]),Object(h.jsxs)("div",{children:[Object(h.jsx)(P,{}),Object(h.jsx)("div",{className:"full-card",children:Object(h.jsxs)("div",{className:"card-body full-card-body",children:[Object(h.jsx)("h5",{className:"full-card-title",children:O.title}),Object(h.jsx)("h4",{className:"full-post-username",children:O.displayName}),Object(h.jsx)("p",{className:"card-text full-card-text",children:O.content}),Object(h.jsx)("button",{onClick:function(){n(!s)},href:"#",className:"btn btn-primary card-button full-text-btn",children:!0===s?"Cancel":Object(h.jsx)("i",{class:"far fa-comments",children:" Comment"})}),!0===s&&Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{placeholder:"Add your comment...",type:"email",className:"form-control comment-input",onChange:function(e){b(e.target.value)}}),Object(h.jsx)("button",{onClick:function(e){var t=Date.now();j.collection("Comments"+d).doc().set({comment:i,timestamp:t,userName:I.displayName}).then((function(){console.log("Document successfully written!"),n(!s),D(!C)})).catch((function(e){console.error("Error writing document: ",e)}))},className:"btn submit-comment-btn",type:"button",children:"Submit"})]}),Object(h.jsx)("div",{children:_&&v.map((function(e,t){return Object(h.jsx)(G,{id:t,content:e.comment,user:e.userName},t)}))})]})})]})},X=function(){return Object(h.jsx)(o.a,{basename:"/babybook",children:Object(h.jsx)(x,{children:Object(h.jsxs)(i.d,{children:[" ",Object(h.jsx)(i.b,{path:"/",component:D}),Object(h.jsx)(i.b,{exact:!0,path:"/register",component:I}),Object(h.jsx)(v,{exact:!0,path:"/profile",component:T}),Object(h.jsx)(v,{exact:!0,path:"/community",component:A}),Object(h.jsx)(v,{exact:!0,path:"/questionnaire",component:L}),Object(h.jsx)(v,{exact:!0,path:"/post",component:W}),Object(h.jsx)(v,{exact:!0,path:"/book",component:z}),Object(h.jsx)(v,{path:"/post/:id",component:K})]})})})};var Z=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(x,{children:Object(h.jsx)(X,{})})})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(Z,{})}),document.getElementById("root")),$()}},[[48,1,2]]]);
//# sourceMappingURL=main.7bb20573.chunk.js.map