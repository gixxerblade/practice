const recCycles = () => {
  let long = '';
  let currI = 1;
  for (let i = 1; i <= 1000; i++) {
    if (`${long}`.length === 1000) {
      currI = i
      break;
    }
    const curr = 1 / i;
    if (`${curr}`.length > long.length) {
      long = `${curr}`;
    }
    console.log({long, i, curr})
  }
  console.log('answer is', currI);
}

recCycles()