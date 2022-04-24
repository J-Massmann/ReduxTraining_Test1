import styled from 'styled-components';
import { Icon } from '@iconify/react';

export default function BurgerRestaurantMenu({ burgerRestaurantDetails }) {
  return (
    <MenuWrapper>
      <p>Hamburger</p>
      <Icon
        icon={
          burgerRestaurantDetails === 'micro'
            ? 'akar-icons:check-box'
            : 'akar-icons:circle-x'
        }
      />
      <p>Cheeseburger</p>
      <Icon
        icon={
          burgerRestaurantDetails === 'planning'
            ? 'akar-icons:check-box'
            : 'akar-icons:circle-x'
        }
      />
      <p>Veggieburger</p>
      <Icon
        icon={
          burgerRestaurantDetails === 'brew-pub'
            ? 'akar-icons:check-box'
            : 'akar-icons:circle-x'
        }
      />
    </MenuWrapper>
  );
}

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 3px;
`;
