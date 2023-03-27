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
import { PRODUCT_IMAGES } from "@/utils/productImages";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import * as Tabs from "@radix-ui/react-tabs";
import { ProductsImage } from "@/components/Products/ID/components/ProductsImage";
import { ProductsInfo } from "@/components/Products/ID/components/ProductsInfo";
import { ProductDetailsReview } from "@/components/Products/ID/components/ProductDetailsReview";

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
            image={product.image}
            discount={
              100 - Math.floor((product.price * 100) / product.oldPrice)
            }
          />
          <ProductsInfo
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
            <ProductDetailsContent value="aditional_information"></ProductDetailsContent>
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
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
      { params: { id: "5" } },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id;

  const productResponse = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );
  const product = await productResponse.json();

  return {
    props: {
      product: {
        ...product,
        image: PRODUCT_IMAGES.find((image) => image.id === product.id)?.image,
        oldPrice: product.price + 10,
      },
    },
    revalidate: 60 * 60 * 2,
  };
};
