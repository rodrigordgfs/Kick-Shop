import { PageBanner } from "@/components/PageBanner";
import { CategoriesContext } from "@/contexts/Categories";
import { ICategorie } from "@/interfaces/ICategories";
import { CartContainer } from "@/styles/pages/Cart";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

interface CartProps {
  categories: ICategorie[];
}

export default function Cart({ categories }: CartProps) {
  const { handleUpdateCategories } = useContext(CategoriesContext);

  useEffect(() => {
    handleUpdateCategories(categories);
  }, [categories, handleUpdateCategories]);

  return (
    <>
      <Head>
        <title>Kick Shop - Cart</title>
        <meta name="description" content="Kicks Shop - Cart" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageBanner>
        <h3>Cart</h3>
        <div>
          <span>Inicio</span> | <span>Cart</span>
        </div>
      </PageBanner>
      <CartContainer>
        <h1>Cart</h1>
      </CartContainer>
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

  return {
    props: {
      categories,
    },
    revalidate: 60 * 60 * 2,
  };
};
