import {
  FilterQuantityProductsContent,
  FilterQuantityProductsTrigger,
} from "@/styles/pages/Products/components/filterQuantityProducts";
import * as Select from "@radix-ui/react-select";
import { AiOutlineDown } from "react-icons/ai";

export function FilterQuantityProducts() {
  const quantityOptions = [
    { value: "10", label: "Show 10" },
    { value: "20", label: "Show 20" },
    { value: "30", label: "Show 30" },
    { value: "40", label: "Show 40" },
    { value: "50", label: "Show 50" },
    { value: "100", label: "Show 100" },
  ];
  return (
    <Select.Root>
      <FilterQuantityProductsTrigger>
        <Select.Value placeholder="Show 10" />
        <Select.Icon className="SelectIcon">
          <AiOutlineDown size={18} />
        </Select.Icon>
      </FilterQuantityProductsTrigger>

      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton />
          <FilterQuantityProductsContent>
            {quantityOptions.map((option) => (
              <Select.Item key={option.value} value={option.value}>
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </FilterQuantityProductsContent>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
