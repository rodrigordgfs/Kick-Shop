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
import { ProductCard } from "@/components/ProductCard";

export function FlashSales() {
  const { products } = useContext(ProductsContext);

  const productsList = products.slice(0, 4);

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
        {productsList &&
          productsList.map((product) => {
            return (
              product && <ProductCard product={product} key={product.id} />
            );
          })}
      </FlashSalesBody>
    </FlashSalesContainer>
  );
}
