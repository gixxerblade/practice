/* 
This week’s question:
Given an array of people objects (where each person has a name and a number of pizza 
    slices they’re hungry for) and a number for the number of slices that the pizza 
    can be sliced into, return the number of pizzas you need to buy.

Example:
$ arr = [{ name: Joe, num: 9 }, { name: Cami, num: 3 }, { name: Cassidy, num: 4 }]
$ gimmePizza(arr, 8)
$ 2 // 16 slices needed, pizzas can be sliced into 8 pieces, so 2 pizzas should be ordered

*/

const arr = [
  { name: "Joe", num: 9 },
  { name: "Cami", num: 3 },
  { name: "Cassidy", num: 4 },
];
const gimmePizza = (arr, slices) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    for (const key in arr[i]) {
      if (key === "num") total += arr[i][key];
    }
  }
  return `${total} slices needed, pizzas can be sliced into ${slices}, so ${Math.ceil(
    total / slices
  )} pizzas should be ordered`;
};

console.log(gimmePizza(arr, 8));
