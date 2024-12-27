import { expect, test, describe } from "bun:test";
import { _ } from './19';
describe("zip and unzip", () => {
  describe("zip", () => {
    test("zip with equal length arrays", () => {
      const result = _.zip(['a', 'b'], [1, 2], [true, false]);
      expect(result).toEqual([['a', 1, true], ['b', 2, false]]);
    });
    test("zip with varying length arrays", () => {
      const result = _.zip(['a', 'b', 'c'], [1, 2], [true, false]);
      expect(result).toEqual([['a', 1, true], ['b', 2, false], ['c']]);
    });
  });
  describe("unzip", () => {
    test("unzip into original arrays", () => {
      const zipped = [['a', 1, true], ['b', 2, false]];
      const result = _.unzip(zipped);
      expect(result).toEqual([['a', 'b'], [1, 2], [true, false]]);
    });
    test("unzip with varying length arrays", () => {
      const zipped = [['a', 1, true], ['b', 2], ['c']];
      const result = _.unzip(zipped);
      expect(result).toEqual([['a', 'b', 'c'], [1, 2], [true]]);
    });
  });
});
