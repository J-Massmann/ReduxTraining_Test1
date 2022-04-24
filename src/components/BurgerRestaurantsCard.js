import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import BurgerRestaurantMenu from './BurgerRestaurantMenu';
import BurgerRestaurantsRatingStars from './BurgerRestaurantsRatingStars';
import LikeButton from './LikeButton';
import LocationModal from './LocationModal';

export default function BurgerRestaurantsCard({ burgerRestaurantDetail }) {
  const [showModal, setShowModal] = useState(false);
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
          <LocationButton
            aria-label="click to see the address of the burger restaurant"
            onClick={() => setShowModal(true)}
          >
            <LocationIcon icon="akar-icons:location" />
          </LocationButton>
        </SectionWrapper>
        <LocationModal
          showModal={showModal}
          handleCloseModal={() => setShowModal(false)}
          locationDetails={burgerRestaurantDetail}
        />
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

const LocationButton = styled.button`
  background: none;
  border: none;
`;

const LocationIcon = styled(Icon)`
  height: 30px;
  width: 30px;
`;
