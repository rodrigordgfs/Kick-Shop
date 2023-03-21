import { styled } from "@/styles";
import * as Tabs from "@radix-ui/react-tabs";

export const TabsProductsContainer = styled("div", {
  margin: "0 auto",
  maxWidth: 1170,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "8px 4px",
});

export const TabsProductsHeader = styled(Tabs.List, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  background: "$zinc-200",

  "@tablet": {
    flexDirection: "column",
  },
});

export const TabsProductsHeaderItem = styled(Tabs.Trigger, {
  background: "transparent",
  border: "none",
  padding: "16px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: 500,
  color: "$zinc-700",

  "&[data-state='active']": {
    borderBottom: "3px solid $primary",
    color: "$zinc-900",
  },
});

export const TabsProductsContent = styled(Tabs.Content, {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "32px",

  "@tablet": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@mobile": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});

export const TabSpacer = styled("div", {
  height: "32px",
});

export const ViewAllProductsButtonContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "32px 0",

  button: {
    background: "$zinc-900",
    color: "$white",
    border: "none",
    padding: "16px 32px",
    borderRadius: "20px",
    fontSize: "16px",
    cursor: "pointer",

    "&:hover": {
      background: "$zinc-800",
    },
  },
});
