function checkNumber(num) {
    try {
      if (isNaN(num)) {
        throw "Not a number!";
      } else if (num > 10) {
        throw "Number is too high!";
      } else if (num < 1) {
        throw "Number is too low!";
      }
      console.log("Number is acceptable.");
    } catch (error) {
      console.log("Error: " + error);
    } finally {
      console.log("This will run no matter what.");
    }
  }
  
  checkNumber("not a number"); // Error: Not a number!
  checkNumber(15);             // Error: Number is too high!
  checkNumber(0);              // Error: Number is too low!
  checkNumber(5);              // Number is acceptable.