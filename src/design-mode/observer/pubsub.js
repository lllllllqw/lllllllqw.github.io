// 传统的订阅发布模式
class Pubsub {
  constructor() {
    this.handles = {}
  }

  // 添加订阅
  on(type, handle) {
    this.handles[type] = this.handles[type] || []
    this.handles[type].push(handle)
  }

  // 触发订阅
  emit(...args) {
    const [type, ...handleArgs] = args
    const handles = this.handles[type]
    if(handles) {
      handles.forEach(handle => handle.call(this ,...handleArgs))
    }
    return false
  }

  // 解除订阅
  off(type, handle) {
    const handles = this.handles[type]
    if(!handles) {
      return false
    }
    const index = handles.indexOf(handle)
    if(index > -1) {
      handles.splice(index, 1)
    }
  }
}

const pubsub = new Pubsub()
pubsub.on('xxx', console.log)
pubsub.on('xxx', n => console.log(n + 88))
pubsub.emit('xxx', 1)
pubsub.off('xxx', console.log)

pubsub.emit('xxx', 100)
