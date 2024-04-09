// Functions

// Function with type annotations
function add(a: number, b: number): number {
	return a + b;
  }
  
  console.log(add(2, 3)); // Output: 5
  // console.log(add('2', '3')); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
  
  // Optional and default parameters
  function greet(name: string, greeting: string = 'Hello'): void {
	console.log(`${greeting}, ${name}!`);
  }
  
  greet('TypeScript'); // Output: Hello, TypeScript!
  greet('TypeScript', 'Hi'); // Output: Hi, TypeScript!
  
  // Rest parameters
  function sumNumbers(...numbers: number[]): number {
	return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sumNumbers(1, 2, 3)); // Output: 6
  console.log(sumNumbers(4, 5, 6, 7)); // Output: 22
  
  // Classes
  
  // Class with type annotations
  class Person {
	name: string;
	age: number;
  
	constructor(name: string, age: number) {
	  this.name = name;
	  this.age = age;
	}
  
	greet(): void {
	  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
	}
  }
  
  const john = new Person('John', 35);
  john.greet(); // Output: Hello, my name is John and I'm 35 years old.
  
  // Inheritance and interfaces
  interface Employee extends Person {
	occupation: string;
  }
  
  class Manager extends Person implements Employee {
	occupation: string;
  
	constructor(name: string, age: number, occupation: string) {
	  super(name, age);
	  this.occupation = occupation;
	}
  
	greet(): void {
	  console.log(`Hello, my name is ${this.name}, I'm a ${this.occupation} and I'm ${this.age} years old.`);
	}
  }
  
  const jane = new Manager('Jane', 42, 'Software Engineer');
  jane.greet(); // Output: Hello, my name is Jane, I'm a Software Engineer and I'm 42 years old.
  
  // Access modifiers
  class BankAccount {
	private balance: number = 0;
  
	deposit(amount: number): void {
	  this.balance += amount;
	}
  
	withdraw(amount: number): void {
	  if (amount <= this.balance) {
		this.balance -= amount;
	  } else {
		console.log('Insufficient funds.');
	  }
	}
  
	getBalance(): number {
	  return this.balance;
	}
  }
  
  const account = new BankAccount();
  account.deposit(1000);
  console.log(account.getBalance()); // Output: 1000
  account.withdraw(500);
  console.log(account.getBalance()); // Output: 500
  // account.balance = 1000000; // Error: 'balance' is private and only accessible within class 'BankAccount'.