export interface Product {
  id: number,
  img: string;
  title: string;
  color: string;
  producer: string;
  price: string;
  createdAt: string;
  inStock?: boolean;
}
