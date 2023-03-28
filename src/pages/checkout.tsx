import { BillingAddress } from "@/components/Checkout/BillingAddress";
import { OrderSummaryCheckout } from "@/components/Checkout/OrderSummaryCheckout";
import { PageBanner } from "@/components/PageBanner";
import { CartContext } from "@/contexts/Cart";
import { CategoriesContext } from "@/contexts/Categories";
import { ICategorie } from "@/interfaces/ICategories";
import {
  CheckoutContainer,
  CheckoutDetailsContainer,
  CheckoutInfoContainer,
  CheckoutWrapper,
} from "@/styles/pages/Checkout";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { randomUUID } from "crypto";
import { PaymentMethod } from "@/components/Checkout/PaymentMethod";

interface CheckoutProps {
  categories: ICategorie[];
}

export default function Checkout({ categories }: CheckoutProps) {
  const { handleUpdateCategories } = useContext(CategoriesContext);

  useEffect(() => {
    handleUpdateCategories(categories);
  }, [categories, handleUpdateCategories]);

  return (
    <>
      <Head>
        <title>Kick Shop - Checkout</title>
        <meta name="description" content="Kicks Shop - Checkout" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageBanner>
        <h3>Checkout</h3>
        <div>
          <span>Inicio</span> | <span>Checkout</span>
        </div>
      </PageBanner>
      <CheckoutContainer>
        <CheckoutWrapper>
          <CheckoutInfoContainer>
            <BillingAddress />
            <PaymentMethod />
          </CheckoutInfoContainer>
          <CheckoutDetailsContainer>
            <OrderSummaryCheckout />
          </CheckoutDetailsContainer>
        </CheckoutWrapper>
      </CheckoutContainer>
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

  return {
    props: {
      categories,
    },
    revalidate: 60 * 60 * 2,
  };
};
