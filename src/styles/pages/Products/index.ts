import { styled } from "@/styles";

export const ProductsContainer = styled("div", {
  margin: "0 auto",
  maxWidth: 1170,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "32px 0",
  gap: "32px",
});

export const ProductsProductsFilterContainer = styled("div", {
  maxWidth: "250px",
  width: "100%",

  "@tablet": {
    display: "none",
  },

  "@mobile": {
    display: "none",
  },
});
