function fizzbuzz(a) {
  if (a % 3 == 0 && a % 5 == 0 && a % 7 == 0)
    return "fizzbuzzsuzz";
  else if (a % 5 == 0 && a % 7 == 0)
    return "buzzsuzz";
  else if (a % 3 == 0 && a % 7 == 0)
    return "fizzsuzz";
  else if (a % 3 == 0 && a % 5 == 0)
    return "fizzbuzz";
  else if (a % 3 == 0)
    return "fizz";
  else if (a % 5 == 0)
    return "buzz";
  else if (a % 7 == 0)
    return "suzz"
  else return ""
}

module.exports = fizzbuzz;