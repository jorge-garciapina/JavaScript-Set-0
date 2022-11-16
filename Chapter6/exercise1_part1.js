// For the first class I am considering a zombie attack.
// The class define different kind of people in a zombie attack
class postApocallipticHuman {
  constructor(name, alive, speed, strength, patience) {
    this.alive = alive;
    this.speed = speed;
    this.strength = strength;
    this.patience = patience;
    this.name = name;
  }

  isAlive() {
    return this.alive;
  }

  sprint() {
    return this.speed * Math.random();
  }

  fight() {
    return this.strength * Math.random();
  }

  timeResistance() {
    return this.patience * Math.random();
  }
}

// Survivor 1: runner- It has a best sprint than the others
class runner extends postApocallipticHuman {
  constructor(name, alive, speed, strength, patience) {
    super(name, alive, speed, strength, patience);
  }

  sprint() {
    return Math.exp(this.speed + Math.random());
  }
}

// Survivor 2: soldier- It has a experience in fights
class soldier extends postApocallipticHuman {
  constructor(name, alive, speed, strength, patience) {
    super(name, alive, speed, strength, patience);
  }
  fight() {
    return Math.exp(this.strength + Math.random());
  }
}

// Survivor 3: hippie- It has more patiente, which allow him
// to resist the pass of the time: sadness, boredom and lonelyness
class hippie extends postApocallipticHuman {
  constructor(name, alive, speed, strength, patience) {
    super(name, alive, speed, strength, patience);
  }
  timeResistance() {
    return Math.exp(this.patience + Math.random());
  }
}

// Zombie: is the predator of the survivors
class zombie extends postApocallipticHuman {
  sprint() {
    return this.speed * Math.random() * Math.exp(Math.random(), 2);
  }

  fight() {
    return this.strength * Math.random() * Math.exp(Math.random(), 2);
  }

  timeResistance() {
    return this.patience * Math.random() * Math.exp(Math.random(), 2);
  }
}

// Now we create some instances of this clases, i.e. the survivors:
let corredor = new runner("Runner", true, 2, 2, 2);
console.log("Corredor: ");
console.log(corredor.sprint());
console.log(corredor.fight());
console.log(corredor.timeResistance());

let soldado = new soldier("Soldier", true, 2, 2, 2);
console.log("Soldado: ");
console.log(soldado.sprint());
console.log(soldado.fight());
console.log(soldado.timeResistance());

let filosofo = new hippie("Hippie", true, 2, 2, 2);
console.log("filosofo: ");
console.log(filosofo.sprint());
console.log(filosofo.fight());
console.log(filosofo.timeResistance());

// And the zombie
let nigromante = new zombie("Zombie", false, 1, 1, 1);
console.log("nigromante: ");
console.log(nigromante.sprint());
console.log(nigromante.fight());
console.log(nigromante.timeResistance());

// IN ORDER TO HAVE SOME FUN, LETS USE THIS INSTANCES IN A GAME:

let survivors = [corredor, soldado, filosofo];

let days = 0;
while (true) {
  for (elmnt of survivors) {
    if (elmnt.fight() <= nigromante.fight()) {
      console.log(elmnt.name + " was weak and died");
      elmnt.alive = false;
    } else if (elmnt.sprint() <= nigromante.sprint()) {
      console.log(elmnt.name + " was slow and died");
      elmnt.alive = false;
    } else if (elmnt.timeResistance() <= nigromante.timeResistance()) {
      console.log(elmnt.name + " did not resist the lonelyness and died");
      elmnt.alive = false;
    }

    if (elmnt.alive === false) {
      survivors.pop(elmnt);
    }
  }

  if (survivors.length === 0) {
    break;
  }
  days++;
}

console.log("The last survivor died in day: " + String(days));

// console.log(rndIndx);
