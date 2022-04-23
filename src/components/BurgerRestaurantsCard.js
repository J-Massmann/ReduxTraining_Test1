import styled from 'styled-components';
import BurgerRestaurantMenu from './BurgerRestaurantMenu';
import BurgerRestaurantsRatingStars from './BurgerRestaurantsRatingStars';
import LikeButton from './LikeButton';

export default function BurgerRestaurantsCard({ burgerRestaurantDetail }) {
  console.log(burgerRestaurantDetail);
  return (
    <>
      <SingelBurgerRestaurantWrapper>
        <SectionWrapper>
          <h2>{burgerRestaurantDetail.name}</h2>
          <LikeButton burgerRestaurantsId={burgerRestaurantDetail.id} />
        </SectionWrapper>
        <BurgerRestaurantsRatingStars restaurantRating={3.5} />
        <SectionWrapper>
          <BurgerRestaurantMenu
            burgerRestaurantDetails={burgerRestaurantDetail.brewery_type}
          />
        </SectionWrapper>
      </SingelBurgerRestaurantWrapper>
    </>
  );
}

const SingelBurgerRestaurantWrapper = styled.article`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, auto);
  margin-top: 10px;
  border: 1px solid black;
  background-color: lightgray;
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
