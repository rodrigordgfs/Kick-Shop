import { styled } from "@/styles";
import Slider from "react-slick";

export const SliderContainer = styled(Slider, {
  width: "100%",
});

export const SliderItemContainer = styled("div", {
  maxWidth: "100vw",
  width: "100%",
  display: "flex",
  backgroundColor: "$zinc-200",
});

export const SliderItem = styled("div", {
  margin: "0 auto",
  maxWidth: 1170,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  padding: "80px 4px",

  "@tablet": {
    flexDirection: "column-reverse",
  },
});

export const SliderItemInfo = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "16px",

  h2: {
    fontWeight: 700,
    fontSize: "34px",
    textTransform: "uppercase",
  },

  div: {
    p: {
      textTransform: "uppercase",
      fontSize: "14px",
    },
  },

  "@tablet": {
    marginTop: "24px",
    h2: {
      textAlign: "center",
    },

    div: {
      p: {
        textAlign: "center",
      },
    },
  },
});

export const SliderItemButtomContainer = styled("div", {
  display: "flex",

  button: {
    backgroundColor: "$primary",
    color: "$white",
    border: 0,
    padding: "14px 32px",
    borderRadius: "20px",
    textTransform: "uppercase",
    fontWeight: "bold",
    cursor: "pointer",
  },

  "@tablet": {
    justifyContent: "center",
  },
});

export const SliderItemImageContainer = styled("div", {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
