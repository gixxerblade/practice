/**
 * Write a JavaScript program to list the properties of a JavaScript object.
 * @Input
 * console.log(_keys({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
 * @Output
 * ["red","green","white"]
 */

type Props = Record<string, any>

const colors = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }

const _keys = [
  // Using reduce
  function _keysReduce (obj: Props) {
    return Object.keys(obj).reduce((acc: string[], curr) => [...acc, curr], [])
  },

  // Using Object.keys
  function _keysObjectKeys (obj: Props) {
    return Object.keys(obj)
  },

  // Using map
  function _keysMap (obj: Props) {
    return Object.keys(obj).map((prop) => prop)
  },

  // Using for...in
  function _keysForIn(obj: Props) {
    let arr = []
    for (const key in obj) {
      arr.push(key)
    }
    return arr
  },
]

for (let i = 0; i < _keys.length; i++) {
  console.log(_keys[i](colors))  
}
// console.log(_keysReduce(colors))
// console.log(_keysObjectKeys(colors))
// console.log(_keysMap(colors))
// console.log(_keysForIn(colors))