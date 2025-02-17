
//acess value 
const person = { name: "Alice", age: 25 };
console.log(person.name); // Output: "Alice"


//nested object
const user = {
    name: "Bob",
    address: {
      city: "New York",
      zip: "10001"
    }
  };
  console.log(user.address.city); // Output: "New York"



  //Optional Chaining
  const user2 = { name: "Charlie" };
console.log(user2.address?.city); // Output: undefined (no error)