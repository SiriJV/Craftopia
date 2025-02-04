export const lowercaseFirstLetter = (str: string): string => {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

export const uppercaseFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function removeLastLetter(text: string): string {
    return text.slice(0, -1);
}

export function randomizeTextColors() {
    const colors = ["#2CBAA8", "#47A036", "#DEB12D", "#B4684D", "#CECACA", "#E3D4D1", "#DDD605", "#FFFF55", "#FF55FF", "#FF5555", "#55FFFF", "#55FF55", "#FFAA00", "#AA00AA", "#00AAAA", "#00AA00"];
    const elements = document.querySelectorAll<HTMLElement>(".color-change");
    
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