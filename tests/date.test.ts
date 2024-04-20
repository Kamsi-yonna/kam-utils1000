import { formatDate, daysBetween } from "../src/date";

describe("formatDate", () => {
  test("formats date with long format correctly", () => {
    const date = new Date("2024-04-20T12:00:00");
    expect(formatDate(date, "long")).toBe("Saturday, April 20, 2024");
  });

  test("formats date with short format correctly", () => {
    const date = new Date("2024-04-20T12:00:00");
    expect(formatDate(date, "short")).toBe("04/20/2024");
  });

  test("formats current time correctly", () => {
    expect(formatDate(new Date(), "currentTime")).toMatch(
      /\d{1,2}:\d{2}:\d{2} (AM|PM)/
    );
  });

  test("formats time from a specific moment correctly", () => {
    const date = new Date("2024-04-20T12:00:00");
    expect(formatDate(date, "time")).toMatch(/\d{1,2}:\d{2}:\d{2} (AM|PM)/);
  });

  test("formats date with full format correctly", () => {
    const date = new Date("2024-04-20T12:00:00");
    expect(formatDate(date, "full")).toBe(
      "Saturday, April 20, 2024 at 12:00 PM"
    );
  });
});

describe("daysBetween", () => {
  test("calculates days between two dates correctly", () => {
    const date1 = new Date("2024-04-18");
    const date2 = new Date("2024-04-20");
    expect(daysBetween(date1, date2)).toBe(2);
  });
});
