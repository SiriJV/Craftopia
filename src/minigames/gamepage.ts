import { games } from './games';
import './gamepage.scss';
import { createMiningMemoryWindow } from './games/mining-memory/mining-memory';
import { createMiningMemoryGame } from '../minigames/games/mining-memory/mining-memory';
// import { totalPoints } from '../state/points';

//////////////////////////////////
/////////// Game Page ////////////
//////////////////////////////////

const body = document.querySelector('body');

const gamePageWindow = document.createElement('article');
gamePageWindow.id = "gamepage-window";
body?.appendChild(gamePageWindow);

const h2 = document.createElement('h2');
h2.innerHTML = "Minigames";
gamePageWindow.appendChild(h2);

// const totalPointsDisplay = document.createElement('p');
// totalPointsDisplay.innerHTML = `Total points: ${totalPoints}`;
// gamePageWindow.appendChild(totalPointsDisplay);

// const xpLevelWrapper = document.createElement('section');
// xpLevelWrapper.id = "xp-level-wrapper";
// gamePageWindow.appendChild(xpLevelWrapper);

// const xpLevel = document.createElement('p');
// xpLevel.id = "xp-level";
// xpLevel.innerHTML = "0";
// xpLevelWrapper.appendChild(xpLevel);

// const xpBarWrapper = document.createElement('section');
// xpBarWrapper.id = "xp-bar-wrapper";
// gamePageWindow.appendChild(xpBarWrapper);

// const xpBar = document.createElement('img');
// xpBar.src = "../../public/images/items/xp_levels_black.png";
// xpBar.id = "xp-bar";
// xpBarWrapper.appendChild(xpBar);

// const xpBarGreen = document.createElement('img');
// xpBarGreen.src = "../../public/images/items/xp_levels_green.png";
// xpBarGreen.id = "xp-bar-green";
// xpBarWrapper.appendChild(xpBarGreen);

const gameWrappers = document.createElement('section');
gameWrappers.id = "game-wrappers";
gamePageWindow.appendChild(gameWrappers);

function createDivs(containerId: string, count: number) {
  const container = document.getElementById(containerId) as HTMLElement;
  
  for (let i = 0; i < count; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('game-wrapper');
    newDiv.id = `game-wrapper-${i}`;
    container.appendChild(newDiv);
  }
}

createDivs('game-wrappers', 9);

export function createGameDisplay(wrapperId: string, game: { name: string; icon: string; description: string }) {
  const wrapperElement = document.getElementById(wrapperId) as HTMLElement;

  const gameIcon = document.createElement('img');
  gameIcon.id = `${game.name.toLowerCase().replace(/\s+/g, '-')}-icon`;
  gameIcon.src = game.icon;

  const gameDescription = document.createElement('p');
  gameDescription.id = `${game.name.toLowerCase().replace(/\s+/g, '-')}-description`;
  gameDescription.innerHTML = `<span>${game.name}</span><br>${game.description}`;

  wrapperElement.appendChild(gameIcon);
  wrapperElement.appendChild(gameDescription);
}

games.forEach((game, index) => {
  const wrapperId = `game-wrapper-${index + 2}`;
  createGameDisplay(wrapperId, game);
});

export const blackBlock = document.createElement('div');
blackBlock.id = "black-block";
body?.appendChild(blackBlock);

const chest = document.getElementById('chest') as HTMLElement;
const chestImg = document.getElementById('chest-closed') as HTMLImageElement;

chest.addEventListener('click', function () {
  if (chestImg.src.includes('chest.png')) {
    gamePageWindow.style.display = "none";
    blackBlock.style.display = "none";
  } else {
    gamePageWindow.style.display = "block";
    blackBlock.style.display = "block";
  }
});

//////////////////////////////////
///////// Game Details ///////////
//////////////////////////////////

export function createGameDetailsPage(name: string, descriptionLong: string): void {
  const mainPage = document.createElement('article');
  mainPage.id = `${name.replace(/\s+/g, "-").toLowerCase()}-game-details-page`;
  mainPage.classList.add('game-details-page');

  const gameName = document.createElement('h2');
  gameName.textContent = name;
  mainPage.appendChild(gameName);

  const gameDescription = document.createElement('p');
  gameDescription.textContent = descriptionLong;
  mainPage.appendChild(gameDescription);

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('game-details-page-buttons');

  const exitButton = document.createElement('button');
  exitButton.textContent = "Exit";
  exitButton.classList.add('exit-button');
  exitButton.addEventListener("click", () => {
      mainPage.remove();
  });
  buttonWrapper.appendChild(exitButton);

  const startButton = document.createElement('button');
  startButton.textContent = "Play";
  startButton.classList.add('start-button');
  startButton.addEventListener("click", () => {
      mainPage.remove();
      createMiningMemoryWindow();
      createMiningMemoryGame();
  });
  buttonWrapper.appendChild(startButton);

  mainPage.appendChild(buttonWrapper);
  document.body.appendChild(mainPage);
}

games.forEach((game, index) => {
  const wrapperId = `game-wrapper-${index + 2}`;
  const buttonElement = document.getElementById(wrapperId);

  if (buttonElement) {
      buttonElement.addEventListener("click", () => {
          createGameDetailsPage(game.name, game.descriptionlong);
      });
  }
});