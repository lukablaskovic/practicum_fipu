const dayOfYear = require("./dayOfYear");
describe("dayOfYear", () => {
  test("Za 01.01.2011 vrati 1", () => {
    expect(dayOfYear(2012, 1, 1)).toBe(1);
  });
  test("Za 15.01.2012 vrati 15", () => {
    expect(dayOfYear(2012, 1, 15)).toBe(15);
  });
  test("Za 15.03.2012 vrati 75", () => {
    expect(dayOfYear(2012, 3, 15)).toBe(75);
  });
  test("Za 28.5.2012 vrati 149", () => {
    expect(dayOfYear(2012, 5, 28)).toBe(149);
  });
  test("Za 15.8.2012 vrati 228", () => {
    expect(dayOfYear(2012, 8, 15)).toBe(228);
  });
  test("Za 31.12.2012 vrati 366", () => {
    expect(dayOfYear(2012, 12, 31)).toBe(366);
  });
  test("Za 31.12.2011 vrati 365", () => {
    expect(dayOfYear(2011, 12, 31)).toBe(365);
  });
  test("Za 15.9.2012 vrati 259", () => {
    expect(dayOfYear(2012, 9, 15)).toBe(259);
  });
  test("Za 31.3.2024 vrati 90", () => {
    expect(dayOfYear(2022, 3, 31)).toBe(90);
  });
});
