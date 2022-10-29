import styled from 'styled-components';
export const StyledSection = styled.section`
  padding-bottom: 5rem;
`;

export const StyledArticle = styled.article`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: var(--font-primary);
  color: ${({ theme }) => theme.color.text.primary};
  p.date {
    font-weight: 500;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #aaa;
  }
  .flex-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media screen and (min-width: 700px) {
      flex-direction: row;
      align-items: flex-start;
    }
    .img-wrapper {
      background-color: #ddd;
      flex-basis: 35%;
      aspect-ratio: 1.61;
    }
  }

  /* Narrow when img exists */
  .img-wrapper + .content-wrapper {
    flex-basis: 60%;
  }

  .content-wrapper {
    flex-basis: 70%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
      font-size: ${({ theme }) => theme.fontSize.textBase};
      line-height: ${({ theme }) => theme.lineHeight.textLG};
      font-weight: 500;
      @media screen and (min-width: 700px) {
        font-size: ${({ theme }) => theme.fontSize.textLG};
        line-height: ${({ theme }) => theme.lineHeight.text2XL};
      }
      @media screen and (min-width: 1550px) {
        font-size: ${({ theme }) => theme.fontSize.textXL};
        line-height: ${({ theme }) => theme.lineHeight.text4XL};
      }
    }
  }
`;
