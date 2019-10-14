(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{250:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This feature is to respond to people's needs. In fact, I do not use this feature in company projects or personal projects. In the past, those traditional back-end frameworks often included this feature. Since most of the previous back-end projects were in the form of multiple pages, the navigation feature of the tags view still has some basic meaning. Most of them are based on the iframe.")]),t._v(" "),a("p",[t._v("However, with the development of the times, the background projects are almost all spa (single page web application single page development), and it is obviously not appropriate to use the previous way to implement the navigation of the tags.")]),t._v(" "),a("p",[t._v("So the current plan is:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("The current tag-view maintains two arrays.")]),t._v(" "),a("ul",[a("li",[t._v("visitedViews : The page the user has visited is a collection of tag arrays displayed in the tags bar navigation.")]),t._v(" "),a("li",[t._v("cachedViews : The actual keep-alive route. You can set whether or not you want to cache the route by configuring the route with "),a("code",[t._v("meta.noCache")]),t._v(".\n"),a("router-link",{attrs:{to:"./router-and-nav.html"}},[t._v("Configuration Document")])],1)]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("Because keep-alive and router-view are strongly coupled, and it is not difficult to find the keep-alive include default is to match the component's name, it is necessary to look at the document and source code when writing the routing component corresponding to the routing router and route.")]),t._v(" "),a("p",[t._v("Make sure the name of both is exactly the same. (Keep in mind that the naming of the name is as unique as possible. Remember not to duplicate the naming of some components, or to refer to the last memory overflow issue recursively.)")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),a("p",[t._v("Make sure that the two names are the same. Remember not to write duplicates or mistakes. By default, if you do not write name, it will not be cached.")]),t._v(" "),a("p",[t._v("For details, see\n"),a("a",{attrs:{href:"https://github.com/vuejs/vue/issues/6938#issuecomment-345728620",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("ul",[a("li",[a("p",[t._v("Instead of using keep-alive's include, keep-alive caches all components directly. This way, it supports the aforementioned business situation.\nTo "),a("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/layout/components/AppMain.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/layout/components/AppMain.vue"),a("OutboundLink")],1),t._v(" remove the "),a("code",[t._v("include")]),t._v(" related code. Of course, using keep-alive directly also has disadvantages. He can't dynamically delete the cache. You can only help it to set a maximum cache instance limit.\n"),a("a",{attrs:{href:"https://github.com/vuejs/vue/issues/6509",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),a("OutboundLink")],1)])]),t._v(" "),t._m(12)]),t._v(" "),a("h2",{attrs:{id:"affix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#affix","aria-hidden":"true"}},[t._v("#")]),t._v(" Affix "),a("Badge",{attrs:{text:"v3.10.0+"}})],1),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"tags-view"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tags-view","aria-hidden":"true"}},[this._v("#")]),this._v(" Tags View")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Use a combination of "),e("code",[this._v("keep-alive")]),this._v(" and "),e("code",[this._v("router-view")]),this._v(" .")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Code: "),e("code",[this._v("@/layout/components/AppMain.vue")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keep-alive")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":include")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cachedViews"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keep-alive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The actual action of the tags view navigation is equivalent to another nav display mode. In fact, it is a router-link, and click to jump to the corresponding page. Then we are listening to changes in the route "),e("code",[this._v("$route")]),this._v(" to determine if the current page needs to be reloaded or cached.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"visitedviews-cachedviews"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#visitedviews-cachedviews","aria-hidden":"true"}},[this._v("#")]),this._v(" visitedViews && cachedViews")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"precautions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#precautions","aria-hidden":"true"}},[this._v("#")]),this._v(" Precautions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("DEMO:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Define routes")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'create-form'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views/form/create'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'createForm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'createForm'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//The corresponding view of the route. such as: form/create")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'createForm'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"cache-is-not-suitable-for-the-scene"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-is-not-suitable-for-the-scene","aria-hidden":"true"}},[this._v("#")]),this._v(" Cache is not suitable for the scene")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Currently cached solutions are not suitable for certain services, such as the article details page such as "),e("code",[this._v("/article/1")]),this._v("、"),e("code",[this._v("/article/2")]),this._v(", their routes are different but the corresponding components are the same, so their component name is the same, As mentioned earlier, the "),e("code",[this._v("keep-alive")]),this._v(" include can only be cached based on the component name, so this is a problem. There are currently two solutions:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("Use a browser cache scheme such as localStorage, own to control the cache.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the Affix attribute is added to the route, the current "),e("code",[this._v("tag")]),this._v(" will be fixed in "),e("code",[this._v("tags-view")]),this._v(" (cannot be deleted).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/8121621/52840303-cd5c9280-3133-11e9-928f-e2825eaab51b.png",alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Layout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    redirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dashboard'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dashboard'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views/dashboard/index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Dashboard'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dashboard'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dashboard'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          noCache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          affix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"remove"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remove","aria-hidden":"true"}},[this._v("#")]),this._v(" Remove")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In fact, keep-alive "),e("a",{attrs:{href:"(https://github.com/vuejs/vue/blob/dev/src/core/components/keep-alive.js)"}},[this._v("source code")]),this._v(" is not complicated, but the logic is still quite around. Before the vue author himself fixed a bug, he was not careful, he made two versions to fix it, so if there is no user who needs the navigation bar, it is recommended Remove this feature.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("First find\n"),e("code",[this._v("@/layout/components/AppMain.vue")]),this._v(" and remove "),e("code",[this._v("keep-alive")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app-main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fade-transform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("mode")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("out-in"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- or <router-view :key="key"/> --\x3e')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Remove the entire file "),a("code",[t._v("@/layout/components/TagsView.vue")]),t._v(". Then, remove the reference to "),a("code",[t._v("TagsView")]),t._v(" in "),a("code",[t._v("@/layout/components/index")]),t._v(" and in "),a("code",[t._v("@/layout/Layout.vue")]),t._v(". Finally, remove the file "),a("code",[t._v("@/store/modules/tagsView")]),t._v(".")])}],!1,null,null,null);e.default=n.exports}}]);