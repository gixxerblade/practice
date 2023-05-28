const stepsTaken = (inputs) => {
  const res = inputs.split(',').map(Number)
  const [forwards, backwards, startingBlock, goal] = res;
  let steps = startingBlock;
  const repeated = Math.ceil((goal - startingBlock) / (forwards - backwards))
  while (steps < goal) {
    steps += forwards
    steps -= backwards
  }
  let totalSteps = (forwards + backwards) * repeated;
  return `${repeated},${totalSteps}`
}
console.log(stepsTaken(process.argv[2]));
