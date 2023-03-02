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
  findPerson(currentSearch) {
    // This if checks if the search has been made before
    if (!!this.searches[currentSearch]) {
      console.log("RESULT BELOW FOUND IN CACHE:");
      return this.searches[currentSearch];
    } else {
      // Search algorithm:
      for (let currentFloor of Object.keys(this)) {
        for (let currentRoom of Object.keys(this[currentFloor])) {
          if (currentFloor !== "searches") {
            for (let employee of this[currentFloor][currentRoom]["employees"]) {
              if (employee.name === currentSearch) {
                // this.searchEmployee[currentSearch] = { room: currentRoom, floor: currentFloor };
                this.searches[currentSearch] = {
                  type: "Employee",
                  name: currentSearch,
                  room: currentRoom,
                  floor: currentFloor,
                };

                let result = this.searches[currentSearch];

                return result;
              }
            }
          }
        }
      }
    }

    // If the element is not in the building, returns -1
    return -1;
  }

  findEquipment(currentSearch) {
    // This if checks if the search has been made before
    if (!!this.searches[currentSearch]) {
      console.log("RESULT BELOW FOUND IN CACHE:");
      return this.searches[currentSearch];
    } else {
      // Search algorithm:
      for (let currentFloor of Object.keys(this)) {
        for (let currentRoom of Object.keys(this[currentFloor])) {
          if (currentFloor !== "searches") {
            for (let equip of this[currentFloor][currentRoom]["equipment"]) {
              if (equip.name === currentSearch) {
                // this.searchEmployee[currentSearch] = { room: currentRoom, floor: currentFloor };
                this.searches[currentSearch] = {
                  type: "Equipment",
                  name: currentSearch,
                  room: currentRoom,
                  floor: currentFloor,
                };

                let result = this.searches[currentSearch];
                return result;
              }
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
console.log("EMPLOYEES: ");
console.log("Result: ", building.findPerson("Ana"));
console.log("Result: ", building.findPerson("Miguel"));
console.log("Result: ", building.findPerson("Ana"));
console.log("Result: ", building.findPerson("Miguel"));

console.log("Result: ", building.findPerson("Mi"));

// To search for a piece of equipment
console.log("EQUIPMENT: ");
console.log("Result: ", building.findEquipment("oven"));
console.log("Result: ", building.findEquipment("pistol"));
console.log("Result: ", building.findEquipment("pistol"));

// console.log(building.searches);
