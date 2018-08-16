class TreeNode {
  key: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(key: number) {
    // 节点的键
    this.key = key
    // 节点的左子节点
    this.left = null
    // 节点的右子节点
    this.right = null
  }
}

class BinarySearchTree {
  root: TreeNode | null
  constructor() {
    this.root = null
  }

  // 插入一个键
  insert(key: number) {
    
  }

  // 查找一个键,存在则返回 true ,不存在返回 false
  search(key: number) {

  }

  // 通过中序遍历所有节点
  inOrderTraverse() {

  }

  // 通过先序遍历所有节点
  preOrderTraverse() {

  }
  
  // 通过后序方式遍历所有节点
  postOrderTraverse() {

  }

  // 返回树中最小的键
  min() {

  }

  // 返回树中最大的键
  max() {

  }

  // 移除树中某个键
  remove(key: number) {

  }

}