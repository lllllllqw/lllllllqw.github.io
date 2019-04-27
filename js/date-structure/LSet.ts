export class LSet {
  private items: any
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

  // 并集: 包含两个集合中所有元素的集合
  union(otherLSet: LSet): LSet {
    const unionLSet = new LSet();
    [...this.values(), ...otherLSet.values()].forEach(value => {
      unionLSet.add(value)
    })
    return unionLSet
  }

  // 交集: 包含两个集合中相同元素的集合
  intersection(otherLSet: LSet): LSet {
    const intersection = new LSet()
    this.values().forEach(value => {
      if(otherLSet.has(value)) {
        intersection.add(value)
      }
    })
    return intersection
  }

  // 差集: 在本集合中并不在另一集合中的元素的集合
  difference(otherLSet: LSet): LSet {
    const difference = new LSet()
    this.values().forEach(value => {
      if(!otherLSet.has(value)) {
        difference.add(value)
      }
    })
    return difference
  }

  // 子集: 在本集合中所有元素都在另一集合中, 则本集合是另一集合的子集
  subset(otherLSet: LSet): boolean {
    const subset = new LSet()
    if(this.size() > otherLSet.size()) {
      return false
    } else {
      return this.values().every(value => {
        return otherLSet.has(value)
      })
    }
  }
}