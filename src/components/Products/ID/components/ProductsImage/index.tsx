import { IProductImages } from "@/interfaces/IProductImages";
import {
  ProductCardImage,
  ProductCardImagePreview,
  ProductCardImagePreviewContainer,
  ProductCardPercentDiscount,
  ProductImageContainer,
  ProductImagePreviewContainer,
  ProductsImagesContainer,
} from "@/styles/pages/Products/ID/components/productsImage";
import { useState } from "react";

interface IProductImageProps {
  images: IProductImages[];
  discount: number;
}

interface IImagePreview {
  id: string;
  image: string;
  active: boolean;
}

export function ProductsImage({ images, discount }: IProductImageProps) {
  const [imagesPreview, setImagesPreview] = useState(
    images.map((image, index) => {
      return {
        id: image.id,
        image: image.url as string,
        active: index === 0 ? true : false,
      } as IImagePreview;
    })
  );

  const [activeImage, setActiveImage] = useState(
    imagesPreview.find((image) => image.active === true)
  );

  function handleChangeImage(id: string) {
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
        {imagesPreview &&
          imagesPreview.map((data) => (
            <ProductCardImagePreviewContainer
              key={data.id}
              active={data.active}
              onClick={() => handleChangeImage(data.id)}
            >
              <ProductCardImagePreview
                src={data.image}
                alt=""
                width={75}
                height={75}
              />
            </ProductCardImagePreviewContainer>
          ))}
      </ProductImagePreviewContainer>
      <ProductImageContainer>
        {discount > 0 && (
          <ProductCardPercentDiscount>
            {`${String(discount).padStart(2, "0")}%`}
          </ProductCardPercentDiscount>
        )}
        <ProductCardImage
          src={activeImage?.image as string}
          alt=""
          width={300}
          height={400}
        />
      </ProductImageContainer>
    </ProductsImagesContainer>
  );
}
