const VAL_KEY = Symbol('valKey')

function wrapper(obj: any) {
  const target = {
    [VAL_KEY]: obj,
  }
  const handler: ProxyHandler<any> = {
    get: function get(target: any, name) {
      if (name === 'value') {
        return () => target[VAL_KEY]
      }
      const val = target[VAL_KEY]
      if (val && val[name]) {
        return wrapper(val[name])
      }
      return wrapper(null)
    },
    set(target, name, value, receiver) {
      target
      name
      value
      receiver.value() /* ?*/
      return true
    },
  }

  return new Proxy(target, handler)
}
const obj = {
  foo: {
    bar: 'bar',
  },
}
const wo = wrapper(obj)

wo.value() /* ?*/
wo.foo.value() /* ?*/
wo.foo.bar.value() /* ?*/
wo.foo.bar.baz.value() /* ?*/
wo.what.is.it.value() /* ?*/

wo.aa.b.c.d = 3
