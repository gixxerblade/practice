const randomHexHelper = (): string => {
  return (Math.floor(Math.random() * 255)).toString(16).toUpperCase().padStart(2, '0')
}
const generateRandomHexColor = (): string => {
  const red = randomHexHelper()
  const green = randomHexHelper()
  const blue = randomHexHelper()
  return `#${red}${green}${blue}\n`
}

// console.log(generateRandomHexColor())
Array.from({ length: 10 }).forEach((_time) => console.log(generateRandomHexColor()))

