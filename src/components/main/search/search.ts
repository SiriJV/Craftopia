import './search.scss';
import { renderSearchables } from '../result/result';
// import { showLoadingPortal } from '../../loading-portal/loading-portal';
// import { hideLoadingPortal } from '../../loading-portal/loading-portal';
import { favorites } from '../../../state/favorites';

type CraftingRecipe = {
  item: string;
  quantity: number; 
  shapeless: boolean;
  recipe: (string | null)[][] | string[] | null;
};

async function fetchCraftingRecipes(): Promise<CraftingRecipe[]> {
  const response = await fetch('https://minecraft-api.vercel.app/api/crafting-recipes');
  return await response.json();
}

export type SearchableItem = {
  name: string;
  image?: string;
};

type RenderFunction<T> = (data: T) => string;

export function performSearch<T extends SearchableItem>(
  data: T[], 
  render: RenderFunction<T>, 
  wrapperId: string
) {
  const searchInput = document.getElementById("search-input") as HTMLInputElement;
  const resultsContainer = document.getElementById("results-container") as HTMLElement;
  const resultsBox = document.getElementById("info-wrapper") as HTMLElement;

  searchInput.addEventListener("input", async () => {
    const search = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = "";

    // showLoadingPortal('results-container');

    const craftingRecipes = await fetchCraftingRecipes();
    
    let results = data.filter((element) =>
      element.name.toLowerCase().includes(search)
  );
    // hideLoadingPortal();
  
    resultsContainer.innerHTML = "";
    
    if (results.length === 0) {
      resultsContainer.innerHTML = "<p id='no-results'>No search results found.</p>";
    } else {
      results.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.classList.add("result-item");

        listItem.innerHTML = `
          <span>${item.name}</span>
        `;
        resultsContainer.appendChild(listItem);

        listItem.addEventListener("click", () => {
          renderSearchables(item, render, wrapperId);
          const h2 = document.getElementById('info-h2') as HTMLElement;
          h2.innerHTML = `${item.name}`;

          const matchingRecipe = craftingRecipes.find(
            (element) => element.item.toLowerCase() === item.name.toLowerCase()
          );
          
          if (matchingRecipe) {
            const recipeLink = document.createElement("a");
            recipeLink.innerHTML = "See crafting recipe";
            resultsBox.appendChild(recipeLink);
          }

          const addFavoriteButton = document.querySelector('.add-favorite-button') as HTMLElement;
          addFavoriteButton.addEventListener("click", () => {
            favorites.push(item);
            alert("You added an item to favorites!");
          });
        });
      });
    }
  });
}

// <article>
// <h2>${item.name} Crafting Recipe</h2>
// <p>Quantity: ${item.quantity}</p>
// <p>Shapeless: ${item.shapeless}</p>
// <
// </article>