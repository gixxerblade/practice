/**
 * Write a JavaScript function which accepts an argument and returns the type.
 * Input
 * 'The quick brown fox'
 * Output
 * 'String'
 */
const unknownArrayOfTypes = [
  'string',
  { any: 'thing' },
  [1, 2, 3],
  100n,
  true,
  null,
  Symbol('lol'),
  () => null,
  undefined
]

const determineType = (itemToDetermine: unknown) => {
  return Object.prototype
    .toString.call(itemToDetermine)
    .split(" ")[1]
    .slice(0, -1) as unknown
};

const displayTypes = (t: unknown[]) => {
  const types: unknown[] = []
  unknownArrayOfTypes.forEach(type => {
    types.push(determineType(type))
  });
  return types
}
console.log(displayTypes(unknownArrayOfTypes))
