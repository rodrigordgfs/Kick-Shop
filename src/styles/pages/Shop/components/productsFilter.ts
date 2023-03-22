import { styled } from "@/styles";

export const ProductsFilterContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "300px",
  width: "100%",
});

export const CategoriesFilter = styled("ul", {
  display: "flex",
  flexDirection: "column",
  listStyleType: "none",

  li: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 16px",
    color: "$zinc-500",
    cursor: "pointer",

    "&:hover": {
      background: "$zinc-100",
    },
  },
});

export const RatingFilter = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "12px 16px",

  div: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    label: {
      paddingLeft: "8px",
    },
  },
});

export const PriceFilter = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "12px 16px",

  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "$zinc-500",
    fontSize: "14px",
  },
});
