import { styled } from "@/styles";

export const CategoriesButton = styled("div", {
  display: "flex",
  alignItems: "center",
  color: "$white",
  background: "$primary",
  padding: "14px",
  cursor: "pointer",

  span: {
    margin: "0 42px 0 16px",
  },
});

export const CategoriesList = styled("ul", {
  width: "211px",
  background: "$zinc-100",
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",

  li: {
    padding: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    color: "$zinc-400",

    p: {
      color: "$zinc-900",
      textTransform: "capitalize"
    },

    "&:hover": {
      background: "$primary",
      color: "$white",

      p: {
        color: "$white",
      },
    },
  },
});
