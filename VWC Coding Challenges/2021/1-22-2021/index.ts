// Write a JavaScript program to get the volume of a Cylinder
// with four decimal places using object classes.

function Cylinder(this: any, cyl_height: number, cyl_diameter: number): void {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function (): number {
  return Number(
    Math.round(
      Number(
        Math.PI * Math.pow(this.cyl_diameter / 2, 2) + this.cyl_height + "e4"
      )
    ) + "e-4"
  );
};

var cyl = new (Cylinder as any)(7, 4);
console.log("volume =", cyl.Volume());
