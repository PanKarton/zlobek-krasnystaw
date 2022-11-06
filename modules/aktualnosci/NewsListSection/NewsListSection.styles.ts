import styled from 'styled-components';

export const Styledwrapper = styled.div`
  padding-bottom: 2rem;
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
`;
