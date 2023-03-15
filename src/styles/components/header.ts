import { styled } from "..";

export const HeaderContainer = styled("header", {
  maxWidth: "100vw",
  width: "100%",
  boxShadow: " 0px 5px 14px -1px rgba(0,0,0,0.1)",
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

  "@media only screen and (max-device-width: 510px)": {},
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

  span: {
    marginTop: "-30px",
    marginRight: "-20px",
    position: "absolute",
    background: "$primary",
    color: "$white",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "14px",
  },

  "&:hover": {
    background: "$zinc-100",
  },
});

export const HeaderMenuContainer = styled("div", {
  maxWidth: "100vw",
  width: "100%",
});

export const HeaderMenu = styled("div", {
  margin: "0 auto",
  maxWidth: 1170,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 4px",
  gap: "16px",
});

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

export const Menu = styled("nav", {
  ul: {
    display: "flex",
    gap: "16px",
    listStyleType: "none",

    li: {
      textTransform: "uppercase",
      fontWeight: 500,
      cursor: "pointer",
      color: "$zinc-900",

      "&:hover": {
        color: "$primary",
      },
    },

    "li:nth-child(1)": {
      color: "$primary",
    },
  },
});

export const ContactUs = styled("div", {
  color: "$zinc-900",
  span: {
    color: "$primary",
    fontWeight: 500,
    cursor: "pointer",
  },
});
