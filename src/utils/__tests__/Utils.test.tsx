import {capitalizeString, sum} from '../';

describe('sum', () => {
  test('returns the correct sum of two numbers', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-10, 5)).toBe(-5);
    expect(sum(0, 0)).toBe(0);
  });
});

describe('capitalizeString', () => {
  test('capitalizes the first letter of a string', () => {
    const input = 'hello';
    const expectedOutput = 'Hello';
    const result = capitalizeString(input);
    expect(result).toBe(expectedOutput);
  });

  test('does not change an already capitalized string', () => {
    const input = 'Hello';
    const result = capitalizeString(input);
    expect(result).toBe(input);
  });

  test('returns an empty string if the input is empty', () => {
    const input = '';
    const result = capitalizeString(input);
    expect(result).toBe(input);
  });
});
