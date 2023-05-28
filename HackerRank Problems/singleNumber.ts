const test1 = [2,2,1]
const test2 = [4,1,2,1,2]

interface Obj {
  [key: number]: number
}

const singleNumber = (nums: number[]): number => {
  const obj: Obj = {};
  nums.forEach((num) => {
    obj[num] = obj[num] + 1 || 1
  })
  return Object.keys(obj).find((key: number) => obj[key] === 1)
};

console.log(singleNumber(test1))
console.log(singleNumber(test2))