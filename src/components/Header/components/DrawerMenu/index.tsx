import { SettingsContext } from "@/contexts/Settings";
import {
  DrawerBody,
  DrawerContainer,
  DrawerHeader,
  ButtonLoginRegister,
  DrawerMenuList,
} from "@/styles/components/Header/components/drawer";
import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

export function DrawerMenu() {
  const { isDrawerMenuOpen, toogleDrawerMenu } = useContext(SettingsContext);

  return (
    <Drawer
      open={isDrawerMenuOpen}
      onClose={toogleDrawerMenu}
      direction="left"
      size={300}
    >
      <DrawerContainer>
        <DrawerHeader>
          <p>Menu</p>
          <AiOutlineClose size={18} onClick={toogleDrawerMenu} />
        </DrawerHeader>
        <DrawerBody>
          <ButtonLoginRegister>
            <span>Entre</span> ou <span>Cadastre-se</span>
          </ButtonLoginRegister>
          <DrawerMenuList>
            <li>Inicio</li>
            <li>Loja</li>
            <li>Ofertas Especiais</li>
            <li>Sobre</li>
            <li>FAQS</li>
            <li>Contate-nos</li>
          </DrawerMenuList>
        </DrawerBody>
      </DrawerContainer>
    </Drawer>
  );
}
