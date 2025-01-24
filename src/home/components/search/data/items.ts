// https://minecraft-api.vercel.app/api/items

// array of:
// name
// string
// The name of the item.

// namespacedId
// string
// The namespaced ID of this item, which is used to identify the item in game when using commands.

// description
// string
// A short description of the item and its uses. Certain items that fall under a common category share a single description.

// image
// string
// A link to a 16x16 image of the item, which is usually displayed inside the player's inventory.

// stackSize
// number
// The maximum number of this item which can fit in a single stack of the player's inventory. Can be 1, 16, or 64.

// renewable
// boolean
// Whether this item can be recreated or reobtained indefinitely in Survival mode.

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