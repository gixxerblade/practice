/* 
Write a JavaScript program that given 1 argument generates an 
object with random keys and values. The argument should dictate 
how many entries there should be.
*/

const generateRandomValueLength = () => {
  let max = 10,
    min = 2;
  return Math.random()
    .toString(36)
    .slice(1)
    .substr(1, Math.random() * (max - min) + min);
};

const generateRandomObject = (num: number): string => {
  let obj = {};
  for (let i = 0; i < num; i++) {
    let randomVals = generateRandomValueLength();
    let randomKeys = generateRandomValueLength();
    obj = { ...obj, [randomKeys]: randomVals };
  }
  return JSON.stringify(obj);
};
console.log(generateRandomObject(3));
