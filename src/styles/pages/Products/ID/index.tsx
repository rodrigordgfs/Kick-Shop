import { styled } from "@/styles";
import * as Tabs from "@radix-ui/react-tabs";

export const ProductsIDContainer = styled("div", {
  flex: 1,
  margin: "0 auto",
  maxWidth: 1170,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "32px 16px",
  gap: "32px",
});

export const ProductsInfoWrapper = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  gap: "32px",

  "@tablet": {
    flexDirection: "column",
  },
});

export const ProductDetailsWrapper = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  background: "$zinc-100",
  borderRadius: "10px",
  padding: "16px 32px",
});

export const ProductDetailsHeader = styled(Tabs.List, {
  display: "flex",
  flexDirection: "row",
  gap: "32px",

  "@mobile": {
    flexDirection: "column",
    gap: "8px",
    alignItems: "center",
    justifyItems: "center",
  },
});

export const ProductDetailsHeaderItem = styled(Tabs.Trigger, {
  background: "transparent",
  border: 0,
  padding: "16px",
  cursor: "pointer",
  fontSize: "16px",
  color: "$zinc-600",
  fontWeight: 500,

  "&[data-state='active']": {
    borderBottom: "3px solid $primary",
    color: "$zinc-900",
  },
});

export const ProductDetailsContent = styled(Tabs.Content, {
  display: "flex",
  flexDirection: "column",
});

export const ProductDetailsContentDescription = styled("div", {
  padding: "32px",
});
