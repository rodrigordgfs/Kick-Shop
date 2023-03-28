import { styled } from "@/styles";

export const CheckoutContainer = styled("div", {
  flex: 1,
  maxWidth: "100%",
  width: "100%",
  background: "$zinc-100",
});

export const CheckoutWrapper = styled("div", {
  margin: "0 auto",
  maxWidth: 1170,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  padding: "0 16px 32px 16px",
  gap: "32px",

  "@tablet": {
    flexDirection: "column-reverse",
  },
});

export const CheckoutInfoContainer = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "32px",
});

export const CheckoutDetailsContainer = styled("div", {
  flex: "0 0 400px",

  "@tablet": {
    flex: 1,
  },
});
