'use strict';

describe('$q', function() {

  let $q

  beforeEach(function() {
    $q = new Q()
  })

  it('can be instantiate', function() {
    expect($q).toBeDefined()
  })

  it('can create defer and promise', function() {
    const d = $q.defer()
    expect(d).toBeDefined()
    expect(d.promise).toBeDefined()
  })

  it('can resolve', function(done) {
    const d = $q.defer()
    const promiseSpy = jasmine.createSpy()

    d.promise.then(promiseSpy)

    d.resolve('ok')

    setTimeout(function() {
      expect(promiseSpy).toHaveBeenCalledWith('ok')
      done()
    }, 1)
  })

  it('works when resolved before promise listener', function(done) {
    var d = $q.defer();
    d.resolve(42);

    var promiseSpy = jasmine.createSpy();
    d.promise.then(promiseSpy);
    setTimeout(function() {
      expect(promiseSpy).toHaveBeenCalledWith(42);
      done();
    }, 0);
  })

  it('does not resolve promise immediately', function() {
    var d = $q.defer();
    var promiseSpy = jasmine.createSpy();
    d.promise.then(promiseSpy);
    d.resolve(42);
    expect(promiseSpy).not.toHaveBeenCalled();
  })

  it('may only be resolved once', function(done) {
    const d = $q.defer()

    const promiseSpy = jasmine.createSpy()
    d.promise.then(promiseSpy)

    d.resolve(42)
    d.resolve(43)

    setTimeout(function() {
      expect(promiseSpy.calls.count()).toEqual(1)
      expect(promiseSpy).toHaveBeenCalledWith(42)
      done()
    })
  })

  it('resolves a listener added after resolution', function(done) {
    var d = $q.defer();
    d.resolve(42);

    var promiseSpy = jasmine.createSpy();
    d.promise.then(promiseSpy);
    setTimeout(function() {
      expect(promiseSpy).toHaveBeenCalledWith(42);
      done()
    })
  })

  it('may have multiple callbacks', function(done) {
    var d = $q.defer()
    var firstSpy = jasmine.createSpy()
    var secondSpy = jasmine.createSpy()
    d.promise.then(firstSpy)
    d.promise.then(secondSpy)
    d.resolve(42)

    setTimeout(function() {
      expect(firstSpy).toHaveBeenCalledWith(42);
      expect(secondSpy).toHaveBeenCalledWith(42);
      done()
    })
  })

  it('invokes each callback once', function(done) {
    var d = $q.defer();
    var firstSpy = jasmine.createSpy();
    var secondSpy = jasmine.createSpy();
    d.promise.then(firstSpy);
    d.resolve(42);

    setTimeout(function() {
      expect(firstSpy.calls.count()).toBe(1);
      expect(secondSpy.calls.count()).toBe(0);
      done()
      d.promise.then(secondSpy);
      setTimeout(function() {
        expect(firstSpy.calls.count()).toBe(1);
        expect(secondSpy.calls.count()).toBe(1);
        done()
      })
    })
  })

  it('can reject a deferred', function(done) {
    var d = $q.defer();
    var fulfillSpy = jasmine.createSpy();
    var rejectSpy = jasmine.createSpy();
    d.promise.then(fulfillSpy, rejectSpy);
    d.reject('fail');

    setTimeout(function() {
      expect(fulfillSpy).not.toHaveBeenCalled();
      expect(rejectSpy).toHaveBeenCalledWith('fail');
      done()
    })
  });

  it('can reject just once', function(done) {
    var d = $q.defer();
    var rejectSpy = jasmine.createSpy();
    d.promise.then(null, rejectSpy);
    d.reject('fail');

    setTimeout(function() {
      expect(rejectSpy.calls.count()).toBe(1);

      d.reject('fail again');

      setTimeout(function() {
        expect(rejectSpy.calls.count()).toBe(1);
        done()
      })
    })
  });

  it('cannot fulfill a promise once rejected', function(done) {
    var d = $q.defer();
    var fulfillSpy = jasmine.createSpy();
    var rejectSpy = jasmine.createSpy();
    d.promise.then(fulfillSpy, rejectSpy);
    d.reject('fail');

    setTimeout(function() {
      d.resolve('success');

      setTimeout(function() {
        expect(fulfillSpy).not.toHaveBeenCalled();
        done()
      })
    })
  });

  it('does not require a failure handler each time', function(done) {
    var d = $q.defer();
    var fulfillSpy = jasmine.createSpy();
    var rejectSpy = jasmine.createSpy();
    d.promise.then(fulfillSpy);
    d.promise.then(null, rejectSpy);
    d.reject('fail');

    setTimeout(function() {
      expect(rejectSpy).toHaveBeenCalledWith('fail');
      done()
    })
  });

  it('does not require a success handler each time', function(done) {
    var d = $q.defer();
    var fulfillSpy = jasmine.createSpy();
    var rejectSpy = jasmine.createSpy();
    d.promise.then(fulfillSpy);
    d.promise.then(null, rejectSpy);
    d.resolve('ok');

    setTimeout(function() {
      expect(fulfillSpy).toHaveBeenCalledWith('ok');
      done()
    })
  });

  it('can register rejection handler with catch', function(done) {
    var d = $q.defer();
    var rejectSpy = jasmine.createSpy();
    d.promise.catch(rejectSpy);
    d.reject('fail');

    setTimeout(function(){
      expect(rejectSpy).toHaveBeenCalled();
      done()
    })

  });
})