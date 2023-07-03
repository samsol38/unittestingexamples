export const calculateSum = (a: number, b: number): number => {
  let sum = a + b;
  if (sum > 10) {
    return multiplyByTwo(sum);
  } else {
    return sum;
  }
};
const multiplyByTwo = (num: number): number => {
  return num * 2;
};
