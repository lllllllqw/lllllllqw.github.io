class Queue {
  constructor() {
    this.item = []
  }
  enqueue(...element) {
    this.item.push(...element)
  }
  dequeue() {
    return this.item.shift()
  }
  front() {
    return this.item[0]
  }
  isEmpty() {
    return !!this.item.length
  }
  size() {
    return this.item.length
  }
  print() {
    console.log(this.item.toString())
  }
}

let queue = new Queue()
queue.enqueue(1,2,34)
queue.print()