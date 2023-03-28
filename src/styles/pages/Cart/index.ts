import { styled } from "@/styles";
import Image from "next/image";

export const CartContainer = styled("div", {
  flex: 1,
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

export const CartEmptyContainer = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",

  h2: {
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export const CartEmptyCTA = styled("p", {
  fontSize: "16px",
  fontWeight: 500,
  color: "$primary",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  textDecoration: "underline",
  textAlign: "center",
});

export const CartEmptyImage = styled(Image, {
  marginTop: "32px",
  maxWidth: 300,
  maxHeight: 300,
  width: "auto",
  height: "auto",

  "@mobile": {
    maxWidth: 200,
    maxHeight: 200,
  },
});
