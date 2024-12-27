import { getFactors } from '../utils/utils';

const triangle = (num: number = 1): number => {
  const triangleNum = (num * (num + 1)) / 2;
  const factors = getFactors(triangleNum);
  console.log({ [triangleNum]: factors });
  if (factors.length > 500) {
    return triangleNum;
  }
  return triangle(num + 1);
};

console.log(triangle());
