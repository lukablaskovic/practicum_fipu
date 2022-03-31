function dayOfYear(year, month, day) {
  for (let i = 1; i < month; i++) {
    day += dan(i, year);
  }
  return day;
}
function dan(month, year) {
  let daysInMonth = {
    1: 31,
    2: year % 4 == 0 || (year % 100 == 0 && year % 400 == 0) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  return daysInMonth[month];
}

module.exports = dayOfYear;
