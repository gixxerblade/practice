/**
 * Write a JavaScript function to get the current date.
 * Note: Pass a separator as an argument.
 * @Input
 * console.log(curday('/'));
 * console.log(curday('-'));
 * @Output
 * "11/13/2014"
 * "11-13-2014"
 */

type Separator = '/' | '-'

const curDay = (s?: Separator) => {
  const date: Date = new Date()
  const mm = date.getMonth() + 1
  const dd = date.getDate()
  const yyyy = date.getFullYear()
  return s ? `${mm}${s}${dd}${s}${yyyy}`
    : `${mm}${dd}${yyyy}`
}
console.log(curDay('/'));
console.log(curDay('-'));
console.log(curDay());



