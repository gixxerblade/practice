let para = document.getElementById("para");
let random = max => {
  return Math.floor(Math.random() * Math.floor(max));
};
let pic = document.getElementById("pic");
let imgEl = document.getElementById("imgEl");
let imgElHeight = imgEl.offsetHeight;
paraHeight = para.offsetHeight;
let scroll = document.getElementById("scroll");

window.addEventListener("scroll", () => {
  scroll.innerHTML = `You have scrolled ${window.pageYOffset} pixels`;
  para.setAttribute(
    "style",
    `color:rgba(${random(255)},${random(255)},${random(255)},${Math.random()})`
  );
});
window.addEventListener("scroll", () => {
  if (window.paraHeight) {
    imgEl.innerHTML = `<img id="pic" src="https://www.placecage.com/gif/600/800" />`;
  }
});
window.addEventListener("scroll", () => {
  if (window.paraHeight + 1000) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<p id="time">Date: ${new Date()}</p>`
    );
  }
});
