## 笔记

### 语法
- /^0/  需要0开头
- /0$/ 需要0结尾
- /0{3}/ 匹配3个0
- /[0-9]/ 匹配0到9(Unicode编码顺序)

### 方法
- RegExp.prototype.test(str) ---> boolean  是否有符合规则字符
- String.prototype.search(str) ---> number 第一个符合的索引,否则返回-1