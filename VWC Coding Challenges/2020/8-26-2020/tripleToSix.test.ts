import {tripleToSix} from './tripleToSix';
import { expect, test, describe } from "bun:test";

describe("Success", () => {
  test("Inputting #fff equals #ffffff", () => {
    expect(tripleToSix("#fff")).toEqual("#ffffff");
  });
  test("Inputting #123 equals #112233", () => {
    expect(tripleToSix("#123")).toEqual("#112233");
  });
  test("Inputting #400 equals #440000", () => {
    expect(tripleToSix("#400")).toEqual("#440000");
  });
});
describe("Errors", () => {
  test("Inputting fff equals error", () => {
    expect(() => tripleToSix("fff")).toThrow();
  });
  test("Inputting fff equals error", () => {
    expect(() => tripleToSix("#ff1000")).toThrow();
  });
});
