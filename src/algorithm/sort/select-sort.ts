import { swap } from '@/utils/index'
import { mockArray } from 'mock/index'

function selectSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j + 1] < arr[minIndex]) {
        minIndex = j + 1
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex)
    }
  }
}
const arr = mockArray.number
selectSort(arr)

arr
