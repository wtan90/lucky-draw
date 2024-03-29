document.addEventListener('DOMContentLoaded', function() {
    const enterButton = document.getElementById('enter-button');
    const drawButton = document.getElementById('draw-button');
    const resetButton = document.getElementById('reset-button');
    const nameInput = document.getElementById('name');
    const prizeInput = document.getElementById('prize');
    const participantsList = document.getElementById('participants-list');
    const winnerDisplay = document.getElementById('winner-display');

    let participants = [];
    let prizeEntered = false; // Track if the prize has been entered

    enterButton.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name) {
            participants.push(name);
            participantsList.innerHTML += `<p>${name}</p>`;
            nameInput.value = '';
        }
        if (!prizeEntered && prizeInput.value.trim()) {
            prizeInput.setAttribute('readonly', true); // Lock the prize input from being edited
            prizeEntered = true;
        }
    });

    drawButton.addEventListener('click', function() {
        if (participants.length > 0 && prizeInput.value.trim()) {
            const winnerIndex = Math.floor(Math.random() * participants.length);
            const winnerName = participants[winnerIndex];
            winnerDisplay.innerHTML = `Winner: ${winnerName} wins ${prizeInput.value.trim()}!`;
            drawButton.disabled = true; // Optionally disable the draw button after drawing
        } else {
            alert("Please enter participants and a prize.");
        }
    });

    resetButton.addEventListener('click', function() {
        participants = [];
        participantsList.innerHTML = '';
        winnerDisplay.innerHTML = '';
        nameInput.value = '';
        prizeInput.value = '';
        prizeInput.removeAttribute('readonly'); // Unlock the prize input for a new game
        prizeEntered = false;
        drawButton.disabled = false; // Re-enable the draw button for the new round
    });
});
