import './enderman-evasion.scss';

// tar emot objektet
// name
// long-description
import { games } from '../../games';

// export function createGamePage (name: string, descriptionLong: string) {
//     const mainPage = document.createElement('article') as HTMLElement;
//     mainPage.id = `${name}-game-page`;

//     const gameName = document.createElement('h2') as HTMLElement;
//     gameName.innerHTML = `${name}`;
//     mainPage.appendChild(gameName);

//     const gameDescription = document.createElement('p') as HTMLElement;
//     gameDescription.innerHTML = `${descriptionLong}`;
//     mainPage.appendChild(gameDescription);

//     const exitButton = document.createElement('button') as HTMLButtonElement;
//     exitButton.innerHTML = "Exit";
//     exitButton.appendChild(exitButton);
//     exitButton.addEventListener("click", () => {
//         mainPage.style.display = "none";
//     });

//     const startButton = document.createElement('button') as HTMLButtonElement;
//     startButton.innerHTML = "Play";
//     mainPage.appendChild(startButton);
//     startButton.addEventListener("click", () => {
//         mainPage.style.display = "none";
//         console.log("function to start game goes here");
//     });
// }


export function createGamePage(name: string, descriptionLong: string): void {
    const mainPage = document.createElement('article');
    mainPage.id = `${name.replace(/\s+/g, "-").toLowerCase()}-game-page`;
    mainPage.classList.add('game-page');

    const gameName = document.createElement('h2');
    gameName.textContent = name;
    mainPage.appendChild(gameName);

    const gameDescription = document.createElement('p');
    gameDescription.textContent = descriptionLong;
    mainPage.appendChild(gameDescription);

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('game-page-buttons');

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
        console.log(`Starting the game: ${name}`);
        mainPage.remove();
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
            createGamePage(game.name, game.descriptionlong);
        });
    }
});
