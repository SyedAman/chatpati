let timer;
let timeLeft = 60; // 60 seconds for the game
let ingredientsAdded = [];

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
        // Handle end of game
    }
}

function addIngredient(ingredient) {
    if (!ingredientsAdded.includes(ingredient)) {
        ingredientsAdded.push(ingredient);
        updatePotImage();
    }
}

function updatePotImage() {
    let potImage = 'pot_empty.png'; // Default empty pot

    if (ingredientsAdded.includes('chickpeas') && ingredientsAdded.includes('masala')) {
        potImage = 'pot_chickpeas_masala.png'; // Example image name
    } else if (ingredientsAdded.includes('chickpeas')) {
        potImage = 'pot_chickpeas.png';
    } else if (ingredientsAdded.includes('masala')) {
        potImage = 'pot_masala.png';
    }
    // Add more conditions for other ingredients

    document.getElementById('pot').src = potImage;
}

window.onload = () => {
    // Initialize game state
};
