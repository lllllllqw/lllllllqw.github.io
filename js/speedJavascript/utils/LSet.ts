interface Object {
  [key: string]: any
}

export class LSet {
  private items: Object
  constructor() {
    this.items = {}
  }

  private getKeys() {
    return Object.keys(this.items)
  }

  add(value: any) {
    if(!this.has(value)) {
      this.items[value] = value
      return true
    } else {
      return false
    }
  }

  delete(value: any) {
    if(this.has(value)) {
      delete this.items[value]
      return true
    }
    return false
  }

  has(value: any): any {
    return this.items.hasOwnProperty(value)
  }

  clear() {
    this.items = {}
  }

  size() {
    return this.getKeys().length
  }

  values() {
    const values: any[] = []
    this.getKeys().forEach(key => {
      values.push(this.items[key])
    })
    return values
  }
}