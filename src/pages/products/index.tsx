import { useContext, useEffect } from "react";
import { ProductsFilter } from "@/components/Products/ProductsFilter";
import { ProductsList } from "@/components/Products/ProductsList";
import { ICategorie } from "@/interfaces/ICategories";
import {
  ProductsContainer,
  ProductsProductsFilterContainer,
} from "@/styles/pages/Products";
import { GetStaticProps } from "next";
import { randomUUID } from "crypto";
import Head from "next/head";
import { CategoriesContext } from "@/contexts/Categories";
import { IProduct } from "@/interfaces/IProduct";
import { PRODUCT_IMAGES } from "@/utils/productImages";
import { ProductsContext } from "@/contexts/Products";
import { PageBanner } from "@/components/PageBanner";

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

export const getStaticProps: GetStaticProps = async () => {
  const categorieResponse = await fetch(
    "https://fakestoreapi.com/products/categories"
  );
  const categorieData = await categorieResponse.json();

  const categories = categorieData.map((category: string) => {
    return {
      id: randomUUID(),
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
