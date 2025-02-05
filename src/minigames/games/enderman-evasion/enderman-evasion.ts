import './enderman-evasion.scss';

// tar emot objektet
// name
// long-description
// import { games } from '../../games';

export function createGamePage (name: string, descriptionLong: string) {
    const mainPage = document.createElement('article') as HTMLElement;

    const gameName = document.createElement('h2') as HTMLElement;
    gameName.innerHTML = `${name}`;

    const gameDescription = document.createElement('p') as HTMLElement;
    gameDescription.innerHTML = `${descriptionLong}`;

    const exitButton = document.createElement('button') as HTMLButtonElement;
    exitButton.innerHTML = "Exit";
    exitButton.addEventListener("click", () => {
        mainPage.innerHTML = "";
    });

    const startButton = document.createElement('button') as HTMLButtonElement;
    startButton.innerHTML = "Play";
    startButton.addEventListener("click", () => {
        // function that starts game
        mainPage.innerHTML = "";
    });
}