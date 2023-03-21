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
} from "@/styles/components/Header/header";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { MdPerson } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { MenuMobile } from "./components/MenuMobile";
import { Categories } from "./components/Categories";

export function Header() {
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
              <li>
                Entre <span>ou</span> Cadastre-se
              </li>
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
            <MenuActionsIcon>
              <IoMdCart size={24} />
              <span>4</span>
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
              <li>Inicio</li>
              <li>Loja</li>
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
