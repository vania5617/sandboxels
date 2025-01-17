elements.burnt_rice = {
	tempHigh: 999,
	stateHigh: "ash",
	density: 699,
	color: "#242424",
	behavior: behaviors.POWDER,
	category: "food",
	state: "liquid",
	reactions: {
		"water": { elem1: null, elem2: "dirty_water" }
	}
};

elements.rice = {
	isFood: true,
	burnInto: "burnt_rice",
	density: 696,
	tempHigh: 232,
	stateHigh: "burnt_rice",
	color: "#d1d1d1",
	behavior: behaviors.POWDER,
	category: "food",
	state: "liquid",
};

elements.moth = {
	tempHigh: 500,
	stateHigh: "ash",
	color: "#57381a",
	behavior: behaviors.GAS,
	category: "life",
	state: "solid",
};

elements.cotton_candy = {
	tempHigh: 500,
	stateHigh: "ash",
	density: 1000,
	color: "#b6c7e3",
	behavior: behaviors.POWDER,
	category: "food",
	state: "liquid",
	reactions: {
		"water": { elem1: "sugar", elem2: null },
	}
};

elements.mc_donalds = {
	tempHigh: 6969,
	stateHigh: "void",
	density: 69,
	color: "#ff0000",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.maple_syrup = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "steam",
	density: 1333,
	hardness: 1,
	color: "#9c6000",
	behavior: behaviors.LIQUID,
	category: "liquids",
	state: "liquid",
};

elements.boiled_egg = {
	isFood: true,
	density: 700,
	breakInto: "yolk",
	tempHigh: 500,
	stateHigh: "ash",
	color: "#fff9d1",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.dark_oak = {
	breakInto: "dark_oak_wood",
	tempHigh: 500,
	stateHigh: "ash",
	color: "#302216",
	behavior: behaviors.WALL,
	category: "solids",
	state: "solid",
};

elements.dark_oak_wood = {
	tempHigh: 500,
	stateHigh: "ash",
	color: "#573e28",
	behavior: behaviors.SUPPORT,
	category: "land",
	state: "solid",
};

elements.avocado = {
	isFood: true,
	tempHigh: 500,
	breakInto: "guacamole",
	stateHigh: "ash",
	color: "#254a22",
	behavior: behaviors.SUPPORTPOWDER,
	category: "food",
	state: "liquid",
};

elements.guacamole = {
	isFood: true,
	hidden: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#a2e09d",
	behavior: behaviors.POWDER,
	category: "food",
	state: "liquid",
};

elements.watermelon = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	breakInto: "watermelon_flesh",
	color: "#40993f",
	behavior: behaviors.SUPPORT,
	category: "food",
	state: "solid",
};

elements.watermelon_flesh = {
	isFood: true,
	hidden: true,
	tempHigh: 500,
	stateHigh: "steam",
	color: "#ff5d47",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.nachos = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#bd7b26",
	behavior: behaviors.SUPPORTPOWDER,
	category: "food",
	state: "solid",
};

elements.cherry = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#ff0f0f",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.green_berries = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#5ce344",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.meth = {
	hidden: true,
	hardness: 1,
	tempHigh: 500,
	stateHigh: "melted_meth",
	color: "#0affef",
	behavior: behaviors.POWDER,
	category: "powders",
	state: "solid",
};

elements.garlic = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#ffebbd",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
	reactions: {
		"bread": { elem1: null, elem2: "garlic_bread" },
	}
};

