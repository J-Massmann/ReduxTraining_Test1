import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../features/toggleLikeSlice.js';

export default function LikeButton({ burgerRestaurantsId }) {
  const dispatch = useDispatch();
  const likeStatus = useSelector(
    state => state.toggleLike.statusListOfLikes[burgerRestaurantsId]
  );
  return (
    <StyledButton
      aria-label={`click to ${likeStatus ? 'unlike' : 'like'}`}
      onClick={() => dispatch(toggleLike(burgerRestaurantsId))}
    >
      <StyledLike
        color={`${likeStatus ? 'red' : 'black'}`}
        icon="akar-icons:heart"
      />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: none;
  border: none;
`;

const StyledLike = styled(Icon)`
  height: 30px;
  width: 30px;
  &:active {
    transform: scale(0.9);
  }
`;
