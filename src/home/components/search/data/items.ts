// https://minecraft-api.vercel.app/api/items

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