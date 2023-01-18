// hollidays("0501");
// console.log(hollidays("05/01"));

function englishFrench(date) {
  // hollidaysFrance is our "lookup table"
  const hollidaysFrance = {
    "0101": "Nouvel An",
    "0501": "Fete Du Travail",
    "0701": "Bastille",
  };

  //   -hollidays- is a closure where we relate the input given
  // by the user, with the lookup table.
  let hollidays = (day) => {
    if (Object.keys(hollidaysFrance).indexOf(day) !== -1) {
      return hollidaysFrance[day];
    } else {
      return -1;
    }
  };
  // Extract the information of the input:
  let regex = /\d+/g;
  let matches = date.match(regex);
  // To check if there are a celebration at the given date
  let celebration = hollidays(matches[0] + matches[1]);

  // Output1: There is not a party in that day, returns only the date
  // in French format.
  if (celebration === -1) {
    return matches.reverse().join("/");
  }
  // Output2: There is one party in that day, returns the date and
  // the name of that day's party.
  else {
    return matches.reverse().join("/") + " (" + celebration + ")";
  }
}

console.log(englishFrench("01/01/2014"));
