(this["webpackJsonpreakt-kabzda-1"]=this["webpackJsonpreakt-kabzda-1"]||[]).push([[0],{124:function(e,t,n){e.exports={paginator:"Paginator_paginator__TmYM-",pageNumber:"Paginator_pageNumber__VTzaX",selectedPage:"Paginator_selectedPage__3SkPi"}},144:function(e,t,n){e.exports={item:"Post_item__qgLu_"}},146:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__IKVWh",posts:"MyPosts_posts__2281S"}},149:function(e,t,n){e.exports={formControl:"FormControls_formControl__2Y3MO",error:"FormControls_error__3fwNV",formSummaryError:"FormControls_formSummaryError__3uC7c"}},152:function(e,t,n){e.exports={item:"Dialog_item__1E3wH",active:"Dialog_active__22o0r"}},153:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3V6cJ",followButton:"Users_followButton__10njZ"}},154:function(e,t,n){e.exports={header:"Header_header__1Ya28",loginBlock:"Header_loginBlock__AUhM_"}},201:function(e,t,n){e.exports={item:"Message_item__3PE_v"}},237:function(e,t,n){},238:function(e,t,n){},342:function(e,t,n){},361:function(e,t,n){},362:function(e,t,n){},363:function(e,t,n){},364:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),i=n(33),a=n.n(i),c=(n(237),n(39)),o=n(40),l=n(42),u=n(41),d=(n(238),n(8)),j=n(60),b=n(144),h=n.n(b),f=n(204),p=n(373),O=n.p+"static/media/1.a2446033.png",g=n(1),m=function(e){return e.profile?Object(g.jsxs)("div",{className:h.a.item,children:[Object(g.jsx)("img",{src:e.profile.photos.small||O,className:h.a.userPhoto}),e.message,Object(g.jsx)("div",{children:Object(g.jsxs)("span",{children:["like ",e.like]})}),Object(g.jsx)("div",{children:Object(g.jsx)(f.a,{onClick:function(){},icon:Object(g.jsx)(p.a,{})})})]}):null},x=n(146),v=n.n(x),P=n(188),_=function(e){if(!e)return"Field is required"},w=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},C=n(369),y=n(368),S={labelCol:{span:8},wrapperCol:{span:16}},N=(C.a.TextArea,w(100),Object(P.a)({form:"addPost"})((function(e){return Object(g.jsxs)(y.a,Object(d.a)(Object(d.a)({},S),{},{name:"nest-messages",onFinish:e.onSubmit,children:[Object(g.jsx)(y.a.Item,{name:"post",size:"large",children:Object(g.jsx)(C.a.TextArea,{})}),Object(g.jsx)(y.a.Item,{wrapperCol:Object(d.a)(Object(d.a)({},S.wrapperCol),{},{offset:6,span:100}),children:Object(g.jsx)(f.a,{type:"primary",htmlType:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]}))}))),k=s.a.memo((function(e){console.log("RENDER");var t=Object(j.a)(e.profilePage.posts).reverse().map((function(t){return Object(g.jsx)(m,{message:t.text,like:t.likesCount,dispatch:e.dispatch,profile:e.profile})}));if(!e.profile)return null;return Object(g.jsxs)("div",{className:v.a.postsBlock,children:[Object(g.jsx)("h3",{children:"My posts"}),Object(g.jsx)(N,{onSubmit:function(t){var n=t.post;e.addPost(n),t.post=null}}),Object(g.jsx)("div",{className:v.a.posts,children:t})]})})),E=k,I=(n(342),n(70)),T=n.n(I),A=n.p+"static/media/Curve-Loading.5e01ee79.gif",U=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:A})})},M=n(92),F=function(e){var t=Object(r.useState)(!1),n=Object(M.a)(t,2),s=n[0],i=n[1],a=Object(r.useState)(e.status),c=Object(M.a)(a,2),o=c[0],l=c[1];Object(r.useEffect)((function(){l(e.status)}),[e.status]);return Object(g.jsxs)("div",{children:[!s&&Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Status:   "}),Object(g.jsx)("span",{onDoubleClick:function(){e.isOwner&&i(!0)},children:e.status||"------"})]}),s&&Object(g.jsx)("div",{children:Object(g.jsx)("input",{autoFocus:!0,onBlur:function(){i(!1),e.updateStatus(o)},onChange:function(e){l(e.currentTarget.value)},value:o})})]})},D=n(374),R=n(125),z=n(149),L=n.n(z),B=n(187),H=function(e){e.input;var t=e.meta,n=(e.child,Object(R.a)(e,["input","meta","child"])),r=t.error&&t.touched;return Object(g.jsxs)("div",{className:L.a.formControl+" "+(r?L.a.error:" "),children:[Object(g.jsx)("div",{children:n.children}),Object(g.jsx)("div",{children:r&&Object(g.jsx)("span",{children:t.error})})]})},V=function(e){var t=e.input,n=(e.meta,e.child,Object(R.a)(e,["input","meta","child"]));return Object(g.jsx)(H,Object(d.a)(Object(d.a)({},e),{},{children:Object(g.jsx)("textarea",Object(d.a)(Object(d.a)({},t),n))}))},J=function(e,t,n,r){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(g.jsxs)("div",{children:[Object(g.jsx)(B.a,Object(d.a)({placeholder:e,name:t,validate:n,component:r},s))," ",i]})},G=Object(P.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.props,r=e.profile;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:T.a.photoUpload,children:Object(g.jsx)(C.a,{icon:Object(g.jsx)(D.a,{}),type:"file",onChange:function(e){e.target.files.length&&n.savePhoto(e.target.files[0])}})}),Object(g.jsxs)("form",{onSubmit:t,children:[Object(g.jsx)("div",{children:Object(g.jsx)("button",{onClick:function(){},children:"Save"})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Full name:"})," ",J("Full name","fullName",[],"input")]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b:"})," ",J("","lookingForAJob",[],"input",{type:"checkbox"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438:"})," ",J("","lookingForAJobDescription",[],V)]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435:"})," ",J("","aboutMe",[],V)]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"})," ",Object.keys(r.contacts).map((function(e){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("b",{children:[e,":"]})," ",J(e,"contacts."+e,[],"input")]})}))]})]})]})})),Y=function(e){return Object(g.jsxs)("div",{className:T.a.discriptionBlock,children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Full name:"})," ",e.profile.fullName]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"looking For A Job:"})," ",e.profile.lookingForAJob?"yes":"no"]}),e.profile.lookingForAJob&&Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"My professional skills:"})," ",e.profile.lookingForAJobDescription]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"About me:"})," ",e.profile.aboutMe]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("b",{children:"Contacts:"})," ",Object.keys(e.profile.contacts).map((function(t){return Object(g.jsx)(q,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))]})]})},q=function(e){var t=e.contactTitle,n=e.contactValue;return Object(g.jsxs)("div",{className:T.a.contacts,children:[Object(g.jsxs)("b",{children:[t,":"]})," ",n]})},W=function(e){if(!e.profile)return Object(g.jsx)("div",{children:Object(g.jsx)(U,{})});return Object(g.jsxs)("div",{children:[e.isOwner&&Object(g.jsx)("div",{className:T.a.editProfile,children:Object(g.jsxs)(f.a,{onClick:e.editMode?e.deactivateProfileEditMode:e.activateProfileEditMode,children:[" ",e.editMode?"Cancel":"Edit"]})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("img",{src:e.profile.photos.large||O,className:T.a.largeUserPhoto}),Object(g.jsx)(F,{id:e.id,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner}),e.isOwner&&e.editMode?Object(g.jsx)(G,{initialValues:e.profile,profile:e.profile,savePhoto:e.savePhoto,onSubmit:function(t){e.saveProfile(t)}}):Object(g.jsx)(Y,{profile:e.profile})]})]})},K=(n(142),n(200)),Q=Object(K.setup)({cache:{maxAge:9e5},withCredentials:!0,headers:{"API-KEY":"cc3bd8cc-4d54-4fd5-94a6-1a89051413f6"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),Z=function(e,t){return Q.get("users?page=".concat(e," &count=").concat(t)).then((function(e){return e.data}))},X=function(e){return Q.delete("follow/".concat(e))},$=function(e){return Q.post("follow/".concat(e))},ee=function(e){return Q.get("profile/"+e)},te=function(e){return Q.get("profile/status/"+e)},ne=function(e){return Q.put("profile/status",{status:e})},re=function(e){var t=new FormData;return t.append("image",e),Q.put("profile/photo",t,{headers:{"Content-Type":"multipart/form/data"}})},se=function(e){return Q.put("profile",e)},ie=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Q.post("auth/login",{email:e,password:t,rememberMe:n})},ae=function(){return Q.delete("auth/login")},ce="ADD-POST",oe="SET_USER_PROFILE",le="SET_USER_STATUS",ue="STATUS_UPDATE",de="SAVE_PHOTO_SUCCESS",je="ACTIVATE_EDIT_MODE",be="DEACTIVATE_EDIT_MODE",he={posts:[{id:1,text:"Hello world",likesCount:12},{id:2,text:"This is my first post",likesCount:10}],profile:null,status:"",profileEditMode:!1},fe=function(e){return{type:oe,profile:e}},pe=function(e){return{type:le,status:e}},Oe=function(e){return{type:de,photos:e}},ge=function(){return{type:je}},me=function(){return{type:be}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(d.a)(Object(d.a)({},e),{},{posts:[].concat(Object(j.a)(e.posts),[{id:6,text:t.newText,likesCount:0}])});case oe:return Object(d.a)(Object(d.a)({},e),{},{profile:t.profile});case le:return Object(d.a)(Object(d.a)({},e),{},{status:t.status});case ue:return Object(d.a)(Object(d.a)({},e),{},{statusInProgress:t.isUpdate});case de:return Object(d.a)(Object(d.a)({},e),{},{profile:Object(d.a)(Object(d.a)({},e.profile),{},{photos:t.photos})});case je:return Object(d.a)(Object(d.a)({},e),{},{profileEditMode:!0});case be:return Object(d.a)(Object(d.a)({},e),{},{profileEditMode:!1});default:return e}},ve=n(23),Pe=Object(ve.b)((function(e){return{profilePage:e.profilePage,profile:e.profilePage.profile}}),(function(e){return{addPost:function(t){var n=function(e){return{type:ce,newText:e}}(t);e(n)}}}))(E),_e=function(e){return Object(g.jsxs)("div",{className:"",children:[Object(g.jsx)(W,{profile:e.profile,id:e.id,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,activateProfileEditMode:e.activateProfileEditMode,deactivateProfileEditMode:e.deactivateProfileEditMode,editMode:e.editMode,saveProfile:e.saveProfile}),Object(g.jsx)(Pe,{})]})},we=n(26),Ce=function(e){return{isAuth:e.authReducer.isAuth}},ye=function(e){var t=function(t){Object(l.a)(r,t);var n=Object(u.a)(r);function r(){return Object(c.a)(this,r),n.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(g.jsx)(e,Object(d.a)({},this.props)):Object(g.jsx)(we.a,{to:"/login"})}}]),r}(s.a.Component);return Object(ve.b)(Ce)(t)},Se=n(22),Ne=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(e=this.props.id),this.props.getProfileTh(e),this.props.getUserStatusTh(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userID!=e.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)(_e,Object(d.a)(Object(d.a)({},this.props),{},{profile:this.props.profile,id:this.props.id,status:this.props.status,updateStatus:this.props.updateStatusTh,isOwner:!this.props.match.params.userID,savePhoto:this.props.savePhoto,activateProfileEditMode:this.props.activateProfileEditMode,deactivateProfileEditMode:this.props.deactivateProfileEditMode,editMode:this.props.editMode,saveProfile:this.props.saveProfile}))})}}]),n}(s.a.Component),ke=Object(Se.d)(Object(ve.b)((function(e){return{profile:e.profilePage.profile,id:e.authReducer.id,status:e.profilePage.status,editMode:e.profilePage.profileEditMode}}),{setUserProfile:fe,getProfileTh:function(e){return function(t){ee(e).then((function(e){t(fe(e.data))}))}},getUserStatusTh:function(e){return function(t){te(e).then((function(e){t(pe(e.data))}))}},updateStatusTh:function(e){return function(t){ne(e).then((function(n){0===n.data.resultCode&&t(pe(e))}))}},savePhoto:function(e){return function(t){re(e).then((function(e){0===e.data.resultCode&&t(Oe(e.data.data.photos))}))}},activateProfileEditMode:function(){return function(e){e(ge())}},deactivateProfileEditMode:function(){return function(e){e(me())}},saveProfile:function(e){return function(t,n){t(me());var r=n().authReducer.id;se(e).then((function(e){0===e.data.resultCode&&ee(r).then((function(e){t(fe(e.data))}))}))}}}),ye,we.g)(Ne),Ee=(n(361),function(e){return Object(g.jsx)("div",{children:"News"})}),Ie=n(27),Te=(n(362),function(e){return Object(g.jsx)("div",{children:"Music"})}),Ae=(n(363),function(e){return Object(g.jsx)("div",{children:"Settings"})}),Ue="SEND-MESSAGE",Me={dialogs:[{id:1,name:"Ruslan"},{id:2,name:"Ihor"},{id:3,name:"Diana"}],messages:[{id:1,message:"Hello world"},{id:2,message:"Yo"},{id:3,message:"Yo"},{id:3,message:"Yawawdaao"}]},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ue:return Object(d.a)(Object(d.a)({},e),{},{messageText:"",messages:[].concat(Object(j.a)(e.messages),[{id:1,message:t.messageText}])});default:return e}},De=n(94),Re=n.n(De),ze=n(152),Le=n.n(ze),Be=function(e){var t="/dialogs/"+e.id;return Object(g.jsx)("div",{className:Le.a.item,children:Object(g.jsxs)(Ie.b,{to:t,activeClassName:Le.a.active,children:[" ",e.name]})})},He=n(201),Ve=n.n(He),Je=function(e){return Object(g.jsx)("div",{className:Ve.a.item,children:e.messages})},Ge=w(50),Ye=Object(P.a)({form:"message"})((function(e){return Object(g.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(g.jsx)("div",{children:Object(g.jsx)(B.a,{name:"message",component:V,validate:[_,Ge]})}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})),qe=function(e){var t=e.messagesPage.messages.map((function(e){return Object(g.jsx)(Je,{messages:e.message})})),n=e.messagesPage.dialogs.map((function(e){return Object(g.jsx)(Be,{name:e.name,activeClassName:Re.a.active,id:e.id})}));return Object(g.jsxs)("div",{className:Re.a.dialogs,children:[Object(g.jsx)("div",{className:Re.a.dialogsItem,children:n}),Object(g.jsxs)("div",{className:Re.a.messages,children:[t,Object(g.jsx)(Ye,{onSubmit:function(t){var n=t.message;e.sendMessage(n),t.message=null}})]})]})},We=Object(Se.d)(Object(ve.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:Ue,messageText:e}}(t))}}})),ye)(qe),Ke=n(38),Qe=n.n(Ke),Ze=function(e){return Object(g.jsx)("div",{className:Qe.a.navbar,children:Object(g.jsxs)("nav",{className:Qe.a.nav,children:[Object(g.jsx)("div",{className:Qe.a.item,children:Object(g.jsx)(Ie.b,{to:"/news",activeClassName:Qe.a.active,children:" \u041d\u043e\u0432\u043e\u0441\u0442\u0438"})}),Object(g.jsx)("div",{className:Qe.a.item,children:Object(g.jsx)(Ie.b,{to:"/music",activeClassName:Qe.a.active,children:"\u041c\u0443\u0437\u044b\u043a\u0430"})}),Object(g.jsx)("div",{className:Qe.a.item,children:Object(g.jsx)(Ie.b,{to:"/settings",activeClassName:Qe.a.active,children:" \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"})})]})})},Xe=(Object(ve.b)((function(e){return{sidebar:e.sidebar}}),(function(){return{}}))(Ze),n(66)),$e="FOLLOW",et="UNFOLLOW",tt="SET_USERS",nt="SET_CURRENT_PAGE",rt="SET_USERS_TOTAL_COUNT",st="TOGGLE_IS_FETCHING",it="TOGGLE_IS_FOLLOWING_IN_PROGRESS",at={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},ct=function(e){return{type:$e,userID:e}},ot=function(e){return{type:et,userID:e}},lt=function(e){return{type:nt,currentPage:e}},ut=function(e){return{type:st,isFetching:e}},dt=function(e,t){return{type:it,isFollowing:e,userId:t}},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $e:return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(d.a)(Object(d.a)({},e),{},{followed:!0}):e}))});case et:return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(d.a)(Object(d.a)({},e),{},{followed:!1}):e}))});case tt:return Object(d.a)(Object(d.a)({},e),{},{users:t.users});case nt:return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.currentPage});case rt:return Object(d.a)(Object(d.a)({},e),{},{totalUsersCount:t.count});case st:return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.isFetching});case it:return Object(d.a)(Object(d.a)({},e),{},{followingInProgress:t.isFollowing?[].concat(Object(j.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},bt=n(153),ht=n.n(bt),ft=n(124),pt=n.n(ft),Ot=n(6),gt=n.n(Ot),mt=function(e){for(var t=e.totalItemsCount,n=e.portionSize,s=e.currentPage,i=e.onPageChange,a=Math.ceil(t/n),c=[],o=1;o<=a;o++)c.push(o);var l=Math.ceil(a/n),u=Object(r.useState)(1),d=Object(M.a)(u,2),j=d[0],b=d[1],h=(j-1)*n+1,p=j*n;return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:pt.a.paginator,children:[j>1&&Object(g.jsx)(f.a,{onClick:function(){b(1)},children:"First"}),j>1&&Object(g.jsx)(f.a,{onClick:function(){b(j-1)},children:"Previous"}),c.filter((function(e){return e>=h&&e<=p})).map((function(e){return Object(g.jsx)(f.a,{className:gt()(Object(Xe.a)({},pt.a.selectedPage,s===e),pt.a.pageNumber),onClick:function(t){i(e)},children:e},e)})),l>j&&Object(g.jsx)(f.a,{onClick:function(){b(j+1)},children:"Next"}),l>j&&Object(g.jsx)(f.a,{onClick:function(){b(l)},children:"Last"})]})})},xt=(n(143),function(e){return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsx)(mt,{totalItemsCount:e.totalUsersCount,onPageChange:e.onPageChange,currentPage:e.currentPage,portionSize:e.pageSize})}),e.users.map((function(t){return Object(g.jsxs)("div",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:Object(g.jsx)(Ie.b,{to:"/profile/"+t.id,children:Object(g.jsx)("img",{src:null!=t.photos.small?t.photos.small:O,className:ht.a.userPhoto})})}),Object(g.jsx)("div",{className:ht.a.followButton,children:t.followed?Object(g.jsx)(f.a,{type:"primary",size:"middle",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:" Unfollow "}):Object(g.jsx)(f.a,{type:"primary",size:"middle",disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(g.jsx)("span",{children:Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:t.name}),Object(g.jsx)("div",{children:t.status})]})})]},t.id)}))]})}),vt=n(202),Pt=Object(vt.a)((function(e){return e.usersPage.users}),(function(e){return e})),_t=function(e){return e.usersPage.pageSize},wt=function(e){return e.usersPage.totalUsersCount},Ct=function(e){return e.usersPage.currentPage},yt=function(e){return e.usersPage.isFetching},St=function(e){return e.usersPage.followingInProgress},Nt=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).onPageChange=function(t){e.props.getUsersTh(t,e.props.pageSize)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersTh(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){var e;return Object(g.jsxs)(g.Fragment,{children:[this.props.isFetching?Object(g.jsx)(U,{}):null,Object(g.jsx)(xt,(e={totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,follow:this.props.follow,unfollow:this.props.unfollow,users:this.props.users,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress,toggleFollowingInProgress:this.props.toggleFollowingInProgress},Object(Xe.a)(e,"unfollow",this.props.unfollowTh),Object(Xe.a)(e,"follow",this.props.followTh),e))]})}}]),n}(s.a.Component),kt=Object(Se.d)(Object(ve.b)((function(e){return{users:Pt(e),pageSize:_t(e),totalUsersCount:wt(e),currentPage:Ct(e),isFetching:yt(e),followingInProgress:St(e)}}),{follow:ct,unfollow:ot,setCurrentPage:lt,getUsersTh:function(e,t){return function(n){n(ut(!0)),n(lt(e)),Z(e,t).then((function(e){var t,r;n(ut(!1)),n((t=e.items,{type:tt,users:t})),n((r=e.totalCount,{type:rt,count:r}))}))}},unfollowTh:function(e){return function(t){t(dt(!0,e)),X(e).then((function(n){0==n.data.resultCode&&t(ot(e)),t(dt(!1,e))}))}},followTh:function(e){return function(t){t(dt(!0,e)),$(e).then((function(n){0==n.data.resultCode&&t(ct(e)),t(dt(!1,e))}))}}}))(Nt),Et=n(154),It=n.n(Et),Tt=n(372),At=function(e){return Object(g.jsxs)("header",{className:It.a.header,children:[Object(g.jsx)("img",{src:"https://logoza.ru/img/rock.png"}),Object(g.jsx)("div",{className:It.a.loginBlock,children:e.isAuth?Object(g.jsxs)("div",{children:[" ",e.login," - ",Object(g.jsx)(Tt.a,{onClick:e.logout,children:"Log out"})]}):Object(g.jsx)(Ie.b,{to:"/login",children:"Login"})})]})},Ut=n(81),Mt=n.n(Ut),Ft=n(155),Dt=n(57),Rt="SET_USER_DATA",zt="SET_AUTH_PROFILE",Lt={id:null,login:null,email:null,isAuth:!1,isFetching:!1,authUserProfile:null},Bt=function(e,t,n,r){return{type:Rt,payload:{id:e,login:t,email:n,isAuth:r}}},Ht=function(){return function(e){return Q.get("auth/me",{cache:{maxAge:12e4,exclude:{query:!1}}}).then((function(t){if(0===t.data.resultCode){var n=t.data.data,r=n.id,s=n.login,i=n.email;e(Bt(r,s,i,!0))}}))}},Vt=function(){return function(){var e=Object(Ft.a)(Mt.a.mark((function e(t){return Mt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:0===e.sent.data.resultCode&&t(Bt(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Rt:return Object(d.a)(Object(d.a)(Object(d.a)({},e),t.payload),t.payload.isAuth);case zt:return Object(d.a)(Object(d.a)({},e),{},{authUserProfile:t.authProfile});default:return e}},Gt=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)(At,Object(d.a)({},this.props))}}]),n}(s.a.Component),Yt=(Object(ve.b)((function(e){return{login:e.authReducer.login,isAuth:e.authReducer.isAuth,authUserProfile:e.authReducer.authUserProfile}}),{logout:Vt})(Gt),n(371)),qt=function(e){return Object(g.jsxs)(y.a,{name:"basic",labelCol:{span:3},wrapperCol:{span:10},initialValues:{remember:!0},onFinish:e.onSubmit,children:[Object(g.jsx)(y.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(g.jsx)(C.a,{})}),Object(g.jsx)(y.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(g.jsx)(C.a.Password,{})}),Object(g.jsx)(y.a.Item,{name:"remember",valuePropName:"checked",wrapperCol:{offset:8,span:16},children:Object(g.jsx)(Yt.a,{children:"Remember me"})}),Object(g.jsx)(y.a.Item,{wrapperCol:{offset:8,span:16},children:Object(g.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})},Wt=function(e){return e.isAuth?Object(g.jsx)(we.a,{to:"/profile"}):Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Login"}),Object(g.jsx)(qt,{onSubmit:function(t){e.login(t.username,t.password,t.remember)}})]})},Kt=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)(Wt,{login:this.props.login,isAuth:this.props.isAuth})})}}]),n}(s.a.Component),Qt=Object(Se.d)(Object(ve.b)((function(e){return{isAuth:e.authReducer.isAuth}}),{login:function(e,t,n){return function(){var r=Object(Ft.a)(Mt.a.mark((function r(s){var i,a;return Mt.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,ie(e,t,n);case 2:0===(i=r.sent).data.resultCode?s(Ht()):(a=i.data.messages.length>0?i.data.messages[0]:"Some error",s(Object(Dt.a)("login",{_error:a})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}))(Kt),Zt="INITIALIZED_SUCCESS",Xt={initialized:!1},$t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Zt:return Object(d.a)(Object(d.a)({},e),{},{initialized:!0});default:return e}},en=n(367),tn=n(370),nn=n(375),rn=n(376),sn=n(377),an=n(378),cn=n(379),on=en.a.Header,ln=en.a.Sider,un=en.a.Content,dn=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={collapsed:!1,size:"large"},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e.catchAllUnhandledError=function(){alert("Some Error")},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledError)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledError)}},{key:"render",value:function(){this.state.size;return this.props.initialized?Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(en.a,{children:[Object(g.jsxs)(ln,{trigger:null,collapsible:!0,collapsed:this.state.collapsed,children:[Object(g.jsx)("div",{className:"logo"}),Object(g.jsxs)(tn.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(g.jsx)(tn.a.Item,{icon:Object(g.jsx)(nn.a,{}),children:Object(g.jsx)(Ie.b,{to:"/profile",activeClassName:Qe.a.active,children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})},"1"),Object(g.jsx)(tn.a.Item,{icon:Object(g.jsx)(rn.a,{}),children:Object(g.jsx)(Ie.b,{to:"/dialogs",activeClassName:Qe.a.active,children:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"})},"2"),Object(g.jsx)(tn.a.Item,{icon:Object(g.jsx)(sn.a,{}),children:Object(g.jsx)(Ie.b,{to:"/users",activeClassName:Qe.a.active,children:" \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})},"3")]})]}),Object(g.jsxs)(en.a,{className:"site-layout",children:[Object(g.jsxs)(on,{className:"site-layout-background",style:{padding:0},children:[Object(g.jsxs)("div",{className:"auth-block",children:[" ",this.props.isAuth?Object(g.jsxs)("div",{children:[" ",this.props.login," - ",Object(g.jsx)(f.a,{onClick:this.props.logout,children:"Logout"})]}):Object(g.jsx)(Ie.b,{to:"/login",children:"Login"})]}),s.a.createElement(this.state.collapsed?an.a:cn.a,{className:"trigger",onClick:this.toggle})]}),Object(g.jsx)(un,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:280},children:Object(g.jsxs)(we.d,{children:[Object(g.jsx)(we.b,{path:"/",exact:!0,children:Object(g.jsx)(we.a,{to:"/profile"})}),Object(g.jsx)(we.b,{path:"/dialogs",render:function(){return Object(g.jsx)(We,{})}}),Object(g.jsx)(we.b,{path:"/profile/:userID?",render:function(){return Object(g.jsx)(ke,{})}}),Object(g.jsx)(we.b,{path:"/news",render:function(){return Object(g.jsx)(Ee,{})}}),Object(g.jsx)(we.b,{path:"/music",render:function(){return Object(g.jsx)(Te,{})}}),Object(g.jsx)(we.b,{path:"/settings",render:function(){return Object(g.jsx)(Ae,{})}}),Object(g.jsx)(we.b,{path:"/users",render:function(){return Object(g.jsx)(kt,{})}}),Object(g.jsx)(we.b,{path:"/login",render:function(){return Object(g.jsx)(Qt,{})}}),Object(g.jsx)(we.b,{path:"*",render:function(){return Object(g.jsx)("div",{children:"404 NOT FOUND"})}})]})})]})]})}):Object(g.jsx)(U,{})}}]),n}(s.a.Component),jn=Object(Se.d)(we.g,Object(ve.b)((function(e){return{initialized:e.app.initialized,login:e.authReducer.login,isAuth:e.authReducer.isAuth,authUserProfile:e.authReducer.authUserProfile}}),{initializeApp:function(){return function(e){e(Ht()).then((function(){e({type:Zt})}))}},logout:Vt}))(dn),bn={friendName:[{friendsName:"Diana"},{friendsName:"Ihor"},{friendsName:"Ruslan"}]},hn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bn;return e},fn=n(203),pn=n(189),On=Object(Se.c)({profilePage:xe,messagesPage:Fe,sidebar:hn,usersPage:jt,authReducer:Jt,app:$t,form:pn.a}),gn=Object(Se.e)(On,Object(Se.a)(fn.a));window.store=gn;var mn=gn;Object(P.a)(a.a.render(Object(g.jsx)(Ie.a,{children:Object(g.jsx)(ve.a,{store:mn,children:Object(g.jsx)(jn,{})})}),document.getElementById("root")))},38:function(e,t,n){e.exports={nav:"Navbar_nav__1BCBQ",item:"Navbar_item__3RZJI",active:"Navbar_active__3bnlt",navbar:"Navbar_navbar__2QnsP"}},70:function(e,t,n){e.exports={discriptionBlock:"ProfileInfo_discriptionBlock__18aui",largeUserPhoto:"ProfileInfo_largeUserPhoto__2cOi9",photoUpload:"ProfileInfo_photoUpload__oxH0y",editProfile:"ProfileInfo_editProfile__3Q2Nj",contacts:"ProfileInfo_contacts___CT2U"}},94:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3d0hk"}}},[[364,1,2]]]);
//# sourceMappingURL=main.95cb43d7.chunk.js.map