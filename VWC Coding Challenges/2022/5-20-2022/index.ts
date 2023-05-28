/**
 * Write a JavaScript function to calculate degrees between 2 points with inverse Y axis.
 * @Input
 * console.log(pointDirection(1, 0, 12, 0));
 * console.log(pointDirection(1, 0, 1, 10));
 * @Output
 * 0
 * 90
 */
//* Coordinates appear to be themX, themY, meX, meY
type Points = {
  meX: number, // meX
  themX: number, // themX
  meY: number, // meY
  themY: number, // themY
}
const pointDirection = ({ themX, themY, meX, meY }: Points) => {
  const degrees = 180 / Math.PI;
  return Math.atan((themY - meY) / (meX - themX)) * degrees
}
const points1: Points = {
  meX: 12,
  themX: 1,
  meY: 0,
  themY: 0
}
const points2: Points = {
  meX: 1,
  themX: 1,
  meY: 0,
  themY: 10,
}
console.log(pointDirection(points1));
console.log(pointDirection(points2));