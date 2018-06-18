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
      var deferred = handles[0]
      var fn = handles[state.status]
      try {
        if (typeof fn === 'function') { // 允许省略成功回调或失败回调，因此需要在这里进行检测
          deferred.resolve(fn(state.value)) // 注意这里隐含了如果catch传入的是一个回调函数，那么其状态将会变成resolve，其返回值也会成为下一个then的初始参数
        } else if (state.status === 1) { // 如果promise链中返回值不是函数，则直接传递到下一个then处理
          deferred.resolve(state.value)
        } else {
          deferred.reject(state.value)
        }
      } catch (e) { // 如果程序发生错误，则直接reject
        deferred.reject(e)
      }
    })

    state.pending = undefined // 如果不清空之前的，当在resolved状态下，下一次绑定回调时也会触发scheduleProcessQueue，之前的回调被重复调用，就无法满足回调函数只调用一次的要求
  }

  function Promise() { // 消费者
    this.$$state = {}
  }
  Promise.prototype.then = function(onFulfilled, onRejected) {
    var result = new Deferred() //  每次then都生成一个deferred对象，并把其promise作为返回值，就可以链式绑定处理函数，上一个then控制下一个then的执行时机
    this.$$state.pending = this.$$state.pending || []
    this.$$state.pending.push([result, onFulfilled, onRejected])
    if (this.$$state.status > 0) { // 如果在回调注册之前，已经在resolved状态下，依然执行回调
      scheduleProcessQueue(this.$$state)
    }
    return result.promise
  }
  Promise.prototype.catch = function(onRejected) {
    return this.then(null, onRejected)
  }
  Promise.prototype.finally = function(callback) {
    return this.then(function() {
      callback()
    }, function() {
      callback()
    })
  }

  function Deferred() { // 生产者
    this.promise = new Promise() // 因此每次q.defer(),都会创建一对新的defer和promise
  }
  Deferred.prototype.resolve = function(value) {
    if (this.promise.$$state.status) { // 如果状态不是pending，则不再允许resolve
      return
    }
    if (value && typeof value.then === 'function'){ // 如果传入的是一个promise，则等待该promise解决后才向下继续promise链
      value.then(
        this.resolve.bind(this),
        this.reject.bind(this)
      )
    } else {
      this.promise.$$state.value = value
      this.promise.$$state.status = 1
      scheduleProcessQueue(this.promise.$$state)
    }
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