/**
 * Write a JavaScript program to list the properties of a JavaScript object.
 * Input
 * console.log(_.keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
 * Output
 * ["red","green","white"]
 * 
 */
type Obj<T> = Record<string, T>;

const _ = {
  keys: <T>(obj: Obj<T>) => Object.keys(obj),
  keyz: <T>(obj: Obj<T>) => {
    const array: string[] = [];
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        array.push(key)
      }
    }
    return array;
  }
}

console.log(_.keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
console.log(_.keyz({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
