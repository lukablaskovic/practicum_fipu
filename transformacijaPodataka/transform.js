let data = [
  { from: "2020-01-01", to: "2020-02-01", price: 34.5 },
  { from: "2020-02-02", to: "2020-03-01", price: 37.0 },
  { from: "2020-03-02", to: "2020-05-15", price: 39.0 },
  { from: "2020-05-16", to: "2020-06-15", price: 37.0 },
];
function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
function getDates(value) {
  let result = value.reduce((groupedDates, obj) => {
    let date = `${obj.from} do ${obj.to}, `;
    return (groupedDates += date);
  }, "");
  return result;
}

let newData = groupBy(data, "price");
for (const [key, value] of Object.entries(newData).sort((a, b) =>
  a[0].localeCompare(b[0])
)) {
  console.log(`${key}: ${getDates(value)}`);
}
