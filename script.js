// Game mode options
const modes = {
    "mode1": { notes: ["C4", "D4"], displayText: "Notes C and D from one octave" },
    "mode2": { notes: ["C4", "D4", "E4"], displayText: "Notes C, D and E from one octave" },
    "mode3": { notes: ["C4", "D4", "E4", "F4"], displayText: "Notes C, D, E and F from one octave" },
    "mode4": { notes: ["C4", "D4", "E4", "F4", "G4"], displayText: "Notes C, D, E, F and G from one octave" },
    "mode5": { notes: ["C4", "D4", "E4", "F4", "G4", "A4"], displayText: "Notes C, D, E, F, G and A from one octave" },
    "mode6": { notes: ["C4", "D4", "E4", "F4", "G4", "A4", "B4"], displayText: "Notes C, D, E, F, G, A and B from one octave" },
    "mode7": { notes: ["C4", "D4", "E4", "F4", "G4", "A4", "B4"], displayText: "One Octave (notes C4 to C5)" }, // Updated for Entire Octave
    "mode8": { notes: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"], displayText: "One Octave (notes C4 to C5)" }  // Updated for Entire Octave (C4-C5)
};

let currentMode;
let currentScore = 0;
let currentNoteIndex = 0;
let currentNote;
let noteOptions = [];
let noteAnswerButtons = [];

// Function to display the start screen
function showStartScreen() {
    document.getElementById("startScreen").style.display = "flex";
    document.getElementById("gameScreen").style.display = "none";
}

// Function to display the game screen
function showGameScreen() {
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "flex";
    updateNoteDisplay();
}

// Function to update note display
function updateNoteDisplay() {
    let noteRangeText = modes[currentMode].displayText;
    document.getElementById("noteRange").textContent = noteRangeText;
}

// Function to start the game with selected mode
function startGame(mode) {
    currentMode = mode;
    currentScore = 0;
    currentNoteIndex = 0;
    noteOptions = [...modes[mode].notes];
    noteAnswerButtons = [];
    showGameScreen();
}

// Function to handle the game logic for next note
function nextNote() {
    if (currentNoteIndex < noteOptions.length) {
        currentNote = noteOptions[currentNoteIndex];
        // Add your audio playback logic here
        // For now, simulate it with a simple log
        console.log("Playing note:", currentNote);
        currentNoteIndex++;
    }
}

// Event listeners for each mode button
document.getElementById("mode1").addEventListener("click", () => startGame("mode1"));
document.getElementById("mode2").addEventListener("click", () => startGame("mode2"));
document.getElementById("mode3").addEventListener("click", () => startGame("mode3"));
document.getElementById("mode4").addEventListener("click", () => startGame("mode4"));
document.getElementById("mode5").addEventListener("click", () => startGame("mode5"));
document.getElementById("mode6").addEventListener("click", () => startGame("mode6"));
document.getElementById("mode7").addEventListener("click", () => startGame("mode7"));
document.getElementById("mode8").addEventListener("click", () => startGame("mode8"));

// Event listener for back button
document.getElementById("backButton").addEventListener("click", showStartScreen);

// Event listener for reset score button
document.getElementById("resetScoreButton").addEventListener("click", function() {
    currentScore = 0;
    document.getElementById("currentScore").textContent = "Score: 0";
});

showStartScreen();
