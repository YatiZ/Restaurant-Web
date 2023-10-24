import food1 from "../images/beef.png";
import chickenImg from "../images/pngegg (2).png";
import prawnImg from "../images/pngegg (6).png";
import noodleImg from "../images/pngegg (7).png";
import food2 from "../images/pngegg (4).png";
import food3 from "../images/barger.png";
import soup from "../images/soup.png";
import salmon from "../images/salmon.png";
import grilledFish from '../images/grilledFish.png';

export const menu = [
    {
      id: 1,
      name: "Beef Steak",
      ingredients: ["beef", "tomato", "chilli sauce"],
      price: 20,
      image: food1,
      rating:5,
    },
    {
      id: 2,
      name: "Grilled Chicken",
      ingredients: ["chicken", "grilled powder", "seasonings"],
      price: 15,
      image: chickenImg,
      rating:5,
    },
    {
      id: 3,
      name: "Hamburger",
      ingredients: ["bun", "cheese", "mustard"],
      price: 10,
      image: food3,
      rating:4,
    },
    {
      id: 4,
      name: "Thai Fried Fish",
      ingredients: ["Fish", "protein", "veggies", "condiments"],
      price: 7,
      image: grilledFish,
      rating:4,
      
    },
    {
      id: 5,
      name: "Salmon",
      ingredients: ["greens", "veggies", "salmon"],
      price: 8,
      image: salmon,
      rating:4,
    },
    {
      id: 6,
      name: "Soup",
      ingredients: ["broth", "protein", "vegetables"],
      price: 6,
      image: soup,
      rating:3,
    },
    {
      id: 7,
      name: "Grilled Prawn",
      ingredients: ["prawn", "cheese", "lemon", "chilli sauce"],
      price: 11,
      image: prawnImg,
      rating:5,
      
    },
    {
      id: 8,
      name: "Pasta",
      ingredients: ["pasta noodles", "sauce", "protein"],
      price: 12,
      image: noodleImg,
      rating:5,
    },
    {
      id: 9,
      name: "Quesadilla",
      ingredients: ["tortilla", "cheese", "protein", "veggies"],
      price: 9,
      image: food2,
      rating:4,
    },
    {
      id: 10,
      name: "Smoothie",
      ingredients: ["fruit", "yogurt", "milk", "ice"],
      price: 5,
      image: chickenImg,
      rating:5,
    },
  ];