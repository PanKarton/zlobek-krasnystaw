import styled from 'styled-components';

export const StyledSection = styled.section`
  color: ${({ theme }) => theme.color.text.primary};
  margin-block: 2rem 1.5rem;
  font-family: var(--font-primary);
  width: 18rem;
  @media screen and (min-width: 700px) {
    width: 100%;
  }
  @media screen and (min-width: 1550px) {
    width: 34rem;
  }
  .flex-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    @media screen and (min-width: 700px) {
      flex-direction: row;
      flex-wrap: wrap;
      li {
        flex: 1 0 47%;
      }
    }
    @media screen and (min-width: 900px) {
      flex-direction: column;
      row-gap: 1rem;
      li {
        flex: 1 0 99%;
      }
    }
    @media screen and (min-width: 1550px) {
      flex-direction: row;
      row-gap: 3rem;
      li {
        flex: 1 0 47%;
      }
    }
    li {
      /* Typography for bip and contact */
      h3 {
        font-size: 28px;
        line-height: 1.2;
        font-weight: 500;
      }
      p {
        font-size: 16px;
        line-height: 1.5;
      }

      & > .flex-wrapper {
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        .icon-wrapper {
          flex-basis: 1rem;
          svg {
            color: ${({ theme }) => theme.color.icons.primary};
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
        position: relative;
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
          a {
            display: block;
            position: relative;
            height: 100%;
          }
        }
      }
    }
  }
`;
