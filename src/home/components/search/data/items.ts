const itemsURL = "https://minecraft-api.vercel.app/api/items";

export async function fetchItems() {
  const response = await fetch(itemsURL);
  return await response.json();
}

export const renderItem: (item: Item) => string = (item) => `
  <h2>${item.name}</h2>
  <img src="${item.image}" alt="${item.name}">
  <p>${item.description}</p>
  <p>NamespacedId:${item.namespacedId}</p>
  <p>Stack Size: ${item.stackSize}</p>
  <p>Renewable: ${item.renewable ? "Yes" : "No"}</p>
`;

enum stackSizes {
    one = 1,
    sixteen = 16,
    sixtyfour = 64
}

type Item = {
    name: string;
    namespacedId: string;
    description: string;
    image: string;
    stackSize: stackSizes;
    renewable: boolean;
}