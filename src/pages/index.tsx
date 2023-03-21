import { SliderProducts } from "@/components/Home/SliderProducts";
import { ICategorie } from "@/interfaces/ICategories";
import { HomeContainer } from "@/styles/pages/Home";
import { GetStaticProps } from "next";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { CategoriesContext } from "@/contexts/Categories";
import { Benefits } from "@/components/Home/Benefits";
import { FlashSales } from "@/components/Home/FlashSales";
import { IProduct } from "@/interfaces/IProduct";
import { PRODUCT_IMAGES } from "@/utils/productImages";
import { ProductsContext } from "@/contexts/Products";
import { TabsProducts } from "@/components/Home/TabsProducts";

interface HomeProps {
  categories: ICategorie[];
  products: IProduct[];
}

export default function Home({ categories, products }: HomeProps) {
  const { handleUpdateCategories } = useContext(CategoriesContext);
  const { handleUpdateProducts } = useContext(ProductsContext);

  useEffect(() => {
    handleUpdateProducts(products);
    handleUpdateCategories(categories);
  }, [categories, products, handleUpdateCategories, handleUpdateProducts]);

  return (
    <>
      <Head>
        <title>Kick Shop - Inicio</title>
        <meta name="description" content="Kicks Shop - Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer>
        <SliderProducts />
        <Benefits />
        <FlashSales />
        <TabsProducts />
      </HomeContainer>
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

  const productsResponse = await fetch(
    "https://fakestoreapi.com/products?limit=8"
  );
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
