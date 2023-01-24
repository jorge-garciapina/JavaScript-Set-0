// To addressed the feedback I decided to create another
// solution.
// By defining -Client- and -Bank- in this fashion, I solved
// the problem I had before relative to privacy
// of financial information.

//-------------- START: CLIENT DEFINITION--------------
const Client = (function () {
  let clients = {};

  // To create a new client:
  function addClient(name, pocketMoney) {
    clients[name] = { name, pocketMoney };
  }

  // To retrieve client's information:
  function client(name) {
    return clients[name];
  }

  // To deposit, in the desired bank.
  function deposit(bank, client, destinatary, amount) {
    if (amount <= client.pocketMoney) {
      bank.bankDeposit(destinatary, amount);
      clients[client.name].pocketMoney -= amount;
    } else {
      console.log("Insufficient funds.");
    }
  }

  // To retrieve from the desired bank.
  function retrieve(bank, accountNumber, amount) {
    const indicator = bank.bankRetrieve(accountNumber, amount);
    if (indicator === 0) {
      console.log(`${accountNumber} is not a valid account`);
    } else if (indicator === -1) {
      console.log("Insufficient funds.");
    } else {
      clients[indicator.name].pocketMoney += amount;
    }
  }

  // This is the interface that will be given to interact
  // with -Client-.
  return {
    addClient,
    client,
    deposit,
    retrieve,
  };
})();

//--------------- END: CLIENT DEFINITION---------------

//-------------- START: BANK DEFINITION--------------
const Bank = (function () {
  let accounts = {};

  // This methods adds new clients to the Bank's system.
  function addClient(accountNumber, client) {
    let name = client.name;
    accounts[accountNumber] = { accountNumber, name, balance: 0 };
  }

  // To deposit money in a particular accont:
  function bankDeposit(destinatary, amount) {
    if (!accounts[destinatary]) {
      console.log(`${destinatary} is not a valid account`);
    } else {
      accounts[destinatary].balance += amount;
    }
  }

  // To retrieve money from a particular accont:
  function bankRetrieve(accountNumber, amount) {
    if (!accounts[accountNumber]) {
      return 0;
    } else {
      if (amount <= accounts[accountNumber].balance) {
        accounts[accountNumber].balance -= amount;
        return accounts[accountNumber];
      } else {
        return -1;
      }
    }
  }

  // View current balance in bank (from personal account only):
  function viewBalance(accountNumber) {
    if (!accounts[accountNumber]) {
      console.log(`${accountNumber} is not a valid account`);
    } else {
      const accountInfo = accounts[accountNumber];
      console.log(
        "-" + accountInfo.name + "- has a balance of: " + accountInfo.balance
      );
    }
  }

  // This is the interface that will be given to interact
  // with -Bank-.
  return {
    viewBalance,
    addClient,
    bankDeposit,
    bankRetrieve,
  };
})();
//--------------- END: BANK DEFINITION---------------

// Creation of some clients
Client.addClient("John Doe", 1000);
Client.addClient("Jane Smith", 500);
Client.addClient("Cyndi Lauper", 7500);

// Creation of a bank account of some clients
Bank.addClient(1234, Client.client("John Doe"));
Bank.addClient(5555, Client.client("Jane Smith"));

// We deposit money in some accounts. It is important
// to notice that to deposit it is not necessary to have
// an account on the bank -Cyndy Lauper-, for example.
Client.deposit(Bank, Client.client("John Doe"), 5555, 999);
Client.deposit(Bank, Client.client("Cyndi Lauper"), 5555, 4000);

// Now, the client can retrieve money
Client.retrieve(Bank, 5555, 80);

console.log(Client.client("John Doe"));
console.log(Client.client("Jane Smith"));
console.log(Client.client("Cyndi Lauper"));

Bank.viewBalance(1234);
