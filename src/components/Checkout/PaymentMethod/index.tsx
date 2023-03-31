import {
  PaymentMethodContainer,
  PaymentMethodStripeButton,
} from "@/styles/pages/Checkout/components/paymentMethod";
import { Panel } from "../Panel";

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
