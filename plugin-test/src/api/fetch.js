import axios from 'axios'

const fetch = axios.create({
  timeout: 2000
})

fetch.interceptors.request.use(config => {
  console.time(`请求时间${config.url}:`)
  return config
})

fetch.interceptors.response.use(val => {
  console.timeEnd(`请求时间${val.config.url}:`)
  return val
})
export default fetch