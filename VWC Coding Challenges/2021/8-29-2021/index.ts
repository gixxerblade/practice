/**
 * Write a JavaScript program to convert a string from camelcase.
 * @Input
 * console.log(fromCamelCase('someDatabaseFieldName', ' '));
 * console.log(fromCamelCase('someLabelThatNeedsToBeCamelized', '-'));
 * console.log(fromCamelCase('someJavascriptProperty', '_'));
 * @Output
 * some database field name
 * some-label-that-needs-to-be-camelized
 * some_javascript_property
 */

const E = (str: string): Error => new Error(str);

const validateString = (str: string): void | string => {
  const errors: Error[] = [];
  if (str.indexOf(' ') > 0) {
    errors.push(E('Must be a single string'));
  }
  if (!str.match(/[A-Z]/g)) {
    errors.push(E('There are no uppercase letters in the string'));
  }
  if (Number(str[0])) {
    errors.push(E('Name cannot start with a number'));
  }
  if (!str[0].match(/[a-z]/)) {
    errors.push(E('String must start with a lowercase letter'));
  }
  if (errors.length) {
    return errors.join('\n');
  }
  return;
};

const fromCamelCase = (str: string, separator: string = '') => {
  validateString(str);
  return str.replace(/[A-Z]/g, (input) => {
    return separator + input.toLowerCase();
  });
};
console.log(fromCamelCase('someDatabaseFieldName', '_'));
console.log(fromCamelCase('someLabelThatNeedsToBeCamelized', '-'));
console.log(fromCamelCase('someJavascriptProperty', '_'));
console.log(fromCamelCase('someJavascriptProperty', '*'));
