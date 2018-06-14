function Q() {

  function scheduleProcessQueue(state) { // 延后执行

    setTimeout(function() {
      processQueue(state)
    })
  }

  function processQueue(state) {

    var pending = state.pending

    if (!pending) return

    pending.forEach(function(handles) {
      var fn = handles[state.status]
      if(typeof fn === 'function'){
        fn(state.value)
      }
    })

    state.pending = undefined // 如果不清空之前的，当在resolved状态下，下一次绑定回调时也会触发scheduleProcessQueue，之前的回调被重复调用，就无法满足回调函数只调用一次的要求
  }

  function Promise() { // 消费者
    this.$$state = {}
  }
  Promise.prototype.then = function(onFulfilled, onRejected) {
    this.$$state.pending = this.$$state.pending || []
    this.$$state.pending.push([null, onFulfilled, onRejected])
    if (this.$$state.status > 0) { // 如果在回调注册之前，已经在resolved状态下，依然执行回调
      scheduleProcessQueue(this.$$state)
    }
  }
  Promise.prototype.catch = function(onRejected){
    return this.then(null, onRejected)
  }

  function Deferred() { // 生产者
    this.promise = new Promise() // 因此每次q.defer(),都会创建一对新的defer和promise
  }
  Deferred.prototype.resolve = function(value) {
    if (this.promise.$$state.status) { // 如果状态不是pending，则不再允许resolve
      return
    }
    this.promise.$$state.value = value
    this.promise.$$state.status = 1
    scheduleProcessQueue(this.promise.$$state)
  }
  Deferred.prototype.reject = function(reason) {
    if (this.promise.$$state.status) { // 如果promise的状态不是pending，则不再允许reject
      return
    }
    this.promise.$$state.value = reason
    this.promise.$$state.status = 2
    scheduleProcessQueue(this.promise.$$state)
  }

  function defer() {
    return new Deferred()
  }

  return {
    defer: defer
  }
}