import { styled } from "@/styles";

export const DrawerContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxHeight: "100vh",
  height: "100%",
  width: "300px",
  padding: "16px",
});

export const DrawerHeader = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  color: "$zinc-500",
  borderBottom: "1px solid $zinc-300",
  paddingBottom: "16px",

  p: {
    fontWeight: "bold",
    fontSize: "18px",
    color: "$zinc-900",
  },
});

export const DrawerBody = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "16px 0",
  flex: 1,
});
