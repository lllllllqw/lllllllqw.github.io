function res({data = null, msg = '', code = 200} = {}) {
  return {data, msg, code}
}

function createPromise(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 200);
  })
}

function clone(data) {
  return JSON.parse(JSON.stringify(data))
}

let table = []

function selectById(id) {
  return table.find(item => item.id === id)
}

/**
 * 保存记录接口, 不传 id 为新增, 传入 id 则修改对应 id 的数据
 * @author lqw
 * @date 2019-04-26
 * @param {{id?, [key: string]: any}} reqData
 */
function save(reqData) {
  const {id, ...formData} = clone(reqData)
  if(id) {
    const record = selectById(id)
    if(record) {
      Object.assign(record, formData)
      return createPromise(res({data: 'success', msg: '修改成功'}))
    } else {
      return createPromise(res({data: 'fail', msg: '未找到id对应记录', code: -1}))
    }
  } else {
    table.push({...formData, id: Date.now()})
    return createPromise(res({data: 'success', msg: '新增成功'}))
  }
}

/**
 * 根据 id 删除对应数据
 * @author lqw
 * @date 2019-04-26
 * @param {number} id
 */
function deleteById(id) {
  table = table.filter(record => record.id !== id)
  return createPromise(res({data: 'success', msg: '删除成功'}))
}

/**
 * 获取已保存的数据
 * @author lqw
 * @date 2019-04-26
 */
function get() {
  return createPromise(res({data: clone(table), msg: '获取成功'}))
}

export default {
  get,
  save,
  deleteById
}

// console.log(await get())
// console.log(await save({ddd: 1}))
// console.log(await get())
// console.log(await save({id: table[0].id, ddd: 2}))
// console.log(await get())
// console.log(await deleteById(table[0].id))
// console.log(await get())
console.log(1)