import './chest.scss';

const chest = document.getElementById('chest') as HTMLElement;
const chestImg = document.getElementById('chest-closed') as HTMLImageElement;

chest.addEventListener('click', function () {
  if (chestImg.src.includes('chest.png')) {
    chestImg.src = './public/images/items/chest_open.png';
    chestImg.id = "chest-open"; 
  } else {
    chestImg.src = './public/images/items/chest.png';
    chestImg.id = "chest-closed";
  }
});