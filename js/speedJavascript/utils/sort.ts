let arr = [111,1, 23, 13, 432, 54, 4312, 321, 11, 2]

function swap(arr: Array<number>, i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 冒泡排序
function bubbleSort(arr: Array<number>): Array<number> {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 1; j < arr.length; j++) {
      if(arr[j - 1] > arr[j]) {
        swap(arr, j, j - 1)
      }
    }
  }
  return arr
}

// 选择排序
function selectSort(arr: Array<number>): Array<number> {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      swap(arr, minIndex, i)
    }
  }
  return arr
}

// 插入排序
function insertSort(arr: Array<number>): Array<number> {
  let i = 1
  while(i < arr.length) {
    const val = arr[i]
    let j = i - 1
    while(j > -1 && arr[j] > val) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = val
    i++
  }
  return arr
}

// 合并两个有序数组
function merge(left: Array<number>, right: Array<number>): Array<number> {
  const result = []
  while(left.length && right.length) {
    if(left[0] > right[0]) {
      result.push(right.shift())
    } else {
      result.push(left.shift())
    }
  }
  result.push(...left, ...right)
  return result
}

// 归并排序的递归实现(调用栈过多,数组很长时容易造成栈溢出)
function mergeSort(arr: Array<number>): Array<number>{
  if(arr.length === 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  
  return merge(mergeSort(left), mergeSort(right))
}

// 递归排序的迭代实现, 减少调用栈
function mergeSort2(arr: Array<number>): Array<number> {
  if (arr.length === 1) {
    return arr
  }

  const work = arr.map(num => [num])

  for(let limit = arr.length; limit > 1; limit = Math.floor((limit + 1) / 2) ) {
    for(let i = 0, j = 0; j < limit; i++, j += 2) {
      work[i] = merge(work[j], work[j + 1])
    }
  }

  return work[0];
}

// 快速排序
function quickSort(arr: Array<number>, left?: number, right?: number): Array<number> {
  // 如果是第一次, left 置为0, right 置为 length
  left = left === undefined ? 0 : left
  right = right === undefined ? arr.length - 1 : right

  // 退出排序的边界条件
  if(left < right) {
    // 排序数组, 返回轴心所在索引
    const partitionIndex = partition(arr, left, right)
    // 对上个轴心左右边继续排序
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }

  return arr
}

// 将 left 作为轴心,将数组排列为轴心左边比它小,右边比它大的数组
function partition(arr: Array<number>, left: number, right: number): number {
  // 轴心
  let axis = left
  // 待交换索引
  let index = axis + 1

  for(let i = index; i < right; i++) {
    // 如果对比值小于轴心值,与待交换索引交换,并且待交换索引向右挪一位
    if(arr[i] < arr[axis]) {
      swap(arr, i, index)
      index++
    }
  }
  // 将待交换索引向左挪一位,获得最右边比当前轴心小的值的索引
  index--
  // 交换轴心与其位置
  swap(arr, axis, index)
  // 返回轴心位置
  return index
}