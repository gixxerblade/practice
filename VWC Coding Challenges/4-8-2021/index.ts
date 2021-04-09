const convertThreeDigitHexToSix = (hexString: string): string => {
  let convertedHex: string = '#';
  let hexNums: string = '#1234567890ABCDEF';
  if (hexString.length > 4 || hexString.length < 4) {
    throw new Error('Must be a 3 - digit string');
  }
  if (hexString.charAt(0) !== '#') {
    throw new Error('#- digit hex string must start with an octothorpe');
  }
  for (let i = 0; i < hexString.length; i++) {
    if (hexNums.indexOf(hexString[i]) === -1) {
      throw new Error('Only hexadecimal characters are allowed');
    }
  }
  hexString
    .replace('#', '')
    .split('')
    .map((hexChar) => {
      convertedHex += hexChar + hexChar;
    });
  return convertedHex;
};
// console.log(convertThreeDigitHexToSix('#12345')) // 'Must be a 3 - digit string'
// console.log(convertThreeDigitHexToSix('1234')) // '#- digit hex string must start with an octothorpe'
// console.log(convertThreeDigitHexToSix('#rrr')) // 'Only hexadecimal characters are allowed'
console.log(convertThreeDigitHexToSix('#000')); // #000000
