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
];