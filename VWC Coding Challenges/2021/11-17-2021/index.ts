/**
 * Write a JavaScript program to get the length of a JavaScript object.
 * @Input
 * console.log(student);
 * console.log(getSize(student));
 * @Output
 * {"name":"David Rayy","sclass":"VI","rollno":12}
 * 3
 */

const student = { "name": "David Rayy", "sclass": "VI", "rollno": 12 };

const getSize = (obj: { [key: string]: number | string }) => {
  return Object.keys(obj).length
}

console.log(getSize(student))