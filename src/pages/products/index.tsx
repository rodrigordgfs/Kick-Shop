import { useContext, useEffect } from "react";
import { ProductsFilter } from "@/components/Products/ProductsFilter";
import { ProductsList } from "@/components/Products/ProductsList";
import { ICategorie } from "@/interfaces/ICategories";
import {
  ProductsContainer,
  ProductsProductsFilterContainer,
} from "@/styles/pages/Products";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { CategoriesContext } from "@/contexts/Categories";
import { IProduct } from "@/interfaces/IProduct";
import { ProductsContext } from "@/contexts/Products";
import { PageBanner } from "@/components/PageBanner";
import { CATEGORIES } from "@/api/categories";
import { PRODUCTS } from "@/api/products";

interface ProductsProps {
  categories: ICategorie[];
  products: IProduct[];
}

export default function Products({ categories, products }: ProductsProps) {
  const { handleUpdateCategories } = useContext(CategoriesContext);
  const { handleUpdateProducts } = useContext(ProductsContext);

  useEffect(() => {
    handleUpdateCategories(categories);
    handleUpdateProducts(products);
  }, [categories, products, handleUpdateCategories, handleUpdateProducts]);

  return (
    <>
      <Head>
        <title>Kick Shop - Produtos</title>
        <meta name="description" content="Kicks Shop - Produtos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageBanner>
        <h3>Produtos</h3>
        <div>
          <span>Inicio</span> | <span>Produtos</span>
        </div>
      </PageBanner>
      <ProductsContainer>
        <ProductsProductsFilterContainer>
          <ProductsFilter />
        </ProductsProductsFilterContainer>
        <ProductsList />
      </ProductsContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = CATEGORIES;
  const products = PRODUCTS;

  return {
    props: {
      categories,
      products,
    },
  };
};
