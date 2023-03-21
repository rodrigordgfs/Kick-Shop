import { useContext } from "react";
import {
  TabSpacer,
  TabsProductsContainer,
  TabsProductsContent,
  TabsProductsHeader,
  TabsProductsHeaderItem,
  ViewAllProductsButtonContainer,
} from "@/styles/pages/Home/components/tabsProducts";
import * as Tabs from "@radix-ui/react-tabs";
import { ProductsContext } from "@/contexts/Products";
import { IProduct } from "@/interfaces/IProduct";
import { Product } from "@/components/Product";

export function TabsProducts() {
  const { products } = useContext(ProductsContext);

  function suffleArray(array: IProduct[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <TabsProductsContainer>
      <Tabs.Root defaultValue="NewArrival">
        <TabsProductsHeader aria-label="Products">
          <TabsProductsHeaderItem value="NewArrival">
            New Arrival
          </TabsProductsHeaderItem>
          <TabsProductsHeaderItem value="BestSeller">
            Best Seller
          </TabsProductsHeaderItem>
          <TabsProductsHeaderItem value="Featured">
            Featured
          </TabsProductsHeaderItem>
          <TabsProductsHeaderItem value="TopRated">
            Top Rated
          </TabsProductsHeaderItem>
          <TabsProductsHeaderItem value="MostPopular">
            MostPopular
          </TabsProductsHeaderItem>
        </TabsProductsHeader>
        <TabSpacer></TabSpacer>
        <TabsProductsContent value="NewArrival">
          {suffleArray(products).map((product) => {
            return product && <Product product={product} key={product.id} />;
          })}
        </TabsProductsContent>
        <TabsProductsContent value="BestSeller">
          {suffleArray(products).map((product) => {
            return product && <Product product={product} key={product.id} />;
          })}
        </TabsProductsContent>
        <TabsProductsContent value="Featured">
          {suffleArray(products).map((product) => {
            return product && <Product product={product} key={product.id} />;
          })}
        </TabsProductsContent>
        <TabsProductsContent value="TopRated">
          {suffleArray(products).map((product) => {
            return product && <Product product={product} key={product.id} />;
          })}
        </TabsProductsContent>
        <TabsProductsContent value="MostPopular">
          {suffleArray(products).map((product) => {
            return product && <Product product={product} key={product.id} />;
          })}
        </TabsProductsContent>
      </Tabs.Root>
      <ViewAllProductsButtonContainer>
        <button>View All Products</button>
      </ViewAllProductsButtonContainer>
    </TabsProductsContainer>
  );
}
