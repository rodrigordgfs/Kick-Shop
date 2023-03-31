import { BillingAddress } from "@/components/Checkout/BillingAddress";
import { OrderSummaryCheckout } from "@/components/Checkout/OrderSummaryCheckout";
import { PageBanner } from "@/components/PageBanner";
import { CategoriesContext } from "@/contexts/Categories";
import { ICategorie } from "@/interfaces/ICategories";
import {
  CheckoutContainer,
  CheckoutDetailsContainer,
  CheckoutInfoContainer,
  CheckoutWrapper,
} from "@/styles/pages/Checkout";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { PaymentMethod } from "@/components/Checkout/PaymentMethod";
import { CATEGORIES } from "@/api/categories";

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

export const getServerSideProps: GetServerSideProps = async () => {
  const categories = CATEGORIES;

  return {
    props: {
      categories,
    },
  };
};
