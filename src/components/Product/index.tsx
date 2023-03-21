import { IProduct } from "@/interfaces/IProduct";
import {
  ProductContainer,
  ProductImage,
  ProductPercentDiscount,
  ProductPrices,
  ProductRating,
  ProductTitle,
} from "@/styles/components/product";
import { formatCurrencyBRL } from "@/utils/currencyFormat";
import StarRatings from "react-star-ratings";
import Image from "next/image";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const discount = 100 - Math.floor((product.price * 100) / product.oldPrice);

  return (
    <ProductContainer>
      <ProductImage>
        {discount > 0 && (
          <ProductPercentDiscount>
            {String(discount).padStart(2, "0")}%
          </ProductPercentDiscount>
        )}
        <Image src={product.image} alt="" width={120} height={150} />
      </ProductImage>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrices>
        <span>{formatCurrencyBRL.format(product.price)}</span>
        <span>{formatCurrencyBRL.format(product.oldPrice)}</span>
      </ProductPrices>
      <ProductRating>
        <StarRatings
          rating={product.rating.rate}
          starRatedColor="#FF6650"
          starDimension="16px"
          starSpacing="1px"
        />
        <span>({product.rating.count})</span>
      </ProductRating>
    </ProductContainer>
  );
}
