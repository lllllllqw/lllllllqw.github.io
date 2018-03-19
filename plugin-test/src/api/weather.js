import fetch from './fetch'

export function fetchWeather (city) {
  return fetch.get('https://bird.ioliu.cn/weather', { params: { city } })
}