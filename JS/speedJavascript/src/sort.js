let arr = [111,1, 23, 13, 432, 54, 4312, 321, 11, 2]

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 冒泡排序
function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 1; j < arr.length; j++) {
      if(arr[j - 1] > arr[j]) {
        swap(arr, j, j - 1)
      }
    }
  }
}

// 选择排序
function selectSort(arr) {
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
}

