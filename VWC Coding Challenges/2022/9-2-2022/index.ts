/**
 * Write a JavaScript program that given 1 argument generates an object with random keys and values. The argument should dictate how many entries there should be.
 * Input
 * genRandomObject(3);
 * Output
 * {
 *   ht: 433456787,
 *   Ac: 'dfvd',
 *   Bq: 'f0fdasdf'
 * }
 * 
 */

const generateRandom = () => {
  const which = Math.floor(Math.random() * 2)
  console.log(which)
  const string = (Math.random() * 1).toString(36).slice(2, 7);
  const number =  Math.floor(Math.random() * 100000)
  return which > 0 ? string : number;
}
const genRandomObject = (numberOfPropertiesToGenerate: number): Object => {
  const obj: Record<string, unknown> = {};
  for (let i = 0; i < numberOfPropertiesToGenerate; i++) {
    const randomProp = generateRandom();
    const randomValue = generateRandom();
    obj[randomProp] = randomValue
    
  }
  return obj;
}
console.log(genRandomObject(3))

