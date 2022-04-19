const getAllPlacesUnder = require("./places2");

describe("Places", () => {
  test("Ako je place = pula, vrati: veruda", () => {
    expect(getAllPlacesUnder("pula")).toStrictEqual(["veruda"]);
  });
});
