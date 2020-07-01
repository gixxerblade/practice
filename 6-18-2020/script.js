const leaf = new Image();
const init = () => {
  leaf.src = "./autumn.png";
  window.requestAnimationFrame(draw)
};
const w = window.innerWidth,
  h = window.innerHeight;
const draw = () => {
  let ctx = document.getElementById("canvas").getContext("2d");
  console.log(ctx);
  ctx.clearRect(0, 0, w, h); // clear canvas
  ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
  ctx.strokeStyle = "rgba(0, 153, 255, 0.4)";
  ctx.save();
  ctx.translate(150, 150);
};
