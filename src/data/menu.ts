import { MenuItem } from "@/types/menu";

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Siomai Rice",
    description:
      "Juicy pork siomai served with garlic rice and our signature chili garlic sauce.",
    category: "Meals",
    price: 89,
    image: "/images/menu/siomai-rice.png",
    rating: 5,
    featured: true,
    available: true,
  },

  {
    id: 2,
    name: "Asado Siopao",
    description:
      "Soft steamed bun generously filled with sweet and savory pork asado.",
    category: "Snacks",
    price: 75,
    image: "/images/menu/asado-siopao.png",
    rating: 5,
    featured: true,
    available: true,
  },

  {
    id: 3,
    name: "Brown Sugar Milk Tea",
    description:
      "Premium milk tea with chewy pearls and rich brown sugar syrup.",
    category: "Drinks",
    price: 95,
    image: "/images/menu/brown-sugar-milktea.png",
    rating: 5,
    featured: true,
    available: true,
  },

  {
    id: 4,
    name: "Lumpiang Shanghai",
    description:
      "Golden crispy Filipino spring rolls served with sweet chili dipping sauce.",
    category: "Snacks",
    price: 119,
    image: "/images/menu/lumpiang-shanghai.png",
    rating: 5,
    featured: true,
    available: true,
  },

  {
    id: 5,
    name: "Fried Noodles",
    description:
      "Savory stir-fried noodles with fresh vegetables and tender sliced meat.",
    category: "Meals",
    price: 159,
    image: "/images/menu/fried-noodles.png",
    rating: 5,
    featured: true,
    available: true,
  },

  {
    id: 6,
    name: "Beef Noodles",
    description:
      "Rich beef noodle soup with tender beef slices, egg, and green onions.",
    category: "Meals",
    price: 189,
    image: "/images/menu/beef-noodles.png",
    rating: 5,
    featured: true,
    available: true,
  },

  {
    id: 7,
    name: "Vegetable Fried Rice",
    description:
      "Flavorful fried rice loaded with colorful vegetables and fresh herbs.",
    category: "Meals",
    price: 139,
    image: "/images/menu/vegetable-fried-rice.png",
    rating: 5,
    featured: false,
    available: true,
  },

  {
    id: 8,
    name: "Seafood Fried Rice",
    description:
      "Premium fried rice with shrimp, squid, vegetables, and aromatic seasonings.",
    category: "Meals",
    price: 199,
    image: "/images/menu/seafood-fried-rice.png",
    rating: 5,
    featured: true,
    available: true,
  },

  {
    id: 9,
    name: "Classic Milk Tea",
    description:
      "Creamy classic milk tea with chewy tapioca pearls.",
    category: "Drinks",
    price: 99,
    image: "/images/menu/classic-milktea.png",
    rating: 5,
    featured: true,
    available: true,
  },

  {
    id: 10,
    name: "Jasmine Milk Tea",
    description:
      "Refreshing jasmine-infused milk tea with tapioca pearls.",
    category: "Drinks",
    price: 109,
    image: "/images/menu/jasmine-milktea.png",
    rating: 5,
    featured: false,
    available: true,
  },

  {
    id: 11,
    name: "Almond Jelly",
    description:
      "Silky almond jelly topped with fresh seasonal fruits.",
    category: "Snacks",
    price: 89,
    image: "/images/menu/almond-jelly.png",
    rating: 5,
    featured: false,
    available: true,
  },

  {
    id: 12,
    name: "Mango Sago",
    description:
      "Creamy mango dessert with sago pearls and fresh mango cubes.",
    category: "Snacks",
    price: 119,
    image: "/images/menu/mango-sago.png",
    rating: 5,
    featured: true,
    available: true,
  },
];console.log("TOTAL MENU ITEMS:", menuItems.length);