function hex2Rgb(hex) {
  hex = hex.toLowerCase();

  let regex = /^#?(([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})|[0-9a-f]{3})$/i;
  let match = hex.match(regex);

  if (!match) {
    return null;
  }

  let hexColor = match[1];

  // If the hex color is 3 characters, expand it to 6 characters
  if (hexColor.length === 3) {
    hexColor = hexColor
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Use capture groups to extract the color components directly
  let r = parseInt(match[2] || match[1][0] + match[1][0], 16);
  let g = parseInt(match[3] || match[1][1] + match[1][1], 16);
  let b = parseInt(match[4] || match[1][2] + match[1][2], 16);

  return `rgb(${r}, ${g}, ${b})`;
}

console.log(hex2Rgb("#FF0000"));
console.log(hex2Rgb("#0000FF"));
console.log(hex2Rgb("#f0f"));
console.log(hex2Rgb("#00a"));
console.log(hex2Rgb("#3020ft"));
console.log(hex2Rgb("#12345"));
console.log(hex2Rgb("#GGG"));
console.log(hex2Rgb("#1234567"));
console.log(hex2Rgb("#3020ft"));
