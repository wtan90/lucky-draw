document.addEventListener('DOMContentLoaded', function() {
    // Access the form and relevant elements
    const form = document.getElementById('entry-form');
    const nameInput = document.getElementById('name');
    const prizeInput = document.getElementById('prize');
    const participantsList = document.getElementById('participants-list');
    const drawButton = document.getElementById('draw-button');
    const resetButton = document.getElementById('reset-button');
    const winnerDisplay = document.getElementById('winner-display');

    // Array to store participant names
    const participants = [];

    // Submit event listener for the form
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get the entered name and trim whitespace
        const name = nameInput.value.trim();

        // Add the name to the participants array if not empty
        if (name) {
            participants.push(name);

            // Display the name in the participants list
            participantsList.innerHTML += `<p>${name}</p>`;

            // Clear the input field
            nameInput.value = '';
        }
    });

    // Click event listener for the draw button
    drawButton.addEventListener('click', function() {
        // Check if there are participants and a prize is entered
        if (participants.length > 0 && prizeInput.value.trim() !== '') {
            // Randomly select a winner
            const winnerIndex = Math.floor(Math.random() * participants.length);
            const winner = participants[winnerIndex];
            const prize = prizeInput.value.trim(); // Get the entered prize

            // Display the winner's name and the prize
            winnerDisplay.innerHTML = `<p>🎉 Winner: ${winner} wins ${prize} 🎁</p>`;
        } else {
            // Alert if there are no participants or prize is not entered
            alert("Please enter at least one participant and a prize.");
        }
    });

    // Click event listener for the reset button
    resetButton.addEventListener('click', function() {
        // Clear the winner display and participants list
        winnerDisplay.innerHTML = ''; 
        participantsList.innerHTML = '';
        // Reset the participants array
        participants.length = 0;
        // Clear the input fields
        nameInput.value = '';
        prizeInput.value = '';
    });
});
