/* 
Dev.toFacebookChallenge_12-11-19
Write a function that takes a DOM element and smoothly animates 
it from its current position to distance pixels to the right over 
duration milliseconds. Implement the following function, animate(el, milliseconds, distance)


*/
let animate = (el, milliseconds, distance) => {
  let element = document.getElementById(el);
  element.setAttribute(
    "style",
    `transform:translateX(${distance}px); transition-duration: ${milliseconds}ms;`
  );
};
animate("para", 2000, 500);
