class LinkedNode<T> {
  public element: T
  public next: any
  constructor(element: T) {
    this.element = element
    this.next = null
  }
}

export class LinkedList {
  private length: number
  private head: LinkedNode<any> | null
  constructor() {
    this.length = 0
    this.head = null
  }

  // 向链表最后一位添加
  append(element: any): void {
    const node = new LinkedNode(element)
    if(this.head) {
      let lastNode = this.head
      while (lastNode.next) {
        lastNode = lastNode.next
      }
      lastNode.next = node
    } else {
      this.head = node
    }
    this.length++
  }

  // 在链表中插入节点
  insert(position: number, element: any): any {
    if(position >= 0 && position <= this.length) {
      let current = this.head
      const node = new LinkedNode(element)
      if(position === 0) {
        this.head = node
        this.head.next = current
      } else {
        let prev: LinkedNode<any>
        let index = 0
        while(index !== position) {
          prev = current
          current = current.next
          index++
        }
        prev.next = node
        node.next = current
      }
      this.length++
    } else {
      return false
    }
  }

  // 移除链表中某个位置节点
  removeAt(position: number): any {
    if(position > -1 && position < this.length) {
      let current = this.head
      if(position === 0) {
        this.head = this.head.next
      } else {
        let index = 0
        let prev: LinkedNode<any>
        while (index !== position) {
          prev = current
          current = current.next
          index++
        }
        prev.next = current.next
      }
      this.length--
      return current.element
    } else {
      return null
    }
  }

  // 移除链表中某个元素
  remove(element: any) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  // 寻找链表中的元素
  indexOf(element: any): number {
    let index = 0
    let current = this.head
    while(current) {
      if(current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  // 链表是否为空
  isEmpty(): boolean {
    return this.head === null
  }

  // 链表的长度
  size(): number {
    return this.length
  }

  // 获取链表的起点
  getHead() {
    return this.head
  }

  // 将链表转为字符串
  toString(): string {
    let str = ''
    let current = this.head
    while(current) {
      str += current.element + (current.next ? ' ' : '')
      current = current.next
    }
    return str
  }
}
