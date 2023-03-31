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
import { formatCurrencyBRL } from "@/utils/currencyFormat";
import { useContext } from "react";
import { ProductsContext } from "@/contexts/Products";

export function SliderProducts() {
  const { products } = useContext(ProductsContext);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderContainer {...sliderSettings}>
      {products &&
        products.map((item) => (
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
                <Image
                  src={item.images[0].url}
                  alt=""
                  width={189}
                  height={250}
                />
              </SliderItemImageContainer>
            </SliderItem>
          </SliderItemContainer>
        ))}
    </SliderContainer>
  );
}
