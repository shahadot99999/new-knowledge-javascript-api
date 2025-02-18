// Parent object (prototype)
const animal = {
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  };
  
  // Child object inheriting from the parent
  const dog = Object.create(animal); // dog inherits from animal
  dog.name = "Buddy"; // Adding a property to the dog object
  
  dog.speak(); // Output: "Buddy makes a sound."