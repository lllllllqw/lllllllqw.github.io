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
.style-editor-container {
  border: 1px solid #ccc;
  overflow: auto;
  width: 45vw;
  height: 80vh;
  padding: 1em;
  margin: 1em;
}
/* 代码是不是 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }
`]

export const fullMarkdown = `这是markdown语法`
