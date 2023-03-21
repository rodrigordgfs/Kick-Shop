export interface IProduct {
  id: number;
  title: string;
  price: number;
  oldPrice: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
