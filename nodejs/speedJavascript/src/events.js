// 事件委托

window.onload = () => {
  // 直接通过li元素设置事件绑定
  function setByDirect() {
    let oUl = document.querySelector('#ul')
    let aLi = oUl.querySelectorAll('li')
    Array.from(aLi).forEach(ele => {
      ele.onmouseover = () => {
        ele.style.background = 'red'
      }
      ele.onmouseout = () => {
        ele.style.background = ''
      }
    })
  }

  // 通过ul来进行事件委托
  function setByDelegate() {
    var oUl = document.querySelector('#ul')
    oUl.onmouseover = ev => {
      ev = ev || window.event
      let target = ev.target
      if(target.nodeName.toLowerCase() === 'li') {
        target.style.background = 'red'
      }
    }
    oUl.onmouseout = ev => {
      ev = ev || window.event
      let target = ev.target
      if(target.nodeName.toLowerCase() === 'li') {
        target.style.background = ''
      }
    }
  }

  let now = 3
  document.querySelector('button').onclick = () => {
    let oUl = document.querySelector('#ul')
    let oLi = document.createElement('li')
    oLi.innerHTML = ++now
    oUl.appendChild(oLi)
  }
  
  setByDirect()
}