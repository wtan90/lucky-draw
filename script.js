const form = document.getElementById('entry-form');
const nameInput = document.getElementById('name');
const prizeInput = document.getElementById('prize'); // Access the prize input field
const participantsList = document.getElementById('participants-list');
const drawButton = document.getElementById('draw-button');
const resetButton = document.getElementById('reset-button');
const winnerDisplay = document.getElementById('winner-display');

const participants = [];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = nameInput.value;
  participants.push(name);
  participantsList.innerHTML += `<p>${name}</p>`;
  nameInput.value = '';
});

drawButton.addEventListener('click', function() {
  if (participants.length > 0) {
    const winnerIndex = Math.floor(Math.random() * participants.length);
    const winner = participants[winnerIndex];
    const prize = prizeInput.value; // Get the entered prize name
    winnerDisplay.innerHTML = `<p>🎉 Winner: ${winner} wins ${prize} 🎁</p>`;
  }
});

resetButton.addEventListener('click', function() {
  winnerDisplay.innerHTML = ''; 
  participantsList.innerHTML = '';
  participants.length = 0;
  prizeInput.value = ''; // Clear the prize input field
});
