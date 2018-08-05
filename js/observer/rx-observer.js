// rx 风格的观察者(没学过 rx ,表现大概跟 rx 不一致)
class Observer {
  constructor(_subscribe) {
    this._subscribe = _subscribe
  }

  // 创建观察者
  static create(_subscribe) {
    return new Observer(_subscribe)
  }

  // 接收订阅事件,触发观察者方法(多个订阅者难道触发多次方法吗???)
  // TODO: 弄清楚这个疑问
  subscribe({next, error, complete}) {
    // 创建订阅者
    const sub = new Subscription(next, error, complete)
    this._subscribe(sub)
    return sub
  }
}

class Subscription {
  constructor(next, error, complete) {
    // 订阅者状态
    this._isStopped = false
    this._next = next
    this._error = error
    this._complete = complete
  }

  next(value) {
    if(!this._isStopped) {
      this._next(value)
    }
  }

  error(value) {
    if(!this._isStopped) {
      this.unsubscribe()
      this._error(value)
    }
  }

  complete(value) {
    if(!this._isStopped) {
      this.unsubscribe()
      this._complete(value)
    }
  }

  unsubscribe() {
    this._isStopped = true
  }
}

const observable = Observer.create(observer => {
  observer.next(1)
  observer.next(2)
  setTimeout(() => {
    observer.complete(3)
    observer.next(4)
  }, 1999);
})

const observer = {
  next: value => console.log('next: ' ,value),
  complete: value => console.log('complete: ' ,value),
  error: value => console.log('error: ' ,value)
}

observable.subscribe(observer)