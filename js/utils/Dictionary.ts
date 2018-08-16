import { LinkedList } from "./LinkedList";

export class Dictionary {
  private items: any
  constructor() {
    this.items = {}
  }

  set(key: string, value: any) {
    this.items[key] = value
  }
  
  delete(key: string) {
    if(this.has(key)) {
      delete this.items[key]
      return true
    } else {
      return false
    }
  }
  
  has(key: string) {
    return this.items.hasOwnProperty(key)
  }

  get(key: string) {
    return this.items[key]
  }

  clear() {
    this.items = {}
  }

  size() {
    return this.keys().length
  }

  keys(): any[] {
    return Object.keys(this.items)
  }

  values() {
    const values: any[] = []
    this.keys().forEach(key => {
      values.push(this.items[key])
    })
    return values
  }

  getItems() {
    return this.items
  }
}

function djb2HashCode(key: string) {
  let hash = 5381;
  // 将所有字符的 ASCII 码加到一起
  key.split('').forEach((str, index) => {
    hash += key.charCodeAt(index) + hash * 33
  })
  // 为了得到一个更小的值，取余(实际应用中不需要)
  return hash % 1013
}

class ValuePair {
  key: string
  value: any
  constructor(key: string, value: any) {
    this.key = key
    this.value = value
  }

  toString() {
    return `[${this.key} - ${this.value}]`
  }
}

export class HashTable {
  private table: LinkedList[]
  constructor() {
    this.table = []
  }

  put(key: string, value: any) {
    const position = djb2HashCode(key)
    if(!this.table[position]) {
      this.table[position] = new LinkedList()
    }
    this.table[position].append(new ValuePair(key, value))
  }

  get(key: string) {
    const linkedList = this.table[djb2HashCode(key)]
    if(linkedList) {
      let current = linkedList.getHead()
      while(current.next) {
        if(current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
      if(current.element.key === key) {
        return current.element.value
      }
    }
    return undefined
  }

  remove(key: string) {
    const position = djb2HashCode(key)
    const linkedList = this.table[position]
    if(linkedList) {
      let current = linkedList.getHead()
      while(current.next) {
        // 如果 key 相等,移除这个节点
        if(current.element.key === key) {
          linkedList.remove(current.element)
          // 检查链表,为空时赋值为空
          if(linkedList.isEmpty()) {
            this.table[position] = undefined
          }
          return true
        }
        current = current.next
      }
      if(current.element.key === key) {
        linkedList.remove(current.element)
        if(linkedList.isEmpty()) {
          this.table[position] = undefined
        }
        return true
      }
    }
    return false
  }
}

