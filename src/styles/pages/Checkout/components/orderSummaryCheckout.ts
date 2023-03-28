import { styled } from "@/styles";
import Image from "next/image";

export const OrderSummaryCheckoutProductsList = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "8px 16px",
});

export const OrderSummaryCheckoutProductsItem = styled("li", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
  paddingTop: "8px",

  "& + &": {
    borderTop: "1px solid $zinc-100",
  },
});

export const OrderSummaryCheckoutProductsItemImageContainer = styled("div", {
  flex: "0 0 80px",
  width: "80px",
  height: "80px",
  borderRadius: "8px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$zinc-100",
});

export const OrderSummaryCheckoutProductsItemImage = styled(Image, {
  maxWidth: "60px",
  maxHeight: "60px",
  width: "100%",
  height: "100%",
});

export const OrderSummaryCheckoutProductsItemInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  gap: "4px",

  "span:nth-child(1)": {
    fontSize: "14px",
    fontWeight: 600,
    color: "$gray-600",
  },

  "span:nth-child(2)": {
    fontSize: "14px",
    fontWeight: 400,
    color: "$gray-400",
  },

  "span:nth-child(3)": {
    fontSize: "14px",
    fontWeight: 400,
    color: "$gray-400",
  },
});

export const OrderSummaryCheckoutShippingMethod = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "8px 16px",
  marginTop: "8px",
  borderTop: "1px solid $zinc-100",
});

export const OrderSummaryCheckoutShippingMethodTitle = styled("span", {
  fontWeight: 500,
  fontSize: "18px",
});

export const OrderSummaryCheckoutShippingMethodOptions = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "8px",
});

export const OrderSummaryCheckoutCoupon = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "8px 16px",
});

export const OrderSummaryCheckoutCouponTitle = styled("span", {
  fontWeight: 500,
  fontSize: "18px",
});

export const OrderSummaryCheckoutCouponContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "8px",
});

export const OrderSummaryCheckoutCouponCode = styled("span", {
  fontWeight: 500,
  color: "$primary",
});

export const OrderSummaryCheckoutTotal = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "8px 16px",
  margin: "8px 0 16px 0",
  borderTop: "1px solid $zinc-100",
  gap: "8px",

  div: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "8px",

    "span:last-child": {
      fontWeight: 500,
    },
  },
});
