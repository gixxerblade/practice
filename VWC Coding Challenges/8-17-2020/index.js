let csvToArrayObj = (csv) => {
  let row = [],
    header = [],
    res = [],
    nada = "\0";
  const fs = require("fs");
  const readLine = require("readline");
  const rl = readLine.createInterface({
    input: fs.createReadStream(csv),
    output: console,
  });
  rl.on("line", (line) => {
    row.push(line);
  }).on("close", () => {
    let values = row.map((el) => {
      return el.split(",");
    });
    header = values.shift();

    for (let i = 0; i < values.length; i++) {
      let obj = {};
      for (let j = 0; j < header.length; j++) {
        obj[header[j]] = values[i][j];
      }
      res.push(obj);
    }
    console.log(res);
  });
  return nada;
};

console.log(csvToArrayObj("./addresses.csv"));
