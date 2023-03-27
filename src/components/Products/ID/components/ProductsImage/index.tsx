import {
  ProductCardImage,
  ProductCardPercentDiscount,
} from "@/styles/components/product";
import {
  ProductCardImagePreview,
  ProductCardImagePreviewContainer,
  ProductImageContainer,
  ProductImagePreviewContainer,
  ProductsImagesContainer,
} from "@/styles/pages/Products/ID/components/productsImage";
import { useState } from "react";

interface IProductImageProps {
  image: string;
  discount: number;
}

export function ProductsImage({ image, discount }: IProductImageProps) {
  const [imagesPreview, setImagesPreview] = useState([
    {
      id: 1,
      image: image,
      active: true,
    },
    {
      id: 2,
      image: image,
      active: false,
    },
    {
      id: 3,
      image: image,
      active: false,
    },
    {
      id: 4,
      image: image,
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
  );
}
