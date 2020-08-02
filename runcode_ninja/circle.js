const r = readline()
let circle = r => {
  const PI = Math.PI;
  let area = PI * Math.pow(r, 2);
  let perimeter = 2 * PI * r;
  console.log(area);
  console.log(perimeter);
};
circle(r);
