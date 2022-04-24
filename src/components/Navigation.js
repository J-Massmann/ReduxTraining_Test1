import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navigation() {
  return (
    <NavigationWrapper>
      <button>
        <Link to={'/'}>Home</Link>
      </button>
      <button>
        <Link to={'/imageslideshow'}>Image Slideshow</Link>
      </button>
      <button>
        <Link to={'/aboutus'}>About us</Link>
      </button>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: end;
  gap: 5px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
