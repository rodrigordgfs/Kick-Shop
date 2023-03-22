import { SettingsContext } from "@/contexts/Settings";
import { MenuActionsIcon, MenuTablet } from "@/styles/components/Header";
import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { SlMagnifier } from "react-icons/sl";

export function MenuMobile() {
  const { toogleDrawerMenu } = useContext(SettingsContext);

  function handleMenu() {
    toogleDrawerMenu();
  }

  return (
    <MenuTablet>
      <MenuActionsIcon>
        <SlMagnifier size={24} />
      </MenuActionsIcon>
      <MenuActionsIcon onClick={handleMenu}>
        <BiMenu size={24} />
      </MenuActionsIcon>
    </MenuTablet>
  );
}
