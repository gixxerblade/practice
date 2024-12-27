import { recurseFact } from '../utils/utils';

const latticePaths = () => {
  return recurseFact(20 + 20) / (recurseFact(20) * recurseFact(20));
};
console.log(latticePaths());
