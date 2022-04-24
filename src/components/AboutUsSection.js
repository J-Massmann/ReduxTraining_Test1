import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHidden } from '../features/toggleAboutUsSectionText';

export default function AboutUsSection({ SectionDetails }) {
  const dispatch = useDispatch();
  const currentHidenStatus = useSelector(
    state => state.toggleHideText.isTextHidden[SectionDetails.id]
  );
  console.log(currentHidenStatus);
  return (
    <section>
      <StyledButton onClick={() => dispatch(toggleHidden(SectionDetails.id))}>
        <h2>{SectionDetails.name}</h2>
        <UnderlineText>Click to see more</UnderlineText>
      </StyledButton>
      <p hidden={!currentHidenStatus}>{SectionDetails.text}</p>
    </section>
  );
}

const StyledButton = styled.button`
  border: none;
  background: none;
`;

const UnderlineText = styled.p`
  padding: 0;
  margin-top: -10px;
  color: grey;
`;
