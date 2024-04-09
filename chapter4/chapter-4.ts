// Modules



// app.ts
import { sayHello, sayGoodbye } from './greetings';






sayHello('TypeScript');  // Output: Hello, TypeScript!
sayGoodbye('TypeScript'); // Output: Goodbye, TypeScript!

// Namespaces


// app.ts
/// <reference path="math.ts" />
import * as MathUtils from './math';
export * from './math';
console.log(MathUtils.add(2, 3)); // Output: 5
console.log(MathUtils.subtract(5, 3)); // Output: 2
console.log(MathUtils.multiply(4, 6)); // Output: 24
console.log(MathUtils.divide(10, 2)); // Output: 5

// Ambient Declarations


// app.ts
console.log(Math.abs(-5)); // Output: 5
console.log(Math.ceil(3.2)); // Output: 4
console.log(Math.floor(3.8)); // Output: 3
console.log(Math.round(3.5)); // Output: 4
console.log(Math.max(1, 2, 3, 4, 5)); // Output: 5
console.log(Math.min(1, 2, 3, 4, 5)); // Output: 1

// Exporting and Importing with Aliases
import { sayHello as greet, sayGoodbye as farewell } from './greetings';

greet('TypeScript');  // Output: Hello, TypeScript!
farewell('TypeScript'); // Output: Goodbye, TypeScript!

// Re-exporting
// math-utils.ts


console.log(MathUtils.add(2, 3)); // Output: 5
console.log(MathUtils.subtract(5, 3)); // Output: 2
console.log(MathUtils.multiply(4, 6)); // Output: 24
console.log(MathUtils.divide(10, 2)); // Output: 5