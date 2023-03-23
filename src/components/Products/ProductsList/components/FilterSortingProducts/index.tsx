import {
  FilterSortingProductsContent,
  FilterSortingProductsTrigger,
} from "@/styles/pages/Products/components/filterSortingProducts";
import * as Select from "@radix-ui/react-select";
import { AiOutlineDown } from "react-icons/ai";

export function FilterSortingProducts() {
  const sortingOptions = [
    { label: "Desc", value: "desc" },
    { label: "Asc", value: "asc" },
    { label: "Highest Price", value: "highest_price" },
    { label: "Lowest Price", value: "lowest_price" },
  ];
  return (
    <Select.Root>
      <FilterSortingProductsTrigger>
        <Select.Value placeholder="Desc" />
        <Select.Icon className="SelectIcon">
          <AiOutlineDown size={18} />
        </Select.Icon>
      </FilterSortingProductsTrigger>

      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton />
          <FilterSortingProductsContent>
            {sortingOptions.map((option) => (
              <Select.Item key={option.value} value={option.value}>
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </FilterSortingProductsContent>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
