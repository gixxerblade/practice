const arr = [1,2,3]
const n = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
const plusOne = (digits: number[]): number[] => {
  const str = digits.join('')
  const nums = Number(str)
  return Array.from(nums.toString()).map(Number)
};

console.log(plusOne(arr))
console.log(plusOne(n))