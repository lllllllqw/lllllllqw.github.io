function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
  return class extends constructor {
      newProperty = "new property";
      hello = "override";
  }
}

function functionDecorator (value: String) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(propertyKey)
    // 版本小于ES5，descriptor是undefined
    // console.log(descriptor)
    // descriptor.enumerable = false
  }
}

@classDecorator
class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
      this.hello = m;
  }

  @functionDecorator('123')
  greet() {
    return console.log('hhhhhh')
  }

}

// console.log(new Greeter("world").property);