import { quickSort } from "./sort"

test('adds 1 + 2 to equal 3', () => {
    expect(quickSort([3, 1, 66, 7])).toEqual([1, 3, 7, 66])
});
