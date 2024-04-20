import {
  capitalize,
  lowerCase,
  upperCase,
  trim,
  replaceAll,
  removeUnderscores,
  formatUrl,
} from "../src/index";

describe("String Manipulation Functions", () => {
  test("capitalize function", () => {
    expect(capitalize("hey")).toBe("Hey");
  });

  test("lowerCase function", () => {
    expect(lowerCase("Hey")).toBe("hey");
  });

  test("upperCase function", () => {
    expect(upperCase("hey")).toBe("HEY");
  });

  test("trim function", () => {
    expect(trim("  hey  ")).toBe("hey");
  });

  test("replaceAll function", () => {
    expect(replaceAll("hey there", "h", "8")).toBe("8ey t8ere");
  });

  test("should remove underscores from a string", () => {
    const input = "hey_there";
    const expected = "hey there";
    expect(removeUnderscores(input)).toBe(expected);
  });

  test("should remove multiple undescores in a string", () => {
    const input = "Hey__there";
    const expected = "Hey  there";
    expect(removeUnderscores(input)).toBe(expected);
  });

  // test for url formatter
  test("Should decode a URL with special characters", () => {
    const input = "http%3A%2F%2Fexample.com";
    const expected = "http://example.com";
    expect(formatUrl(input)).toBe(expected);
  });
});
