// Heap's algorithm O(n!)
let permutations = (nums) => {
  let result = [];
  let str = nums.toString();
  if (str.length === 1) {
    return nums;
  }
  // Separate the first item and find all permutations of the next items
  for (let i = 0; i < str.length; i++) {
    let firstChar = str[i];
    let rest = str.substring(0, i) + str.substring(i + 1);
    // Recursively go through the rest of the items
    let perms = permutations(rest);
    // Put both together
    for (let j = 0; j < perms.length; j++) {
      result.push(firstChar + perms[j]);
    }
  }
  return result;
};

console.log(permutations(3)); // length of 1 returns number
console.log(permutations(45321).join(" ")); // Returns fastish
console.log(permutations("Schuster").join(" ")); // takes a long time to return
