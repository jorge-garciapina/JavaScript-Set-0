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
    // Check if the key exists directly in the object
    if (day in hollidaysFrance) {
      return hollidaysFrance[day];
    } else {
      return -1;
    }
  };

  // Extract the information of the input using a single regular expression
  let regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  let match = date.match(regex);

  if (!match) {
    return "Invalid date format";
  }

  let [, month, day, year] = match;

  // To check if there is a celebration on the given date
  let celebration = hollidays(month + day);

  // Output1: There is not a party on that day, returns only the date
  // in French format.
  if (celebration === -1) {
    return `${day}/${month}/${year}`;
  }
  // Output2: There is one party on that day, returns the date and
  // the name of that day's party.
  else {
    return `${day}/${month}/${year} (${celebration})`;
  }
}
console.log(englishFrench("01/01/2014"));
console.log(englishFrench("05/01/2014"));
console.log(englishFrench("03/03/2014"));
