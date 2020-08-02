let time = document.getElementById("time");

let timeF = () => {
  let timeOfDay = moment()
    .utcOffset(-300)
    .format("[Today is] dddd[, ]MMMM Do YYYY, h:mm:ss a");
  time.innerHTML = timeOfDay;
};
setInterval(timeF, 1000);
