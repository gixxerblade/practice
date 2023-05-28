/**
 * Write a JavaScript program to list the properties of a JavaScript object.
 * Input
 * console.log(_keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
 * Output
 * ["red","green","white"]
 */

const _keys = (obj: Object): unknown[] => Object.keys(obj)
console.log(_keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));