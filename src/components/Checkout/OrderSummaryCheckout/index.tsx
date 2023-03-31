import { useContext } from "react";
import { Panel } from "../Panel";
import { CartContext } from "@/contexts/Cart";
import { ProductsContext } from "@/contexts/Products";
import {
  OrderSummaryCheckoutCoupon,
  OrderSummaryCheckoutCouponCode,
  OrderSummaryCheckoutCouponContent,
  OrderSummaryCheckoutCouponTitle,
  OrderSummaryCheckoutProductsItem,
  OrderSummaryCheckoutProductsItemImage,
  OrderSummaryCheckoutProductsItemImageContainer,
  OrderSummaryCheckoutProductsItemInfo,
  OrderSummaryCheckoutProductsList,
  OrderSummaryCheckoutShippingMethod,
  OrderSummaryCheckoutShippingMethodOptions,
  OrderSummaryCheckoutShippingMethodTitle,
  OrderSummaryCheckoutTotal,
} from "@/styles/pages/Checkout/components/orderSummaryCheckout";
import { formatCurrencyBRL } from "@/utils/currencyFormat";

export function OrderSummaryCheckout() {
  const { cart, coupon, subtotal, total } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  return (
    <Panel title="Order Summary">
      <OrderSummaryCheckoutProductsList>
        {cart &&
          cart.map((cartItem) => {
            const product = products.find(
              (product) => product.id === cartItem.id
            );

            return (
              <OrderSummaryCheckoutProductsItem key={cartItem.id}>
                <OrderSummaryCheckoutProductsItemImageContainer>
                  <OrderSummaryCheckoutProductsItemImage
                    src={product?.images[0].url as string}
                    alt=""
                    width={60}
                    height={60}
                  />
                </OrderSummaryCheckoutProductsItemImageContainer>
                <OrderSummaryCheckoutProductsItemInfo>
                  <span>{product?.title}</span>
                  <span>Quantity: {cartItem.quantity}</span>
                  <span>
                    Subtotal:{" "}
                    {formatCurrencyBRL.format(
                      cartItem.quantity * (product?.price as number)
                    )}
                  </span>
                </OrderSummaryCheckoutProductsItemInfo>
              </OrderSummaryCheckoutProductsItem>
            );
          })}
      </OrderSummaryCheckoutProductsList>
      <OrderSummaryCheckoutShippingMethod>
        <OrderSummaryCheckoutShippingMethodTitle>
          Shipping Delivery
        </OrderSummaryCheckoutShippingMethodTitle>
        <OrderSummaryCheckoutShippingMethodOptions>
          <span>Free Shipping</span>
        </OrderSummaryCheckoutShippingMethodOptions>
      </OrderSummaryCheckoutShippingMethod>
      <OrderSummaryCheckoutCoupon>
        <OrderSummaryCheckoutCouponTitle>
          Coupon
        </OrderSummaryCheckoutCouponTitle>
        <OrderSummaryCheckoutCouponContent>
          {coupon ? (
            <OrderSummaryCheckoutCouponCode>
              {coupon.code}
            </OrderSummaryCheckoutCouponCode>
          ) : (
            <span>Not Applied</span>
          )}
        </OrderSummaryCheckoutCouponContent>
      </OrderSummaryCheckoutCoupon>
      <OrderSummaryCheckoutTotal>
        <div>
          <span>Subtotal</span>
          <span>{formatCurrencyBRL.format(subtotal)}</span>
        </div>
        <div>
          <span>Shipping Fee</span>
          <span>Free</span>
        </div>
        <div>
          <span>Total</span>
          <span>{formatCurrencyBRL.format(total)}</span>
        </div>
      </OrderSummaryCheckoutTotal>
    </Panel>
  );
}
