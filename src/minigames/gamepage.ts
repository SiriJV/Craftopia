import { games } from './games';
import './gamepage.scss';

const body = document.querySelector('body');

const gamePageWindow = document.createElement('article');
gamePageWindow.id = "gamepage-window";
body?.appendChild(gamePageWindow);

const h2 = document.createElement('h2');
h2.innerHTML = "Minigames";
gamePageWindow.appendChild(h2);


const xpLevelWrapper = document.createElement('section');
xpLevelWrapper.id = "xp-level-wrapper";
gamePageWindow.appendChild(xpLevelWrapper);

const xpLevel = document.createElement('p');
xpLevel.id = "xp-level";
xpLevel.innerHTML = "0";
xpLevelWrapper.appendChild(xpLevel);

const xpBarWrapper = document.createElement('section');
xpBarWrapper.id = "xp-bar-wrapper";
gamePageWindow.appendChild(xpBarWrapper);

const xpBar = document.createElement('img');
xpBar.src = "../../public/images/items/xp_levels_black.png";
xpBar.id = "xp-bar";
xpBarWrapper.appendChild(xpBar);


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

