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
  id: 5,
  name: "Rovinj",
  parentId: 2, //o je root elelement
};

let dalmacija = {
  id: 6,
  name: "Dalmacija",
  parentId: 1, //o je root elelement
};

let Places = [croatia, istria, pula, rovinj, dalmacija, veruda];
describe("Places", () => {
  test("Ako je place = pula vrati veruda", () => {
    expect(getAllPlacesUnder(3)).toStrictEqual([veruda]);
  });

  test("Ako je place = istria vrati [pula,rovinj,veruda]", () => {
    expect(getAllPlacesUnder(2)).toStrictEqual([pula, rovinj, veruda]);
  });

  test("Ako je place = veruda vrati []", () => {
    expect(getAllPlacesUnder(4)).toStrictEqual([]);
  });
  test("Ako je place = rovinj vrati []", () => {
    expect(getAllPlacesUnder(5)).toStrictEqual([]);
  });
  test("Ako je place = dalmacija vrati []", () => {
    expect(getAllPlacesUnder(6)).toStrictEqual([]);
  });
  test("Ako je place = croatia vrati [istria,pula,rovinj,dalmacija,veruda]", () => {
    expect(getAllPlacesUnder(1)).toStrictEqual([
      istria,
      dalmacija,
      pula,
      rovinj,
      veruda,
    ]);
  });
});
