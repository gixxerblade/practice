/**
 * Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).
 * @Input
 * console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
 * console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
 * console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));
 * @Output
 * "Date1 = Date2"
 * "Date1 > Date2"
 * "Date2 > Date1"
 *  */

const compareDates = (d1: Date, d2: Date): string => {
  if (d1 > d2) {
    return "Date1 > Date2"
  }
  if (d2 > d1) {
    return "Date2 > Date1"
  }
  return "Date1 = Date2"
}

console.log(compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compareDates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compareDates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));