import './home.scss';


  





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