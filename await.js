
//Fetch
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data =>console.log(data))
    .catch(err =>console.log(err))
}


//Async Await
async function loadUserAsync(){
    const res = await  fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}



//Arrow Async
const loadUserArrow =async()=>{
    const res = await  fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}



//Async Try Catch
const loadUserCatch = async()=>{
    try{
        const res = await  fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data);
    }
    catch(error){

    }
}