import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.color.white};
  padding-bottom: 2rem;

  /* It hides weird 1px height line between this section and wave divider above which I have no idea  */
  &::before {
    content: '';
    position: absolute;
    top: -0.25rem;
    left: 0;
    right: 0;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.color.primary};
  }

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
          @media screen and (min-width: 96.875rem) {
            margin-inline: 0;
          }
        }
      }
      @media screen and (min-width: 75rem) {
        translate: 0 -20%;
      }
    }
  }
`;
