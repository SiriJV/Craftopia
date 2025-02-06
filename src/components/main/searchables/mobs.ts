export const renderMob = (mob: Mob): string => `
  <img class="add-favorite-button" src="https://minecraft-api.vercel.app/images/items/nether_star.gif">
  <img src="${mob.screenshot}" alt="${mob.name}">
  <p>Category: ${mob.category}</p>
  <p>${mob.description}</p>
`;

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

export const mobs: Mob[] = [
    {
        category: MobCategories.passiveMobs,
        name: "Allay",
        description: "An allay is a flying passive mob that collects and delivers items for any player that gives it something or any note block it hears recently playing. It is considered a positive counterpart to the vex.",
        screenshot: "https://minecraft.wiki/images/AllayFace.png?f466a"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Armadillo",
        description: "An armadillo is a passive mob found in badlands and savannas. It rolls up in response to being hurt or being near undead mobs or players that are sprinting or mounted. While in this state, it takes less damage. It also repels spiders and cave spiders away from it. It is the only source of armadillo scutes, which the armadillo sheds over time, as well as when it is brushed.",
        screenshot: "https://minecraft.wiki/images/ArmadilloFace.png?18991"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Axolotl",
        description: "An axolotl is a passive aquatic mob found in lush caves that hunts most other aquatic mobs, and can assist players with aquatic combat and grant them Regeneration. They can also be carried around in a bucket.",
        screenshot: "https://minecraft.wiki/images/AxolotlFace.png?2060f"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Bat",
        description: "A bat is a flying ambient passive mob that spawns in dark areas.",
        screenshot: "https://minecraft.wiki/images/BatFace.png?2b912"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Camel",
        description: "A camel is a passive mob found in desert villages that can be saddled and ridden by up to two players at once. It is tall enough that its riders cannot be attacked from the ground by most melee-attacking hostile mobs.",
        screenshot: "https://minecraft.wiki/images/CamelFace.png?36554"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Cat",
        description: "A cat is a passive mob found in villages and swamp huts. They can be tamed and used to repel creepers and phantoms.",
        screenshot: "https://minecraft.wiki/images/CatFace.png?613ec"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Chicken",
        description: "A chicken is a passive mob found in most grassy biomes, and the main source of raw chicken, feathers and eggs. In Java Edition 1.21.5 and Bedrock Edition 1.21.70, they have three variants based on the temperature of the biome they spawn in.",
        screenshot: "https://minecraft.wiki/images/ChickenFace.png?a6dad"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Cod",
        description: "Cod are common bucketable aquatic passive mobs found in oceans, a source of raw cod and, occasionally, bones or bone meal.",
        screenshot: "https://minecraft.wiki/images/CodBody.png?3e0b1"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Cow",
        description: "A cow is a passive mob found in most grassy biomes and are a source of leather, beef and milk. In Java Edition 1.21.5 and Bedrock Edition 1.21.70, they have three variants based on the temperature of the biome they spawn in.",
        screenshot: "https://minecraft.wiki/images/CowFace.png?edd19"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Donkey",
        description: "Donkeys are a type of mob similar to horses that, when tamed, can be ridden and equipped with chests.",
        screenshot: "https://minecraft.wiki/images/DonkeyFace.png?04c82"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Frog",
        description: "A frog is a passive mob found in swamps. Frogs eat small slimes and magma cubes. A frog can produce one of three types of froglights from eating magma cubes, depending on the type of frog. The type of frog is dependent on their biome.",
        screenshot: "https://minecraft.wiki/images/FrogFace.png?2d191"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Glow Squid",
        description: "The glow squid is an aquatic passive mob found in dark underwater areas, typically in ocean depths, ravines and underground lakes. The glow squid is a variant of the squid. It has an aqua luminescent texture. They were ported to vanilla Minecraft from Minecraft Earth.",
        screenshot: "https://minecraft.wiki/images/GlowSquidFace.png?d1f70"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Horse",
        description: "Horses are passive mobs that can be ridden when tamed and saddled.",
        screenshot: "https://minecraft.wiki/images/HorseFace.png?d9817"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Mooshroom",
        description: "A mooshroom is a mushroom-covered variant of a cow exclusive to the rare mushroom fields biome.",
        screenshot: "https://minecraft.wiki/images/MooshroomFace.png?a82d6"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Mule",
        description: "Mules are infertile offspring of horses and donkeys that, when tamed, can be ridden and equipped with chests.",
        screenshot: "https://minecraft.wiki/images/MuleFace.png?b538f"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Ocelot",
        description: "An ocelot is a passive mob found in jungles.",
        screenshot: "https://minecraft.wiki/images/OcelotFace.png?fa95a"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Parrot",
        description: "A parrot is a tameable passive mob that spawns in jungle biomes. Parrots imitate sounds of nearby monsters and can perch on the player's shoulders.",
        screenshot: "https://minecraft.wiki/images/ParrotFace.png?db21f"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Pig",
        description: "A pig is a passive mob found commonly in most grassy biomes. Adult pigs are a source of porkchops and, as long as the pig is an adult, can be ridden using a saddle. In Java Edition 1.21.5 and Bedrock Edition 1.21.70, they have three variants based on the temperature of the biome they spawn in.",
        screenshot: "https://minecraft.wiki/images/PigFace.png?ffe16"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Pufferfish",
        description: "Pufferfish are bucketable aquatic mobs found in oceans. Although they never seek out mobs to attack, they defensively inflate themselves when approached too closely by players, axolotls, or non-aquatic mobs, dealing damage and inflicting Poison on them.",
        screenshot: "https://minecraft.wiki/images/PufferfishFace.png?aa40a"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Rabbit",
        description: "A rabbit is an uncommon passive mob and is a source of rabbit's foot, rabbit hide, and raw rabbit.",
        screenshot: "https://minecraft.wiki/images/RabbitFace.png?b3659"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Salmon",
        description: "Salmon are common bucketable aquatic passive mobs found in oceans and rivers that are a source of raw salmon and, occasionally, bones or bone meal.",
        screenshot: "https://minecraft.wiki/images/SalmonBody.png?731bc"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Sheep",
        description: "A sheep is a common passive mob that supplies wool and raw mutton and is found in many of the grassy biomes.",
        screenshot: "https://minecraft.wiki/images/SheepFace.png?e8d32"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Skeleton Horse",
        description: "A skeleton horse is an undead variant of the horse. It sometimes spawns when lightning strikes, causing four horsemen to appear if the trap horse is approached.",
        screenshot: "https://minecraft.wiki/images/SkeletonHorseFace.png?94e63"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Sniffer",
        description: "A sniffer is a passive mob that does not spawn naturally. It spawns only by hatching from sniffer eggs. It sniffs for torchflower and pitcher plant seeds, seeking and digging out the seeds in dirt, grass, and moss blocks.",
        screenshot: "https://minecraft.wiki/images/SnifferFace.png?e6eb7"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Snow Golem",
        description: "A snow golem is a buildable passive mob that throws snowballs at monsters, which provokes them into attacking it. Depending on the biome temperature it also either produces a trail of snow, or takes heat damage and dies.",
        screenshot: "https://minecraft.wiki/images/SnowGolemFace.png?a1eae"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Squid",
        description: "A squid is a common aquatic passive mob that spawns in rivers and oceans.",
        screenshot: "https://minecraft.wiki/images/SquidFace.png?42150"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Strider",
        description: "Striders are passive mobs found in the Nether. They can walk on lava and be saddled by the player, and they can be controlled via a warped fungus on a stick.",
        screenshot: "https://minecraft.wiki/images/StriderFace.png?7ea17"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Tadpole",
        description: "A tadpole is a bucketable aquatic baby passive mob hatched from frogspawn. They mature into one of the three frog variants depending on the biome in which they mature.",
        screenshot: "https://minecraft.wiki/images/TadpoleFace.png?93f71"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Tropical Fish",
        description: "Tropical fish are common bucketable aquatic passive mobs found in oceans, mangrove swamps and lush caves. There are 2,700 naturally occurring variants of tropical fish of different colors and shapes with unique names in Bedrock Edition and 3,072 in Java Edition.",
        screenshot: "https://minecraft.wiki/images/TropicalFishBody.png?09ac1"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Turtle",
        description: "Turtles are passive mobs found in beach biomes. They can be bred with seagrass and lay turtle eggs. They are the only source of turtle scutes, which drop from baby turtles when they mature into adults.",
        screenshot: "https://minecraft.wiki/images/TurtleFace.png?3fb35"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Villager",
        description: "Villagers are passive mobs that inhabit villages, work at their professions, breed, and interact with each other. Their outfit varies according to their occupation and biome, and a player can trade with them using emeralds as currency.",
        screenshot: "https://minecraft.wiki/images/VillagerFace.png?c2d14"
    },
    {
        category: MobCategories.passiveMobs,
        name: "Wandering Trader",
        description: "The wandering trader is a passive mob that randomly spawns near the player. It can trade, making natural items more available, less dangerous to obtain, and in some cases, renewable.",
        screenshot: "https://minecraft.wiki/images/WanderingTraderFace.png?11317"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Bee",
        description: "Bees are flying neutral mobs that live in bee nests and beehives. Bees pollinate flowers and, when they do, add honey to their home when they return to it. When full, bee nests or beehives can be harvested with shears for honeycombs or glass bottles for honey bottles. If provoked by being attacked or breaking or harvesting their hive or nest without the correct precautions, bees suicidally attack in a swarm.",
        screenshot: "https://minecraft.wiki/images/BeeFace.png?7220c"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Cave Spider",
        description: "Cave spiders are a smaller variant of the spider that inflict Poison with their attacks. They are exclusively spawned by monster spawners found in mineshafts, and trial spawners found in trial chambers.",
        screenshot: "https://minecraft.wiki/images/CaveSpiderFace.png?10216"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Dolphin",
        description: "Dolphins are neutral mobs that live in non-frozen oceans, they grant a speed boost to players that swim near them and follow the player while swimming.",
        screenshot: "https://minecraft.wiki/images/DolphinFace.png?02818"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Drowned",
        description: "Drowned are neutral mobs and common underwater zombie variants that spawn in oceans, rivers and dripstone caves, or when zombies drown. They usually attack through melee attacks, but may also come armed with tridents that they throw. They are the only renewable source of copper.",
        screenshot: "https://minecraft.wiki/images/DrownedFace.png?44966"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Enderman",
        description: "An enderman is a tall neutral mob found in all three dimensions. It becomes hostile to players that damage it or look directly at its face, using its arms to attack. Endermen teleport erratically, as well as away from dangers such as lava, projectiles, and water. They also occasionally pick up and move certain blocks.",
        screenshot: "https://minecraft.wiki/images/EndermanFace.png?8ebeb"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Fox",
        description: "A fox is a neutral mob that spawns in cold and snowy forested biomes. A fox can carry a single item in its mouth, but foxes prefer food to other items.",
        screenshot: "https://minecraft.wiki/images/FoxFace.png?ed409"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Goat",
        description: "A goat is a neutral mob found in certain mountainous biomes. Goats can jump especially high and ram mobs. They are a source of goat horns and milk.",
        screenshot: "https://minecraft.wiki/images/GoatFace.png?81f5e"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Irom Golem",
        description: "An iron golem is a buildable neutral mob that attacks monsters with its arms, knocking them into the air. Iron golems created by villagers or spawned in villages patrol their village, and may attack players that attack it or have a low popularity or reputation with their village.",
        screenshot: "https://minecraft.wiki/images/IronGolemFace.png?e15db"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Llama",
        description: "A llama is a tamable neutral mob used to transport large shipments of items.",
        screenshot: "https://minecraft.wiki/images/LlamaFace.png?7c63d"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Panda",
        description: "A panda is a rare neutral mob that resides in jungles. Certain aspects of a panda's behavior and appearance vary depending on its personality.",
        screenshot: "https://minecraft.wiki/images/PandaFace.png?d43c5"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Piglin",
        description: "A piglin is a neutral mob found in the Nether. It is hostile to players unless they wear at least one piece of golden armor. It can be given gold ingots to barter for various items. It wields either a golden sword or a crossbow, and uses either melee or ranged attacks, respectively. Baby piglins do not grow up, never hold weapons or attack, and take gold without giving anything in return.",
        screenshot: "https://minecraft.wiki/images/thumb/PiglinFace.png/94px-PiglinFace.png?f3a63"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Polar Bear",
        description: "Polar bears are neutral mobs that live in icy biomes.",
        screenshot: "https://minecraft.wiki/images/PolarBearFace.png?6a217"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Spider",
        description: "A spider is a neutral mob that attacks the player in dark areas or in retaliation. Spiders attack by lunging at their target and biting them, and can also climb walls.",
        screenshot: "https://minecraft.wiki/images/SpiderFace.png?128d3"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Trader Llama",
        description: "A trader llama is a llama variant that spawns with wandering traders.",
        screenshot: "https://minecraft.wiki/images/TraderLlama_Face.png?a1740"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Wolf",
        description: "A wolf is a neutral mob that can be tamed using bones. Tamed wolves defend their owners against attackers and can assist them in combat.",
        screenshot: "https://minecraft.wiki/images/WolfFace.png?1f64d"
    },
    {
        category: MobCategories.neutralMobs,
        name: "Zombified Piglin",
        description: "Zombified piglins, or colloquially zombie pigmen, are neutral, undead variants of piglins that inhabit the Nether. Zombified piglins normally ignore players, but if one is attacked, it and all zombified piglins in the vicinity become enraged and attack the aggressor with their golden swords.",
        screenshot: "https://minecraft.wiki/images/thumb/ZombifiedPiglinFace.png/94px-ZombifiedPiglinFace.png?f1497"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Blaze",
        description: "A blaze is a hostile mob found in nether fortresses, and the only source of blaze rods. A blaze attacks by floating upward and shooting fireballs at its target in volleys of three at a time. It can also attack its target in melee range with its spinning rods.",
        screenshot: "https://minecraft.wiki/images/BlazeFace.png?f7846"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Bogged",
        description: "A bogged is a skeleton variant covered in moss and mushrooms that spawns in swamps and mangrove swamps. Bogged behave similarly to skeletons, but attack at a slower rate and shoot tipped arrows of Poison.",
        screenshot: "https://minecraft.wiki/images/BoggedFace.png?9054f"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Breeze",
        description: "A breeze is a hostile mob spawned by certain trial spawners found in trial chambers. It moves via jumping large distances when attacking, attacks by firing wind charges, and deflects all projectiles that hit it except wind charges. Breezes are the only source of breeze rods, which are dropped upon death.",
        screenshot: "https://minecraft.wiki/images/BreezeFace.png?b2225"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Creaking",
        description: "A creaking is a hostile mob spawned by active creaking hearts at night or during thunderstorms. It moves and attacks (via headbutting) only when no Survival/Adventure mode players are looking at it, and otherwise remains completely stationary and motionless. It is protected from all damage by the creaking heart that spawned it; breaking the creaking heart instantly kills the creaking. Hitting a protected creaking causes resin clumps to be placed on the wood near its linked creaking heart.",
        screenshot: "https://minecraft.wiki/images/thumb/CreakingFace.png/87px-CreakingFace.png?d73a1"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Creeper",
        description: "A creeper is a common hostile mob that quietly approaches players and then explodes, which can destroy blocks and deal massive amounts of damage. Creepers are a major source of gunpowder as well as the only way to obtain most music discs. When struck by lightning, a creeper becomes a charged creeper, which amplifies its explosion power and enables mob heads to be obtained from piglins, zombies, skeletons and other creepers it kills. Due to its distinctive appearance and unique and destructive method of attack, the creeper has become one of the most iconic mobs of Minecraft, being featured in promotional material and merchandise.",
        screenshot: "https://minecraft.wiki/images/CreeperFace.png?bd6b1"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Elder Guardian",
        description: "An elder guardian is a stronger and larger variant of the guardian, and the largest aquatic mob. It attacks the same way as a normal guardian, and it also applies Mining Fatigue to players in a large radius around itself. They are only found in ocean monuments; three of them generate in each one.",
        screenshot: "https://minecraft.wiki/images/ElderGuardianFace.png?37a74"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Endermite",
        description: "Endermites are small hostile mobs similar to silverfish that sometimes spawn when a player throws an ender pearl. They attack by dealing melee damage. Endermen are hostile toward endermites.",
        screenshot: "https://minecraft.wiki/images/EndermiteFace.png?81aeb"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Evoker",
        description: "An evoker is a spell-casting illager that can be found in woodland mansions and as part of raids. They are the only source of totems of undying. Evokers use two spells to attack: one that summons armor-piercing fangs and one that summons vexes, which is the one of the only 2 times vexes can spawn (along with spawn eggs).",
        screenshot: "https://minecraft.wiki/images/EvokerFace.png?e5d9f"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Ghast",
        description: "Ghasts are large, floating, ghost-like hostile mobs found in the Nether, and the only source of ghast tears. Ghasts wander aimlessly and shoot explosive fireballs at players, which can be hit back to kill them instantly upon direct impact.",
        screenshot: "https://minecraft.wiki/images/GhastFace.png?d79ae"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Guardian",
        description: "Guardians are hostile mobs that spawn in and around ocean monuments. They attack with a slow-charging laser beam, and inflict retaliatory damage when damaged by a melee attack.",
        screenshot: "https://minecraft.wiki/images/GuardianFace.png?2168d"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Hoglin",
        description: "A hoglin is a breedable hostile mob found in the Nether, and a source of porkchops and leather. Hoglins are repelled by warped fungi that is placed in the world as well as active nether portals and respawn anchors. It attacks by thrusting its tusks upward, which can also launch its target a short distance into the air. Baby hoglins behave similarly, but have a much weaker attack (the weakest attack in the game) with normal knockback, and flee when hit.",
        screenshot: "https://minecraft.wiki/images/HoglinFace.png?92eb0"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Husk",
        description: "A husk is a variant of zombie that spawns in deserts. They function similarly to zombies, except they do not burn in sunlight, and they inflict Hunger with their unarmed attacks.",
        screenshot: "https://minecraft.wiki/images/HuskFace.png?8a09c"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Magma Cube",
        description: "A magma cube is a hostile mob found in the Nether. A magma cube behaves similarly to a slime, but is fireproof, jumps higher and less often, and deals more damage.",
        screenshot: "https://minecraft.wiki/images/MagmaCubeFace.png?a7eb5"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Phantom",
        description: "Phantoms are flying undead hostile mobs that spawn in the night sky when the player has not laid in a bed or died for three or more in-game days. They attack by diving at the player from the sky to bite them.",
        screenshot: "https://minecraft.wiki/images/PhantomFace.png?b850a"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Piglin Brute",
        description: "A piglin brute is a hostile, stronger variant of piglin. It wields a golden axe and appears in all types of bastion remnants. Unlike piglins, piglin brutes do not barter, retreat, or get diverted by gold; instead, they always charge at a player on sight.",
        screenshot: "https://minecraft.wiki/images/thumb/PiglinBruteFace.png/94px-PiglinBruteFace.png?f91ae"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Pillager",
        description: "A pillager is an illager armed with a crossbow found in wandering patrols, in pillager outposts, or as a participant in raids. It attacks by firing arrows at the player.",
        screenshot: "https://minecraft.wiki/images/PillagerFace.png?7f2f5"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Ravager",
        description: "A ravager is a large hostile mob that only spawns alongside illagers in raids. It attacks players, adult villagers, wandering traders and iron golems by charging, biting, and roaring at them. A ravager can also get stunned when blocked by a shield.",
        screenshot: "https://minecraft.wiki/images/RavagerFace.png?c6381"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Shulker",
        description: "A shulker is a box-shaped hostile mob found in end cities. It hides in its shell to protect itself and blend in with its surroundings, and attacks by shooting homing bullets that inflict Levitation. It is the only source of shulker shells, which are used to craft shulker boxes.",
        screenshot: "https://minecraft.wiki/images/ShulkerFace.png?ded82"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Silverfish",
        description: "Silverfish are small hostile mobs that infest stone and deepslate blocks in mountains, strongholds, igloo basements and woodland mansions. They crawl at their targets to bite them, and attacking them incites other nearby silverfish to emerge from their blocks and attack the aggressor.",
        screenshot: "https://minecraft.wiki/images/SilverfishFace.png?1f7e0"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Skeleton",
        description: "A skeleton is an undead hostile mob that performs ranged attacks with a bow.",
        screenshot: "https://minecraft.wiki/images/SkeletonFace.png?652cd"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Slime",
        description: "Slimes are bouncy, cube-shaped hostile mobs that spawn deep underground in three sizes in particular chunks, or on the surface in swamp biomes. They attack by jumping at their targets. They come in three sizes, and larger slimes split into smaller ones on death.",
        screenshot: "https://minecraft.wiki/images/SlimeFace.png?e81b7"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Stray",
        description: "A stray is a skeleton variant that spawns in a few snow-covered biomes. They behave similarly to skeletons, except they fire tipped arrows of Slowness from their bows.",
        screenshot: "https://minecraft.wiki/images/StrayFace.png?8705e"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Vex",
        description: "A vex is a small flying hostile mob that wields an iron sword and is summoned by evokers. It attacks by lunging at its target with its sword and is capable of phasing through walls. It is considered a negative counterpart to the allay.",
        screenshot: "https://minecraft.wiki/images/VexFace.png?8cf84"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Vindicator",
        description: "A vindicator is an illager equipped with an iron axe. Vindicators appear in woodland mansions and participate in raids. It sprints toward its targets to attack them with its axe.",
        screenshot: "https://minecraft.wiki/images/VindicatorFace.png?a2eeb"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Warden",
        description: "A warden is a powerful but avoidable hostile mob summoned by sculk shriekers in the deep dark biome. It attacks by swinging its arms downward or by using its sonic boom. The arm attack does more melee damage than any attack from any other mob, and the sonic boom cannot be blocked by obstacles or armor, making the warden one of the strongest mobs. Wardens are completely blind and rely on vibrations, smell, and touch to detect players and mobs. Therefore, a warden can be evaded by sneaking, by diverting its attention to other sounds (for example, the sound of a snowball or arrow hitting a wall), or by hiding behind wool.",
        screenshot: "https://minecraft.wiki/images/WardenFace.png?1b626"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Witch",
        description: "Witches are hostile mobs that use potions in combat, using various splash potions for offense and drinkable potions for defense.",
        screenshot: "https://minecraft.wiki/images/WitchFace.png?80374"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Wither Skeleton",
        description: "Wither skeletons are tall black variants of skeletons equipped with stone swords that inflict the poison-like Wither effect. They are found exclusively in nether fortresses and are the only source of wither skeleton skulls, as well as the only renewable source of coal.",
        screenshot: "https://minecraft.wiki/images/WitherSkeletonFace.png?7d89f"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Zoglin",
        description: "A zoglin is an undead hostile mob created when a hoglin is in the Overworld or End for too long. It never retreats or flees, and attacks players and almost all non-zoglin mobs indiscriminately, using the same tusk attack as its non-zombified counterpart.",
        screenshot: "https://minecraft.wiki/images/ZoglinFace.png?41f14"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Zombie",
        description: "Zombies are common undead hostile mobs that deal melee damage and drop rotten flesh on death.",
        screenshot: "https://minecraft.wiki/images/ZombieFace.png?d1bba"
    },
    {
        category: MobCategories.hostileMobs,
        name: "Zombie Villager",
        description: "A zombie villager is a variant of the zombie that can be cured into a normal villager using a golden apple while it is under the effect of Weakness.",
        screenshot: "https://minecraft.wiki/images/ZombieVillagerFace.png?054af"
    },
    {
        category: MobCategories.bossMobs,
        name: "Ender Dragon",
        description: "The ender dragon is a giant flying hostile boss mob found when first entering the End. It is the largest naturally spawning mob in the game. Defeating it activates the exit portal that allows return to the Overworld and spawns end gateways that provide entry to the outer end islands. Its attacks involve charging at the player and hurling its corrosive breath at them.",
        screenshot: "https://minecraft.wiki/images/EnderdragonFace.png?0c1e7"
    },
    {
        category: MobCategories.bossMobs,
        name: "Wither",
        description: "The wither is a player-constructed and highly destructive undead Boss-mob that can hover in mid-air and fire barrages of explosive wither skulls at almost any living thing. It is the only source of nether stars, which are used to craft beacons.",
        screenshot: "https://minecraft.wiki/images/WitherFace.png?3a0a0"
    },
]