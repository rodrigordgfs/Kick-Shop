import { styled } from "..";

export const HeaderContainer = styled("header", {
  maxWidth: "100vw",
  width: "100%",
});

export const HeaderBadgeContainer = styled("div", {
  background: "$primary",
});

export const HeaderBadge = styled("div", {
  margin: "0 auto",
  maxWidth: 1170,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "8px 4px",
});

export const HeaderBadgeDiscount = styled("p", {
  color: "$white",

  span: {
    fontWeight: "bold",
  },
});

export const HeaderBadgeActions = styled("div", {
  ul: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "row",
    gap: 8,

    li: {
      color: "$white",
      cursor: "pointer",

      span: {
        opacity: "0.7",
      },

      "&:hover": {
        opacity: "0.7",
      },
    },
  },
});

export const HeaderBadgeActionsDivider = styled("li", {
  background: "$white",
  width: 2,
  height: 20,
  opacity: "0.3",
});

export const HeaderMainContainer = styled("div", {
  maxWidth: "100vw",
  width: "100%",
  borderBottom: "1px",
  borderBottomColor: "$zinc-200",
  borderBottomStyle: "solid",
});

export const HeaderMain = styled("div", {
  margin: "0 auto",
  maxWidth: 1170,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 4px",
  gap: "16px",
});

export const SearchFormContainer = styled("div", {
  flex: 1,
});

export const SearchForm = styled("form", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",

  "input[type='text']": {
    background: "$zinc-100",
    color: "$zinc-900",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    border: "none",
    outline: "none",
    height: "50px",
    padding: "0 24px",
    width: "100%",
    maxWidth: "400px",
    fontSize: "16px",
  },

  "input[type='submit']": {
    background: "$zinc-900",
    color: "$white",
    border: "none",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    padding: "0 20px",
    cursor: "pointer",
    fontSize: "16px",
  },
});

export const MenuActionsContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  alignItems: "center",
});

export const MenuActionsIcon = styled("div", {
  color: "$zinc-900",
  borderRadius: "50%",
  display: "flex",
  height: "35px",
  width: "35px",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",

  "&:hover": {
    background: "$zinc-100",
  },
});

export const MenuActionCart = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  background: "$zinc-100",
  borderRadius: "8px",
  padding: "8px 16px",
  cursor: "pointer",

  div: {
    span: {
      background: "$primary",
      color: "$white",
      padding: "2px 10px",
      borderRadius: "4px",
    },
  },
});
