const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 },
  ];
  
  const groupedByAge = {};
  
  people.forEach((person) => {
    if (!groupedByAge[person.age]) {
      groupedByAge[person.age] = [];
    }
    groupedByAge[person.age].push(person);
  });
  
  console.log(groupedByAge);
  // Output:
  // {
  //   25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
  //   30: [{ name: "Bob", age: 30 }, { name: "David", age: 30 }]
  // }