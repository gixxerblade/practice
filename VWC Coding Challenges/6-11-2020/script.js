const green = d3.select(".green");
const blue = d3.select(".blue");
const yellow = d3.select(".yellow");
const red = d3.select(".red");

const animate = (color) => {
  var totalLength = color.node().getTotalLength();

  color
    .attr("stroke-dasharray", totalLength + " " + totalLength)
    .attr("stroke-dashoffset", totalLength)
    .transition()
    .duration(2000)
    .ease("linear")
    .attr("stroke-dashoffset", 0);
};
animate(green);
animate(blue);
animate(yellow);
animate(red);
