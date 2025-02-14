console.log("Start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("End");
