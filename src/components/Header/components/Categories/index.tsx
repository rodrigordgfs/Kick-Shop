import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BiCaretDown } from "react-icons/bi";
import { AiOutlineRight } from "react-icons/ai";
import {
  CategoriesButton,
  CategoriesList,
} from "@/styles/components/Header/components/categories";
import { CategoriesContext } from "@/contexts/Categories";
import { useContext } from "react";
import * as Popover from "@radix-ui/react-popover";

export function Categories() {
  const { categories } = useContext(CategoriesContext);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <CategoriesButton>
          <BsFillGrid3X3GapFill size={24} />
          <span>Categorias</span>
          <BiCaretDown size={24} />
        </CategoriesButton>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content>
          <CategoriesList>
            {categories.map((category) => (
              <li key={category.id}>
                <p>{category.name}</p>
                <AiOutlineRight size={18} />
              </li>
            ))}
          </CategoriesList>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
