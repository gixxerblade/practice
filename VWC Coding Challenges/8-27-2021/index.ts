type Arr = ArrElem;
interface ArrElem extends Array<Arr | string | number> {}

Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat: any[], toFlatten: any[]) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});

const flatten = (arr: Arr, depth: number = Infinity) => {
  return arr.flat(depth);
};

console.log(flatten([1, [2], 3, 4]));
console.log(flatten([1, [2, [3, [4, 5], 6], 7], 8], 2));
