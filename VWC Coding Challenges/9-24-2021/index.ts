const decapitilize = (str: string) => {
  return str
    .split(' ')
    .map((word) => {
      return word.charAt(0).toLowerCase() + word.slice(1);
    })
    .join(' ');
};

console.log(decapitilize('Hi Der'));
console.log(decapitilize('HI DER'));
