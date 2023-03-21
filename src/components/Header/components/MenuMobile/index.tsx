import { SettingsContext } from "@/contexts/Settings";
import { MenuActionsIcon, MenuTablet } from "@/styles/components/Header/header";
import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { SlMagnifier } from "react-icons/sl";

export function MenuMobile() {
  const { toogleDrawer } = useContext(SettingsContext);

  function handleMenu() {
    toogleDrawer();
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
