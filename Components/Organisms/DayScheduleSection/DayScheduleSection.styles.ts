import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  padding-block: 3rem 4rem;
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.text.primary};
  @media screen and (min-width: 1150px) {
    padding-block: 4rem 6rem;
  }
  @media screen and (min-width: 1550px) {
    padding-block: 4rem 9rem;
  }
  .flex-wrapper {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 4rem;
    @media screen and (min-width: 900px) {
      flex-direction: row;
      gap: 8rem;
    }
    @media screen and (min-width: 1550px) {
      gap: 10rem;
    }
    ul {
      width: 100%;
      @media screen and (min-width: 900px) {
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
          @media screen and (min-width: 900px) {
            font-size: ${({ theme }) => theme.fontSize.textLG};
          }
          .hour-span {
            /* Prevents breaklines */
            white-space: nowrap;
            font-weight: 600;
          }
        }
      }
    }
    .img-wrapper {
      position: relative;
      width: 10rem;
      aspect-ratio: 0.82;
      @media screen and (min-width: 900px) {
        width: 15rem;
      }
      @media screen and (min-width: 1550px) {
        width: 20rem;
      }
    }
  }
`;
