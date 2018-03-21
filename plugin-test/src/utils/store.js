/**
 * -------------------------------------------------------------------
 * localStorage部分
 */

/**
 * @description  查找localStorage中是否含有元素
 * @param  {String} key
 * @return {Boolean}
 * @author  lqw
 */
const hasLocalStorage = (key) => getLocalStorage(key) !== null

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
 * @description 从localStorage里获得元素
 * @param  {String} key
 * @return  {{}}
 * @author  lqw
 */
const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key))

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
 * @description  查找sessionStorage中是否含有元素
 * @param  {String} key
 * @return {Boolean}
 * @author  lqw
 */
const hasSessionStorage = (key) => getSessionStorage(key) !== null

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
 * @description 从sessionStorage里获得元素
 * @param  {String} key
 * @return  {{}}
 * @author  lqw
 */
const getSessionStorage = (key) => JSON.parse(sessionStorage.getItem(key))

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
 * @description  查找 cookie 中是否含有元素
 * @param  {String} key
 * @return {Boolean}
 * @author  lqw
 */
const hasCookie = (key) => getCookie(key) !== null

/**
 * @description 向cookie里添加元素
 * @param  {String} key
 * @param  {Number} expires 经过 expires 毫秒后失效
 * @param  {String} path 制定有效范围,默认 '/'
 * @param  {String} domain 所访问网站的域名
 * @param  {Number} maxAge 有效时长(秒)
 * @param  {Any} secure 设置传输过程是否加密
 * @author  lqw
 */
const setCookie = (key, value, expires, path, domain, maxAge, secure) => {
  let cookie = `${key}=${encodeURI(JSON.stringify(value))}${expires ? `; expires=${new Date(+new Date() + expires * 1000).toUTCString()}` : ''}${path ? `; path=${path}` : ''}${domain ? `;domain=${domain}` : ''}${maxAge ? `;max-age=${maxAge}` : ''}${secure ? `;secure=${secure}` : ''}`
  document.cookie = cookie
}

/**
 * @description  从cookie里移除元素
 * @param  {String} key
 * @author  lqw
 */
const removeCookie = (key) => setCookie(key, null, -1000)

/**
 * @description 从cookie里获得元素
 * @param  {String} key
 * @return  {{}}
 * @author  lqw
 */
const getCookie = (key) => {
  for (let val of document.cookie.split(';')) {
    let arr = val.split('=')
    if (arr[0] === key) {
      return JSON.parse(decodeURI(arr[1]))
    }
  }
  return null
}

/**
 * @description  清空cookie
 * @author  lqw
 */
const clearCookie = () => {
  for (let val of document.cookie.split(';')) {
    let arr = val.split('=')
    removeCookie(arr[0])
  }
}

export const local = {
  has: hasLocalStorage,
  set: setLocalStorage,
  remove: removeLocalStorage,
  get: getLocalStorage,
  clear: clearLocalStorage
}

export const session = {
  has: hasSessionStorage,
  set: setSessionStorage,
  remove: removeSessionStorage,
  get: getSessionStorage,
  clear: clearSessionStorage
}

export const cookie = {
  has: hasCookie,
  set: setCookie,
  remove: removeCookie,
  get: getCookie,
  clear: clearCookie
}

export default {
  local,
  session,
  cookie
}