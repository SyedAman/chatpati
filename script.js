let timer;
let timeLeft = 5;
let ingredientsAdded = [];
let moneyEarned = 0;

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
        updateIngredientList();
    }
}

function updatePotImage() {
    let potImage = 'pot_empty.png'; // Default empty pot

    if (ingredientsAdded.includes('ছোলা') && ingredientsAdded.includes('মসলা')) {
        potImage = 'pot_chickpeas_masala.png'; // Example image name
    } else if (ingredientsAdded.includes('ছোলা')) {
        potImage = 'pot_chickpeas.png';
    } else if (ingredientsAdded.includes('মসলা')) {
        potImage = 'pot_masala.png';
    } else if (ingredientsAdded.includes('পানি')) {
        potImage = 'pot_water.png';
    }
    // Add more conditions for other ingredients

    document.getElementById('pot').src = potImage;

    if (ingredientsAdded.includes('ছোলা') && ingredientsAdded.includes('মসলা') && ingredientsAdded.includes('পানি')) {
        addFinishedDish();
        ingredientsAdded = []; // Reset ingredients for next round
    }
}

function addFinishedDish() {
    let finishedSection = document.getElementById('finished-chatpati');
    let dishImg = document.createElement('img');
    dishImg.src = 'finished_chatpati.jpg';
    dishImg.alt = 'Finished Chatpati';
    dishImg.style.width = '50px'; // Set the image size as needed
    finishedSection.appendChild(dishImg);

    updateMoneyCounter(80); // Add 80 taka for each finished dish
}

function updateMoneyCounter(amount) {
    moneyEarned += amount;
    document.getElementById('money').innerText = moneyEarned;
}

function updateMoneyCounter(amount) {
    moneyEarned += amount;
    document.getElementById('money').innerText = moneyEarned;
}

function updateIngredientList() {
    let list = document.getElementById('ingredient-list');
    list.innerHTML = ''; // Clear current list
    ingredientsAdded.forEach(ingredient => {
        let listItem = document.createElement('li');
        listItem.textContent = ingredient; // Replace with Bangla names if needed
        list.appendChild(listItem);
    });
}


window.onload = () => {
    // Initialize game state
};
