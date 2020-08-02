class Polygon {
    constructor(length){
        this.length = length
    }
    perimeter (){
        return this.length.reduce((a,b)=>{return a+b})
    }
}
let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter());
