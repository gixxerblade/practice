// Area of an isoceles triangle
type s = {
  s1: number;
  s2: number;
  s3: number;
};

const area = (sides: s): number => {
  //semi perimeter of a triangle by adding all the three sides of a triangle and dividing it by 2.
  const { s1, s2, s3 } = sides;
  const semiP: number = (s1 + s2 + s3) / 2;
  /**
   * Heron's fomula
   * gives the area of a triangle
   * when the length of all three
   * sides are known.
   */
  return Math.sqrt(semiP * (semiP - s1) * (semiP - s2) * (semiP - s3));
};
const sides: s = { s1: 5, s2: 6, s3: 7 };
console.log(area(sides)); //14.696938456699069
