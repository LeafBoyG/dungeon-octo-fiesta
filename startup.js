document.addEventListener('DOMContentLoaded', () => {
    const initialSplashScreen = document.getElementById('initial-splash-screen');
    const mainMenuScreen = document.getElementById('main-menu-screen');

    const continueGameButton = document.getElementById('continueGame');
    const newGameButton = document.getElementById('newGame');
    const settingsButton = document.getElementById('settings');
    const exitGameButton = document.getElementById('exitGame');

    let menuTransitioned = false; // Flag to prevent multiple transitions

    // Ensure the main menu screen is initially hidden
    mainMenuScreen.classList.remove('active');
    initialSplashScreen.classList.add('active'); // Ensure initial splash is shown at start

    // Listen for any key press to transition to the main menu
    document.addEventListener('keydown', (event) => {
        if (!menuTransitioned) {
            // Hide the initial splash screen
            initialSplashScreen.classList.remove('active');

            // Show the main menu screen after a slight delay for transition
            setTimeout(() => {
                mainMenuScreen.classList.add('active');
                menuTransitioned = true; // Set flag to true
            }, 50); // Small delay to allow initial screen transition to start before second appears
        }
    });

    // Add event listeners for the new menu buttons
    continueGameButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        alert('Continuing your Octo Fiesta adventure!');
        // In a real game: Implement logic to load saved game state
        // Example: window.location.href = 'game.html?load=true';
    });

    newGameButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Starting a NEW Octo Fiesta adventure!');
        // In a real game: Implement logic to start a fresh game
        // Example: window.location.href = 'game.html';
    });

    settingsButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Octo Fiesta Settings: Adjust game preferences here!');
        // In a real game: Implement logic to open settings menu/modal
    });

    exitGameButton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Exiting Octo Fiesta. See you next time!');
        // For a web game, this might attempt to close the tab (often blocked by browsers for security)
        // or redirect to a "thank you for playing" page.
        // window.close(); // May not work in all browsers
    });

    // Optional: You could add sound effects here similar to previous suggestions
    // const menuClickSound = new Audio('assets/menu_click.mp3');
    // const menuHoverSound = new Audio('assets/menu_hover.mp3');
});