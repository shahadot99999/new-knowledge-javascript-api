let globalVar = "I'm global";

function firstFunction() {
    let firstVar = "I'm in firstFunction";
    console.log(globalVar); // Access global variable
    secondFunction();
}

function secondFunction() {
    let secondVar = "I'm in secondFunction";
    console.log(secondVar); // Access local variable
}

firstFunction();
console.log("Execution complete");