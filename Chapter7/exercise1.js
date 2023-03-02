function hex2Rgb(hex) {
  // PART 1: BASIC DEFINITIONS
  // Definition 1: Lower case the input to avoid capitalization problems.
  hex = hex.toLowerCase();

  // Definition 2: Pattern that will be used to extract the information in input.
  let regex = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;
  let match = hex.match(regex);

  // If the input doesn't match the pattern, return null
  if (!match) {
    return null;
  }

  // Extract the hexadecimal color from the match
  let hexColor = match[1];

  // PART 2: CONVERSION HEXADECIMAL TO DECIMAL:
  // Variable to save the output colors.
  let colors = [];

  // Loop over the hex digits in pairs
  for (let i = 0; i < hexColor.length; i += 2) {
    // Extract the pair of hex digits
    let hexPair = hexColor.substring(i, i + 2);

    // Convert the pair of hex digits to decimal
    let dec = parseInt(hexPair, 16);

    // Add the decimal value to the colors array
    colors.push(dec);
  }

  return `rgb(${colors.join(", ")})`;
}

console.log(hex2Rgb("#FF0000"));  // (255,0,0)
console.log(hex2Rgb("#0000FF"));  // (0,0,255)
console.log(hex2Rgb("#f0f"));     // (240,15)
console.log(hex2Rgb("#00a"));     // (0,10)
console.log(hex2Rgb("#3020ft"));  // null
console.log(hex2Rgb("#12345"));   // null
console.log(hex2Rgb("#GGG"));     // null
console.log(hex2Rgb("#1234567")); // null
console.log(hex2Rgb("#3020ft"));  // null
