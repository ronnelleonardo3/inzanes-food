export type MenuCategory =
  | "Meals"
  | "Snacks"
  | "Drinks";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  category: MenuCategory;
  price: number;
  image: string;
  rating: number;
  featured: boolean;
  available: boolean;
}