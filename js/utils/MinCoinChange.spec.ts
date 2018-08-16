import { MinCoinChange } from './MinCoinChange'

test('最小找零个数方案', () => {
  const changeInstance = new MinCoinChange([1, 3, 4])
  expect(changeInstance.makeChange(6)).toEqual([3, 3])
  expect(changeInstance.makeChange(7)).toEqual([3, 4])
})