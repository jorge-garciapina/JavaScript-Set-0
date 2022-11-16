// Exercise 1: Implement the following:
// a. A bank that holds client’s information:
//    i.  Account number;
//    ii. Balance
// b. A set of clients where each can:
//    i.   hold money of their own;
//    ii.  deposit money into the bank (to any account);
//    iii. retrieve money from the bank (from personal account only);
//    iv.  view current balance in bank (from personal account only)
// c. A client cannot deposit more money than what it has;
// d. A client cannot retrieve more money that what is in its account;
// e. All financial information must be private

// STEP 1: CLIENT OPENS AN ACCOUNT IN THE BANK. CLIENT CHOOSE
// CLIENT MAKES HIS FIRST DEPOSIT, CHOOSE HIS PASSWORD AND GIVE
// HIS NAME.

// STEP 2: CREATION OF THE BANK ELECTRONIC SYSTEM:
class Bank {
  // The system will stored the information about the clients in
  // an object named -bankClients-
  constructor() {
    this.bankClients = {};
  }

  // This methods adds new clients to the Bank's system.
  addClient(client) {
    this.bankClients[client.clientNumber] = client;
  }

  // View current balance in bank (from personal account only):
  currentBalance(client, nip) {
    let clientPassword = this.bankClients[client].password;
    let clientBalance = this.bankClients[client].balance;
    if (clientPassword === nip) {
      return client + "- Current Balance: " + String(clientBalance);
    } else {
      return client + "- Incorrect NIP, balance not available";
    }
  }

  // Retrieve money from the bank (from personal account only):
  retrieveMoney(client, nip, amount) {
    let clientPassword = this.bankClients[client].password;

    // The nip is correct:
    if (nip === clientPassword) {
      // The retrieved amount is correct
      if (amount <= this.bankClients[client].balance) {
        this.bankClients[client].balance -= amount;
        return (
          client +
          "- Withdraw: " +
          String(amount) +
          ". New balance: " +
          String(this.bankClients[client].balance)
        );
      }
      // The retrieved amount is incorrect :
      else {
        return (
          client +
          "- Not enough founds. Current balance: " +
          String(this.bankClients[client].balance)
        );
      }
    }
    // The nip is incorrect
    else {
      return client + "- Incorrect NIP, money withdraw not available";
    }
  }
  // Deposit money into the bank, to any account;
  deposit(client, nip, amount, destinatary) {
    let clientPassword = this.bankClients[client].password;
    // The nip is correct:
    if (nip === clientPassword) {
      // The retrieved amount is correct
      if (amount <= this.bankClients[client].balance) {
        this.bankClients[client].balance -= amount;
        this.bankClients[destinatary].balance += amount;
        return (
          "Deposit:  " +
          String(amount) +
          " sent from: (" +
          client +
          ") to: (" +
          destinatary +
          ")"
        );
      }
      // The retrieved amount is incorrect
      else {
        return (
          client +
          "- Not enough founds. Current balance: " +
          String(this.bankClients[client].balance)
        );
      }
    }
    // The nip is incorrect:
    else {
      return client + "- Incorrect NIP, deposit not available";
    }
  }
}

// STEP 3: THE BANK SAVES THE USERS IN ITS SYSTEM
let institution = new Bank();

institution.addClient({
  clientNumber: "Pancho Villa",
  balance: 100,
  password: 1234,
});

institution.addClient({
  clientNumber: "Dolores Hidalgo",
  balance: 870,
  password: 4567,
});

institution.addClient({
  clientNumber: "Octavio Paz",
  balance: 1230,
  password: 1111,
});

console.log(institution);
// ------------------------------------

// STEP 4: PROOF OF THE METHODS:
// Information can only be accessed if pin is correct:
// NIP Pancho Villa: 1234
// NIP Dolores Hidalgo: 4567
// NIP Octavio Paz: 1111
// currentBalance(name, nip)
console.log(institution.currentBalance("Pancho Villa", 1234));
console.log(institution.currentBalance("Dolores Hidalgo", 4567));
console.log(institution.currentBalance("Octavio Paz", 1111));
console.log("________________________________________");
// retrieveMoney(name, nip, amount)
console.log(institution.retrieveMoney("Dolores Hidalgo", 4567, 1000));
console.log(institution.retrieveMoney("Pancho Villa", 1234, 68));
console.log(institution.retrieveMoney("Octavio Paz", 1111, 1000));
console.log("________________________________________");
// deposit(name(from), nip, amount, name(to))
console.log(institution.deposit("Octavio Paz", 1111, 500, "Pancho Villa"));
console.log(institution.deposit("Dolores Hidalgo", 4567, 500, "Pancho Villa"));
console.log(institution.deposit("Dolores Hidalgo", 4567, 370, "Pancho Villa"));
console.log("________________________________________");
console.log(institution.currentBalance("Pancho Villa", 1234));
console.log(institution.currentBalance("Dolores Hidalgo", 4567));
console.log(institution.currentBalance("Octavio Paz", 1117));
