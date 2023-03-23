import { IProduct } from "@/interfaces/IProduct";
import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardPercentDiscount,
  ProductCardPrices,
  ProductCardRating,
  ProductCardTitle,
} from "@/styles/components/product";
import { formatCurrencyBRL } from "@/utils/currencyFormat";
import StarRatings from "react-star-ratings";
import Image from "next/image";

interface ProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = 100 - Math.floor((product.price * 100) / product.oldPrice);

  return (
    <ProductCardContainer>
      <ProductCardImage>
        {discount > 0 && (
          <ProductCardPercentDiscount>
            {String(discount).padStart(2, "0")}%
          </ProductCardPercentDiscount>
        )}
        <Image src={product.image} alt="" width={120} height={150} />
      </ProductCardImage>
      <ProductCardTitle>{product.title}</ProductCardTitle>
      <ProductCardPrices>
        <span>{formatCurrencyBRL.format(product.price)}</span>
        <span>{formatCurrencyBRL.format(product.oldPrice)}</span>
      </ProductCardPrices>
      <ProductCardRating>
        <StarRatings
          rating={product.rating.rate}
          starRatedColor="#FF6650"
          starDimension="16px"
          starSpacing="1px"
        />
        <span>({product.rating.count})</span>
      </ProductCardRating>
    </ProductCardContainer>
  );
}
