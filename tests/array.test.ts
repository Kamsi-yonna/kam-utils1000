import { chunk } from "../src/array";

describe("chunk function ", () => {
  it("should chunk an array into smaller arrays of a specified size", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const size = 3;
    const expected = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(chunk(arr, size)).toEqual(expected);
  });
});

it("should handle an array with less elements than the specified size", () => {
  const arr = [1, 2, 3];
  const size = 4;
  const expected = [[1, 2, 3]];
  expect(chunk(arr, size)).toEqual(expected);
});

it("should handle an empty array", () => {
  const arr: any[] = [];
  const size = 2;
  const expected: any[] = [];
  expect(chunk(arr, size)).toEqual(expected);
});
