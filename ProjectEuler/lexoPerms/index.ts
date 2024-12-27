import { recurseFact } from '../utils/utils';

const findLexoPerm = () => {
  const set = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let remainder = 999_999;
  let perm = 9;
  const answer: number[] = [];
  while (perm >= 0) {
    const factorial = recurseFact(perm);
    const index = Math.floor(remainder / factorial);
    remainder = remainder % factorial;
    const numsArray = Array.from(set);
    const num = numsArray[index];
    set.delete(num);
    answer.push(num);
    console.log({ num, index, perm, factorial, remainder, nums: set, numsArray, answer: answer.join('') });
    perm -= 1;
  }
  console.log(answer.join(''));
};
findLexoPerm();
