export const lowercaseFirstLetter = (str: string): string => {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

export function removeLastLetter(text: string): string {
    return text.slice(0, -1);
}

export function randomizeTextColors() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFC300", "#DAF7A6"];
    const elements = document.querySelectorAll<HTMLElement>(".color-change");
    console.log(elements.length);
    
    setInterval(() => {
      elements.forEach(element => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        element.style.color = randomColor;
      });
    }, 1000);
  }

  document.addEventListener("DOMContentLoaded", () => {
    randomizeTextColors();
  });
  
    
//   randomizeTextColors();