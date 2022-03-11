const delay = (ms) => {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
};

const test = async () => {
  for (let i = 0; i < 5; i++) {
    await delay(1000);
    console.log('hail hydra');
  }
};

test();
