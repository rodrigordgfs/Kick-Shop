import {
  HeaderBadge,
  HeaderBadgeContainer,
  HeaderBadgeDiscount,
  HeaderContainer,
  HeaderBadgeActions,
  HeaderBadgeActionsDivider,
} from "@/styles/components/header";

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
    </HeaderContainer>
  );
}
