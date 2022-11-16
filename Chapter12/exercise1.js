function printAttr(htmlElement, userAttributes = []) {
  // In this part the code extracts all the elements of the same type
  // I decided to declare element as -var- because I want it to be
  // a property of the global object (window, in this case)
  // This will give us an array that contain all the information
  // about the objects.
  var elements = document.getElementsByTagName(htmlElement);
  let output = [];

  // This fot the the heart of the program. Here the code extracts
  // the attributes of the elements and saves them in -output- as objects
  for (elmnt of elements) {
    // In this part the code extracts the attributes of the object:
    let attr = Object.values(elmnt["attributes"]);
    // attr extracts the attributes as an array of objects, this
    // objects contain all the information about the elements of
    // the type choosen in document.getElementsByTagName("div")
    // of -elements-.

    // In principle I am interested only in the -value- of the attribute
    // however, in order to provide a good presentation I will extract
    // the -name- as well.
    let obj = {};
    for (val of attr) {
      obj[val["name"]] = val["value"];
    }
    output.push(obj);
  }

  // THERE ARE NOT ELEMENTS OF THE TYPE GIVEN BY THE USER:
  if (elements.length === 0) {
    console.log("There are not elements of type: -" + htmlElement + "-");
    return -1;
  }

  // This if/else is just to print an answer that differentiate
  // between singular (1 element) and plural (more than 1)
  // Only 1:
  if (elements.length === 1) {
    console.log(
      "There is 1 -" +
        htmlElement +
        "- in the document. It has the following attributes"
    );
  }
  // More than 1:
  else {
    console.log(
      "The are " +
        String(elements.length) +
        " elements of type -" +
        htmlElement +
        "-. They have the following attributes:"
    );
  }

  // THIS CONDITION SAYS: IF THE USER DOES NOT SPECIFY THE DESIRE
  // ATTRIBUTES, THEN GIVE ALL THE ATRIBUTES THE OBJECT/OBJECTS HAS/HAVE.
  if (userAttributes.length === 0) {
    // In this for the code extracts alll the attributes to print
    // the return privides all the attributes
    let i = 1;
    for (elmnt of output) {
      // This definitions are used to separate the keys and value
      // in order to make it easier to differentiate between one another
      let kys = Object.keys(elmnt);
      let vls = Object.values(elmnt);
      let j = 0;
      console.log("-----------------------------------------");
      console.log("*** " + htmlElement + String(i) + " ***:");
      for (ky of kys) {
        console.log(ky + ": " + vls[j]);
        j++;
      }
      i++;
    }
    return output;
  }
  // THIS IS THE CASE IN WHICH USER SPECIFY THE DESIRE ATTRIBUTES
  else {
    let result = [];
    let i = 1;
    for (elmnt of output) {
      // This object is used to help me to save the values that
      // the code will return
      let outUser = {};

      console.log("--------------------------------");
      console.log("*** " + htmlElement + String(i) + " ***:");

      // This for iterates over the input array of attributes
      // provided by the user:
      for (usr of userAttributes) {
        // If the element does not have any of the properties
        // given by the user, the code will complain:
        if (Object.keys(elmnt).indexOf(usr) === -1) {
          console.log(
            "-" + usr + "- is not present in this -" + htmlElement + "-"
          );
        }
        // If the object has that attribute, the code will save it
        // inside an object (outUser), which will store all the
        // valid attributes:
        else {
          outUser[usr] = elmnt[usr];
          console.log(usr + ": " + elmnt[usr]);
        }
      }
      result.push(outUser);
      i++;
    }
    return result;
  }
}

console.log(printAttr("div", ["id", "classs"]));
