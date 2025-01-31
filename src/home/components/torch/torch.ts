import './torch.scss';

const torch = document.getElementById('torch') as HTMLElement;
const torchImg = document.getElementById('torch-lit') as HTMLImageElement;
const torchGlow = document.getElementById('torch-glow') as HTMLElement;

torchGlow.addEventListener('click', function () {
  if (torchImg.src.includes('torch-lit.png')) {
    torchImg.src = './public/images/items/torch-unlit.png';
    torchImg.id = "torch-unlit"; 
    torchGlow.style.opacity = "0%";
  } else {
    torchImg.src = './public/images/items/torch-lit.png'; 
    torchImg.id = "torch-lit"; 
    torchGlow.style.opacity = "65%";
  }
});