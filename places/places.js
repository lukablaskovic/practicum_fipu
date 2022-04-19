let croatia = {
  id: 1,
  name: "Croatia",
  parentId: 0,
};

let istria = {
  id: 2,
  name: "Istria",
  parentId: 1,
};

let pula = {
  id: 3,
  name: "Pula",
  parentId: 2,
};

let veruda = {
  id: 4,
  name: "Veruda",
  parentId: 3,
};

let rovinj = {
  id: 5,
  name: "Rovinj",
  parentId: 2,
};

let dalmacija = {
  id: 6,
  name: "Dalmacija",
  parentId: 1, //o je root elelement
};

let places = [croatia, istria, pula, rovinj, dalmacija, veruda];
//Rjesenje 2
function getAllPlacesUnder(placeId) {
  let result = places.filter((place) => {
    return place.parentId == placeId;
  });
  result.forEach((element) => {
    result = result.concat(getAllPlacesUnder(element.id));
  });
  return result;
}
//Rjesenje 1
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
//Rjesenje 1
/*
    if(place id==2) treba vratiti [
        {
            id: 3,
            name: "Pula",
            parentId: 2
        },
        let rovinj = {
            id: 4,
            name: "Rovinj",
            parentId: 2
        },
        {
            id: 4,
            name: "Veruda",
            parentId: 3 
        }
    ]
    */
module.exports = getAllPlacesUnder;
