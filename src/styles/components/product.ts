import { styled } from "@/styles";

export const ProductContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "16px",
  border: "1px solid $zinc-300",
  borderRadius: "16px",
  cursor: "pointer",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",

  "&:hover": {
    background: "$zinc-100",
  },
});

export const ProductImage = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  background: "$zinc-200",
  borderRadius: "16px",
  padding: "16px",
  position: "relative",
});

export const ProductPercentDiscount = styled("span", {
  position: "absolute",
  top: "16px",
  right: "16px",
  background: "$primary",
  color: "$white",
  padding: "4px 8px",
  borderRadius: "8px",
  fontSize: "12px",
});

export const ProductTitle = styled("h3", {
  fontSize: "16px",
  textAlign: "center",
  marginTop: "8px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "200px",
});

export const ProductPrices = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
  marginTop: "4px",

  "span:first-child": {
    fontSize: "16px",
    color: "$primary",
    fontWeight: 500,
  },

  "span:last-child": {
    fontSize: "14px",
    color: "$zinc-400",
    textDecoration: "line-through",
  },
});

export const ProductRating = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "4px",
  marginTop: "4px",

  span: {
    fontSize: "12px",
    color: "$zinc-400",
  },
});
