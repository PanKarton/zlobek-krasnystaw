import styled from 'styled-components';

export const StyledFooter = styled.footer`
  border-top: 1px solid black;
  padding-top: 2rem;
  background-color: ${({ theme }) => theme.color.white};
  & > .flex-wrapper {
    display: flex;
    margin-inline: auto;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
    @media screen and (min-width: 700px) {
      justify-content: center;
      gap: 5rem;
    }
    .footer-left {
      .nav-logo-wrapper {
        width: 10rem;
        margin-inline: auto;
      }
      .nav-bip-wrapper {
        border-block: 1px solid #ccc;
        padding-block: 1.5rem;
        padding-left: 2.25rem;
        color: ${({ theme }) => theme.color.gray500};
        @media screen and (min-width: 700px) {
          border-bottom: none;
        }
        h2 {
          font-family: var(--font-primary);
          line-height: 1;
        }
        p {
          font-family: var(--font-secondary);
        }
        .nav-bip-image-wrapper {
          margin-top: 0.75rem;
          position: relative;
          width: 12rem;
          aspect-ratio: 2.73;
        }
      }
    }

    .footer-right {
      display: none;
      position: relative;
      background-color: #303030;
      width: clamp(260px, 40vw, 660px);
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
    }
  }
  .nav-copyrights-wrapper {
    position: relative;
    padding-left: 2rem;
    padding-top: 1rem;
    padding-bottom: 0.25rem;
    @media screen and (min-width: 700px) {
      border-top: 1px solid #aaa;
      padding-top: 1.5rem;
    }
    & > .max-width {
      margin-inline: auto;
      .flex-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
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
      h2 {
        font-size: 1.125rem;
        font-family: var(--font-secondary);
        font-weight: 400;
        color: ${({ theme }) => theme.color.pink};
      }
    }
    .nav-copyrights {
      margin-top: 0.5rem;
      font-family: var(--font-secondary);
      font-size: 1rem;
      .text-pink {
        color: ${({ theme }) => theme.color.pink};
      }
    }
    .nav-author-signature {
      display: block;
      text-align: right;
      font-family: var(--font-secondary);
      font-size: 0.5rem;
      margin-block: 0.5rem;
      a {
        color: ${({ theme }) => theme.color.pink};
      }
    }
  }
`;
