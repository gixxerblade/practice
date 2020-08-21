//Write a JavaScript program to generate a random hexadecimal color code

let randRGB = () => {
  return (rgb = Math.floor(Math.random() * 256));
};
let randHexColors = () => {
  let r = randRGB();
  let g = randRGB();
  let b = randRGB();
  let bin = (r << 16) | (g << 8) | b;
  bin.toString(16).length < 6 && randHexColors()
  return `#${bin.toString(16).toUpperCase()}`;
};
console.log(randHexColors());
