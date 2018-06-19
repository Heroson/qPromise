'use strict'

describe('$q', function() {

  let $q

  beforeEach(function() {
    $q = new Q()
  })

  // it('can be instantiate', function() {
  //   expect($q).toBeDefined()
  // })

  // it('can create defer and promise', function() {
  //   const d = $q.defer()
  //   expect(d).toBeDefined()
  //   expect(d.promise).toBeDefined()
  // })

  // it('can resolve', function(done) {
  //   const d = $q.defer()
  //   const promiseSpy = jasmine.createSpy()

  //   d.promise.then(promiseSpy)

  //   d.resolve('ok')

  //   setTimeout(function() {
  //     expect(promiseSpy).toHaveBeenCalledWith('ok')
  //     done()
  //   }, 1)
  // })

  // it('works when resolved before promise listener', function(done) {
  //   var d = $q.defer()
  //   d.resolve(42)

  //   var promiseSpy = jasmine.createSpy()
  //   d.promise.then(promiseSpy)
  //   setTimeout(function() {
  //     expect(promiseSpy).toHaveBeenCalledWith(42)
  //     done()
  //   }, 0)
  // })

  // it('does not resolve promise immediately', function() {
  //   var d = $q.defer()
  //   var promiseSpy = jasmine.createSpy()
  //   d.promise.then(promiseSpy)
  //   d.resolve(42)
  //   expect(promiseSpy).not.toHaveBeenCalled()
  // })

  // it('may only be resolved once', function(done) {
  //   const d = $q.defer()

  //   const promiseSpy = jasmine.createSpy()
  //   d.promise.then(promiseSpy)

  //   d.resolve(42)
  //   d.resolve(43)

  //   setTimeout(function() {
  //     expect(promiseSpy.calls.count()).toEqual(1)
  //     expect(promiseSpy).toHaveBeenCalledWith(42)
  //     done()
  //   })
  // })

  // it('resolves a listener added after resolution', function(done) {
  //   var d = $q.defer()
  //   d.resolve(42)

  //   var promiseSpy = jasmine.createSpy()
  //   d.promise.then(promiseSpy)
  //   setTimeout(function() {
  //     expect(promiseSpy).toHaveBeenCalledWith(42)
  //     done()
  //   })
  // })

  // it('may have multiple callbacks', function(done) {
  //   var d = $q.defer()
  //   var firstSpy = jasmine.createSpy()
  //   var secondSpy = jasmine.createSpy()
  //   d.promise.then(firstSpy)
  //   d.promise.then(secondSpy)
  //   d.resolve(42)

  //   setTimeout(function() {
  //     expect(firstSpy).toHaveBeenCalledWith(42)
  //     expect(secondSpy).toHaveBeenCalledWith(42)
  //     done()
  //   })
  // })

  // it('invokes each callback once', function(done) {
  //   var d = $q.defer()
  //   var firstSpy = jasmine.createSpy()
  //   var secondSpy = jasmine.createSpy()
  //   d.promise.then(firstSpy)
  //   d.resolve(42)

  //   setTimeout(function() {
  //     expect(firstSpy.calls.count()).toBe(1)
  //     expect(secondSpy.calls.count()).toBe(0)
  //     done()
  //     d.promise.then(secondSpy)
  //     setTimeout(function() {
  //       expect(firstSpy.calls.count()).toBe(1)
  //       expect(secondSpy.calls.count()).toBe(1)
  //       done()
  //     })
  //   })
  // })

  // it('can reject a deferred', function(done) {
  //   var d = $q.defer()
  //   var fulfillSpy = jasmine.createSpy()
  //   var rejectSpy = jasmine.createSpy()
  //   d.promise.then(fulfillSpy, rejectSpy)
  //   d.reject('fail')

  //   setTimeout(function() {
  //     expect(fulfillSpy).not.toHaveBeenCalled()
  //     expect(rejectSpy).toHaveBeenCalledWith('fail')
  //     done()
  //   })
  // })

  // it('can reject just once', function(done) {
  //   var d = $q.defer()
  //   var rejectSpy = jasmine.createSpy()
  //   d.promise.then(null, rejectSpy)
  //   d.reject('fail')

  //   setTimeout(function() {
  //     expect(rejectSpy.calls.count()).toBe(1)

  //     d.reject('fail again')

  //     setTimeout(function() {
  //       expect(rejectSpy.calls.count()).toBe(1)
  //       done()
  //     })
  //   })
  // })

  // it('cannot fulfill a promise once rejected', function(done) {
  //   var d = $q.defer()
  //   var fulfillSpy = jasmine.createSpy()
  //   var rejectSpy = jasmine.createSpy()
  //   d.promise.then(fulfillSpy, rejectSpy)
  //   d.reject('fail')

  //   setTimeout(function() {
  //     d.resolve('success')

  //     setTimeout(function() {
  //       expect(fulfillSpy).not.toHaveBeenCalled()
  //       done()
  //     })
  //   })
  // })

  // it('does not require a failure handler each time', function(done) {
  //   var d = $q.defer()
  //   var fulfillSpy = jasmine.createSpy()
  //   var rejectSpy = jasmine.createSpy()
  //   d.promise.then(fulfillSpy)
  //   d.promise.then(null, rejectSpy)
  //   d.reject('fail')

  //   setTimeout(function() {
  //     expect(rejectSpy).toHaveBeenCalledWith('fail')
  //     done()
  //   })
  // })

  // it('does not require a success handler each time', function(done) {
  //   var d = $q.defer()
  //   var fulfillSpy = jasmine.createSpy()
  //   var rejectSpy = jasmine.createSpy()
  //   d.promise.then(fulfillSpy)
  //   d.promise.then(null, rejectSpy)
  //   d.resolve('ok')

  //   setTimeout(function() {
  //     expect(fulfillSpy).toHaveBeenCalledWith('ok')
  //     done()
  //   })
  // })

  // it('can register rejection handler with catch', function(done) {
  //   var d = $q.defer()
  //   var rejectSpy = jasmine.createSpy()
  //   d.promise.catch(rejectSpy)
  //   d.reject('fail')

  //   setTimeout(function() {
  //     expect(rejectSpy).toHaveBeenCalled()
  //     done()
  //   })
  // })

  // it('invokes a finally handler when fulfilled', function(done) {
  //   var d = $q.defer()
  //   var finallySpy = jasmine.createSpy()
  //   d.promise.finally(finallySpy)
  //   d.resolve(42)

  //   setTimeout(function() {
  //     expect(finallySpy).toHaveBeenCalledWith()
  //     done()
  //   })
  // })

  // it('invokes a finally handler when rejected', function(done) {
  //   var d = $q.defer()
  //   var finallySpy = jasmine.createSpy()
  //   d.promise.finally(finallySpy)
  //   d.reject('fail')

  //   setTimeout(function() {
  //     expect(finallySpy).toHaveBeenCalledWith()
  //     done()
  //   })
  // })

  // it('allows chaining handler', function(done) {
  //   var d = $q.defer()

  //   var fulfilledSpy = jasmine.createSpy()
  //   d.promise.then(function(result) {
  //     return result + 1
  //   }).then(function(result) {
  //     return result * 2
  //   }).then(fulfilledSpy)

  //   d.resolve(20)

  //   setTimeout(function() { // 因为每次resolve都会启动一个定时器，所以这里也要相应的三个定时器，才能保证判断时Promise链也全部解决
  //     setTimeout(function() {
  //       setTimeout(function() {
  //         expect(fulfilledSpy).toHaveBeenCalledWith(42)
  //         done()
  //       })
  //     })
  //   })
  // })

  // it('does not modify original resolution in chains', function(done) {
  //   var d = $q.defer();

  //   var fulfilledSpy = jasmine.createSpy();
  //   d.promise.then(function(result) {
  //     return result + 1;
  //   }).then(function(result) {
  //     return result * 2;
  //   });
  //   d.promise.then(fulfilledSpy);
  //   d.resolve(20);

  //   setTimeout(function() {
  //     expect(fulfilledSpy).toHaveBeenCalledWith(20);
  //     done()
  //   })
  // });

  // it('catches rejection on chained handler', function(done) {
  //   var d = $q.defer();
  //   var rejectedSpy = jasmine.createSpy();
  //   d.promise.then(undefined).catch(rejectedSpy);
  //   d.reject('fail');

  //   setTimeout(function() {
  //     setTimeout(function() {
  //       expect(rejectedSpy).toHaveBeenCalledWith('fail');
  //       done()
  //     })
  //   })
  // });

  // it('fulfills on chained handler', function(done) {
  //   var d = $q.defer();
  //   var fulfilledSpy = jasmine.createSpy();
  //   d.promise.catch(undefined).then(fulfilledSpy);
  //   d.resolve(42);

  //   setTimeout(function() {
  //     setTimeout(function() {
  //       expect(fulfilledSpy).toHaveBeenCalledWith(42);
  //       done()
  //     })
  //   })
  // });

  // it('treats catch return value as resolution', function(done) {
  //   var d = $q.defer()

  //   var fulfilledSpy = jasmine.createSpy()
  //   d.promise.catch(function() {
  //     return 42
  //   }).then(fulfilledSpy)

  //   d.reject('fail')

  //   setTimeout(function() {
  //     setTimeout(function() {
  //       expect(fulfilledSpy).toHaveBeenCalledWith(42)
  //       done()
  //     })
  //   })
  // })

  // it('rejects chained promise when handler throws', function(done) {
  //   var d = $q.defer();
  //   var rejectedSpy = jasmine.createSpy();
  //   d.promise.then(function() {
  //     throw 'fail';
  //   }).catch(rejectedSpy);
  //   d.resolve(42);

  //   setTimeout(function() {
  //     setTimeout(function() {
  //       expect(rejectedSpy).toHaveBeenCalledWith('fail');
  //       done()
  //     })
  //   })
  // })

  // it('dose not reject current promise when handler throws', function(done) {
  //   var d = $q.defer();
  //   var rejectedSpy = jasmine.createSpy();
  //   d.promise.then(function() {
  //     throw 'fail';
  //   });
  //   d.promise.catch(rejectedSpy); // 只会传递到promise链里面的下一个deferred进行处理
  //   d.resolve(42);

  //   setTimeout(function() {
  //     expect(rejectedSpy).not.toHaveBeenCalled()
  //     done()
  //   })
  // })

  // it('waits on promise returned from handler', function(done) {
  //   var d = $q.defer();

  //   var fulfilledSpy = jasmine.createSpy();
  //   d.promise.then(function(v) {
  //     var d2 = $q.defer();
  //     d2.resolve(v + 1);
  //     return d2.promise;
  //   }).then(function(v) {
  //     return v * 2;
  //   }).then(fulfilledSpy);
  //   d.resolve(20);

  //   setTimeout(function() { // 因为回调中返回的是promise，需要多加一层setTimeout
  //     setTimeout(function() {
  //       setTimeout(function() {
  //         setTimeout(function() {
  //           expect(fulfilledSpy).toHaveBeenCalledWith(42);
  //           done()
  //         })
  //       })
  //     })
  //   })
  // });

  // it('allows chaining handlers on finally, with original value', function(done) {
  //   var d = $q.defer();

  //   var fulflledSpy = jasmine.createSpy();
  //   d.promise.then(function(result) {
  //     return result + 1;
  //   }).finally(function(result) {
  //     return result * 2;
  //   }).then(fulflledSpy);
  //   d.resolve(20);

  //   setTimeout(function() {
  //     setTimeout(function() {
  //       setTimeout(function() {
  //         expect(fulflledSpy).toHaveBeenCalledWith(21);
  //         done()
  //       })
  //     })
  //   })

  // });

  // it('allows chaining handlers on finally, with original rejection', function(done) {
  //   var d = $q.defer();

  //   var rejectedSpy = jasmine.createSpy();
  //   d.promise.then(function(result) {
  //     throw 'fail';
  //   }).finally(function() {}).catch(rejectedSpy);
  //   d.resolve(20);

  //   setTimeout(function() {
  //     setTimeout(function() {
  //       setTimeout(function() { // 因为finally传递reject的时候新建了一个deferred，所以需要多加一层
  //         setTimeout(function() {
  //           expect(rejectedSpy).toHaveBeenCalledWith('fail');
  //           done()
  //         })
  //       })
  //     })
  //   })
  // });

  // it('resolves to orig value when nested promise resolves', function(done) {
  //   var d = $q.defer();
  //   var fulflledSpy = jasmine.createSpy();
  //   var resolveNested;
  //   d.promise.then(function(result) {
  //     return result + 1;
  //   }).finally(function(result) {
  //     var d2 = $q.defer();
  //     resolveNested = function() {
  //       d2.resolve('abc');
  //     };
  //     return d2.promise;
  //   }).then(function(val) {
  //     fulflledSpy(val)
  //     expect(fulflledSpy).toHaveBeenCalledWith(21);
  //   });

  //   d.resolve(20);

  //   setTimeout(function() {
  //     setTimeout(function() {
  //       setTimeout(function() {
  //         setTimeout(function() {
  //           expect(fulflledSpy).not.toHaveBeenCalled();
  //           resolveNested()
  //           done()
  //         })
  //       })
  //     })
  //   })


  // });

  // it('rejects to original value when nested promise resolves', function(done) {
  //   var d = $q.defer();

  //   var rejectedSpy = jasmine.createSpy();
  //   var resolveNested;

  //   d.promise.then(function(result) {
  //     throw 'fail'
  //   }).finally(function(result) {
  //     var d2 = $q.defer();
  //     resolveNested = function() {
  //       d2.resolve('abc');
  //     };
  //     return d2.promise;
  //   }).catch(function(reason) {
  //     rejectedSpy(reason)
  //     expect(rejectedSpy).toHaveBeenCalledWith('fail');
  //   });

  //   d.resolve(20);

  //   setTimeout(function() {
  //     setTimeout(function() {
  //       setTimeout(function() { // 因为finally传递reject的时候新建了一个deferred，所以需要多加一层
  //         setTimeout(function() {
  //           expect(rejectedSpy).not.toHaveBeenCalled();
  //           resolveNested()
  //           done()
  //         })
  //       })
  //     })
  //   })

  //   function next() {
  //     resolveNested();
  //     setTimeout(function() {
  //       setTimeout(function() {

  //         done()
  //       })
  //     })
  //   }

  // });

  // it('rejects when nested promise rejects in finally', function() {
  //   var d = $q.defer();
  //   var fulflledSpy = jasmine.createSpy();
  //   var rejectedSpy = jasmine.createSpy();
  //   var rejectNested;

  //   d.promise.then(function(result) {
  //     return result + 1;
  //   }).finally(function(result) {
  //     var d2 = $q.defer();
  //     rejectNested = function() {
  //       d2.reject('fail');
  //     };
  //     return d2.promise;
  //   }).then(fulflledSpy, rejectedSpy);
  //   d.resolve(20);

  //   setTimeout(function() {
  //     setTimeout(function() {
  //       expect(fulflledSpy).not.toHaveBeenCalled();
  //       next();
  //     })
  //   })

  //   function next() {
  //     resolveNested();
  //     setTimeout(function() {
  //       expect(fulflledSpy).not.toHaveBeenCalled();
  //       expect(rejectedSpy).toHaveBeenCalledWith('fail');
  //       done()
  //     })
  //   }

  // });

  it('can report progress', function(done) {
    var d = $q.defer();
    var progressSpy = jasmine.createSpy();
    d.promise.then(null, null, progressSpy);
    d.notify('working...');

    setTimeout(function() {
      expect(progressSpy).toHaveBeenCalledWith('working...');
      done()
    })
  });

  it('can report progress many times', function(done) {
    var d = $q.defer();
    var progressSpy = jasmine.createSpy();
    d.promise.then(null, null, progressSpy);

    setTimeout(function() {
      d.notify('40%');
      setTimeout(function() {
        d.notify('80%');
        d.notify('100%');
        setTimeout(function() {
          expect(progressSpy.calls.count()).toBe(3);
          done()
        })
      })
    })

  });

  it('does not notify progress after being resolved', function(done) {
    var d = $q.defer();
    var progressSpy = jasmine.createSpy();
    d.promise.then(null, null, progressSpy);

    d.resolve('ok');
    d.notify('working...');

    setTimeout(function() {
      expect(progressSpy).not.toHaveBeenCalled();
      done()
    })

  });

  it('does not notify progress after being rejected', function(done) {
    var d = $q.defer();
    var progressSpy = jasmine.createSpy();
    d.promise.then(null, null, progressSpy);

    d.reject('fail');
    d.notify('working...');

    setTimeout(function() {
      expect(progressSpy).not.toHaveBeenCalled();
      done()
    })

  });

  it('can notify progress through chain', function(done) {
    var d = $q.defer();
    var progressSpy = jasmine.createSpy();
    d.promise
      .then(undefined)
      .catch(undefined)
      .then(null, null, progressSpy);
    d.notify('working...');

    setTimeout(function() {
      setTimeout(function() {
        setTimeout(function() {
          expect(progressSpy).toHaveBeenCalledWith('working...');
          done()
        })
      })
    })

  });

  it('transforms progress through handlers', function(done) {
    var d = $q.defer();
    var progressSpy = jasmine.createSpy();
    d.promise
      .then(undefined)
      .then(null, null, function(progress) {
        return '***' + progress + '***';
      })
      .catch(undefined)
      .then(null, null, progressSpy);
    d.notify('working...');

    setTimeout(function() {
      setTimeout(function() {
        setTimeout(function() {
          setTimeout(function() {
            expect(progressSpy).toHaveBeenCalledWith('***working...***');
            done()
          })
        })
      })
    })

  });

  it('recovers from progressback exceptions', function(done) {
    var d = $q.defer();
    var progressSpy = jasmine.createSpy();
    var fulfilledSpy = jasmine.createSpy();
    d.promise.then(null, null, function(progress) {
      throw 'fail';
    });
    d.promise.then(fulfilledSpy, null, progressSpy);
    d.notify('working...');
    d.resolve('ok');

    setTimeout(function() {
      expect(progressSpy).toHaveBeenCalledWith('working...');
      expect(fulfilledSpy).toHaveBeenCalledWith('ok');
      done()
    })

  });

  it('can notify progress through promise returned from handler', function(done) {
    var d = $q.defer();
    var progressSpy = jasmine.createSpy();
    d.promise.then(null, null, progressSpy);
    var d2 = $q.defer();
    // Resolve original with nested promise
    d.resolve(d2.promise);
    // Notify on the nested promise
    d2.notify('working...');

    setTimeout(function() {
      setTimeout(function() {
        expect(progressSpy).toHaveBeenCalledWith('working...');
        done()
      })
    })

  });

  it('allows attaching progressback in finally', function(done) {
    var d = $q.defer();
    var progressSpy = jasmine.createSpy();
    d.promise.finally(null, progressSpy);
    d.notify('working...');

    setTimeout(function(){
      expect(progressSpy).toHaveBeenCalledWith('working...')
      done()
    })

  })

})