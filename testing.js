// Function to check if a number is an Armstrong number
function isArmstrongNumber(num) {
  let sum = 0;
  let temp = num;
  const numString = num.toString();
  const numDigits = numString.length;

  while (temp > 0) {
    const digit = temp % 10;
    sum += Math.pow(digit, numDigits);
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

// Read the number of test cases
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the number of test cases: ", (t) => {
  // Process each test case
  for (let i = 0; i < t; i++) {
    rl.question("Enter the number to check: ", (num) => {
      if (isArmstrongNumber(parseInt(num))) {
        console.log(`${num} is an ARMSTRONG number`);
      } else {
        console.log(`${num} is NOT an ARMSTRONG number`);
      }

      // Check if all test cases have been processed
      if (i === t - 1) {
        rl.close();
      }
    });
  }
});

// [] Implement Search
// -search by prompt
// -search by tag
// -search by username
//[] Implement Click on Tag
//[] Implement View other profiles
