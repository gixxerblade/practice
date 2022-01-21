/**
 * Write a JavaScript program to get the distance between two given points.
 * Input
 * console.log(distance(1, 1, 2, 3)); 
 * console.log(distance(-1, -1, 2, 3));
 * Output
 * 2.23606797749979
 * 5
 */
interface XYPoints {
  x1: number
  y1: number
  x2: number
  y2: number
}
const distance = (points: XYPoints) => {
  const { x1, y1, x2, y2 } = points;
  return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))
};

const point1 = { x1: 1, y1: 1, x2: 2, y2: 3 }
const point2 = { x1: -1, y1: -1, x2: 2, y2: 3 }
console.log(distance(point1)); 
console.log(distance(point2));