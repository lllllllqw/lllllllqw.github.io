interface TraverseCb {
  (key: number): void
}

class TreeNode {
  constructor(
    public key: number,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}

class Tree {
  root: TreeNode | null = null

  insert(key: number) {
    const newNode = new TreeNode(key)
    if (!this.root) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }
  }

  inOrderTraverse(cb: (key: number, deep: number) => void) {
    if (!this.root) {
      return
    }
    inOrderTraverse(this.root, cb, 1)
  }

  preOrderTraverse(cb: TraverseCb) {
    if (!this.root) {
      return
    }
    preOrderTraverse(this.root, cb)
  }

  postOrderTraverse(cb: TraverseCb) {
    if (!this.root) {
      return
    }
    postOrderTraverse(this.root, cb)
  }

  removeNode(key: number) {
    this.root = removeNode(this.root, key)
  }
}

function insertNode(node: TreeNode, newNode: TreeNode) {
  if (node.key > newNode.key) {
    if (!node.left) {
      node.left = newNode
    } else {
      insertNode(node.left, newNode)
    }
  } else if (node.key < newNode.key) {
    if (!node.right) {
      node.right = newNode
    } else {
      insertNode(node.right, newNode)
    }
  } else {
    return
  }
}

function inOrderTraverse(
  node: TreeNode | null,
  cb: (key: number, deep: number) => void,
  deep: number
) {
  if (!node) {
    return
  }
  inOrderTraverse(node.left, cb, deep + 1)
  cb(node.key, deep)
  inOrderTraverse(node.right, cb, deep + 1)
}

function preOrderTraverse(node: TreeNode | null, cb: TraverseCb) {
  if (!node) {
    return
  }
  cb(node.key)
  preOrderTraverse(node.left, cb)
  preOrderTraverse(node.right, cb)
}

function postOrderTraverse(node: TreeNode | null, cb: TraverseCb) {
  if (!node) {
    return
  }
  postOrderTraverse(node.left, cb)
  postOrderTraverse(node.right, cb)
  cb(node.key)
}

function removeNode(node: TreeNode | null, key: number): TreeNode | null {
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
    if (!node.left && !node.right) {
      return null
    } else if (!node.left) {
      return node.right
    } else if (!node.right) {
      return node.left
    } else {
      const minNode = findMinNode(node.right)
      node.key = minNode.key
      node.right = removeNode(node.right, minNode.key)
      return node
    }
  }
}

function findMinNode(node: TreeNode): TreeNode {
  let n = node
  while (n.left) {
    n = n.left
  }
  return n
}

const t = new Tree()

t.insert(11)
t.insert(7)
t.insert(15)
t.insert(5)
t.insert(3)
t.insert(9)
t.insert(8)
t.insert(10)
t.insert(13)
t.insert(12)
t.insert(14)
t.insert(20)
t.insert(18)
t.insert(25)
t.insert(6)

JSON.stringify(t.root, undefined, 2) /*?*/

t.inOrderTraverse((key, deep) => {
  console.log(key)
})

t.removeNode(11)

t.inOrderTraverse((key, deep) => {
  console.log(key)
})

t.preOrderTraverse(key => {
  console.log(key)
})

t.postOrderTraverse(key => {
  console.log(key)
})
