const fizz = (lower: number, upper: number): unknown => {
  const values = [
    ,
    ,
    'fizz',
    ,
    'buzz',
    'fizz',
    ,
    ,
    'fizz',
    'buzz',
    ,
    'fizz',
    ,
    ,
    'fizzbuzz',
  ];
  for (let i = lower; i < upper; i++) {
    console.log(values[i++ % 15] || i);
  }
};

fizz(1, 100);
