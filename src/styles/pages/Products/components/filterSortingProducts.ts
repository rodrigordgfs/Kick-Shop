import { styled } from "@/styles";
import * as Select from "@radix-ui/react-select";

export const FilterSortingProductsTrigger = styled(Select.Trigger, {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "8px",
  color: "$zinc-900",
  border: "1px solid $zinc-900",
  padding: "8px 16px",
  borderRadius: "10px",
  cursor: "pointer",
  background: "$white",
  fontSize: "16px",
});

export const FilterSortingProductsContent = styled(Select.Viewport, {
  background: "$zinc-200",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "8px",
  cursor: "pointer",
  borderRadius: "10px",
  border: "1px solid $zinc-900",
});
