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

  // Now, for clarity in my explanation I decided to write
  // the steps in detail:

  // PART 1: REVERSING THE STRING (French format: yyyy/mm/dd):
  let step1 = date.split("/");
  let step2 = step1.reverse();
  // step3 is the date transform to French format.
  let step3 = step2.join("/");

  // PART 2: EXTRACTING THE DATE IN FORMAT SUITABLE FOR -hollidays-
  let regex = /(?<=\D)\d{2}/g;
  let step4 = step3.match(regex);
  // step5 is the string in -hollidays- format
  let step5 = step4.join("");

  // PART3: DEFINING THE UOTPUT FOR THIS FUNCTION:
  // The code evluates the closure -hollidays-
  let step6 = hollidays(step5);

  // Output1: There is not a party in that day, returns only the date
  // in French format.
  if (step6 === -1) {
    return step3;
  }
  // Output2: There is one party in that day, returns the date and
  // the name of that day's party.
  else {
    return step3 + " (" + step6 + ")";
  }
}

console.log(englishFrench("01/01/2014"));
