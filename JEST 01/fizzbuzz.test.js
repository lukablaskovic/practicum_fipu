const fizzbuzz = require("./fizzbuzz");

describe("FizzBuzz", () => {

  test("Ako je broj = 3 ispisi fizz", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  })
  test("Ako je broj = 5 ispisi buzz", () => {
    expect(fizzbuzz(5)).toBe("buzz");
  })
  test("Ako je broj = 15 ispisi fizzbuzz", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  })
  test("Ako je broj nije djeljiv s 3 ili 5 ispisi prazan string", () => {
    expect(fizzbuzz(4)).toBe("");
  })
  test("Ako je broj djeljiv s 3 ispisi fizz", () => {
    expect(fizzbuzz(6)).toBe("fizz");
  })
  test("Ako je broj djeljiv s 5 ispisi buzz", () => {
    expect(fizzbuzz(10)).toBe("buzz");
  })
  test("Ako je broj djeljiv s 3 i s 5 ispisi fizzbuzz", () => {
    expect(fizzbuzz(30)).toBe("fizzbuzz");
  })

})
