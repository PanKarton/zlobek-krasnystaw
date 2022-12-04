import styled from 'styled-components';

export const Styledwrapper = styled.div`
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  & > button {
    margin-top: 1rem;
  }
  @media screen and (min-width: 1550px) {
    flex-direction: row-reverse;
    padding-bottom: 8rem;
    gap: 10rem;
    & > button {
      position: absolute;
      bottom: 3rem;
      left: 50%;
      translate: -50% 0;
    }
  }
`;
