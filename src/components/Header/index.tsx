import {
  HeaderBadge,
  HeaderBadgeContainer,
  HeaderBadgeDiscount,
  HeaderContainer,
  HeaderBadgeActions,
  HeaderBadgeActionsDivider,
  HeaderMainContainer,
  HeaderMain,
  SearchForm,
  SearchFormContainer,
  MenuActionsContainer,
  MenuActionsIcon,
  HeaderMenuContainer,
  HeaderMenu,
  Menu,
  ContactUs,
  HeaderMenuMobileContainer,
  HeaderMainMobileContainer,
} from "@/styles/components/Header";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { MdPerson } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { MenuMobile } from "./components/MenuMobile";
import { Categories } from "./components/Categories";
import { useRouter } from "next/router";
import { LoginRegister } from "../LoginRegister";
import { useContext } from "react";
import { CartContext } from "@/contexts/Cart";

export function Header() {
  const router = useRouter();
  const { cartQuantity } = useContext(CartContext);

  return (
    <HeaderContainer>
      <HeaderBadgeContainer>
        <HeaderBadge>
          <HeaderBadgeDiscount>
            Ganhe <span>20% de desconto</span> em seu primeiro pedido
          </HeaderBadgeDiscount>
          <HeaderBadgeActions>
            <ul>
              <li>Localização da loja</li>
              <HeaderBadgeActionsDivider />
              <li>Acompanhe seu pedido</li>
              <HeaderBadgeActionsDivider />
              <LoginRegister>
                <li>
                  Entre <span>ou</span> Cadastre-se
                </li>
              </LoginRegister>
            </ul>
          </HeaderBadgeActions>
        </HeaderBadge>
      </HeaderBadgeContainer>
      <HeaderMainContainer>
        <HeaderMain>
          <Image src={Logo} alt="" width={150} height={60} />
          <SearchFormContainer>
            <SearchForm>
              <input type="text" placeholder="Pesquise o produto aqui ..." />
              <input type="submit" value="Procurar" />
            </SearchForm>
          </SearchFormContainer>
          <MenuActionsContainer>
            <MenuActionsIcon>
              <MdPerson size={24} />
            </MenuActionsIcon>
            <MenuActionsIcon>
              <AiOutlineHeart size={24} />
            </MenuActionsIcon>
            <MenuActionsIcon onClick={() => router.push("/cart")}>
              <IoMdCart size={24} />
              {cartQuantity > 0 && <span>{cartQuantity}</span>}
            </MenuActionsIcon>
          </MenuActionsContainer>
          <HeaderMainMobileContainer>
            <MenuMobile />
          </HeaderMainMobileContainer>
        </HeaderMain>
      </HeaderMainContainer>
      <HeaderMenuContainer>
        <HeaderMenu>
          <Categories />
          <Menu>
            <ul>
              <li onClick={() => router.push("/")}>Inicio</li>
              <li onClick={() => router.push("/products")}>Produtos</li>
              <li>Ofertas especiais</li>
              <li>Sobre</li>
              <li>FAQS</li>
            </ul>
          </Menu>
          <ContactUs>
            Preciso de ajuda? <span>Contate-nos</span>
          </ContactUs>
          <HeaderMenuMobileContainer>
            <MenuMobile />
          </HeaderMenuMobileContainer>
        </HeaderMenu>
      </HeaderMenuContainer>
    </HeaderContainer>
  );
}
