let man = document.getElementById("man");
let dumptruck = document.getElementById("dumptruck");
let manMessage = document.getElementById("man-message");
let truckMessage = document.getElementById("dumptruck-message");
let positionArr = [];
let manObj = {};
let truckObj = {};
let collision = document.getElementsByClassName("collision");

//using getBoundingClientRect to get the current position of the div's
const manPosition = () => {
  //rect is the guy
  let rect = man.getBoundingClientRect();
  //Only start counting when there is a positive number
  if (rect.x && rect.x + rect.width > 0) {
    let topLeft = [rect.left.toFixed(2), rect.top.toFixed(2)];
    let topRight = [(rect.left + rect.right).toFixed(2), rect.top.toFixed(2)];
    let bottomLeft = [
      rect.left.toFixed(2),
      (rect.top - man.clientHeight).toFixed(2),
    ];
    let bottomRight = [
      rect.right.toFixed(2),
      (rect.top - man.clientHeight).toFixed(2),
    ];
    positionArr = [topLeft, topRight, bottomLeft, bottomRight];
    manObj = {
      topLeft: topLeft,
      topRight: topRight,
      bottomLeft: bottomLeft,
      bottomRight: bottomRight,
    };
    manMessage.innerHTML = `[[${topLeft}], [${topRight}], [${bottomLeft}], [${bottomRight}]]`;
  }
  //Recursive function to endlessly loop the requestAnimationFrame
  window.requestAnimationFrame(manPosition);
};
const truckPosition = () => {
  //rect is the guy
  let rect = dumptruck.getBoundingClientRect();
  //Only start counting when there is a positive number
  if (rect.x && rect.x + rect.width > 0) {
    let topLeft = [rect.left.toFixed(2), rect.top.toFixed(2)];
    let topRight = [(rect.left + rect.right).toFixed(2), rect.top.toFixed(2)];
    let bottomLeft = [
      rect.left.toFixed(2),
      (rect.top - dumptruck.clientHeight).toFixed(2),
    ];
    let bottomRight = [
      rect.right.toFixed(2),
      (rect.top - dumptruck.clientHeight).toFixed(2),
    ];
    positionArr = [topLeft, topRight, bottomLeft, bottomRight];
    truckObj = {
      topLeft: topLeft,
      topRight: topRight,
      bottomLeft: bottomLeft,
      bottomRight: bottomRight,
    };
    truckMessage.innerHTML = `[[${topLeft}], [${topRight}], [${bottomLeft}], [${bottomRight}]]`;
  }
  //Recursive function to endlessly loop the requestAnimationFrame
  window.requestAnimationFrame(truckPosition);
};

window.requestAnimationFrame(manPosition);
window.requestAnimationFrame(truckPosition);
