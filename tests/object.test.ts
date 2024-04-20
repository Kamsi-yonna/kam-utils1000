import { keys, values, mergeObj } from "../src/object"; // Import the object functions

describe("Object Manipulation Functions", () => {
  // Test for keys function
  test("should return an array of keys in an object", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const expected = ["a", "b", "c"];
    expect(keys(obj)).toEqual(expected);
  });

  test("should handle empty objects", () => {
    const obj = {};
    const expected: any[] = [];
    expect(keys(obj)).toEqual(expected);
  });

  // Test for values function
  test("should return an array of values in an object", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const expected = [1, 2, 3];
    expect(values(obj)).toEqual(expected);
  });

  test("should handle empty objects", () => {
    const obj = {};
    const expected: any[] = [];
    expect(values(obj)).toEqual(expected);
  });

  // Test for mergeObj function
  test("should merge two objects into a new object", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3, d: 4 };
    const expected = { a: 1, b: 2, c: 3, d: 4 };
    expect(mergeObj(obj1, obj2)).toEqual(expected);
  });

  test("should handle duplicate keys", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const expected = { a: 1, b: 3, c: 4 };
    expect(mergeObj(obj1, obj2)).toEqual(expected);
  });

  test("should handle empty objects", () => {
    const obj1 = {};
    const obj2 = { a: 1, b: 2 };
    const expected = { a: 1, b: 2 };
    expect(mergeObj(obj1, obj2)).toEqual(expected);
  });
});
