/**
 * Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after
 * deleting the property.
 * Input
 * console.log(student);
 * console.log(deleteRollNo(student));
 * Output
 * {"name":"David Rayy","sclass":"VI","rollno":12}
 * {"name":"David Rayy","sclass":"VI"}
 */
const student = { "name": "David Rayy", "sclass": "VI", "rollno": 12 }
const deleteRollNo = <T>(obj: Record<string, T>) => {
  console.log(obj);
  if (obj.hasOwnProperty('rollno')) {
    delete obj['rollno']
  }
  return obj
}
console.log(deleteRollNo(student));