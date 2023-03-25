import { IProduct } from "@/interfaces/IProduct";
import {
  ProductsPriceRating,
  ProductsIDContainer,
  ProductsImagesContainer,
  ProductsInfoContainer,
  ProductsInfoWrapper,
  ProductsPrice,
  ProductsRating,
  ProductsRatingStar,
  ProductsDescriptionContainer,
  ProductActionsContainer,
  ProductActionsCounter,
  ProductAddToCard,
  ProductBuyNow,
  ProductImagePreviewContainer,
  ProductImageContainer,
  ProductCardPercentDiscount,
  ProductCardImage,
  ProductCardImagePreview,
  ProductCardImagePreviewContainer,
  ProductWishListSocialNetworkContainer,
  ProductsSocialNetwork,
} from "@/styles/pages/ProductsID";
import { formatCurrencyBRL } from "@/utils/currencyFormat";
import { PRODUCT_IMAGES } from "@/utils/productImages";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

interface ProductProps {
  product: IProduct;
}

export default function Products({ product }: ProductProps) {
  const discount = 100 - Math.floor((product.price * 100) / product.oldPrice);

  const [imagesPreview, setImagesPreview] = useState([
    {
      id: 1,
      image: product.image,
      active: true,
    },
    {
      id: 2,
      image: product.image,
      active: false,
    },
    {
      id: 3,
      image: product.image,
      active: false,
    },
    {
      id: 4,
      image: product.image,
      active: false,
    },
  ]);

  const [activeImage, setActiveImage] = useState(
    imagesPreview.find((image) => image.active)
  );

  function handleChangeImage(id: number) {
    setImagesPreview((state) => {
      return state.map((image) => {
        if (image.id === id) {
          setActiveImage(image);
          return {
            ...image,
            active: true,
          };
        }

        return {
          ...image,
          active: false,
        };
      });
    });
  }

  return (
    <>
      <Head>
        <title>Kick Shop - {product.title}</title>
        <meta name="description" content={`Kicks Shop - ${product.title}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductsIDContainer>
        <ProductsInfoWrapper>
          <ProductsImagesContainer>
            <ProductImagePreviewContainer>
              {imagesPreview.map((data) => (
                <ProductCardImagePreviewContainer
                  key={data.id}
                  active={data.active}
                  onClick={() => handleChangeImage(data.id)}
                >
                  <ProductCardImagePreview src={data.image} alt="" />
                </ProductCardImagePreviewContainer>
              ))}
            </ProductImagePreviewContainer>
            <ProductImageContainer>
              {discount > 0 && (
                <ProductCardPercentDiscount>
                  {String(discount).padStart(2, "0")}%
                </ProductCardPercentDiscount>
              )}
              <ProductCardImage src={activeImage?.image as string} alt="" />
            </ProductImageContainer>
          </ProductsImagesContainer>
          <ProductsInfoContainer>
            <h1>{product.title}</h1>
            <ProductsPriceRating>
              <ProductsPrice>
                <span>{formatCurrencyBRL.format(product.price)}</span>
                <span>{formatCurrencyBRL.format(product.oldPrice)}</span>
              </ProductsPrice>
              <ProductsRating>
                <ProductsRatingStar size={18} />
                <span>{product.rating.rate}</span>
                <span>&middot;</span>
                <span>{product.rating.count} reviews</span>
              </ProductsRating>
            </ProductsPriceRating>
            <ProductsDescriptionContainer>
              <p>{product.description}</p>
            </ProductsDescriptionContainer>
            <ProductActionsContainer>
              <ProductActionsCounter>
                <div>
                  <AiOutlineMinus size={18} />
                </div>
                <div>
                  <span>0</span>
                </div>
                <div>
                  <AiOutlinePlus size={18} />
                </div>
              </ProductActionsCounter>
              <ProductAddToCard>Add to cart</ProductAddToCard>
              <ProductBuyNow>Buy now</ProductBuyNow>
            </ProductActionsContainer>
            <ProductWishListSocialNetworkContainer>
              <div>
                <button>Add to wishlist</button>
              </div>
              <div>
                <ProductsSocialNetwork>
                  <div>
                    <BsFacebook size={18} />
                  </div>
                  <div>
                    <BsTwitter size={18} />
                  </div>
                  <div>
                    <BsInstagram size={18} />
                  </div>
                  <div>
                    <BsYoutube size={18} />
                  </div>
                </ProductsSocialNetwork>
              </div>
            </ProductWishListSocialNetworkContainer>
          </ProductsInfoContainer>
        </ProductsInfoWrapper>
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
