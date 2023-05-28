/**
 * Find highest and lowest values in an array
 */

const min = <T extends number>(arr: T[]): number => {
  return Math.min(...arr)
}

const max = <T extends number>(arr: T[]): number => {
  return Math.max(...arr)
}

console.log(min([12,34,56,1]));
console.log(min([-12,-34,0,-56,-1]));
console.log(max([12,34,56,1]));
console.log(max([-12,-34,0,-56,-1]));