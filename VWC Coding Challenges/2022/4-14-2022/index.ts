/**
 * Write a JavaScript program to delete the rollno property from the following object.
 * Also print the object before or after deleting the property.
 * Input
 * console.log(student);
 * console.log(deleteRollNo(student));
 * Output
 * {"name":"David Rayy","sclass":"VI","rollno":12}
 * {"name":"David Rayy","sclass":"VI"}
 */

interface Student {
  name: string, 
  sclass: string,
  rollno: number,
}

interface StudentWORollNo extends Omit<Student, 'rollno'>{}

const student = { "name": "David Rayy", "sclass": "VI", "rollno": 12 }

const deleteRollNo = (obj: Student): StudentWORollNo => {
  const { rollno, ...rest } = obj;
  return rest
}

console.log(student);
console.log(deleteRollNo(student));