import './mining-memory.scss';

// import { addPoints } from '../../../state/points';

const memoryItems = [
    "https://minecraft-api.vercel.app/images/items/golden_apple.png", "https://minecraft-api.vercel.app/images/items/golden_apple.png",
    "https://minecraft-api.vercel.app/images/items/ender_pearl.png", "https://minecraft-api.vercel.app/images/items/ender_pearl.png",
    "https://minecraft-api.vercel.app/images/items/redstone.png", "https://minecraft-api.vercel.app/images/items/redstone.png",
    "https://minecraft-api.vercel.app/images/items/quartz.png", "https://minecraft-api.vercel.app/images/items/quartz.png",
    "https://minecraft-api.vercel.app/images/items/slime_ball.png", "https://minecraft-api.vercel.app/images/items/slime_ball.png",
    "https://minecraft-api.vercel.app/images/items/lapis_lazuli.png", "https://minecraft-api.vercel.app/images/items/lapis_lazuli.png",
    "https://minecraft-api.vercel.app/images/items/phantom_membrane.png", "https://minecraft-api.vercel.app/images/items/phantom_membrane.png",
    "https://minecraft-api.vercel.app/images/items/snowball.png", "https://minecraft-api.vercel.app/images/items/snowball.png"
];

const maxPoints = 1000;
const pointDeductionPerMove = 25;

let flippedCards: HTMLElement[] = [];
let matchedCards: HTMLElement[] = [];
let moveCount = 0;
let score = maxPoints;

export function createMiningMemoryWindow(): void {
    const body = document.querySelector('body') as HTMLElement;
    const gameWindow = document.createElement('article') as HTMLElement;
    gameWindow.id = "mining-memory-game-window";
    body.appendChild(gameWindow);

    const textAndButtonWrapper = document.createElement('div') as HTMLElement;
    textAndButtonWrapper.id = "text-and-button-wrapper";
    gameWindow.appendChild(textAndButtonWrapper);

    const scoreText = document.createElement('p') as HTMLElement;
    scoreText.id = "score-display";
    scoreText.innerHTML = `Points: ${maxPoints}`;
    textAndButtonWrapper.appendChild(scoreText);

    const exitMiningMemoryButton = document.createElement('button') as HTMLButtonElement;
    exitMiningMemoryButton.innerHTML = "Exit";
    textAndButtonWrapper.appendChild(exitMiningMemoryButton);
    exitMiningMemoryButton.addEventListener("click", () => {
        gameWindow.style.display = "none";
    });

    const gameArea = document.createElement('section') as HTMLElement;
    gameArea.id = "mining-memory-game-area";
    gameWindow.appendChild(gameArea);
}

export function createMiningMemoryGame(): void {
  const grid = document.createElement('div');
  grid.classList.add('grid');

  const gameSection = document.getElementById('mining-memory-game-area') as HTMLElement;
  gameSection.appendChild(grid);

  const shuffledItems = shuffle(memoryItems);

  shuffledItems.forEach((item) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <div class="front">
        <img src="${item}">
      </div>
      <img class="back" src="https://minecraft-api.vercel.app/images/items/emerald.png">
    `;

    card.addEventListener('click', () => {
        flipCard(card)
    });
    grid.appendChild(card);
  });
}

function shuffle(array: string[]): string[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function flipCard(card: HTMLElement): void {
  if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      moveCount++;
      score = Math.max(0, score - pointDeductionPerMove);

      const scoreText = document.getElementById("score-display") as HTMLElement;
      scoreText.innerHTML = `Points: ${score}`;

      checkForMatch();
    }
  }
}

function checkForMatch(): void {
  const [firstCard, secondCard] = flippedCards;

  const firstImg = firstCard.querySelector('img')?.src;
  const secondImg = secondCard.querySelector('img')?.src;

  if (firstImg === secondImg) {
    matchedCards.push(firstCard, secondCard);
    flippedCards = [];

    if (matchedCards.length === memoryItems.length) {
      setTimeout(() => showFinalScore(), 500);
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      flippedCards = [];
    }, 1000);
  }
}

function showFinalScore(): void {
    // addPoints(score);
    restartOrExit();
}

function restartOrExit(): void {
    const body = document.querySelector('body') as HTMLElement;

    const restartOrExitWindow = document.createElement('section') as HTMLElement;
    restartOrExitWindow.id = "restart-or-exit-mining-memory";
    body.appendChild(restartOrExitWindow);

    const scoreMessage = document.createElement('p') as HTMLElement;
    scoreMessage.innerHTML = `All pairs matched! <br>You earned ${score} points. Well played!`;
    restartOrExitWindow.appendChild(scoreMessage);

    const buttonsWrapper = document.createElement('div') as HTMLElement;
    restartOrExitWindow.appendChild(buttonsWrapper);

    const exitGameButton = document.createElement('button') as HTMLButtonElement;
    exitGameButton.innerHTML = "Exit";
    exitGameButton.id = "exit-mining-memory-button";
    buttonsWrapper.appendChild(exitGameButton);
    exitGameButton.addEventListener("click", () => {
        const gameWindow = document.getElementById("mining-memory-game-window") as HTMLElement;
        gameWindow.style.display = "none";
        restartOrExitWindow.style.display = "none";
    });

    const restartGameButton = document.createElement('button') as HTMLButtonElement;
    restartGameButton.innerHTML = "Play again";
    restartGameButton.id = "restart-mining-memory-button";
    buttonsWrapper.appendChild(restartGameButton);
    restartGameButton.addEventListener("click", () => {
        const gameWindow = document.getElementById("mining-memory-game-window") as HTMLElement;
        const restartOrExitWindow = document.getElementById("restart-or-exit-mining-memory") as HTMLElement;
        gameWindow.style.display = "none";
        restartOrExitWindow.style.display = "none";

        if (gameWindow) gameWindow.remove();
        if (restartOrExitWindow) restartOrExitWindow.remove();

        score = maxPoints;
        flippedCards = [];
        matchedCards = [];
        moveCount = 0;

        createMiningMemoryWindow();
        createMiningMemoryGame();
    });
}