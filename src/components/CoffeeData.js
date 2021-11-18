const hotBeverages = {
  short: { shots: 1, syrup: 2 },
  tall: { shots: 1, syrup: 3 },
  grande: { shots: 2, syrup: 4 },
  venti: { shots: 2, syrup: 5 },
  ventiIced: { shots: 2, syrup: 2 },
};
const CoffeeData = [
  {
    id: 1,
    name: "Americano",
    type: "Hot beverage",
    description: "The classic Americano Coffee",
    ingredients: ["Water", "Espresso"],
    procedure: "Pour the Espresso shot to a cup and add hot water",
    notes: "Level of water might vary depending of the customer preferences ",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/512px-A_small_cup_of_coffee.JPG",
    sizes: hotBeverages,
  },
  {
    id: 2,
    name: "Capuccino",
    description: "The classic Americano Coffee",
    ingredients: ["Water", "Espresso", "Milk"],
    procedure:
      "Steam the milk with a 8s cutting-paper sound. Add the Espresso to the cup and slowly pour the milk",
    notes: null,
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Cappuccino_PeB.jpg/1200px-Cappuccino_PeB.jpg",
    sizes: hotBeverages,
  },
  {
    id: 3,
    name: "Latte",
    description: "The classic Americano Coffee",
    ingredients: ["Water", "Espresso", "Milk"],
    procedure:
      "Steam the milk with a 3s cutting-paper sound, add the Espresso to the cup and slowly pour the milk",
    notes: "Level of water might vary depending of the customer preferences ",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/c/c6/Latte_art_3.jpg",
    sizes: hotBeverages,
  },
  {
    id: 4,
    name: "Espresso",
    description: "The classic Americano Coffee",
    ingredients: null,
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Caf%C3%A9_expreso_corto.jpg",
    sizes: "1 shot",
  },
  {
    id: 5,
    name: "Misto",
    description: "The classic Americano Coffee",
    ingredients: ["Water", "Espresso", "Milk"],
    procedure:
      "Steam the milk with a 3s cutting-paper sound, add the Espresso to the cup and super slowly pour the milk making sure that the milk goes under the espresso",
    notes: "Misto's signature is a white dot of steam milk on top",
    imageURL:
      "https://www.brewcoffeehome.com/wp-content/uploads/2021/09/iced-latte.jpg",
    sizes: hotBeverages,
  },
];
export default CoffeeData;
