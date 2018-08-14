import { Dictionary } from './Dictionary'

function createDictionary(items: any): Dictionary {
  const dictionary = new Dictionary()
  Object.keys(items).forEach(key => {
    dictionary.set(key, items[key])
  })
  return dictionary  
}

test('dictionary 基础功能', () => {
  const dictionary = createDictionary({a: 123, b: 'xx', c: false})
  
  expect(dictionary.has('a')).toBe(true)
  expect(dictionary.has('d')).toBe(false)
  expect(dictionary.values()).toEqual([123, 'xx', false])
  expect(dictionary.size()).toBe(3)
  
  dictionary.clear()
  
  expect(dictionary.size()).toBe(0)
})