let count = 0;
const countElement = document.getElementById("count");
const increaseButton = document.getElementById("increaseButton");
const decreaseButton = document.getElementById("decreaseButton");
const resetButton = document.getElementById("resetButton");
const themeButton = document.getElementById("themeButton");

function updateCount() {
    countElement.textContent = count;
}

function increaseCount() {
    count = count + 1;
    updateCount();
}

function decreaseCount() {
    if (count > 0) {
        count = count - 1;
    }

    updateCount();
}

function resetCount() {
    count = 0;
    updateCount();
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
}
increaseButton.addEventListener("click", increaseCount);
decreaseButton.addEventListener("click", decreaseCount);
resetButton.addEventListener("click", resetCount);
themeButton.addEventListener("click", toggleTheme);