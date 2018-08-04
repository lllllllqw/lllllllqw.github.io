"use strict"
// 定义 Animal 类
class Animal {
  constructor(type) {
    this.type = type
  }
  speak() {
    console.log('type is ' + this.type)
  }
}

const animal = new Animal('dog')

animal.speak()

// Dog 继承自 Animal
class Dog extends Animal {
  constructor(type, name) {
    super(type)
    this.name = name
  }
  sayName() {
    console.log('name in ' + this.name)
  }
}

const dog = new Dog('dog', 'golf')

// Dog 实例会有父类方法
dog.speak()
dog.sayName()

// MyArray 继承自 Array
class MyArray extends Array {
  sayType() {
    console.log('Array')
  }
  // 使 Array 自带函数方法返回的结果是 Array 而不是 MyArray
  static get [Symbol.species] () {
    return Array
  } 
}

var myArray = new MyArray(3,4,5)
console.log(myArray instanceof MyArray) // true
console.log(myArray instanceof Array) // true
var mapedMyArr = myArray.map(val => val * 2)
console.log(mapedMyArr instanceof MyArray) // false
console.log(mapedMyArr instanceof Array) // true
