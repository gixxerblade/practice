import {bigMf} from '../utils/utils';

const thousandthFib = () => {
  let i = 1;
  let answer = BigInt(0);
  while (true) {
    answer = bigMf(i);
    if (answer.toString().length === 1000) {
      break;
    }
    i++;
    // console.log(answer)
  }
  console.log(i)
};

thousandthFib()