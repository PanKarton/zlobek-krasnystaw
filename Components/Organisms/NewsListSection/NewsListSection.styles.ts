import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  margin-top: 4rem;
  padding-bottom: 2rem;
  & > .flex-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    & > button {
      margin-top: 1rem;
    }
    @media screen and (min-width: 1550px) {
      flex-direction: row;
      padding-bottom: 8rem;
      & > button {
        position: absolute;
        bottom: 3rem;
        left: 50%;
        translate: 0 -50%;
      }
    }
  }
`;
