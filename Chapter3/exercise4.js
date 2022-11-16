// 4.	Create a custom object that will hold an image’s
// mock information such as (1)pixel color data, (2) image size,
// and (3) name. It must be able to return the information.

class Image {
  // Constructor saves the properties of the object (given by the user)
  constructor(arr, wdth, hght, nme) {
    this.arr = arr;
    this.wdth = wdth;
    this.hght = hght;
    this.nme = nme;
  }

  // Method calls for the properties:
  get width() {
    return this.wdth;
  }

  get height() {
    return this.hght;
  }

  get name() {
    return this.nme;
  }

  // Method to extract information about the pixel color
  getPixel(a, b) {
    let indx = (b - 1) * this.wdth + (a - 1);
    return this.arr[indx];
  }
}

// var data = new Array(1600);
var data = [];
for (let i = 0; i <= 1600; i++) {
  data.push(i);
}

var img = new Image(data, 40, 39, "Hola");
console.log(img.width);
console.log(img.height);
console.log(img.name);
console.log(img.getPixel(20, 4));
