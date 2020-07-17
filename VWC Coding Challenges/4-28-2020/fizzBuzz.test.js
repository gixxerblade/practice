const fizzBuzz = require("./fizzBuzz");

test("Return 7 for the number 7", () => expect(fizzBuzz(7)).toBe(7));
test("Return 'Buzz' for the number 10", () =>
  expect(fizzBuzz(10)).toBe("Buzz"));
test("Return 'FizzBuzz' for the number 15", () =>
  expect(fizzBuzz(15)).toBe("FizzBuzz"));
test("Return 'Fizz' for the number 48", () =>
  expect(fizzBuzz(48)).toBe("Fizz"));
test("Return 62 for the number 62", () => expect(fizzBuzz(62)).toBe(62));
test("Return 'Fizz' for the number 48", () =>
  expect(fizzBuzz(48)).toBe("Fizz"));
test("Return 'FizzBuzz' for the number 60", () =>
  expect(fizzBuzz(60)).toBe("FizzBuzz"));
test("Return 'Buzz' for the number 85", () =>
  expect(fizzBuzz(85)).toBe("Buzz"));
test("Return 98 for the number 98", () => expect(fizzBuzz(98)).toBe(98));
