import { styled } from "@/styles";

export const ProductDetailsReviewContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "32px",
  padding: "32px",

  "@tablet": {
    flexDirection: "column",
  },
});

export const ProductDetailsReviewComments = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const ProductDetailsReviewItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "16px",
  background: "$white",
  borderRadius: "10px",
});

export const ProductDetailsReviewItemHeader = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  alignItems: "center",
});

export const ProductDetailsReviewItemHeaderImage = styled("div", {
  height: "40px",
  width: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  background: "$zinc-200",
  color: "$zinc-400",
});

export const ProductDetailsReviewItemHeaderInfo = styled("div", {
  display: "flex",
  flexDirection: "column",

  p: {
    fontSize: "16px",
    fontWeight: 500,
  },
});

export const ProductDetailsReviewItemComment = styled("p", {
  fontSize: "14px",
  fontWeight: 400,
  color: "$zinc-600",
});

export const ProductDetailsNewReviewContainer = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const ProductDetailsNewReviewRating = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "4px",

  p: {
    fontSize: "14px",
    fontWeight: 500,
  },
});

export const ProductDetailsNewReviewForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "8px",

  div: {
    display: "flex",
    flexDirection: "row",
    gap: "8px",

    "input[type='text'], input[type='email']": {
      flex: 1,
      height: "40px",
      padding: "0 16px",
      border: "1px solid $zinc-300",
      borderRadius: "10px",
      outline: "none",
      fontSize: "14px",
      fontWeight: 400,
      color: "$zinc-900",
      backgroundColor: "$white",
    },

    "@tablet": {
      flexDirection: "column",

      "input[type='text'], input[type='email']": {
        flex: "none",
      },
    },
  },

  textarea: {
    flex: 1,
    padding: "16px",
    border: "1px solid $zinc-300",
    borderRadius: "10px",
    outline: "none",
    fontSize: "14px",
    fontWeight: 400,
    color: "$zinc-900",
    backgroundColor: "$white",
  },

  "input[type='submit']": {
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    color: "$white",
    backgroundColor: "$zinc-900",
  },
});
