(dom => {
  // 给 document 添加点击事件
  dom.addEventListener('click', e => {
    drawHeart({
      x: e.clientX,
      y: e.clientY,
      color: getRandomColor()
    })
  })

  // 添加爱心
  function drawHeart({ x, y, color = 'skyblue' }) {
    const heart = dom.createElement('div')
    heart.classList.add('heart')
    addStyles(heart, {
      left: x + 'px',
      top: y + 'px',
      background: color,
      transition: 'all 1s'
    })
    document.body.appendChild(heart)
    
    // 添加爱心后下一帧开始动画
    nextTick(() => {
      addStyles(heart, {
        transform: 'translateY(-20px) rotate(45deg)',
        opacity: '0'
      })
      setTimeout(() => {
        heart.remove()
      }, 1000)
    })
  }

  function addStyles(el, styles) {
    const origin = el.style
    Object.keys(styles).forEach(key => {
      origin[key] = styles[key]
    })
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function getRandomColor() {
    return `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
  }

  function nextTick(fn) {
    setTimeout(() => {
      fn()
    }, 0)
  }
})(document)