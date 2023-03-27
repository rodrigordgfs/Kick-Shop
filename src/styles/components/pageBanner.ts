import { styled } from "@/styles";

export const PageBannerContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "150px",
  width: "100%",
  gap: "4px",
  backgroundColor: "$zinc-100",

  h3: {
    fontSize: "2rem",
  },

  span: {
    color: "$zinc-600",
    cursor: "pointer",

    "&:hover": {
      color: "$primary",
    },
  },
});
