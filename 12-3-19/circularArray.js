/* Write a function that takes the name of a day (e.g "Monday", "Tuesday") 
and an integer offset, and returns the name of the day which would be the 
original + offset. Extra credit: do it in 1 line! */

let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
/* This algorithm takes two variables, the day of the week as a string and the offset you wish to find.
For example, if you write "Monday" as the day of the week with an offset of 7 you should get "Monday" returned.
That is because "Monday" is seven days away from "Monday". If you take "Monday" again and
ask for an offset of 8 then you will get "Tuesday" One way I read to do it "faster" is to use a Juggling 
Algorithm. I'll keep that in mind for later. At any rate, this demonstrates a circular array.  */
let offSetDay = (day, offset) => console.log(week[(week.indexOf(day) + offset) % week.length]);

offSetDay("Monday", 7);


/* let offsetDay = (day, offset) => {
  let indexOfDay = week.indexOf(day);
  let newIndex = (indexOfDay + offset) % week.length;
  let newDay = week[newIndex];
  return newDay;
}; */
//offsetDay("Monday", 7);
