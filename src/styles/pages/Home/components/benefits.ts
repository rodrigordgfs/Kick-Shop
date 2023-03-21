import { styled } from "@/styles";

export const BenefitsContainer = styled("div", {
  margin: "0 auto",
  maxWidth: 1170,
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "32px",
  padding: "80px 4px",

  "@tablet": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  "@mobile": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});

export const BenefitsItem = styled("div", {
  display: "flex",
  gap: "8px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  border: "1px solid $zinc-300",
  borderRadius: "8px",
  padding: "24px",

  h3: {
    fontWeight: 500,
  },

  p: {
    color: "$zinc-500",
  },
});

export const BenefitsItemIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$primary",
});
