
type FixedLengthArray<L extends number, T> = L extends 0 ? never[] : {
  0: T,
  length: L
}

const _ = {
  fromPairs: (arr: FixedLengthArray<2, string | number>[]) => {
    return arr.map((inner) => ({
      [inner[0]]: inner[1]
    }))
  },
}
console.log(_.fromPairs([['A', 1], ['b', 2]]));
console.log(_.fromPairs([['A', 1], ['b', 2, 3]])); // Type '[string, number, number]' is not assignable to type '{ 0: string | number; length: 2; }
console.log(0 ? true : [])