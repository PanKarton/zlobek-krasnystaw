import styled from 'styled-components';
export const StyledWrapper = styled.div`
  padding-bottom: 3rem;
  translate: 0.125rem -1.25rem;
`;

export const StyledArticle = styled.article`
  font-family: var(--font-primary);
  font-weight: 500;
  .publish-date-wrapper {
    border-bottom: 0.0625rem solid #aaa;
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    .return-anchor {
      margin-left: 0.125rem;
    }
  }
  .flex-wrapper {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;
    @media screen and (min-width: 62.5rem) {
      flex-direction: row;
      align-items: flex-start;
      gap: 2rem;
    }
    .img-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 1.61;
      @media screen and (min-width: 62.5rem) {
        width: auto;
        flex-basis: 30%;
        flex-shrink: 0;
      }
    }
    .content {
      translate: 0 -0.625rem;
      line-height: ${({ theme }) => theme.lineHeight.text2XL};
      max-width: 65ch;
      @media screen and (min-width: 43.75rem) {
        font-size: ${({ theme }) => theme.fontSize.textLG};
        line-height: ${({ theme }) => theme.lineHeight.text4XL};
      }
    }
  }
`;
