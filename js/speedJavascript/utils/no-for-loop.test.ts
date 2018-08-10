import { reduce, flatten } from './no-for-loop'

const numberArr = [2, 4, 5, 6]
test(`reduce 函数累加 ${numberArr}`, () => {
  expect(reduce.call(numberArr, (prev: number, next: number) => {
    return prev + next
  })).toBe(17)
})

const multidimensionalArray = [11, [22, [33]], [44]]
test('扁平化数组', () => {
  expect(flatten(multidimensionalArray)).toEqual([11, 22, 33, 44])
})
