/**
 * Write a JavaScript program to get the length of a JavaScript object.
 * Input
 * console.log(student);
 * console.log(getSize(student));
 * Output
 * {"name":"David Rayy","sclass":"VI","rollno":12}
 * 3
 */
const randomObj = { "name": "David Rayy", "sclass": "VI", "rollno": 12, lol: '' }
const getSize = (obj: Record<string, string | number>) => Object
  .keys(obj)
  .filter((key) => !!obj[key]).length
console.log(randomObj);
console.log(getSize(randomObj));
