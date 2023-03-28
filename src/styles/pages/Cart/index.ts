import { styled } from "@/styles";

export const CartContainer = styled("div", {
  margin: "0 auto",
  maxWidth: 1170,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "32px 16px",
  gap: "32px",

  "@tablet": {
    flexDirection: "column",
  },
});
