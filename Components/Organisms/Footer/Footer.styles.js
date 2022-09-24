import styled from 'styled-components';

export const StyledFooter = styled.footer`
  border-top: 1px solid black;
  padding-top: 2rem;
  background-color: ${({ theme }) => theme.color.white};
  .nav-logo-wrapper {
    width: 10rem;
    margin-inline: auto;
  }
  .nav-bip-wrapper {
    border-block: 1px solid #ccc;
    padding-block: 1.5rem;
    padding-left: 2.25rem;
    color: ${({ theme }) => theme.color.gray500};
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
  .nav-copyrights-wrapper {
    padding-left: 2rem;
    padding-top: 1rem;
    padding-bottom: 0.25rem;
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
      font-family: var(--font-secondary);
      font-size: 0.5rem;
      margin-block: 0.5rem;

      a {
        color: ${({ theme }) => theme.color.pink};
      }
    }
  }
`;
