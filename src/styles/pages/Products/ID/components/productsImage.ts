import { styled } from "@/styles";
import Image from "next/image";

export const ProductsImagesContainer = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  gap: "16px",

  "@tablet": {
    flexDirection: "column-reverse",
  },
});

export const ProductImagePreviewContainer = styled("div", {
  maxWidth: "100px",
  width: "100%",
  display: "flex",
  gap: "16px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "@tablet": {
    maxWidth: "100%",
    flexDirection: "row",
  },
});

export const ProductCardImagePreviewContainer = styled("div", {
  variants: {
    active: {
      true: {
        border: "2px solid $primary",
      },
    },
  },
  width: "100%",
  height: "100px",
  borderRadius: "8px",
  cursor: "pointer",
  border: "1px solid $zinc-300",
  transition: "all 0.2s ease-in-out",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "&:hover": {
    background: "$zinc-100",
  },

  "@tablet": {
    height: "75px",
  },
});

export const ProductCardImagePreview = styled(Image, {
  maxWidth: "75px",
  maxHeight: "75px",
  width: "auto",
  height: "auto",

  "@tablet": {
    maxWidth: "50px",
    maxHeight: "50px",
  },
});

export const ProductImageContainer = styled("div", {
  flex: 1,
  width: "100%",
  height: "450px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid $zinc-300",
  borderRadius: "16px",
  position: "relative",
  background: "$zinc-100",

  "@tablet": {
    flex: "none",
  },
});

export const ProductCardPercentDiscount = styled("span", {
  position: "absolute",
  top: "16px",
  right: "16px",
  background: "$primary",
  color: "$white",
  padding: "4px 8px",
  borderRadius: "8px",
  fontSize: "16px",
});

export const ProductCardImage = styled(Image, {
  maxWidth: "300px",
  maxHeight: "400px",
  width: "auto",
  height: "auto",

  "@tablet": {
    maxWidth: "200px",
    maxHeight: "300px",
  },
});
