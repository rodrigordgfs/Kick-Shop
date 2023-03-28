import { styled } from "../..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minWidth: "100vw",
  background: "$white",
});

export const HomeContainer = styled("main", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  maxWidth: "100vw",
  width: "100%",
});
