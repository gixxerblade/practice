/* 
Class practice
Create a Circle constructor that creates a circle with a radius provided by an argument. 
The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) 
which give both respective areas and perimeter (circumference).
 */
class Circle {
    constructor(radius){
  this.pi = Math.PI;
  this.radius = radius;};
  getArea() {
    console.log(this.pi * this.radius * this.radius);
  };
  getPerimeter() {
    console.log(2 * this.pi * this.radius);
  };
}
let circy = new Circle(11);
circy.getArea();
circy.getPerimeter();
circy = new Circle(4.44);
circy.getArea();
circy.getPerimeter();
