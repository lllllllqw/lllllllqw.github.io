/**
 * -------------------------------------------------------------------
 * localStorage部分
 */

/**
 * @description 从localStorage里获得元素
 * @param  {String} str
 * @return  {{}}
 * @author  lqw
 */
const getLocalStorage = (str) => JSON.parse(localStorage.getItem(str))

/**
 * @description 向localStorage里添加元素
 * @param  {String} key
 * @param  {{}} obj
 * @author  lqw
 */
const setLocalStorage = (key, obj) => localStorage.setItem(key, JSON.stringify(obj))

/**
 * @description  从localStorage里移除元素
 * @param  {String} key
 * @author  lqw
 */
const removeLocalStorage = (key) => localStorage.removeItem(key)

/**
 * @description  清空localStorage
 * @author  lqw
 */
const clearLocalStorage = () => localStorage.clear()

/**
 * -------------------------------------------------------------------
 * sessionStorage部分
 */

/**
 * @description 从sessionStorage里获得元素
 * @param  {String} str
 * @return  {{}}
 * @author  lqw
 */
const getSessionStorage = (str) => JSON.parse(sessionStorage.getItem(str))

/**
 * @description 向sessionStorage里添加元素
 * @param  {String} key
 * @param  {{}} obj
 * @author  lqw
 */
const setSessionStorage = (key, obj) => sessionStorage.setItem(key, JSON.stringify(obj))

/**
 * @description  从sessionStorage里移除元素
 * @param  {String} key
 * @author  lqw
 */
const removeSessionStorage = (key) => sessionStorage.removeItem(key)

/**
 * @description  清空sessionStorage
 * @author  lqw
 */
const clearSessionStorage = () => sessionStorage.clear()

/**
 * -------------------------------------------------------------------
 * cookie部分
 */

/**
 * @description 从cookie里获得元素
 * @param  {String} str
 * @return  {{}}
 * @author  lqw
 */
const getCookie = (str) => {
  document.cookie.split(';').forEach(val => {
    let arr = val.split('=')
    if(arr[0] === str) {
      // 找到key
      console.log('找到了')
      return decodeURI(arr[1])
    }
  })
  return -1
}

/**
 * @description 向cookie里添加元素
 * @param  {String} key
 * @param  {{}} value
 * @param  {Number} expires
 * @author  lqw
 */
const setCookie = (key, value, expires) => document.cookie = `${key}=${encodeURI(JSON.stringify(value))};expires=${+new Date() + expires}`

/**
 * @description  从cookie里移除元素
 * @param  {String} key
 * @author  lqw
 */
const removeCookie = (key) => cookie.removeItem(key)

/**
 * @description  清空cookie
 * @author  lqw
 */
const clearCookie = () => cookie.clear()

export const local = {
  get: getLocalStorage,
  set: setLocalStorage,
  remove: removeLocalStorage,
  clear: clearLocalStorage
}

export const session = {
  get: getSessionStorage,
  set: setSessionStorage,
  remove: removeSessionStorage,
  clear: clearSessionStorage
}

export const cookie = {
  get: getCookie,
  set: setCookie,
  remove: removeCookie,
  clear: clearCookie
}

export default {
  local,
  session,
  cookie
}