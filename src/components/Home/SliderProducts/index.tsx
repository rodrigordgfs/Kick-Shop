import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  SliderItemContainer,
  SliderContainer,
  SliderItem,
  SliderItemImageContainer,
  SliderItemInfo,
  SliderItemButtomContainer,
} from "@/styles/pages/Home/components/sliderProducts";
import Image from "next/image";
import { PRODUCT_IMAGES } from "@/utils/productImages";
import { formatCurrencyBRL } from "@/utils/currencyFormat";

export function SliderProducts() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const items = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image: PRODUCT_IMAGES[0].image,
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      image: PRODUCT_IMAGES[1].image,
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      image: PRODUCT_IMAGES[2].image,
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      image: PRODUCT_IMAGES[3].image,
    },
    {
      id: 5,
      title: "John Hardy Women's Legends",
      price: 695,
      image: PRODUCT_IMAGES[4].image,
    },
  ];

  return (
    <SliderContainer {...sliderSettings}>
      {items.map((item) => (
        <SliderItemContainer key={item.id}>
          <SliderItem>
            <SliderItemInfo>
              <h2>{item.title}</h2>

              <div>
                <p>From</p>
                <h2>{formatCurrencyBRL.format(item.price)}</h2>
              </div>

              <SliderItemButtomContainer>
                <button>Shop Now</button>
              </SliderItemButtomContainer>
            </SliderItemInfo>
            <SliderItemImageContainer>
              <Image src={item.image} alt="" width={189} height={250} />
            </SliderItemImageContainer>
          </SliderItem>
        </SliderItemContainer>
      ))}
    </SliderContainer>
  );
}
