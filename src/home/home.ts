function randomizeTextColors() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFC300", "#DAF7A6"];
    const elements = document.querySelectorAll<HTMLElement>(".color-change");
  
    setInterval(() => {
      elements.forEach(element => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        element.style.color = randomColor;
      });
    }, 1000);
  }
  
  randomizeTextColors();
  





// async function fetchHeadImage() {
//     const response = await fetch('/api/skins/TechnoBlade/head/0.0/0/10');
//     console.log(response);
//     //const data = await response.json();
//     //console.log(data);
//     return response;
// }

// async function setHeadImage() {
//     const imageUrl = await fetchHeadImage();
//     if (imageUrl) {
//         const pigHead = document.getElementById('pig-head') as HTMLImageElement;
//       //pigHead.src = imageUrl;
//     }
//   }
  
// fetchHeadImage();
//setHeadImage();

async function fetchHeadImage() {
    const response = await fetch("/api/skins/TechnoBlade/head/0.0/0/10/json");
    const data = await response.json();
    return data.head;
}

async function setHeadImage() {
    const imageUrl = await fetchHeadImage();
    if (imageUrl) {
        const pigHead = document.getElementById("pig-head") as HTMLImageElement;
        pigHead.src = "data:image/jpeg;base64, " + imageUrl;
    }
}

setHeadImage();