export class Queue<T> {
  private item: Array<T>

  constructor() {
    this.item = []
  }

  enqueue(...elements: Array<T>) {
    this.item.push(...elements)
  }

  dequeue() {
    return this.item.shift()
  }

  front() {
    return this.item[0]
  }

  isEmpty() {
    return this.item.length === 0
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