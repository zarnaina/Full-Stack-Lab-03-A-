const temperatureInput = document.getElementById("temperature");
const toFahrenheitButton = document.getElementById("toFahrenheit");
const toCelsiusButton = document.getElementById("toCelsius");
const result = document.getElementById("result");

function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

const fahrenheitToCelsius = (f) => {
    return (f - 32) * 5 / 9;
};

function convertToFahrenheit() {
    const inputValue = temperatureInput.value.trim();
    const temperature = Number(inputValue);

    if (inputValue === "" || Number.isNaN(temperature)) {
        result.textContent = "Please enter a valid number.";
        result.style.color = "red";
        return;
    }

    const answer = celsiusToFahrenheit(temperature);

    result.textContent = `${answer.toFixed(1)} °F`;
    result.style.color = "green";
}

function convertToCelsius() {
    const inputValue = temperatureInput.value.trim();
    const temperature = Number(inputValue);

    if (inputValue === "" || Number.isNaN(temperature)) {
        result.textContent = "Please enter a valid number.";
        result.style.color = "red";
        return;
    }

    const answer = fahrenheitToCelsius(temperature);

    result.textContent = `${answer.toFixed(1)} °C`;
    result.style.color = "green";
}

toFahrenheitButton.addEventListener("click", convertToFahrenheit);
toCelsiusButton.addEventListener("click", convertToCelsius);
