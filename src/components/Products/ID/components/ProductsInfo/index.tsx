import { CartContext } from "@/contexts/Cart";
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
import { useContext, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

interface IProductsInfoProps {
  id: number;
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
  id,
  title,
  price,
  oldPrice,
  rating,
  description,
}: IProductsInfoProps) {
  const [quantity, setQuantity] = useState(0);

  const { handleUpdateCart } = useContext(CartContext);

  const disableAddToCart = quantity === 0;

  function handleChangeQuantity(action: "add" | "remove") {
    if (action === "add") {
      if (quantity >= 0) {
        setQuantity((quantity) => quantity + 1);
      }
    } else {
      if (quantity > 0) {
        setQuantity((quantity) => quantity - 1);
      }
    }
  }

  function handleAddToCart() {
    handleUpdateCart(id, quantity);
    setQuantity(0);
  }

  function handleBuyNow() {
    handleUpdateCart(id, 1);
    // Redirect to checkout
  }

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
          <div onClick={() => handleChangeQuantity("remove")}>
            <AiOutlineMinus size={18} />
          </div>
          <div>
            <span>{quantity}</span>
          </div>
          <div onClick={() => handleChangeQuantity("add")}>
            <AiOutlinePlus size={18} />
          </div>
        </ProductActionsCounter>
        <ProductAddToCard onClick={handleAddToCart} disabled={disableAddToCart}>
          Add to cart
        </ProductAddToCard>
        <ProductBuyNow onClick={handleBuyNow}>Buy now</ProductBuyNow>
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
