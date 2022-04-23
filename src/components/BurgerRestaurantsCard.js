import styled from 'styled-components';
import LikeButton from './LikeButton';

export default function BurgerRestaurantsCard({ burgerRestaurantDetail }) {
  return (
    <>
      <SingelBurgerRestaurantWrapper>
        <h2>{burgerRestaurantDetail.name}</h2>
        <LikeButton burgerRestaurantsId={burgerRestaurantDetail.id} />
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
