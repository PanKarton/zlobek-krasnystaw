import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  padding-bottom: 2rem;
  & > .max-width-1440 {
    display: flex;
    justify-content: center;
    & > ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      translate: 0 -7%;
      @media screen and (min-width: 56.25rem) {
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
      @media screen and (min-width: 75rem) {
        translate: 0 -20%;
      }
    }
  }
`;
