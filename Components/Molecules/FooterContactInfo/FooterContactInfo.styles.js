import styled from 'styled-components';

export const StyledSection = styled.section`
  color: ${({ theme }) => theme.color.textDarkerGray};
  margin-block: 2rem 1.5rem;
  font-family: var(--font-primary);
  width: 18rem;
  @media screen and (min-width: 1440px) {
    width: 34rem;
  }
  .flex-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    @media screen and (min-width: 1440px) {
      flex-direction: row;
      flex-wrap: wrap;
      row-gap: 3rem;
      li {
        flex: 1 0 47%;
      }
    }
    li {
      /* Typography for bip and contact */
      h3 {
        font-size: 28px;
        font-weight: 500;
      }
      p {
        font-size: 16px;
      }

      & > .flex-wrapper {
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        .icon-wrapper {
          flex-basis: 1rem;
          svg {
            color: ${({ theme }) => theme.color.pink};
            font-size: 1.5rem;
          }
          &--pin {
            svg {
              font-size: 1.625rem;
            }
          }
        }
        .text-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }
      /* BIP */
      .nav-bip-wrapper {
        border-top: 1px solid #aaa;
        width: 100%;
        margin-top: 0.25rem;
        padding-top: 1rem;
        margin-left: 1.75rem;
        @media screen and (min-width: 1400px) {
          border: none;
          padding-top: 0;
        }
        .bip-button-wrapper {
          position: relative;
          aspect-ratio: 3;
          width: 75%;
          margin-top: 0.75rem;
        }
      }
    }
  }
`;
