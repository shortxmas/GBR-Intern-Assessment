// Function to calculate the factorial of a number
const factorial = (n) => {
  // If the inputted number is <0, throw an input must be a non-negative number error
  if (n < 0) {
    throw new Error("Input must be a non-negative integer.");
  }
  // If input is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  // Loop through factorial multiplication operation
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Function for form submission handling
const handleSubmit = (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get value entered by the user via input id
  const numberInput = document.getElementById("numberInput").value;

  try {
    // Parse the input value to an integer
    const number = parseInt(numberInput);

    // Check if the parsed number is NaN or negative
    if (isNaN(number) || number < 0) {
      // Throw an error if the input is invalid
      throw new Error("Invalid input. Please enter a non-negative integer.");
    }

    // Call factorial function, calculating the factorial of the input number, setting it to a result variable
    const result = factorial(number);

    // Display the result of the factorial calculation
    document.getElementById(
      "result"
    ).textContent = `The factorial of ${number} is: ${result}`;
  } catch (error) {
    // If an error occurs in the calculation or input validation, log the error message
    document.getElementById("result").textContent = `Error: ${error.message}`;
  }
};

// Event listeners for the form
document
  .getElementById("factorialForm")
  .addEventListener("submit", handleSubmit);
