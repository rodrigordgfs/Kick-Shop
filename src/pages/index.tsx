import { SliderProducts } from "@/components/Home/SliderProducts";
import { ICategories } from "@/interfaces/ICategories";
import { HomeContainer } from "@/styles/pages/home";
import { GetStaticProps } from "next";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { CategoriesContext } from "@/contexts/Categories";

interface HomeProps {
  categories: ICategories[];
}

export default function Home({ categories }: HomeProps) {
  const { handleUpdateCategories } = useContext(CategoriesContext);

  useEffect(() => {
    handleUpdateCategories(categories);
  }, [categories, handleUpdateCategories]);

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
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data = await response.json();

  const categories = data.map((category: string) => {
    return {
      id: uuidv4(),
      name: category,
    };
  }) as ICategories[];

  return {
    props: {
      categories,
    },
    revalidate: 60 * 60 * 2,
  };
};
