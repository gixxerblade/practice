const rotational = (word, rotated) => {
  let count = 0
  if (word === rotated) {
    return count
  }
  const arrWord = word.split('')
  for (let i = 0; i < arrWord.length; i++) {
    arrWord.push(arrWord.shift())
    count++
    if (arrWord.join('') === rotated) {
      return count
    }
  }
}

console.log(rotational(process.argv[2], process.argv[3]))
console.log(rotational('dog', 'ogd'))
console.log(rotational('soupface', 'soupface'))
console.log(rotational('dinosaur', 'saurdino'))
console.log(rotational('javascript', 'tjavascrip'))