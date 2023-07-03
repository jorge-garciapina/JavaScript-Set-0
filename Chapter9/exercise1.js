function dataParse(input) {
  let obj;

  try {
    obj = new Function("return " + input + ";")();
  } catch (e) {
    throw new Error("Invalid input");
  }

  for (let prop in obj) {
    if (typeof obj[prop] === "string" && obj[prop].startsWith("function")) {
      obj[prop] = new Function("return " + obj[prop])();
    }
  }

  return obj;
}

var str0 = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}";
let obj0 = dataParse(str0);
console.log("obj0.myFn()= ", obj0.myFn(1, 2));
