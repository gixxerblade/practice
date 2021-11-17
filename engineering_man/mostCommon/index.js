const value1 = process.argv[2]

const hasVowel = (str) => {
  const regex = /(\b[AaEeIiOoUu]+[\w]*\b)/g
  return regex.test(str)
}

const mostCommon = (string) => {
  let charObj = {};
  string = string.toLowerCase().split(' ').join('')
  for (let char of string) {
    charObj[char] = charObj[char] + 1 || 1;
  }
  const max = Math.max(...Object.values(charObj))
  return Object.keys(charObj).filter(key => charObj[key] == max).join(',')
};

console.log(mostCommon(value1))
console.log(mostCommon('Engineer man'))
console.log(mostCommon('The way this mode works is by looking for the mode of the characters of any given string'))
console.log(mostCommon('tttt::::::tt::t::t:::t:t:'))
console.log(mostCommon('Chocolate bar'))


