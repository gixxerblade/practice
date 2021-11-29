/**
 * Write a JavaScript program to delete the rollno property from the following object.
 * Also print the object before or after deleting the property.
 * @Input
 * console.log(student);
 * console.log(deleteRollNo(student));
 * @Output
 * {"name":"David Rayy","sclass":"VI","rollno":12}
 * {"name":"David Rayy","sclass":"VI"}
 */
var student = { "name": "David Rayy", "sclass": "VI", "rollno": 12 };
var deleteRollNo = function (obj) {
    console.log(obj);
    delete obj.rollno;
    console.log(obj);
};
deleteRollNo(student);
