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
  MenuActionCart,
} from "@/styles/components/header";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { MdPerson } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";

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
              <input type="text" placeholder="Search product here ..." />
              <input type="submit" value="Search" />
            </SearchForm>
          </SearchFormContainer>
          <MenuActionsContainer>
            <MenuActionsIcon>
              <MdPerson size={24} />
            </MenuActionsIcon>
            <MenuActionsIcon>
              <AiOutlineHeart size={24} />
            </MenuActionsIcon>
            <MenuActionCart>
              <IoMdCart size={24} />
              <div>
                <div>
                  <span>4</span>
                </div>
                <p>My Cart</p>
              </div>
            </MenuActionCart>
          </MenuActionsContainer>
        </HeaderMain>
      </HeaderMainContainer>
    </HeaderContainer>
  );
}
