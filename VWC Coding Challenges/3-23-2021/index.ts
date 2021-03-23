/**
 * Write a JavaScript program to find the area of a triangle
 * where lengths of the three of its sides are 5, 6, 7
 */
type numsParams = {
  five: number;
  six: number;
  seven: number;
};

class Triangle {
  area(params: numsParams): number {
    const { five, six, seven } = params;
    return (five + six + seven) / 2;
  }
}
const params = { five: 5, six: 6, seven: 7 };
const triangle = new Triangle();
console.log(triangle.area(params));
