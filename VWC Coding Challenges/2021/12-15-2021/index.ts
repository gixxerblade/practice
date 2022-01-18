/**
 * Write a JavaScript function to get the number of days in a month.
 * @Input
 * console.log(getDaysInMonth(1, 2012));
 * console.log(getDaysInMonth(2, 2012));
 * console.log(getDaysInMonth(9, 2012));
 * console.log(getDaysInMonth(12, 2012));
 * @Output
 * 31
 * 29
 * 30
 * 31
 */
type y = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0;
type YYYY = `19${y}${y}` | `20${y}${y}`
type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
interface TDate {
  month: Month
  year: YYYY
}
const getDaysInMonth = (mmyyyy: TDate) => {
  const { month, year } = mmyyyy
  return new Date(+year, month, 0).getDate();
}

console.log(getDaysInMonth({ month: 1, year: '2012' }));
console.log(getDaysInMonth({ month: 2, year: '2012' }));
console.log(getDaysInMonth({ month: 9, year: '2012' }));
console.log(getDaysInMonth({ month: 12, year: '2012' }));