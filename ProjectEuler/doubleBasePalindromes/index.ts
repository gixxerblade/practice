const findDoubleBasePalins = () => {
  let total = 0;
  for (let i = 1; i < 1000000; i++) {
    if (isPalindrome(i)) {
      console.log(i);
      total += i;
    }
  }
  return total;
};

const isPalindrome = (num: number) => {
  if (isIntPalindrome(num)) {
    if (isBinaryPalindrome(num)) {
      return true;
    }
  }
  return false;
};

function isIntPalindrome(num) {
  const reversedStr = num.toString().split('').reverse().join('');
  return num.toString() === reversedStr;
}

function isBinaryPalindrome(num) {
  const binary = num.toString(2);
  return binary === binary.split('').reverse().join('');
}

console.log(findDoubleBasePalins());
