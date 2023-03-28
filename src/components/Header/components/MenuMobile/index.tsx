import { CartContext } from "@/contexts/Cart";
import { SettingsContext } from "@/contexts/Settings";
import { MenuActionsIcon, MenuTablet } from "@/styles/components/Header";
import { useRouter } from "next/router";
import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import { SlMagnifier } from "react-icons/sl";

export function MenuMobile() {
  const { toogleDrawerMenu } = useContext(SettingsContext);
  const { cartQuantity } = useContext(CartContext);

  const router = useRouter();

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
      <MenuActionsIcon onClick={() => router.push("/cart")}>
        <IoMdCart size={24} />
        {cartQuantity > 0 && <span>{cartQuantity}</span>}
      </MenuActionsIcon>
    </MenuTablet>
  );
}
