import { IProductImages } from "./IProductImages";

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  oldPrice: number;
  category: string;
  images: IProductImages[];
  rating: {
    rate: number;
    count: number;
  };
}
