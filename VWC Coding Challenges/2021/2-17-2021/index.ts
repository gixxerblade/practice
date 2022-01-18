import { intersection } from "lodash";

type ArrayArg = unknown[];
const _ = {
  intersection: (...array: ArrayArg): [] => {
    return intersection(...array);
  },
};
console.log(_.intersection([2, 1, 3], [2, 3], [3, 2, 4]));

// Without Lodash

const __ = {
  intersection: (arrayA: number[], arrayB: number[]): number[] => {
    return arrayA.filter((someIntersectingValue) =>
      arrayB.includes(someIntersectingValue)
    );
  },
};

console.log(__.intersection([1, 2], [2, 3]));

// Without Lodash

// const __ = {
//   intersection: (arrayA: number[], arrayB: number[]): number[] => {
//     return arrayA.filter((someIntersectingValue) =>
//       arrayB.includes(someIntersectingValue)
//     );
//   },
// };

// console.log(__.intersection([1, 2], [2, 3]));
// console.log(__.intersection([2, 1, 3], [2, 3], [3, 2, 4]));

// [...a].reduce((p, c) => p.filter((e) => c.includes(e)));

const I = {
  intersection: (...array) => {
    return [...array].reduce((prev, curr) =>
      prev.filter((someIntersectingValue) =>
        curr.includes(someIntersectingValue)
      )
    );
  },
};
console.log(I.intersection([1, 2], [2, 3]));
console.log(I.intersection([2, 1, 3], [2, 3], [3, 2, 4]));
