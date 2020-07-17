/* 
 Create a function that takes a date object and return string in the following format:
YYYYMMDDHHmmSS
Examples
formatDate(new Date(2020, 6, 4, 8, 0, 0)) ➞ "20200704080000"
formatDate(new Date(2019, 11, 31, 23, 59, 59)) ➞ "20191231235959"
formatDate(new Date(2020, 6, 4)) ➞ "20200704000000"
Notes
Assume Date year input will always be greater than 1970.
Try not to rely on default Date.toString() output in your implementation.
Be aware that the Date's month field is zero based (0 is January and 11 is December).
And no builtin date formatting functions
*/

let testDate1 = new Date(2019, 11, 31, 23, 59, 59);
let testDate2 = new Date(2019, 11, 31, 23, 59, 59);
let testDate3 = new Date(2020, 6, 4);
const formatDate = (date) => {
  let dateArr = date.toString().split(" ");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = dateArr.filter((el) => months.includes(el));
  let monthNum = months.indexOf(month.toString()) + 1;
  return `${dateArr[3]}${
    monthNum < 10 ? "0" + monthNum : monthNum
  }${dateArr[2]}${dateArr[4].split(":").join("")}`;
};

console.log(formatDate(testDate1)); //➞ "20200704080000"
console.log(formatDate(testDate2)); //➞ "20191231235959"
console.log(formatDate(testDate3)); //➞ "20200704000000"
