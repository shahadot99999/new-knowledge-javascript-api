//Write an async/await function that fetch data from an api and logs a message 
// Input: 
// https://v2.jokeapi.dev/joke/Programming?type=single 

// Note: you can use an api of your choice 
// Output: 
// Two SQL tables sit at the bar. A query approaches and asks "Car 
// Note: output may change according to the api you used

async function fetchJoke() {
    try {
        // Fetch data from the API
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data
        const data = await response.json();

        // Log the joke
        console.log(data.joke);
    } catch (error) {
        // Handle any errors
        console.error('Error fetching joke:', error);
    }
}

// Call the function to fetch and log the joke
fetchJoke();