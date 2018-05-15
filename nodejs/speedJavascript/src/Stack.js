class Stack {
  constructor(_default = []) {
    this.items = [..._default]
  }
  // 添加一个（或几个）新元素到栈顶。
  push(...args) {
    this.items.push(...args)
  }
  // 移除栈顶的元素，同时返回被移除的元素。
  pop() {
    return this.items.pop()
  }
  // 返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返 回它）
  peek() {
    return this.items[this.items.length - 1]
  }
  // 如果栈里没有任何元素就返回true，否则返回false。
  isEmpty() {
    return this.items.length === 0
  }
  // 移除栈里的所有元素。
  clear() {
    this.items = []
  }
  // 返回栈里的元素个数。这个方法和数组的length属性很类似。
  size() {
    return this.items.length
  }
  // 输出栈内所有内容
  print() {
    return this.items.toString()
  }
}

module.exports = Stack