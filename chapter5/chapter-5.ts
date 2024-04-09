// Generics

// Generic function to swap elements in an array
function swap<T>(arr: T[], i: number, j: number): void {
	[arr[i], arr[j]] = [arr[j], arr[i]];
  }
  
  const numbers = [1, 2, 3, 4, 5];
  swap(numbers, 0, 4); // Swaps the first and last elements
  console.log(numbers); // Output: [5, 2, 3, 4, 1]
  
  const names = ['Alice', 'Bob', 'Charlie'];
  swap(names, 0, 2); // Swaps the first and last elements
  console.log(names); // Output: ['Charlie', 'Bob', 'Alice']
  
  // Generic class
  class Queue<T> {
	private items: T[] = [];
  
	enqueue(item: T): void {
	  this.items.push(item);
	}
  
	dequeue(): T | undefined {
	  return this.items.shift();
	}
  }
  
  const numberQueue = new Queue<number>();
  numberQueue.enqueue(1);
  numberQueue.enqueue(2);
  numberQueue.enqueue(3);
  console.log(numberQueue.dequeue()); // Output: 1
  console.log(numberQueue.dequeue()); // Output: 2
  console.log(numberQueue.dequeue()); // Output: 3
  
  const stringQueue = new Queue<string>();
  stringQueue.enqueue('apple');
  stringQueue.enqueue('banana');
  stringQueue.enqueue('cherry');
  console.log(stringQueue.dequeue()); // Output: 'apple'
  console.log(stringQueue.dequeue()); // Output: 'banana'
  console.log(stringQueue.dequeue()); // Output: 'cherry'
  
  // Decorators
  
  function logMethod(
	target: any,
	propertyKey: string,
	descriptor: PropertyDescriptor
  ) {
	const originalMethod = descriptor.value;
  
	descriptor.value = function (...args: any[]) {
	  console.log(`Calling ${propertyKey} with args:`, args);
	  return originalMethod.apply(this, args);
	};
  
	return descriptor;
  }
  
  class MyClass {
	@logMethod
	greet(name: string): void {
	  console.log(`Hello, ${name}!`);
	}
  
	@logMethod
	add(a: number, b: number): number {
	  return a + b;
	}
  }
  
  const instance = new MyClass();
  instance.greet('TypeScript'); // Output: Calling greet with args: ['TypeScript'], Hello, TypeScript!
  console.log(instance.add(2, 3)); // Output: Calling add with args: [2, 3], 5
  
  // Async/Await
  
  async function fetchData(url: string): Promise<any> {
	const response = await fetch(url);
	const data = await response.json();
	return data;
  }
  
  async function main() {
	try {
	  const data = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
	  console.log(data);
	} catch (error) {
	  console.error('Error fetching data:', error);
	}
  }
  
  main();