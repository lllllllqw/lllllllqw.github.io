import { mockArray } from 'mock/index'
import { swap } from '@/utils/index'

const arr = mockArray.number /* ?*/

function bubbleSort(arr: number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
}

bubbleSort(arr)
arr
