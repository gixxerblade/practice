/**
 * @here Write a JavaScript program to list the properties of a
 * JavaScript object.
 * @Input
 *? console.log(_keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
 * @Output
 *? ["red","green","white"]
 */

type Shape = {
  [key: string]: any;
  [key: number]: any;
};
const _keys = (obj: Shape): string[] => {
  return Object.keys(obj);
};

console.log(_keys({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));
console.log(_keys({ 1: "#FF0000", 2: "#00FF00", 3: "#FFFFFF" }));
