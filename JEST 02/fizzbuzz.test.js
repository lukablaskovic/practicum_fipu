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
  test("Ako je broj = 7 ispisi suzz", () => {
    expect(fizzbuzz(7)).toBe("suzz");
  })
  test("Ako je broj djeljiv s 7 ispisi suzz", () => {
    expect(fizzbuzz(14)).toBe("suzz");
  })
  test("Ako je broj djeljiv s 7 i s 3 ispisi fizzsuzz", () => {
    expect(fizzbuzz(21)).toBe("fizzsuzz");
  })
  test("Ako je broj djeljiv s 7 i s 5 ispisi buzzsuzz", () => {
    expect(fizzbuzz(35)).toBe("buzzsuzz");
  })
  test("Ako je broj djeljiv s 3 i s 5 i s 7 ispisi fizzbuzzsuzz", () => {
    expect(fizzbuzz(105)).toBe("fizzbuzzsuzz");
  })
})
