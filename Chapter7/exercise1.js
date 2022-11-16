function hex2Rgb(hex) {
  // PART 1: BASIC DEFINITIONS
  // Defenition 1: Lower case the input to avoid capitalization problems.
  hex = hex.toLowerCase();

  // Defenition 2: Object that will be used to transform (hexadecimal to decimal)
  let hexaValues = { a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };

  // Defenition 3: Patters that will be used to extract the information in input.
  let patters = {
    // Pattern 1: 2 characters following a #
    reg1: /(?<=#)[a-f0-9]{2}/,
    // Pattern 2: 2 characters following a 2 characters
    reg2: /(?<=[a-f0-9]{2})[a-f0-9]{2}/,
    // Pattern 3: 2 characters before the end of the string
    reg3: /[a-f0-9]{2}$/,
  };

  // PART 2: CONVERSION HEXADECIMAL TO DECIMAL:
  // Variable to save the output colors.
  let colors = [];

  // This for will loop over the patterns
  for (elmnt of Object.values(patters)) {
    // This will give the characters that match the given pattern:
    let color = hex.match(elmnt)[0];

    // ----------------START: Loop for conversion:--------------
    let i = 1;
    let result = 0;
    for (elmnt of color) {
      if (Object.keys(hexaValues).indexOf(elmnt) !== -1) {
        result += Math.pow(16, 2 - i) * hexaValues[elmnt];
      } else {
        // console.log(elmnt);
        result += Math.pow(16, 2 - i) * elmnt;
      }
      i++;
    }
    colors.push(result);
  }
  // ----------------END: Loop for conversion:--------------

  return "rgb(" + colors.join(",") + ")";
}

let a = hex2Rgb("#3020ff");
console.log(a);
