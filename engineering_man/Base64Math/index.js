/* 
Base64 Math
Solve some simple math problems where all numbers are given as base64. inputs given will be comma delimited.

base64,operation,base64

Operation Key.
+ = Plus
- = Minus
/ = Divide
* = Multiply
*/

const o=process.argv[2].split(',').slice(1,2).join('')
const i=process.argv[2].split(',').join('').split(o).map(n=>atob(n))
console.log(eval(`${i[0]}${o}${i[1]}`))

