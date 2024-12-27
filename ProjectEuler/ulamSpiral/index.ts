/**
 * initialize sum = 1  // Starting with the center value
 * for n from 3 to 1001, step 2:
 *     sum += 4 * n^2 - 6 * (n - 1)
 * output sum
 */

const main = () => {
  let sum = 1;
  for (let i = 3; i <= 1001; i += 2) {
    sum += 4 * i**2 - 6 * (i - 1);
  }
  console.log(sum);
};

main();
