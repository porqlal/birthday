const affirmations = [
  "You light up the world just by being you.",
  "Brains and heart? You’ve got both in spades.",
  "Magic follows you everywhere - no wand needed.",
  "Keep being the brilliant, radiant soul you are.",
  "You’ve got the power to change the game, always."
];

const button = document.getElementById('affirmationBtn');
const display = document.getElementById('affirmationDisplay');

function revealAffirmation() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  display.textContent = affirmations[randomIndex];
}

button.addEventListener('click', revealAffirmation);
