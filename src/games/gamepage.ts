import './gamepage.scss';

const body = document.querySelector('body');

const gamePageWindow = document.createElement('article');
gamePageWindow.id = "gamepage-window";
body?.appendChild(gamePageWindow);

const h2 = document.createElement('h2');
h2.innerHTML = "Minigames";
gamePageWindow.appendChild(h2);


const gameWrappers = document.createElement('section');
gameWrappers.id = "game-wrappers";
gamePageWindow.appendChild(gameWrappers);



function createDivs(containerId: string, count: number) {
    const container = document.getElementById(containerId);
  
    if (!container) {
      console.error(`Container with id "${containerId}" not found.`);
      return;
    }
  
    for (let i = 0; i < count; i++) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('game-wrapper');
      container.appendChild(newDiv);
    }
  }

  createDivs('game-wrappers', 65);



  const blackBlock = document.createElement('div');
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

