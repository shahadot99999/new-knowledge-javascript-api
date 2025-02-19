//3) You have an array of objects: 
// const instructor = [ 
//     {name: 'Nodi', age: 28, position: 'Senior'}, 
//     {name: 'Akil', age: 26, position: 'Junior@gmail.com 
//     {name: 'Shobuj', age:30, position:'Senior') 
//     ] 
//     Your task is to display the instructor names that has the p senior using filter


const instructor = [ 
    {name: 'Shahadot', age: 30, position: 'Senior'}, 
    {name: 'Akil', age: 26, position: 'Junior'}, 
    {name: 'Shobuj', age: 31, position: 'Senior'}
    
    
];

// Filter instructors with the position 'Senior'
const seniorInstructors = instructor.filter(instructor => instructor.position === 'Senior');

// Display the names of senior instructors
seniorInstructors.forEach(instructor => {
    console.log(instructor.name);
});