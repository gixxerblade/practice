/**
 * Write a JavaScript program that given 1 argument generates an object with random keys and values. The argument should dictate how many entries there should be.
 * @Input
 * genRandomObject(3);
 * @Output
 * {
 *   ht: 433456787,
 *   Ac: 'dfvd',
 *   Bq: 'f0fdasdf'
 * }
 *  */
const genRandomName = (len?: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = '';
  if(!len) {
    len = Math.floor(Math.random() * 10) + 2
  }
  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

const genRandomObject = (numberObjectsToGenerate: number) => {
  const obj: {[key: string]: string} = {}
  for (let i = 0; i < numberObjectsToGenerate; i++) {
    let key = genRandomName(2)
    obj[key] = genRandomName()
  }
  return obj
}

console.log(genRandomObject(3))
console.log(genRandomObject(10))
