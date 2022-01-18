const decapitalizeFirstLettersOfString = (str: string): string => {
  return str
    .split(' ')
    .map((word) => {
      return word.replace(word.substr(0, 1), word.substr(0, 1).toLowerCase());
    })
    .join(' ');
};
console.log(decapitalizeFirstLettersOfString('Hello There'));
console.log(decapitalizeFirstLettersOfString('Hell0 THere'));
