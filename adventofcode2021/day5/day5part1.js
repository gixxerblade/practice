const fs = require("fs");

const vents = fs.readFileSync('./input.txt', { encoding: 'utf-8' })
  .split('\n')
  .filter(Boolean)
  .map((coords) => {
    const [from, to] = coords.split(' -> ')
      .map((point) => {
        const [x, y] = point.split(',').map(Number)
        return { x, y }
      })
    return { from, to }
  })



const part1 = (vents) => {
  // only horizontal and vertical lines: lines where either x1 = x2 or y1 = y2.
  const filteredSegments = vents.filter(
    (line) => line.from.x === line.to.x || line.from.y === line.to.y
  );
  let count = 0;
  const memory = new Map();
  const addPoint = (key) => {
    let intersected = memory.get(key);
    if (!intersected) {
      intersected = 0;
    }
    intersected++;
    if (intersected > 1) {
      count++;
    }
    memory.set(key, intersected);
  }
  filteredSegments.forEach((line) => {
    // go from start to end
    const isHorizontal = line.from.y === line.to.y;
    let startingPoint = { ...line.from };
    // for each point in the segment, add it to memory
    while (startingPoint.x !== line.to.x || startingPoint.y !== line.to.y) {
      addPoint([startingPoint.x, startingPoint.y].join(`,`));
      if (isHorizontal) {
        startingPoint.x += startingPoint.x < line.to.x ? 1 : -1;
      } else {
        startingPoint.y += startingPoint.y < line.to.y ? 1 : -1;
      }
    }
    addPoint([startingPoint.x, startingPoint.y].join(`,`));
  })
  return count
}

const part2 = (vents) => {
  let count = 0;
  const memory = new Map();
  const addPoint = (key) => {
    let intersected = memory.get(key);
    if (!intersected) {
      intersected = 0;
    }
    intersected++;
    if (intersected > 1) {
      count++;
    }
    memory.set(key, intersected);
  }
  vents.forEach((line) => {
    const isHorizontal = line.from.y === line.to.y;
    const isVertical = line.from.x === line.to.x
    let startingPoint = { ...line.from };
    while (startingPoint.x !== line.to.x || startingPoint.y !== line.to.y) {
      addPoint([startingPoint.x, startingPoint.y].join(`,`));
      if (isHorizontal) {
        startingPoint.x += startingPoint.x < line.to.x ? 1 : -1;
      } else if (isVertical) {
        startingPoint.y += startingPoint.y < line.to.y ? 1 : -1;
      } else {
        startingPoint.x += startingPoint.x < line.to.x ? 1 : -1;
        startingPoint.y += startingPoint.y < line.to.y ? 1 : -1;
      }
    }
    addPoint([startingPoint.x, startingPoint.y].join(`,`));
  })
  return count

}
console.log(part1(vents))
console.log(part2(vents))