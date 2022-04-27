const { findSuggestions } = require("./searchEngine2");
let phrase =
  "I have been, good. My best friend and I have fisherman and have fish.";

describe("searchEngine", () => {
  /*let index = undefined;
  beforeAll(() => {
    index = indexText(phrase);
  });
  */
  test("Za 'I' vrati sugestiju: 'have'", () => {
    expect(findSuggestions("I")).toStrictEqual(["have"]);
  });
  test("Za 'My' vrati sugestiju: 'best'", () => {
    expect(findSuggestions("My")).toStrictEqual(["best"]);
  });
  test("Za 'and' vrati sugestiju: 'I', 'have'", () => {
    expect(findSuggestions("and")).toStrictEqual(["I", "have"]);
  });
});
