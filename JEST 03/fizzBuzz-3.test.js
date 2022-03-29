const division = require('./fizzBuzz-3');

describe.skip('fizzBuzz divides numbers 1-100 with 3 and 5 and writes Fizz and Buzz for some', () => {
  test("ako je x=3 vrati fizz", () => {
    expect(division(3)).toBe("Fizz");
  });
  test("ako je x=5 vrati buzz", () => {
    expect(division(5)).toBe("Buzz");
  });
  test("ako je x=15 vrati fizzbuzz", () => {
    expect(division(15)).toBe("FizzBuzz");
  });
  test("ako je x=4 vrati ''", () => {
    expect(division(4)).toBe("");
  });
  test("ako je x=10 vrati buzz", () => {
    expect(division(10)).toBe("Buzz");
  });
  test("ako je x=72 vrati fizz", () => {
    expect(division(72)).toBe("Fizz");
  });
  test("Ako je x=45 vrati fizzbuzz", () => {
    expect(division(45)).toBe("FizzBuzz");
  });
  test("Ako je x=98 vrati ''", () => {
    expect(division(98)).toBe("");
  });
})

describe('fizzBuzz divides numbers 1-100 with 3, 5 and 7 and writes Fizz and Buzz for some', () => {
  test("ako je x=3 vrati fizz", () => {
    expect(division(3)).toBe("Fizz");
  });
  test("ako je x=5 vrati buzz", () => {
    expect(division(5)).toBe("Buzz");
  });
  test("ako je x=7 vrati suzz", () => {
    expect(division(7)).toBe("Suzz");
  });
  test("ako je x=15 vrati fizzbuzz", () => {
    expect(division(15)).toBe("FizzBuzz");
  });
  test("ako je x=21 vrati fizzsuzz", () => {
    expect(division(21)).toBe("FizzSuzz");
  });
  test("ako je x=35 vrati buzzsuzz", () => {
    expect(division(35)).toBe("BuzzSuzz");
  });
  test("ako je x=4 vrati ''", () => {
    expect(division(4)).toBe("");
  });
  test("ako je x=10 vrati buzz", () => {
    expect(division(10)).toBe("Buzz");
  });
  test("ako je x=72 vrati fizz", () => {
    expect(division(72)).toBe("Fizz");
  });
  test("Ako je x=45 vrati fizzbuzz", () => {
    expect(division(45)).toBe("FizzBuzz");
  });
  test("Ako je x=98 vrati suzz", () => {
    expect(division(98)).toBe("Suzz");
  });
  test("Ako je x=105 vrati ''", () => {
    expect(division(105)).toBe("FizzBuzzSuzz");
  });
})