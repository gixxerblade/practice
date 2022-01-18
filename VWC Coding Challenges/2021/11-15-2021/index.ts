/* 
function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}
Cylinder.prototype.Volume = // your code here
var cyl = new Cylinder(7, 4);
console.log('volume =', cyl.Volume());
*/

function Cylinder(cyl_height: number, cyl_diameter: number): void {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.roundToPlaces = function (num: number, places: number = 2): number {
  const control = Math.pow(10, places)
  return Math.round(num * control) / control
}

Cylinder.prototype.Volume = function (): number {
  // radius = diameter / 2
  const r: number = this.cyl_diameter / 2
  // Volume = πr2h
  const r2: number = r ** 2
  const h: number = this.cyl_height
  const pi: Math['PI'] = Math.PI
  return this.roundToPlaces(pi * r2 * h, 4)
}
let cyl = new Cylinder(7, 4)
console.log('volume =', cyl.Volume());

