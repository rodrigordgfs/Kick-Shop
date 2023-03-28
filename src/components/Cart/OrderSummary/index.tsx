import { CartContext } from "@/contexts/Cart";
import {
  CouponCode,
  OrderSummaryContainer,
  OrderSummaryItem,
  ProceedCheckoutButton,
} from "@/styles/pages/Cart/components/orderSummary";
import { formatCurrencyBRL } from "@/utils/currencyFormat";
import { useRouter } from "next/router";
import { useContext } from "react";

export function OrderSummary() {
  const { subtotal, coupon, total } = useContext(CartContext);

  const router = useRouter();

  return (
    <OrderSummaryContainer>
      <h3>Order Summary</h3>
      <OrderSummaryItem>
        <div>Subtotal</div>
        <div>{formatCurrencyBRL.format(subtotal)}</div>
      </OrderSummaryItem>
      <OrderSummaryItem>
        <div>Shipping</div>
        <div>Free</div>
      </OrderSummaryItem>
      <OrderSummaryItem>
        <div>Coupon</div>
        {coupon ? (
          <CouponCode>{coupon.code}</CouponCode>
        ) : (
          <div>Not Applied</div>
        )}
      </OrderSummaryItem>
      <OrderSummaryItem>
        <div>
          <strong>Total</strong>
        </div>
        <div>
          <strong>{formatCurrencyBRL.format(total)}</strong>
        </div>
      </OrderSummaryItem>
      <ProceedCheckoutButton onClick={() => router.push("/checkout")}>
        Proceed to checkout
      </ProceedCheckoutButton>
    </OrderSummaryContainer>
  );
}
