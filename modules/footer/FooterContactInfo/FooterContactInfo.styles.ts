import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-block: 2rem 1.5rem;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  flex-basis: 18rem;
  color: ${({ theme }) => theme.color.contrast};

  @media screen and (min-width: 34rem) {
    flex-basis: 38rem;
  }
  @media screen and (min-width: 62.5rem) {
    flex-basis: 27rem;
    flex-shrink: 0;
  }

  ul.flex-list {
    display: grid;
    gap: 2rem;
    @media screen and (min-width: 34rem) {
      grid-template-columns: 1fr 1fr;
      column-gap: 1rem;
      row-gap: 3rem;
    }

    li {
      /* Typography for bip and contact */
      a {
        color: inherit;
      }
      h3 {
        font-size: ${({ theme }) => theme.fontSize.text3XL};
        line-height: ${({ theme }) => theme.lineHeight.text9XL};
        font-weight: 500;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: ${({ theme }) => theme.fontSize.textBase};
        line-height: ${({ theme }) => theme.lineHeight.textBase};
        font-weight: 500;
      }

      .flex-wrapper {
        display: flex;
        align-items: baseline;
        gap: 0.5rem;
        .icon-wrapper {
          flex-basis: 1rem;
          svg {
            color: ${({ theme }) => theme.color.accentSecondary};
            font-size: ${({ theme }) => theme.fontSize.text2XL};
          }
          &--pin {
            svg {
              font-size: ${({ theme }) => theme.fontSize.text2XL};
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
        width: 100%;
        margin-left: 1.75rem;
        padding-top: 1.5rem;
        @media screen and (min-width: 34rem) {
          padding-top: 0;
        }
        &::after {
          position: absolute;
          content: '';
          width: 80%;
          left: 0;
          top: 0;
          border-top: 0.0625rem solid ${({ theme }) => theme.color.borderDivider};
          @media screen and (min-width: 34rem) {
            display: none;
          }
        }
        .bip-button-wrapper {
          position: relative;
          aspect-ratio: 2.81;
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
