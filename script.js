document.addEventListener('DOMContentLoaded', () => {
    const playGameButton = document.getElementById('playGame');
    const optionsButton = document.getElementById('options');
    const pressStartMessage = document.querySelector('.press-start-message');

    // Hide menu initially and show "Press Any Key"
    document.querySelector('.menu').style.display = 'none';

    let menuVisible = false;

    // Listen for any key press to reveal the menu
    document.addEventListener('keydown', () => {
        if (!menuVisible) {
            pressStartMessage.style.display = 'none'; // Hide "Press Any Key"
            document.querySelector('.menu').style.display = 'block'; // Show menu
            menuVisible = true;
        }
    });

    playGameButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        alert('Starting Octo Fiesta! Prepare for adventure!');
        // In a real game, you would load your game assets,
        // initialize the game engine, or navigate to a game canvas page here.
        // window.location.href = 'game.html';
    });

    optionsButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Options are not yet implemented for Octo Fiesta. Stay tuned!');
        // Here you would typically open an options modal or navigate to an options page.
    });

    // Optional: Add sound effects for menu navigation/selection
    // const selectSound = new Audio('assets/select_sound.mp3');
    // playGameButton.addEventListener('mouseover', () => selectSound.play());
});