import {
  PaymentMethodContainer,
  PaymentMethodStripeButton,
} from "@/styles/pages/Checkout/components/paymentMethod";
import { Panel } from "../Panel";
import Image from "next/image";
import Stripe from "../../../assets/stripe-1.svg";

export function PaymentMethod() {
  return (
    <Panel title="Payment Methods">
      <PaymentMethodContainer>
        <PaymentMethodStripeButton>
          Checkout on Stripe
        </PaymentMethodStripeButton>
      </PaymentMethodContainer>
    </Panel>
  );
}
