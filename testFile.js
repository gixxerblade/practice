// class AllKeys {
//   constructor(input) {
//     this.obj = input;
//   }

//   static increment(key) {
//     if (!this.input.hasOwnProperty(key)) {
//       this.input[key] = 1;
//     } else {
//       this.input[key]++;
//     }
//     return this.input;
//   }

//   static decrement(key) {
//     if (!this.input.hasOwnProperty(key)) {
//       return this.input;
//     }
//     this.input[key]--;
//     if (this.input[key] === 0) {
//       delete this.input[key];
//     }
//     return this.input;
//   }

//   static getMaxKey() {
//     return Math.max(...Object.values(this.input));
//   }

//   static getMinKey() {
//     return Math.min(...Object.values(this.input));
//   }
// }

// const obj1 = {
//   a: 1,
//   b: 2,
// };
// const keys = new AllKeys(obj1);

// console.log(AllKeys.increment('a')); // 'a' started at 1, incremented 2
// console.log(AllKeys.decrement('a')); // 'a' at 2 decremented to 1
// console.log(AllKeys.decrement('a')); // removes 'a' since it is at zero
// console.log(AllKeys.increment('a')); // add 'a' again
// console.log(AllKeys.getMaxKey()); //return 'b'
// console.log(AllKeys.increment('c')); // returns a new 'c' key set at 1
// console.log(AllKeys.getMinKey()); // returns a new 'c' key set at 1

const defaultCropZone = {
  zoneName: '',
  areaValue: 0,
  areaUnitType: 'AC',
}
const field = {
  areaValue: 20
}
const newCropZones = [];

const twoDefaultCropZones = Array.from({ length: 2 }, () => (
  { ...defaultCropZone, areaValue: Math.ceil(field.areaValue / 2) }
));
newCropZones.push(...twoDefaultCropZones)

console.log(newCropZones)

const getSomething = (): TaskEither<SomeTypeToReturn, Error> => {
  try {
    return {}: SomeTypeToReturn
  } catch (error: Error) {
    {} Error
  }
}