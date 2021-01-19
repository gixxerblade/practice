/**
 * @here Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
 *
 * @Input
 * *console.log(student);
 * *console.log(deleteRollNo(student));
 *
 * @Output
 * *{"name":"David Rayy","sclass":"VI","rollno":12}
 * *{"name":"David Rayy","sclass":"VI"}
 */

interface Student {
  name: string;
  sclass: string;
  rollno: number;
}
const student: Student = { name: "David Rayy", sclass: "VI", rollno: 12 };

const deleteRollNo = (stud: Student) => {
  delete stud.rollno;
  return stud;
};

console.log(deleteRollNo(student));
