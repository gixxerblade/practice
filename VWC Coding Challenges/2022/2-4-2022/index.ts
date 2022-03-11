/**
 * Write a JavaScript program that will return true if an object looks like a Promise, false otherwise.
 * Input
 * console.log(isPromiseLike({
 *   then: function() {
 *     return '';
 *   }
 * })); 
 * console.log(isPromiseLike(null));
 * console.log(isPromiseLike({}));
 * Output
 * true
 * false
 * false
 */

const isPromiseLike = (mayBeAPromise: any) => {
  return mayBeAPromise !== null && mayBeAPromise !== undefined && typeof mayBeAPromise.then === 'function'
}
console.log(isPromiseLike({
  then: function () {
    return '';
  }
}));
console.log(isPromiseLike(new Promise((res, rej) => {})));
console.log(isPromiseLike({}));
console.log(isPromiseLike('lol'));
console.log(isPromiseLike(123));
console.log(isPromiseLike(123n));
console.log(isPromiseLike(true));
console.log(isPromiseLike(null));
console.log(isPromiseLike(undefined));
console.log(isPromiseLike(Symbol));
console.log(isPromiseLike(() => {}));
console.log(isPromiseLike(() => {}));
console.log(isPromiseLike([]));
console.log(isPromiseLike(new Map()));
console.log(isPromiseLike(new Set()));


