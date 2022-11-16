class Building {
  // The employees and equipment are part of the building.
  // The floors are considered as properties of the object
  constructor() {
    (this.floor1 = {
      reception: {
        employees: [{ name: "Ana" }],
        equipment: [
          { name: "pencil", owner: "Ana" },
          { name: "desk", owner: "Ana" },
        ],
      },
      security: {
        employees: [{ name: "Raul" }],
        equipment: [
          { name: "pistol", owner: "Raul" },
          { name: "knife", owner: "Raul" },
        ],
      },
      cafeteria: {
        employees: [{ name: "Miguel" }],
        equipment: [
          { name: "tv", owner: "common" },
          { name: "table", owner: "common" },
        ],
      },
    }),
      (this.floor2 = {
        carpentry: {
          employees: [{ name: "Salvador" }, { name: "Manuel" }],
          equipment: [
            { name: "hammer", owner: "common" },
            { name: "scrwdriver", owner: "common" },
            { name: "saw", owner: "common" },
            { name: "wood", owner: "common" },
          ],
        },
        forge: {
          employees: [{ name: "Regina" }, { name: "Laura" }],
          equipment: [
            { name: "oven", owner: "common" },
            { name: "blowtorch", owner: "common" },
          ],
        },
        nursing: {
          employees: [{ name: "Cristel" }],
          equipment: [
            { name: "bandages", owner: "Cristel" },
            { name: "syringe", owner: "Cristel" },
            { name: "medicine", owner: "Cristel" },
            { name: "bed", owner: "common" },
          ],
        },
      });
  }

  // In this property the code saves past searches
  searches = {};

  // Function to find an employee:
  findPerson(nm) {
    // This if checks if the search has been made before
    if (Object.keys(this.searches).indexOf(nm) !== -1) {
      return this.searches[nm];
    }

    // Search algorithm:
    for (let flr of Object.keys(this)) {
      for (let rm of Object.keys(this[flr])) {
        if (flr !== "searches") {
          for (let employee of this[flr][rm]["employees"]) {
            if (employee.name === nm) {
              // this.searchEmployee[nm] = { room: rm, floor: flr };
              this.searches[nm] = {
                type: "Employee",
                name: nm,
                room: rm,
                floor: flr,
              };

              return { type: "Employee", name: nm, room: rm, floor: flr };
            }
          }
        }
      }
    }

    // If the element is not in the building, returns -1
    return -1;
  }

  findEquipment(nm) {
    // This if checks if the search has been made before
    if (Object.keys(this.searches).indexOf(nm) !== -1) {
      return this.searches[nm];
    }

    // Search algorithm:
    for (let flr of Object.keys(this)) {
      for (let rm of Object.keys(this[flr])) {
        if (flr !== "searches") {
          for (let equip of this[flr][rm]["equipment"]) {
            if (equip.name === nm) {
              // this.searchEmployee[nm] = { room: rm, floor: flr };
              this.searches[nm] = {
                type: "Equipment",
                name: nm,
                room: rm,
                floor: flr,
              };

              return {
                type: "Equipment",
                name: nm,
                room: rm,
                floor: flr,
                supervisor: equip.owner,
              };
            }
          }
        }
      }
    }

    // If the element is not in the building, returns -1
    return -1;
  }
}

let building = new Building();

// To search for an employee
let a = building.findPerson("Ana");
console.log("Result: ", a);

let aa = building.findPerson("Ana");
console.log("Result: ", aa);

let b = building.findPerson("Miguel");
console.log("Result: ", b);
let c = building.findPerson("Mi");
console.log("Result: ", c);

// To search for a piece of equipment
let z = building.findEquipment("oven");
console.log("Result: ", z);

let x = building.findEquipment("pistol");
console.log("Result: ", x);

let w = building.findEquipment("pistol");
console.log("Result: ", w);

console.log(building.searches);
