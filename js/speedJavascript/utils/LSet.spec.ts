import { LSet } from './LSet'

function createLSet(values: any[]): LSet {
  const set = new LSet()
  values.forEach(value => {
    set.add(value)
  })
  return set  
}

test('LSet 基础功能', () => {
  const set = createLSet([123, 444, 555])
  set.delete(555)
  
  expect(set.has(123)).toBe(true)
  expect(set.has(555)).toBe(false)
  expect(set.values()).toEqual([123, 444])
  expect(set.size()).toBe(2)
  
  set.clear()
  
  expect(set.size()).toBe(0)
})

const setA = createLSet([1, 2, 3])
const setB = createLSet([2, 3, 4, 5])
test('并集', () => {
  expect(setA.union(setB).values()).toEqual([1, 2, 3, 4, 5])
})

test('交集', () => {
  expect(setA.intersection(setB).values()).toEqual([2, 3])
})

test('差集', () => {
  expect(setA.difference(setB).values()).toEqual([1])
})

const setC = createLSet([1, 2, 3, 4])
test('子集', () => {
  // 非子集情况
  expect(setA.subset(setB)).toBe(false)
  // 自己是自己的子集
  expect(setA.subset(setA)).toBe(true)
  // 正常子集情况
  expect(setA.subset(setC)).toBe(true)
})