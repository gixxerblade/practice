//@here Write a JavaScript program
//that generates a random character

const generateRandomCharacter = (): string => {
  return Math.random().toString(36).slice(1).substr(1, 1);
};

/**
 * Let's generate 10 random letters
 */
for (let i: number = 0; i < 10; i++) {
  console.log(generateRandomCharacter());
}
