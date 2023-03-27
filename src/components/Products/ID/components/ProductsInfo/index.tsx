import {
  ProductActionsContainer,
  ProductActionsCounter,
  ProductAddToCard,
  ProductBuyNow,
  ProductWishListSocialNetworkContainer,
  ProductsDescriptionContainer,
  ProductsInfoContainer,
  ProductsPrice,
  ProductsPriceRating,
  ProductsRating,
  ProductsRatingStar,
  ProductsSocialNetwork,
} from "@/styles/pages/Products/ID/components/productsInfo";
import { formatCurrencyBRL } from "@/utils/currencyFormat";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

interface IProductsInfoProps {
  title: string;
  price: number;
  oldPrice: number;
  rating: {
    rate: number;
    count: number;
  };
  description: string;
}

export function ProductsInfo({
  title,
  price,
  oldPrice,
  rating,
  description,
}: IProductsInfoProps) {
  return (
    <ProductsInfoContainer>
      <h1>{title}</h1>
      <ProductsPriceRating>
        <ProductsPrice>
          <span>{formatCurrencyBRL.format(price)}</span>
          <span>{formatCurrencyBRL.format(oldPrice)}</span>
        </ProductsPrice>
        <ProductsRating>
          <ProductsRatingStar size={18} />
          <span>{rating.rate}</span>
          <span>&middot;</span>
          <span>{rating.count} reviews</span>
        </ProductsRating>
      </ProductsPriceRating>
      <ProductsDescriptionContainer>
        <p>{description}</p>
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
  );
}
