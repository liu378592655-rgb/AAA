export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
  isNew?: boolean;
  isSale?: boolean;
  ranking?: number;
}

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}
