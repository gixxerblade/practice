// Write an object with methods named as different colors and outputs a console.log with that color in the console.
//Examples
//colorizer.red('string that turns red')
//colorizer.green('string that is green')

const colorizer = {
  red: (str) => console.log(`%c${str}`, 'color: red'),
  green: (str) => console.log(`%c${str}`, 'color: green'),
  blue: (str) => console.log(`%c${str}`, 'color: blue'),
  yellow: (str) => console.log(`%c${str}`, 'color: yellow'),
  magenta: (str) => console.log(`%c${str}`, 'color: magenta'),
  cyan: (str) => console.log(`%c${str}`, 'color: cyan'),
};

colorizer.red('string that turns red');
colorizer.green('string that is green');
colorizer.blue('string that is blue');
colorizer.yellow('string that is yellow');
colorizer.magenta('string that is magenta');
colorizer.cyan('string that is cyan');
