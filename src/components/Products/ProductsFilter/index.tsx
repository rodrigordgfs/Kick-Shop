import { useContext } from "react";
import { Expandable } from "@/components/Expandable";
import {
  CategoriesFilter,
  PriceFilter,
  ProductsFilterContainer,
  RatingFilter,
  ResetFiltersButton,
} from "@/styles/pages/Products/components/productsFilter";
import { CategoriesContext } from "@/contexts/Categories";
import { AiOutlineRight } from "react-icons/ai";
import StarRatings from "react-star-ratings";

export function ProductsFilter() {
  const { categories } = useContext(CategoriesContext);

  return (
    <ProductsFilterContainer>
      <Expandable title="Categories">
        <CategoriesFilter>
          {categories.map((category) => (
            <li key={category.id}>
              {category.name}
              <AiOutlineRight size={18} />
            </li>
          ))}
        </CategoriesFilter>
      </Expandable>
      <Expandable title="Rating">
        <RatingFilter>
          <div>
            <input type="radio" name="rating" id="5_star" value={5} />
            <label htmlFor="5_star">
              <StarRatings
                rating={5}
                starRatedColor="#FF6650"
                starDimension="24px"
                starSpacing="1px"
              />
            </label>
          </div>
          <div>
            <input type="radio" name="rating" id="4_star" value={4} />
            <label htmlFor="4_star">
              <StarRatings
                rating={4}
                starRatedColor="#FF6650"
                starDimension="24px"
                starSpacing="1px"
              />
            </label>
          </div>
          <div>
            <input type="radio" name="rating" id="3_star" value={3} />
            <label htmlFor="3_star">
              <StarRatings
                rating={3}
                starRatedColor="#FF6650"
                starDimension="24px"
                starSpacing="1px"
              />
            </label>
          </div>
          <div>
            <input type="radio" name="rating" id="2_star" value={2} />
            <label htmlFor="2_star">
              <StarRatings
                rating={2}
                starRatedColor="#FF6650"
                starDimension="24px"
                starSpacing="1px"
              />
            </label>
          </div>
          <div>
            <input type="radio" name="rating" id="1_star" value={1} />
            <label htmlFor="1_star">
              <StarRatings
                rating={1}
                starRatedColor="#FF6650"
                starDimension="24px"
                starSpacing="1px"
              />
            </label>
          </div>
        </RatingFilter>
      </Expandable>
      <Expandable title="Price">
        <PriceFilter>
          <input type="range" name="price" id="price" min={0} max={1000} />
          <label htmlFor="price">
            <span>R$ 0,00</span>
            <span>R$ 1.000,00 +</span>
          </label>
        </PriceFilter>
      </Expandable>
      <ResetFiltersButton>Reset filters</ResetFiltersButton>
    </ProductsFilterContainer>
  );
}
