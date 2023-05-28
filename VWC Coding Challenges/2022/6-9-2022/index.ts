const type = (obj?: unknown, showFullClass: boolean = true): string => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#real-world_usage
  // get toPrototypeString() of obj (handles all types)
  if (showFullClass && typeof obj === "object") {
    return Object.prototype.toString.call(obj).slice(8, -1);
  }
  if (obj == null) { return (obj + '').toLowerCase(); } // implicit toString() conversion

  const deepType = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  if (deepType === 'generatorfunction') { return 'function' }

  // Prevent overspecificity (for example, [object HTMLDivElement], etc).
  // Account for functionish Regexp (Android <=2.3), functionish <object> element (Chrome <=57, Firefox <=52), etc.
  // String.prototype.match is universally supported.

  return deepType.match(/^(array|bigint|date|error|function|generator|regexp|symbol)$/) ? deepType :
    (typeof obj === 'object' || typeof obj === 'function') ? 'object' : typeof obj;
}

console.log(type('The quick brown fox'));
console.log(type([]));

const GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor;
const g = new GeneratorFunction('a', 'yield a * 2');
const iterator = g(10);
console.log(type(iterator));
console.log(type(iterator.next().value));
let sym1 = Symbol()
console.log(type(sym1));
console.log(type(1010n));
console.log(type(new Error()));
console.log(type(new Date()));
console.log(type(() => {}));
console.log(type(new RegExp(/lol/)));
console.log(type([1]));






