function dataParse(input) {
  let obj;

  // This structure is the validation of the input:
  try {
    obj = JSON.parse(input);
  } catch (e) {
    throw new Error("Invalid input");
  }

  // Using `{"prop1": 42, "myFn": "function(a, b) { return a+b+this.prop1;}"}`
  // we have that:
  // obj = {prop1:42,
  //         myFn: "function(a, b) { return a+b+this.prop1;}"
  //       }

  // In this "for" the code evaluates if it is dealing with a function
  // is so, it rewrites the entry, transforming it into a method.
  for (let prop in obj) {
    // In the "if", I used the condition:
    // typeof obj[prop] === "string"
    // because I also use: obj[prop].startsWith("function")
    // and it fails for types of data different to string.
    if (typeof obj[prop] === "string" && obj[prop].startsWith("function")) {
      // In this point we have:
      // obj[myFn] = "function(a, b) { return a+b+this.prop1;}"

      obj[prop] = new Function("return " + obj[prop])();
      // the Function constructor can be viewd as:
      // Function("return " + "function(a, b) { return a+b+this.prop1;}")();
      // which is:
      // function (){return function(a, b) { return a+b+this.prop1;}()}
      // This "IIFE" activates the first anonymous function,
      // thus, we have that the function expression results in:
      // obj[prop] = function(a, b) { return a+b+this.prop1;}
    }
  }
  // In this point we have:
  // obj = {prop1:42,
  //         myFn: function(a, b) { return a+b+this.prop1;}
  //       }
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
// console.log(obj.myFn(1, 1));
