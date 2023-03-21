import {
  FooterBottom,
  FooterContainer,
  FooterInfoNetworkIcons,
  FooterInfoStore,
  FooterInfoStoreList,
  FooterLinks,
  FooterLinksItem,
  FooterNewsletter,
  FooterNewsletterForm,
  FooterTop,
} from "@/styles/components/footer";
import Logo from "@/assets/logo-white.svg";
import Image from "next/image";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaCcPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { MdPix } from "react-icons/md";

export function Footer() {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterInfoStore>
          <Image src={Logo} alt="" width={150} height={60} />
          <FooterInfoStoreList>
            <li>
              <span>Address</span>
              <p>Pedras Brancas 616 - Camaquã/RS</p>
            </li>
            <li>
              <span>Phone</span>
              <p>(51) 9 9999 9999</p>
            </li>
            <li>
              <span>Email</span>
              <p>contact@kickshop.com</p>
            </li>
            <FooterInfoNetworkIcons>
              <div>
                <BsFacebook size={18} />
              </div>
              <div>
                <BsTwitter size={18} />
              </div>
              <div>
                <BsInstagram size={18} />
              </div>
              <div>
                <BsYoutube size={18} />
              </div>
            </FooterInfoNetworkIcons>
          </FooterInfoStoreList>
        </FooterInfoStore>
        <FooterLinks>
          <FooterLinksItem>
            <h3>Quick Link</h3>
            <ul>
              <li>About</li>
              <li>Shop</li>
              <li>Special Offer</li>
              <li>New Arrival</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </FooterLinksItem>
          <FooterLinksItem>
            <h3>Account</h3>
            <ul>
              <li>My Account</li>
              <li>Order History</li>
              <li>Address Book</li>
              <li>Wishlist</li>
              <li>Coupom Code</li>
              <li>Login</li>
              <li>Registration</li>
            </ul>
          </FooterLinksItem>
          <FooterLinksItem>
            <h3>Support</h3>
            <ul>
              <li>Help Center</li>
              <li>How to buy</li>
              <li>Track your order</li>
              <li>Store Location</li>
              <li>Return & Refund Policy</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </FooterLinksItem>
        </FooterLinks>
        <FooterNewsletter>
          <h3>Newsletter</h3>
          <p>Subscribe to get $20 off on your first order</p>
          <FooterNewsletterForm>
            <input type="email" placeholder="Enter your email" />
            <input type="submit" value="Subscribe" />
          </FooterNewsletterForm>
        </FooterNewsletter>
      </FooterTop>
      <FooterBottom>
        <p>&copy; KickShop 2023. All Rights Reserved</p>
        <ul>
          <li>
            <FaCcPaypal size={32} />
          </li>
          <li>
            <FaCcVisa size={32} />
          </li>
          <li>
            <FaCcMastercard size={32} />
          </li>
          <li>
            <MdPix size={32} />
          </li>
        </ul>
      </FooterBottom>
    </FooterContainer>
  );
}
