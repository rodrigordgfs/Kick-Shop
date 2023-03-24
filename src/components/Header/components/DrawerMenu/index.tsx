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
import { useRouter } from "next/router";
import { LoginRegister } from "@/components/LoginRegister";

export function DrawerMenu() {
  const router = useRouter();
  const { isDrawerMenuOpen, toogleDrawerMenu } = useContext(SettingsContext);

  function handleToogleDrawerMenu(route: string) {
    toogleDrawerMenu();
    router.push(route);
  }

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
          <LoginRegister>
            <ButtonLoginRegister onClick={() => toogleDrawerMenu()}>
              <span>Entre</span> ou <span>Cadastre-se</span>
            </ButtonLoginRegister>
          </LoginRegister>
          <DrawerMenuList>
            <li onClick={() => handleToogleDrawerMenu("/")}>Inicio</li>
            <li onClick={() => handleToogleDrawerMenu("/products")}>
              Produtos
            </li>
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
