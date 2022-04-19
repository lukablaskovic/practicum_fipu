/*
class TreeNode {
  constructor(value) {
    this.value = value;
    this.potomci = [];
  }
}
// create nodes with values
const croatia = new TreeNode("croatia");
const istria = new TreeNode("istria");
const pula = new TreeNode("pula");
const veruda = new TreeNode("veruda");
const rovinj = new TreeNode("rovinj");

croatia.potomci.push(istria, pula, veruda, rovinj);
istria.potomci.push(pula, veruda, rovinj);
pula.potomci.push(veruda);

console.log(croatia.potomci);
*/
const mjesta = [
  {
    id: 1,
    name: "Croatia",
    podmjesta: [
      {
        id: 2,
        name: "Istria",
        podmjesta: [
          {
            id: 3,
            name: "Pula",
            podmjesta: [
              {
                id: 4,
                name: "Veruda",
                podmjesta: [],
              },
            ],
          },
          {
            id: 5,
            name: "Rovinj",
            podmjesta: [],
          },
        ],
      },
      {
        id: 6,
        name: "Dalmacija",
        podmjesta: [],
      },
    ],
  },
];
console.log(mjesta);
function getAllPlacesUnder(mjesto) {
  let m = mjesta.filter((place) => place.name == mjesto);
  console.log(m);
}

module.exports = getAllPlacesUnder;
