import { useDispatch } from 'react-redux';
import { incrementByAmount } from '../features/loadMoreBurgerRestaurantsSlice';

export default function LoadMoreButton() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(incrementByAmount(2))}>
      load more burger restaurants
    </button>
  );
}
