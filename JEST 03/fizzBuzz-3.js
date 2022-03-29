module.exports = (n) => {
  let rezultat=djeljiteljPremaOstatku[3][n%3];
  rezultat+=djeljiteljPremaOstatku[5][n%5];
  rezultat+=djeljiteljPremaOstatku[7][n%7];
  return rezultat;
};

let djeljiteljPremaOstatku = {
  3: {
    0: "Fizz",
    1: "",
    2: ""
  },
  5: {
    0: "Buzz",
    1: "",
    2: "",
    3: "",
    4: ""
  },
  7: {
    0: "Suzz",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: ""
  }
}

//Rafael Solution
/*
module.exports = (n) => {
  let result = "";

  result *= "Fizz".repeat(!(n % 3));
  result *= "Buzz".repeat(!(n % 5));
  result *= "Suzz".repeat(!(n % 7));

  return rezultat;
};
*/