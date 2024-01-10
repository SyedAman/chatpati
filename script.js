let timer;
let timeLeft = 60; // 60 seconds for the game

function startGame() {
    timer = setInterval(updateTimer, 1000);
    // Reset game state if needed
}

function updateTimer() {
    timeLeft--;
    document.getElementById('time').innerText = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert('Time is up!');
        // Handle end of game, e.g., check if the dish is correctly made
    }
}

function addIngredient(ingredient) {
    console.log(ingredient + " added to the pot.");
    // Update game state with the added ingredient
}

window.onload = () => {
    // Initialize game state
};
