export const me = [`
/*
* 知道我是谁吗？
* 我就是萌新前端攻城狮lqw啦！
* (*^▽^*)
* 页面是不是太单调了~
* 那么我们来美化一下吧
*/
/* 首先加上过渡效果 */
* {
  transition: all 0.5s;
}
/* 然后加上背景色~ */
html {
  background: #002b36;
}
/* 有点看不清字了,那我们换个颜色 */
html {
  color: #eee;
}
/* 字太挤了,换一下 */
.style-editor {
  width: 45vw;
  height: 80vh;
  padding: 1em;
  margin: 1em;
  border: 1px solid #ccc;
  overflow: auto;
}
/* 加入代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }
/* 不够酷炫,再加点3D效果 */
html {
  perspective: 1000px;
}
.style-editor {
  transform: rotateY(10deg) translateZ(-100px);
}
/* 接下来准备一个编辑器 */
.cv-editor {
  position: fixed;
  top: 0;
  right: 0;
  width: 45vw;
  height: 80vh;
  background: #fff;
  padding: 1em;
  margin: 1em;
  color: #222;
  overflow: auto;
}
/* 开始写简历咯 */

`,
`
这个简历好像差点什么
对了,这是 Markdown 格式的文本,我需要让它对 HR 更友好一点
简单,把它转换成 HTML 就行
`,
`

`
]

export const fullMarkdown = `
李其文
----
前端小萌新,目前是达美盛南的前端工程师~

技能
----
* HTML, CSS, JavaScript
* Vue, Vue-router, Vuex
* Element-UI

工作经历
----
1.达美盛南(2017/6 - 至今)

GitHub链接
----
[lllllllqw](http://www.github.com/lllllllqw)
`
