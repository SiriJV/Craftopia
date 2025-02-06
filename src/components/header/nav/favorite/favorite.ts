import './favorite.scss';

import { favorites } from '../../../../state/favorites';
import { blackBlock } from '../../../../minigames/gamepage';


const favoritesButton = document.getElementById('favorites-button') as HTMLButtonElement;

export const renderFavoritesWindow = (): void => {
    const element = document.createElement('article') as HTMLElement;
    element.id = "favorites-window";
    const body = document.querySelector('body') as HTMLElement;
    body.appendChild(element);
    element.style.display = "none";

    element.innerHTML = `
    <h2>Your favorites:</h2>
    <ul id="favorites-ul"></ul>
    `;

    const ul = document.getElementById('favorites-ul') as HTMLElement;
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
    }
    
    favorites.forEach(element => {
        const favoriteItem = document.createElement('li') as HTMLElement;
        favoriteItem.classList.add('favorite-list-item');

        favoriteItem.innerHTML = `
        <img src="${element.image}">
        <span>${element.name}</span>
        `;
        ul.appendChild(favoriteItem);

        favoriteItem.addEventListener("click", () => {
            const removeWindow = document.createElement('section') as HTMLElement;
            removeWindow.id = "remove-favorite-window";
            const removeQuestion = document.createElement('p') as HTMLElement;
            removeQuestion.innerHTML = "Do you want to remove this item from favorites?";
            removeWindow.appendChild(removeQuestion);

            const body = document.querySelector('body') as HTMLElement;
            body.appendChild(removeWindow);
            
            const exitButton = document.createElement('button') as HTMLButtonElement;
            exitButton.innerHTML = "No";
            removeWindow.appendChild(exitButton);
            exitButton.addEventListener("click", () => {
                removeWindow.style.display = "none";
            })
            
            const removeButton = document.createElement('button') as HTMLButtonElement;
            removeButton.innerHTML = "Yes";
            removeWindow.appendChild(removeButton);
            removeButton.addEventListener("click", () => {
                const index = favorites.indexOf(element);
                favorites.splice(index, 1);
                removeWindow.style.display = "none";
                renderFavoritesWindow();
            });
        });
    });

    if (favorites.length === 0) {
        const noFavoritesMessage = document.createElement('p') as HTMLElement;
        noFavoritesMessage.innerHTML = "Looks like you haven't added any favorites yet.";
        ul.appendChild(noFavoritesMessage);
    }
}

favoritesButton.addEventListener('click', async (e) => {
    renderFavoritesWindow();
    
    const favoritesWindow = document.getElementById('favorites-window') as HTMLElement;
    if (favoritesWindow.style.display === "none") {
        favoritesWindow.style.display = "block";
        blackBlock.style.display = "block"
    } else {
        favoritesWindow.style.display = "none";
        blackBlock.style.display = "none";
    }
});