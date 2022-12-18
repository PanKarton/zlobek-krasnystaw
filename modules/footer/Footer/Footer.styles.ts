import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  border-top: 0.0625rem solid ${({ theme }) => theme.color.borderDivider};
  & > .flex-wrapper {
    padding-block: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    @media screen and (min-width: 96.875rem) {
      padding-block: 5rem;
    }
    .footer-left {
      width: 100%;
      display: flex;
      justify-content: center;
      @media screen and (min-width: 96.875rem) {
        justify-content: flex-start;
      }
    }

    .footer-right {
      display: none;
      position: relative;
      width: 27.5rem;
      height: 27.5rem;
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
      @media screen and (min-width: 56.25rem) {
        display: block;
      }
      @media screen and (min-width: 96.875rem) {
        width: 33.75rem;
      }
      @media screen and (min-width: 96.875rem) {
        width: 50rem;
        height: 31.25rem;
      }
    }
  }
  .nav-copyrights-wrapper {
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
        @media screen and (min-width: 43.75rem) {
          padding-left: 3rem;
        }
        @media screen and (min-width: 56.25rem) {
          padding-left: 0;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
    .nav-facebook-wrapper {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-family: var(--font-primary);
      h2 {
        font-size: ${({ theme }) => theme.fontSize.textBase};
        font-weight: 400;
        color: ${({ theme }) => theme.color.accentSecondaryDarker};
        @media screen and (min-width: 62.5rem) {
          font-size: ${({ theme }) => theme.fontSize.textLG};
        }
      }
    }
    .nav-copyrights {
      font-family: var(--font-primary);
      font-size: ${({ theme }) => theme.fontSize.textBase};
      max-width: 40ch;
      @media screen and (min-width: 56.25rem) {
        max-width: 35.625rem;
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
