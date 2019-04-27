class BSNode {
  key: number
  left: BSNode | null
  right: BSNode | null
  constructor(key: number) {
    // 节点的键
    this.key = key
    // 节点的左子节点
    this.left = null
    // 节点的右子节点
    this.right = null
  }
}

interface TraverseCallback {
  (key: number): void
}

class BinarySearchTree {
  root: BSNode | null
  constructor() {
    this.root = null
  }

  // 插入一个键
  insert(key: number) {
    const { root } = this
    const node = new BSNode(key)

    if (root === null) {
      this.root = node
    } else {
      insertNode(root, node)
    }
  }

  // 查找一个键,存在则返回 true ,不存在返回 false
  search(key: number) {
    return searchNode(this.root, key)
  }

  // 通过中序遍历所有节点
  inOrderTraverse(cb: TraverseCallback) {
    inOrderTraverse(this.root, cb)
  }

  // 通过先序遍历所有节点
  preOrderTraverse(cb: TraverseCallback) {
    preOrderTraverse(this.root, cb)
  }

  // 通过后序方式遍历所有节点
  postOrderTraverse(cb: TraverseCallback) {
    postOrderTraverse(this.root, cb)
  }

  // 返回树中最小的键
  min() {
    if (!this.root) {
      return null
    }
    let minNode = this.root
    while (minNode && minNode.left) {
      minNode = minNode.left
    }

    return minNode.key
  }

  // 返回树中最大的键
  max() {
    if (!this.root) {
      return null
    }
    let maxNode = this.root
    while (maxNode && maxNode.right) {
      maxNode = maxNode.right
    }

    return maxNode.key
  }

  // 移除树中某个键
  remove(key: number) {
    this.root = removeNode(this.root, key)
  }
}

function insertNode(node: BSNode, newNode: BSNode): void {
  if (node.key > newNode.key) {
    if (node.left === null) {
      node.left = newNode
      return
    } else {
      insertNode(node.left, newNode)
    }
  } else {
    if (node.right === null) {
      node.right = newNode
    } else {
      insertNode(node.right, newNode)
    }
  }
}

function inOrderTraverse(node: BSNode, cb: TraverseCallback) {
  if (!node) {
    return
  }
  inOrderTraverse(node.left, cb)
  cb(node.key)
  inOrderTraverse(node.right, cb)
}

function preOrderTraverse(node: BSNode, cb: TraverseCallback) {
  if (!node) {
    return
  }
  cb(node.key)
  preOrderTraverse(node.left, cb)
  preOrderTraverse(node.right, cb)
}
function postOrderTraverse(node: BSNode, cb: TraverseCallback) {
  if (!node) {
    return
  }
  postOrderTraverse(node.left, cb)
  postOrderTraverse(node.right, cb)
  cb(node.key)
}

function searchNode(node: BSNode | null, key: number): boolean {
  if (!node) {
    return false
  }

  if (node.key === key) {
    return true
  }

  if (node.key > key) {
    return searchNode(node.left, key)
  } else {
    return searchNode(node.right, key)
  }
}

function removeNode(node: BSNode | null, key: number): BSNode | null {
  // TODO: 移除节点
  if (!node) {
    return null
  }
  if (node.key > key) {
    node.left = removeNode(node.left, key)
    return node
  } else if (node.key < key) {
    node.right = removeNode(node.right, key)
    return node
  } else {
    const { left, right } = node
    if (!left && !right) {
      return null
    }

    if (!left) {
      return node.right
    }

    if (!right) {
      return node.left
    }

    const minNode = findMinNode(node.right)
    node.key = minNode.key
    node.right = removeNode(node.right, minNode.key)
    return node
  }
}

function findMinNode(node: BSNode) {
  let minNode = node
  while (minNode.left) {
    minNode = minNode.left
  }
  return minNode
}

const tree = new BinarySearchTree()
tree.insert(3)
tree.insert(2)
tree.insert(1)
tree.insert(5)
tree.insert(4)

console.log('TCL: JSON.stringify(tree)', JSON.stringify(tree, (k, v) => v, 2))

tree.inOrderTraverse(key => {
  console.log(key)
})
tree.preOrderTraverse(key => {
  console.log(key)
})
tree.postOrderTraverse(key => {
  console.log(key)
})

console.log(tree.min())
console.log(tree.max())

console.log(tree.search(2))
console.log(tree.search(6))

tree.remove(3)

tree.inOrderTraverse(key => {
  console.log(key)
})
