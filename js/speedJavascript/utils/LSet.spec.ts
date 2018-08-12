import { LSet } from './LSet'

test('set 各项功能', () => {
  const set = new LSet()
  
  set.add(123)
  set.add(444)
  set.add(555)
  
  set.delete(555)
  
  expect(set.has(123)).toBe(true)
  expect(set.has(555)).toBe(false)
  expect(set.values()).toEqual([123, 444])
  expect(set.size()).toBe(2)
  
  set.clear()
  
  expect(set.size()).toBe(0)
})


