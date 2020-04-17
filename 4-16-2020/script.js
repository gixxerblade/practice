// Track where we are on the fuse
var counter = 0;

// true === left
var direction = true;

// references to the fuse path
let blank = document.getElementById("blank");
let ns = "http://www.w3.org/2000/svg";
let svg = blank.getElementsByTagNameNS(ns, "path");
let fusePath = svg[0];

// Length of the fuse.
let length = svg[0].getTotalLength();

// Reference to the fuse flames. Three different SVGs.
let yellowFlame = document.getElementById("yellow-fuse-flame");
let orangeFlame = document.getElementById("orange-fuse-flame");
let redFlame = document.getElementById("red-fuse-flame");
/* console.log(length); */

// Magic ***
const burn = () => {
  if (parseInt(counter, 10) === 1) {
    explode();
    setTimeout(() => restart(), 1000);
  }

  direction === true ? (counter += 0.003) : null;
  percentage(counter);
  // countPoints(fusePath, length, counter)
  traverseFuse(yellowFlame, fusePath);
  traverseFuse(orangeFlame, fusePath);
  traverseFuse(redFlame, fusePath);
  requestAnimationFrame(burn);
};

//remove class active which has display: none;
const explode = () => {
  const activeExplosion = document.getElementById("explosion");
  if ((counter = 1)) {
    activeExplosion.classList.remove("active");
  }
};

//remove the explosion and restart the progress bar...
const restart = () => {
  const activeExplosion = document.getElementById("explosion");
  activeExplosion.classList.add("active");
  counter = 0;
};

// Function to go along the fuse path.
const traverseFuse = (item, path) => {
  item.setAttribute(
    `style`,
    `transform:translate(${path.getPointAtLength(counter * length).x + 10}px, ${
      path.getPointAtLength(counter * length).y - 110
    }px)`
  );
  path.setAttribute('style', `clip-path: ${}`)
};
//function to display percentage
const percentage = (cnt) => {
  let percentDone = document.getElementById("number");
  let count = Math.round(cnt * 100);
  percentDone.innerHTML = "<span>" + count + "%</span>";
};

requestAnimationFrame(burn);
