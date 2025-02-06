export const renderBiome = (biome: Biome): string => `
  <img class="add-favorite-button" src="https://minecraft-api.vercel.app/images/items/nether_star.gif">
  <img src="${biome.screenshot}" alt="${biome.name}">
  <p>Dimension: ${biome.dimension}</p>
  <p>Category: ${biome.category}</p>
  <p>${biome.description}</p>
`;

enum BiomeDimensions {
    Overworld = "Overworld",
    Nether = "Nether",
    End = "End"
}

enum BiomeCategories {
    nonlandBiomes = "Non-land biomes",
    highlandBiomes = "Highland biomes",
    woodlandBiomes = "Woodland biomes",
    wetlandBiomes = "Wetland biomes",
    flatlandBiomes = "Flatland biomes",
    aridlandBiomes = "Arid-land biomes",
    caveBiomes = "Cave biomes"
}

type Biome = {
    dimension: BiomeDimensions;
    category?: string;
    name: string;
    description: string;
    screenshot: string;
}

export const biomes: Biome[] = [
    {
        dimension: BiomeDimensions.Overworld,
        category: BiomeCategories.nonlandBiomes,
        name: "Ocean",
        description: "The basic ocean biome. Like its colder variants, its floor is largely made up of gravel; however patches of dirt, sand and clay can also appear. Seagrass, kelp, cod and salmon can spawn here.",
        screenshot: "https://minecraft.wiki/images/thumb/Ocean.png/300px-Ocean.png?66c7a"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Non-land biomes",
        name: "Deep Ocean",
        description: "A variant of the ocean biome. In deep ocean biomes, the ocean can exceed 30 blocks in depth, making it twice as deep as the normal ocean. The ground is mainly covered with gravel. Ocean monuments generate in deep oceans, meaning guardians, elder guardians, prismarine and sponges can spawn here. Underwater ravines often generate here, with the top layer of lava being replaced by magma blocks that create bubble columns.",
        screenshot: "https://minecraft.wiki/images/thumb/Deep_Ocean.png/300px-Deep_Ocean.png?24441"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Non-land biomes",
        name: "Warm Ocean",
        description: "A variant of the ocean biome, with light teal water at the surface. Like the lukewarm ocean, it has a floor made of sand and like all oceans, it is populated with seagrass. Pufferfish and tropical fish spawn here. Unlike other ocean biomes, warm oceans allow for the generation of coral reefs and sea pickles. Kelp cannot spawn here. It is the only ocean biome that does not have a deep equivalent.",
        screenshot: "https://minecraft.wiki/images/thumb/Warm_Ocean.png/300px-Warm_Ocean.png?6231a"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Non-land biomes",
        name: "Lukewarm Ocean",
        description: "A variant of the Ocean biome, with light blue water at the surface. Its floor is made of sand with the occasional patch of dirt or clay. Kelp and seagrass spawn here. Unlike the warm ocean biome, cod and salmon can spawn here, together with pufferfish and tropical fish. Coral cannot spawn here.",
        screenshot: "https://minecraft.wiki/images/thumb/Lukewarm_Ocean.png/300px-Lukewarm_Ocean.png?2d3ca"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Non-land biomes",
        name: "Deep Lukewarm Ocean",
        description: "Similar to the lukewarm ocean biome, but twice as deep. Because they are a deep ocean variant, they can generate ocean monuments, resulting in the spawning of guardians, elder guardians, prismarine and sponges.",
        screenshot: "https://minecraft.wiki/images/thumb/Deep_Lukewarm_Ocean.png/300px-Deep_Lukewarm_Ocean.png?4ee37"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Non-land biomes",
        name: "Cold Ocean",
        description: "A variant of the ocean biome, with dark blue water at the surface. Like regular oceans and frozen oceans, its floor is made up of gravel, though occasional patches of dirt can be found. Salmon can spawn in cold ocean biomes.",
        screenshot: "https://minecraft.wiki/images/thumb/Cold_Ocean.png/300px-Cold_Ocean.png?22f00"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Non-land biomes",
        name: "Deep Cold Ocean",
        description: "Similar to the cold ocean biome, but twice as deep. Like other deep oceans, ocean monuments can generate here, which contain guardians, elder guardians, prismarine and sponges.",
        screenshot: "https://minecraft.wiki/images/thumb/Deep_Cold_Ocean.png/300px-Deep_Cold_Ocean.png?451eb"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Non-land biomes",
        name: "Frozen Ocean",
        description: "A variant of the ocean biome with dark indigo water at the surface. Like the cold ocean, it has a gravel seabed and squids swimming about. However, the water's surface is frequently broken up by patches of ice and large icebergs, consisting of packed ice and blue ice, and occasionally topped with snow blocks. Strays and polar bears can spawn here, but dolphins can't.",
        screenshot: "https://minecraft.wiki/images/thumb/Frozen_Ocean.png/300px-Frozen_Ocean.png?3521a"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Non-land biomes",
        name: "Deep Frozen Ocean",
        description: "Like the frozen ocean biome, the only fishes that spawn here are salmon and cod, and the floor consists of gravel. The frozen deep ocean biome also contains ocean monuments and a deeper floor than normal oceans, like other deep oceans. Frequent floating icebergs with blue ice generate here. Polar bears, rabbits and strays can also spawn here, but dolphins can't.",
        screenshot: "https://minecraft.wiki/images/thumb/Deep_Frozen_Ocean.png/300px-Deep_Frozen_Ocean.png?30366"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Non-land biomes",
        name: "Mushroom Fields",
        description: "This rare biome consists of a mostly flat island and has mycelium instead of grass as its surface. Mushroom fields are always adjacent to a deep ocean and are isolated from other biomes, and they are typically a few hundred blocks wide. It is one of the few biomes where huge mushrooms can generate naturally, and where mushrooms can grow in full sunlight. No mobs other than mooshrooms, bats, and glow squids spawn naturally in this biome, including the usual night-time hostile mobs. This also applies to caves, mineshafts and other dark structures, meaning exploring underground is safe. However, monster spawners still spawn mobs, wandering traders along with their llamas can spawn, raids can still spawn illagers, the player can still breed animals and spawn mobs using spawn eggs and insomnia still attracts phantoms.",
        screenshot: "https://minecraft.wiki/images/thumb/Mushroom_Fields.png/300px-Mushroom_Fields.png?04c21"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Highland biomes",
        name: "Jagged Peaks",
        description: "One of the three biomes that generate in the peaks of a mountain. This biome is found in taller and more jagged and pointy peaks that often pass the clouds and can peak at y=256. It is covered by a single layer of snow blocks with stone underneath often exposing ores such as coal, iron and emerald, and just like the snowy slopes, stone cliffs can generate in some sides of the mountain. Only goats spawn in this biome.",
        screenshot: "https://minecraft.wiki/images/thumb/Jagged_Peaks.png/300px-Jagged_Peaks.png?4f356"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Highland biomes",
        name: "Frozen Peaks",
        description: "The frozen peaks are covered by snow blocks and packed ice with occasional small blobs of ice. Only goats can spawn in this biome. This biome usually generates in smoother and less jagged mountains compared to the jagged peaks biome.",
        screenshot: "https://minecraft.wiki/images/thumb/Frozen_Peaks.png/300px-Frozen_Peaks.png?579d0"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Highland biomes",
        name: "Stony Peaks",
        description: "The stony peaks are a warmer variation of peak biomes that generates in warmer regions to avoid temperature clashes. It is mainly covered by stone with large strips of calcite and exposed ores. No passive mobs spawn here and there's no snow in this biome.",
        screenshot: "https://minecraft.wiki/images/thumb/Stony_Peaks.png/300px-Stony_Peaks.png?9edc7"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Highland biomes",
        name: "Meadow",
        description: "The meadow is an elevated grassy biome found in plateaus near mountain ranges. It is filled with patches of flowers and turquoise-green short grass and tall grass. All small flowers generate except blue orchids, tulips, lilies of the valley or wither roses. Rarely, a lone oak or birch tree can generate and always has a bee nest. Both pillager outposts and plains villages can generate in this biome. Sheep, donkeys and rabbits are the only passive mobs that spawn in this biome.",
        screenshot: "https://minecraft.wiki/images/thumb/Mountain_Meadows.png/300px-Mountain_Meadows.png?cc6a3"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Highland biomes",
        name: "Cherry Grove",
        description: "Cherry groves are grasslands with a lot of short grass, tall grass and, instead of the traditional dandelions and poppies flowers, there are pink petals. The main environmental feature of the cherry grove are cherry trees identified by their striking pink color. Their leaves drop petal particles. The cherry trees may generate densely enough create a cover of leaves. The cherry grove biome is good for surviving. The sparseness of trees can help the player not to get lost while collecting a great abundance of resources.",
        screenshot: "https://minecraft.wiki/images/thumb/Cherry_Grove.png/300px-Cherry_Grove.png?260c6"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Highland biomes",
        name: "Grove",
        description: "The grove creates a forest of spruce trees beneath the mountain peaks when near a forested biome. It is quite reminiscent of the snowy taiga, but the surface is covered with snow blocks and powder snow instead of grass blocks. Rabbits, wolves and foxes can spawn in this biome.",
        screenshot: "https://minecraft.wiki/images/thumb/Grove.png/300px-Grove.png?41d49"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Highland biomes",
        name: "Snowy Slopes",
        description: "The snowy slopes generate beneath the mountain peaks and are covered with multiple layers of snow blocks and powder snow, with some sides also having stone cliffs. Goats spawn in this biome alongside rabbits. This is the only mountain biome where igloos can generate, making it one of the three biomes where igloos naturally generate.",
        screenshot: "https://minecraft.wiki/images/thumb/Snowy_Slopes_1.18.png/300px-Snowy_Slopes_1.18.png?bab30"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Highland biomes",
        name: "Windswept Hills",
        description: "A highland biome with some steep hilltops. Cliffs, peaks, valleys, waterfalls, overhangs, floating islands, caverns and many other terrain features exist here. This is one of the few biomes where llamas can spawn naturally. Snowfall also occurs above certain heights atop the mountain, thus creating snow layers on the top of the hills. Windswept hills are one of six biomes where emerald ore and infested stone can be found naturally. In Bedrock Edition and Minecraft Education, trees cannot generate here.",
        screenshot: "https://minecraft.wiki/images/thumb/Windswept_hills.png/300px-Windswept_hills.png?20824"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Highland biomes",
        name: "Windswept Gravelly Hills",
        description: "The windswept gravelly hills are mostly covered in gravel with occasional patches of grass and stone blocks. Due to the low amount of grass, the population of spruce and oak trees in this biome is sparse.",
        screenshot: "https://minecraft.wiki/images/thumb/Windswept_gravelly_hills.png/300px-Windswept_gravelly_hills.png?7cee8"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Highland biomes",
        name: "Windswept Forest",
        description: "This biome is found when windswept hills are located next to forested biomes. It does not generate stone patches, so the floor is entirely covered by grass. There are more spruce and oak trees in this biome, forming small forests with a lower tree density than other forest biomes.",
        screenshot: "https://minecraft.wiki/images/thumb/Windswept_forest.png/300px-Windswept_forest.png?7bfdb"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Woodland biomes",
        name: "Forest",
        description: "A common biome with many oak and birch trees and a fair amount of short grass, mushrooms and flowers. Wolves can spawn in this biome.",
        screenshot: "https://minecraft.wiki/images/thumb/Forest.png/300px-Forest.png?cc8a2"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Woodland biomes",
        name: "Flower Forest",
        description: "This forest variant has fewer trees but contains nearly every type of flower and tall plant in the game. Wolves do not spawn in the flower forest, although rabbits spawn occasionally. Bee nests have a higher chance to generate in this biome.",
        screenshot: "https://minecraft.wiki/images/thumb/Flower_Forest.png/300px-Flower_Forest.png?d85ec"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Woodland biomes",
        name: "Taiga",
        description: "A biome covered by a forest of spruce trees. Ferns, large ferns and sweet berry bushes grow commonly on the forest floor. One can find packs of wolves here, along with small groups of foxes or rabbits. Villages may generate in this biome; the houses in these villages are built with spruce wood. Pillager outposts may also generate in this biome. This is one of the few biomes where trail ruins can generate.",
        screenshot: "https://minecraft.wiki/images/thumb/Taiga.png/300px-Taiga.png?f0996"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Woodland biomes",
        name: "Old Growth Pine Taiga",
        description: "A biome composed of spruce trees (despite it being called a pine taiga, since there is no pine in the game), much like the standard taiga biome. However, some trees are 2x2 thick and taller than normal, akin to large jungle trees. Mossy cobblestone boulders appear frequently, mushrooms are common, and podzol can be found on the forest floor. There are also patches of coarse dirt that do not grow grass, with some dead bushes. Wolves and foxes can spawn here, as they do in normal taiga biomes. Rabbits may also spawn here.",
        screenshot: "https://minecraft.wiki/images/thumb/Giant_Tree_Taiga.png/300px-Giant_Tree_Taiga.png?2bf0a"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Woodland biomes",
        name: "Old Growth Spruce Taiga",
        description: "At first glance, this biome may look almost exactly the same as its pine tree counterpart. However, the most striking feature of this biome is its giant spruce trees, which are essentially a scaled-up version of regular spruce trees. One can easily differentiate this from an old growth pine taiga by observing how the leaves almost completely cover the tree trunks, whereas in pine ones, leaves tend to cover only the top.",
        screenshot: "https://minecraft.wiki/images/thumb/Giant_Spruce_Taiga.png/300px-Giant_Spruce_Taiga.png?d5ff3"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Woodland biomes",
        name: "Snowy Taiga",
        description: "Similar to the standard taiga, except much of the biome is covered in snow. Ferns and large ferns generate here commonly, however sweet berry bushes generate more rarely than in the regular taiga. Wolves, foxes, and rabbits can spawn here. One may also find an igloo nestled between the trees, making it one of the three biomes where igloos naturally generate. Villages and pillager outposts may also generate here. Villages use the same architecture as taiga villages, but the villagers wear snowy biome outfits.",
        screenshot: "https://minecraft.wiki/images/thumb/Snowy_Taiga.png/300px-Snowy_Taiga.png?60855"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Woodland biomes",
        name: "Birch Forest",
        description: "A forest that is solely made of birch trees. The grass is aqua in color, and unlike the regular forest, no wolves spawn in this biome.",
        screenshot: "https://minecraft.wiki/images/thumb/Birch_Forest.png/300px-Birch_Forest.png?aa5a2"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Woodland biomes",
        name: "Old Growth Birch Forest",
        description: "Birch trees grow much taller than usual in this uncommon variant of the birch forest biome. Whereas normal birch trees grow up to 7 blocks tall, these trees can grow up to 13 blocks in height. This makes deforestation a much more difficult task, although it provides the player with far more resources. Trail ruins can generate here.",
        screenshot: "https://minecraft.wiki/images/thumb/Tall_Birch_Forest.png/300px-Tall_Birch_Forest.png?09f32"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Woodland biomes",
        name: "Dark Forest",
        description: "This biome is mainly composed of dark oak trees, which create a mostly closed roof of leaves. Oak trees, birch trees, and huge mushrooms can also be found occasionally. Trees in this forest are so densely packed that some areas are dark enough for hostile mobs to spawn, even during the day. On rare occasions, a woodland mansion may generate, making the dark forest the only biome where that structure can be found.",
        screenshot: "https://minecraft.wiki/images/thumb/Dark_Forest.png/300px-Dark_Forest.png?6339b"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Woodland biomes",
        name: "Pale Garden",
        description: "The pale garden is a rarer variation of the dark forest biome. The dark oak trees are replaced with pale oak trees, with lots of pale hanging moss hanging from the trees. Patches of pale moss blocks and pale moss carpets cover much of the ground, and patches of eyeblossoms dot the landscape. The sky, foliage, and water in this biome are gray and desaturated. Some of the pale oak trees may have a creaking heart hidden within them, which will spawn a creaking at night. No passive mobs spawn in this biome.",
        screenshot: "https://minecraft.wiki/images/thumb/Pale_Garden.png/300px-Pale_Garden.png?74ac5"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Woodland biomes",
        name: "Jungle",
        description: "A dense forested biome that includes many different plants and features. Jungle trees and mega jungle trees are common, with the mega trees having 2x2 thick trunks and possibly growing up to 31 blocks in height. Fancy oak trees are also common, and jungle bushes often cover much of the forest floor. Ferns and large ferns are found commonly, and vines are found growing on most types of blocks, especially on jungle trees. Additionally, cocoa can also grow on the sides of jungle trees. Melons can generate here in patches, similar to pumpkins, although they are much more common. Single shoots of bamboo can be found scattered throughout the biome. The foliage in the jungle is a bright, lush green color. Jungle pyramids and trail ruins can generate, and ocelots, parrots, and pandas can spawn in this biome.",
        screenshot: "https://minecraft.wiki/images/thumb/Jungle.png/300px-Jungle.png?9447f"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Woodland biomes",
        name: "Sparse Jungle",
        description: "In contrast to the wild and overgrown vegetation of the jungle biome, the sparse jungle consists of jungle trees, fancy oak trees, and jungle bushes that are spaced out an isolated, creating a much more open environment. The terrain of this biome is often flat, but there may be some small rises in elevation. Parrots, ocelots, and pandas can still spawn in the sparse jungle. Wolves can also spawn in this biome.",
        screenshot: "https://minecraft.wiki/images/thumb/Jungle_Edge.png/300px-Jungle_Edge.png?fcb09"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Woodland biomes",
        name: "Bamboo Jungle",
        description: "In this biome, large areas of the landscape are covered with massive amounts of bamboo. Patches of podzol can be found underneath the densely packed bamboo. Additionally, mega jungle trees, fancy oak trees, and jungle bushes can also generate here. Pandas have a much higher chance to spawn here than the other jungle biomes, making this the best place to find them. Ocelots and parrots are also able to spawn, and jungle pyramids can generate here.",
        screenshot: "https://minecraft.wiki/images/thumb/Bamboo_Jungle.png/300px-Bamboo_Jungle.png?64c35"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Wetland biomes",
        name: "River",
        description: "A biome that consists of water blocks that form an elongated, curving shape similar to a real river. Rivers cut through terrain or separate the main biomes. They attempt to join up with ocean biomes, but sometimes loop around to the same area of ocean. Rarely, they can have no connection to an ocean, instead of forming a loop. The grass has a dull aqua tone, much like the ocean, and trace amounts of oak trees tend to generate there as well. Rivers are also a reliable source of clay. These biomes are good for fishing, but drowned can spawn at night. In Bedrock Edition, mobs other than salmon, squid and drowned cannot spawn in this biome, even underground, except in a monster spawner.",
        screenshot: "https://minecraft.wiki/images/thumb/River.png/300px-River.png?5728e"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Wetland biomes",
        name: "Frozen River",
        description: "A river with a layer of ice covering its surface. It generates when a river goes through snowy biomes. Salmon spawn underwater while rabbits and polar bears spawn on ice. At night, drowned can spawn below the ice with strays on the surface. In Bedrock Edition, no other hostile mobs can spawn here, even underground, except from a monster spawner.",
        screenshot: "https://minecraft.wiki/images/thumb/Frozen_River.png/300px-Frozen_River.png?506e9"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Wetland biomes",
        name: "Swamp",
        description: "A biome characterized by a mix of flat areas around sea level, and shallow pools of green water with floating lily pads. Clay, sand and dirt are commonly found at the bottom of these pools. Trees are covered with vines and can be found growing out from the water. Mushrooms and sugar canes are abundant, and blue orchids grow exclusively here. Frogs of the temperate variant can spawn here as well. Swamp huts with a black cat and a witch generate exclusively in swamps. Slimes also spawn naturally at night, most commonly on full moons. Some zombies may end up underwater, which can transform them into drowned, and some skeletons are replaced by boggeds, making this an especially dangerous biome at night. Temperature varies within the biome, causing foliage and grass colors to vary. In Bedrock Edition, huge mushrooms also spawn in this biome. Visibility is also lower than other biomes when the player is underwater.",
        screenshot: "https://minecraft.wiki/images/thumb/Swamp.png/300px-Swamp.png?f6807"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Wetland biomes",
        name: "Mangrove Swamp",
        description: "A biome characterized by a dense foliage, featuring plenty of mangrove trees of varying heights. The floor is mainly composed of mud blocks with occasional grass patches. The grass has the same color as in the normal swamp but leaves and vines have a unique light green tint and the water is teal rather than gray. Frogs often spawn in this biome and all frogs spawned here are warm frogs. Slimes also spawn naturally at night, most commonly on full moons. Some zombies may end up underwater, which can transform them into drowned, and some skeletons are replaced by boggeds, making this an especially dangerous biome at night. Visibility is also lower than other biomes when the player is underwater.",
        screenshot: "https://minecraft.wiki/images/thumb/Mangrove_Swamp.png/300px-Mangrove_Swamp.png?49200"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Wetland biomes",
        name: "Beach",
        description: "Generated where oceans meet other biomes, beaches are primarily composed of sand. Beaches penetrate the landscape, removing the original blocks and placing in sand blocks. These are also useful for fishing. Buried treasure can be found under few blocks of sand. Passive mobs other than turtles do not spawn on beaches.",
        screenshot: "https://minecraft.wiki/images/thumb/Beach.png/300px-Beach.png?2456c"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Wetland biomes",
        name: "Snowy Beach",
        description: "Like a regular beach, one can find plenty of sand in this biome and buried treasure can be found underground in this snowy beach. However, sand is covered in a layer of snow. Snowy beaches are found when a snowy biome borders a frozen ocean biome. No passive mobs other than rabbits spawn in this biome.",
        screenshot: "https://minecraft.wiki/images/thumb/Snowy_Beach.png/300px-Snowy_Beach.png?a6e96"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Wetland biomes",
        name: "Stony Shore",
        description: "This stone-covered biome often appears where mountains meet the ocean. Depending on the height of the nearby land, stony shores may generate as medium slopes or huge cliffs, its tops tall enough to be covered by snow even when near warmer biomes. No passive mobs spawn here. Buried treasure can generate here. Strips of gravel can sometimes be found here.",
        screenshot: "https://minecraft.wiki/images/thumb/Stone_Shore.png/300px-Stone_Shore.png?05b90"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Flatland biomes",
        name: "Plains",
        description: "A flat and grassy biome with rolling hills and few oak trees. Villages are common. Cave openings, lava lakes and waterfalls are easily identifiable due to the flat unobstructed terrain. Passive mobs are easily found in plains biomes; this biome and its variants are also of the few biomes where horses spawn naturally. Pillager outposts may also be generated.",
        screenshot: "https://minecraft.wiki/images/thumb/Plains.png/300px-Plains.png?30f76"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Flatland biomes",
        name: "Sunflower Plains",
        description: "A fairly uncommon variation of the plains, this biome is the only place where sunflowers naturally generate. In Bedrock Edition, villages may also generate here.",
        screenshot: "https://minecraft.wiki/images/thumb/Sunflower_Plains.png/300px-Sunflower_Plains.png?40baf"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Flatland biomes",
        name: "Snowy Plains",
        description: "An expansive biome with a huge amount of snow layers. Sugar cane can generate in this biome, but can become uprooted when chunks load as the water sources freeze to ice. There are few spruce trees in this biome. No animal mobs other than rabbits and polar bears can spawn; however, it is one of the few biomes where strays appear. In Bedrock Edition, this biome does not spawn monsters other than strays and skeletons, but monster spawners can still spawn monsters. This is one of the three biomes where igloos naturally generate. Villages and pillager outposts may also generate here.",
        screenshot: "https://minecraft.wiki/images/thumb/Snowy_Plains.png/300px-Snowy_Plains.png?f791e"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Flatland biomes",
        name: "Ica Spikes",
        description: "A rare variation of the snowy plains biome that features large spikes and glaciers of packed ice. Usually, the spikes are 10 to 20 blocks tall, but some long, thin spikes can reach over 50 blocks in height. The floor in this biome is entirely covered in snow blocks instead of grass, and ice patches made of packed ice can generate on it. Like the regular snowy plains, no animal mobs other than rabbits and polar bears can spawn and strays appear at night.",
        screenshot: "https://minecraft.wiki/images/thumb/Ice_Spikes.png/300px-Ice_Spikes.png?62e27"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Arid-land biomes",
        name: "Desert",
        description: "A barren biome consisting mostly of sand dunes, dead bushes, and cacti. Sandstone and sometimes fossils are found underneath the sand. The only passive mobs that spawn naturally in deserts are gold/creamy rabbits. At night, husks usually spawn in the place of normal zombies. Sugar cane can be found if the desert is next to a river biome. Desert villages, desert wells and desert pyramids are found exclusively in this biome. Pillager outposts can also generate here.",
        screenshot: "https://minecraft.wiki/images/thumb/Desert.png/300px-Desert.png?7a46e"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Arid-land biomes",
        name: "Savanna",
        description: "A relatively flat and dry biome with a dull-brown grass color and acacia trees scattered around the biome, though oak trees may generate occasionally. Tall grass covers the landscape. Villages can generate in this biome, constructed of acacia wood, with some stained terracotta. Pillager outposts can also generate here. Horses, llamas, and armadillos can naturally spawn here.",
        screenshot: "https://minecraft.wiki/images/thumb/Savanna.png/300px-Savanna.png?e0138"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Arid-land biomes",
        name: "Savanna Plateau",
        description: "This biome generates when a normal savanna biome spawns at high altitudes and near mountains. It is mostly indistinguishable from the standard savanna, with the main differences being the fact that llamas and wolves can spawn, and villages and pillager outposts cannot generate.",
        screenshot: "https://minecraft.wiki/images/thumb/Savanna_Plateau.png/300px-Savanna_Plateau.png?e4f24"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Arid-land biomes",
        name: "Windswept Savanna",
        description: "In contrast to the mostly flat and calm terrain of the savanna biome, this uncommon variant generates chaotic terrain, with gigantic mountains covered in coarse dirt and some patches of stone. The mountains in the windswept savanna are extremely steep, sometimes jutting out at 90-degree angles, making it almost impossible to climb. On top of that, they can reach heights comparable to the mountain peak biomes, sometimes rising above the clouds. Massive waterfalls and lavafalls are quite common, and ocean-like lakes can also generate. Unlike the regular savanna, villages and pillager outposts do not generate in this biome.",
        screenshot: "https://minecraft.wiki/images/thumb/Shattered_Savanna.png/300px-Shattered_Savanna.png?9545b"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Arid-land biomes",
        name: "Badlands",
        description: "An uncommon biome where large mounds of terracotta and stained terracotta generate. Red sand also generates here instead of regular sand, with occasional cacti and dead bushes. This biome is usually found alongside desert biomes and it can generate in mountainous terrain. The only passive mob that can spawn here is the armadillo. Mineshafts generate at a higher altitude than normal - occasionally a player may come across a mineshaft jutting out of the badlands. Gold ore also occurs more frequently, because additional veins can generate within badlands up to Y=256. The composition of this biome is useful when other sources of terracotta and gold are scarce.",
        screenshot: "https://minecraft.wiki/images/thumb/Badlands.png/300px-Badlands.png?1a579"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Arid-land biomes",
        name: "Wooded Badlands",
        description: "The wooded badlands has layers of coarse dirt and forests of oak trees that generate atop the badlands in humid areas. The color of the grass and leaves is a dull green-brown hue, giving it a dried and dead appearance. These trees are a rare source of wood when living in the otherwise barren badlands. Wolves and armadillos are the only mobs that can spawn here during the day.",
        screenshot: "https://minecraft.wiki/images/thumb/Wooded_Badlands_Plateau.png/300px-Wooded_Badlands_Plateau.png?34f58"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Arid-land biomes",
        name: "Eroded Badlands",
        description: "This rare variant generates unique terrain features that are similar to the structures in Utah's Bryce Canyon. Tall and narrow spires of colorful terracotta rise out of the floor of the canyon, which like all other badlands variants, is covered in red sand. The only passive mob that can spawn here is the armadillo.",
        screenshot: "https://minecraft.wiki/images/thumb/Eroded_Badlands.png/300px-Eroded_Badlands.png?85b0c"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Cave biomes",
        name: "Deep Dark",
        description: "A dimly lit cave biome that generates deep underground mostly within the deepslate layer. It is largely sculk blocks 1 block thick upon all surfaces, with frequent sculk sensors and occasional sculk shriekers, the latter of which can directly summon a warden. An ancient city is a large structure that can generate here, containing chests with unique loot. No mobs aside from wardens spawn here.",
        screenshot: "https://minecraft.wiki/images/thumb/Deep_Dark.png/300px-Deep_Dark.png?f3617"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Cave biomes",
        name: "Dripstone Caves",
        description: "These are caves filled with dripstone blocks and pointed dripstone both hanging as stalactites and growing from the ground as stalagmites and small water wells of 1x1 in the ground. Large dripstone clusters structures generate occasionally inside these caves. Copper ore blobs found in this biome are much bigger compared to other biomes. Drowned can spawn in aquifers.",
        screenshot: "https://minecraft.wiki/images/thumb/Dripstone_Caves.png/300px-Dripstone_Caves.png?8cd72"
    },
    {
        dimension: BiomeDimensions.Overworld,
        category: "Cave biomes",
        name: "Lush Caves",
        description: "Lush caves are often found underground below azalea trees. These caves are covered by moss blocks, moss carpets, short grass and azalea bushes on the floors. On the ceiling, vines and cave vines with glow berries grow down and light up the caves, and spore blossoms grow from the ceiling and spore particles. There are also shallow lakes with clay where dripleaf plants grow out of them and axolotls spawn, making this the only biome where they can spawn. Tropical fish can also spawn inside the aquifers in a lush cave.",
        screenshot: "https://minecraft.wiki/images/thumb/Lush_Caves.png/300px-Lush_Caves.png?6d57e"
    },
    {
        dimension: BiomeDimensions.Nether,
        name: "Nether Wastes",
        description: "The Nether wastes is the most common biome in the Nether. The terrain mainly consists of netherrack, with glowstone clusters growing and lava leaking from the ceiling and gravel and soul sand lining its shores. Most of the Nether's mobs can spawn here, including ghasts, zombified piglins, magma cubes, striders, piglins, and the occasional enderman.",
        screenshot: "https://minecraft.wiki/images/thumb/Nether.png/300px-Nether.png?d6959"
    },
    {
        dimension: BiomeDimensions.Nether,
        name: "Soul Sand Valley",
        description: "The soul sand valley mainly consists of soul sand, basalt and soul soil. Notable features of the biome are exposed nether fossils in various shapes and sizes, large amounts of lava, blue fog, large spires made of basalt, soul fire, and the occasional nether fortress or bastion remnant. Ghasts and skeletons are common in this biome.",
        screenshot: "https://minecraft.wiki/images/thumb/Soul_Sand_Valley.jpg/300px-Soul_Sand_Valley.jpg?b4269"
    },
    {
        dimension: BiomeDimensions.Nether,
        name: "Crimson Forest",
        description: 'The crimson forest consists of many huge crimson fungi, which act as the "trees" of this biome. The huge fungi often generate with weeping vines hanging from them, and shroomlights which light up the landscape. The floor is mostly covered with crimson nylium, with occasional patches of bare netherrack or nether wart blocks. Crimson roots, crimson fungus, and occasionally warped fungus grow on the ground. Small patches of nether wart blocks and weeping vines can also be found growing on the ceiling. Hoglins, piglins, zombified piglins, and striders can spawn in this biome.',
        screenshot: "https://minecraft.wiki/images/thumb/Crimson_Forest.png/300px-Crimson_Forest.png?d15b9"
    },
    {
        dimension: BiomeDimensions.Nether,
        name: "Warped Forest",
        description: 'The warped forest consists of many huge warped fungi, which act as the "trees" of this biome. The huge fungi often generate with shroomlights, which light up the landscape. Twisting vines grow throughout the biome in patches. The floor is mostly covered with warped nylium, with occasional patches of bare netherrack or warped wart blocks. Warped roots, warped fungus, nether sprouts, and occasionally crimson fungus grow on the ground. Endermen and striders are the only mobs that spawn in this biome.',
        screenshot: "https://minecraft.wiki/images/thumb/Warped_Forest.png/300px-Warped_Forest.png?782e4"
    },
    {
        dimension: BiomeDimensions.Nether,
        name: "Basalt Deltas",
        description: "A gray biome, the basalt deltas are said to be the remnant of ancient volcanic eruptions. The ground consists of basalt and blackstone blocks, with small patches of netherrack and pools of lava. The shape of the terrain is chaotic and uneven, making it somewhat difficult to traverse and build on. Unlike the other biomes in the Nether, bastion remnants do not generate in basalt deltas. When this biome borders a lava ocean, clusters of basalt form near the coast. Magma cubes have a high spawn rate in this biome, making the basalt deltas the best place to farm magma cream. This biome also contains a much higher abundance of blackstone compared to other Nether biomes.",
        screenshot: "https://minecraft.wiki/images/thumb/BasaltDeltas.png/300px-BasaltDeltas.png?97264"
    },
    {
        dimension: BiomeDimensions.End,
        name: "The End",
        description: "This biome is used to generate the circle of radius 1000 centered at the 0,0 coordinates in the End. The End central island is generated at the center of this circle, and it's surrounded by a complete vacuum all the way to the edge of the biome. Most of the End features are exclusive to that island, including the ender dragon, the obsidian pillars, the end crystals, the 5x5 spawn platform, the exit portal and the 20 central end gateways. Large amounts of endermen spawn in this biome. It does not rain or snow in this biome unlike the other low-temperature biomes. The outer islands in the End can be accessed using end gateways after the ender dragon has been defeated. If the biome is used for a superflat world, the sky appears nearly black and an ender dragon spawns at the 0,0 coordinates in the Overworld. Only endermen spawn at night.",
        screenshot: "https://minecraft.wiki/images/thumb/The_End.png/300px-The_End.png?cc597"
    },
    {
        dimension: BiomeDimensions.End,
        name: "Small End Islands",
        description: "Generates as part of the outer islands of the End. This biome represents the empty expanse between the larger islands, populated by the smaller, circular islands.",
        screenshot: "https://minecraft.wiki/images/thumb/Small_End_Islands.png/300px-Small_End_Islands.png?20554"
    },
    {
        dimension: BiomeDimensions.End,
        name: "End Midlands",
        description: "Generates as part of the outer islands of the End. This biome represents the gradual slope from the hilltops of each island down to the cliffs around the edge. End cities generate here, but chorus trees do not.",
        screenshot: "https://minecraft.wiki/images/thumb/End_Midlands.png/300px-End_Midlands.png?8541a"
    },
    {
        dimension: BiomeDimensions.End,
        name: "End Highlands",
        description: "Generates as part of the outer islands of the End. This biome represents the hilltops of each island, and is the only biome in the End where both chorus trees and end cities generate.",
        screenshot: "https://minecraft.wiki/images/thumb/End_Highlands.png/300px-End_Highlands.png?b5640"
    },
    {
        dimension: BiomeDimensions.End,
        name: "End Barrens",
        description: "Generates as part of the outer islands of the End. This biome represents the outer rims of each island, with steep cliffs below the edge. Neither end cities nor chorus trees generate in this biome.",
        screenshot: "https://minecraft.wiki/images/thumb/End_Barrens.png/300px-End_Barrens.png?f4740"
    }
]; 