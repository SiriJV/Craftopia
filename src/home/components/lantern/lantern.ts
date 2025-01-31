import './lantern.scss';

const lantern = document.getElementById('lantern') as HTMLElement;
const lanternImg = document.getElementById('lantern-lit') as HTMLImageElement;
const lanternGlow = document.getElementById('lantern-glow') as HTMLElement;

lanternGlow.addEventListener('click', function () {
  if (lanternImg.src.includes('lantern-lit.png')) {
    lanternImg.src = './public/images/items/lantern-unlit-2.png';
    lanternImg.id = "lantern-unlit"; 
    lanternGlow.style.opacity = "0%";
  } else {
    lanternImg.src = './public/images/items/lantern-lit.png'; 
    lanternImg.id = "lantern-lit"; 
    lanternGlow.style.opacity = "65%";
  }
});