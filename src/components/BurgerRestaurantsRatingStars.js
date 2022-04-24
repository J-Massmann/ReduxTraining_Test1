import styled from 'styled-components';

export default function BurgerRestaurantsRatingStars({ restaurantRating }) {
  return (
    <Stars
      style={{ '--rating': restaurantRating }}
      aria-label={`The rating for this Burger Restaurant is ${restaurantRating}`}
    />
  );
}

const Stars = styled.div`
  --percent: calc(var(--rating) / 5 * 100%);
  display: inline-block;
  font-size: 1.5rem;
  font-family: Times;
  line-height: 1;
  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(
      90deg,
      gold var(--percent),
      white var(--percent)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
