/* 
Write a JavaScript program that work as a trim function (string) using regular expression.
Input
console.log(Trim(' VWC '));
Output
'VWC'
*/

const Trim = (str:string): string=> {
  const before = `Before length: ${str.length}`
  let result = str.replace(/^\s+/g, '').replace(/\s+$/g, '')
  const after = `After length: ${result.length}`
  return `
  Word before: '${str}', ${before}
  Word after: '${result}', ${after}
  `
}
console.log(Trim(' VWC  '))
console.log(Trim('       VWC        '))