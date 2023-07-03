import {calculateSum} from '../example';

describe('calculateSum', () => {
  test('returns correct sum for small numbers', () => {
    const result = calculateSum(2, 3);
    expect(result).toBe(5);
  });

  test('returns multiplied sum for large numbers', () => {
    const result = calculateSum(7, 5);
    expect(result).toBe(24);
  });
});
