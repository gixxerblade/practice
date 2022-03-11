/**
 * Write a JavaScript exercise to get the extension of a filename.
 * Example
 * getExtension('doc.txt') => 'txt'
 * getExtension('App.test.js') => 'js'
 * getExtension('really-big-css.css') => 'css'
 */

const getExtension = (str: string): string => {
  const strArr = str.split('.')
  return strArr[strArr.length - 1]
}

console.log(getExtension('doc.txt'))
console.log(getExtension('App.test.js'))
console.log(getExtension('really-big-css.css'))