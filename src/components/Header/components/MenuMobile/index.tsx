import { MenuActionsIcon, MenuTablet } from "@/styles/components/header";
import { BiMenu } from "react-icons/bi";
import { SlMagnifier } from "react-icons/sl";

export function MenuMobile() {
  return (
    <MenuTablet>
      <MenuActionsIcon>
        <SlMagnifier size={24} />
      </MenuActionsIcon>
      <MenuActionsIcon>
        <BiMenu size={24} />
      </MenuActionsIcon>
    </MenuTablet>
  );
}
