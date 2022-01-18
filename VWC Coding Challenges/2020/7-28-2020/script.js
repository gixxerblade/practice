/**
 * write a javascript function that prints the current date in these different formats mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy, dd/mm/yyyy
 *
 */

let dateFormat = () => {
  let date = new Date();
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  let month = new Intl.DateTimeFormat("en", { month: "numeric" }).format(date);
  month = month.length < 2 ? `0${month}` : month;
  let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  day = day.length < 2 ? `0${day}` : day;
  console.log(`${month}-${day}-${year}`);
  console.log(`${month}/${day}/${year}`);
  console.log(`${day}-${month}-${year}`);
  console.log(`${day}/${month}/${year}`);
};
dateFormat();
