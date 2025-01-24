import './dropdown.scss';

const options = [
    { src: "https://minecraft-api.vercel.app/images/items/grass_block.png", alt: "Blocks" },
    { src: "https://minecraft-api.vercel.app/images/items/knowledge_book.png", alt: "Items" },
    { src: "https://minecraft-api.vercel.app/images/items/oak_sapling.png", alt: "Biomes" },
    { src: "https://minecraft-api.vercel.app/images/items/creeper_spawn_egg.png", alt: "Mobs" },
  ];
  
//   const dropdown = document.querySelector('.custom-dropdown');
//   const selectedButton = dropdown.querySelector('.dropdown-selected img') as HTMLImageElement;
//   const optionsList = dropdown.querySelector('.dropdown-options') as HTMLElement;
  
//   // populera dropdown
//   function populateDropdown() {
//     const selectedAlt = selectedButton.alt;
//     optionsList.innerHTML = '';
//     options.forEach(option => {
//       if (option.alt !== selectedAlt) {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `<img src="${option.src}" alt="${option.alt}" class="dropdown-option">`;
//         listItem.classList.add('list-item');
//         optionsList.appendChild(listItem);
//       }
//     });
//   }
  
//   // om dropdown syns eller inte
//   dropdown.querySelector('.dropdown-selected').addEventListener('click', () => {
//     optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
//   });
  
//   // när man trycker dropdown
//   optionsList.addEventListener('click', (e) => {
//     if (e.target.tagName === 'IMG') {
//       selectedButton.src = e.target.src;
//       selectedButton.alt = e.target.alt;
//       populateDropdown();
//       optionsList.style.display = 'none';
  
//       dropdownButton.classList.toggle('rotated');
//     }
//   });
  
// populateDropdown();
  


// const dropdownButton = document.querySelector('.dropdown-selected');

// dropdownButton.addEventListener('click', () => {
//   dropdownButton.classList.toggle('rotated');
// });

const dropdown = document.querySelector('.custom-dropdown') as HTMLElement;
const selectedButton = dropdown.querySelector('.dropdown-selected img') as HTMLImageElement;
const optionsList = dropdown.querySelector('.dropdown-options') as HTMLElement;

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

// när man trycker dropdown
optionsList.addEventListener('click', (e) => {
  const target = e.target as HTMLImageElement;
  if (target.tagName === 'IMG') {
    selectedButton.src = target.src;
    selectedButton.alt = target.alt;
    populateDropdown();
    optionsList.style.display = 'none';

    dropdownButton.classList.toggle('rotated');
  }
});

populateDropdown();

const dropdownButton = document.querySelector('.dropdown-selected') as HTMLElement;

dropdownButton.addEventListener('click', () => {
  dropdownButton.classList.toggle('rotated');
});
