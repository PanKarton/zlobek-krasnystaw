import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.color.white};
  & > .flex-wrapper {
    padding-block: 3rem;
    display: flex;
    margin-inline: auto;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 700px) {
      justify-content: center;
      gap: 5rem;
    }
    @media screen and (min-width: 1150px) {
      padding-block: 5rem;
    }

    .footer-right {
      display: none;
      position: relative;
      background-color: #303030;
      width: clamp(240px, calc(45vw - 100px), 660px);
      height: 440px;
      &::after,
      &::before {
        position: absolute;
        content: '';
        width: 3rem;
        height: 3rem;
      }
      &::before {
        border-left: 2px solid #aaa;
        border-top: 2px solid #aaa;
        top: -1rem;
        left: -1rem;
      }
      &::after {
        border-right: 2px solid #aaa;
        border-bottom: 2px solid #aaa;
        bottom: -1rem;
        right: -1rem;
      }
      @media screen and (min-width: 700px) {
        display: block;
      }
      @media screen and (min-width: 1150px) {
        width: 660px;
      }
    }
  }
  .nav-copyrights-wrapper {
    position: relative;
    padding-block: 1.5rem;
    display: flex;
    border-top: 1px solid #aaa;
    align-items: center;
    & > .max-width {
      margin-inline: auto;
      padding-inline: 2.5rem 1.5rem;
      .flex-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        @media screen and (min-width: 700px) {
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
        font-size: 1.125rem;
        font-weight: 400;
        color: ${({ theme }) => theme.color.pink};
      }
    }
    .nav-copyrights {
      font-family: var(--font-primary);
      font-size: 1rem;
      .text-pink {
        color: ${({ theme }) => theme.color.pink};
      }
    }
  }
`;
