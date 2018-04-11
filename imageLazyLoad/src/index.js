import 'babel-polyfill'
import Vue from 'vue'

import './index.css'
import img from '../static/a.jpg'

function isInsight(el) {
  const bound = el.getBoundingClientRect()
  const innerHeight = window.innerHeight
  return bound.top < innerHeight + 100
}

function checkImageGroup(imagesArr) {
  for (let el of imagesArr) {
    if (isInsight(el) && !el.src) {
      // el.dataset.src方式获取src兼容性为ie11+,所以用el.getAttribute
      el.src = el.getAttribute('data-src')
    }
  }
}

// 节流
function throttle(func, wait = 500) {
  let last = 0
  return function () {
    let now = +new Date()
    if (now - last > wait) {
      last = now
      return func.apply(this, Array.from(arguments))
    } else {
      return false
    }
  }
}

window.onload = function () {
  console.log(img)
  document.querySelector('.first-image').src = img
  const aImages = document.querySelectorAll('.lazyload-image')
  // 页面加载时首先加载可视区内图片
  checkImageGroup(aImages)
  // 节流包装懒加载方法
  const throttledCheck = throttle(checkImageGroup, 100)
  // 添加滑动事件
  window.addEventListener('scroll', function (e) {
    throttledCheck(aImages)
  })

  // 实验中的观察者API
  // let observer = new IntersectionObserver(params => {
  //   console.log(params)
  // })

  // observer.observe(aImages[2])

}