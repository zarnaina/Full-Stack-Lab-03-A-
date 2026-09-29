const limitInput = document.getElementById("limit");
const generateButton = document.getElementById("generateBtn");
const fizzBuzzList = document.getElementById("fizzBuzzList");

// Generates the FizzBuzz list up to the selected limit.
function generateFizzBuzz() {
    const limit = Number(limitInput.value);

    fizzBuzzList.innerHTML = "";

    for (let number = 1; number <= limit; number++) {
        const listItem = document.createElement("li");

        if (number % 3 === 0 && number % 5 === 0) {
            listItem.textContent = "FizzBuzz";
        } else if (number % 3 === 0) {
            listItem.textContent = "Fizz";
        } else if (number % 5 === 0) {
            listItem.textContent = "Buzz";
        } else {
            listItem.textContent = number;
        }

        fizzBuzzList.appendChild(listItem);
    }
}

generateButton.addEventListener("click", generateFizzBuzz);
generateFizzBuzz();
