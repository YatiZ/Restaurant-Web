import food1 from "../images/pngegg (1).png";
import chickenImg from "../images/pngegg (2).png";
import prawnImg from "../images/pngegg (6).png";
import noodleImg from "../images/pngegg (7).png";
import food2 from "../images/pngegg (4).png";
import food3 from "../images/pngegg (5).png";

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
      name: "Pizza",
      ingredients: ["dough", "tomato sauce", "cheese", "toppings"],
      price: 15,
      image: chickenImg,
      rating:5,
    },
    {
      id: 3,
      name: "Hamburger",
      ingredients: ["bun", "hamburger patty", "cheese", "ketchup", "mustard"],
      price: 10,
      image: prawnImg,
      rating:4,
    },
    {
      id: 4,
      name: "Pasta",
      ingredients: ["pasta noodles", "sauce", "protein"],
      price: 12,
      image: noodleImg,
      rating:5,
    },
    {
      id: 5,
      name: "Salad",
      ingredients: ["greens", "veggies", "dressing"],
      price: 8,
      image: food3,
      rating:4,
    },
    {
      id: 6,
      name: "Soup",
      ingredients: ["broth", "protein", "vegetables"],
      price: 6,
      image: food2,
      rating:3,
    },
    {
      id: 7,
      name: "Sandwich",
      ingredients: ["bread", "protein", "veggies", "condiments"],
      price: 7,
      image: prawnImg,
      rating:4,
    },
    {
      id: 8,
      name: "Breakfast Burrito",
      ingredients: ["tortilla", "eggs", "meat", "cheese", "salsa"],
      price: 11,
      image: food1,
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