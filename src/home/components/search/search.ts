import './search.scss';
import { displayContent } from './result/result';

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

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    resultsContainer.innerHTML = "";

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
        });
      });
    }
  });
}