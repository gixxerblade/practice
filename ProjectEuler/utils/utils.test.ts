import { expect, describe, it } from 'bun:test';
import { getFactors } from './utils';
describe('getFactors', () => {
  it('should return the factors for 28', () => {
    expect(getFactors(28)).toEqual([1, 2, 4, 7, 14, 28]);
  });
});
