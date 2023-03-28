import { styled } from "@/styles";

export const PaymentMethodContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "0 16px 32px 16px",
});

export const PaymentMethodStripeButton = styled("button", {
  height: "40px",
  width: "100%",
  backgroundColor: "$primary",
  color: "$white",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  fontWeight: 500,
  fontSize: "16px",

  "&:hover": {
    backgroundColor: "$zinc-900",
  },
});
