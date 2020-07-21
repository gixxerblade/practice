/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

s: a string representing time in 12 hour format

Sample Input 0

07:05:45PM
Sample Output 0

19:05:45

Diagram:
split time using ":" as a separator
regex last two digits as AM || PM
if PM add +12 to first element in array and filter PM
else filter AM from array
join array using ":"
return result

Pseudo Code:
func timeConversion(s){
    let arr = s.split(":")
    if(arr.[0]<12)
        arr[0]+12
        arr.filter(i=>i = "PM")
    else arr.filter(i=>i="AM")
    return arr.join(":")
}

 */

let timeConversion = (s) => {
  let arr = s.split(":");
  let AM_PM = /AM|PM\1*/g;
  console.log(arr);
  if (arr[0] < 12) {
    if (arr[arr.length - 1].includes("PM")) {
      let num = parseInt(arr[0]);
      arr[0] = num + 12;
    }
    arr[arr.length - 1] = arr[arr.length - 1].replace(AM_PM, "");
    let result = arr.join(":");
    return result;
  } else if (arr[0] === "12") {
    if (arr[arr.length - 1].includes("AM")) {
      arr[0] = "00";
    }
    arr[arr.length - 1] = arr[arr.length - 1].replace(AM_PM, "");
    let result = arr.join(":");
    return result;
  } else {
    arr[arr.length - 1] = arr[arr.length - 1].replace(AM_PM, "");
    let result = arr.join(":");
    return result;
  }
};
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:40:22AM"));
console.log(timeConversion("06:40:03AM"));
console.log(timeConversion("12:45:54PM"));
