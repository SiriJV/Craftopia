import './dropdown.scss';

import { fetchItems } from "../data/items";
import { fetchBlocks } from "../data/blocks";
import { biomes } from "../data/biomes";
import { mobs } from "../data/mobs";
import { performSearch } from "../search";
import { renderItem } from "../data/items"; 
import { renderBlock } from "../data/blocks";
import { renderBiome } from "../data/biomes";
import { renderMob } from "../data/mobs";

const options = [
    { src: "https://minecraft-api.vercel.app/images/items/grass_block.png", alt: "Blocks" },
    { src: "https://minecraft-api.vercel.app/images/items/knowledge_book.png", alt: "Items" },
    { src: "https://minecraft-api.vercel.app/images/items/oak_sapling.png", alt: "Biomes" },
    { src: "https://minecraft-api.vercel.app/images/items/creeper_spawn_egg.png", alt: "Mobs" },
  ];

const dropdown = document.querySelector('.custom-dropdown') as HTMLElement;
const selectedButton = dropdown.querySelector('.dropdown-selected img') as HTMLImageElement;

// populera dropdown
function populateDropdown() {
  const selectedAlt = selectedButton.alt;
  optionsList.innerHTML = '';
  options.forEach(option => {
    if (option.alt !== selectedAlt) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<img src="${option.src}" alt="${option.alt}" class="dropdown-option">`;
      listItem.classList.add('list-item');
      optionsList.appendChild(listItem);
    }
  });
}

// om dropdown syns eller inte
dropdown.querySelector('.dropdown-selected')!.addEventListener('click', () => {
  optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
});

const optionsList = dropdown.querySelector('.dropdown-options') as HTMLElement;

export let selectedCategory = "Blocks";

optionsList.addEventListener('click', async (e) => {
  const target = e.target as HTMLImageElement;
  if (target.tagName === 'IMG') {
    selectedButton.src = target.src;
    selectedButton.alt = target.alt;
    populateDropdown();
    optionsList.style.display = 'none';
    dropdownButton.classList.toggle('rotated');
    
    selectedCategory = target.alt;
    const h2 = document.getElementById('search-category-h2') as HTMLElement;
    h2.innerHTML = target.alt;

    switch (selectedCategory) {
      case "Items":
        performSearch(await fetchItems(), renderItem, "minecraft-panel-two");
        break;
        case "Blocks":
          performSearch(await fetchBlocks(), renderBlock, "minecraft-panel-two");
        break;
      case "Biomes":
        performSearch(biomes, renderBiome, "minecraft-panel-two");
        break;
        case "Mobs":
        performSearch(mobs, renderMob, "minecraft-panel-two");
        break;
    }
    console.log(selectedCategory);
    searchInput.value = "";
    resultsContainer.innerHTML = "";
  }
});

optionsList.style.display = 'none';
populateDropdown();

const searchInput = document.getElementById('search-input') as HTMLInputElement;
const resultsContainer = document.getElementById('results-container') as HTMLElement;

const dropdownButton = document.querySelector('.dropdown-selected') as HTMLElement;

dropdownButton.addEventListener('click', () => {
  dropdownButton.classList.toggle('rotated');
});
