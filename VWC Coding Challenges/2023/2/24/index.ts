/**
 * Write a JavaScript function to get the last day of a month.
 * @Input
 * console.log(lastday(2014,0));
 * console.log(lastday(2014,1));
 * console.log(lastday(2014,11));
 * 
 * @Output
 * 31
 * 28
 * 31
 */

/**
 * @param year 4 digit number
 * @param month number between 0 and 11 inclusive
 * @returns last day of the month 
 */
const lastday = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

/**
 * The lastday function takes two parameters, year and month, both of type number.
 * The function uses the Date constructor to create a new date object with the given year and month,
 * and a day value of 0.
 * When the day value is set to 0, it means the date is set to the last day of the previous month.
 * The getDate() method is then called on this date object to return the last day of the given month.
 * The function returns the result, which is a number representing the last day of the month.
 */

console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));