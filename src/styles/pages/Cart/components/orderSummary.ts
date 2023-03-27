import { styled } from "@/styles";

export const OrderSummaryContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "300px",
  width: "100%",
  background: "$zinc-100",
  padding: "16px",
  borderRadius: "10px",
});

export const OrderSummaryItem = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "$white",
  padding: "16px 8px",
  borderRadius: "8px",

  div: {
    flex: "0 0 50%",
  },
});

export const CouponCode = styled("div", {
  fontWeight: 500,
  color: "$primary",
});

export const ProceedCheckoutButton = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "$primary",
  color: "$white",
  padding: "16px",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  border: "none",
  fontWeight: "500",

  "&:hover": {
    background: "$zinc-900",
  },
});
