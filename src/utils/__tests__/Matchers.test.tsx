//  Jest Matchers

describe('Jest Matchers', () => {
  test('numeric matchers', () => {
    const value = 10;
    expect(value).toBeGreaterThan(5);
    expect(value).toBeGreaterThanOrEqual(10);
    expect(value).toBeLessThan(20);
    expect(value).toBeLessThanOrEqual(10);
  });

  test('string matchers', () => {
    const text = 'Hello, world!';
    expect(text).toMatch('world');
    expect(text).not.toMatch(/foo/);
    expect(text).toContain('Hello');
  });

  test('array matchers', () => {
    const list = ['apple', 'banana', 'orange'];
    expect(list).toHaveLength(3);
    expect(list).toContain('banana');
    expect(list).toEqual(expect.arrayContaining(['banana', 'orange']));
    expect(list).not.toEqual(expect.arrayContaining(['kiwi']));
  });

  test('object matchers', () => {
    const obj = {name: 'John', age: 30};
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('age', 30);
    expect(obj).toEqual(expect.objectContaining({age: 30}));
  });

  test('exception matchers', () => {
    const throwError = () => {
      throw new Error('Oops!');
    };
    expect(throwError).toThrow();
    expect(throwError).toThrow('Oops!');
    expect(throwError).toThrowError(Error);
    expect(throwError).toThrowError(/Oops/);
  });

  test('mock function matchers', () => {
    const mockFn = jest.fn();
    mockFn('foo');
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('foo');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
