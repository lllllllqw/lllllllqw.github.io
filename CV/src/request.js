import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '../utils/auth'
const REQUEST_SUCCESS = 200
import { STATUS_CODE } from '@/assets/constant'
import Cookies from 'js-cookie'
import { LANG } from '@/assets/constant'
import router from '@/router'
// import qs from 'qs'

// 创建axios 实例
const service = axios.create({
  // baseURL: window.location.host.substr(0, 3) === '101' ? 'http://101.37.223.69/fe/sdp' : 'http://10.73.9.80/fe/sdp', // api的base_url
  // baseURL: window.location.host.substr(0, 3) === '101' ? 'http://101.37.223.69/fe/sdp' : 'http://10.73.9.80/fe/sdp', // api的base_url
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL: window.location.host.substr(0, 5) === '101.3' ? 'http://101.37.223.69/fe/sdp' : window.location.host.substr(0, 5) === '10.73' ? 'http://10.73.9.80/fe/sdp' : 'http://10.13.10.104/fe/sdp',
  timeout: 30000, // 请求超时设置
  // withCredentials: true, // 跨域请求时是否需要使用凭证
  headers: { // 自定义请求头
    'Content-Type': 'application/json',
  },
})
console.log(this)
// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    config.headers['Authorization'] = getToken(store) || '' // 让每个请求携带token--['Authorization']
    config.headers['Accept-Language'] = Cookies.get('language') || LANG
    /* if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  } */
    return config
  },
  error => {
    // 对请求错误做些什么
    console.log(error) // 打印错误信息
    Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 对状态码 进行判断
    const statusFlag = statusError(response.data.status)
    if (statusFlag === false) {
      Message({
        message: response.data.message,
        type: 'error',
        duration: 3 * 1000,
      })
      return Promise.reject(response.data)
    }
    if (statusFlag === 'tokenInvalid') {
      updateToken(response.config)
      return ''
    }

    if (res.status === REQUEST_SUCCESS) {
      return res.data
    } else {
      const error = res.message
      Message({
        message: error,
        type: 'error',
        duration: 3 * 1000,
      })
      return Promise.reject(error)
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000,
    })
    return Promise.reject(error.message)
  }
)

function statusError(status) {
  let errorStatus = false
  switch (status) {
    case STATUS_CODE.code_06: // 用户未登陆或token已失效
      // removeToken()
      errorStatus = 'tokenInvalid'
      break
    case STATUS_CODE.code_07: // 用户未登陆或token已失效,跳到 /login
      router.push({
        path: 'login',
      })
      break
    case STATUS_CODE.code_11: // 连续{1}次输入错误帐号将被锁定登录
      break
    case STATUS_CODE.code_12: // 账号已被锁定
      break
    case STATUS_CODE.code_13: // 初始密码设置参数未定义
      break
    case STATUS_CODE.code_14: // 参数设置失败
      break
    case STATUS_CODE.code_15: // 初次登录，请重新设置密码
      break
    case STATUS_CODE.code_16: // 密码过期
      break
    default: errorStatus = true
  }
  return errorStatus
}

function updateToken(requestConfig) {
  console.log('刷新token')
  service.get('/auth/jwt/refresh').then(res => {
    store.commit('SET_TOKEN', res)
    service({
      method: requestConfig.method,
      url: requestConfig.url,
      data: requestConfig.data,
    })
  })
}

export default service
