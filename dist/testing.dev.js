"use strict";

// Function to check if a number is an Armstrong number
function isArmstrongNumber(num) {
  var sum = 0;
  var temp = num;
  var numString = num.toString();
  var numDigits = numString.length;

  while (temp > 0) {
    var digit = temp % 10;
    sum += Math.pow(digit, numDigits);
    temp = Math.floor(temp / 10);
  }

  return sum === num;
} // Read the number of test cases


var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter the number of test cases: ", function (t) {
  var _loop = function _loop(i) {
    rl.question("Enter the number to check: ", function (num) {
      if (isArmstrongNumber(parseInt(num))) {
        console.log("".concat(num, " is an ARMSTRONG number"));
      } else {
        console.log("".concat(num, " is NOT an ARMSTRONG number"));
      } // Check if all test cases have been processed


      if (i === t - 1) {
        rl.close();
      }
    });
  };

  // Process each test case
  for (var i = 0; i < t; i++) {
    _loop(i);
  }
}); // [] Implement Search
// -search by prompt
// -search by tag
// -search by username
//[] Implement Click on Tag
//[] Implement View other profiles
//# sourceMappingURL=testing.dev.js.map
