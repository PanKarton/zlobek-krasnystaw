import styled from 'styled-components';

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  .max-width {
    margin-inline: auto;
  }
  article {
    padding-top: 1.5rem;
    padding-bottom: clamp(2rem, 100vw, 4rem);
    padding-inline: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: clamp(1.5rem, 3.5vw, 2.5rem);
      font-family: var(--font-primary);
    }
    p {
      margin-top: 1rem;
      font-family: var(--font-secondary);
      font-size: clamp(1rem, 2.2vw, 1.5rem);
      line-height: 1.4;
      letter-spacing: 1px;
      max-width: 70ch;
      @media screen and (min-width: 900px) {
        line-height: 1.8;
      }
    }
  }
`;
