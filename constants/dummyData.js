import icons from "./icons";
import images from "./images";

const dummyData = {
  myProfile: {
    profile_image: require("../assets/images/profile_images/avatar-1.jpg"),
    name: 'Mhd Rizki Purba',
    address: 'Jl. Mayapada no. 11'
  },
  
  // Categories
  categories: [
    {
      id: 0,
      name: 'Fast food',
      image: icons.fastfood
    },
    {
      id: 1,
      name: 'Seafood',
      image: icons.seafood
    },
    {
      id: 2,
      name: 'Japanese food',
      image: icons.sushi
    },
    {
      id: 3,
      name: 'Dessert',
      image: icons.dessert
    },
    {
      id: 4,
      name: 'Fruit and vegetables',
      image: icons.fruit
    }
  ],

  // MENU
  menu: [
    {
      id: 0,
      name: 'Newest',
      list: [
        { 
          id: 1,
          categories: [3, 4],
          name: 'Sandwich',
          description: "Only randomised words which don't look even slightly believable",
          price: 20000,
          rating: 4.9,
          image: images.sandwich
        },
        { 
          id: 2,
          categories: [1, 2],
          name: 'Sushi',
          description: "Only randomised words which don't look even slightly believable",
          price: 110000,
          rating: 4.3,
          image: images.japanese
        },
        { 
          id: 3,
          categories: [4],
          name: 'Chicken salad',
          description: "Only randomised words which don't look even slightly believable",
          price: 35000,
          rating: 4.8,
          image: images.salad
        },
        { 
          id: 4,
          categories: [0],
          name: 'Beef cheese burger',
          isFavourite: true,
          description: "Only randomised words which don't look even slightly believable",
          price: 50000,
          rating: 4.6,
          image: images.beef_cheese_burger
        },
        { 
          id: 5,
          categories: [0],
          name: 'Crispy chicken burger',
          description: "Only randomised words which don't look even slightly believable",
          price: 30000,
          rating: 4.1,
          image: images.chicken_burger
        },
      ]
    },
    {
      id: 1,
      name: 'Nearby',
      list: [
        { 
          id: 1,
          categories: [0],
          name: 'Beef cheese burger',
          isFavourite: true,
          description: "Only randomised words which don't look even slightly believable",
          price: 50000,
          rating: 4.6,
          image: images.beef_cheese_burger
        },
        { 
          id: 2,
          categories: [0],
          name: 'French fries',
          description: "Only randomised words which don't look even slightly believable",
          price: 25000,
          rating: 4.4,
          image: images.fries
        },
        { 
          id: 3,
          categories: [0, 4],
          name: 'Hot tacos',
          description: "Only randomised words which don't look even slightly believable",
          price: 34000,
          rating: 4.4,
          image: images.tacos
        }
      ]
    },
    {
      id: 2,
      name: 'Recommended',
      list: [
        { 
          id: 1,
          categories: [0],
          name: 'Crispy chicken burger',
          description: "Only randomised words which don't look even slightly believable",
          price: 30000,
          rating: 4.1,
          image: images.chicken_burger
        },
        { 
          id: 2,
          categories: [0, 4],
          name: 'Hot Tacos',
          description: "Only randomised words which don't look even slightly believable",
          price: 4000,
          rating: 4.5,
          image: images.tacos
        },
        { 
          id: 3,
          categories: [1, 2],
          name: 'Sushi',
          description: "Only randomised words which don't look even slightly believable",
          price: 110000,
          rating: 4.3,
          image: images.japanese
        },
        { 
          id: 4,
          categories: [1],
          name: 'Seafood Package',
          description: "Only randomised words which don't look even slightly believable",
          price: 150000,
          rating: 4.7,
          image: images.seafood
        },
        { 
          id: 5,
          categories: [1],
          name: 'French fries',
          description: "Only randomised words which don't look even slightly believable",
          price: 25000,
          rating: 4.4,
          image: images.fries
        },
        { 
          id: 6,
          categories: [0],
          name: 'Meal Pizza',
          description: "Only randomised words which don't look even slightly believable",
          price: 35000,
          rating: 4.8,
          image: images.pizza
        }
      ]
    },
    {
      id: 3,
      name: 'Popular',
      list: [
        { 
          id: 1,
          categories: [0],
          name: 'Beef cheese burger',
          isFavourite: true,
          description: "Only randomised words which don't look even slightly believable",
          price: 60000,
          rating: 4.9,
          image: images.beef_cheese_burger
        },
        { 
          id: 2,
          categories: [1, 2],
          name: 'Sushi',
          description: "Only randomised words which don't look even slightly believable",
          price: 110000,
          rating: 4.3,
          image: images.japanese
        },
        { 
          id: 3,
          categories: [1],
          name: 'French fries',
          description: "Only randomised words which don't look even slightly believable",
          price: 25000,
          rating: 4.4,
          image: images.fries
        },
        { 
          id: 4,
          categories: [0],
          name: 'Meal Pizza',
          description: "Only randomised words which don't look even slightly believable",
          price: 35000,
          rating: 4.8,
          image: images.pizza
        }
      ]
    },
  ]
};

export default dummyData