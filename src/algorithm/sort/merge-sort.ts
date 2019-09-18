import { mockArray } from 'mock/index'

function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) {
    return arr
  }
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle, arr.length)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(al: number[], ar: number[]): number[] {
  const res: number[] = []
  let il = 0
  let ir = 0
  while (il < al.length && ir < ar.length) {
    if (al[il] < ar[ir]) {
      res.push(al[il])
      il++
    } else {
      res.push(ar[ir])
      ir++
    }
  }

  res.push(...al.slice(il, al.length))
  res.push(...ar.slice(ir, ar.length))
  return res
}

const arr = mergeSort(mockArray.number)

arr