elements.garlic_bread = {
	isFood: true,
	breakInto: "crumb",
	tempHigh: 500,
	stateHigh: "ash",
	color: ["#db9b56", "#288a0c", "#db9b56", "#db9b56", "#db9b56", "#db9b56"],
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.kiwi = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: ["#0f4700", "#0f4700", "#0f4700", "#0f4700", "#0f4700", "#0f4700", "#0f4700", "#0f4700", "#0f4700", "#210a00"],
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.peanut_butter = {
	isFood: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#d4903d",
	behavior: behaviors.POWDER,
	category: "food",
	state: "solid",
};

elements.poop = {
	hardness: 1,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#331600",
	behavior: behaviors.STURDYPOWDER,
	category: "special",
	state: "solid",
	reactions: {
		"piss": { elem1: null, elem2: "bless" },
	}
};

elements.marshmallow = {
	tempHigh: 50,
	stateHigh: "cooked_marshmallow",
	color: "#ffe4e3",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.cooked_marshmallow = {
	tempHigh: 150,
	stateHigh: "burnt_marshmallow",
	color: "#d49e9d",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.burnt_marshmallow = {
	tempHigh: 500,
	stateHigh: "ash",
	color: "#1c1212",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.ramen = {
	tempHigh: 500,
	stateHigh: "ash",
	color: "#fae34d",
	behavior: behaviors.POWDER,
	category: "food",
	state: "solid",
};

elements.cereal = {
	tempHigh: 500,
	stateHigh: "ash",
	color: ["#ba3425", "#baa31e", "#26ba1e", "#1e9dba", "#6f1eba"],
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.sushi = {
	tempHigh: 500,
	stateHigh: "ash",
	color: ["#020802", "#fff0eb", "#ff6524", "#35ab26"],
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "liquid",
};

elements.indestructible_wall = {
	color: "#7a7a7a",
	behavior: behaviors.WALL,
	category: "solids",
	state: "solid",
};

elements.diamond_ore = {
	tempHigh: 1000,
	stateHigh: "ash",
	breakInto: "diamond",
	color: ["#525252", "#525252", "#525252", "#525252", "#525252", "#2ba3ff"],
	behavior: behaviors.WALL,
	category: "solids",
	state: "solid",
};

elements.coca_cola = {
	tempHigh: 500,
	stateHigh: "steam",
	color: "#381e13",
	behavior: behaviors.LIQUID,
	category: "liquids",
	state: "liquid",
};

elements.piss = {
	tempHigh: 500,
	stateHigh: "steam",
	color: "#ffff00",
	behavior: behaviors.LIQUID,
	category: "special",
	state: "liquid",
};

elements.soup = {
	temp: 50,
	tempHigh: 500,
	stateHigh: "steam",
	color: "#945e00",
	behavior: behaviors.LIQUID,
	category: "liquids",
	state: "liquid",
};

elements.pastry = {
	tempHigh: 500,
	stateHigh: "ash",
	color: "#ba6727",
	behavior: behaviors.SUPPORT,
	category: "food",
	state: "solid",
};

elements.melted_meth = {
	hidden: true,
	tempHigh: 100000,
	stateHigh: "beans",
	color: "#00a2ff",
	behavior: behaviors.LIQUID,
	category: "states",
	state: "solid",
};

elements.expired_milk = {
	hidden: true,
	tempHigh: 500,
	stateHigh: "ash",
	color: "#b8c2b4",
	behavior: behaviors.LIQUID,
	category: "states",
	state: "solid",
};

elements.kfc = {
	tempHigh: 69420,
	stateHigh: "void",
	color: "#d16e11",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.wendys = {
	tempHigh: 69420,
	stateHigh: "void",
	color: "#db1e0d",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.burger_king = {
	tempHigh: 69420,
	stateHigh: "void",
	color: "#db660d",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.pizza_hut = {
	tempHigh: 69420,
	stateHigh: "void",
	color: "#ed3b24",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};

elements.dominos = {
	tempHigh: 69420,
	stateHigh: "void",
	color: ["#ed4934", "#3494ed"],
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};


elements.vape = {
	tempHigh: 500999,
	hidden: true,
	stateHigh: "beans",
	color: "#999999",
	behavior:  [
        "XX|CR:smoke|XX",
        "CR:smoke|XX|CR:smoke",
        "XX|CR:smoke|XX",
    ],
	category: "special",
	state: "solid",
};

elements.tendon = {
	temp: 20000,
	color: ["#1eff00", "#1eff00", "#1eff00", "#acffa1", "#1eff00", "#1eff00", "#1eff00"],
	behavior: behaviors.DGAS,
	category: "energy",
	state: "gas",
};

elements.pea = {
	breakInto: "mashed_pea",
	tempHigh: 500,
	stateHigh: "ash",
	color: "#3cbf2a",
	behavior: behaviors.STURDYPOWDER,
	category: "food",
	state: "solid",
};
