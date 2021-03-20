/**
 * DO NOT CHANGE CODE BETWEEN COMMENT BLOCKS
 */
// ///////////////////////////////////////////////////////////////////
// const [A, B, C] = ['A', 'B', 'C'];
// function getA() {
//   return A;
// }
// function getB(callback) {
//   setTimeout(() => {
//     callback(B);
//   }, 10);
// }
// function getC() {
//   return Promise.resolve().then(() => C);
// }
// ///////////////////////////////////////////////////////////////////
// // IMPLEMENT THIS FUNCITON
// function getABC() {
//   const obj = {};
//   const cb = (b) => (obj[b] = b);
//   getB(cb);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(getC().then((c) => [getA(), obj.B, c]));
//     }, 10);
//   });
// }
// getABC().then((arr) => console.log(arr, ['A', 'B', 'C']));

