import { styled } from "@/styles";

export const CountdownContainer = styled("ul", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "4px",
  listStyleType: "none",
});

export const CountdownItemNumber = styled("li", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  borderRadius: "8px",
  background: "$primary",
  color: "$white",
  fontWeight: 500,
});

export const CountdownItemDivider = styled("li", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  color: "$zinc-500",
});
