#!/usr/bin/env node
/* 
Description
Take all the arguments given and print out (in order) 
the values missing between the first and last argument.

@Input
~$ ./missing_val_solve.py 0 1 2 4 9 10 11 13 14 15 22 23 25

@Output
$ ./missing_val_solve.py 0 1 2 4 9 10 11 13 14 15 22 23 25
3 5 6 7 8 12 16 17 18 19 20 21 24
*/

const findMissingValues = (input) => {
  const values = input.slice(2).map(Number)
  const missingValues = []
  const max = Math.max(...values)
  const min = Math.min(...values)
  for (let i = min; i <= max; i++) {
    if (values.indexOf(i) === -1) {
      missingValues.push(i)
    }
  }
  return missingValues.map((val) => val.toString()).join(' ')
}
console.log(findMissingValues(process.argv))