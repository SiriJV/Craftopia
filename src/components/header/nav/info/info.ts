import './info.scss';

import { blackBlock } from '../../../../minigames/gamepage';

const infoButton = document.getElementById('info-button') as HTMLButtonElement;

const renderInfoWindow = (): void => {
    const element = document.createElement('article') as HTMLElement;
    element.id = "info-window";
    const body = document.querySelector('body') as HTMLElement;
    body.appendChild(element);
    element.style.display = "none";
    
    element.innerHTML = `
    <h2>Welcome to Craftopia!</h2>
    <p>Not sure where to start? Just type the name of a block, item, mob, or biome in the search bar!</p>
    <p>Need a break from all that knowledge? Check out the fun minigames section!</p>
    <p>Want to contribute? Visit the <a href="https://github.com/SiriJV/Craftopia" target="_blank">GitHub repository</a> to report bugs, 
    suggest features, or submit pull requests. Contributions are welcome and appreciated!</p>
    `;
}

infoButton.addEventListener('click', async (e) => {
    renderInfoWindow();
    
    const infoWindow = document.getElementById('info-window') as HTMLElement;
    if (infoWindow.style.display === "none") {
        infoWindow.style.display = "block";
        blackBlock.style.display = "block"
    } else {
        infoWindow.style.display = "none";
        blackBlock.style.display = "none";
    }
});