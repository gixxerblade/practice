/**
 * Write a JavaScript program to get the length of a JavaScript object.
 * Input
 * console.log(student);
 * console.log(getSize(student));
 * Output
 * {"name":"David Rayy","sclass":"VI","rollno":12}
 * 3
 */

interface Student {
  name: string,
  sclass: string,
  rollno: number,
}
const student: Student = { "name":"David Rayy","sclass":"VI","rollno":12 };

const getSize = (obj: Object) => Object.values(obj).length

console.log(student);
console.log(getSize(student));