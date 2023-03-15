import { styled } from "..";

export const HeaderContainer = styled("div", {
    maxWidth: "100vw",
    width: "100%"
})

export const HeaderBadgeContainer = styled("div", {
  background: "$primary",
  width: "100%",
});

export const HeaderBadge = styled("div", {
  margin: "0 auto",
  maxWidth: 1170,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "8px 4px",
});

export const HeaderBadgeDiscount = styled('p', {
    color: "$white",

    span: {
        fontWeight: 'bold'
    }
})

export const HeaderBadgeActions = styled('div', {
    ul: {
        listStyleType: "none",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        

        li: {
            color: "$white",
            cursor: "pointer",

            span: {
                opacity: '0.7'
            },

            '&:hover': {
                opacity: '0.7'
            }
        }
    }
})

export const HeaderBadgeActionsDivider = styled('li', {
    background: "$white",
    width: 2,
    height: 20,
    opacity: '0.3'
})