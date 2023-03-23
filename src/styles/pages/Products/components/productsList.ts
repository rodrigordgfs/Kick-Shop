import { styled } from "@/styles";

export const ProductsListContainer = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

export const ProductsListHeader = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "24px",

  "@tablet": {
    flexDirection: "column",
  },
});

export const ProductsListWrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "32px",

  "@tablet": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@mobile": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});

export const ProductListFilterContainer = styled("div", {
  flex: 1,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",

  "@mobile": {
    flexDirection: "column",
  },
});

export const FilterButtonMobile = styled("div", {
  display: "none",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
  color: "$zinc-900",
  border: "1px solid $zinc-900",
  padding: "9px 16px",
  borderRadius: "10px",
  cursor: "pointer",

  "@tablet": {
    display: "flex",
  },

  "@mobile": {
    display: "flex",
  },
});

export const FilterOrderingProducts = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "16px",

  "@mobile": {
    justifyContent: "center",
  },
});
