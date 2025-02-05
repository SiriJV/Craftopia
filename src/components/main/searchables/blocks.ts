export const renderBlock: (block: Block) => string = (block) => `
  <img class="add-favorite-button" src="https://minecraft-api.vercel.app/images/items/nether_star.gif">
  <img src="${block.image}" alt="${block.name}">
  <p>${block.description}</p>
  <p>NamespacedId: ${block.namespacedId}</p>
  <p>Transparent: ${block.transparent ? "yes" : "no"}</p>
  <p>Luminence: ${block.luminance}</p>
  <p>Blast resistance: ${block.blastResistance}</p>
  <p>Flammable: ${block.flammable ? "yes" : "no"}</p>
  <p>Tool: ${block.tool}</p>
`;

type Block = {
    name: string;
    namespacedId: string;
    description: string;
    image: string;
    transparent: boolean;
    luminance: number;
    blastResistance: number;
    flammable: boolean;
    tool: string;
}

const blocksURL = "https://minecraft-api.vercel.app/api/blocks";

export async function fetchBlocks() {
  const response = await fetch(blocksURL);
  return await response.json();
}