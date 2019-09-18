import { LinkedList } from './LinkedList'

function createLinkedList() {
  const linkedList = new LinkedList()
  linkedList.append(1)
  linkedList.append(2)
  linkedList.append(3)
  linkedList.append(4)
  linkedList.append(5)

  return linkedList
}

test('链表添加元素', () => {
  const linkedList = createLinkedList()

  expect(linkedList.toString()).toBe('1 2 3 4 5')

  linkedList.insert(linkedList.size(), 'last')
  linkedList.insert(0, 'first')
  linkedList.insert(1, 'second')

  expect(linkedList.toString()).toBe('first second 1 2 3 4 5 last')
})


test('链表删除元素', () => {
  const linkedList = createLinkedList()
  
  expect(linkedList.removeAt(0)).toBe(1)
  expect(linkedList.removeAt(3)).toBe(5)
  expect(linkedList.remove(3)).toBe(3)
  expect(linkedList.toString()).toBe('2 4')
})

test('链表查找', () => {
  const linkedList = createLinkedList()

  expect(linkedList.indexOf(5)).toBe(4)
  expect(linkedList.indexOf(3)).toBe(2)
})