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
