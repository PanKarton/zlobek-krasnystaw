import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-block: 2rem 1.5rem;
  font-family: var(--font-primary);
  width: 18rem;
  color: ${({ theme }) => theme.color.contrast};

  @media screen and (min-width: 43.75rem) {
    width: 100%;
  }
  @media screen and (min-width: 96.875rem) {
    width: 34rem;
  }
  .flex-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    @media screen and (min-width: 43.75rem) {
      flex-direction: row;
      flex-wrap: wrap;
      width: 85%;
      column-gap: 0;
      margin-inline: auto;
      li {
        flex: 1 0 47%;
      }
    }
    @media screen and (min-width: 56.25rem) {
      flex-direction: column;
      row-gap: 1rem;
      margin-inline: 0;

      li {
        flex: 1 0 99%;
      }
    }
    @media screen and (min-width: 96.875rem) {
      flex-direction: row;
      row-gap: 3rem;
      li {
        flex: 1 0 47%;
      }
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
        border-top: 0.0625rem solid ${({ theme }) => theme.color.borderDivider};
        width: 100%;
        padding-top: 2rem;
        margin-left: 1.75rem;
        @media screen and (min-width: 87.5rem) {
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
