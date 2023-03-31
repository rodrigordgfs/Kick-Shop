import { IProduct } from "@/interfaces/IProduct";
import {
  ProductsIDContainer,
  ProductsInfoWrapper,
  ProductDetailsWrapper,
  ProductDetailsHeader,
  ProductDetailsHeaderItem,
  ProductDetailsContent,
  ProductDetailsContentDescription,
} from "@/styles/pages/Products/ID";
import Head from "next/head";
import * as Tabs from "@radix-ui/react-tabs";
import { ProductsImage } from "@/components/Products/ID/components/ProductsImage";
import { ProductsInfo } from "@/components/Products/ID/components/ProductsInfo";
import { ProductDetailsReview } from "@/components/Products/ID/components/ProductDetailsReview";
import { PRODUCTS } from "@/api/products";
import { GetStaticPaths, GetStaticProps } from "next";

interface ProductProps {
  product: IProduct;
}

export default function Products({ product }: ProductProps) {
  const title = `Kick Shop - ${product.title}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductsIDContainer>
        <ProductsInfoWrapper>
          <ProductsImage
            images={product.images}
            discount={
              100 - Math.floor((product.price * 100) / product.oldPrice)
            }
          />
          <ProductsInfo
            id={product.id}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
            description={product.description}
          />
        </ProductsInfoWrapper>
        <ProductDetailsWrapper>
          <Tabs.Root defaultValue="description">
            <ProductDetailsHeader>
              <ProductDetailsHeaderItem value="description">
                Description
              </ProductDetailsHeaderItem>
              <ProductDetailsHeaderItem value="review">
                Review
              </ProductDetailsHeaderItem>
            </ProductDetailsHeader>
            <ProductDetailsContent value="description">
              <ProductDetailsContentDescription>
                {product.description}
              </ProductDetailsContentDescription>
            </ProductDetailsContent>
            <ProductDetailsContent value="review">
              <ProductDetailsReview />
            </ProductDetailsContent>
          </Tabs.Root>
        </ProductDetailsWrapper>
      </ProductsIDContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "828866e4-d0c2-4f3d-a962-0c6355e6200e" } }
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id;

  const product = PRODUCTS.find((product) => product.id === productId) as IProduct;

  return {
    props: {
      product
    }
  };
};
