//  Jest Expect Functions

describe('Jest Expect Functions', () => {
  test('toBe', () => {
    const value = 5;
    expect(value).toBe(5);
  });

  test('toEqual', () => {
    const obj1 = {name: 'John', age: 30};
    const obj2 = {name: 'John', age: 30};
    expect(obj1).toEqual(obj2);
  });

  test('toBeTruthy', () => {
    const value = true;
    expect(value).toBeTruthy();
  });

  test('toBeFalsy', () => {
    const value = false;
    expect(value).toBeFalsy();
  });

  test('toBeNull', () => {
    const value = null;
    expect(value).toBeNull();
  });

  test('toBeDefined', () => {
    const value = 10;
    expect(value).toBeDefined();
  });

  test('toBeUndefined', () => {
    const value = undefined;
    expect(value).toBeUndefined();
  });

  test('toContain', () => {
    const list = ['apple', 'banana', 'orange'];
    expect(list).toContain('banana');
  });

  test('toHaveLength', () => {
    const text = 'Hello, world!';
    expect(text).toHaveLength(13);
  });

  test('toMatch', () => {
    const text = 'Hello, world!';
    expect(text).toMatch('world');
  });

  test('toThrow', () => {
    const throwError = () => {
      throw new Error('Oops!');
    };
    expect(throwError).toThrow('Oops!');
  });
});
