import { styled } from "@/styles";

export const PageBanner = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "150px",
  width: "100%",
  gap: "4px",
  backgroundColor: "$zinc-100",

  h3: {
    fontSize: "2rem",
  },

  span: {
    color: "$zinc-600",
    cursor: "pointer",

    "&:hover": {
      color: "$primary",
    },
  },
});

export const ShopContainer = styled("div", {
  margin: "0 auto",
  maxWidth: 1170,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "32px 0",
  gap: "32px",
});

export const ShopProductsFilterContainer = styled("div", {
  "@tablet": {
    display: "none",
  },

  "@mobile": {
    display: "none",
  },
});
