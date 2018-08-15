import { Dictionary, HashTable } from './Dictionary'

function createDictionary(items: any): Dictionary {
  const dictionary = new Dictionary()
  Object.keys(items).forEach(key => {
    dictionary.set(key, items[key])
  })
  return dictionary  
}

function createHashTable(items: any): HashTable {
  const hashTable = new HashTable()
  Object.keys(items).forEach(key => {
    hashTable.put(key, items[key])
  })
  return hashTable  
}

test('Dictionary 基础功能', () => {
  const dictionary = createDictionary({a: 123, b: 'xx', c: false})
  
  expect(dictionary.has('a')).toBe(true)
  expect(dictionary.has('d')).toBe(false)
  expect(dictionary.values()).toEqual([123, 'xx', false])
  expect(dictionary.size()).toBe(3)
  
  dictionary.clear()
  
  expect(dictionary.size()).toBe(0)
})

test('HashTable 基础功能', () => {
  const hashTable = createHashTable({a: 123, b: 'xx'})
  
  expect(hashTable.get('b')).toBe('xx')
  hashTable.remove('b')
  expect(hashTable.get('b')).toBe(undefined)
})