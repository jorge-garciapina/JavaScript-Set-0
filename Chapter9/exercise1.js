function dataParse(input) {
  let obj;

  // Create an object from the sanitized input string using the Function constructor
  try {
    obj = new Function("return " + input + ";")();
  } catch (e) {
    throw new Error("Invalid input");
  }

  // Iterate through the object properties and convert string representations of functions into actual functions
  for (let prop in obj) {
    if (typeof obj[prop] === "string" && obj[prop].startsWith("function")) {
      obj[prop] = new Function("return " + obj[prop])();
    }
  }

  return obj;
}

var str1 = `{"prop1": 42, "myFn": "function myFn1(){ return 'hello world' }"}`;
let obj1 = dataParse(str1);
console.log("obj1.prop1= ", obj1.prop1);
console.log("obj1.myFn()= ", obj1.myFn());
var str2 = `{"prop1": 42, "myFn": "function(a, b) { return a+b+this.prop1;}"}`;
let obj2 = dataParse(str2);
console.log("obj2.prop1= ", obj2.prop1);
console.log("obj2.myFn(1, 5)= ", obj2.myFn(1, 5));
