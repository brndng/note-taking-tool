(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(29)},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(15),o=n.n(c),u=n(7),i=n(6),s=n(1),l=n(2),d=n(4),b=n(3),f=n(5),p=(n(27),n(9)),h=function(){return{type:"INIT_APP",payload:{id:8,notes:{1:{id:1,text:"thoughts about bears1",tags:{bear:"bear"}},2:{id:2,text:"bear dreams2",tags:{bear:"bear"}},3:{id:3,text:"cats!",tags:{cat:"cat"}},4:{id:4,text:"dog notes",tags:{dog:"dog"}},5:{id:5,text:"bears3",tags:{bear:"bear"}},6:{id:6,text:"bears4",tags:{bear:"bear"}},7:{id:7,text:"second cats!",tags:{cat:"cat"}},8:{id:8,text:"most recent cats!",tags:{cat:"cat"}}},currentTag:null}}},O=function(e){return{type:"CREATE_NOTE",payload:{id:(new Date).valueOf(),text:"",tags:e?Object(p.a)({},e,e):{}}}},g=function(e,t){return{type:"EDIT_NOTE",payload:{id:e,text:t}}},j=function(e,t){return{type:"ADD_TAG",payload:{id:e,tag:t}}},v=function(e,t){return{type:"DELETE_TAG",payload:{id:e,tag:t}}},T=function(e){return{type:"SELECT_TAG",payload:e}},y=function(e){return{type:"SELECT_NOTE",payload:e}},E=function(e){return{type:"TRASH_NOTE",payload:e}},m=function(e){return{type:"RESTORE_NOTE",payload:e}},N=function(e){return{type:"DELETE_NOTE",payload:e}};function k(e,t){return Object.values(e).filter(function(e){return!t&&!e.tags.trash||"trash"===t&&e.tags.trash||"trash"!==t&&!e.tags.trash&&e.tags[t]}).reverse()}function C(e,t,n){var r=function(e,t,n){var r=k(t,n);if(!r.length)return null;var a=!0,c=!1,o=void 0;try{for(var u,i=r[Symbol.iterator]();!(a=(u=i.next()).done);a=!0){var s=u.value;if(s.id!==e)return s}}catch(l){c=!0,o=l}finally{try{a||null==i.return||i.return()}finally{if(c)throw o}}}(e,t,n);return r?r.id:null}function w(e){return"trash"===e}function x(e,t){return!k(e,t).length}var _=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"selectCategory",value:function(){var e=this.props,t=e.notes,n=e.tag,r=e.selectTag,a=e.selectNote,c=function(e,t){var n=k(e,t);return n.length?n[0]:null}(t,n);a(c?c.id:null),r(n)}},{key:"render",value:function(){var e=this,t=this.props,n=t.tag===t.currentTag?"is-selected":"";return a.a.createElement("li",{className:n,onClick:function(){return e.selectCategory()}},this.props.children)}}]),t}(r.Component),A=Object(i.b)(function(e){return{notes:e.notes,currentTag:e.currentTag}},function(e){return Object(u.a)({selectTag:T,selectNote:y},e)})(_),S=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.notes;return a.a.createElement("ul",null,function(e){var t={};for(var n in e)for(var r in e[n].tags)e[n].tags.trash||(t[r]=r);return Object.values(t)}(e).map(function(e,t){return a.a.createElement(A,{tag:e,key:e},e)}))}}]),t}(r.Component),D=Object(i.b)(function(e){return{notes:e.notes}})(S),I=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"side-bar"},a.a.createElement(A,{tag:null},"All"),a.a.createElement(D,null),a.a.createElement(A,{tag:"trash"},"Trash"))}}]),t}(r.Component),R=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.note,n=e.selectNote;return a.a.createElement("li",{onClick:function(){return n(t.id)}},t.text)}}]),t}(r.Component),L=Object(i.b)(null,function(e){return Object(u.a)({selectNote:y},e)})(R),P=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currentTag,n=e.createNote;return a.a.createElement("button",{onClick:function(){return n(t)}},"Create New")}}]),t}(r.Component),G=Object(i.b)(function(e){return{currentTag:e.currentTag}},function(e){return Object(u.a)({createNote:O},e)})(P),W=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.notes,n=e.currentTag;return a.a.createElement("div",{className:"preview-list"},a.a.createElement("div",null,!w(n)&&a.a.createElement(G,null)),a.a.createElement("ul",null,k(t,n).map(function(e,t){return a.a.createElement(L,{note:e,key:t})})))}}]),t}(r.Component),F=Object(i.b)(function(e){return{notes:e.notes,currentTag:e.currentTag}})(W),B=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={value:""},n}return Object(f.a)(t,e),Object(l.a)(t,[{key:"setText",value:function(e){this.setState({value:e.target.value})}},{key:"submitTag",value:function(e){var t=this.props,n=t.addTag,r=t.id;e.preventDefault(),n(r,this.state.value),this.setState({value:""})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:function(t){return e.submitTag(t)}},a.a.createElement("input",{type:"text",placeholder:"enter tag...",value:this.state.value,onChange:function(t){return e.setText(t)}})))}}]),t}(r.Component),H=Object(i.b)(function(e){return{id:e.id}},function(e){return Object(u.a)({addTag:j},e)})(B),J=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.notes,r=e.deleteTag;return a.a.createElement("div",null,function(e,t){return e[t]?Object.values(e[t].tags):[]}(n,t).map(function(e,n){return a.a.createElement("span",{onClick:function(){return r(t,e)},key:n},e)}))}}]),t}(r.Component),M=Object(i.b)(function(e){return{id:e.id,notes:e.notes}},function(e){return Object(u.a)({deleteTag:v},e)})(J),Q=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.currentTag;return a.a.createElement("div",null,!w(e)&&[a.a.createElement(M,{key:1}),a.a.createElement(H,{key:2})])}}]),t}(r.Component),U=Object(i.b)(function(e){return{currentTag:e.currentTag}})(Q),$=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"renderTextArea",value:function(){var e=this.props,t=e.id,n=e.notes,r=e.currentTag,c=e.editNote;return k(n,r).length>0?a.a.createElement("textarea",{value:function(e,t){return t?e[t].text:""}(n,t),placeholder:"...",onChange:function(e){return c(t,e.target.value)},disabled:w(r)}):"No notes!"}},{key:"render",value:function(){return a.a.createElement("div",{className:"text-area-container"},this.renderTextArea())}}]),t}(r.Component),q=Object(i.b)(function(e){return{id:e.id,notes:e.notes,currentTag:e.currentTag}},function(e){return Object(u.a)({editNote:g},e)})($),z=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"sendNoteToTrash",value:function(){var e=this.props,t=e.id,n=e.notes,r=e.currentTag,a=e.selectNote,c=e.selectTag;(0,e.trashNote)(t),a(C(t,n,r)),function(e,t,n){return k(e,n).length<2}(n,0,r)&&c(null)}},{key:"render",value:function(){var e=this,t=this.props,n=t.notes,r=t.currentTag;return a.a.createElement("button",{onClick:function(){return e.sendNoteToTrash()},disabled:x(n,r)},"Trash")}}]),t}(r.Component),K=Object(i.b)(function(e){return{id:e.id,currentTag:e.currentTag,notes:e.notes}},function(e){return Object(u.a)({selectNote:y,selectTag:T,trashNote:E},e)})(z),V=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"restoreNoteFromTrash",value:function(){var e=this.props,t=e.id,n=e.notes,r=e.currentTag,a=e.selectNote;(0,e.restoreNote)(t),a(C(t,n,r))}},{key:"render",value:function(){var e=this,t=this.props,n=t.notes,r=t.currentTag;return a.a.createElement("button",{onClick:function(){return e.restoreNoteFromTrash()},disabled:x(n,r)},"Restore")}}]),t}(r.Component),X=Object(i.b)(function(e){return{id:e.id,currentTag:e.currentTag,notes:e.notes}},function(e){return Object(u.a)({selectNote:y,restoreNote:m},e)})(V),Y=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"deleteNoteFromTrash",value:function(){var e=this.props,t=e.id,n=e.notes,r=e.currentTag,a=e.deleteNote,c=e.selectNote;a(t),c(C(t,n,r))}},{key:"render",value:function(){var e=this,t=this.props,n=t.notes,r=t.currentTag;return a.a.createElement("button",{onClick:function(){return e.deleteNoteFromTrash()},disabled:x(n,r)},"Delete")}}]),t}(r.Component),Z=Object(i.b)(function(e){return{id:e.id,notes:e.notes,currentTag:e.currentTag}},function(e){return Object(u.a)({deleteNote:N,selectNote:y},e)})(Y),ee=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"button-container"},w(this.props.currentTag)?[a.a.createElement(X,null),a.a.createElement(Z,null)]:a.a.createElement(K,null))}}]),t}(r.Component),te=Object(i.b)(function(e){return{currentTag:e.currentTag}})(ee),ne=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"current-note"},a.a.createElement(U,null),a.a.createElement(te,null),a.a.createElement(q,null))}}]),t}(r.Component),re=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.loadInitialState)()}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(I,null),a.a.createElement(F,null),a.a.createElement(ne,null))}}]),t}(r.Component),ae=Object(i.b)(null,function(e){return Object(u.a)({loadInitialState:h},e)})(re),ce=n(11),oe=Object(u.b)({notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!==typeof t)return t;for(var r in t)n[r]=e(t[r],n[r]);return n}(e);switch(t.type){case"INIT_APP":return t.payload.notes;case"CREATE_NOTE":var r=t.payload.id;return Object(ce.a)({},n,Object(p.a)({},r,t.payload));case"EDIT_NOTE":var a=t.payload,c=a.id,o=a.text,u=n[c];return Object(ce.a)({},n,Object(p.a)({},c,Object(ce.a)({},u,{text:o})));case"ADD_TAG":var i=t.payload,s=i.id,l=i.tag;return n[s].tags[l]=l,n;case"DELETE_TAG":var d=t.payload,b=d.id,f=d.tag;return delete n[b].tags[f],n;case"TRASH_NOTE":return n[t.payload].tags.trash="trash",n;case"RESTORE_NOTE":return delete n[t.payload].tags.trash,n;case"DELETE_NOTE":return delete n[t.payload],n;default:return n}},id:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_APP":case"CREATE_NOTE":return t.payload.id;case"SELECT_NOTE":return t.payload;default:return e}},currentTag:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_APP":return t.payload.currentTag;case"SELECT_TAG":return t.payload;default:return e}}}),ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var se=Object(u.c)(oe);window.store=se,o.a.render(a.a.createElement(i.a,{store:se},a.a.createElement(ae,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/note-taking-tool",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/note-taking-tool","/service-worker.js");ue?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ie(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ie(e)})}}()}},[[19,2,1]]]);
//# sourceMappingURL=main.967e50a3.chunk.js.map