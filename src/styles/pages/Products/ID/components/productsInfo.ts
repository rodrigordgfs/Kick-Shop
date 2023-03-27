import { styled } from "@/styles";
import { AiFillStar } from "react-icons/ai";

export const ProductsInfoContainer = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const ProductsPriceRating = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  alignItems: "center",
});

export const ProductsPrice = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  alignItems: "center",
  paddingRight: "16px",
  borderRight: "1px solid $zinc-300",

  "span:first-child": {
    fontSize: "24px",
    fontWeight: 600,
    color: "$primary",
  },

  "span:last-child": {
    fontSize: "14px",
    fontWeight: 400,
    color: "$zinc-400",
    textDecoration: "line-through",
  },
});

export const ProductsRating = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  alignItems: "center",
  color: "$zinc-700",
  fontSize: "14px",

  "span:nth-child(3)": {
    fontSize: "20px",
    fontWeight: "bold",
  },
});

export const ProductsRatingStar = styled(AiFillStar, {
  color: "$yellow-500",
});

export const ProductsDescriptionContainer = styled("div", {
  padding: "16px 0",
  borderTop: "1px solid $zinc-300",
  borderBottom: "1px solid $zinc-300",

  p: {
    fontSize: "14px",
    fontWeight: 400,
    color: "$zinc-700",
    lineHeight: "20px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
  },
});

export const ProductActionsCounter = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  alignItems: "center",
  border: "1px solid $zinc-300",
  borderRadius: "10px",

  "div:first-child, div:last-child": {
    height: "40px",
    width: "40px",
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
      fontSize: "18px",
      fontWeight: 500,
      color: "$zinc-700",
      padding: "0 8px",
    },
  },
});

export const ProductActionsContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  paddingBottom: "16px",
  borderBottom: "1px solid $zinc-300",
});

export const ProductAddToCard = styled("button", {
  height: "40px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 600,
  color: "$white",
  backgroundColor: "$primary",
  transition: "all 0.3s ease-in-out",

  "&:hover": {
    backgroundColor: "$zinc-900",
  },

  "&:disabled": {
    backgroundColor: "$zinc-300",
    cursor: "not-allowed",
  },
});

export const ProductBuyNow = styled("button", {
  height: "40px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 600,
  color: "$white",
  backgroundColor: "$zinc-900",
  transition: "all 0.3s ease-in-out",

  "&:hover": {
    backgroundColor: "$zinc-800",
  },
});

export const ProductWishListSocialNetworkContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "16px",
  alignItems: "center",
  justifyContent: "space-between",

  "div:first-child": {
    button: {
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10px",
      border: "none",
      outline: "none",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: 500,
      padding: "0 16px",
      color: "$zinc-900",
      backgroundColor: "$zinc-200",
    },
  },
});

export const ProductsSocialNetwork = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  alignItems: "center",

  div: {
    height: "40px",
    width: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    cursor: "pointer",
    backgroundColor: "$zinc-200",
    color: "$zinc-900",
    transition: "all 0.3s ease-in-out",

    "&:hover": {
      color: "$primary",
    },
  },
});
