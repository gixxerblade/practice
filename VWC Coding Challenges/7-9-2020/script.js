let jump = document.querySelector(".jump");
let button = document.getElementById("jumpbutn");
let count = document.querySelector(".count");
let jumpAction = () => {
  let { x, y } = jump.getBoundingClientRect();
  jump.classList.add("active");
  console.log(jump);
  setTimeout(() => {
    jump.classList.remove("active");
  }, 2100);
};
button.addEventListener("click", jumpAction);
