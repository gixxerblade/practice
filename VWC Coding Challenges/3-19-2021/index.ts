// convert minutes to seconds

const convert = (minutes: number): number => {
  let seconds: number = 0;
  for (let i = 0; i < minutes; i++) {
    seconds += 60;
  }
  return seconds;
};

console.log(convert(5));
