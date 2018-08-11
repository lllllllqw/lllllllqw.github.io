import { reduce, flatten, partition, mixWith } from './no-for-loop'

const numberArr = [2, 4, 5, 6]
const numberArr2 = [1, 2, 3, 4, 5]
const multidimensionalArray = [11, [22, [33]], [44]]

const isOdd = (num: number) => num % 2 === 1

test(`reduce 函数累加 ${numberArr}`, () => {
  expect(reduce.call(numberArr, (prev: number, next: number) => {
    return prev + next
  }))
    .toBe(17)
})

test('扁平化数组', () => {
  expect(flatten(multidimensionalArray))
    .toEqual([11, 22, 33, 44])
})

test('分组测试', () => {
  expect(partition(numberArr, isOdd))
  .toEqual([[5], [2, 4, 6]])
})

test('混合数组测试', () => {
  expect(mixWith((a: number) => (b: number) => a + b)(numberArr)(numberArr2))
  .toEqual([3, 6, 8, 10, 5])
})