describe('Jest Mock Functions', () => {
  test('basic mock function', () => {
    const mockFn = jest.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test('mock function with return value', () => {
    const mockFn = jest.fn(() => 'Hello, world!');
    const result = mockFn();
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(result).toBe('Hello, world!');
  });

  test('mock function with arguments', () => {
    const mockFn = jest.fn((a, b) => a + b);
    const result = mockFn(3, 4);
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith(3, 4);
    expect(result).toBe(7);
  });

  test('mock function implementation', () => {
    const mockFn = jest.fn().mockImplementation(() => 'Hello, world!');
    const result = mockFn();
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(result).toBe('Hello, world!');
  });

  test('mock function mockReturnValue', () => {
    const mockFn = jest.fn().mockReturnValue('Hello, world!');
    const result = mockFn();
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(result).toBe('Hello, world!');
  });

  test('mock function mockResolvedValue', async () => {
    const mockFn = jest.fn().mockResolvedValue('Hello, world!');
    const result = await mockFn();
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(result).toBe('Hello, world!');
  });

  test('mock function mockRejectedValue', async () => {
    const mockFn = jest.fn().mockRejectedValue(new Error('Oops!'));
    await expect(mockFn()).rejects.toThrow('Oops!');
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
