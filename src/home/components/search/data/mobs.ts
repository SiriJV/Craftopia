// category, name, description, screenshot

enum MobCategories {
    passiveMobs = "Passive mobs",
    neutralMobs = "Neutral mobs",
    hostileMobs = "Hostile mobs",
    bossMobs = "Boss mobs"
}

type Mob = {
    category: MobCategories;
    name: string;
    description: string;
    screenshot: string;
}

const mobs: Mob[] = [
    {
        category: MobCategories.passiveMobs,
        name: "Allay",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Armadillo",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Axolotl",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Bat",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Camel",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Cat",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Chicken",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Cod",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Cow",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Donkey",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Frog",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Glow Squid",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Horse",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Mooshroom",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Mule",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Ocelot",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Parrot",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Pig",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Pufferfish",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Rabbit",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Salmon",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Sheep",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Skeleton Horse",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Sniffer",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Snow Golem",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Squid",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Strider",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Tadpole",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Tropical Fish",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Turtle",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Villager",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.passiveMobs,
        name: "Wandering Trader",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Bee",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Cave Spider",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Dolphin",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Drowned",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Enderman",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Fox",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Goat",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Irom Golem",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Llama",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Panda",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Piglin",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Polar Bear",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Spider",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Trader Llama",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Wolf",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.neutralMobs,
        name: "Zombified Piglin",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Blaze",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Bogged",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Breeze",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Creaking",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Creeper",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Elder Guardian",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Endermite",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Evoker",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Ghast",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Guardian",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Hoglin",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Husk",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Magma Cube",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Phantom",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Piglin Brute",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Pillager",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Ravager",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Shulker",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Silverfish",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Skeleton",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Slime",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Stray",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Vex",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Vindicator",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Warden",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Witch",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Wither Skeleton",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Zoglin",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Zombie",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.hostileMobs,
        name: "Zombie Villager",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.bossMobs,
        name: "Ender Dragon",
        description: "",
        screenshot: ""
    },
    {
        category: MobCategories.bossMobs,
        name: "Wither",
        description: "",
        screenshot: ""
    },
]