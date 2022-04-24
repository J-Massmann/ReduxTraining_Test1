import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SwitchPictureButton from '../components/SwitchPictureButton.js';
import Pictures from '../data/Pictures.js';

export default function ImageSlideShow() {
  const currentPicture = useSelector(state => state.changePicture.initialIndex);
  return (
    <main>
      <Header>Image Slide Show</Header>
      <ContentWrapper>
        <SwitchPictureButton />
        <img
          alt={`${Pictures[currentPicture].name}`}
          src={`${Pictures[currentPicture].image}`}
          width={200}
          height={300}
        />
        <SwitchPictureButton next="next" />
      </ContentWrapper>
    </main>
  );
}

const Header = styled.h1`
  text-align: center;
`;

const ContentWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
