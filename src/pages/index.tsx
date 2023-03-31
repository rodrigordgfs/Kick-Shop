import { SliderProducts } from "@/components/Home/SliderProducts";
import { ICategorie } from "@/interfaces/ICategories";
import { HomeContainer } from "@/styles/pages/Home";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { CategoriesContext } from "@/contexts/Categories";
import { Benefits } from "@/components/Home/Benefits";
import { FlashSales } from "@/components/Home/FlashSales";
import { IProduct } from "@/interfaces/IProduct";
import { ProductsContext } from "@/contexts/Products";
import { TabsProducts } from "@/components/Home/TabsProducts";
import { CATEGORIES } from "@/api/categories";
import { PRODUCTS } from "@/api/products";

interface HomeProps {
  categories: ICategorie[];
  products: IProduct[];
}

export default function Home({ categories, products }: HomeProps) {
  const { handleUpdateCategories } = useContext(CategoriesContext);
  const { handleUpdateProducts } = useContext(ProductsContext);

  useEffect(() => {
    handleUpdateProducts(products);
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

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = CATEGORIES;
  const products = PRODUCTS.slice(0, 8);

  return {
    props: {
      categories,
      products,
    },
  };
};
