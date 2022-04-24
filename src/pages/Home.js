import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useGetBurgerRestaurantsByNumberOfRestaurantsQuery } from '../services/burgerRestaurants.js';
import LoadMoreButton from '../components/LoadMoreButton.js';
import BurgerRestaurantsCard from '../components/BurgerRestaurantsCard.js';

export default function Home() {
  const numberOfBurgerRestaurants = useSelector(
    state => state.numberOfBurgerRestaurantsLoaded.value
  );
  const { data, error, isLoading, isSuccess, isError } =
    useGetBurgerRestaurantsByNumberOfRestaurantsQuery(
      numberOfBurgerRestaurants
    );

  return (
    <main>
      <h1>List of Burger Restaurants</h1>
      <StyledList>
        {isLoading && 'Loading...'}
        {isError && error.message}
        {isSuccess &&
          data &&
          data.map(burgerRestaurant => {
            return (
              <StyledListItem key={burgerRestaurant.id}>
                <BurgerRestaurantsCard
                  burgerRestaurantDetail={burgerRestaurant}
                />
              </StyledListItem>
            );
          })}
      </StyledList>
      <LoadMoreButton />
    </main>
  );
}

const StyledList = styled.ul`
  padding: 0;
`;

const StyledListItem = styled.li`
  list-style-type: none;
  margin: 0;
`;
