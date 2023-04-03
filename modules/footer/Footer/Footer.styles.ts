import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  border-top: 0.0625rem solid ${({ theme }) => theme.color.borderDivider};
  & > .grid-wrapper {
    padding-block: 2rem;
    display: grid;
    justify-content: center;
    row-gap: 1rem;

    @media screen and (min-width: 62.5rem) {
      grid-template-columns: 27rem 1fr;
      grid-template-rows: 27rem 5rem;
      column-gap: 4rem;
      padding-block: 4rem;
    }

    @media screen and (min-width: 96.875rem) {
      grid-template-columns: 27rem 1fr 50rem;
      grid-template-rows: 31.25rem 5rem;
      justify-content: space-between;
      padding-block: 5rem;
    }

    .map-wrapper {
      /* border: 1px solid red; */
      display: none;
      position: relative;
      width: 100%;
      max-width: 40rem;
      height: 27rem;
      &::after,
      &::before {
        position: absolute;
        content: '';
        width: 3rem;
        height: 3rem;
      }
      &::before {
        border-left: 0.125rem solid ${({ theme }) => theme.color.borderDivider};
        border-top: 0.125rem solid ${({ theme }) => theme.color.borderDivider};
        top: -1rem;
        left: -1rem;
      }
      &::after {
        border-right: 0.125rem solid ${({ theme }) => theme.color.borderDivider};
        border-bottom: 0.125rem solid ${({ theme }) => theme.color.borderDivider};
        bottom: -1rem;
        right: -1rem;
      }
      @media screen and (min-width: 62.5rem) {
        display: block;
        grid-column: 2/3;
        grid-row: 1/3;
      }

      @media screen and (min-width: 96.875rem) {
        grid-column: 3/4;
        display: flex;
        justify-content: flex-end;
        max-width: 100%;
        height: 31.25rem;
      }
    }
  }
  .footer-copyrights-wrapper {
    position: relative;
    padding-block: 1.5rem;
    display: flex;
    border-top: 0.0625rem solid ${({ theme }) => theme.color.borderDivider};
    align-items: center;
    & > .max-width-1440 {
      padding-right: 0;
      .flex-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        @media screen and (min-width: 62.5rem) {
          padding-left: 0;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
    .fb-button-wrapper {
      position: relative;
      .footer-facebook-wrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: ${({ theme }) => theme.fontFamily.primary};
        h2 {
          font-size: ${({ theme }) => theme.fontSize.textBase};
          font-weight: 400;
          color: ${({ theme }) => theme.color.accentSecondaryDarker};
          @media screen and (min-width: 62.5rem) {
            font-size: ${({ theme }) => theme.fontSize.textLG};
          }
        }
      }
      .annotation-wrapper {
        position: absolute;
        top: 50%;
        right: -0.25rem;
        translate: 100% -50%;
      }
    }
    .footer-copyrights {
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-size: ${({ theme }) => theme.fontSize.textBase};
      max-width: 40ch;
      @media screen and (min-width: 62.5rem) {
        max-width: 34rem;
      }
      @media screen and (min-width: 96.875rem) {
        max-width: max-content;
      }
      .text-pink {
        color: ${({ theme }) => theme.color.accentSecondaryDarker};
      }
    }
  }
`;
