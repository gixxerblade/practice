let body = document.querySelector("body");
let title = document.getElementById("title");
let changeColor = () => {
  let r1, g1, b1, r2, g2, b2;
  let random = rgb => Math.floor(Math.random() * 255);
title.style.color = `rgb(${random(r1)}, ${random(
    g1
  )}, ${random(b1)})`
  body.setAttribute(
    "style",
    `background-image: linear-gradient(rgb(${random(r1)}, ${random(
      g1
    )}, ${random(b1)}), rgb(${random(r2)}, ${random(g2)}, ${random(b2)})`
  );
};

body.addEventListener("click", changeColor);
