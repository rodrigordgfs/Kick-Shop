import {
  BenefitsContainer,
  BenefitsItem,
  BenefitsItemIcon,
} from "@/styles/pages/Home/components/benefits";
import { FaShippingFast, FaParachuteBox } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

export function Benefits() {
  return (
    <BenefitsContainer>
      <BenefitsItem>
        <BenefitsItemIcon>
          <FaShippingFast size={32} />
        </BenefitsItemIcon>
        <h3>Frete Grátis</h3>
        <p>Para compras acima de R$ 200,00</p>
      </BenefitsItem>
      <BenefitsItem>
        <BenefitsItemIcon>
          <FaParachuteBox size={32} />
        </BenefitsItemIcon>
        <h3>Devolução Grátis</h3>
        <p>Devolva em até 7 dias</p>
      </BenefitsItem>
      <BenefitsItem>
        <BenefitsItemIcon>
          <MdSupportAgent size={32} />
        </BenefitsItemIcon>
        <h3>Suporte 24/7</h3>
        <p>Contate nos 24 horas por dia</p>
      </BenefitsItem>
      <BenefitsItem>
        <BenefitsItemIcon>
          <RiSecurePaymentLine size={32} />
        </BenefitsItemIcon>
        <h3>Pagamento 100% seguro</h3>
        <p>Seu pagamento está seguro</p>
      </BenefitsItem>
    </BenefitsContainer>
  );
}
