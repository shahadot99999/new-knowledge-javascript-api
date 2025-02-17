// Define a class
class Dog {
    // Constructor (initializes the object)
    constructor(name, age) {
        this.name = name; // Property
        this.age = age;   // Property
    }

    // Method
    bark() {
        return `${this.name} says woof!`;
    }
}

// Create objects (instances of the class)
const dog1 = new Dog("Buddy", 3);
const dog2 = new Dog("Max", 5);

// Access properties and methods
console.log(dog1.name); // Output: Buddy
console.log(dog2.bark()); // Output: Max says woof!