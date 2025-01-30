import './search.scss';
import { displayContent } from './result/result';


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
  const resultsBox = document.getElementById("minecraft-panel-two") as HTMLElement;

  searchInput.addEventListener("input", async () => {
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = "";

    const craftingRecipes = await fetchCraftingRecipes();

    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
    
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