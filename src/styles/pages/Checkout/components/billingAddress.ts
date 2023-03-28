import { styled } from "@/styles";

export const BillingAddressForm = styled("form", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "16px",
  padding: "0 16px 16px 16px",
  width: "100%",
  maxWidth: "100%",

  "input[type='text'], input[type='tel'], input[type='email']": {
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

  "@mobile": {
    gridTemplateColumns: "1fr",
  },
});
