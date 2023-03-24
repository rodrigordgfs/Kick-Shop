import { styled } from "@/styles";

export const FlashSalesContainer = styled("div", {
  margin: "0 auto",
  maxWidth: 1170,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "8px 4px",
});

export const FlashSalesHeader = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  "@tablet": {
    flexDirection: "column",
    gap: "16px",
  },
});

export const FlashSalesHeaderTitle = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "24px",

  h2: {
    fontSize: "32px",
  },

  "@mobile": {
    flexDirection: "column",
    gap: "16px",
  },
});

export const FlashSalesHeaderActions = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",

  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    background: "$primary",
    border: 0,
    color: "$white",
    padding: "8px 16px",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
});

export const FlashSalesBody = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "32px",
  padding: "24px 0",

  "@tablet": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@mobile": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});
