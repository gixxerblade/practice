/*
function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}
Cylinder.prototype.Volume = // your code here
var cyl = new Cylinder(7, 4);
console.log('volume =', cyl.Volume());
*/
function Cylinder(cyl_height, cyl_diameter) {
    this.cyl_height = cyl_height;
    this.cyl_diameter = cyl_diameter;
}
Cylinder.prototype.roundToPlaces = function (num, places) {
    if (places === void 0) { places = 2; }
    var control = Math.pow(10, places);
    return Math.round(num * control) / control;
};
Cylinder.prototype.Volume = function () {
    // radius = diameter / 2
    var r = this.cyl_diameter / 2;
    // Volume = πr2h
    var r2 = Math.pow(r, 2);
    var h = this.cyl_height;
    var pi = Math.PI;
    return this.roundToPlaces(pi * r2 * h, 4);
};
var cyl = new Cylinder(7, 4);
console.log('volume =', cyl.Volume());
