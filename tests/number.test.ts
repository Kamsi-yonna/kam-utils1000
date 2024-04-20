import { roundNum, clampNum, percentageNum, absoluteNum } from "../src/number"; // Import the number functions

describe("Number Manipulation Functions", () => {
  //Test for rounding up numbers
  test("should round a number to a specified number of decimal places", () => {
    const input = 3.14159;
    const decimals = 2;
    const expected = 3.14;
    expect(roundNum(input, decimals)).toBe(expected);
  });

  test("Should round up negative numbers", () => {
    const input = -3.14591;
    const decimals = 2;
    const expected = -3.15;
    expect(roundNum(input, decimals)).toBe(expected);
  });

  // clamped numbers
  test("should clamp a number between a minimum and maximum value", () => {
    const input = 5;
    const min = 2;
    const max = 8;
    const expected = 5;
    expect(clampNum(input, min, max)).toBe(expected);
  });

  test("should handle negative numbers", () => {
    const input = -3;
    const min = -5;
    const max = -1;
    const expected = -3;
    expect(clampNum(input, min, max)).toBe(expected);
  });

  test("should handle minimum value", () => {
    const input = 10;
    const min = 20;
    const max = 30;
    const expected = 20;
    expect(clampNum(input, min, max)).toBe(expected);
  });

  test("should handle maximum value", () => {
    const input = 5;
    const min = 2;
    const max = 5;
    const expected = 5;
    expect(clampNum(input, min, max)).toBe(expected);
  });

  // Test for percentageNum function
  test("should calculate the percentage of a number", () => {
    const num = 10;
    const total = 50;
    const expected = 20;
    expect(percentageNum(num, total)).toBe(expected);
  });

  test("should handle negative numbers", () => {
    const num = -5;
    const total = 10;
    const expected = -50;
    expect(percentageNum(num, total)).toBe(expected);
  });

  // Test for absoluteNum function
  test("should calculate the absolute value of a number", () => {
    const input = -5;
    const expected = 5;
    expect(absoluteNum(input)).toBe(expected);
  });

  test("should handle positive numbers", () => {
    const input = 7;
    const expected = 7;
    expect(absoluteNum(input)).toBe(expected);
  });
});
