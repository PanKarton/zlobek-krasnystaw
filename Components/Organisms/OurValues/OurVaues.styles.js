import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  padding-bottom: 2rem;
  & > .max-width {
    margin-inline: auto;
    display: flex;
    justify-content: center;
    padding-inline: 1.5rem;
    & > ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      translate: 0 -7%;
      @media screen and (min-width: 900px) {
        translate: 0 -10%;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
        li {
          width: max-content;
          margin-inline: auto;
        }
      }
      @media screen and (min-width: 1187px) {
        translate: 0 -20%;
      }
    }
  }
`;
