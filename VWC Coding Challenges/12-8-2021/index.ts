/* 
Write a JavaScript function to get the month name from a particular date.
Input
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));
Output
"October"
"November"
*/
interface DateContructor{
  new(): Date
}
const getMonthName = (date: Date) => {
  if(!Date.parse(date.toString())) {
    return new Error('Not a valid date')
  }
  const lookup: Record<number, string> = {
    0: 'January',
    1: "February",
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }
  return lookup[date.getMonth()]
}


console.log(getMonthName(new Date("10/11/2009")));
console.log(getMonthName(new Date("11/13/2014")));
console.log(getMonthName(new Date("12/13/2014")));
