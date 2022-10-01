import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  padding-bottom: 2rem;
  & > ul {
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    translate: 0 -5%;
    @media screen and (min-width: 960px) {
      translate: 0 -30%;
    }
    @media screen and (min-width: 900px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
  }
`;
