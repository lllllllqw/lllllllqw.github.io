interface Executor<T> {
  (resolve: (value: T) => void, reject: (reason: any) => void): void
}

type Status = 'pending' | 'fulfilled' | 'rejected'

interface OnResolvedCallback<T> {
  (value: T): void
}

interface OnRejectedCallback<T> {
  (reason: any): void
}

class MyPromise<T> {
  status: Status = 'pending'
  value!: T
  reason: any
  onResolvedCallbacks: OnResolvedCallback<T>[] = []
  onRejectedCallbacks: OnRejectedCallback<T>[] = []

  constructor(executor: Executor<T>) {
    executor(this.resolve, this.reject)
  }

  resolve = (value: T) => {
    if (this.status === 'pending') {
      this.status = 'fulfilled'
      this.value = value
      this.onResolvedCallbacks.forEach(cb => {
        cb(this.value)
      })
    }
  }

  reject = (reason: any) => {
    if (this.status === 'pending') {
      this.status = 'rejected'
      this.reason = reason
    }
  }

  then = (cb: OnResolvedCallback<T>) => {
    if (this.status === 'pending') {
      this.onResolvedCallbacks.push(cb)
    }

    if (this.status === 'rejected') {

    }
  }
}

console.log('start')
const p = new MyPromise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('1')
  }, 1000)
})
p.then((val) => {
  console.log(val)
})
console.log('end')

