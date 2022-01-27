/**
 * Write a JavaScript program to convert a string from camelcase.
 * Input
 * console.log(fromCamelCase('someDatabaseFieldName', ' '));
 * console.log(fromCamelCase('someLabelThatNeedsToBeCamelized', '-'));
 * console.log(fromCamelCase('someJavascriptProperty', '_'));
 * Output
 * some database field name
 * some-label-that-needs-to-be-camelized
 * some_javascript_property
 */

const fromCamelCase = (str: string, separator: string) => {
  return str
    .match(/[A-Z|a-z][a-z]+/g) // <--- magic right here
    .map((word) => {
      return word.charAt(0).toLowerCase() + word.slice(1)
    })
    .join(separator)
}

console.log(fromCamelCase('someDatabaseFieldName', ' '));
console.log(fromCamelCase('someLabelThatNeedsToBeCamelized', '-'));
console.log(fromCamelCase('someJavascriptProperty', '_'));