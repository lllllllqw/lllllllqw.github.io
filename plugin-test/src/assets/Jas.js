/*
    Jas是一个迷你的异步流工具
    基于信号量机制，可以用when/now两个操作来等待/释放信号量
    从而达到复杂的（非周期）异步流控制
*/
(function() {
  var uid = 1
  var Jas = function() {
    this.map = {}
    this.rmap = {}
  }
  var indexOf = Array.prototype.indexOf || function(obj) {
    for (var i = 0, len = this.length; i < len; ++i) {
      if (this[i] === obj) return i
    }
    return -1
  }
  var fire = function(callback, thisObj) {
    setTimeout(function() {
      callback.call(thisObj)
    }, 0)
  }
  Jas.prototype = {
    /**
     * @param  {[]} resources 储存的信号
     * @param  {Function} callback 信号对应回调函数
     * @param  {Object} thisObj 回调函数的this
     */
    when: function(resources, callback, thisObj) {
      // 保存事件列表(以id为key),储存回调事件及对应信号
      var map = this.map
      // 保存信号列表(以信号为key),储存id
      var rmap = this.rmap
      // 将信号转为数组
      if (typeof resources === 'string') resources = [resources]
      var id = (uid++).toString(16) // using hex
      // 在事件列表中创建id以及对应项
      map[id] = {
        waiting: resources.slice(0), // clone Array
        callback: callback,
        thisObj: thisObj || window
      }
      // 检查事件列表中是否存在已有事件,如果有,往里添加事件id,没有则新建并添加事件id
      for (var i = 0, len = resources.length; i < len; ++i) {
        var res = resources[i]
        var list = rmap[res] || (rmap[res] = [])
        list.push(id)
      }
      // 返回this以便链式调用
      return this
    },
    /**
     * @param  {[]} resources 发布的信号
     */
    trigger: function(resources) {
      if (!resources) return this
      var map = this.map
      var rmap = this.rmap
      if (typeof resources === 'string') resources = [resources]
      // 检查信号列表,如接收的信号存在,发布信号,并删除信号对应的id列表
      for (var i = 0, len = resources.length; i < len; ++i) {
        var res = resources[i]
        if (typeof rmap[res] === 'undefined') continue
        this._release(res, rmap[res]) // notify each callback waiting for this resource
        delete rmap[res] // release this resource
      }
      return this
    },
    /**
     * @param  {String} res 信号
     * @param  {Array} list 信号对应的id列表
     */
    _release: function(res, list) {
      var map = this.map
      var rmap = this.rmap
      // 检查id列表
      for (var i = 0, len = list.length; i < len; ++i) {
        // 将事件列表对应id的事件取出
        var uid = list[i]
        var mapItem = map[uid]
        var waiting = mapItem.waiting
        // 删除事件的waiting
        var pos = indexOf.call(waiting, res)
        waiting.splice(pos, 1) // remove
        // 如果没有waiting了,则在下一个事件循环调用
        if (waiting.length === 0) { // no more depends
          fire(mapItem.callback, mapItem.thisObj) // fire the callback asynchronously
          delete map[uid]
        }
      }
    }
  }
  window.Jas = Jas // Jas is JavaScript Asynchronous (callings) Synchronizer
})()

/*

var flow = new Jas();
flow.when(['A', 'B'], function(){
    // both A and B are done!!
});

$.getJSON(url1, function(data){
    // An ajax request
    flow.trigger('A');
});
$.getJSON(url2', function(data){
    // Another ajax request
    flow.trigger('B');
});

*/
