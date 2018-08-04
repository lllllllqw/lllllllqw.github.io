function myCoolFunction(f: (x: number) => void, nums: number[]):void
function myCoolFunction(f: (x: number) => void, ...nums: number[]):void
function myCoolFunction() {
  if (arguments.length == 2 && !Array.isArray(arguments[1])) {
      var f = arguments[0];
      var arr = arguments[1];
  }
}

interface MyType {
  name: string,
  age?: number
}

class MyClass {
  a: number
  b: string
  constructor({a, b = 'bbb'}:{a: number, b?: string}) {
    this.a = a
    this.b = b
  }
}

new MyClass({a: 1})

const me = {} as any
me.name = 'lqw'
me.age = 23

let x: [number, string] = [222, '16']
let y: string = x[0].toFixed(12)

enum Color {RED, GREEN, BLUE}
let color: Color = Color.BLUE
console.log(Color[color])

interface ToFixedWish {
  a: number,
  b?: string
}

const a: ToFixedWish = {
  a: 3
}

function indentity<T extends ToFixedWish>(arg: Array<T>): Array<T> {
  return arg
}

indentity([{a: 1}])

interface Nnnn {
  ss: number
  name: string
}

class Person {
  name: string
}

let person: Nnnn = new Person()

let s: Nnnn
let per: Person

console.log(s === per)