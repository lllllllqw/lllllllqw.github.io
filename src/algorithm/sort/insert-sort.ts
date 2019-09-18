import { swap } from '@/utils/index'
import { mockArray } from 'mock/index'

const arr = mockArray.number

function insertSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      j
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1)
      } else {
        break
      }
    }
  }
}

insertSort(arr)
arr
