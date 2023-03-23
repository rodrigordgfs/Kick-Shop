import { useContext } from "react";
import {
  FlashSalesBody,
  FlashSalesContainer,
  FlashSalesHeader,
  FlashSalesHeaderActions,
  FlashSalesHeaderTitle,
} from "@/styles/pages/Home/components/flashSales";
import { Countdown } from "./components/Countdown";
import { ProductsContext } from "@/contexts/Products";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";

export function FlashSales() {
  const { products } = useContext(ProductsContext);

  const productsList = [products[0], products[1], products[2], products[3]];

  return (
    <FlashSalesContainer>
      <FlashSalesHeader>
        <FlashSalesHeaderTitle>
          <h2>Flash Sales</h2>
          <Countdown />
        </FlashSalesHeaderTitle>
        <FlashSalesHeaderActions>
          <button>View all deals</button>
        </FlashSalesHeaderActions>
      </FlashSalesHeader>
      <FlashSalesBody>
        {productsList.map((product) => {
          return product && <ProductCard product={product} key={product.id} />;
        })}
      </FlashSalesBody>
    </FlashSalesContainer>
  );
}
