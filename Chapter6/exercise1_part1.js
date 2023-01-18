// For the first class I am considering a zombie attack.
// The class define different kind of people in a zombie attack
class PostApocallipticHuman {
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
class Runner extends PostApocallipticHuman {
  constructor(name, alive, speed, strength, patience) {
    super(name, alive, speed, strength, patience);
  }

  sprint() {
    return Math.exp(this.speed + Math.random());
  }
}

// Survivor 2: soldier- It has a experience in fights
class Soldier extends PostApocallipticHuman {
  constructor(name, alive, speed, strength, patience) {
    super(name, alive, speed, strength, patience);
  }
  fight() {
    return Math.exp(this.strength + Math.random());
  }
}

// Survivor 3: hippie- It has more patiente, which allow him
// to resist the pass of the time: sadness, boredom and lonelyness
class Hippie extends PostApocallipticHuman {
  constructor(name, alive, speed, strength, patience) {
    super(name, alive, speed, strength, patience);
  }
  timeResistance() {
    return Math.exp(this.patience + Math.random());
  }
}

// Zombie: is the predator of the survivors
class Zombie extends PostApocallipticHuman {
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
let runner = new Runner("Runner", true, 2, 2, 2);
console.log("Runner: ");
console.log(runner.sprint());
console.log(runner.fight());
console.log(runner.timeResistance());

let soldier = new Soldier("Soldier", true, 2, 2, 2);
console.log("Soldier: ");
console.log(soldier.sprint());
console.log(soldier.fight());
console.log(soldier.timeResistance());

let hippie = new Hippie("Hippie", true, 2, 2, 2);
console.log("Hippie: ");
console.log(hippie.sprint());
console.log(hippie.fight());
console.log(hippie.timeResistance());

// And the zombie
let zombie = new Zombie("Zombie", false, 1, 1, 1);
console.log("Zombie: ");
console.log(zombie.sprint());
console.log(zombie.fight());
console.log(zombie.timeResistance());

// IN ORDER TO HAVE SOME FUN, LETS USE THIS INSTANCES IN A GAME:

let survivors = [runner, soldier, hippie];

let days = 0;
while (true) {
  for (elmnt of survivors) {
    if (elmnt.fight() <= zombie.fight()) {
      console.log(elmnt.name + " was weak and died");
      elmnt.alive = false;
    } else if (elmnt.sprint() <= zombie.sprint()) {
      console.log(elmnt.name + " was slow and died");
      elmnt.alive = false;
    } else if (elmnt.timeResistance() <= zombie.timeResistance()) {
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
