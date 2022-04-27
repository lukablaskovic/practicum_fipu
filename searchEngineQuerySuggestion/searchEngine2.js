//function indexText() {}
const map = {
  I: ["have"],
  My: ["best"],
  and: ["I", "have"],
};
function findSuggestions(phrase) {
  return map[phrase];
}
module.exports = { findSuggestions };
