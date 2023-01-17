// 4.	Create a custom object that will hold an image’s
// mock information such as (1)pixel color data, (2) image size,
// and (3) name. It must be able to return the information.

class Image {
  // Constructor saves the properties of the object (given by the user)
  constructor(arr, widthInput, heightInput, nameInput) {
    if (arr.length === widthInput * heightInput) {
      this._arr = arr;
      this._width = widthInput;
      this._height = heightInput;
      this._name = nameInput;
    } else {
      throw new Error("Width and Height should be equal");
    }
  }

  // Method calls for the properties:
  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get name() {
    return this._name;
  }

  // Method to extract information about the pixel color
  getPixel(a, b){
    if (a <= this._width && b <= this._height) {
      let index = (b - 1) * this._width + (a - 1);
      return this._arr[index];
    } else {
      throw new Error("Index out of range");
    }
  }
}

// var data = new Array(1600);
var data = [];
for (let i = 1; i <= 1600; i++) {
  data.push(i);
}

var img = new Image(data, 40, 40, "Hola");
console.log(img.width);
console.log(img.height);
console.log(img.name);
console.log(img.getPixel(20, 4));
