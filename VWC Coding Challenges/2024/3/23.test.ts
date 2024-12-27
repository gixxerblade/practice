import { expect, test, describe } from "bun:test";
import { _ } from './23'

describe("takeRight", () => {
  test("should return the last two numbers if numToTake is 2", () => {
    expect(_.takeRight([1,2,3], 2)).toEqual([2,3]);
  });
  
  test("should return an empty array if the number is less than or equal to 0", () => {
    expect(_.takeRight([1,2,3], 0)).toEqual([]);
  });
  
  test("should return last number if no argument is passed", () => {
    expect(_.takeRight([1, 2, 3])).toEqual([3])
  });
  test("should return the last number if 1 is passed", () => {
    expect(_.takeRight([1, 2, 3], 1)).toEqual([3])
  });
  test("should return the array if the number passed is greater than the length of the array", () => {
    const array = [1, 2, 3];
    const numToTake = 5
    expect(_.takeRight(array, numToTake)).toEqual(array);
    expect(numToTake).toBeGreaterThan(array.length);
  });
  test("should return the array if the number passed is same length of the array", () => {
    const array = [1, 2, 3];
    const numToTake = 3
    expect(_.takeRight(array, numToTake)).toEqual(array);
    expect(numToTake).toEqual(array.length);
  });
});
