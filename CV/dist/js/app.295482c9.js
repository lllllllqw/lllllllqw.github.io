webpackJsonp([1],{"+VGo":function(n,e){},0:function(n,e,t){n.exports=t("NHnr")},GQxv:function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("/5sW"),o=(t("y9m4"),t("SldL"),t("7hDC")),i=t.n(o),s=t("dZBD"),a=t.n(s);const l=["\n/*\n* 知道我是谁吗？\n* 我就是萌新前端攻城狮lqw啦！\n* (*^▽^*)\n* 页面是不是太单调了~\n* 那么我们来美化一下吧\n*/\n/* 首先加上过渡效果 */\n* {\n  transition: all 0.5s;\n}\n/* 然后加上背景色~ */\nhtml {\n  background: #002b36;\n}\n/* 有点看不清字了,那我们换个颜色 */\nhtml {\n  color: #eee;\n}\n/* 字太挤了,换一下 */\n.style-editor {\n  width: 45vw;\n  height: 80vh;\n  padding: 1em;\n  margin: 1em;\n  border: 1px solid #ccc;\n  overflow: auto;\n}\n/* 加入代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n/* 不够酷炫,再加点3D效果 */\nhtml {\n  perspective: 1000px;\n}\n.style-editor {\n  transform: rotateY(10deg) translateZ(-100px);\n}\n/* 接下来准备一个编辑器 */\n.cv-editor {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 45vw;\n  height: 80vh;\n  background: #fff;\n  padding: 1em;\n  margin: 1em;\n  color: #222;\n  overflow: auto;\n}\n/* 开始写简历咯 */\n\n","\n这个简历好像差点什么\n对了,这是 Markdown 格式的文本,我需要让它对 HR 更友好一点\n简单,把它转换成 HTML 就行\n","\n\n"],c="\n李其文\n----\n前端小萌新,目前是达美盛南的前端工程师~\n\n技能\n----\n* HTML, CSS, JavaScript\n* Vue, Vue-router, Vuex\n* Element-UI\n\n工作经历\n----\n1.达美盛南(2017/6 - 至今)\n\nGitHub链接\n----\n[lllllllqw](http://www.github.com/lllllllqw)\n";var u=t("OEdS"),d=t.n(u),p={name:"style-editor",props:{code:{type:String,required:!0,default:""}},computed:{highlightedCode:function(){return d.a.highlight(this.code,d.a.languages.css)},codeInStyleTag:function(){return"<style>".concat(this.code,"</style>")}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}},h=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"style-editor"},[t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}}),t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}})])},m=[],g=t("XyMi");function f(n){t("GQxv")}var v=!1,w=f,y=null,b=null,k=Object(g["a"])(p,h,m,v,w,y,b),M=k.exports,x=t("EFqf"),S=t.n(x),H={name:"cv-editor",props:{markdown:{type:String,required:!0,default:""},enableHtml:{type:Boolean,required:!0,default:!1}},computed:{result:function(){return this.enableHtml?S()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}},T=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"cv-editor",class:{"fade-in-animation":n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},E=[];function _(n){t("SDVJ")}var $=!1,C=_,R=null,V=null,q=Object(g["a"])(H,T,E,$,C,R,V),P=q.exports,j={name:"app",components:{StyleEditor:M,CvEditor:P},data:function(){return{styleMsg:"",markdownMsg:"",enableHtml:!1,interval:30}},methods:{startWriting:function(){var n=i()(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:this.enableHtml=!0;case 7:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),progressivelyShowStyle:function(n){var e=this;return new Promise(function(t,r){var o=e.interval,s=i()(regeneratorRuntime.mark(function e(){var r,i,a,c,u,d=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=l[n],r){e.next=3;break}return e.abrupt("return");case 3:i=l.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),a=i-r.length,this.styleMsg.length<i?(c=this.styleMsg.length-a,u=r.substring(c,c+1)||" ",this.styleMsg+=u,"\n"===r.substring(c-1,c)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(s,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);s()})},progressivelyShowResume:function(){var n=this;return new Promise(function(e,t){var r=c.length,o=n.interval,i=function t(){if(n.markdownMsg.length<r){n.markdownMsg=c.substring(0,n.markdownMsg.length+1);n.markdownMsg[n.markdownMsg.length-1];var i=n.markdownMsg[n.markdownMsg.length-2];"\n"===i&&n.$refs.cvEditor&&n.$nextTick(function(){return n.$refs.cvEditor.goBottom()}),setTimeout(t,o)}else e()};i()})}},mounted:function(){var n=i()(regeneratorRuntime.mark(function n(){var e,t;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return this.startWriting(),e=a.a.create({headers:{"Content-Type":"application/json"}}),n.next=4,e.get("http://9bl.bakayun.cn/API/GetVideoInfo.php?aid=4143031&p=1&type=json");case 4:t=n.sent,console.log(t);case 6:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},B=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("style-editor",{ref:"styleEditor",attrs:{code:n.styleMsg}}),t("cv-editor",{ref:"cvEditor",attrs:{markdown:n.markdownMsg,enableHtml:n.enableHtml}})],1)},G=[];function L(n){t("+VGo")}var D=!1,I=L,O=null,J=null,A=Object(g["a"])(j,B,G,D,I,O,J),W=A.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(W)},template:"<App/>",components:{App:W}}).$mount("#app")},SDVJ:function(n,e){}},[0]);
//# sourceMappingURL=app.295482c9.js.map