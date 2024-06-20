export interface Products {
  sku: string;
  name: string;
  subtitle: string;
  price: number;
  onDiscount: boolean;
  discountPercentage: number;
  isNew: boolean;
  stars: string;
  customers: number;
  size: string[];
  colors: string[];
  category: string;
  tags: string[];
  imgUrl: string[];
  quantity?: number;
}
