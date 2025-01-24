import './lantern.scss';

const lantern = document.getElementById('lantern') as HTMLElement;
const lanternImg = document.getElementById('lantern-lit') as HTMLImageElement;

lantern.addEventListener('click', function () {
  if (lanternImg.src.includes('lantern-lit.png')) {
    lanternImg.src = './public/images/items/lantern-unlit.png';
    lanternImg.id = "lantern-unlit"; 
  } else {
    lanternImg.src = './public/images/items/lantern-lit.png'; 
    lanternImg.id = "lantern-lit"; 
  }
});