import Drawer from "react-modern-drawer";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import "react-modern-drawer/dist/index.css";
import { SettingsContext } from "@/contexts/Settings";
import {
  DrawerBody,
  DrawerContainer,
  DrawerHeader,
} from "@/styles/pages/Products/components/drawerFilterProduct";
import { ProductsFilter } from "@/components/Products/ProductsFilter";

export function DrawerFilterProduct() {
  const { isDrawerFilterProductOpen, toogleDrawerFilterProduct } =
    useContext(SettingsContext);

  return (
    <Drawer
      open={isDrawerFilterProductOpen}
      onClose={toogleDrawerFilterProduct}
      direction="left"
      size={300}
    >
      <DrawerContainer>
        <DrawerHeader>
          <p>Filtros</p>
          <AiOutlineClose size={18} onClick={toogleDrawerFilterProduct} />
        </DrawerHeader>
        <DrawerBody>
          <ProductsFilter />
        </DrawerBody>
      </DrawerContainer>
    </Drawer>
  );
}
