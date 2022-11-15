import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;
  @media screen and (min-width: 1150px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 5rem;
  }
  @media screen and (min-width: 1550px) {
    gap: 14.5rem;
    padding-bottom: 4rem;
  }
`;

export const StyledArticle = styled.article`
  max-width: 463px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    li {
      .li-flex-wrapper {
        display: flex;
        align-items: center;
        gap: 1rem;
        .icon-wrapper {
          position: relative;
          width: clamp(2.5rem, 9vw, 4.5rem);
          aspect-ratio: 1;
        }
        .content {
          p,
          span {
            display: block;
            font-family: var(--font-primary);
            color: ${({ theme }) => theme.color.text.primary};
            font-size: ${({ theme }) => theme.fontSize.textBase};
            font-weight: 500;
            @media screen and (min-width: 700px) {
              font-size: ${({ theme }) => theme.fontSize.textLG};
            }
            @media screen and (min-width: 1150px) {
              font-size: ${({ theme }) => theme.fontSize.textXL};
            }
          }
          p + p {
            margin-top: 0.25rem;
          }
        }
      }
    }
  }
`;

export const StyledContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  @media screen and (min-width: 1550px) {
    flex-basis: 50%;
  }
  .heading-wrapper {
    color: ${({ theme }) => theme.color.text.primary};
    font-family: var(--font-primary);
    width: min(100%, 55rem);
    h3 {
      font-size: ${({ theme }) => theme.fontSize.text4XL};
      line-height: ${({ theme }) => theme.lineHeight.text2XL};
      font-weight: 500;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.textBase};
      font-weight: 500;
      margin-left: 2px;
      margin-top: 0.25rem;
    }
  }
  .information-clause-wrapper {
    margin-top: 1.5rem;
    color: ${({ theme }) => theme.color.text.primary};
    font-family: var(--font-primary);
    width: min(100%, 55rem);
    font-weight: 500;
    h3 {
      font-size: ${({ theme }) => theme.fontSize.text2XL};
      font-weight: inherit;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.textBase};
      line-height: ${({ theme }) => theme.lineHeight.text3XL};
      margin-top: 0.5rem;
    }
  }
`;
