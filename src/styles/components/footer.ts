import { styled } from "@/styles";

export const FooterContainer = styled("footer", {
  maxWidth: "100vw",
  width: "100%",
  background: "$zinc-900",
});

export const FooterTop = styled("div", {
  margin: "0 auto",
  maxWidth: 1170,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "32px 4px",
  borderBottom: "1px solid $zinc-500",

  "@tablet": {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const FooterInfoStore = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",

  "@tablet": {
    alignItems: "center",
    textAlign: "center",
  },
});

export const FooterInfoStoreList = styled("ul", {
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  gap: "12px",

  li: {
    span: {
      color: "$white",
      textTransform: "uppercase",
      fontWeight: 500,
    },

    p: {
      color: "$zinc-400",
    },
  },
});

export const FooterInfoNetworkIcons = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  marginTop: "16px",

  div: {
    width: "35px",
    height: "35px",
    background: "$zinc-700",
    color: "$white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    cursor: "pointer",

    "&:hover": {
      background: "$zinc-800",
    },
  },

  "@tablet": {
    alignItems: "center",
    justifyContent: "center",
  },
});

export const FooterLinks = styled("ul", {
  display: "flex",
  flexDirection: "row",
  gap: "48px",
  listStyleType: "none",

  "@tablet": {
    margin: "32px 0",
  },

  "@mobile": {
    flexDirection: "column",
  },
});

export const FooterLinksItem = styled("li", {
  display: "flex",
  flexDirection: "column",
  gap: "16px",

  h3: {
    color: "$white",
    textTransform: "uppercase",
    fontWeight: 500,
    fontSize: "16px",
  },

  ul: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    gap: "16px",

    li: {
      color: "$zinc-300",
      cursor: "pointer",

      "&:hover": {
        color: "$zinc-400",
      },
    },
  },

  "@tablet": {
    alignItems: "center",
    textAlign: "center",
    flex: 1,
  },
});

export const FooterNewsletter = styled("div", {
  display: "flex",
  flexDirection: "column",

  h3: {
    color: "$white",
    textTransform: "uppercase",
    fontWeight: 500,
    fontSize: "16px",
  },

  p: {
    color: "$zinc-300",
    fontSize: "14px",
    marginTop: "16px",
  },

  "@tablet": {
    alignItems: "center",
    textAlign: "center",
  },
});

export const FooterNewsletterForm = styled("form", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "8px",

  "input[type='email']": {
    width: "100%",
    height: "40px",
    padding: "0 16px",
    border: 0,
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    background: "$zinc-700",
    color: "$white",
    outline: "none",

    "&::placeholder": {
      color: "$white",
    },
  },

  "input[type='submit']": {
    height: "40px",
    padding: "0 8px",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    background: "$primary",
    color: "$white",
    border: 0,
    outline: "none",
    fontWeight: 500,
  },
});

export const FooterBottom = styled("div", {
  margin: "0 auto",
  maxWidth: 1170,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 4px",

  p: {
    color: "$zinc-300",
  },

  ul: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    li: {
      color: "$zinc-300",
    },
  },

  "@mobile": {
    flexDirection: "column",
    gap: "16px",
  },
});
