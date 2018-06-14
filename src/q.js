function Q(){

  function scheduleProcessQueue(state){ // 延后执行
    setTimeout(function(){
      processQueue(state)
    })
  }

  function processQueue(state){

    var pending = state.pending
    if(!pending) return

    pending.forEach(function(onFulfilled){
      onFulfilled(state.value)
    })

    state.pending = undefined // 如果不清空之前的，当在resolved状态下，下一次绑定回调时也会触发scheduleProcessQueue，依次调用之前绑定的已执行的回调，就无法满足回调函数只调用一次的要求
  }

  function Promise(){ // 消费者
    this.$$state = {}
  }
  Promise.prototype.then = function(onFulfilled){
    this.$$state.pending = this.$$state.pending || []
    this.$$state.pending.push(onFulfilled)
    if(this.$$state.status > 0){ // 如果在回调注册之前，已经在resolved状态下，依然执行回调
      scheduleProcessQueue(this.$$state)
    }
  }

  function Deferred(){ // 生产者
    this.promise = new Promise() // 因此每次q.defer(),都会创建一对新的defer和promise
  }
  Deferred.prototype.resolve = function(value){
    if(this.promise.$$state.status){ // 如果状态不是pending，则直接忽略
      return
    }
    this.promise.$$state.value = value
    this.promise.$$state.status = 1
    scheduleProcessQueue(this.promise.$$state)
  }

  function defer(){
    return new Deferred()
  }

  return {
    defer: defer
  }
}