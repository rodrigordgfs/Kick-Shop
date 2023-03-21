import { IProduct } from "@/interfaces/IProduct";
import { ReactNode, createContext, useState } from "react";

interface IProductsContext {
  products: IProduct[];
  handleUpdateProducts: (products: IProduct[]) => void;
}

interface IProductsContextProps {
  children: ReactNode;
}

export const ProductsContext = createContext({} as IProductsContext);

export function ProductsContextProvider({ children }: IProductsContextProps) {
  const [products, setProducts] = useState<IProduct[]>([]);

  function handleUpdateProducts(products: IProduct[]) {
    setProducts(products);
  }

  return (
    <ProductsContext.Provider value={{ products, handleUpdateProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
