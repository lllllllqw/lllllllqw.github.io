class Subject {
  private eventMap: Map<string, Set<Function>>

  constructor() {
    this.eventMap = new Map()
  }

  public subscribe(name: string, fn: Function): Subject {
    if(!this.eventMap.has(name)) {
      this.eventMap.set(name, new Set())
    }
    this.eventMap.get(name).add(fn)
    return this
  }

  public unsubscribe(name: string, fn: Function): Subject {
    if(!this.eventMap.has(name)) {
      return this
    }
    this.eventMap.get(name).delete(fn)
    return this
  }

  emit(name: string, ...args: any[]) {
    const eventSet = this.eventMap.get(name)
    eventSet && eventSet.forEach( (fn) => fn(...args))
  }
}

const sub = new Subject()
const fn = () => {console.log(133323)}
sub.subscribe('test', (e) => {console.log(e)})
sub.subscribe('test', fn)
sub.unsubscribe('test', fn)
