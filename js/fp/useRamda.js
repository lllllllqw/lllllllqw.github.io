import {
  prop,
  curry,
  equals,
  pipe,
  filter,
  map,
  multiply
} from 'ramda'

const books = [
  {
    title: '火影忍者',
    year: 999
  },
  {
    title: '哆啦A梦',
    year: 999
  },
  {
    title: '海贼王',
    year: 555
  },
  ,
  {
    title: '七龙珠',
    year: 777
  }
]

const getTitle = prop('title')
const getYear = prop('year')

const publishedInYear = curry((year, book) => equals(getYear(book))(year))

const titleForYears = curry((year, books) => pipe(filter(publishedInYear(year)), map(getTitle))(books))

console.log(titleForYears(999)(books))

console.log(multiply(11, 1))