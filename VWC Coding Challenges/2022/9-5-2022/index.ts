/**
 * Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
 * Input
 * function Cylinder(cyl_height, cyl_diameter) {
 *   this.cyl_height = cyl_height;
 *   this.cyl_diameter = cyl_diameter;
 * }
 * Cylinder.prototype.Volume = // your code here
 * var cyl = new Cylinder(7, 4);
 * console.log('volume =', cyl.Volume());
 * Output
 * volume = 87.9646
 * 
 */

// Simple class
class CylinderClass {
  cyl_height: number
  cyl_diameter: number
  constructor(cyl_height: number, cyl_diameter: number) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
  }
  precision = (num: number, places: number): number => {
    const factor = Math.pow(10, places)
    return Math.round(num * factor) / factor
  }
  volume = () => {
    const volume = Math.PI * Math.pow(this.cyl_diameter / 2, 2) * this.cyl_height
    return this.precision(volume, 4)
  }
}

const cylinder = new CylinderClass(7, 4)
console.log('volume using classes =', cylinder.volume())

interface Cylinder {
  cyl_height: number
  cyl_diameter: number
}
// Object prototype inheritance
function Cylinder(this: Cylinder, cyl_height: number, cyl_diameter: number) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.precision = function (num: number, places: number) {
  const factor = Math.pow(10, places)
  return Math.round(num * factor) / factor
}

const cyl = new (Cylinder as any)(7, 4);

Cylinder.prototype.Volume = function () {
  const volume = Math.PI * Math.pow(this.cyl_diameter / 2, 2) * this.cyl_height
  return cyl.precision(volume, 4)
}

console.log('volume using prototype inheritance =', cyl.Volume());