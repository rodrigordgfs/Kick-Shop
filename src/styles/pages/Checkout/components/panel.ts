import { styled } from "@/styles";

export const PanelContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
  background: "$white",
  borderRadius: "10px",
});

export const PanelHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  padding: "16px",
  background: "$zinc-100",
  fontWeight: 500,
  fontSize: "18px",
  margin: "16px 16px 0 16px",
  borderRadius: "10px",
});

export const PanelContent = styled("div", {
  width: "100%",
  maxWidth: "100%",
});
