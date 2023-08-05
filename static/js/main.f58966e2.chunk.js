(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var s=c(8),n=c.n(s),a=c(2),i=c(1),l=(c(14),c(15),c(16),c(3)),o=c.n(l),r=c(0),d=function(e){var t=e.posts,c=e.selectedPost,s=e.selectPost;return Object(r.jsxs)("div",{"data-cy":"PostsList",children:[Object(r.jsx)("p",{className:"title",children:"Posts:"}),Object(r.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{className:"has-background-link-light",children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"Post",children:[Object(r.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(r.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{type:"button","data-cy":"PostButton",className:o()("button is-link",{"is-light":e.id!==(null===c||void 0===c?void 0:c.id)}),onClick:function(){return function(e){e.id===(null===c||void 0===c?void 0:c.id)?s(null):s(e)}(e)},children:e.id===(null===c||void 0===c?void 0:c.id)?"Close":"Open"})})]},e.id)}))})]})]})},j=c(9),u=c(7),m=(c(18),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),b=function(e){var t=e.onSubmit,c=e.loading,s=Object(i.useState)(""),n=Object(a.a)(s,2),l=n[0],d=n[1],j=Object(i.useState)(!1),u=Object(a.a)(j,2),m=u[0],b=u[1],h=Object(i.useState)(""),O=Object(a.a)(h,2),x=O[0],f=O[1],v=Object(i.useState)(!1),N=Object(a.a)(v,2),p=N[0],y=N[1],g=Object(i.useState)(""),S=Object(a.a)(g,2),w=S[0],C=S[1],E=Object(i.useState)(!1),k=Object(a.a)(E,2),P=k[0],T=k[1];return Object(r.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){(e.preventDefault(),b(!l.trim()),y(!x.trim()),T(!w.trim()),l.trim()&&x.trim()&&w.trim())&&(t({name:l,email:x,body:w}),C(""))},onReset:function(){d(""),f(""),C(""),b(!1),y(!1),T(!1)},children:[Object(r.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(r.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(r.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:o()("input",{"is-danger":m}),value:l,onChange:function(e){d(e.target.value),b(!1)}}),Object(r.jsx)("span",{className:"icon is-small is-left",children:Object(r.jsx)("i",{className:"fas fa-user"})}),m&&Object(r.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(r.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),m&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(r.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(r.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(r.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:o()("input",{"is-danger":p}),value:x,onChange:function(e){f(e.target.value),y(!1)}}),Object(r.jsx)("span",{className:"icon is-small is-left",children:Object(r.jsx)("i",{className:"fas fa-envelope"})}),p&&Object(r.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(r.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),p&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(r.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(r.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",value:w,className:o()("textarea",{"is-danger":P}),onChange:function(e){C(e.target.value),T(!1)}})}),P&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit",className:o()("button is-link",{"is-loading":c}),children:"Add"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"reset",className:"button is-link is-light",children:"Clear"})})]})]})};function h(e){var t,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch("https://mate.academy/students-api"+e,s)})).then((function(e){return e.json()}))}var O=function(e){return h(e)},x=function(e,t){return h(e,"POST",t)},f=function(e){return h(e,"DELETE")},v=function(e){var t=e.post,c=Object(i.useState)(!1),s=Object(a.a)(c,2),n=s[0],l=s[1],o=Object(i.useState)(""),d=Object(a.a)(o,2),h=d[0],v=d[1],N=Object(i.useState)([]),p=Object(a.a)(N,2),y=p[0],g=p[1],S=Object(i.useState)(!1),w=Object(a.a)(S,2),C=w[0],E=w[1],k=Object(i.useState)(!1),P=Object(a.a)(k,2),T=P[0],F=P[1];Object(i.useEffect)((function(){t&&(v(""),E(!1),l(!0),O("/comments?postId=".concat(t.id)).then((function(e){return g(e)})).catch((function(){return v("Something went wrong!")})).finally((function(){return l(!1)})))}),[t]);return Object(r.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(r.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(r.jsxs)("div",{className:"block",children:[Object(r.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(null===t||void 0===t?void 0:t.id,": ").concat(null===t||void 0===t?void 0:t.title)}),Object(r.jsx)("p",{"data-cy":"PostBody",children:null===t||void 0===t?void 0:t.body})]}),Object(r.jsxs)("div",{className:"block",children:[n&&Object(r.jsx)(m,{}),h&&Object(r.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:h}),0===y.length&&!n&&!h&&Object(r.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),y.length>0&&!n&&!h&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{className:"title is-4",children:"Comments:"}),y.map((function(e){return Object(r.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(r.jsxs)("div",{className:"message-header",children:[Object(r.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(r.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return t=e.id,f("/comments/".concat(t)),void g((function(e){return e.filter((function(e){return e.id!==t}))}));var t},children:"delete button"})]}),Object(r.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]},e.id)}))]}),!C&&!n&&!h&&Object(r.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return E(!0)},children:"Write a comment"})]}),C&&Object(r.jsx)(b,{loading:T,onSubmit:function(e){t&&(v(""),F(!0),x("/comments",Object(u.a)(Object(u.a)({},e),{},{postId:t.id})).then((function(e){return g((function(t){return[].concat(Object(j.a)(t),[e])}))})).catch((function(){return v("Something went wrong!")})).finally((function(){return F(!1)})))}})]})})},N=function(e){var t,c=e.users,s=e.selectedUser,n=e.onSelect,l=Object(i.useState)(!1),d=Object(a.a)(l,2),j=d[0],u=d[1],m=Object(i.useRef)(null);Object(i.useEffect)((function(){var e=function(e){m.current&&!m.current.contains(e.target)&&u(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),[]);return Object(r.jsxs)("div",{"data-cy":"UserSelector",className:o()("dropdown",{"is-active":j}),ref:m,children:[Object(r.jsx)("div",{className:"dropdown-trigger",children:Object(r.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return u(!j)},children:[Object(r.jsx)("span",{children:null!==(t=null===s||void 0===s?void 0:s.name)&&void 0!==t?t:"Choose a user"}),Object(r.jsx)("span",{className:"icon is-small",children:Object(r.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(r.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(r.jsx)("div",{className:"dropdown-content",children:c.map((function(e){return Object(r.jsx)("a",{href:"#user-".concat(e.id),className:o()("dropdown-item",{"is-active":(null===s||void 0===s?void 0:s.id)===e.id}),onClick:function(t){return function(e,t){e.preventDefault(),n(t),u(!1)}(t,e)},children:e.name},e.id)}))})})]})},p=function(){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(""),l=Object(a.a)(n,2),j=l[0],u=l[1],b=Object(i.useState)([]),h=Object(a.a)(b,2),x=h[0],f=h[1],p=Object(i.useState)([]),y=Object(a.a)(p,2),g=y[0],S=y[1],w=Object(i.useState)(null),C=Object(a.a)(w,2),E=C[0],k=C[1],P=Object(i.useState)(null),T=Object(a.a)(P,2),F=T[0],L=T[1];return Object(i.useEffect)((function(){u(""),O("/users").then((function(e){f(e)})).catch((function(){u("Something went wrong!")}))}),[]),Object(i.useEffect)((function(){E&&(u(""),s(!0),L(null),O("/posts?userId=".concat(null===E||void 0===E?void 0:E.id)).then((function(e){S(e)})).catch((function(){u("Something went wrong!")})).finally((function(){s(!1)})))}),[null===E||void 0===E?void 0:E.id]),Object(r.jsx)("main",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"tile is-ancestor",children:[Object(r.jsx)("div",{className:"tile is-parent",children:Object(r.jsxs)("div",{className:"tile is-child box is-success",children:[Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(N,{users:x,selectedUser:E,onSelect:k})}),Object(r.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!E&&Object(r.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),c&&E&&Object(r.jsx)(m,{}),j&&Object(r.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:j}),E&&0===g.length&&!c&&!j&&Object(r.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),g.length>0&&!c&&!j&&Object(r.jsx)(d,{posts:g,selectedPost:F,selectPost:L})]})]})}),Object(r.jsx)("div",{"data-cy":"Sidebar",className:o()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":!!F}),children:F&&Object(r.jsx)("div",{className:"tile is-child box is-success ",children:Object(r.jsx)(v,{post:F})})})]})})})};n.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.f58966e2.chunk.js.map