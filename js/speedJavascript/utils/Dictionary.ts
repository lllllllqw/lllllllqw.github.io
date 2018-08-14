class LObject extends Object {
  [key: string]: any
}

export class Dictionary {
  private items: LObject
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

function loseloseHash(key: string) {
  let hash = 0;
  // 将所有字符的 ASCII 码加到一起
  key.split('').forEach((str, index) => {
    hash += key.charCodeAt(index)
  })
  // 为了得到一个更小的值，取余
  return hash % 37
}

export class HashTable {
  private table: LObject
  constructor() {
    this.table = {}
  }

  put(key: string, value: any) {
    this.table[loseloseHash(key)] = value
  }

  get(key: string) {
    return this.table[loseloseHash(key)]
  }

  remove(key: string) {
    this.table[loseloseHash(key)] = undefined
  }
}