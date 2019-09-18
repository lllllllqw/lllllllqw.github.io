import { Queue } from "./Queue";
import { Stack } from "./Stack";

export class Graph {
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
    (this.adjList.get(v) as string[]).push(w);
    (this.adjList.get(w) as string[]).push(v);
  }

  toString() {
    let str = ''
    this.adjList.forEach((val, key) => {
      str += `${key} --> [${val.join(',')}]\n`
    })
    return str
  }

  initializeColor() {
    const color: Record<string, 'white' | 'gray' | 'black' > = {}
    for(const vertice of this.vertices) {
      color[vertice] = 'white'
    }
    return color
  }

  breadthFirstSearch(vertice: string, cb?: (v: string) => void) {
    if(this.vertices.includes(vertice)) {
      const colorMap = this.initializeColor()
      const verticesQueue = new Queue<string>()
      const depthMap: Record<string, number> = {}
      const prevMap: Record<string, string | null> = {}

      verticesQueue.enqueue(vertice)
      colorMap[vertice] = 'gray'
      depthMap[vertice] = 0
      prevMap[vertice] = null

      while(!verticesQueue.isEmpty()) {
        const v = verticesQueue.dequeue() as string
        const neighbors = this.adjList.get(v) as string[]
        for(const neighbor of neighbors) {
          if(colorMap[neighbor] === 'white') {
            verticesQueue.enqueue(neighbor)
            colorMap[neighbor] = 'gray'
            depthMap[neighbor] = (depthMap[v] as number) + 1
            prevMap[neighbor] = v
          }
        }
        colorMap[v] = 'black'
        if(cb) {
          cb(v)
        }
      }

      return {
        depthMap,
        prevMap
      }
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

const treeInfo = g.breadthFirstSearch('A', (s) => {
  console.log(s)
})

if(treeInfo) {
  const {depthMap, prevMap} = treeInfo
  const depthList = Object.keys(depthMap).map(key => {
    const depth = depthMap[key]
    return depth
  })

  const maxDepth = Math.max(...depthList)
  console.log("TCL: maxDepth", maxDepth)

  const fromV = 'A'
  let toV = 'I'
  const pathStack = new Stack()
}