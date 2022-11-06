import { StarsBackground } from 'Components/Atoms/StarsBackground/StarsBackground';
import styled from 'styled-components';
import { useLayette } from './useLayette';

const StyledSection = styled.section`
  position: relative;
  padding-block: 2rem 3rem;
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.text.primary};
  @media screen and (min-width: 700px) {
    padding-block: 2rem 4rem;
  }
  @media screen and (min-width: 1150px) {
    padding-block: 2rem 5rem;
  }
`;

const StyledOrderedList = styled.ol`
  width: 100%;
  padding-left: 1rem;
  @media screen and (min-width: 700px) {
    padding-left: 1.5rem;
    width: min(100%, 31rem);
  }
  li + li {
    margin-top: 1rem;
  }
  li {
    p {
      display: flex;
      gap: 0.5rem;
      font-size: ${({ theme }) => theme.fontSize.textBase};
      line-height: ${({ theme }) => theme.lineHeight.textBase};
      @media screen and (min-width: 700px) {
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
    }
    ::marker {
      font-size: ${({ theme }) => theme.fontSize.textBase};
      font-weight: 500;
      @media screen and (min-width: 700px) {
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
    }
  }
`;

export const LayetteSection = () => {
  const layette = useLayette();

  return (
    <StyledSection>
      <StarsBackground />
      <div className="max-width-1440">
        <StyledOrderedList>
          {layette.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </StyledOrderedList>
      </div>
    </StyledSection>
  );
};
