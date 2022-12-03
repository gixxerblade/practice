let result = new Array(100);
result = result.fill(0).map(() => Math.floor(Math.random() * 100));

const output = [];

for (let i = 0; i < result.length; i += 2) {
  output.push({
    x: result[i],
    y: i === 0 ? result[2 * 0.5] : result[i * 0.5],
  });
}
console.log(output);

const data = {
  datasets: [
    {
      label: 'Scatter Dataset',
      data: output,
    },
  ],
};

