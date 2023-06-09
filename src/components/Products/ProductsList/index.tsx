import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "@/contexts/Products";
import {
  FilterButtonMobile,
  FilterOrderingProducts,
  ProductListFilterContainer,
  ProductsListContainer,
  ProductsListHeader,
  ProductsListWrapper,
} from "@/styles/pages/Products/components/productsList";
import { IProduct } from "@/interfaces/IProduct";
import { ProductCard } from "@/components/ProductCard";
import { BsFilter } from "react-icons/bs";
import { FilterQuantityProducts } from "./components/FilterQuantityProducts";
import { FilterSortingProducts } from "./components/FilterSortingProducts";
import { SettingsContext } from "@/contexts/Settings";

export function ProductsList() {
  const { products } = useContext(ProductsContext);
  const { toogleDrawerFilterProduct } = useContext(SettingsContext);
  const [productsList, setProductsList] = useState<IProduct[]>([]);

  useEffect(() => {
    setProductsList(products);
  }, [products]);

  return (
    <ProductsListContainer>
      <ProductsListHeader>
        <p>
          Showing {productsList.length} of {products.length} results
        </p>
        <ProductListFilterContainer>
          <FilterButtonMobile onClick={toogleDrawerFilterProduct}>
            <p>Filter</p>
            <BsFilter size={18} />
          </FilterButtonMobile>
          <FilterOrderingProducts>
            <FilterQuantityProducts />
            <FilterSortingProducts />
          </FilterOrderingProducts>
        </ProductListFilterContainer>
      </ProductsListHeader>
      <ProductsListWrapper>
        {products &&
          productsList.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </ProductsListWrapper>
    </ProductsListContainer>
  );
}
