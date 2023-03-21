import { IProduct } from "@/interfaces/IProduct";
import {
  ProductContainer,
  ProductImage,
  ProductPrices,
  ProductTitle,
} from "@/styles/components/product";
import { formatCurrencyBRL } from "@/utils/currencyFormat";
import Image from "next/image";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  return (
    <ProductContainer>
      <ProductImage>
        <Image src={product.image} alt="" width={120} height={150} />
      </ProductImage>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrices>
        <span>{formatCurrencyBRL.format(product.price)}</span>
        <span>{formatCurrencyBRL.format(product.oldPrice)}</span>
      </ProductPrices>
    </ProductContainer>
  );
}
