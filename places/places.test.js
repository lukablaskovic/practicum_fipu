const getAllPlacesUnder = require("./places");
let croatia = {
  id: 1,
  name: "Croatia",
  parentId: 0, //o je root elelement
};

let istria = {
  id: 2,
  name: "Istria",
  parentId: 1, //o je root elelement
};

let pula = {
  id: 3,
  name: "Pula",
  parentId: 2, //o je root elelement
};

let veruda = {
  id: 4,
  name: "Veruda",
  parentId: 3, //o je root elelement
};

let rovinj = {
  id: 4,
  name: "Rovinj",
  parentId: 2, //o je root elelement
};

let dalmacija = {
  id: 5,
  name: "Dalmacija",
  parentId: 1, //o je root elelement
};

let Places = [croatia, istria, pula, rovinj, dalmacija, veruda];
describe("Places", () => {
  test("Ako je place ID = 2 vrati objekt istria", () => {
    expect(getAllPlacesUnder(2)).toBe(Places[1]);
  });
});
