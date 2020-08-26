const tripleToSix = require("./tripleToSix");
const { describe } = require("yargs");

describe("Success", () => {
  test("Inputting #fff equals #ffffff", () => {
    expect(tripleToSix("#fff").toBe("#ffffff"));
  });
  test("Inputting #123 equals #112233", () => {
    expect(tripleToSix("#123").toBe("#112233"));
  });
  test("Inputting #400 equals #440000", () => {
    expect(tripleToSix("#400").toBe("#440000"));
  });
});
describe("Errors", () => {
  test("Inputting fff equals error", () => {
    expect(tripleToSix("fff").toThrow());
  });
  test("Inputting fff equals error", () => {
    expect(tripleToSix("#ff1000").toThrow());
  });
});
