import { useContext, useEffect } from "react";
import { ProductsFilter } from "@/components/Shop/ProductsFilter";
import { ProductsList } from "@/components/Shop/ProductsList";
import { ICategorie } from "@/interfaces/ICategories";
import {
  PageBanner,
  ShopContainer,
  ShopProductsFilterContainer,
} from "@/styles/pages/Shop";
import { GetStaticProps } from "next";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import { CategoriesContext } from "@/contexts/Categories";
import { IProduct } from "@/interfaces/IProduct";
import { PRODUCT_IMAGES } from "@/utils/productImages";
import { ProductsContext } from "@/contexts/Products";

interface ShopProps {
  categories: ICategorie[];
  products: IProduct[];
}

export default function Shop({ categories, products }: ShopProps) {
  const { handleUpdateCategories } = useContext(CategoriesContext);
  const { handleUpdateProducts } = useContext(ProductsContext);

  useEffect(() => {
    handleUpdateCategories(categories);
    handleUpdateProducts(products);
  }, [categories, products, handleUpdateCategories, handleUpdateProducts]);

  return (
    <>
      <Head>
        <title>Kick Shop - Loja</title>
        <meta name="description" content="Kicks Shop - Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageBanner>
        <h3>Loja</h3>
        <div>
          <span>Inicio</span> | <span>Loja</span>
        </div>
      </PageBanner>
      <ShopContainer>
        <ShopProductsFilterContainer>
          <ProductsFilter />
        </ShopProductsFilterContainer>
        <ProductsList />
      </ShopContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categorieResponse = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  const categorieData = await categorieResponse.json();

  const categories = categorieData.map((category: string) => {
    return {
      id: uuidv4(),
      name: category,
    };
  }) as ICategorie[];

  const productsResponse = await fetch("https://fakestoreapi.com/products");
  const productsData = await productsResponse.json();

  const products = productsData.map((product: IProduct) => {
    return {
      ...product,
      image: PRODUCT_IMAGES.find((image) => image.id === product.id)?.image,
      oldPrice: product.price + 10,
    };
  });

  return {
    props: {
      categories,
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
