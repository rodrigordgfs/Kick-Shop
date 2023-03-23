import { styled } from "@/styles";
import * as Accordion from "@radix-ui/react-accordion";

export const ExpandableHeader = styled(Accordion.Trigger, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  border: "1px solid $zinc-300",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  padding: "12px 16px",
  alignItems: "center",
  cursor: "pointer",
  color: "$zinc-500",
  gap: "16px",

  p: {
    fontSize: "16px",
    textTransform: "uppercase",
    fontWeight: 500,
    color: "$zinc-900",
  },
});

export const ExpandableContent = styled(Accordion.Content, {
  border: "1px solid $zinc-300",
});
