function dataParse(str) {
  // STEP 1: MODIFY THE INPUT STRING IN ORDER TO REPLACE THE
  // COMMAS IN THE ARGUMENTS OF THE FUNCTION WITH DOTS, THIS
  // IN ORDER TO BE ABLE TO SPLIT THE STRING (STEP 3)
  // /(?<=\w+),(?=\w+)/g => all the commas PRECEEDED by one or more
  // alphanumeric character and FOLLOWED by one or more alphanumeric
  // character
  const regexS1 = /(?<=\w+),(?=\w+)/g;
  let step1 = str.replace(regexS1, ".");
  //   console.log(step1);

  // STEP 2: REGEX IN ORDER TO GET RID OF THE { AND }
  // AT THE BEGGINING AND END OF THE INPUT STRING
  const regexS2 = /^\{|\}$/g;
  let step2 = step1.replace(regexS2, "");
  //   console.log(step2);

  // STEP 3: SPLIT THE STRING WITH RESPECT THE COMMAS
  let step3 = step2.split(",");
  //   console.log(step3);

  // STEP 4: CREATION OF THE OBJECT
  // 1) Extraction of the keys and values of the object from the input.

  // To save the keys and values of the object that will be created
  let objectKys = [];
  let objectVls = [];

  for (elmnt of step3) {
    // To match the keys:
    // /.+(?=:)/ => all the characters FOLLOWED by ":"
    const regexKeys = /.+(?=:)/g;
    let kys = elmnt.match(regexKeys);

    // To match the values
    // /(?<=:).+/g => all the characters PRECEEDED by ":"
    const regexvalues = /(?<=:).+/g;
    let vls = elmnt.match(regexvalues);

    // To get rid of all the spaces:
    objectKys.push(kys[0].replace(/\s/g, ""));
    objectVls.push(vls[0].replace(/\s/g, ""));

    // At the end of this for we have the keys and values of the
    // object that will be returned by the function.
  }

  // This if is used to prevent an invalid input:
  if (objectKys.length !== objectVls.length) {
    return -1;
  }

  // 2) Construction:
  // Derinition of the output object:
  let obj = {};

  let i = 0;
  // In this for the object is created:
  for (elmnt of objectKys) {
    // It is important to notice that there are 2 different type
    // of values: 1) the ones that contain numbers, these are the
    // values of the properties, 2) the ones that contain functions
    // these are the functions that will be run when the methods
    // are called. This if differentiate between the 2 types:
    if (/return/.test(objectVls[i])) {
      // /return/.test(objectVls[i])=> this conditions tells us if
      // the word -function- is the value (if so, then it is the
      // value of a method)

      // Extraction of the arguments:
      const regexArg = /(?<=\().+(?=\))/g;
      let funcArgs = objectVls[i].match(regexArg)[0].split(".");

      // Extraction of the body of the functions (the methods):
      const regexFun = /(?<=return).+(?=\;)/g;
      let funcReturn = objectVls[3].match(regexFun)[0];

      // Now the code creates a function using the Function() constructor
      // The arguments and the body of the function are the values
      // of -funcArgs- and -funcReturn-
      let funcion = new Function(funcArgs, "return " + funcReturn);

      // The code adds this function as a value of the method:
      obj[elmnt] = funcion;
    }

    // This in case is for values that are numbers and not functions
    // i.e. this are the values of the properties:
    else {
      obj[elmnt] = Number(objectVls[i]);
    }
    i++;
  }

  return obj;
}

var str =
  "{prop1: 42, prop2: 354, prop3: 9849, myFn1: function(a,b) { return a+b+this.prop1;}, myFn2: function(a,b) { return a+b+this.prop1;}},myFn3: function(a,b,c,d) { return a+b+this.prop1;}}";

let objeto = dataParse(str);

// console.log(objeto);
console.log(objeto.myFn1(1, 2));
