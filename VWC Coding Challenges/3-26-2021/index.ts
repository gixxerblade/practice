// @here Write a JavaScript exercise to get the extension of a filename.
// Example
// function getExtension(fileName) {
//     const ext = fileName.split('.')
//     return ext.pop()
//   }

import * as path from 'path';
const getExtension = (fileName: string): string => {
  return path.extname(fileName);
};

console.log(getExtension('doc.txt'));
// => 'txt'
console.log(getExtension('App.test.js'));
// => 'js'
console.log(getExtension('really-big-css.css'));
// => 'css'
console.log(getExtension('really-big-js.test.js'));
