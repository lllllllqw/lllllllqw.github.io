class Queue {
  private item: Array<any>

  constructor() {
    this.item = []
  }

  enqueue(...elements: Array<any>) {
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


class Graph {
  vertices: string[]
  adjList: Map<string, string[]>

  constructor() {
    this.vertices = []
    this.adjList = new Map<string, string[]>()
  }

  addVertex(v: string) {
    this.vertices.push(v)
    this.adjList.set(v, [])
  }

  addEdge(v: string, w: string) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
  }

  toString() {
    let str = ''
    this.adjList.forEach((val, key) => {
      str += `${key} --> [${val.join(',')}]\n`
    })
    return str
  }

  breathFirstTraverse (v: string, cb: Function) {
    const initializeColor: () => {[key: string]: 'white' | 'gray' | 'black'} = () => {
      return this.vertices.reduce((map, e) => ({...map, [e]: 'white'}), {})
    }

    const color = initializeColor()
    const queue = new Queue()
    queue.enqueue(v)
    while(!queue.isEmpty()) {
      const u: string = queue.dequeue()
      const neighbors = this.adjList.get(u)
      for(const neighbor of neighbors) {
        if(color[neighbor] === 'white') {
          color[neighbor] = 'gray'
          queue.enqueue(neighbor)
        }
      }
      color[u] = 'black'
      cb(u)
    }
  }

  breathFirstTraversePro (v: string) {
    const initializeColor: () => Record<string, 'white' | 'gray' | 'black'> = () => {
      return this.vertices.reduce((map, e) => ({...map, [e]: 'white'}), {})
    }

    const color = initializeColor()
    const queue = new Queue()
    queue.enqueue(v)
    
    const distances: Record<string, number> = this.vertices.reduce((map, e) => ({...map, [e]: 0}), {})
    const predecessors: Record<string, string> = this.vertices.reduce((map, e) => ({...map, [e]: null}), {})

    while(!queue.isEmpty()) {
      const u: string = queue.dequeue()
      const neighbors = this.adjList.get(u)
      for(const neighbor of neighbors) {
        if(color[neighbor] === 'white') {
          distances[neighbor] = distances[u] + 1
          predecessors[neighbor] = u
          color[neighbor] = 'gray'
          queue.enqueue(neighbor)
        }
      }
      color[u] = 'black'
    }

    return {
      distances,
      predecessors
    }
  }
}

const g = new Graph()
const vertices = ['A','B','C','D','E','F','G','H','I']
for(const v of vertices) {
  g.addVertex(v)
}

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('A', 'D')
g.addEdge('B', 'E')
g.addEdge('B', 'F')
g.addEdge('C', 'D')
g.addEdge('C', 'G')
g.addEdge('D', 'G')
g.addEdge('D', 'H')
g.addEdge('E', 'I')

console.log(g.toString())

g.breathFirstTraverse('A', (v: string) => {
  console.log(v)
})

const info = g.breathFirstTraversePro('A')
console.log(info)
