import { mockArray } from 'mock/index'

function arraySum(arr: number[]): number {
  if (arr.length === 1) {
    return arr[0]
  }

  return arr[arr.length - 1] + arraySum(arr.slice(0, arr.length - 1))
}

arraySum(mockArray.number) /* ?*/
