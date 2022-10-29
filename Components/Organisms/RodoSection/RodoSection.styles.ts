import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-block: 2rem 5rem;
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.text.primary};
  .flex-wrapper {
    p {
      font-size: ${({ theme }) => theme.fontSize.textBase};
      line-height: ${({ theme }) => theme.lineHeight.text4XL};
      max-width: 65ch;
      @media screen and (min-width: 1150px) {
        font-size: ${({ theme }) => theme.fontSize.textXL};
      }
    }
    h3 {
      font-size: ${({ theme }) => theme.fontSize.text2XL};
      line-height: ${({ theme }) => theme.lineHeight.text4XL};
      font-weight: 500;
      margin-top: 3rem;
      @media screen and (min-width: 1150px) {
        font-size: ${({ theme }) => theme.fontSize.text3XL};
      }
    }
    ul {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
`;
