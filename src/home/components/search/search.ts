import './search.scss';
import { displayContent } from './result/result';
import { showLoadingPortal } from '../loading-portal/loading-portal';
import { hideLoadingPortal } from '../loading-portal/loading-portal';



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

type SearchableItem = {
  name: string;
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
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = "";

    showLoadingPortal('results-container');

    const craftingRecipes = await fetchCraftingRecipes();
    
    let filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(query)

  );
    hideLoadingPortal();
  

    resultsContainer.innerHTML = "";
    
    if (filteredResults.length === 0) {
      resultsContainer.innerHTML = "<p>No search results found.</p>";
    } else {
      filteredResults.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.classList.add("result-item");

        listItem.innerHTML = `
          <span>${item.name}</span>
        `;
        resultsContainer.appendChild(listItem);

        listItem.addEventListener("click", () => {
          displayContent(item, render, wrapperId);
          const h2 = document.getElementById('info-h2') as HTMLElement;
          h2.innerHTML = `${item.name}`;

          const matchingRecipe = craftingRecipes.find(
            (recipe) => recipe.item.toLowerCase() === item.name.toLowerCase()
          );
          
          if (matchingRecipe) {
            const recipeLink = document.createElement("a");
            recipeLink.innerHTML = "See crafting recipe";

            console.log(matchingRecipe);
            resultsBox.appendChild(recipeLink);
          }
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