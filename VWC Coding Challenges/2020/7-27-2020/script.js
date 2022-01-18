/* 
Write a program to display the current day and time in the following format.
Today is : Monday.
Current time is : 10 PM : 30 : 38
*/
let date = new Date();
let dayDiv = document.getElementById("day");
let timeDiv = document.getElementById("time");

let dayOfWeek = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
  date
);
let time = date.toLocaleTimeString("en-US", { hour12: true }).split(":");
let AM_PM = time
  .filter((i) => i.includes("AM") || i.includes("PM"))
  .join("")
  .split(" ")
  .slice(1, 2)
  .join("");
let minutes = time[1].length < 2 ? `0${time[1]}` : time[1];
let seconds = date.getSeconds().toString();
let formattedSecs = seconds.length === 1 ? `0${seconds}` : seconds;
let currentTime = `${time[0]} ${AM_PM} : ${minutes} : ${formattedSecs}`;
dayDiv.innerHTML = `Today is : ${dayOfWeek}`;
timeDiv.innerHTML = `Current time is : ${currentTime}`;