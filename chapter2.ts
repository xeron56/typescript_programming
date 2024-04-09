// Basic Types
let age: number = 30;
let name: string = 'John Doe';
let isStudent: boolean = true;
let nullValue: null = null;
let undefinedValue: undefined = undefined;
let anyValue: any = 'This can be any type';

// Function with Type Annotations
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet('TypeScript');

// Interface
interface Person {
  name: string;
  age: number;
  occupation?: string;
}

const john: Person = {
  name: 'John Doe',
  age: 35,
  occupation: 'Software Engineer'
};

function printPersonInfo(person: Person): void {
  console.log(`Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation || 'N/A'}`);
}

printPersonInfo(john);

// Union Types
type Shape = Circle | Rectangle;

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'rectangle':
      return shape.width * shape.height;
  }
}

const circle: Circle = { kind: 'circle', radius: 5 };
const rectangle: Rectangle = { kind: 'rectangle', width: 4, height: 6 };

console.log(getArea(circle)); // Output: 78.53981633974483
console.log(getArea(rectangle)); // Output: 24

// Intersection Types
type PersonWithAddress = Person & {
  address: string;
};

const johnWithAddress: PersonWithAddress = {
  name: 'John Doe',
  age: 35,
  occupation: 'Software Engineer',
  address: '123 Main St, Anytown USA'
};

console.log(johnWithAddress);
// Output: { name: 'John Doe', age: 35, occupation: 'Software Engineer', address: '123 Main St, Anytown USA' }