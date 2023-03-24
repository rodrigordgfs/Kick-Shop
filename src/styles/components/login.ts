import { styled } from "@/styles";

export const LoginContainer = styled("div", {
  padding: "18px 0",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  h1: {
    fontSize: "32px",
    fontWeight: 500,
  },

  p: {
    fontSize: "16px",
    fontWeight: 400,
    color: "$zinc-500",
  },
});

export const LoginForm = styled("form", {
  marginTop: "16px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",

  "input[type='email'], input[type='password']": {
    width: "100%",
    height: "48px",
    padding: "0 16px",
    borderRadius: "8px",
    border: "1px solid $zinc-300",
    fontSize: "16px",
    fontWeight: 400,
    color: "$zinc-600",

    "&::placeholder": {
      color: "$zinc-600",
    },

    "&:active, &:focus": {
      outline: "1px solid $primary",
    },
  },

  "input[type='submit']": {
    width: "100%",
    height: "48px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    fontWeight: 500,
    color: "$white",
    backgroundColor: "$primary",
    cursor: "pointer",
  },
});

export const RememberMeContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",

  "input[type='checkbox']": {
    width: "16px",
    height: "16px",
    borderRadius: "4px",
    border: "1px solid $zinc-300",
    backgroundColor: "$white",
    cursor: "pointer",
  },
});

export const LoginOptionsContainer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "16px",

  a: {
    fontSize: "16px",
    fontWeight: 500,
    color: "$primary",
    textDecoration: "none",
    cursor: "pointer",

    "&:hover": {
      textDecoration: "underline",
    },
  },
});
