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

let places = [croatia, istria, pula, rovinj, dalmacija, veruda];

function getAllPlacesUnder(placeId) {
  let result = places.filter((place) => {
    return place.parentId == placeId;
  });
  result.forEach((element) => {
    result = result.concat(getAllPlacesUnder(element.id));
  });
  return result;
}
/*
function getAllPlacesUnder(placeId) {
  return childObjekti[placeId];
}

let childObjekti = {
  1: places.slice(1),
  2: [pula, rovinj, veruda],
  3: veruda,
  4: "",
  5: "",
  6: "",
};
*/
module.exports = getAllPlacesUnder;
/*
    if(place id==2) treba vratiti [
        {
            id: 3,
            name: "Pula",
            parentId: 2 //o je root elelement
        },
        let rovinj = {
            id: 4,
            name: "Rovinj",
            parentId: 2 //o je root elelement
        },
        {
            id: 4,
            name: "Veruda",
            parentId: 3 //o je root elelement
        }
    ]
    */
