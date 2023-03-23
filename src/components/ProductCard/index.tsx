import { IProduct } from "@/interfaces/IProduct";
import {
  ProductCardContainer,
  ProductCardImage,
  ProductCardImageContiner,
  ProductCardPercentDiscount,
  ProductCardPrices,
  ProductCardRating,
  ProductCardTitle,
} from "@/styles/components/product";
import { formatCurrencyBRL } from "@/utils/currencyFormat";
import StarRatings from "react-star-ratings";

interface ProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const discount = 100 - Math.floor((product.price * 100) / product.oldPrice);

  return (
    <ProductCardContainer>
      <ProductCardImageContiner>
        {discount > 0 && (
          <ProductCardPercentDiscount>
            {String(discount).padStart(2, "0")}%
          </ProductCardPercentDiscount>
        )}
        <ProductCardImage src={product.image} alt="" />
      </ProductCardImageContiner>
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
