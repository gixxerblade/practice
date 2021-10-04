// Take three lowercase letters and print out binary.
const value1 = 'abc';
const val2 = 'xns'
const convert = (str) => {
  const strArr = str.split('').map((el: any) => {
    return `0${el.charCodeAt().toString(2)}`
  });
  return strArr.join('');
};
console.log(convert(value1));
console.log(convert(val2));
