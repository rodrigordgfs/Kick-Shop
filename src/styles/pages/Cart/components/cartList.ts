import { styled } from "@/styles";
import Image from "next/image";

export const CartListContainer = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const CartListContent = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  listStyleType: "none",
});

export const CartListItem = styled("li", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  border: "1px solid $zinc-200",
  borderRadius: "10px",
  alignItems: "center",
  padding: "16px 16px 16px 0",
});

export const CartListItemRemoveContainer = styled("div", {
  marginLeft: "16px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  cursor: "pointer",
  color: "$zinc-600",

  "&:hover": {
    background: "$zinc-100",
  },
});

export const CartListItemInfoContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  alignItems: "center",
  flex: 1,
});

export const CartListItemInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  flex: 1,

  p: {
    fontWeight: "500",
  },

  "@mobile": {
    p: {
      fontSize: "14px",
    },
  },
});

export const CartListItemInfoImageContainer = styled("div", {
  width: "80px",
  height: "80px",
  borderRadius: "10px",
  background: "$zinc-100",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@mobile": {
    width: "60px",
    height: "60px",
  },
});

export const CartListItemInfoImage = styled(Image, {
  maxWidth: "60px",
  maxHeight: "60px",
  width: "auto",
  height: "auto",

  "@mobile": {
    maxWidth: "40px",
    maxHeight: "40px",
  },
});

export const CartListItemPrice = styled("div", {
  color: "$zinc-600",

  "@mobile": {
    fontSize: "14px",
  },
});
export const CartListItemQuantity = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "center",
  border: "1px solid $zinc-300",
  borderRadius: "10px",
  justifyContent: "space-between",
  padding: "8px 12px",

  "div:first-child, div:last-child": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",

    "&:hover": {
      color: "$primary",
    },
  },

  div: {
    span: {
      fontSize: "14px",
      fontWeight: 500,
      color: "$zinc-700",
      padding: "0 8px",
    },
  },
});

export const CartListItemSubtotal = styled("div", {
  color: "$zinc-600",

  "@mobile": {
    fontSize: "14px",
  },
});

export const CartListFooter = styled("div", {
  display: "flex",
  flexDirection: "row",
});

export const CartCouponForm = styled("form", {
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  alignItems: "center",

  "input[type=text]": {
    flex: 1,
    height: "40px",
    padding: "0 16px",
    border: "1px solid $zinc-300",
    borderRadius: "10px",
    outline: "none",
    fontSize: "14px",
    fontWeight: 400,
    color: "$zinc-900",
    backgroundColor: "$white",
  },

  "input[type=submit]": {
    flex: "0 0 100px",
    height: "40px",
    padding: "0 16px",
    border: "1px solid $zinc-300",
    borderRadius: "10px",
    outline: "none",
    fontSize: "14px",
    fontWeight: 400,
    color: "$zinc-100",
    background: "$zinc-900",
    cursor: "pointer",
  },
});
