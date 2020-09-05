// Make a counter with a private value

let counter = () => {
  let count = 0;
  return {
    add: (increment) => {
      count += increment;
    },
    sub: (decrement) => {
      count -= decrement;
    },
    show: () => {
      return `The count is ${count}`;
    },
  };
};

let c = counter();
c.add(3);
c.sub(1);
console.log(c.show());
c.add(20);
c.sub(4);
console.log(c.show());
