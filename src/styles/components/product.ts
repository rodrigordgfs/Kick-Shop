import { styled } from "@/styles";

export const ProductContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  //   justifyContent: "center",
  padding: "16px",
  border: "1px solid $zinc-300",
  borderRadius: "16px",
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
});

export const ProductTitle = styled("h3", {
  fontSize: "16px",
  textAlign: "center",
  margin: "8px 0",
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
