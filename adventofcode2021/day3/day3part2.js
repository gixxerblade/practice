const fs = require("fs");

const getInput = (file) => {
  return fs.readFileSync(file, 'utf-8', (err, data) => {
    if (err) { throw err }
    return data
  }).split`\n`
}

const array = getInput('./input.txt')

const filterByMajority = (arr, index, type = 'most') => {
  const ones = arr.reduce((prev, current) => {
      prev += (current.split('')[index] == 1) ? 1 : 0;
      return prev;
  }, 0);
  let foundDigit;
  if (type === 'most') {
      foundDigit = (ones >= arr.length / 2) ? '1' : '0';
  } else {
      foundDigit = (ones < arr.length / 2) ? '1' : '0';
  }
  const filteredList = arr.filter((current) => {
      return current.split('')[index] === foundDigit;
  })
  if (filteredList.length === 1) {
      return filteredList;
  } else {
      return filterByMajority(filteredList, index + 1, type);
  }
}

const O2 = filterByMajority(array, 0)
const CO2 = filterByMajority(array, 0, 'l')

console.log(parseInt(CO2, 2) * parseInt(O2, 2))
